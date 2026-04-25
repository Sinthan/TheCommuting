const TRANSLATIONS = {
  en: {
    // sys bar — NOT translated (fixed UI chrome)
    // card numbers + titles — NOT translated
    // status bar — NOT translated
    // page header eyebrow + title — NOT translated

    // nav links
    navPhotos:   'Photos',
    navStories:  'Stories',
    navWork:     'Work',
    navAbout:    'About',

    // hero — code line + subtitle only
    heroCode:    '>_ NEXT STOP... SIN-001 // MEMORY_LOST',
    heroSubtitle: "In this imaginary train trip you just embarked, there's no clear destination, maybe just a clear start:<br>Sinthan a.k.a. Agostino Maria Cassese, will be your driver to a land of weird photos, stories from different lands and his own little wisdom from his personal career. Please don't put your feet on the seats unless 真有趣",

    // cards — descriptions only
    card1Desc:    'I like to imagine myself in an alien train, taking photos of weird landscapes... take a peek!',
    card2Desc:    'I write and I write too much, you can find some of that, here.',
    card3Desc:    'Professional career, passions and dedication in the previous stops of my life.',

    // archive sub-label + loaded status only
    archiveSub:    '>_ Windows to nowhere — Scroll and click to take a look',
    archiveLoaded: 'Archive loaded',

    // stories sub-label only (eyebrow + title stay fixed)
    storiesSub: '>_ Dispatches from the window seat — click on a train to read',

    // gallery next-stop eyebrow (translated)
    nextStop: 'Next stop:',

    // tech page
    workSub:    '>_ Boarding pass — Click on a category to spy on my working life',
    workDl:     '↓ RESUME.PDF',
    tabExp:     'EXPERIENCE',
    tabEdu:     'EDUCATION',
    tabProj:    'PROJECTS',
    tabSkills:  'SKILLS',
    tabInt:     'INTERESTS',
    intLinux:   'Passionate about open-source software and Linux ecosystems.',
    intScifi:   'Avid reader and writer. Writes books when the mind gets too loud.',
    intDesign:  'Interested in Architectural, Fashion and Communication Design.',
    intGdr:     'Into tabletop role-playing games and collaborative world-building.',
  },

  it: {
    navPhotos:   'Foto',
    navStories:  'Storie',
    navWork:     'Lavoro',
    navAbout:    'Chi sono',

    heroCode:    '>_ PROSSIMA FERMATA... SIN-001 // MEMORIA_PERSA',
    heroSubtitle: "In questo viaggio in treno immaginario che hai appena intrapreso, non c'è una destinazione chiara, forse solo un inizio chiaro:<br>Sinthan, alias Agostino Maria Cassese, sarà il tuo conducente verso un mondo di foto strane, storie da terre diverse e la sua piccola saggezza dalla sua carriera personale. Per favore non mettere i piedi sui sedili a meno che 真有趣",

    card1Desc:    "Mi piace immaginarmi su un treno alieno, fotografando paesaggi strani... dai un'occhiata!",
    card2Desc:    "Scrivo e scrivo troppo, puoi trovarne un po' qui.",
    card3Desc:    'Carriera professionale, passioni e dedizione nelle tappe precedenti della mia vita.',

    archiveSub:    '>_ SCORRI PER SFOGLIARE LE FERMATE',
    archiveLoaded: 'Archivio caricato',

    storiesSub: '>_ Dispacci dal finestrino — clicca su un treno per leggere',

    nextStop: 'Prossima fermata:',

    workSub:    '>_ CARTA D\'IMBARCO — CARRIERA IN TRANSITO',
    workDl:     '↓ CURRICULUM.PDF',
    tabExp:     'ESPERIENZA',
    tabEdu:     'FORMAZIONE',
    tabProj:    'PROGETTI',
    tabSkills:  'COMPETENZE',
    tabInt:     'INTERESSI',
    intLinux:   'Appassionato di software open-source e sistemi Linux.',
    intScifi:   'Lettore e scrittore. Scrive libri quando la mente è troppo affollata.',
    intDesign:  'Interessato al Design Architettonico, della Moda e della Comunicazione.',
    intGdr:     'Appassionato di giochi di ruolo da tavolo e world-building collaborativo.',
  },

  zh: {
    navPhotos:   '相片',
    navStories:  '故事',
    navWork:     '工作',
    navAbout:    '關於',

    heroCode:    '>_ 下一站... SIN-001 // 記憶遺失',
    heroSubtitle: "在這趟你剛踏上的想像火車旅程中，沒有明確的目的地，也許只有一個清晰的起點：<br>Sinthan，又名 Agostino Maria Cassese，將帶領你進入一個充滿奇異照片、來自不同土地的故事，以及他個人職業生涯中的小小智慧。請勿將腳放在座椅上，除非 真有趣",

    card1Desc:    '我喜歡想像自己在一列外星火車上，拍攝奇異的風景……來看看吧！',
    card2Desc:    '我寫個不停，你可以在這裡找到其中一部分。',
    card3Desc:    '我職業生涯中前幾站的專業歷程、熱情與奉獻。',

    archiveSub:    '>_ 滾動瀏覽各站',
    archiveLoaded: '檔案已載入',

    storiesSub: '>_ 來自窗邊座位的筆記 — 點擊列車閱讀',

    nextStop: '下一站：',

    workSub:    '>_ 登機證 — 點擊類別，窺探我的職業生涯',
    workDl:     '↓ 履歷.PDF',
    tabExp:     '工作經歷',
    tabEdu:     '學歷',
    tabProj:    '專案',
    tabSkills:  '技能',
    tabInt:     '興趣',
    intLinux:   '熱衷於開源軟體與 Linux 系統。',
    intScifi:   '愛閱讀、愛寫作。思緒紛亂時提筆寫書。',
    intDesign:  '對建築、時尚與傳播設計充滿興趣。',
    intGdr:     '喜愛桌上角色扮演遊戲與共同世界構建。',
  }
};

// ── LANG SWITCHER LOGIC ──
(function () {
  const STORAGE_KEY = 'tc-lang';

  // Detect preferred language from browser/region. Priority:
  // 1. Saved preference (user already chose)
  // 2. Browser navigator.languages[] / navigator.language
  // 3. Fallback to 'en'
  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && TRANSLATIONS[saved]) return saved;

    const candidates = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || 'en'];

    for (const raw of candidates) {
      const lc = (raw || '').toLowerCase();
      if (lc.startsWith('zh')) return 'zh';
      if (lc.startsWith('it')) return 'it';
      if (lc.startsWith('en')) return 'en';
    }
    return 'en';
  }

  let currentLang = detectLang();

  const LANG_LABELS = { en: 'EN', it: 'IT', zh: '中文' };

  // Exposed globally so photos.html gallery builder can read current nextStop label
  window.getCurrentNextStop = function () {
    return (TRANSLATIONS[currentLang] || TRANSLATIONS.en).nextStop || 'Next stop:';
  };

  // Exposed so dynamically-injected content (e.g. work.js CV drawer) can
  // re-apply translations to newly added elements with t-* IDs.
  window.applyCurrentTranslations = function () {
    applyTranslations(currentLang);
  };

  function flipText(el, newText, animate) {
    if (!el) return;
    const isHTML = newText && newText.includes('<');
    if (isHTML) { el.innerHTML = newText; return; }
    const text = newText || '';

    // Fast path: no animation on first load — set text directly
    if (!animate) {
      el.textContent = text;
      return;
    }

    // First pass: if element doesn't yet have flip spans (i.e. raw text from HTML),
    // clear it cleanly before building spans. This prevents text doubling.
    const hasSpans = el.querySelector('.tc-fc');
    if (!hasSpans) {
      el.textContent = '';
    }

    const chars = [...text];
    // build new spans if needed
    while (el.querySelectorAll('.tc-fc').length < chars.length) {
      const o = document.createElement('span'); o.className = 'tc-fc';
      o.style.cssText = 'display:inline-block;perspective:200px;vertical-align:bottom;';
      const i = document.createElement('span'); i.className = 'tc-fi';
      i.style.cssText = 'display:inline-block;transform-origin:center bottom;backface-visibility:hidden;';
      o.appendChild(i); el.appendChild(o);
    }
    // trim excess spans
    const all = el.querySelectorAll('.tc-fc');
    for (let i = chars.length; i < all.length; i++) all[i].remove();

    const spans = el.querySelectorAll('.tc-fi');
    const indices = [...chars.keys()].sort(() => Math.random() - 0.5);
    indices.forEach((i, rank) => {
      const span = spans[i];
      if (!span) return;
      const ch = chars[i] === ' ' ? '\u00A0' : chars[i];
      setTimeout(() => {
        span.style.animation = 'none';
        void span.offsetWidth;
        span.textContent = ch;
        span.style.animation = 'tc-flip 0.18s ease-in-out forwards';
      }, rank * 12 + Math.random() * 20);
    });
  }

  // inject keyframe once
  if (!document.getElementById('tc-flip-style')) {
    const s = document.createElement('style');
    s.id = 'tc-flip-style';
    s.textContent = '@keyframes tc-flip{0%{transform:rotateX(0)}49%{transform:rotateX(90deg);opacity:.3}50%{transform:rotateX(-90deg);opacity:.3}100%{transform:rotateX(0);opacity:1}}';
    document.head.appendChild(s);
  }

  function applyTranslations(lang, animate) {
    const t = TRANSLATIONS[lang];
    if (!t) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-Hant' : lang);

    function setText(id, html) {
      const el = document.getElementById(id);
      if (!el) return;
      flipText(el, html || '', animate);
    }

    // nav links
    setText('t-nav-photos',    t.navPhotos);
    setText('t-nav-stories',   t.navStories);
    setText('t-nav-work',      t.navWork);
    setText('t-nav-about',     t.navAbout);
    // mobile drawer nav links
    setText('t-nav-photos-m',  t.navPhotos);
    setText('t-nav-stories-m', t.navStories);
    setText('t-nav-work-m',    t.navWork);
    setText('t-nav-about-m',   t.navAbout);

    // hero — code + subtitle only (eyebrow + title stay fixed)
    setText('t-hero-code',     t.heroCode);
    setText('t-hero-subtitle', t.heroSubtitle);

    // warn strip — intentionally NOT translated

    // cards — descriptions only (numbers + titles stay fixed)
    setText('t-card1-desc', t.card1Desc);
    setText('t-card2-desc', t.card2Desc);
    setText('t-card3-desc', t.card3Desc);

    // status bar — intentionally NOT translated

    // archive — sub-label + loaded status only (eyebrow + title stay fixed)
    setText('t-archive-sub',    t.archiveSub);
    setText('t-archive-loaded', t.archiveLoaded);

    // stories — sub-label only (eyebrow + title stay fixed)
    setText('t-stories-sub', t.storiesSub);

    // tech page
    setText('t-work-sub',    t.workSub);
    setText('t-work-dl',     t.workDl);
    setText('t-tab-exp',     t.tabExp);
    setText('t-tab-edu',     t.tabEdu);
    setText('t-tab-proj',    t.tabProj);
    setText('t-tab-skills',  t.tabSkills);
    setText('t-tab-int',     t.tabInt);
    setText('t-int-linux',   t.intLinux);
    setText('t-int-scifi',   t.intScifi);
    setText('t-int-design',  t.intDesign);
    setText('t-int-gdr',     t.intGdr);

    // gallery: update all rendered next-stop eyebrow labels live
    document.querySelectorAll('.stop-label-eyebrow').forEach(el => {
      el.textContent = t.nextStop || 'Next stop:';
    });

    // update lang button label
    const btn = document.getElementById('lang-btn-label');
    if (btn) btn.textContent = LANG_LABELS[lang];

    // mark active option in all dropdowns + drawers
    document.querySelectorAll('.lang-option').forEach(el => {
      el.classList.toggle('lang-option-active', el.dataset.lang === lang);
    });
  }

  function initSwitcher() {
    const btn      = document.getElementById('lang-btn');
    const dropdown = document.getElementById('lang-dropdown');

    if (btn && dropdown) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('open');
        btn.classList.toggle('open');
      });
    }

    // bind all .lang-option buttons (desktop dropdown + mobile drawer)
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        applyTranslations(opt.dataset.lang, true);
        if (dropdown) dropdown.classList.remove('open');
        if (btn)      btn.classList.remove('open');
      });
    });

    document.addEventListener('click', () => {
      if (dropdown) dropdown.classList.remove('open');
      if (btn)      btn.classList.remove('open');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initSwitcher();
    applyTranslations(currentLang, false);
  });
})();
