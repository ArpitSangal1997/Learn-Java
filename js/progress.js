/**
 * Progress calculation utilities
 * Computes completion stats across modules and topics
 */
const Progress = (() => {
  /** Get all topics flattened with module info */
  function getAllTopics() {
    return MODULES.flatMap(mod =>
      mod.topics.map(topic => ({
        ...topic,
        moduleId: mod.id,
        moduleName: mod.name,
        moduleIcon: mod.icon
      }))
    );
  }

  /** Find topic by ID */
  function getTopicById(topicId) {
    return getAllTopics().find(t => t.id === topicId);
  }

  /** Find module by ID */
  function getModuleById(moduleId) {
    return MODULES.find(m => m.id === moduleId);
  }

  /** Count completed topics in a module */
  function getModuleCompletedCount(moduleId) {
    const mod = getModuleById(moduleId);
    if (!mod) return 0;
    return mod.topics.filter(t => Storage.isTopicCompleted(t.id)).length;
  }

  /** Module completion percentage */
  function getModuleProgress(moduleId) {
    const mod = getModuleById(moduleId);
    if (!mod || mod.topics.length === 0) return 0;
    return Math.round((getModuleCompletedCount(moduleId) / mod.topics.length) * 100);
  }

  /** Overall completion percentage */
  function getOverallProgress() {
    const all = getAllTopics();
    if (all.length === 0) return 0;
    const completed = all.filter(t => Storage.isTopicCompleted(t.id)).length;
    return Math.round((completed / all.length) * 100);
  }

  /** Total topics count */
  function getTotalTopics() {
    return getAllTopics().length;
  }

  /** Completed topics count */
  function getCompletedTopicsCount() {
    return getAllTopics().filter(t => Storage.isTopicCompleted(t.id)).length;
  }

  /** Completed modules (100% done) */
  function getCompletedModulesCount() {
    return MODULES.filter(m => getModuleProgress(m.id) === 100).length;
  }

  /** Total XP available across all topics */
  function getTotalAvailableXP() {
    return getAllTopics().reduce((sum, t) => sum + XPSystem.getXPForDifficulty(t.difficulty), 0);
  }

  /** XP earned from completed topics */
  function getEarnedXP() {
    const state = Storage.getState();
    return state.totalXP;
  }

  /** Module XP summary */
  function getModuleXPSummary(moduleId) {
    const mod = getModuleById(moduleId);
    if (!mod) return { earned: 0, total: 0 };
    const total = mod.topics.reduce((s, t) => s + XPSystem.getXPForDifficulty(t.difficulty), 0);
    const earned = mod.topics
      .filter(t => Storage.isTopicCompleted(t.id))
      .reduce((s, t) => s + XPSystem.getXPForDifficulty(t.difficulty), 0);
    return { earned, total };
  }

  /** Estimated total study hours */
  function getTotalEstimatedHours() {
    return MODULES.reduce((sum, m) => sum + (m.estimatedHours || 0), 0);
  }

  /** Weekly topics completed (last 7 days) */
  function getWeeklyCompletedCount() {
    const state = Storage.getState();
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return Object.entries(state.completedTopics).filter(([, data]) => {
      return new Date(data.completedAt) >= weekAgo;
    }).length;
  }

  /** Strongest topics (completed, sorted by difficulty XP) */
  function getStrongestTopics(limit = 5) {
    return getAllTopics()
      .filter(t => Storage.isTopicCompleted(t.id))
      .sort((a, b) => XPSystem.getXPForDifficulty(b.difficulty) - XPSystem.getXPForDifficulty(a.difficulty))
      .slice(0, limit);
  }

  /** Weakest topics (incomplete, sorted by interview frequency) */
  function getWeakestTopics(limit = 5) {
    const freqOrder = { 'Very High': 4, 'High': 3, 'Medium': 2, 'Low': 1 };
    return getAllTopics()
      .filter(t => !Storage.isTopicCompleted(t.id))
      .sort((a, b) => (freqOrder[b.interviewFrequency] || 0) - (freqOrder[a.interviewFrequency] || 0))
      .slice(0, limit);
  }

  /** Search topics by query */
  function searchTopics(query) {
    if (!query || query.trim().length < 2) return [];
    const q = query.toLowerCase();
    return getAllTopics().filter(t =>
      t.title.toLowerCase().includes(q) ||
      t.moduleName.toLowerCase().includes(q) ||
      t.difficulty.toLowerCase().includes(q) ||
      (t.tags && t.tags.some(tag => tag.toLowerCase().includes(q)))
    );
  }

  /** Cluster health score (0-100) based on recent activity */
  function getClusterHealth() {
    const overall = getOverallProgress();
    const streak = Storage.getState().streak.current;
    const weekly = getWeeklyCompletedCount();
    const score = Math.min(100, Math.round(overall * 0.5 + Math.min(streak, 7) * 5 + weekly * 3));
    return score;
  }

  /** Get health label */
  function getHealthLabel(score) {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Healthy';
    if (score >= 40) return 'Moderate';
    if (score >= 20) return 'Needs Attention';
    return 'Critical';
  }

  return {
    getAllTopics,
    getTopicById,
    getModuleById,
    getModuleCompletedCount,
    getModuleProgress,
    getOverallProgress,
    getTotalTopics,
    getCompletedTopicsCount,
    getCompletedModulesCount,
    getTotalAvailableXP,
    getEarnedXP,
    getModuleXPSummary,
    getTotalEstimatedHours,
    getWeeklyCompletedCount,
    getStrongestTopics,
    getWeakestTopics,
    searchTopics,
    getClusterHealth,
    getHealthLabel
  };
})();
