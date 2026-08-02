/**
 * Local Storage persistence layer
 * Handles all user progress, notes, bookmarks, and analytics data
 */
const Storage = (() => {
  const STORAGE_KEY = 'javaBackendDashboard';
  const DEFAULT_STATE = {
    completedTopics: {},
    bookmarks: [],
    notes: {},
    totalXP: 0,
    studyHours: 0,
    streak: { current: 0, lastVisit: null, longest: 0 },
    achievements: [],
    activityLog: [],
    weeklyProgress: {},
    monthlyProgress: {},
    dailyStudyMinutes: {},
    settings: {
      username: 'Developer',
      dailyGoalHours: 2,
      notifications: true,
      theme: 'dark'
    },
    initialized: false
  };

  /** Load state from localStorage or return defaults */
  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULT_STATE };
      const parsed = JSON.parse(raw);
      return { ...DEFAULT_STATE, ...parsed };
    } catch (e) {
      console.warn('Storage load failed, using defaults', e);
      return { ...DEFAULT_STATE };
    }
  }

  /** Persist current state */
  function save(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Storage save failed', e);
    }
  }

  /** Get mutable state reference */
  function getState() {
    if (!window.__dashboardState) {
      window.__dashboardState = load();
    }
    return window.__dashboardState;
  }

  /** Save current in-memory state */
  function persist() {
    save(getState());
  }

  /** Reset all progress */
  function reset() {
    window.__dashboardState = { ...DEFAULT_STATE };
    persist();
  }

  /** Check if topic is completed */
  function isTopicCompleted(topicId) {
    return !!getState().completedTopics[topicId];
  }

  /** Mark topic complete with timestamp */
  function completeTopic(topicId) {
    const state = getState();
    if (!state.completedTopics[topicId]) {
      state.completedTopics[topicId] = {
        completedAt: new Date().toISOString(),
        xpEarned: 0
      };
      persist();
      return true;
    }
    return false;
  }

  /** Unmark topic completion */
  function uncompleteTopic(topicId) {
    const state = getState();
    if (state.completedTopics[topicId]) {
      delete state.completedTopics[topicId];
      persist();
      return true;
    }
    return false;
  }

  /** Toggle bookmark */
  function toggleBookmark(topicId) {
    const state = getState();
    const idx = state.bookmarks.indexOf(topicId);
    if (idx >= 0) {
      state.bookmarks.splice(idx, 1);
    } else {
      state.bookmarks.push(topicId);
    }
    persist();
    return state.bookmarks.includes(topicId);
  }

  /** Check bookmark status */
  function isBookmarked(topicId) {
    return getState().bookmarks.includes(topicId);
  }

  /** Save personal notes for a topic */
  function saveNotes(topicId, content) {
    const state = getState();
    state.notes[topicId] = content;
    persist();
  }

  /** Get notes for a topic */
  function getNotes(topicId) {
    return getState().notes[topicId] || '';
  }

  /** Add XP and record in activity */
  function addXP(amount, reason) {
    const state = getState();
    state.totalXP += amount;
    logActivity('xp', `Earned ${amount} XP: ${reason}`, amount);
    updateDailyProgress(amount);
    persist();
    return state.totalXP;
  }

  /** Remove XP (on uncomplete) */
  function removeXP(amount) {
    const state = getState();
    state.totalXP = Math.max(0, state.totalXP - amount);
    persist();
  }

  /** Log study time in minutes */
  function addStudyMinutes(minutes) {
    const state = getState();
    const today = getDateKey(new Date());
    state.dailyStudyMinutes[today] = (state.dailyStudyMinutes[today] || 0) + minutes;
    state.studyHours = Object.values(state.dailyStudyMinutes).reduce((a, b) => a + b, 0) / 60;
    persist();
  }

  /** Update streak on visit */
  function updateStreak() {
    const state = getState();
    const today = getDateKey(new Date());
    const last = state.streak.lastVisit;

    if (last === today) return state.streak;

    if (last) {
      const lastDate = new Date(last);
      const todayDate = new Date(today);
      const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        state.streak.current += 1;
      } else if (diffDays > 1) {
        state.streak.current = 1;
      }
    } else {
      state.streak.current = 1;
    }

    state.streak.lastVisit = today;
    if (state.streak.current > state.streak.longest) {
      state.streak.longest = state.streak.longest || state.streak.current;
    }
    persist();
    return state.streak;
  }

  /** Log activity for recent feed */
  function logActivity(type, message, value) {
    const state = getState();
    state.activityLog.unshift({
      type,
      message,
      value,
      timestamp: new Date().toISOString()
    });
    if (state.activityLog.length > 50) {
      state.activityLog = state.activityLog.slice(0, 50);
    }
    persist();
  }

  /** Track weekly/monthly XP progress */
  function updateDailyProgress(xp) {
    const state = getState();
    const today = getDateKey(new Date());
    const weekKey = getWeekKey(new Date());
    const monthKey = getMonthKey(new Date());

    state.weeklyProgress[weekKey] = (state.weeklyProgress[weekKey] || 0) + xp;
    state.monthlyProgress[monthKey] = (state.monthlyProgress[monthKey] || 0) + xp;

    // Keep only last 12 weeks/months
    trimOldKeys(state.weeklyProgress, 12);
    trimOldKeys(state.monthlyProgress, 12);
  }

  /** Unlock achievement if not already unlocked */
  function unlockAchievement(achievementId) {
    const state = getState();
    if (!state.achievements.includes(achievementId)) {
      state.achievements.push(achievementId);
      logActivity('achievement', `Unlocked achievement!`, achievementId);
      persist();
      return true;
    }
    return false;
  }

  /** Update settings */
  function updateSettings(updates) {
    const state = getState();
    state.settings = { ...state.settings, ...updates };
    persist();
  }

  /** Export all data as JSON */
  function exportData() {
    return JSON.stringify(getState(), null, 2);
  }

  /** Import data from JSON */
  function importData(json) {
    try {
      const parsed = JSON.parse(json);
      window.__dashboardState = { ...DEFAULT_STATE, ...parsed };
      persist();
      return true;
    } catch (e) {
      return false;
    }
  }

  // Helpers
  function getDateKey(date) {
    return date.toISOString().split('T')[0];
  }

  function getWeekKey(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - d.getDay());
    return d.toISOString().split('T')[0];
  }

  function getMonthKey(date) {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
  }

  function trimOldKeys(obj, max) {
    const keys = Object.keys(obj).sort();
    while (keys.length > max) {
      delete obj[keys.shift()];
    }
  }

  return {
    load,
    save,
    getState,
    persist,
    reset,
    isTopicCompleted,
    completeTopic,
    uncompleteTopic,
    toggleBookmark,
    isBookmarked,
    saveNotes,
    getNotes,
    addXP,
    removeXP,
    addStudyMinutes,
    updateStreak,
    logActivity,
    unlockAchievement,
    updateSettings,
    exportData,
    importData,
    getDateKey,
    getWeekKey,
    getMonthKey
  };
})();
