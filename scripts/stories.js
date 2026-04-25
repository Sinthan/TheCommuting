/* ══════════════════════════════════════════════════════════════════
   stories.js — Field Notes / Departures Board logic
   Extracted from stories.html for maintainability.
   ══════════════════════════════════════════════════════════════════ */

(function () {
  const EM_DASH = '\u2014';

  /* ── HELPERS ───────────────────────────────────────────────── */
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  const LETTERS = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  function trainCode(existing) {
    /* avoid collisions with already-generated codes */
    for (let tries = 0; tries < 50; tries++) {
      const l1 = LETTERS[rand(0, LETTERS.length - 1)];
      const l2 = LETTERS[rand(0, LETTERS.length - 1)];
      const n  = rand(100, 999);
      const code = `${l1}${l2} ${n}`;
      if (!existing.has(code)) { existing.add(code); return code; }
    }
    /* fallback — very unlikely */
    return `ZZ ${rand(100, 999)}`;
  }

  function platformNum(weird) {
    if (weird) {
      const opts = [
        () => `${rand(1,9)}.${rand(1,9)}`,
        () => `${rand(1,20)}\u00BD`,
        () => `${rand(1,9)}\u00BE`,
        () => `${rand(1,9)}\u2153`,
        () => `0${rand(1,9)}`,
        () => `${rand(1,9)}A`,
        () => `${pick(['\u03A9','\u03A8','\u0394','\u03A3','\u039B','\u039E','\u03A0','\u03A6'])}${rand(1,9)}`,
        () => `${rand(1,9)}${pick(['\u2135','\u2136','\u2127','\u2129','\u212E','\u213A'])}`,
        () => pick(['\u2070\u00B9','\u00B9\u00B2','\u00B2\u00B3','\u00B3\u2074','\u2074\u2075']),
        () => `${rand(1,9)}${pick(['\u0337','\u0338','\u0334','\u0335'])}${rand(1,9)}`,
        () => pick(['\u{1D130}', '\u{1D131}', '\u{1D132}', '\u{1D135}', '\u{1D136}']),
        () => pick(['\u29DC','\u2300','\u2298','\u2297','\u2295','\u229B','\u229E','\u229F']),
        () => `${rand(1,9)}${pick(['\u2080','\u2081','\u2082','\u2083','\u2084','\u2085','\u2086','\u2087','\u2088','\u2089'])}`,
        () => pick(['\u2205','\u221E','\u2204','\u2203','\u2207','\u2206']),
      ];
      return pick(opts)();
    }
    return String(rand(1, 22));
  }

  function generateTimes(count, baseHour, baseMin) {
    const times = [];
    let h = baseHour, m = baseMin;
    for (let i = 0; i < count; i++) {
      m += rand(2, 18);
      if (m >= 60) { m -= 60; h += 1; }
      if (h >= 24) h -= 24;
      times.push(`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`);
    }
    return times;
  }

  /* ── CLOCK ─────────────────────────────────────────────────── */
  function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2,'0');
    const m = String(now.getMinutes()).padStart(2,'0');
    const el = document.getElementById('board-clock');
    if (el) el.textContent = `${h}:${m}`;
  }
  updateClock();
  setInterval(updateClock, 20000);

  /* ── BUILD BOARD ───────────────────────────────────────────── */
  let _stories = [];
  let _rowState = []; // holds randomised values per row so they don't change on lang switch

  function pickLang(field) {
    const lang = (typeof window.getCurrentLang === 'function') ? window.getCurrentLang() : 'en';
    if (field && typeof field === 'object') {
      return field[lang] || field.en || field.it || Object.values(field)[0] || '';
    }
    return field || '';
  }

  async function buildBoard() {
    try {
      const res = await fetch('./scripts/stories.json');
      _stories = await res.json();
    } catch (e) {
      const el = document.getElementById('board-rows');
      if (el) el.innerHTML = `<div class="board-error">${(window.tc_t && window.tc_t('signalLost')) || '// SIGNAL LOST'}</div>`;
      return;
    }

    const now = new Date();
    const times = generateTimes(_stories.length, now.getHours(), now.getMinutes());
    const bigDelayIdx = rand(0, _stories.length - 1);
    const usedTrainCodes = new Set();

    _rowState = _stories.map((story, i) => {
      const train = trainCode(usedTrainCodes);
      const isWeird = Math.random() < 0.30;
      const platform = platformNum(isWeird);
      let delayMins = 0, delayLabel = '';
      if (i === bigDelayIdx) {
        delayMins = rand(60, 120);
        delayLabel = `${delayMins}'`;
      } else if (Math.random() < 0.08) {
        delayMins = rand(5, 10);
        delayLabel = `${delayMins}'`;
      }
      return { story, train, platform, time: times[i], delayMins, delayLabel, bigDelay: i === bigDelayIdx };
    });

    renderBoard();
  }

  function renderBoard() {
    const container = document.getElementById('board-rows');
    if (!container) return;
    container.innerHTML = '';

    _rowState.forEach(state => {
      const { story, train, platform, time, delayMins, delayLabel, bigDelay } = state;
      const title = pickLang(story.title);
      const info  = pickLang(story.info);

      const row = document.createElement('div');
      row.className = 'board-row' + (delayMins > 0 ? ' board-row--delayed' : '');
      if (bigDelay) row.classList.add('board-row--big-delay');
      row.dataset.story    = JSON.stringify(story);
      row.dataset.train    = train;
      row.dataset.platform = platform;
      row.dataset.time     = time;
      row.dataset.delay    = delayLabel;

      const delayCell = delayLabel || EM_DASH;

      row.innerHTML = `
        <span class="col-train bd-val">${train}</span>
        <span class="col-platform bd-val">${platform}</span>
        <span class="col-dest bd-val dest-name">${title}</span>
        <span class="col-time bd-val">${time}</span>
        <span class="col-delay bd-val delay-val">${delayCell}</span>
        <span class="col-info bd-val info-val">${info}</span>
        <div class="row-mobile">
          <div class="row-mobile-dest">${title}</div>
          <div class="row-mobile-meta">
            <span class="row-mobile-plat">${platform}</span>
            <span class="row-mobile-sep">//</span>
            <span class="row-mobile-time">${time}</span>
            <span class="row-mobile-sep">//</span>
            <span class="row-mobile-delay ${delayMins > 0 ? 'blink-delay' : ''}">${delayCell}</span>
          </div>
        </div>
      `;

      row.addEventListener('click', () => openDrawer(row));
      container.appendChild(row);
    });

    const countEl = document.getElementById('status-train-count');
    if (countEl) {
      const label = (window.tc_t && window.tc_t('trainsToRead')) || 'trains to read';
      countEl.textContent = `${_stories.length} ${label}`;
    }
  }

  // Re-render when language changes (preserves train codes, times, delays)
  window.addEventListener('tc-lang-changed', () => {
    if (_rowState.length) renderBoard();
  });

  /* ── DRAWER ────────────────────────────────────────────────── */
  const drawer   = document.getElementById('story-drawer');
  const backdrop = document.getElementById('story-backdrop');
  let lastTriggerRow = null;

  async function openDrawer(row) {
    lastTriggerRow = row;
    const story = JSON.parse(row.dataset.story);
    const delay = row.dataset.delay;

    const title = pickLang(story.title);
    const info  = pickLang(story.info);

    document.getElementById('drawer-train').textContent    = row.dataset.train;
    document.getElementById('drawer-platform').textContent = row.dataset.platform;
    document.getElementById('drawer-time').textContent     = row.dataset.time;
    document.getElementById('drawer-dest').textContent     = title;
    document.getElementById('drawer-quote').textContent    = `>_ ${info}`;

    const badge = document.getElementById('drawer-delay-badge');
    if (delay) {
      const lbl = (window.tc_t && window.tc_t('delayedLabel')) || 'DELAYED';
      badge.textContent = `${lbl} ${delay}`;
      badge.style.display = 'inline-block';
    } else {
      badge.style.display = 'none';
    }

    const bodyEl = document.getElementById('story-body-text');
    const loadingTxt = (window.tc_t && window.tc_t('storyLoading')) || 'LOADING...';
    bodyEl.innerHTML = `<div class="story-loading">${loadingTxt}</div>`;

    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Pick the file for the current language; fall back to IT (original) if missing.
    const lang = (typeof window.getCurrentLang === 'function') ? window.getCurrentLang() : 'en';
    let fileUrl;
    if (story.file && typeof story.file === 'object') {
      fileUrl = story.file[lang] || story.file.it || story.file.en || Object.values(story.file)[0];
    } else {
      fileUrl = story.file;
    }

    try {
      let res = await fetch(fileUrl);
      // Fallback to Italian original if translated file is missing
      if (!res.ok && story.file && typeof story.file === 'object' && story.file.it && fileUrl !== story.file.it) {
        res = await fetch(story.file.it);
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      const paras = text.split(/\n\n+/).filter(p => p.trim());
      bodyEl.innerHTML = paras.map(p => `<p>${p.replace(/\n/g,'<br>')}</p>`).join('');
    } catch (e) {
      const errTxt = (window.tc_t && window.tc_t('storyLoadErr')) || '// Could not load text file. Run on a local server.';
      bodyEl.innerHTML = `<p class="story-load-err">${errTxt}</p>`;
    }
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    if (lastTriggerRow && typeof lastTriggerRow.focus === 'function') {
      lastTriggerRow.focus();
    }
  }

  document.getElementById('story-drawer-close').addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
  });

  /* ── HAMBURGER (a11y + close on link click) ────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navDrawer = document.getElementById('nav-drawer');

  function setNavState(open) {
    hamburger.classList.toggle('open', open);
    navDrawer.classList.toggle('open', open);
    hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    navDrawer.setAttribute('aria-hidden', open ? 'false' : 'true');
  }
  setNavState(false);
  hamburger.addEventListener('click', () => {
    setNavState(!navDrawer.classList.contains('open'));
  });
  navDrawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setNavState(false));
  });

  /* ── INIT ──────────────────────────────────────────────────── */
  buildBoard();
})();
