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
  async function buildBoard() {
    let stories = [];
    try {
      const res = await fetch('./scripts/stories.json');
      stories = await res.json();
    } catch (e) {
      document.getElementById('board-rows').innerHTML =
        '<div class="board-error">// SIGNAL LOST — could not load manifest</div>';
      return;
    }

    const now = new Date();
    const times = generateTimes(stories.length, now.getHours(), now.getMinutes());
    const bigDelayIdx = rand(0, stories.length - 1);

    const container = document.getElementById('board-rows');
    container.innerHTML = '';
    const usedTrainCodes = new Set();

    stories.forEach((story, i) => {
      const train = trainCode(usedTrainCodes);

      /* 30% weird platform (comment now matches code) */
      const isWeird = Math.random() < 0.30;
      const platform = platformNum(isWeird);

      let delayMins = 0;
      let delayLabel = '';
      if (i === bigDelayIdx) {
        delayMins = rand(60, 120);
        delayLabel = `${delayMins}'`;
      } else if (Math.random() < 0.08) {
        delayMins = rand(5, 10);
        delayLabel = `${delayMins}'`;
      }

      const row = document.createElement('div');
      row.className = 'board-row' + (delayMins > 0 ? ' board-row--delayed' : '');
      if (i === bigDelayIdx) row.classList.add('board-row--big-delay');
      row.dataset.story    = JSON.stringify(story);
      row.dataset.train    = train;
      row.dataset.platform = platform;
      row.dataset.time     = times[i];
      row.dataset.delay    = delayLabel;

      const delayCell = delayLabel || EM_DASH;

      row.innerHTML = `
        <span class="col-train bd-val">${train}</span>
        <span class="col-platform bd-val">${platform}</span>
        <span class="col-dest bd-val dest-name">${story.title}</span>
        <span class="col-time bd-val">${times[i]}</span>
        <span class="col-delay bd-val delay-val">${delayCell}</span>
        <span class="col-info bd-val info-val">${story.info}</span>
        <div class="row-mobile">
          <div class="row-mobile-dest">${story.title}</div>
          <div class="row-mobile-meta">
            <span class="row-mobile-plat">${platform}</span>
            <span class="row-mobile-sep">//</span>
            <span class="row-mobile-time">${times[i]}</span>
            <span class="row-mobile-sep">//</span>
            <span class="row-mobile-delay ${delayMins > 0 ? 'blink-delay' : ''}">${delayCell}</span>
          </div>
        </div>
      `;

      row.addEventListener('click', () => openDrawer(row));
      container.appendChild(row);
    });

    document.getElementById('status-train-count').textContent = `${stories.length} trains to read`;
  }

  /* ── DRAWER ────────────────────────────────────────────────── */
  const drawer   = document.getElementById('story-drawer');
  const backdrop = document.getElementById('story-backdrop');
  let lastTriggerRow = null;

  async function openDrawer(row) {
    lastTriggerRow = row;
    const story = JSON.parse(row.dataset.story);
    const delay = row.dataset.delay;

    document.getElementById('drawer-train').textContent    = row.dataset.train;
    document.getElementById('drawer-platform').textContent = row.dataset.platform;
    document.getElementById('drawer-time').textContent     = row.dataset.time;
    document.getElementById('drawer-dest').textContent     = story.title;
    document.getElementById('drawer-quote').textContent    = `>_ ${story.info}`;

    const badge = document.getElementById('drawer-delay-badge');
    /* delay is empty string when none — not an em-dash */
    if (delay) {
      badge.textContent = `DELAYED ${delay}`;
      badge.style.display = 'inline-block';
    } else {
      badge.style.display = 'none';
    }

    const bodyEl = document.getElementById('story-body-text');
    bodyEl.innerHTML = '<div class="story-loading">LOADING...</div>';

    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';

    try {
      const res  = await fetch(story.file);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      const paras = text.split(/\n\n+/).filter(p => p.trim());
      bodyEl.innerHTML = paras.map(p => `<p>${p.replace(/\n/g,'<br>')}</p>`).join('');
    } catch (e) {
      bodyEl.innerHTML = '<p class="story-load-err">// Could not load text file. Run on a local server.</p>';
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
