// Shared rendering + interaction logic used by every page.
// Each page's own JS file calls Shell.init('pageId') once, then does its
// page-specific rendering using the helpers below.

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', href: 'dashboard.html', icon: 'dashboard', key: 'D' },
  { id: 'roadmap', label: 'Roadmap', href: 'roadmap.html', icon: 'map', key: 'R' },
  { id: 'analytics', label: 'Analytics', href: 'analytics.html', icon: 'chart', key: 'A' },
  { id: 'achievements', label: 'Achievements', href: 'achievements.html', icon: 'trophy', key: 'H' },
  { id: 'favorites', label: 'Favorites', href: 'favorites.html', icon: 'bookmark', key: 'F' },
  { id: 'notes', label: 'Notes', href: 'notes.html', icon: 'note', key: 'N' },
  { id: 'settings', label: 'Settings', href: 'settings.html', icon: 'settings', key: 'S' },
];

const Shell = {
  activePage: null,

  init(pageId) {
    this.activePage = pageId;
    State.init();
    document.documentElement.classList.toggle('reduce-motion', !!STORE.get('prefReduceMotion', false));
    this._renderSidebar();
    this._renderMobileTopbar();
    this._wireMobileMenu();
    this._initCommandPalette();
    this._initKeyboardShortcuts();
    this._ensureToastStack();
  },

  _levelCardHTML() {
    const xp = State.totalXp();
    const lvl = getLevelInfo(xp);
    const r = 22, circ = 2 * Math.PI * r;
    const offset = circ - (lvl.pct / 100) * circ;
    return `
      <div class="level-card">
        <div class="xp-ring">
          <svg width="52" height="52" viewBox="0 0 52 52">
            <circle class="xp-ring-track" cx="26" cy="26" r="${r}" fill="none" stroke-width="4"/>
            <circle class="xp-ring-fill" cx="26" cy="26" r="${r}" fill="none" stroke-width="4"
              stroke-dasharray="${circ}" stroke-dashoffset="${offset}"/>
          </svg>
          <div class="xp-ring-label">${lvl.pct}%</div>
        </div>
        <div class="level-info">
          <div class="level-name">${lvl.name}</div>
          <div class="level-xp">${xp.toLocaleString()} XP${lvl.isMax ? ' · MAX' : ' · ' + (lvl.nextMin - xp) + ' to next'}</div>
        </div>
      </div>
      <div class="streak-pill">${icon('fire', 'nav-icon')} ${State.streak.current} day streak</div>
    `;
  },

  _navHTML() {
    return NAV_ITEMS.map(item => `
      <a class="nav-link ${this.activePage === item.id ? 'active' : ''}" href="${item.href}">
        ${icon(item.icon, 'nav-icon')}<span>${item.label}</span><kbd>g ${item.key.toLowerCase()}</kbd>
      </a>
    `).join('');
  },

  _renderSidebar() {
    const mount = document.getElementById('sidebar-mount');
    if (!mount) return;
    mount.innerHTML = `
      <div class="brand">
        <div class="brand-mark">J</div>
        <div class="brand-text"><strong>Java Backend</strong><span>learning-dashboard</span></div>
      </div>
      ${this._levelCardHTML()}
      <div class="nav-group">
        <div class="nav-label">Navigate</div>
        ${this._navHTML()}
      </div>
      <div class="nav-group">
        <div class="nav-label">Quick actions</div>
        <button class="nav-link" id="open-search-btn" style="width:100%; text-align:left;">
          ${icon('search', 'nav-icon')}<span>Search topics</span><kbd>/</kbd>
        </button>
      </div>
      <div class="sidebar-footer">
        <div class="sidebar-hint">Press <kbd>?</kbd> anytime for keyboard shortcuts.</div>
      </div>
    `;
    document.getElementById('open-search-btn').addEventListener('click', () => this._openPalette());
  },

  _renderMobileTopbar() {
    const mount = document.getElementById('mobile-topbar-mount');
    if (!mount) return;
    mount.innerHTML = `
      <div class="brand"><div class="brand-mark">J</div><div class="brand-text"><strong>Java Backend</strong></div></div>
      <button class="mobile-menu-btn" id="mobile-menu-btn">${icon('menu')}</button>
    `;
  },

  _wireMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (!btn || !sidebar || !backdrop) return;
    const open = () => { sidebar.classList.add('open'); backdrop.classList.add('open'); };
    const close = () => { sidebar.classList.remove('open'); backdrop.classList.remove('open'); };
    btn.addEventListener('click', open);
    backdrop.addEventListener('click', close);
  },

  _ensureToastStack() {
    if (!document.querySelector('.toast-stack')) {
      const el = document.createElement('div');
      el.className = 'toast-stack';
      document.body.appendChild(el);
    }
  },

  toast(message, opts) {
    opts = opts || {};
    const stack = document.querySelector('.toast-stack');
    if (!stack) return;
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = `<span class="icon">${icon(opts.icon || 'sparkles')}</span><span>${message}</span>`;
    stack.appendChild(el);
    setTimeout(() => {
      el.style.transition = 'opacity 250ms ease';
      el.style.opacity = '0';
      setTimeout(() => el.remove(), 260);
    }, opts.duration || 2600);
  },

  confetti() {
    const colors = ['#7B61FF', '#FFB84D', '#2DD4A7', '#5B8DEF', '#FF6B6B'];
    for (let i = 0; i < 24; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = (45 + Math.random() * 10) + 'vw';
      piece.style.top = '10vh';
      piece.style.background = colors[i % colors.length];
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      piece.style.transform = `translateX(${(Math.random() - 0.5) * 300}px)`;
      piece.style.animationDelay = (Math.random() * 150) + 'ms';
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 1400);
    }
  },

  // ---------- Command palette ----------
  _initCommandPalette() {
    const overlay = document.createElement('div');
    overlay.className = 'cmdk-overlay';
    overlay.style.display = 'none';
    overlay.innerHTML = `
      <div class="cmdk-panel glass">
        <div class="cmdk-input-row">
          ${icon('search')}
          <input type="text" placeholder="Search topics, modules, resources…" id="cmdk-input" autocomplete="off"/>
          <kbd style="font-family:var(--font-mono); font-size:11px; color:var(--text-faint);">esc</kbd>
        </div>
        <div class="cmdk-results" id="cmdk-results"></div>
      </div>
    `;
    document.body.appendChild(overlay);
    this._paletteEl = overlay;
    overlay.addEventListener('click', (e) => { if (e.target === overlay) this._closePalette(); });
    const input = overlay.querySelector('#cmdk-input');
    input.addEventListener('input', () => this._paletteSearch(input.value));
  },

  _openPalette() {
    this._paletteEl.style.display = 'flex';
    const input = this._paletteEl.querySelector('#cmdk-input');
    input.value = '';
    input.focus();
    this._paletteSearch('');
  },
  _closePalette() { this._paletteEl.style.display = 'none'; },

  _paletteSearch(q) {
    const results = document.getElementById('cmdk-results');
    q = q.trim().toLowerCase();
    let items = State.allTopicsFlat();
    if (q) {
      items = items.filter(t => t.title.toLowerCase().includes(q) || t.moduleName.toLowerCase().includes(q));
    }
    items = items.slice(0, 8);
    if (!items.length) {
      results.innerHTML = `<div class="cmdk-empty">No topics match "${q}"</div>`;
      return;
    }
    results.innerHTML = items.map(t => `
      <a class="cmdk-item" href="roadmap.html?topic=${encodeURIComponent(t.id)}">
        ${icon(State.isDone(t.id) ? 'check-circle' : 'code')}
        <span>${t.title}</span>
        <span class="cmdk-mod">${t.moduleName}</span>
      </a>
    `).join('');
  },

  // ---------- Keyboard shortcuts ----------
  _initKeyboardShortcuts() {
    let pendingG = false;
    let pendingTimer = null;
    document.addEventListener('keydown', (e) => {
      const tag = (e.target.tagName || '').toLowerCase();
      const typing = tag === 'input' || tag === 'textarea' || e.target.isContentEditable;

      if (e.key === 'Escape') { this._closePalette(); this._closeShortcutsModal(); return; }

      if (!typing && e.key === '/') { e.preventDefault(); this._openPalette(); return; }
      if (!typing && (e.key === '?' )) { e.preventDefault(); this._toggleShortcutsModal(); return; }

      if (typing) return;

      if (e.key.toLowerCase() === 'g') {
        pendingG = true;
        clearTimeout(pendingTimer);
        pendingTimer = setTimeout(() => { pendingG = false; }, 700);
        return;
      }
      if (pendingG) {
        const found = NAV_ITEMS.find(n => n.key.toLowerCase() === e.key.toLowerCase());
        if (found) { window.location.href = found.href; }
        pendingG = false;
      }
    });
  },

  _toggleShortcutsModal() {
    let modal = document.getElementById('shortcuts-modal');
    if (modal) { this._closeShortcutsModal(); return; }
    modal = document.createElement('div');
    modal.id = 'shortcuts-modal';
    modal.className = 'cmdk-overlay';
    modal.innerHTML = `
      <div class="cmdk-panel glass" style="padding:22px;">
        <h3 style="font-family:var(--font-display); margin-bottom:16px;">Keyboard shortcuts</h3>
        <div style="display:flex; flex-direction:column; gap:10px; font-size:13.5px;">
          <div style="display:flex; justify-content:space-between;"><span>Open search</span><kbd class="mono">/</kbd></div>
          ${NAV_ITEMS.map(n => `<div style="display:flex; justify-content:space-between;"><span>Go to ${n.label}</span><kbd class="mono">g ${n.key.toLowerCase()}</kbd></div>`).join('')}
          <div style="display:flex; justify-content:space-between;"><span>Show this panel</span><kbd class="mono">?</kbd></div>
          <div style="display:flex; justify-content:space-between;"><span>Close any panel</span><kbd class="mono">esc</kbd></div>
        </div>
      </div>
    `;
    modal.addEventListener('click', (e) => { if (e.target === modal) this._closeShortcutsModal(); });
    document.body.appendChild(modal);
  },
  _closeShortcutsModal() {
    const modal = document.getElementById('shortcuts-modal');
    if (modal) modal.remove();
  },
};

// ---------- Topic card (shared across roadmap / favorites / notes pages) ----------
function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function difficultyTag(diff) {
  const map = { Beginner: 'tag-beginner', Intermediate: 'tag-intermediate', Advanced: 'tag-advanced', Expert: 'tag-expert' };
  return `<span class="tag ${map[diff] || ''}">${escapeHtml(diff)}</span>`;
}
function frequencyTag(freq) {
  const map = { High: 'tag-freq-high', Medium: 'tag-freq-medium', Low: 'tag-freq-low' };
  return `<span class="tag ${map[freq] || ''}">${icon('target')} ${escapeHtml(freq)} freq</span>`;
}

function resourceIconFor(type) {
  if (type === 'video') return 'play';
  if (type === 'article') return 'article';
  if (type === 'repo') return 'github';
  return 'docs';
}

function renderTopicCardHTML(topic, opts) {
  opts = opts || {};
  const done = State.isDone(topic.id);
  const bookmarked = State.isBookmarked(topic.id);
  const note = State.getNote(topic.id);
  const resources = (opts.extraResources || []).concat(topic.resources || []);
  return `
    <div class="topic-card ${done ? 'done' : ''}" data-topic-id="${topic.id}">
      <div class="topic-card-head" data-action="toggle-expand">
        <div class="check ${done ? 'checked' : ''}" data-action="toggle-done" title="Mark complete">${icon('check')}</div>
        <div class="topic-card-main">
          <div class="topic-card-title">${escapeHtml(topic.title)}</div>
          <div class="topic-card-meta">
            ${difficultyTag(topic.difficulty)}
            ${frequencyTag(topic.frequency)}
            <span class="tag tag-xp">${icon('sparkles')} ${topic.xp} XP</span>
            <span class="tag" style="color:var(--text-faint); background:rgba(255,255,255,0.04);">${icon('clock')} ${topic.hours}h</span>
            ${opts.showModule ? `<span class="tag" style="color:${topic.moduleColor}; background:rgba(255,255,255,0.04);">${escapeHtml(topic.moduleName)}</span>` : ''}
          </div>
        </div>
        <div class="topic-card-right">
          <button class="bookmark-btn ${bookmarked ? 'active' : ''}" data-action="toggle-bookmark" title="Bookmark">${icon('bookmark')}</button>
          <span class="topic-chev">${icon('chevRight')}</span>
        </div>
      </div>
      <div class="topic-card-body">
        <div class="topic-card-inner">
          <div>
            <div class="field-label">${icon('target')} Practice exercise</div>
            <div class="exercise-box">${escapeHtml(topic.exercise)}</div>
          </div>
          <div>
            <div class="field-label">${icon('docs')} Curated resources</div>
            <div class="resource-links">
              ${resources.map(r => `<a class="resource-link ${r.type}" href="${escapeHtml(r.url)}" target="_blank" rel="noopener">${icon(resourceIconFor(r.type))}${escapeHtml(r.label)}</a>`).join('')}
            </div>
          </div>
          <div>
            <div class="field-label">${icon('article')} Interview questions</div>
            ${topic.questionSections ? topic.questionSections.map(section => `
              <div class="question-section">
                <div class="field-label section-label">${escapeHtml(section.label)}</div>
                ${section.groups.map(group => `
                  <div class="question-group">
                    <div class="field-label section-sub-label">${escapeHtml(group.tag)}</div>
                    <ul class="list-plain questions">${(group.questions || []).map(q => `<li>${escapeHtml(q)}</li>`).join('')}</ul>
                  </div>
                `).join('')}
              </div>
            `).join('') : `<ul class="list-plain questions">${(topic.questions || []).map(q => `<li>${escapeHtml(q)}</li>`).join('')}</ul>`}
          </div>
          <div>
            <div class="field-label">${icon('close')} Common mistakes</div>
            <ul class="list-plain mistakes">${(topic.mistakes || []).map(m => `<li>${escapeHtml(m)}</li>`).join('')}</ul>
          </div>
          <div>
            <div class="field-label">${icon('note')} Your notes</div>
            <textarea class="notes-area" data-action="notes" placeholder="Jot down what clicked, what didn't, links to your own code…">${escapeHtml(note)}</textarea>
            <div class="notes-save-hint">Saves automatically as you type.</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Event delegation so re-rendering a container doesn't lose listeners.
function wireTopicCards(containerEl, onStateChange) {
  if (containerEl.__wired) return;
  containerEl.__wired = true;

  containerEl.addEventListener('click', (e) => {
    const card = e.target.closest('.topic-card');
    if (!card) return;
    const topicId = card.dataset.topicId;

    const doneBtn = e.target.closest('[data-action="toggle-done"]');
    if (doneBtn) {
      e.stopPropagation();
      const result = State.toggleTopic(topicId);
      if (result) {
        if (result.completed) {
          Shell.toast(`+${result.xp} XP — "${result.topic.title}" complete`, { icon: 'sparkles' });
          Shell.confetti();
          checkNewAchievements();
        }
        if (onStateChange) onStateChange();
      }
      return;
    }

    const bmBtn = e.target.closest('[data-action="toggle-bookmark"]');
    if (bmBtn) {
      e.stopPropagation();
      State.toggleBookmark(topicId);
      if (onStateChange) onStateChange();
      return;
    }

    const head = e.target.closest('[data-action="toggle-expand"]');
    if (head) {
      const body = card.querySelector('.topic-card-body');
      const isOpen = card.classList.toggle('open');
      body.style.maxHeight = isOpen ? body.scrollHeight + 'px' : '0';
    }
  });

  containerEl.addEventListener('input', (e) => {
    const ta = e.target.closest('[data-action="notes"]');
    if (!ta) return;
    const card = e.target.closest('.topic-card');
    State.saveNote(card.dataset.topicId, ta.value);
  });
}

// ---------- Achievement unlock detection ----------
function checkNewAchievements() {
  const prevUnlocked = STORE.get('unlockedAchievements', []);
  const current = getAchievementsStatus().filter(a => a.unlocked).map(a => a.id);
  const fresh = current.filter(id => prevUnlocked.indexOf(id) === -1);
  STORE.set('unlockedAchievements', current);
  fresh.forEach(id => {
    const a = ACHIEVEMENTS.find(x => x.id === id);
    if (a) setTimeout(() => Shell.toast(`Achievement unlocked: ${a.name}`, { icon: 'trophy', duration: 3400 }), 400);
  });
}
