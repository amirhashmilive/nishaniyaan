/* ═══════════════════════════════════════════════════════════
   THEME ENGINE — Dark/Light toggle with localStorage
   ═══════════════════════════════════════════════════════════ */
(function() {
  'use strict';

  const STORAGE_KEY = 'nishaniyaan-theme';

  function getPreferred() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    // Update icon
    document.querySelectorAll('.ctrl-theme').forEach(btn => {
      btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    });
  }

  // Apply on load
  apply(getPreferred());

  // Bind toggle buttons
  document.addEventListener('click', e => {
    if (e.target.closest('.ctrl-theme')) {
      const current = document.documentElement.getAttribute('data-theme');
      apply(current === 'dark' ? 'light' : 'dark');
    }
  });
})();
