/* ══════════════════════════════════════════════════════════════════
   nav.js — Corner Panel behaviour (shared by every page)

   Owns two things only:
     1. mobile expand / collapse of the panel
     2. the language cycle cell

   The theme switch ("the house shifts") is deliberately NOT here yet.
   ══════════════════════════════════════════════════════════════════ */

(function () {
  const corner  = document.getElementById('corner');
  if (!corner) return;

  /* ── MOBILE TOGGLE ────────────────────────────────────────── */
  const cToggle = document.getElementById('cornerToggle');

  if (cToggle) {
    function setOpen(open) {
      corner.classList.toggle('open', open);
      cToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      cToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    }
    setOpen(false);

    cToggle.addEventListener('click', () => {
      setOpen(!corner.classList.contains('open'));
    });

    /* collapse after navigating */
    corner.querySelectorAll('.stack a').forEach(a => {
      a.addEventListener('click', () => setOpen(false));
    });

    /* Escape closes; click outside closes */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && corner.classList.contains('open')) setOpen(false);
    });
    document.addEventListener('click', e => {
      if (corner.classList.contains('open') && !corner.contains(e.target)) setOpen(false);
    });
  }

  /* ── LANGUAGE CYCLE ───────────────────────────────────────────
     Cycles EN → IT → 中文. Wired to the real translation engine via
     window.tcSetLang (exposed by translations.js), so this is not a
     presentational-only control. The visible label is kept in sync by
     translations.js, which writes to #lang-btn-label.                */
  const langBtn = document.getElementById('langBtn');
  if (langBtn) {
    const ORDER = ['en', 'it', 'zh'];

    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const current = localStorage.getItem('tc-lang') || 'en';
      const next    = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];
      if (typeof window.tcSetLang === 'function') window.tcSetLang(next);
    });
  }
})();
