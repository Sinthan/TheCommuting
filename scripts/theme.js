/* ══════════════════════════════════════════════════════════════════
   theme.js — "the house shifts"

   Presentational only. It sets data-theme on <html> and swaps a small
   set of UNTRANSLATED chrome strings. It must never touch anything the
   translation system owns (any id starting t-), otherwise the two
   systems fight over the same text nodes.

   Preference is one of: auto | dark | light
     auto  → follows prefers-color-scheme, nothing stored
     dark  → forced, stored under tc-theme
     light → forced, stored under tc-theme

   The pre-paint snippet in <head> resolves the theme before first
   paint; this file owns everything after that.
   ══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var KEY = 'tc-theme';
  var mq  = window.matchMedia('(prefers-color-scheme: light)');

  /* ── FLAVOUR ───────────────────────────────────────────────────
     Theme fiction that lives outside the translation keys. The dark
     set duplicates what is already in the HTML, so a JS failure
     leaves the page correct rather than empty.                     */
  var FLAVOUR = {
    dark: {
      sysTag: 'SYS:ONLINE',
      sysTagPhotos: 'SYS:ONLINE',
      sysTagStories: 'SYS:ONLINE',
      stationName: 'UNKNOWN CITY STATION',
      heroJp: '通勤 — 窗邊座位 — 移動中',
      icon1: '[⊙]', icon2: '[≡]', icon3: '[⊞]', icon4: '[?]',
      marquee: [
        '⚠ SYSTEM ACTIVE', 'ARCHIVE INITIALISED', 'ROUTE UNRESOLVED',
        'WINDOW SEAT OCCUPIED', 'SIGNAL WEAK', '通勤系統啟動中',
        'DEPARTURE IMMINENT', 'NEXT STOP UNKNOWN', 'MEMORY BANK LOADING',
        'PASSENGER DETECTED', '⚠ DO NOT LEAN ON DOORS', '窗邊座位已佔用'
      ]
    },
    light: {
      sysTag: 'SECTOR 00 // LOBBY',
      sysTagPhotos: 'SECTOR 02 // PANOPTICON',
      sysTagStories: 'SECTOR 03 // RESEARCH',
      stationName: 'FBC TERMINAL — STATION 001',
      heroJp: '本處決定 — 通勤局 — 臨時通行',
      icon1: '[◉]', icon2: '[▦]', icon3: '[⬓]', icon4: '[▼]',
      marquee: [
        '⚠ SECTOR SHIFT IN PROGRESS', 'CLEARANCE PROVISIONAL',
        'THE HOUSE DECIDES', '⚠ DOORS MAY NOT BE WHERE YOU LEFT THEM',
        '通勤系統啟動中', 'DEPARTURE IMMINENT', 'ALL WINDOWS ARE MONITORED',
        'FILE OPEN — DO NOT REMOVE', '窗邊座位已佔用', 'BUREAU OF COMMUTING',
        'OBSERVATION ONGOING', '⚠ REPORT ANY ALTERED ITEM'
      ]
    }
  };

  function resolve(pref) {
    if (pref === 'light' || pref === 'dark') return pref;
    return mq.matches ? 'light' : 'dark';
  }

  function paintFlavour(theme) {
    var f = FLAVOUR[theme];
    if (!f) return;

    document.querySelectorAll('[data-flavour]').forEach(function (el) {
      var k = el.getAttribute('data-flavour');
      if (f[k] !== undefined) el.textContent = f[k];
    });

    var m = document.getElementById('marquee');
    if (m) {
      m.innerHTML = '';
      /* listed twice — the loop is translateX(-50%) */
      f.marquee.concat(f.marquee).forEach(function (s) {
        var sp = document.createElement('span');
        sp.textContent = s;
        m.appendChild(sp);
      });
    }
  }

  function markActive(pref) {
    var pane = document.getElementById('themePane');
    if (!pane) return;
    pane.querySelectorAll('.lang-opt').forEach(function (o) {
      var on = o.dataset.themePref === pref;
      o.classList.toggle('is-active', on);
      o.setAttribute('aria-checked', on ? 'true' : 'false');
    });
  }

  function apply(pref) {
    var theme = resolve(pref);
    document.documentElement.setAttribute('data-theme', theme);
    paintFlavour(theme);
    markActive(pref);
    window.dispatchEvent(new CustomEvent('tc-theme-changed', {
      detail: { pref: pref, theme: theme }
    }));
  }

  function stored() {
    var v = null;
    try { v = localStorage.getItem(KEY); } catch (e) {}
    return (v === 'light' || v === 'dark') ? v : 'auto';
  }

  apply(stored());

  /* follow the OS only while the preference is auto */
  var onSystemChange = function () { if (stored() === 'auto') apply('auto'); };
  if (mq.addEventListener) mq.addEventListener('change', onSystemChange);
  else if (mq.addListener) mq.addListener(onSystemChange);

  window.tcSetTheme = function (pref) {
    try {
      if (pref === 'auto') localStorage.removeItem(KEY);
      else localStorage.setItem(KEY, pref);
    } catch (e) {}
    apply(pref);
  };

  /* ── PANE ──────────────────────────────────────────────────────
     Same mechanism as the language pane in nav.js, kept here so the
     shared nav.js needs no change until the other four pages are
     tokenised and get a theme cell of their own.                  */
  var wrap = document.getElementById('themeWrap');
  var btn  = document.getElementById('themeBtn');
  var pane = document.getElementById('themePane');
  if (!wrap || !btn || !pane) return;

  function setOpen(open) {
    wrap.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (!open && wrap.contains(document.activeElement)) document.activeElement.blur();
  }

  if (window.matchMedia('(hover: hover)').matches) {
    var timer;
    wrap.addEventListener('mouseenter', function () { clearTimeout(timer); setOpen(true); });
    /* grace period: the pane sits outside the wrapper's own box */
    wrap.addEventListener('mouseleave', function () { timer = setTimeout(function () { setOpen(false); }, 90); });
    btn.addEventListener('focus', function () { clearTimeout(timer); setOpen(true); });
    wrap.addEventListener('focusout', function (e) {
      if (!wrap.contains(e.relatedTarget)) setOpen(false);
    });
  } else {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!wrap.classList.contains('open'));
    });
    document.addEventListener('scroll', function () { setOpen(false); }, true);
  }

  pane.querySelectorAll('.lang-opt').forEach(function (opt) {
    opt.addEventListener('click', function (e) {
      e.stopPropagation();
      window.tcSetTheme(opt.dataset.themePref);
      setOpen(false);
    });
  });

  document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) setOpen(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
})();
