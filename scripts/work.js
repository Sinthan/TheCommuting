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
  const CV_SECTIONS = {
    experience: {
      id: 'EXP', title: 'Experience',
      html: `
        <div class="cv-entry">
          <div class="cv-entry-side">
            <div class="cv-entry-dates"><span class="cv-date-from">JAN 2026</span><span class="cv-date-arrow">↓</span><span class="cv-date-to">PRESENT</span></div>
            <div class="cv-entry-num">EXP-01</div>
          </div>
          <div class="cv-entry-body">
            <div class="cv-entry-company">EY</div>
            <div class="cv-entry-role">Tech Consultant</div>
            <div class="cv-entry-dept">Cyber Security &amp; Digital Protection · Milan, IT</div>
            <ul class="cv-bullets">
              <li>Post-Quantum Cryptography advisor, delivering readiness assessments and adoption roadmaps</li>
              <li>Infrastructure Project Manager for FST, overseeing delivery governance and stakeholder coordination</li>
              <li>Data Protection consultant, providing strategic advisory on EU and Italian regulatory frameworks including GDPR and national compliance requirements</li>
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
            <div class="cv-entry-role">Project Coordinator</div>
            <div class="cv-entry-dept">Smart City &amp; Mobility Solutions · Milan, IT</div>
            <ul class="cv-bullets">
              <li>Managed multiple R&amp;D teams with agile methodology</li>
              <li>Led projects on AI prediction models &amp; GIS-like systems on HPC and Quantum</li>
              <li>Created documentation, repos, demos and analysis for team operations</li>
              <li>Coordinated meetings, events and stakeholder communications</li>
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
            <div class="cv-entry-role">Consultant — HPC, AI &amp; Quantum Computing</div>
            <div class="cv-entry-dept">Milan, IT</div>
            <ul class="cv-bullets">
              <li>Managed pre-sales technical operations as Quantum Computing evangelist</li>
              <li>Key accounts: ENI, CINECA, CNMOST, PoliMI, BIREX</li>
              <li>Delivered crash courses for University of Naples, CINECA and other entities</li>
              <li>Presented Quantum portfolio: Optimization, Cybersecurity, Machine Learning</li>
              <li>Deepened partnerships with PoliMI Osservatorio QC &amp; IBM Quantum</li>
            </ul>
          </div>
        </div>`
    },
    education: {
      id: 'EDU', title: 'Education',
      html: `
        <div class="cv-entry">
          <div class="cv-entry-side">
            <div class="cv-entry-dates"><span class="cv-date-from">2023</span><span class="cv-date-arrow">↓</span><span class="cv-date-to">JUL 2025</span></div>
            <div class="cv-entry-num">EDU-01</div>
          </div>
          <div class="cv-entry-body">
            <div class="cv-entry-company">UNIBA</div>
            <div class="cv-entry-role">Master of Quantum Science &amp; Technologies</div>
            <div class="cv-entry-dept">University of Bari Aldo Moro · Bari, IT</div>
            <p class="cv-desc">A one-year industry-oriented program bridging quantum theory and practice, run by the Department of Physics — ranked 3rd in Italy and the only Department of Excellence south of Rome. Curriculum covers Quantum Computing, Quantum Algorithms, Quantum Communication, Quantum Machine Learning and Quantum Engineering, with an 8-month course component and a 4-month industry internship. The program actively collaborates with companies and research institutions, including a formal partnership with Xanadu Quantum Technologies.</p>
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
            <div class="cv-entry-role">Bachelor of Computer Science</div>
            <div class="cv-entry-dept">University of Salerno · Salerno, IT</div>
            <p class="cv-desc">Three-year program at one of Italy's oldest Computer Science departments — established in 1971 and recognised as a Department of Excellence by the Ministry of University and Research. Curriculum spans algorithms, software engineering, computer networks, operating systems and distributed computing, with a strong emphasis on both theoretical foundations and practical application through lab work and industry traineeships.</p>
          </div>
        </div>`
    },
    projects: {
      id: 'PROJ', title: 'Projects',
      html: `
        <div class="cv-entry">
          <div class="cv-entry-side">
            <div class="cv-entry-dates"><span class="cv-date-from">ATOS</span><span class="cv-date-arrow">↓</span><span class="cv-date-to">EDU</span></div>
            <div class="cv-entry-num">P-01</div>
          </div>
          <div class="cv-entry-body">
            <div class="cv-entry-company">QUANTUM COMPUTING AND HPC DISSEMINATION</div>
            <div class="cv-entry-role">Instructor &amp; Curriculum Lead</div>
            <div class="cv-entry-dept">Universities &amp; Centers of Excellence</div>
            <p class="cv-desc">Designed and delivered high-tech courses for universities and research centers on HPC and Quantum Computing solutions.</p>
            <div class="cv-links">
              <span class="cv-links-label">LINKS //</span>
              <ul class="cv-link-list">
                <li><a href="https://www.quantumcomputinglab.cineca.it/2023/09/01/pqcs-day-4-atos-myqlm/" target="_blank" rel="noopener">CINECA - Practical Quantum Computing School on Combinatorial optimization and QAOA</a></li>
                <li><a href="https://lms.federica.eu/course/view.php?id=879" target="_blank" rel="noopener">UNINA - HPC systems introduction for CNMOST and University students</a></li>
                <li><a href="https://agenda.infn.it/event/30202/contributions/168532/" target="_blank" rel="noopener">INFN - Speech on Quantum communities for workshop on Computation</a></li>
                <li><a href="https://www.einaudisenorbi.edu.it/wordpress/wp-content/uploads/2024/11/Programma-FestivalScienza.pdf" target="_blank" rel="noopener">Luigi Einaudi - Quantum Computing introduction to high-school students</a></li>
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
            <div class="cv-entry-company">PREDICTIVE MAINTENANCE</div>
            <div class="cv-entry-role">Product Owner &amp; Project Manager</div>
            <div class="cv-entry-dept">National Center for Mobility</div>
            <p class="cv-desc">Managed 7 colleagues to develop an AI fault-prediction system for vehicles. Handled meetings, stakeholders and product direction.</p>
          </div>
        </div>
        <div class="cv-inner-divider"></div>
        <div class="cv-entry">
          <div class="cv-entry-side">
            <div class="cv-entry-dates"><span class="cv-date-from">LUTECH</span><span class="cv-date-arrow">↓</span><span class="cv-date-to">URBAN</span></div>
            <div class="cv-entry-num">P-03</div>
          </div>
          <div class="cv-entry-body">
            <div class="cv-entry-company">PILOT SNAP4CITY</div>
            <div class="cv-entry-role">Team Lead &amp; Stakeholder PoC</div>
            <div class="cv-entry-dept">Urban Mobility &amp; Digital Cities</div>
            <p class="cv-desc">Led 6-person team exploring data aggregation for urban mobility (Univ. Florence). Liaison for stakeholders and colleagues.</p>
          </div>
        </div>`
    },
    skills: {
      id: 'SKL', title: 'Skills',
      html: `
        <div class="cv-narrative">

          <p class="cv-narrative-para">
            Over the years I have developed a way of working that sits between <span class="cv-hl-accent">people and systems</span> — managing teams through agile processes, writing documentation that actually gets read, and coordinating projects where the moving parts never quite stop moving. Strategic planning, stakeholder management and building trust with clients have become second nature across very different contexts.
          </p>

          <p class="cv-narrative-para">
            On the technical side, my background runs through <span class="cv-hl-green">Quantum Computing</span>, <span class="cv-hl-green">HPC systems</span> and <span class="cv-hl-green">AI and machine learning</span> — with hands-on experience in dissemination, pre-sales and project delivery. I am comfortable in Linux environments, have worked with Kubernetes and containerised infrastructure, and have touched GIS-like platforms for urban mobility contexts.
          </p>

          <p class="cv-narrative-para">
            Communication has always been part of the job: public speaking, delivering crash courses to universities and research centers, presenting to clients and building lasting relationships. I find that translating complex technical ideas into something a room full of non-specialists can engage with is one of the more satisfying parts of the work.
          </p>

          <div class="cv-narrative-divider"></div>

          <div class="cv-narrative-inline-group">
            <span class="cv-narrative-inline-label">CERTIFICATIONS //</span>
            <span class="cv-narrative-inline-text">Prince2 Foundation &nbsp;·&nbsp; Qiskit Global Summer School I &amp; II &nbsp;·&nbsp; Elements of AI — University of Helsinki &nbsp;·&nbsp; Jarvice Expert — Lutech S.p.A.</span>
          </div>

          <div class="cv-narrative-inline-group">
            <span class="cv-narrative-inline-label">LANGUAGES //</span>
            <span class="cv-narrative-inline-text">Italian <span class="cv-hl-muted">native</span> &nbsp;·&nbsp; English <span class="cv-hl-muted">C1</span> &nbsp;·&nbsp; Traditional Chinese <span class="cv-hl-muted">WIP — be patient</span></span>
          </div>

        </div>`
    },
    interests: {
      id: 'INT', title: 'Interests',
      html: `
        <div class="cv-int-grid">
          <div class="cv-int-item"><div class="cv-int-label">LINUX &amp; FOSS</div><p class="cv-int-desc" id="t-int-linux">Passionate about open-source software and Linux ecosystems.</p></div>
          <div class="cv-int-item"><div class="cv-int-label">SCIFI &amp; HORROR</div><p class="cv-int-desc" id="t-int-scifi">Avid reader and writer. Writes books when the mind gets too loud.</p></div>
          <div class="cv-int-item"><div class="cv-int-label">DESIGN</div><p class="cv-int-desc" id="t-int-design">Interested in Architectural, Fashion and Communication Design.</p></div>
          <div class="cv-int-item"><div class="cv-int-label">GDR / TTRPG</div><p class="cv-int-desc" id="t-int-gdr">Into tabletop role-playing games and collaborative world-building.</p></div>
        </div>`
    }
  };

  /* ── DRAWER ───────────────────────────────────────────────── */
  const drawer   = document.getElementById('cv-drawer');
  const backdrop = document.getElementById('cv-backdrop');
  let lastTriggerRow = null;

  function openDrawer(key, triggerEl) {
    const s = CV_SECTIONS[key];
    if (!s) return;
    lastTriggerRow = triggerEl || null;
    document.getElementById('drawer-id').textContent    = s.id;
    document.getElementById('drawer-title').textContent = s.title;
    document.getElementById('cv-drawer-body').innerHTML = s.html;
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';

    /* re-apply translations to newly injected interests (int-* IDs) */
    if (typeof window.applyCurrentTranslations === 'function') {
      window.applyCurrentTranslations();
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

  document.querySelectorAll('.ticket-section-row').forEach(row => {
    row.addEventListener('click', () => openDrawer(row.dataset.section, row));
  });
  document.getElementById('cv-drawer-close').addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
  });
})();
