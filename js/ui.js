/**
 * Shared UI utilities – toasts, sidebar, icons, formatting
 */
const UI = (() => {
  /** SVG icons used throughout the app */
  const ICONS = {
    check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>',
    chevron: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>',
    bookmark: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
    search: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    external: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    doc: '📄',
    video: '▶️',
    article: '📰',
    github: '🐙',
    exercise: '💪'
  };

  /** Initialize sidebar navigation highlighting and mobile toggle */
  function initSidebar(activePage) {
    const links = document.querySelectorAll('.sidebar__link');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.includes(activePage)) {
        link.classList.add('active');
      }
    });

    const toggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    if (toggle && sidebar) {
      toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay?.classList.toggle('open');
      });
    }
    if (overlay) {
      overlay.addEventListener('click', () => {
        sidebar?.classList.remove('open');
        overlay.classList.remove('open');
      });
    }
  }

  /** Update sidebar level display */
  function updateSidebarLevel() {
    const xp = Storage.getState().totalXP;
    const level = XPSystem.getLevel(xp);
    const progress = XPSystem.getLevelProgress(xp);

    const titleEl = document.querySelector('.sidebar__level-title');
    const barEl = document.querySelector('.sidebar__level-bar .progress-bar__fill');
    const xpEl = document.querySelector('.sidebar__level-xp');

    if (titleEl) titleEl.textContent = `Level ${level.level}: ${level.title}`;
    if (barEl) barEl.style.width = `${progress}%`;
    if (xpEl) xpEl.textContent = `${xp} XP`;
  }

  /** Show toast notification */
  function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  /** Animate number counting up */
  function animateNumber(el, target, duration = 800) {
    if (!el) return;
    const start = parseInt(el.textContent) || 0;
    const diff = target - start;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(start + diff * eased);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  /** Format relative time */
  function timeAgo(isoString) {
    const diff = Date.now() - new Date(isoString).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d ago`;
    return new Date(isoString).toLocaleDateString();
  }

  /** Difficulty badge class */
  function difficultyClass(difficulty) {
    const map = {
      Beginner: 'badge--beginner',
      Intermediate: 'badge--intermediate',
      Advanced: 'badge--advanced',
      Expert: 'badge--expert'
    };
    return map[difficulty] || 'badge--beginner';
  }

  /** Render resource link HTML */
  function renderResourceLink(resource) {
    const iconMap = { doc: ICONS.doc, video: ICONS.video, article: ICONS.article, github: ICONS.github };
    const icon = iconMap[resource.type] || '🔗';
    return `<a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="resource-link">
      <span class="resource-link__icon">${icon}</span>
      <span>${resource.title}</span>
      ${ICONS.external}
    </a>`;
  }

  /** Render list items as HTML */
  function renderList(items) {
    if (!items || items.length === 0) return '<p style="color:var(--text-muted)">None listed.</p>';
    return `<ul class="content-list">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
  }

  /** Create topic card HTML */
  function renderTopicCard(topic, moduleId) {
    const completed = Storage.isTopicCompleted(topic.id);
    const bookmarked = Storage.isBookmarked(topic.id);
    const xp = XPSystem.getXPForDifficulty(topic.difficulty);
    const notes = Storage.getNotes(topic.id);

    const resources = (topic.resources || []).map(r => renderResourceLink(r)).join('');
    const exercises = renderList(topic.exercises);
    const projects = renderList(topic.miniProjects);
    const questions = renderList(topic.interviewQuestions);
    const mistakes = renderList(topic.commonMistakes);

    return `
      <div class="glass-card topic-card" data-topic-id="${topic.id}" data-module-id="${moduleId}">
        <div class="topic-card__header">
          <div class="topic-card__expand-icon">${ICONS.chevron}</div>
          <div class="checkbox-custom ${completed ? 'checked' : ''}" data-action="toggle-complete" title="Mark complete">
            ${ICONS.check}
          </div>
          <div style="flex:1">
            <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap">
              <strong>${topic.title}</strong>
              <span class="badge ${difficultyClass(topic.difficulty)}">${topic.difficulty}</span>
              <span class="badge badge--xp">+${xp} XP</span>
            </div>
            <div class="topic-card__meta">
              <span>⏱ ${topic.estimatedTime}</span>
              <span>📋 Interview: ${topic.interviewFrequency}</span>
            </div>
          </div>
          <div class="topic-card__actions">
            <button class="btn btn--ghost bookmark-btn ${bookmarked ? 'active' : ''}" data-action="toggle-bookmark" title="Bookmark">
              ${ICONS.bookmark}
            </button>
          </div>
        </div>
        <div class="topic-card__body">
          <div class="topic-card__content">
            ${topic.description ? `<p style="color:var(--text-secondary);margin-bottom:1rem">${topic.description}</p>` : ''}

            <div class="content-section">
              <div class="content-section__title">Learning Resources</div>
              <div class="resource-list">${resources}</div>
            </div>

            <div class="content-section">
              <div class="content-section__title">Practice Exercises</div>
              ${exercises}
            </div>

            <div class="content-section">
              <div class="content-section__title">Mini Projects</div>
              ${projects}
            </div>

            <div class="content-section">
              <div class="content-section__title">Interview Questions</div>
              ${questions}
            </div>

            <div class="content-section">
              <div class="content-section__title">Common Mistakes</div>
              ${mistakes}
            </div>

            <div class="content-section">
              <div class="content-section__title">Personal Notes</div>
              <textarea class="notes-area" data-action="save-notes" placeholder="Write your notes here...">${notes}</textarea>
            </div>
          </div>
        </div>
      </div>`;
  }

  /** Bind topic card interactions */
  function bindTopicCards(container) {
    if (!container) return;

    // Expand/collapse
    container.querySelectorAll('.topic-card__header').forEach(header => {
      header.addEventListener('click', (e) => {
        if (e.target.closest('[data-action]')) return;
        header.closest('.topic-card').classList.toggle('expanded');
      });
    });

    // Complete toggle
    container.querySelectorAll('[data-action="toggle-complete"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = btn.closest('.topic-card');
        const topicId = card.dataset.topicId;
        const topic = Progress.getTopicById(topicId);
        if (!topic) return;

        const xp = XPSystem.getXPForDifficulty(topic.difficulty);
        const isCompleted = Storage.isTopicCompleted(topicId);

        if (isCompleted) {
          Storage.uncompleteTopic(topicId);
          Storage.removeXP(xp);
          btn.classList.remove('checked');
          showToast(`Unmarked: ${topic.title}`, 'success');
        } else {
          Storage.completeTopic(topicId);
          Storage.addXP(xp, topic.title);
          btn.classList.add('checked');
          showToast(`+${xp} XP — ${topic.title} completed!`, 'xp');

          // Estimate study time logged
          const timeMatch = topic.estimatedTime.match(/(\d+)/);
          if (timeMatch) Storage.addStudyMinutes(parseInt(timeMatch[1]) * (topic.estimatedTime.includes('hour') ? 60 : 1));
        }

        const unlocked = Achievements.checkAll();
        unlocked.forEach(a => showToast(`🏆 Achievement: ${a.name}!`, 'achievement'));

        updateSidebarLevel();
        document.dispatchEvent(new CustomEvent('progress-updated'));
      });
    });

    // Bookmark toggle
    container.querySelectorAll('[data-action="toggle-bookmark"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const topicId = btn.closest('.topic-card').dataset.topicId;
        const isBookmarked = Storage.toggleBookmark(topicId);
        btn.classList.toggle('active', isBookmarked);
        showToast(isBookmarked ? 'Added to favorites' : 'Removed from favorites');
        Achievements.checkAll();
      });
    });

    // Notes save (debounced)
    const noteTimers = {};
    container.querySelectorAll('[data-action="save-notes"]').forEach(textarea => {
      textarea.addEventListener('click', e => e.stopPropagation());
      textarea.addEventListener('input', (e) => {
        const topicId = e.target.closest('.topic-card').dataset.topicId;
        clearTimeout(noteTimers[topicId]);
        noteTimers[topicId] = setTimeout(() => {
          Storage.saveNotes(topicId, e.target.value);
          Achievements.checkAll();
        }, 500);
      });
    });
  }

  /** Initialize global search if present */
  function initSearch(inputSelector, resultsSelector) {
    const input = document.querySelector(inputSelector);
    const results = document.querySelector(resultsSelector);
    if (!input || !results) return;

    input.addEventListener('input', () => {
      const query = input.value.trim();
      if (query.length < 2) {
        results.innerHTML = '';
        results.style.display = 'none';
        return;
      }

      const matches = Progress.searchTopics(query).slice(0, 8);
      if (matches.length === 0) {
        results.innerHTML = '<div class="empty-state" style="padding:1rem">No topics found</div>';
      } else {
        results.innerHTML = matches.map(t => `
          <a href="roadmap.html#${t.moduleId}" class="resource-link" style="margin-bottom:0.25rem">
            <span>${t.moduleIcon}</span>
            <span><strong>${t.title}</strong> — ${t.moduleName}</span>
          </a>
        `).join('');
      }
      results.style.display = 'block';
    });
  }

  /** Keyboard shortcuts */
  function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      if (e.target.matches('input, textarea, select')) return;

      if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        document.querySelector('.search-box__input')?.focus();
      }

      const shortcuts = {
        'd': 'dashboard.html',
        'r': 'roadmap.html',
        'a': 'analytics.html',
        'h': 'achievements.html',
        'f': 'favorites.html',
        'n': 'notes.html',
        's': 'settings.html'
      };

      if (shortcuts[e.key] && !e.ctrlKey && !e.metaKey) {
        const current = window.location.pathname.split('/').pop();
        if (current !== shortcuts[e.key]) {
          window.location.href = shortcuts[e.key];
        }
      }
    });
  }

  /** Render sidebar HTML (shared fragment) */
  function getSidebarHTML(activePage) {
    const xp = Storage.getState().totalXP;
    const level = XPSystem.getLevel(xp);
    const progress = XPSystem.getLevelProgress(xp);

    const navItems = [
      { page: 'dashboard', href: 'dashboard.html', icon: '📊', label: 'Dashboard' },
      { page: 'roadmap', href: 'roadmap.html', icon: '🗺️', label: 'Roadmap' },
      { page: 'analytics', href: 'analytics.html', icon: '📈', label: 'Analytics' },
      { page: 'achievements', href: 'achievements.html', icon: '🏆', label: 'Achievements' },
      { page: 'favorites', href: 'favorites.html', icon: '🔖', label: 'Favorites' },
      { page: 'notes', href: 'notes.html', icon: '📝', label: 'Notes' },
      { page: 'settings', href: 'settings.html', icon: '⚙️', label: 'Settings' }
    ];

    return `
      <button class="menu-toggle" aria-label="Toggle menu">☰</button>
      <div class="sidebar-overlay"></div>
      <aside class="sidebar">
        <div class="sidebar__brand">
          <a href="dashboard.html" class="sidebar__logo">
            <div class="sidebar__logo-icon">☕</div>
            <span>Java Backend</span>
          </a>
        </div>
        <nav class="sidebar__nav">
          ${navItems.map(item => `
            <a href="${item.href}" class="sidebar__link ${activePage === item.page ? 'active' : ''}">
              <span class="sidebar__link-icon">${item.icon}</span>
              ${item.label}
            </a>
          `).join('')}
        </nav>
        <div class="sidebar__footer">
          <div class="sidebar__level">
            <div class="sidebar__level-title">Level ${level.level}: ${level.title}</div>
            <div class="sidebar__level-xp">${xp} XP</div>
            <div class="sidebar__level-bar progress-bar progress-bar--sm" style="margin-top:0.5rem">
              <div class="progress-bar__fill" style="width:${progress}%"></div>
            </div>
          </div>
        </div>
      </aside>`;
  }

  return {
    ICONS,
    initSidebar,
    updateSidebarLevel,
    showToast,
    animateNumber,
    timeAgo,
    difficultyClass,
    renderResourceLink,
    renderList,
    renderTopicCard,
    bindTopicCards,
    initSearch,
    initKeyboardShortcuts,
    getSidebarHTML
  };
})();
