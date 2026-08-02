/* The source-of-truth ordering used throughout the dashboard.
   Build the MODULES array defensively: include only module globals that actually loaded.
   This prevents a ReferenceError when any data file fails to load and keeps the app usable. */
const _MODULE_NAMES = [
  'MODULE_CORE_JAVA','MODULE_JVM','MODULE_SPRING','MODULE_DATA',
  'MODULE_SECURITY','MODULE_TESTING','MODULE_MICROSERVICES','MODULE_DEVOPS',
  'MODULE_SYSTEM_DESIGN','MODULE_CAPSTONE'
];

const MODULES = _MODULE_NAMES.map(n => {
  // First try window property (for var-style globals)
  try {
    if (window && window[n]) return window[n];
  } catch (e) {}
  // If modules are declared using const/let at top-level, they won't appear on window.
  // Attempt to reference the identifier dynamically; it will throw if undefined — catch and ignore.
  try {
    // Using Function avoids referencing unknown identifiers at parse time.
    const val = Function('return typeof ' + n + " !== 'undefined' ? " + n + ' : undefined')();
    return val;
  } catch (e) {
    return undefined;
  }
}).filter(Boolean);

if (MODULES.length === 0) {
  console.warn('No roadmap modules loaded — check js/data/*.js files or variable naming (MODULE_*).');
}

