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
     Desktop: hover governs entirely. The pane is open while the cursor
     is inside the wrapper and closes the moment it leaves — including
     when moving onto another nav cell.
     Touch: tap to open, and it closes on scroll or on a tap elsewhere.

     Options are wired to the real translation engine via window.tcSetLang
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

    /* Touch taps emit mouseenter immediately before click, so the two
       input models are kept strictly separate. */
    const canHover = window.matchMedia('(hover: hover)').matches;

    if (canHover) {
      /* ── POINTER: open while hovered, close on leave ── */
      let closeTimer;

      langWrap.addEventListener('mouseenter', () => {
        clearTimeout(closeTimer);
        setLangOpen(true);
      });

      langWrap.addEventListener('mouseleave', () => {
        /* Brief grace period: the pane is positioned outside the wrapper's
           own box, so crossing the seam between them can otherwise register
           as a leave and flicker the pane shut. */
        closeTimer = setTimeout(() => setLangOpen(false), 90);
      });

      /* keyboard parity — tab in opens, tab out closes */
      langBtn.addEventListener('focus', () => {
        clearTimeout(closeTimer);
        setLangOpen(true);
      });
      langWrap.addEventListener('focusout', (e) => {
        if (!langWrap.contains(e.relatedTarget)) setLangOpen(false);
      });

    } else {
      /* ── TOUCH: tap to toggle, scroll or tap-away to close ── */
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        setLangOpen(!langWrap.classList.contains('open'));
      });

      /* capture phase, so scrolls inside nested containers (the photos
         timeline, the work/stories drawers) are caught too */
      document.addEventListener('scroll', () => setLangOpen(false), true);
    }

    /* choosing a language applies it and dismisses the pane */
    langPane.querySelectorAll('.lang-opt').forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = opt.dataset.lang;
        if (typeof window.tcSetLang === 'function') window.tcSetLang(lang);
        markActive(lang);
        setLangOpen(false);
      });
    });

    /* shared dismissals */
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
