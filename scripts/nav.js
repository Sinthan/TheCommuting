/* ══════════════════════════════════════════════════════════════════
   nav.js — Shared hamburger + nav drawer behavior
   Used by pages that don't have their own page-script (currently: index).
   Adds a11y attributes and closes the drawer when a link is clicked.
   ══════════════════════════════════════════════════════════════════ */

(function () {
  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('nav-drawer');
  if (!hamburger || !drawer) return;

  function setState(open) {
    hamburger.classList.toggle('open', open);
    drawer.classList.toggle('open', open);
    hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
  }
  setState(false);

  hamburger.addEventListener('click', () => {
    setState(!drawer.classList.contains('open'));
  });

  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setState(false));
  });
})();
