/**
 * XP and Level system
 * Difficulty → XP mapping and level progression
 */
const XPSystem = (() => {
  const DIFFICULTY_XP = {
    Beginner: 10,
    Intermediate: 25,
    Advanced: 50,
    Expert: 100
  };

  const LEVELS = [
    { level: 1,  title: 'Java Beginner',      minXP: 0 },
    { level: 2,  title: 'Syntax Explorer',    minXP: 100 },
    { level: 3,  title: 'OOP Apprentice',     minXP: 250 },
    { level: 4,  title: 'Collection Crawler', minXP: 500 },
    { level: 5,  title: 'Spring Sprout',      minXP: 850 },
    { level: 6,  title: 'REST Rider',         minXP: 1300 },
    { level: 7,  title: 'Data Dynamo',        minXP: 1900 },
    { level: 8,  title: 'Security Sentinel',  minXP: 2600 },
    { level: 9,  title: 'Micro Master',       minXP: 3400 },
    { level: 10, title: 'Cloud Commander',    minXP: 4300 },
    { level: 11, title: 'System Architect',   minXP: 5300 },
    { level: 12, title: 'Java Legend',        minXP: 6500 }
  ];

  /** Get XP reward for a difficulty tier */
  function getXPForDifficulty(difficulty) {
    return DIFFICULTY_XP[difficulty] || 10;
  }

  /** Calculate current level from total XP */
  function getLevel(totalXP) {
    let current = LEVELS[0];
    for (const lvl of LEVELS) {
      if (totalXP >= lvl.minXP) current = lvl;
      else break;
    }
    return current;
  }

  /** Get next level info or null if max */
  function getNextLevel(totalXP) {
    const current = getLevel(totalXP);
    const idx = LEVELS.findIndex(l => l.level === current.level);
    return idx < LEVELS.length - 1 ? LEVELS[idx + 1] : null;
  }

  /** Progress percentage to next level (0-100) */
  function getLevelProgress(totalXP) {
    const current = getLevel(totalXP);
    const next = getNextLevel(totalXP);
    if (!next) return 100;
    const range = next.minXP - current.minXP;
    const progress = totalXP - current.minXP;
    return Math.min(100, Math.round((progress / range) * 100));
  }

  /** XP needed for next level */
  function getXPToNextLevel(totalXP) {
    const next = getNextLevel(totalXP);
    return next ? next.minXP - totalXP : 0;
  }

  /** All level definitions */
  function getAllLevels() {
    return LEVELS;
  }

  return {
    getXPForDifficulty,
    getLevel,
    getNextLevel,
    getLevelProgress,
    getXPToNextLevel,
    getAllLevels,
    DIFFICULTY_XP,
    LEVELS
  };
})();
