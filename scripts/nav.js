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

  /* ── LANGUAGE PANE ────────────────────────────────────────────
     Opens on hover or click and then stays put — it is only dismissed
     by choosing a language, pressing Escape, or clicking away. Options
     are wired to the real translation engine through window.tcSetLang
     (exposed by translations.js).                                     */
  const langWrap = document.getElementById('langWrap');
  const langBtn  = document.getElementById('langBtn');
  const langPane = document.getElementById('langPane');

  if (langWrap && langBtn && langPane) {

    function setLangOpen(open) {
      langWrap.classList.toggle('open', open);
      langBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      /* Release focus on close, otherwise the just-clicked option keeps it
         and the pane reads as still-active to assistive tech. */
      if (!open && langWrap.contains(document.activeElement)) {
        document.activeElement.blur();
      }
    }

    /* Hovering opens it, and the 'open' class keeps it there once the
       cursor leaves — matching "stays open until I pick a language".
       Gated behind (hover: hover): on touch, a tap emits mouseenter
       immediately followed by click, so the pane opened then toggled
       straight back shut. */
    const canHover = window.matchMedia('(hover: hover)').matches;
    if (canHover) {
      langWrap.addEventListener('mouseenter', () => setLangOpen(true));
      langBtn.addEventListener('focus', () => setLangOpen(true));
    }

    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setLangOpen(!langWrap.classList.contains('open'));
    });

    langPane.querySelectorAll('.lang-opt').forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = opt.dataset.lang;
        if (typeof window.tcSetLang === 'function') window.tcSetLang(lang);
        markActive(lang);
        setLangOpen(false);
      });
    });

    /* escape hatches, so the pane can never get stuck open */
    document.addEventListener('click', (e) => {
      if (!langWrap.contains(e.target)) setLangOpen(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setLangOpen(false);
    });

    /* keep the tick in sync with whatever language is live */
    function markActive(lang) {
      langPane.querySelectorAll('.lang-opt').forEach(o => {
        o.classList.toggle('is-active', o.dataset.lang === lang);
        o.setAttribute('aria-checked', o.dataset.lang === lang ? 'true' : 'false');
      });
    }
    markActive(localStorage.getItem('tc-lang') || 'en');
    window.addEventListener('tc-lang-changed', (e) => markActive(e.detail.lang));
  }
})();
