/**
 * App initialization – runs on every page
 */
const App = (() => {
  function init(activePage) {
    Storage.updateStreak();
    Achievements.checkAll();

    // Inject sidebar if placeholder exists
    const sidebarPlaceholder = document.querySelector('#sidebar-container');
    if (sidebarPlaceholder) {
      sidebarPlaceholder.innerHTML = UI.getSidebarHTML(activePage);
    }

    UI.initSidebar(activePage);
    UI.initKeyboardShortcuts();
    UI.updateSidebarLevel();
  }

  return { init };
})();
