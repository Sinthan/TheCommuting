/* ══════════════════════════════════════════════════════════════════
   photos.js — Archive page logic
   Extracted from photos.html for maintainability.
   ══════════════════════════════════════════════════════════════════ */

(function () {
  const timeline   = document.getElementById('timeline');
  const sidebar    = document.getElementById('album-sidebar');
  const backdrop   = document.getElementById('sidebar-backdrop');
  const sideTitle  = document.getElementById('sidebar-title');
  const sideStrip  = document.getElementById('sidebar-strip');
  const sideCount  = document.getElementById('sidebar-count');
  const sideClose  = document.getElementById('sidebar-close');
  const albumCount = document.getElementById('album-count');
  const hamburger  = document.getElementById('hamburger');
  const drawer     = document.getElementById('nav-drawer');
  const lightbox   = document.getElementById('lightbox');
  const lbImg      = document.getElementById('lightbox-img');
  const lbName     = document.getElementById('lightbox-name');
  const lbCounter  = document.getElementById('lightbox-counter');
  const lbClose    = document.getElementById('lightbox-close');
  const lbPrev     = document.getElementById('lightbox-prev');
  const lbNext     = document.getElementById('lightbox-next');

  let currentAlbum = null;
  let currentIndex = 0;
  let lastTriggerEl = null; /* for focus restore */

  /* ── HAMBURGER (with a11y + auto-close on link click) ── */
  function setDrawerState(open) {
    hamburger.classList.toggle('open', open);
    drawer.classList.toggle('open', open);
    hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
  }
  setDrawerState(false);
  hamburger.addEventListener('click', () => {
    setDrawerState(!drawer.classList.contains('open'));
  });
  /* close drawer when a link inside it is clicked */
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setDrawerState(false));
  });

  /* ── LIGHTBOX ── */
  function openLightbox(album, index) {
    currentAlbum = album;
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('open');
  }

  function closeLightbox() { lightbox.classList.remove('open'); }

  function updateLightbox() {
    const img = currentAlbum.images[currentIndex];
    lbImg.src = `${currentAlbum.folder}/${img}`;
    lbImg.alt = img;
    lbName.textContent = img.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ').toUpperCase();
    lbCounter.textContent = `${currentIndex + 1} / ${currentAlbum.images.length}`;
  }

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + currentAlbum.images.length) % currentAlbum.images.length;
    updateLightbox();
  });
  /* click image → advance (kept by design) */
  lbImg.addEventListener('click', e => { e.stopPropagation(); lbNext.click(); });
  lbImg.style.cursor = 'pointer';
  lbNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % currentAlbum.images.length;
    updateLightbox();
  });

  /* unified keyboard: lightbox takes priority over sidebar for Escape */
  document.addEventListener('keydown', e => {
    if (lightbox.classList.contains('open')) {
      if (e.key === 'Escape')     { closeLightbox(); return; }
      if (e.key === 'ArrowLeft')  { lbPrev.click();  return; }
      if (e.key === 'ArrowRight') { lbNext.click();  return; }
      return;
    }
    if (sidebar.classList.contains('open') && e.key === 'Escape') {
      closeSidebar();
    }
  });

  /* click black background closes */
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  /* ── SIDEBAR ── */
  function openSidebar(album, triggerEl) {
    currentAlbum = album;
    lastTriggerEl = triggerEl || null;
    sideTitle.textContent = album.name;
    sideStrip.innerHTML = '';
    album.images.forEach((img, i) => {
      const el = document.createElement('div');
      el.className = 'strip-item';
      el.style.animationDelay = `${i * 0.06}s`;
      const image = document.createElement('img');
      image.src = `${album.folder}/${img}`;
      image.alt = img;
      image.loading = 'lazy';
      image.addEventListener('click', () => openLightbox(album, i));
      el.appendChild(image);
      sideStrip.appendChild(el);
    });
    sideCount.textContent = `${album.images.length} image${album.images.length !== 1 ? 's' : ''}`;
    sidebar.classList.add('open');
    backdrop.classList.add('open');
    sidebar.setAttribute('aria-hidden', 'false');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    backdrop.classList.remove('open');
    sidebar.setAttribute('aria-hidden', 'true');
    /* restore focus to the window that opened the drawer */
    if (lastTriggerEl && typeof lastTriggerEl.focus === 'function') {
      lastTriggerEl.focus();
    }
  }

  sideClose.addEventListener('click', closeSidebar);
  backdrop.addEventListener('click', closeSidebar);

  /* wheel scroll on horizontal strip — use dominant axis (not sum) */
  sideStrip.addEventListener('wheel', e => {
    e.preventDefault();
    const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    sideStrip.scrollLeft += delta;
  }, { passive: false });

  /* ── LOAD ALBUMS & BUILD TIMELINE ── */
  fetch('./scripts/albums.json')
    .then(r => r.json())
    .then(albums => {
      albumCount.textContent = `${albums.length} stop${albums.length !== 1 ? 's' : ''}`;

      albums.forEach((album, i) => {
        const stop = document.createElement('div');
        stop.className = 'timeline-stop';

        const dot = document.createElement('div');
        dot.className = 'stop-dot';
        stop.appendChild(dot);

        const label = document.createElement('div');
        label.className = 'stop-label';
        const nextStopText = (typeof window.getCurrentNextStop === 'function')
          ? window.getCurrentNextStop()
          : 'Next stop:';

        function wrapQuote(q) {
          if (!q || q.length <= 100) return q;
          const breakAt = q.lastIndexOf(' ', 100);
          const pos = breakAt > 60 ? breakAt : 100;
          return q.slice(0, pos) + '<br>' + q.slice(pos).trimStart();
        }

        label.innerHTML = `
          <span class="stop-label-eyebrow">${nextStopText}</span>
          <span class="stop-label-name">${album.name}</span>
          ${album.quote ? `<span class="stop-label-quote">${wrapQuote(album.quote)}</span>` : ''}
        `;

        const connector = document.createElement('div');
        connector.className = 'stop-connector';

        const tick = document.createElement('div');
        tick.className = 'stop-connector-tick';

        const win = document.createElement('div');
        win.className = 'train-window';
        win.setAttribute('tabindex', '0');
        win.setAttribute('role', 'button');
        win.setAttribute('aria-label', `Open album: ${album.name}`);

        const previewImgs = album.images.slice(0, 4).map(img => {
          const thumbPath = `${album.folder}/thumbs/${img}`;
          const fullPath  = `${album.folder}/${img}`;
          /* guard against infinite onerror loop: null out handler before fallback */
          return `<img class="window-preview-img" src="${thumbPath}" alt="" loading="lazy" onerror="this.onerror=null;this.src='${fullPath}'">`;
        }).join('');

        win.innerHTML = `
          <div class="window-frame-outer">
            <div class="window-label">
              <span class="window-label-tag">VIEW // ${String(i + 1).padStart(2, '0')}</span>
            </div>
            <div class="window-pane">
              ${album.images.length > 0
                ? `<div class="window-preview">${previewImgs}</div>`
                : `<div class="window-dot-grid"></div>`
              }
              <div class="window-reflection"></div>
              <span class="window-enter">→ OPEN</span>
            </div>
          </div>
        `;

        win.addEventListener('click', () => openSidebar(album, win));
        win.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openSidebar(album, win);
          }
        });
        stop.appendChild(connector);
        stop.appendChild(tick);
        stop.appendChild(label);
        stop.appendChild(win);
        timeline.appendChild(stop);
      });

      /* terminal end of line */
      const end = document.createElement('div');
      end.className = 'timeline-end';
      end.innerHTML = `
        <div class="timeline-end-dot"></div>
        <span class="timeline-end-label">END OF LINE</span>
      `;
      timeline.appendChild(end);

      /* ── CONNECTOR WIDTH CALCULATION ── */
      function updateConnectors() {
        document.querySelectorAll('.timeline-stop').forEach(stop => {
          const dotEl = stop.querySelector('.stop-dot');
          const winEl = stop.querySelector('.train-window');
          if (!dotEl || !winEl) return;

          const dotRect  = dotEl.getBoundingClientRect();
          const winRect  = winEl.getBoundingClientRect();
          const stopRect = stop.getBoundingClientRect();

          const dotRightInStop = dotRect.right - stopRect.left;
          const winLeftInStop  = winRect.left  - stopRect.left;
          const connW = Math.max(8, winLeftInStop - dotRightInStop);
          const labelIndent = Math.max(0, winLeftInStop);

          stop.style.setProperty('--connector-w', connW + 'px');
          stop.style.setProperty('--label-indent', labelIndent + 'px');
        });
      }

      requestAnimationFrame(() => requestAnimationFrame(updateConnectors));
      document.fonts.ready.then(() => updateConnectors());
      window.addEventListener('resize', updateConnectors);

      /* ── INTERSECTION OBSERVER ── */
      const scrollContainer = document.querySelector('.timeline-scroll');
      const stops = document.querySelectorAll('.timeline-stop');

      if (stops.length > 0) stops[0].classList.add('active');

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            stops.forEach(s => s.classList.remove('active'));
            entry.target.classList.add('active');
          }
        });
      }, {
        root: scrollContainer,
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0
      });

      stops.forEach(s => observer.observe(s));
    })
    .catch(err => {
      console.error('Failed to load albums.json:', err);
      timeline.innerHTML = '<p class="archive-error">&gt;_ ERROR: scripts/albums.json not found or invalid.</p>';
    });

  /* ══════════════════════════════════════════════════════════════
     SHINKANSEN PARALLAX + TAIL INJECTION
     ══════════════════════════════════════════════════════════════ */
  (function () {
    const svgEl    = document.getElementById('shinkansen-bg');
    const scroller = document.querySelector('.timeline-scroll');
    const archiveHeader = document.querySelector('.archive-header');
    if (!svgEl || !scroller) return;

    function positionHead() {
      const headerH = archiveHeader ? archiveHeader.offsetHeight : 0;
      svgEl.style.top = headerH + 'px';
    }

    function injectTail() {
      const tailGroup = document.getElementById('shinkansen-tail');
      if (!tailGroup) return;

      const renderedW = svgEl.getBoundingClientRect().width;
      if (renderedW === 0) return;
      const scale = renderedW / 400;

      const totalSvgUnits = scroller.scrollHeight / scale;
      const tailY = Math.max(300, totalSvgUnits - 87);
      const T = tailY;

      tailGroup.innerHTML = `
        <g filter="url(#glow)" opacity="0.35">
          <path d="M276 ${T} C276 ${T+50} 292 ${T+78} 301 ${T+84} C304 ${T+86} 307 ${T+87} 310 ${T+87} C313 ${T+87} 316 ${T+86} 319 ${T+84} C328 ${T+78} 344 ${T+50} 344 ${T} Z"
                stroke="rgba(168,127,212,1)" stroke-width="2" fill="none" stroke-dasharray="3 3"/>
          <ellipse cx="310" cy="${T+87}" rx="9" ry="4"
                   stroke="rgba(168,127,212,0.8)" stroke-width="1.2" fill="none" stroke-dasharray="2 3"/>
          <path d="M292 ${T} C292 ${T+45} 302 ${T+72} 307 ${T+77} C308 ${T+78} 310 ${T+79} 310 ${T+79} C310 ${T+79} 312 ${T+78} 313 ${T+77} C318 ${T+72} 328 ${T+45} 328 ${T} Z"
                stroke="rgba(168,127,212,0.6)" stroke-width="1" fill="none" stroke-dasharray="2 4"/>
          <line x1="310" y1="${T}" x2="310" y2="${T+86}"
                stroke="rgba(168,127,212,0.4)" stroke-width="0.9" stroke-dasharray="2 5"/>
          <circle cx="310" cy="${T+20}" r="1.4" fill="rgba(168,127,212,0.65)"/>
          <circle cx="310" cy="${T+45}" r="1.4" fill="rgba(168,127,212,0.65)"/>
          <circle cx="310" cy="${T+68}" r="1.8" fill="rgba(168,127,212,0.9)"/>
        </g>
      `;
      tailGroup.setAttribute('opacity', '1');

      svgEl.setAttribute('viewBox', `0 0 400 ${Math.ceil(T + 96)}`);
    }

    function onScroll() {
      const svgH      = svgEl.getBoundingClientRect().height;
      const scrollerH = scroller.getBoundingClientRect().height;
      const maxTravel = Math.max(0, svgH - scrollerH);
      const maxScroll = scroller.scrollHeight - scroller.clientHeight;
      if (maxScroll <= 0) return;

      const ratio = maxTravel > 0 ? Math.min(maxTravel / maxScroll, 1) : 0;
      svgEl.style.transform = `translateY(${-(scroller.scrollTop * ratio)}px)`;
    }

    function init() {
      positionHead();
      injectTail();
      onScroll();
    }

    scroller.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => { positionHead(); injectTail(); onScroll(); }, { passive: true });

    /* fire after albums injected — batch via debounced MO */
    const timelineEl = document.getElementById('timeline');
    if (timelineEl) {
      let scheduled = false;
      const mo = new MutationObserver(() => {
        if (scheduled) return;
        scheduled = true;
        requestAnimationFrame(() => requestAnimationFrame(() => {
          scheduled = false;
          init();
        }));
      });
      mo.observe(timelineEl, { childList: true });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  })();
})();
