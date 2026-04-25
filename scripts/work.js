/* ══════════════════════════════════════════════════════════════════
   work.js — A Business Trip / Ticket + CV drawer logic
   Extracted from work.html for maintainability.
   ══════════════════════════════════════════════════════════════════ */

(function () {

  /* ── HAMBURGER (cached lookups + a11y + close on link click) ── */
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

  /* ── CV SECTIONS DATA ─────────────────────────────────────── */
  // CV content is built from translation keys at render time so language
  // switching re-renders the open drawer (or stages the new content for next open).
  function buildCV() {
    const t = (k) => (typeof window.tc_t === 'function') ? window.tc_t(k) : k;
    const present = t('cvPresent') || 'PRESENT';
    const linksLbl = t('cvLinksLabel') || 'LINKS //';

    return {
      experience: {
        id: 'EXP', title: t('cvSecExp') || 'Experience',
        html: `
          <div class="cv-entry">
            <div class="cv-entry-side">
              <div class="cv-entry-dates"><span class="cv-date-from">JAN 2026</span><span class="cv-date-arrow">↓</span><span class="cv-date-to">${present}</span></div>
              <div class="cv-entry-num">EXP-01</div>
            </div>
            <div class="cv-entry-body">
              <div class="cv-entry-company">EY</div>
              <div class="cv-entry-role">${t('cvExp1Role')}</div>
              <div class="cv-entry-dept">${t('cvExp1Dept')}</div>
              <ul class="cv-bullets">
                <li>${t('cvExp1B1')}</li>
                <li>${t('cvExp1B2')}</li>
                <li>${t('cvExp1B3')}</li>
              </ul>
            </div>
          </div>
          <div class="cv-inner-divider"></div>
          <div class="cv-entry">
            <div class="cv-entry-side">
              <div class="cv-entry-dates"><span class="cv-date-from">JUN 2024</span><span class="cv-date-arrow">↓</span><span class="cv-date-to">DEC 2025</span></div>
              <div class="cv-entry-num">EXP-02</div>
            </div>
            <div class="cv-entry-body">
              <div class="cv-entry-company">LUTECH S.P.A.</div>
              <div class="cv-entry-role">${t('cvExp2Role')}</div>
              <div class="cv-entry-dept">${t('cvExp2Dept')}</div>
              <ul class="cv-bullets">
                <li>${t('cvExp2B1')}</li>
                <li>${t('cvExp2B2')}</li>
                <li>${t('cvExp2B3')}</li>
                <li>${t('cvExp2B4')}</li>
              </ul>
            </div>
          </div>
          <div class="cv-inner-divider"></div>
          <div class="cv-entry">
            <div class="cv-entry-side">
              <div class="cv-entry-dates"><span class="cv-date-from">DEC 2021</span><span class="cv-date-arrow">↓</span><span class="cv-date-to">JUN 2024</span></div>
              <div class="cv-entry-num">EXP-03</div>
            </div>
            <div class="cv-entry-body">
              <div class="cv-entry-company">ATOS ITALY</div>
              <div class="cv-entry-role">${t('cvExp3Role')}</div>
              <div class="cv-entry-dept">${t('cvExp3Dept')}</div>
              <ul class="cv-bullets">
                <li>${t('cvExp3B1')}</li>
                <li>${t('cvExp3B2')}</li>
                <li>${t('cvExp3B3')}</li>
                <li>${t('cvExp3B4')}</li>
                <li>${t('cvExp3B5')}</li>
              </ul>
            </div>
          </div>`
      },
      education: {
        id: 'EDU', title: t('cvSecEdu') || 'Education',
        html: `
          <div class="cv-entry">
            <div class="cv-entry-side">
              <div class="cv-entry-dates"><span class="cv-date-from">2023</span><span class="cv-date-arrow">↓</span><span class="cv-date-to">JUL 2025</span></div>
              <div class="cv-entry-num">EDU-01</div>
            </div>
            <div class="cv-entry-body">
              <div class="cv-entry-company">UNIBA</div>
              <div class="cv-entry-role">${t('cvEdu1Role')}</div>
              <div class="cv-entry-dept">${t('cvEdu1Dept')}</div>
              <p class="cv-desc">${t('cvEdu1Desc')}</p>
            </div>
          </div>
          <div class="cv-inner-divider"></div>
          <div class="cv-entry">
            <div class="cv-entry-side">
              <div class="cv-entry-dates"><span class="cv-date-from">2018</span><span class="cv-date-arrow">↓</span><span class="cv-date-to">MAY 2021</span></div>
              <div class="cv-entry-num">EDU-02</div>
            </div>
            <div class="cv-entry-body">
              <div class="cv-entry-company">UNISA</div>
              <div class="cv-entry-role">${t('cvEdu2Role')}</div>
              <div class="cv-entry-dept">${t('cvEdu2Dept')}</div>
              <p class="cv-desc">${t('cvEdu2Desc')}</p>
            </div>
          </div>`
      },
      projects: {
        id: 'PROJ', title: t('cvSecProj') || 'Projects',
        html: `
          <div class="cv-entry">
            <div class="cv-entry-side">
              <div class="cv-entry-dates"><span class="cv-date-from">ATOS</span><span class="cv-date-arrow">↓</span><span class="cv-date-to">EDU</span></div>
              <div class="cv-entry-num">P-01</div>
            </div>
            <div class="cv-entry-body">
              <div class="cv-entry-company">${t('cvProj1Title')}</div>
              <div class="cv-entry-role">${t('cvProj1Role')}</div>
              <div class="cv-entry-dept">${t('cvProj1Dept')}</div>
              <p class="cv-desc">${t('cvProj1Desc')}</p>
              <div class="cv-links">
                <span class="cv-links-label">${linksLbl}</span>
                <ul class="cv-link-list">
                  <li><a href="https://www.quantumcomputinglab.cineca.it/2023/09/01/pqcs-day-4-atos-myqlm/" target="_blank" rel="noopener">${t('cvProj1L1')}</a></li>
                  <li><a href="https://lms.federica.eu/course/view.php?id=879" target="_blank" rel="noopener">${t('cvProj1L2')}</a></li>
                  <li><a href="https://agenda.infn.it/event/30202/contributions/168532/" target="_blank" rel="noopener">${t('cvProj1L3')}</a></li>
                  <li><a href="https://www.einaudisenorbi.edu.it/wordpress/wp-content/uploads/2024/11/Programma-FestivalScienza.pdf" target="_blank" rel="noopener">${t('cvProj1L4')}</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="cv-inner-divider"></div>
          <div class="cv-entry">
            <div class="cv-entry-side">
              <div class="cv-entry-dates"><span class="cv-date-from">LUTECH</span><span class="cv-date-arrow">↓</span><span class="cv-date-to">AI/PM</span></div>
              <div class="cv-entry-num">P-02</div>
            </div>
            <div class="cv-entry-body">
              <div class="cv-entry-company">${t('cvProj2Title')}</div>
              <div class="cv-entry-role">${t('cvProj2Role')}</div>
              <div class="cv-entry-dept">${t('cvProj2Dept')}</div>
              <p class="cv-desc">${t('cvProj2Desc')}</p>
            </div>
          </div>
          <div class="cv-inner-divider"></div>
          <div class="cv-entry">
            <div class="cv-entry-side">
              <div class="cv-entry-dates"><span class="cv-date-from">LUTECH</span><span class="cv-date-arrow">↓</span><span class="cv-date-to">URBAN</span></div>
              <div class="cv-entry-num">P-03</div>
            </div>
            <div class="cv-entry-body">
              <div class="cv-entry-company">${t('cvProj3Title')}</div>
              <div class="cv-entry-role">${t('cvProj3Role')}</div>
              <div class="cv-entry-dept">${t('cvProj3Dept')}</div>
              <p class="cv-desc">${t('cvProj3Desc')}</p>
            </div>
          </div>`
      },
      skills: {
        id: 'SKL', title: t('cvSecSkl') || 'Skills',
        html: `
          <div class="cv-narrative">
            <p class="cv-narrative-para">${t('cvSklP1')}</p>
            <p class="cv-narrative-para">${t('cvSklP2')}</p>
            <p class="cv-narrative-para">${t('cvSklP3')}</p>
            <div class="cv-narrative-divider"></div>
            <div class="cv-narrative-inline-group">
              <span class="cv-narrative-inline-label">${t('cvSklCertLbl')}</span>
              <span class="cv-narrative-inline-text">${t('cvSklCert')}</span>
            </div>
            <div class="cv-narrative-inline-group">
              <span class="cv-narrative-inline-label">${t('cvSklLangLbl')}</span>
              <span class="cv-narrative-inline-text">${t('cvSklLangIt')} <span class="cv-hl-muted">${t('cvSklLangNative')}</span> &nbsp;·&nbsp; ${t('cvSklLangEn')} <span class="cv-hl-muted">${t('cvSklLangC1')}</span> &nbsp;·&nbsp; ${t('cvSklLangZh')} <span class="cv-hl-muted">${t('cvSklLangWip')}</span></span>
            </div>
          </div>`
      },
      interests: {
        id: 'INT', title: t('cvSecInt') || 'Interests',
        html: `
          <div class="cv-int-grid">
            <div class="cv-int-item"><div class="cv-int-label">${t('intLinuxLbl')}</div><p class="cv-int-desc">${t('intLinux')}</p></div>
            <div class="cv-int-item"><div class="cv-int-label">${t('intScifiLbl')}</div><p class="cv-int-desc">${t('intScifi')}</p></div>
            <div class="cv-int-item"><div class="cv-int-label">${t('intDesignLbl')}</div><p class="cv-int-desc">${t('intDesign')}</p></div>
            <div class="cv-int-item"><div class="cv-int-label">${t('intGdrLbl')}</div><p class="cv-int-desc">${t('intGdr')}</p></div>
          </div>`
      }
    };
  }

  let CV_SECTIONS = buildCV();
  let _activeSectionKey = null;

  // Re-render the open CV drawer when language changes
  window.addEventListener('tc-lang-changed', () => {
    CV_SECTIONS = buildCV();
    if (_activeSectionKey && drawer && drawer.classList.contains('open')) {
      const s = CV_SECTIONS[_activeSectionKey];
      if (s) {
        const titleEl = document.getElementById('drawer-title');
        const bodyEl  = document.getElementById('cv-drawer-body');
        if (titleEl) titleEl.textContent = s.title;
        if (bodyEl)  bodyEl.innerHTML = s.html;
      }
    }
  });

  /* ── DRAWER ───────────────────────────────────────────────── */
  const drawer   = document.getElementById('cv-drawer');
  const backdrop = document.getElementById('cv-backdrop');
  let lastTriggerRow = null;

  function openDrawer(key, triggerEl) {
    CV_SECTIONS = buildCV(); // refresh in case lang changed before opening
    const s = CV_SECTIONS[key];
    if (!s) return;
    _activeSectionKey = key;
    lastTriggerRow = triggerEl || null;
    document.getElementById('drawer-id').textContent    = s.id;
    document.getElementById('drawer-title').textContent = s.title;
    document.getElementById('cv-drawer-body').innerHTML = s.html;
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    _activeSectionKey = null;
    if (lastTriggerRow && typeof lastTriggerRow.focus === 'function') {
      lastTriggerRow.focus();
    }
  }

  document.querySelectorAll('.ticket-section-row').forEach(row => {
    row.addEventListener('click', () => openDrawer(row.dataset.section, row));
  });
  document.getElementById('cv-drawer-close').addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
  });
})();
