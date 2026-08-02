/**
 * Achievement definitions and unlock logic
 */
const Achievements = (() => {
  const DEFINITIONS = [
    {
      id: 'first-step',
      name: 'First Step',
      description: 'Complete your first topic',
      icon: '🎯',
      check: () => Progress.getCompletedTopicsCount() >= 1
    },
    {
      id: 'getting-started',
      name: 'Getting Started',
      description: 'Complete 5 topics',
      icon: '🚀',
      check: () => Progress.getCompletedTopicsCount() >= 5
    },
    {
      id: 'dedicated-learner',
      name: 'Dedicated Learner',
      description: 'Complete 15 topics',
      icon: '📚',
      check: () => Progress.getCompletedTopicsCount() >= 15
    },
    {
      id: 'knowledge-seeker',
      name: 'Knowledge Seeker',
      description: 'Complete 30 topics',
      icon: '🧠',
      check: () => Progress.getCompletedTopicsCount() >= 30
    },
    {
      id: 'java-master',
      name: 'Java Master',
      description: 'Complete all topics in Core Java',
      icon: '☕',
      check: () => Progress.getModuleProgress('core-java') === 100
    },
    {
      id: 'spring-champion',
      name: 'Spring Champion',
      description: 'Complete all Spring Core & Boot topics',
      icon: '🌱',
      check: () => Progress.getModuleProgress('spring-core-boot') === 100
    },
    {
      id: 'security-guardian',
      name: 'Security Guardian',
      description: 'Complete all Spring Security topics',
      icon: '🔒',
      check: () => Progress.getModuleProgress('spring-security') === 100
    },
    {
      id: 'microservices-pioneer',
      name: 'Microservices Pioneer',
      description: 'Complete all Microservices topics',
      icon: '🔗',
      check: () => Progress.getModuleProgress('microservices') === 100
    },
    {
      id: 'streak-3',
      name: 'On Fire',
      description: 'Maintain a 3-day streak',
      icon: '🔥',
      check: () => Storage.getState().streak.current >= 3
    },
    {
      id: 'streak-7',
      name: 'Week Warrior',
      description: 'Maintain a 7-day streak',
      icon: '⚡',
      check: () => Storage.getState().streak.current >= 7
    },
    {
      id: 'streak-30',
      name: 'Unstoppable',
      description: 'Maintain a 30-day streak',
      icon: '💎',
      check: () => Storage.getState().streak.current >= 30
    },
    {
      id: 'xp-500',
      name: 'XP Collector',
      description: 'Earn 500 total XP',
      icon: '⭐',
      check: () => Storage.getState().totalXP >= 500
    },
    {
      id: 'xp-2000',
      name: 'XP Hunter',
      description: 'Earn 2000 total XP',
      icon: '🏆',
      check: () => Storage.getState().totalXP >= 2000
    },
    {
      id: 'level-5',
      name: 'Rising Star',
      description: 'Reach level 5 (Spring Sprout)',
      icon: '🌟',
      check: () => XPSystem.getLevel(Storage.getState().totalXP).level >= 5
    },
    {
      id: 'level-10',
      name: 'Elite Developer',
      description: 'Reach level 10 (Cloud Commander)',
      icon: '👑',
      check: () => XPSystem.getLevel(Storage.getState().totalXP).level >= 10
    },
    {
      id: 'bookmark-5',
      name: 'Curator',
      description: 'Bookmark 5 topics',
      icon: '🔖',
      check: () => Storage.getState().bookmarks.length >= 5
    },
    {
      id: 'note-taker',
      name: 'Note Taker',
      description: 'Write notes on 3 topics',
      icon: '📝',
      check: () => Object.values(Storage.getState().notes).filter(n => n.trim().length > 0).length >= 3
    },
    {
      id: 'module-complete',
      name: 'Module Master',
      description: 'Complete an entire module',
      icon: '✅',
      check: () => Progress.getCompletedModulesCount() >= 1
    },
    {
      id: 'halfway',
      name: 'Halfway There',
      description: 'Reach 50% overall progress',
      icon: '📊',
      check: () => Progress.getOverallProgress() >= 50
    },
    {
      id: 'graduate',
      name: 'Graduate',
      description: 'Complete the entire roadmap',
      icon: '🎓',
      check: () => Progress.getOverallProgress() === 100
    }
  ];

  /** Check and unlock all eligible achievements */
  function checkAll() {
    const newlyUnlocked = [];
    for (const ach of DEFINITIONS) {
      try {
        if (ach.check() && Storage.unlockAchievement(ach.id)) {
          newlyUnlocked.push(ach);
        }
      } catch (e) {
        console.warn('Achievement check failed:', ach.id, e);
      }
    }
    return newlyUnlocked;
  }

  /** Get achievement by ID */
  function getById(id) {
    return DEFINITIONS.find(a => a.id === id);
  }

  /** Get all with unlock status */
  function getAllWithStatus() {
    const unlocked = Storage.getState().achievements;
    return DEFINITIONS.map(a => ({
      ...a,
      unlocked: unlocked.includes(a.id)
    }));
  }

  /** Count unlocked */
  function getUnlockedCount() {
    return Storage.getState().achievements.length;
  }

  return {
    DEFINITIONS,
    checkAll,
    getById,
    getAllWithStatus,
    getUnlockedCount
  };
})();
