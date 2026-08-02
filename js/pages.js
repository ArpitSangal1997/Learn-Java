/* Page renderers. Kept separate from data and persistence for easy maintenance. */
const Pages = (() => {
  const shell = (title, subtitle, body, action = '') => `<div class="app-layout"><div id="sidebar-container"></div><main class="main-content"><header class="page-header"><div class="page-header__top"><div><h1 class="page-header__title">${title}</h1><p class="page-header__subtitle">${subtitle}</p></div>${action}</div></header><section class="page-body">${body}</section></main></div>`;
  const stat = (label, value, sub, id='') => `<article class="glass-card stat-card"><div class="stat-card__label">${label}</div><div class="stat-card__value" ${id ? `id="${id}"` : ''}>${value}</div><div class="stat-card__sub">${sub}</div></article>`;
  const progress = (value, success=false) => `<div class="progress-bar"><div class="progress-bar__fill ${success ? 'progress-bar__fill--success':''}" style="width:${value}%"></div></div>`;
  function activity() { const a=Storage.getState().activityLog.slice(0,6); return a.length ? a.map(x=>`<div class="activity-item"><div class="activity-item__icon">${x.type==='achievement'?'🏆':x.type==='xp'?'⚡':'✓'}</div><div><div class="activity-item__text">${x.message}</div><div class="activity-item__time">${UI.timeAgo(x.timestamp)}</div></div></div>`).join('') : '<div class="empty-state"><div class="empty-state__icon">🌱</div>Complete your first topic to start your activity trail.</div>'; }
  function moduleCard(m) { const p=Progress.getModuleProgress(m.id), xp=Progress.getModuleXPSummary(m.id); return `<article id="${m.id}" class="glass-card module-card glass-card--interactive"><div class="module-card__header"><div class="module-card__icon">${m.icon}</div><div><h2 class="module-card__title">${m.name}</h2><p style="color:var(--text-muted);font-size:.8rem">${m.topics.length} focused topics</p></div></div><p style="color:var(--text-secondary);font-size:.9rem;min-height:3rem">${m.description}</p><div style="display:flex;justify-content:space-between;margin:1rem 0 .5rem"><strong>${p}% complete</strong><span style="color:var(--text-muted)">${xp.earned}/${xp.total} XP</span></div>${progress(p)}<div class="module-card__stats"><span>⏱ ${m.estimatedHours}h</span><span>🧪 ${m.practiceProject}</span></div><a class="btn btn--secondary btn--sm" style="margin-top:1rem" href="roadmap.html#${m.id}">Open module →</a></article>`; }
  function dashboard() {
    const s=Storage.getState(), xp=s.totalXP, level=XPSystem.getLevel(xp), health=Progress.getClusterHealth(), p=Progress.getOverallProgress();
    document.body.innerHTML=shell(`Welcome back, ${s.settings.username}`, 'Make a little backend progress today. Your roadmap remembers every step.', `<div class="grid grid--4">${stat('Cluster health', health, Progress.getHealthLabel(health))}${stat('Overall progress', p+'%', `${Progress.getCompletedTopicsCount()} of ${Progress.getTotalTopics()} topics`)}${stat('Total XP', xp, `Level ${level.level}: ${level.title}`, 'dash-xp')}${stat('Daily streak', s.streak.current+' 🔥', `Best: ${s.streak.longest} days`)}</div><div class="grid grid--2" style="margin-top:1.25rem"><article class="glass-card" style="padding:1.5rem"><h2>Learning momentum</h2><p style="color:var(--text-secondary);margin:.4rem 0 1rem">${Progress.getWeeklyCompletedCount()} topics completed in the last 7 days · ${Math.round(s.studyHours*10)/10} study hours logged</p>${progress(p)}<div class="grid grid--3" style="margin-top:1.25rem">${stat('Weekly progress', Progress.getWeeklyCompletedCount(), 'topics completed')}${stat('Services complete', Progress.getCompletedModulesCount(), `of ${MODULES.length} modules`)}${stat('Favorites', s.bookmarks.length, 'saved for later')}</div></article><article class="glass-card" style="padding:1.5rem"><h2>Recent activity</h2>${activity()}</article></div><div style="display:flex;justify-content:space-between;align-items:center;margin:2rem 0 1rem"><h2>Continue your roadmap</h2><a href="roadmap.html" class="btn btn--secondary">View all modules</a></div><div class="grid grid--auto">${MODULES.slice(0,3).map(moduleCard).join('')}</div>`);
    App.init('dashboard'); document.querySelectorAll('.stat-card__value').forEach(el=>{const n=parseInt(el.textContent); if(!Number.isNaN(n)) UI.animateNumber(el,n);});
  }
  function roadmap() {
    document.body.innerHTML = shell('Java Backend Roadmap', 'Ten practical modules from language foundations to portfolio-ready architecture.', `<div class="search-box"><span class="search-box__icon">${UI.ICONS.search}</span><input id="topic-search" class="search-box__input" placeholder="Search topics, skills, difficulty… (press /)"><div id="search-results" class="glass-card" style="display:none;position:absolute;z-index:20;width:100%;margin-top:.5rem;padding:.5rem"></div></div><div id="roadmap-list" style="margin-top:1.5rem"></div>`);
    App.init('roadmap');

    const list = document.querySelector('#roadmap-list');
    if (!list) return;

    // Build sections using DOM APIs to avoid HTML parsing edge-cases where nested lists
    // or unescaped content inside topic items could accidentally reparent subsequent sections.
    list.innerHTML = '';
    MODULES.forEach(m => {
      const p = Progress.getModuleProgress(m.id), x = Progress.getModuleXPSummary(m.id);

      const section = document.createElement('section');
      section.id = m.id;
      section.className = 'roadmap-section';

      // module header card
      const headerCard = document.createElement('div');
      headerCard.className = 'glass-card';
      headerCard.style.padding = '1.25rem';
      headerCard.style.margin = '1.25rem 0';
      headerCard.innerHTML = `<div style="display:flex;gap:1rem;align-items:flex-start"><div class="module-card__icon">${m.icon}</div><div style="flex:1"><h2>${m.name}</h2><p style="color:var(--text-secondary);margin:.35rem 0">${m.description}</p><div class="module-card__stats"><span>${p}% complete</span><span>${x.earned}/${x.total} XP</span><span>⏱ ${m.estimatedHours}h</span></div>${progress(p)}</div></div><p style="margin-top:1rem;color:var(--text-muted);font-size:.875rem"><strong>Practice project:</strong> ${m.practiceProject}</p>`;
      // mark header so we can validate/repair DOM reparenting issues
      headerCard.setAttribute('data-module-header', m.id);

      const topicList = document.createElement('div');
      topicList.className = 'topic-list';

      // Append each topic as an element rather than concatenating HTML to avoid cross-module parsing problems
      m.topics.forEach(t => {
        const html = UI.renderTopicCard(t, m.id);
        const tmp = document.createElement('div');
        tmp.innerHTML = html.trim();
        // move all child nodes into topicList
        Array.from(tmp.childNodes).forEach(node => topicList.appendChild(node));
      });

      section.appendChild(headerCard);
      section.appendChild(topicList);
      list.appendChild(section);
    });

    UI.bindTopicCards(list);
    UI.initSearch('#topic-search', '#search-results');

    // Validation and repair pass: ensure every topic-card and module header is a child of its correct section.
    try {
      const repairs = [];
      document.querySelectorAll('.topic-card[data-module-id]').forEach(card => {
        const mid = card.dataset.moduleId;
        const sec = document.getElementById(mid);
        if (sec) {
          const topicList = sec.querySelector('.topic-list');
          if (topicList && card.parentElement !== topicList) {
            topicList.appendChild(card);
            repairs.push({type:'topic-card', id: card.dataset.topicId, movedTo: mid});
          }
        }
      });

      document.querySelectorAll('[data-module-header]').forEach(h => {
        const mid = h.getAttribute('data-module-header');
        const sec = document.getElementById(mid);
        if (sec && h.parentElement !== sec) {
          // place header at top of section
          sec.insertBefore(h, sec.firstChild);
          repairs.push({type:'module-header', movedTo: mid});
        }
      });

      if (repairs.length) console.log('[Roadmap repair] Re-parented elements:', repairs);
    } catch (e) {
      console.warn('Roadmap repair failed', e);
    }

    const target = window.location.hash.slice(1);
    if (target) requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));

    // Add a debug toggle button only when explicitly requested via ?debug=true in URL
    try {
      if (location.search && location.search.includes('debug=true')) {
        let debugBtn = document.getElementById('debug-toggle');
        if (!debugBtn) {
          debugBtn = document.createElement('button');
          debugBtn.id = 'debug-toggle';
          debugBtn.className = 'debug-toggle';
          debugBtn.textContent = 'Toggle Roadmap Debug';
          debugBtn.title = 'Show section outlines and ids for debugging';
          debugBtn.addEventListener('click', () => {
            document.body.classList.toggle('debug-roadmap');
            debugBtn.textContent = document.body.classList.contains('debug-roadmap') ? 'Hide Roadmap Debug' : 'Toggle Roadmap Debug';
          });
          document.body.appendChild(debugBtn);
        }
      }
    } catch (e) {
      console.warn('Could not add debug toggle', e);
    }

    document.addEventListener('progress-updated', () => roadmap(), { once: true });
  }
  function analytics() { const s=Storage.getState(), p=Progress.getOverallProgress(); document.body.innerHTML=shell('Learning Analytics','Use the signals below to choose your next deliberate practice session.',`<div class="grid grid--4">${stat('Completion',p+'%','roadmap coverage')}${stat('Study hours',Math.round(s.studyHours*10)/10,'estimated from completions')}${stat('XP gained',s.totalXP,'all time')}${stat('Weekly XP',Object.values(s.weeklyProgress).slice(-1)[0]||0,'current week')}</div><div class="grid grid--2" style="margin-top:1.25rem"><article class="glass-card" style="padding:1.5rem"><h2>Weekly XP gained</h2><div class="chart-container"><canvas id="weekly-chart"></canvas></div></article><article class="glass-card" style="padding:1.5rem"><h2>Study hours — last 7 days</h2><div class="chart-container"><canvas id="study-chart"></canvas></div></article><article class="glass-card" style="padding:1.5rem"><h2>Monthly XP</h2><div class="chart-container"><canvas id="monthly-chart"></canvas></div></article><article class="glass-card" style="padding:1.5rem"><h2>Completion by module</h2><div class="chart-container"><canvas id="completion-chart"></canvas></div></article></div><div class="grid grid--2" style="margin-top:1.25rem"><article class="glass-card" style="padding:1.5rem"><h2>Strongest topics</h2>${topicLinks(Progress.getStrongestTopics(), 'Complete a topic to populate this list.')}</article><article class="glass-card" style="padding:1.5rem"><h2>Priority next topics</h2>${topicLinks(Progress.getWeakestTopics(), 'Everything is complete — outstanding work.')}</article></div>`); App.init('analytics'); const weekly=Charts.getWeeklyXPData(), study=Charts.getDailyStudyData(), monthly=Charts.getMonthlyXPData(); Charts.barChart(document.querySelector('#weekly-chart'),weekly.labels,weekly.data);Charts.lineChart(document.querySelector('#study-chart'),study.labels,study.data);Charts.barChart(document.querySelector('#monthly-chart'),monthly.labels,monthly.data);Charts.horizontalBarChart(document.querySelector('#completion-chart'),MODULES.map(m=>m.name),MODULES.map(m=>Progress.getModuleProgress(m.id))); }
  const topicLinks=(ts, empty)=>ts.length?ts.map(t=>`<a class="resource-link" href="roadmap.html#${t.moduleId}"><span>${t.moduleIcon}</span><span><strong>${t.title}</strong><br><small>${t.moduleName} · ${t.difficulty}</small></span></a>`).join(''):`<p style="color:var(--text-muted)">${empty}</p>`;
  function achievements(){ const a=Achievements.getAllWithStatus(); const unlocked=Storage.getState().achievements; document.body.innerHTML=shell('Achievements','Milestones earned through consistent, intentional practice.',`<div class="grid grid--4">${a.map(x=>`<article class="glass-card achievement-card ${unlocked.includes(x.id)?'unlocked':''}"><div class="achievement-card__icon">${x.icon}</div><div class="achievement-card__name">${x.name}</div><div class="achievement-card__desc">${x.description}</div></article>`).join('')}</div><div class="glass-card" style="padding:1.5rem;margin-top:1.5rem"><h2>${unlocked.length}/${a.length} unlocked</h2>${progress(Math.round(unlocked.length/a.length*100),true)}</div>`);App.init('achievements');}
  function favorites(){ const topics=Storage.getState().bookmarks.map(Progress.getTopicById).filter(Boolean);document.body.innerHTML=shell('Favorite Topics','Your saved topics for focused revision and deeper practice.',`<div id="favorite-topics">${topics.length?topics.map(t=>UI.renderTopicCard(t,t.moduleId)).join(''):'<div class="glass-card empty-state"><div class="empty-state__icon">🔖</div>Bookmark topics from the roadmap to collect them here.</div>'}</div>`);App.init('favorites');UI.bindTopicCards(document.querySelector('#favorite-topics'));}
  function notes(){const topics=Progress.getAllTopics().filter(t=>Storage.getNotes(t.id));document.body.innerHTML=shell('Personal Notes','Your notes are saved privately in this browser.',`<div id="notes-list">${topics.length?topics.map(t=>`<article class="glass-card" style="padding:1.25rem;margin-bottom:1rem"><div style="display:flex;justify-content:space-between;gap:1rem"><div><h2>${t.title}</h2><small style="color:var(--text-muted)">${t.moduleName}</small></div><a class="btn btn--secondary btn--sm" href="roadmap.html#${t.moduleId}">Open topic</a></div><textarea class="notes-area standalone-note" data-id="${t.id}" style="margin-top:1rem">${Storage.getNotes(t.id)}</textarea></article>`).join(''):'<div class="glass-card empty-state"><div class="empty-state__icon">📝</div>Add notes within any expanded roadmap topic.</div>'}</div>`);App.init('notes');document.querySelectorAll('.standalone-note').forEach(e=>e.addEventListener('input',()=>Storage.saveNotes(e.dataset.id,e.value)));}
  function settings(){const s=Storage.getState().settings;document.body.innerHTML=shell('Settings','Customize your local learning workspace and manage your browser data.',`<div class="glass-card" style="padding:1.5rem;max-width:760px"><div class="settings-group"><h2 class="settings-group__title">Profile & goals</h2><label class="settings-row"><span><span class="settings-row__label">Display name</span><span class="settings-row__desc">Used in your dashboard greeting</span></span><input id="username" class="search-box__input" style="max-width:200px;padding:.55rem .75rem" value="${s.username}"></label><label class="settings-row"><span><span class="settings-row__label">Daily study goal</span><span class="settings-row__desc">A personal planning target in hours</span></span><input id="goal" type="number" min=".25" step=".25" class="search-box__input" style="max-width:100px;padding:.55rem .75rem" value="${s.dailyGoalHours}"></label></div><div class="settings-group"><h2 class="settings-group__title">Data</h2><div style="display:flex;gap:.75rem;flex-wrap:wrap"><button id="export" class="btn btn--secondary">Export progress</button><label class="btn btn--secondary">Import progress<input id="import" type="file" accept="application/json" hidden></label><button id="reset" class="btn btn--secondary">Reset all local data</button></div></div><button id="save-settings" class="btn btn--primary">Save settings</button></div>`);App.init('settings');document.querySelector('#save-settings').onclick=()=>{Storage.updateSettings({username:document.querySelector('#username').value.trim()||'Developer',dailyGoalHours:Number(document.querySelector('#goal').value)||2});UI.showToast('Settings saved');};document.querySelector('#export').onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([Storage.exportData()],{type:'application/json'}));a.download='java-backend-progress.json';a.click();URL.revokeObjectURL(a.href);};document.querySelector('#import').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{if(Storage.importData(r.result)){UI.showToast('Progress imported');setTimeout(()=>location.reload(),500)}else UI.showToast('Invalid backup file')};r.readAsText(f)};document.querySelector('#reset').onclick=()=>{if(confirm('Reset all local learning data? This cannot be undone.')){Storage.reset();location.href='dashboard.html'}};}
  return {dashboard,roadmap,analytics,achievements,favorites,notes,settings};
})();

/* Cluster-style module console inspired by the supplied status reference.
   It keeps one selected service in view instead of burying later modules
   below the long Core Java curriculum. */
const baseRoadmapPage = Pages.roadmap;
Pages.roadmap = () => {
  baseRoadmapPage();
  const roadmapList = document.querySelector('#roadmap-list');
  if (!roadmapList) return;

  const navigator = document.createElement('nav');
  navigator.className = 'module-navigator glass-card';
  navigator.setAttribute('aria-label', 'Jump to a learning module');
  navigator.innerHTML = `<div class="module-navigator__heading"><strong>Explore all modules</strong><span>${MODULES.length} modules · ${Progress.getTotalTopics()} topics</span></div><div class="module-navigator__items">${MODULES.map(module => `<button type="button" class="module-navigator__item" data-module-id="${module.id}"><span>${module.icon}</span><span>${module.name}</span></button>`).join('')}</div>`;
  roadmapList.before(navigator);

  navigator.addEventListener('click', event => {
    const button = event.target.closest('[data-module-id]');
    if (!button) return;
    const id = button.dataset.moduleId;
    history.replaceState(null, '', `#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
};

/* The cluster selector keeps the selected service prominent and exposes every
   module before any long topic list. */
const navigationRoadmapPage = Pages.roadmap;
Pages.roadmap = () => {
  navigationRoadmapPage();
  const roadmapList = document.querySelector('#roadmap-list');
  const navigator = document.querySelector('.module-navigator');
  if (!roadmapList || !navigator) return;

  navigator.innerHTML = `<div class="module-navigator__heading"><div><span class="module-navigator__eyebrow">LEARNING CLUSTER :: SERVICES</span><strong>Choose a backend module</strong></div><span>${MODULES.length} services · ${Progress.getTotalTopics()} topics</span></div><div class="module-navigator__items">${MODULES.map(module => `<button type="button" class="module-navigator__item" data-service-id="${module.id}"><span class="module-navigator__status"></span><span>${module.icon}</span><span>${module.name}</span><small>${module.topics.length} topics</small></button>`).join('')}</div>`;

  const selectService = (id, scroll = false) => {
      // determine canonical active id
      const activeId = MODULES.find(module => module.id === id)?.id || MODULES[0].id;

      // De-emphasize non-selected sections and mark the selected one active.
    roadmapList.querySelectorAll('.roadmap-section').forEach(section => {
        const isActive = section.id === activeId;
        section.classList.toggle('muted-section', !isActive);
        section.classList.toggle('active', isActive);
        section.hidden = false; // keep in layout to avoid cross-browser reflow quirks
        // ensure selected section has full opacity via class (safer than inline styles)
        if (isActive) {
          section.style.opacity = '1';
          section.style.zIndex = '2';
        } else {
          section.style.zIndex = '';
        }
      });

        // Collapse expanded topic-cards in all non-active sections to avoid overflowing overlays
        roadmapList.querySelectorAll('.roadmap-section').forEach(section => {
          if (section.id === activeId) return;
          section.querySelectorAll('.topic-card.expanded').forEach(card => {
            card.classList.remove('expanded');
            const body = card.querySelector('.topic-card__body');
            if (body) body.style.maxHeight = '0px';
            card.style.zIndex = '';
            card.style.opacity = '';
          });
        });

        // Expand only the first topic card in the selected module and compute height to force a repaint
        const sectionEl = roadmapList.querySelector(`#${activeId}`);
        if (sectionEl) {
          // scroll selected into view so it's not 'off-screen' when users click
          document.getElementById(activeId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

          const firstCard = sectionEl.querySelector('.topic-card');
          if (firstCard) {
            const body = firstCard.querySelector('.topic-card__body');
            const content = body ? body.querySelector('.topic-card__content') : null;
            firstCard.classList.add('expanded');
            firstCard.style.display = 'block';
            firstCard.style.opacity = '1';
            firstCard.style.zIndex = '3';
            if (content && body) {
              // compute height, force reflow, then set maxHeight to avoid transition clamping
              const height = Math.min(content.scrollHeight + 24, 700); // cap to avoid overlays
              // force a reflow before applying maxHeight
              void content.offsetHeight;
              body.style.maxHeight = height + 'px';
              // also ensure content color is readable
              content.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-primary') || '#f1f5f9';
            } else if (body) {
              body.style.maxHeight = '400px';
            }
          }

          // Focus the first topic header for keyboard users
          sectionEl.querySelector('.topic-card__header')?.focus();
        }

      // Update navigator state
      navigator.querySelectorAll('[data-service-id]').forEach(button => {
        const active = button.dataset.serviceId === activeId;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      });

      history.replaceState(null, '', `#${activeId}`);
    };

  navigator.addEventListener('click', event => {
    const button = event.target.closest('[data-service-id]');
    if (button) selectService(button.dataset.serviceId, true);
  });

  const handleInitialHash = () => {
    const target = window.location.hash.slice(1);
    if (!target) return;
    // if target is a topic id, expand that topic specifically
    const topicEl = document.querySelector(`.topic-card[data-topic-id="${target}"]`);
    if (topicEl) {
      const moduleId = topicEl.dataset.moduleId;
      // select the module (will collapse others)
      selectService(moduleId, true);
      // expand the requested topic after layout settles
      setTimeout(() => {
        try {
          topicEl.classList.add('expanded');
          const body = topicEl.querySelector('.topic-card__body');
          const content = body ? body.querySelector('.topic-card__content') : null;
          if (content && body) {
            void content.offsetHeight;
            body.style.maxHeight = Math.min(content.scrollHeight + 24, 700) + 'px';
          }
          topicEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } catch (e) { /* no-op */ }
      }, 300);
      return;
    }
    // otherwise, treat as module id
    selectService(target);
  };

  handleInitialHash();
  window.addEventListener('hashchange', () => {
    const target = window.location.hash.slice(1);
    const topicEl = document.querySelector(`.topic-card[data-topic-id="${target}"]`);
    if (topicEl) {
      selectService(topicEl.dataset.moduleId, true);
      setTimeout(() => {
        topicEl.classList.add('expanded');
        const body = topicEl.querySelector('.topic-card__body');
        const content = body ? body.querySelector('.topic-card__content') : null;
        if (content && body) {
          void content.offsetHeight;
          body.style.maxHeight = Math.min(content.scrollHeight + 24, 700) + 'px';
        }
        topicEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    } else {
      selectService(target, true);
    }
  });

  // Diagnostic logging to help debug missing topic rendering on some modules.
  // This will print MODULES loaded and per-section topic-card counts in the console.
  try {
    console.log('[Roadmap diagnostic] MODULES:', MODULES.map(m => ({ id: m.id, name: m.name, topics: (m.topics || []).length })));
    const secs = document.querySelectorAll('.roadmap-section');
    console.log('[Roadmap diagnostic] Rendered sections:', Array.from(secs).map(s => s.id));
    secs.forEach(s => {
      const cards = s.querySelectorAll('.topic-card');
      console.log(`[Roadmap diagnostic] section=${s.id} topic-cards=${cards.length}`);
    });
  } catch (e) {
    console.warn('Roadmap diagnostic failed', e);
  }
};
