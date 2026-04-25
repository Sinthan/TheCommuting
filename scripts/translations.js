const TRANSLATIONS = {
  en: {
    // ── NAV ──
    navPhotos:   'Photos',
    navStories:  'Stories',
    navWork:     'Work',
    navAbout:    'About',

    // ── HERO (index) ──
    heroCode:    '>_ NEXT STOP... SIN-001 // MEMORY_LOST',
    heroSubtitle: "On this imaginary train ride you've just boarded, there is no clear destination — perhaps only a clear beginning:<br>Sinthan, also known as Agostino Maria Cassese, will be your driver through a land of strange photographs, stories from distant places, and small fragments of wisdom from his own working life. Please don't put your feet on the seats, unless 真有趣",

    // ── CARDS (index) ──
    card1Desc:    'I like to imagine myself on an alien train, photographing strange landscapes — take a look.',
    card2Desc:    'I write, and I write too much. You can find some of it here.',
    card3Desc:    'A working life: career, passions and dedication from earlier stops along the way.',

    // ── PHOTOS PAGE ──
    archiveSub:    '>_ Windows onto nowhere — scroll and click to take a look',
    archiveLoaded: 'Archive loaded',
    nextStop:      'Next stop:',

    // ── STORIES PAGE ──
    storiesSub:    '>_ Dispatches from the window seat — click on a train to read',
    trainsToRead:  'trains to read',
    storyLoading:  'LOADING...',
    storyLoadErr:  '// Could not load text file. Run on a local server.',
    delayedLabel:  'DELAYED',
    signalLost:    '// SIGNAL LOST — could not load manifest',

    // ── WORK PAGE ──
    workSub:    '>_ Boarding pass — click on a category to spy on my working life',
    workDl:     '↓ RESUME.PDF',
    tabExp:     'EXPERIENCE',
    tabEdu:     'EDUCATION',
    tabProj:    'PROJECTS',
    tabSkills:  'SKILLS',
    tabInt:     'INTERESTS',

    // CV section labels
    cvSecExp:    'Experience',
    cvSecEdu:    'Education',
    cvSecProj:   'Projects',
    cvSecSkl:    'Skills',
    cvSecInt:    'Interests',

    // CV — Experience
    cvExp1Role:  'Tech Consultant',
    cvExp1Dept:  'Cyber Security & Digital Protection · Milan, IT',
    cvExp1B1:    'Post-Quantum Cryptography advisor, delivering readiness assessments and adoption roadmaps',
    cvExp1B2:    'Infrastructure Project Manager for FST, overseeing delivery governance and stakeholder coordination',
    cvExp1B3:    'Data Protection consultant, providing strategic advisory on EU and Italian regulatory frameworks including GDPR and national compliance requirements',
    cvExp2Role:  'Project Coordinator',
    cvExp2Dept:  'Smart City & Mobility Solutions · Milan, IT',
    cvExp2B1:    'Managed multiple R&D teams using agile methodologies',
    cvExp2B2:    'Led projects on AI prediction models and GIS-like systems on HPC and Quantum',
    cvExp2B3:    'Authored documentation, repositories, demos and analyses for team operations',
    cvExp2B4:    'Coordinated meetings, events and stakeholder communications',
    cvExp3Role:  'Consultant — HPC, AI & Quantum Computing',
    cvExp3Dept:  'Milan, IT',
    cvExp3B1:    'Managed pre-sales technical operations as Quantum Computing evangelist',
    cvExp3B2:    'Key accounts: ENI, CINECA, CNMOST, PoliMI, BIREX',
    cvExp3B3:    'Delivered crash courses for the University of Naples, CINECA and other institutions',
    cvExp3B4:    'Presented Quantum portfolio: Optimisation, Cybersecurity, Machine Learning',
    cvExp3B5:    'Deepened partnerships with PoliMI Osservatorio QC and IBM Quantum',
    cvPresent:   'PRESENT',

    // CV — Education
    cvEdu1Role:  'Master of Quantum Science & Technologies',
    cvEdu1Dept:  'University of Bari Aldo Moro · Bari, IT',
    cvEdu1Desc:  "A one-year industry-oriented programme bridging quantum theory and practice, run by the Department of Physics — ranked third in Italy and the only Department of Excellence south of Rome. The curriculum covers Quantum Computing, Quantum Algorithms, Quantum Communication, Quantum Machine Learning and Quantum Engineering, with eight months of coursework and a four-month industry internship. The programme actively collaborates with companies and research institutions, including a formal partnership with Xanadu Quantum Technologies.",
    cvEdu2Role:  'Bachelor of Computer Science',
    cvEdu2Dept:  'University of Salerno · Salerno, IT',
    cvEdu2Desc:  "A three-year programme at one of Italy's oldest Computer Science departments — established in 1971 and recognised as a Department of Excellence by the Ministry of University and Research. The curriculum spans algorithms, software engineering, computer networks, operating systems and distributed computing, with a strong emphasis on both theoretical foundations and practical application through laboratory work and industry traineeships.",

    // CV — Projects
    cvProj1Title: 'QUANTUM COMPUTING AND HPC DISSEMINATION',
    cvProj1Role:  'Instructor & Curriculum Lead',
    cvProj1Dept:  'Universities & Centres of Excellence',
    cvProj1Desc:  'Designed and delivered advanced courses for universities and research centres on HPC and Quantum Computing solutions.',
    cvProj1L1:    'CINECA — Practical Quantum Computing School on combinatorial optimisation and QAOA',
    cvProj1L2:    'UNINA — Introduction to HPC systems for CNMOST and University students',
    cvProj1L3:    'INFN — Talk on Quantum communities for the workshop on Computation',
    cvProj1L4:    'Luigi Einaudi — Quantum Computing introduction for high-school students',
    cvProj2Title: 'PREDICTIVE MAINTENANCE',
    cvProj2Role:  'Product Owner & Project Manager',
    cvProj2Dept:  'National Centre for Mobility',
    cvProj2Desc:  'Led seven colleagues in developing an AI fault-prediction system for vehicles. Handled meetings, stakeholders and product direction.',
    cvProj3Title: 'PILOT SNAP4CITY',
    cvProj3Role:  'Team Lead & Stakeholder PoC',
    cvProj3Dept:  'Urban Mobility & Digital Cities',
    cvProj3Desc:  'Led a six-person team exploring data aggregation for urban mobility (University of Florence). Liaison for stakeholders and colleagues.',
    cvLinksLabel: 'LINKS //',

    // CV — Skills (narrative)
    cvSklP1:      'Over the years I have developed a way of working that sits between <span class="cv-hl-accent">people and systems</span> — managing teams through agile processes, writing documentation that actually gets read, and coordinating projects where the moving parts never quite stop moving. Strategic planning, stakeholder management and building trust with clients have become second nature across very different contexts.',
    cvSklP2:      'On the technical side, my background runs through <span class="cv-hl-green">Quantum Computing</span>, <span class="cv-hl-green">HPC systems</span> and <span class="cv-hl-green">AI and machine learning</span> — with hands-on experience in dissemination, pre-sales and project delivery. I am comfortable in Linux environments, have worked with Kubernetes and containerised infrastructure, and have touched GIS-like platforms for urban mobility contexts.',
    cvSklP3:      'Communication has always been part of the job: public speaking, delivering crash courses to universities and research centres, presenting to clients and building lasting relationships. I find that translating complex technical ideas into something a room of non-specialists can engage with is one of the more satisfying parts of the work.',
    cvSklCertLbl: 'CERTIFICATIONS //',
    cvSklCert:    'Prince2 Foundation &nbsp;·&nbsp; Qiskit Global Summer School I & II &nbsp;·&nbsp; Elements of AI — University of Helsinki &nbsp;·&nbsp; Jarvice Expert — Lutech S.p.A.',
    cvSklLangLbl: 'LANGUAGES //',
    cvSklLangNative: 'native',
    cvSklLangC1:     'C1',
    cvSklLangWip:    'WIP — be patient',
    cvSklLangIt:     'Italian',
    cvSklLangEn:     'English',
    cvSklLangZh:     'Traditional Chinese',

    // CV — Interests
    intLinuxLbl:  'LINUX & FOSS',
    intScifiLbl:  'SCIFI & HORROR',
    intDesignLbl: 'DESIGN',
    intGdrLbl:    'GDR / TTRPG',
    intLinux:     'Passionate about open-source software and Linux ecosystems.',
    intScifi:     'Avid reader and writer. Writes books when the mind grows too loud.',
    intDesign:    'Drawn to architectural, fashion and communication design.',
    intGdr:       'Tabletop role-playing games and collaborative world-building.',

    // ── ABOUT PAGE (dossier) ──
    aboutSub:           '>_ Recovered file &mdash; classification logged for archival purposes',
    aboutFileTag:       'ALTERED STAFF MEMBER',
    aboutClearance:     'CLEARANCE: TIER 2 // OBSERVATION',
    aboutStampClassified: 'CLASSIFIED',
    aboutPortraitCap:   'PHOTO ON FILE',
    aboutMetaDesignation: 'DESIGNATION',
    aboutMetaAlias:     'ALIAS',
    aboutMetaStatus:    'STATUS',
    aboutMetaStatusVal: 'IN TRANSIT',
    aboutMetaDisruption:'DISRUPTION CLASS',
    aboutMetaLocation:  'LOCATION',
    aboutMetaLocationVal: 'UNRESOLVED',
    aboutMetaContact:   'FIRST CONTACT',
    aboutMetaCustody:   'CUSTODY',
    aboutMetaCustodyVal:'SELF-CONTAINED',
    aboutObsLabel:      '// OBSERVATION LOG',
    aboutObsBody:       'Subject exhibits chronic <em>commuting behaviour</em> across multiple disciplines &mdash; quantum computing, HPC, AI/ML, project coordination and cybersecurity consulting. Has been documented carrying a <span class="redacted">&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;</span> across the wasteland, from one stop to the next, photographing strange landscapes through bus windows. Compulsively writes in idle hours; output ranges from horror to soft sci-fi. Fluent in Italian (native), English (C1), Traditional Chinese (work in progress). Considered <em class="obs-green">non-hostile</em> but unpredictable.',
    aboutContainmentLabel: '// CONTAINMENT PROTOCOL',
    aboutContainmentP1: 'No physical containment is feasible. Subject is, by its own description, in transit. Contact is permitted through approved channels only. Do not attempt direct interception.',
    aboutContainmentP2: 'If addressed in good faith, subject may respond with photographs, stories, technical advice, or quiet observation from a window seat.',
    aboutChannelsLabel: '// APPROVED CHANNELS',
    aboutChInstagramLbl: 'INSTAGRAM',
    aboutChLinkedinLbl:  'LINKEDIN',
    aboutChEmailLbl:     'SECURE LINE',
    aboutFootLeft:      'FBC-INT // EYES ONLY',
    aboutFootRight:     'END OF FILE',
    aboutStatusDossier: 'Dossier online',
    aboutStatusFile:    'FILE // SIN-001',
  },

  it: {
    navPhotos:   'Foto',
    navStories:  'Racconti',
    navWork:     'Lavoro',
    navAbout:    'Chi sono',

    heroCode:    '>_ PROSSIMA FERMATA... SIN-001 // MEMORIA_PERDUTA',
    heroSubtitle: "Su questo treno immaginario in cui sei appena salito, non vi è una destinazione precisa — forse soltanto un inizio chiaro:<br>Sinthan, ovvero Agostino Maria Cassese, sarà il tuo conducente attraverso una terra di fotografie singolari, racconti da luoghi lontani e piccoli frammenti di saggezza tratti dal suo cammino professionale. Si prega di non poggiare i piedi sui sedili, a meno che 真有趣",

    card1Desc:    'Mi piace immaginarmi su un treno alieno, intento a fotografare paesaggi singolari — dai pure un&rsquo;occhiata.',
    card2Desc:    'Scrivo, e scrivo fin troppo. Qui ne troverai una parte.',
    card3Desc:    'Una vita di lavoro: carriera, passioni e dedizione delle fermate precedenti.',

    archiveSub:    '>_ Finestre sul nulla — scorri e clicca per dare uno sguardo',
    archiveLoaded: 'Archivio caricato',
    nextStop:      'Prossima fermata:',

    storiesSub:    '>_ Dispacci dal finestrino — clicca su un treno per leggere',
    trainsToRead:  'treni da leggere',
    storyLoading:  'CARICAMENTO...',
    storyLoadErr:  '// Impossibile caricare il file di testo. Avvia un server locale.',
    delayedLabel:  'IN RITARDO',
    signalLost:    '// SEGNALE PERSO — impossibile caricare il manifesto',

    workSub:    '>_ Carta d&rsquo;imbarco — clicca su una categoria per scoprire il mio percorso',
    workDl:     '↓ CURRICULUM.PDF',
    tabExp:     'ESPERIENZA',
    tabEdu:     'FORMAZIONE',
    tabProj:    'PROGETTI',
    tabSkills:  'COMPETENZE',
    tabInt:     'INTERESSI',

    cvSecExp:    'Esperienza',
    cvSecEdu:    'Formazione',
    cvSecProj:   'Progetti',
    cvSecSkl:    'Competenze',
    cvSecInt:    'Interessi',

    cvExp1Role:  'Tech Consultant',
    cvExp1Dept:  'Cyber Security & Digital Protection · Milano, IT',
    cvExp1B1:    'Consulente di Crittografia Post-Quantistica, con redazione di valutazioni di prontezza e roadmap di adozione',
    cvExp1B2:    'Project Manager infrastrutturale per FST, con supervisione della governance di delivery e del coordinamento degli stakeholder',
    cvExp1B3:    'Consulente in materia di Protezione dei Dati, offrendo consulenza strategica sui quadri normativi europei e italiani, tra cui il GDPR e i requisiti di conformità nazionale',
    cvExp2Role:  'Project Coordinator',
    cvExp2Dept:  'Smart City & Mobility Solutions · Milano, IT',
    cvExp2B1:    'Gestione di più team di R&S secondo metodologie agile',
    cvExp2B2:    'Conduzione di progetti su modelli predittivi di IA e sistemi di tipo GIS, su HPC e Quantum',
    cvExp2B3:    'Redazione di documentazione, repository, demo e analisi a supporto delle attività dei team',
    cvExp2B4:    'Coordinamento di riunioni, eventi e comunicazioni con gli stakeholder',
    cvExp3Role:  'Consulente — HPC, IA & Quantum Computing',
    cvExp3Dept:  'Milano, IT',
    cvExp3B1:    'Gestione delle attività tecniche di pre-vendita in qualità di evangelist del Quantum Computing',
    cvExp3B2:    'Account principali: ENI, CINECA, CNMOST, PoliMI, BIREX',
    cvExp3B3:    'Erogazione di corsi intensivi presso l&rsquo;Università di Napoli, CINECA e altri enti',
    cvExp3B4:    'Presentazione del portfolio Quantum: Ottimizzazione, Cybersecurity, Machine Learning',
    cvExp3B5:    'Approfondimento delle partnership con PoliMI Osservatorio QC e IBM Quantum',
    cvPresent:   'OGGI',

    cvEdu1Role:  'Master in Quantum Science & Technologies',
    cvEdu1Dept:  'Università degli Studi di Bari Aldo Moro · Bari, IT',
    cvEdu1Desc:  "Programma annuale a vocazione industriale, volto a coniugare teoria e pratica del quantum, organizzato dal Dipartimento di Fisica — terzo in Italia e unico Dipartimento di Eccellenza a sud di Roma. Il piano di studi comprende Quantum Computing, Algoritmi Quantistici, Comunicazione Quantistica, Quantum Machine Learning e Quantum Engineering, con otto mesi di didattica e quattro mesi di tirocinio in azienda. Il programma collabora attivamente con imprese e istituti di ricerca, tra cui una partnership formale con Xanadu Quantum Technologies.",
    cvEdu2Role:  'Laurea Triennale in Informatica',
    cvEdu2Dept:  'Università degli Studi di Salerno · Salerno, IT',
    cvEdu2Desc:  "Corso triennale presso uno dei più antichi dipartimenti di Informatica d&rsquo;Italia — fondato nel 1971 e riconosciuto come Dipartimento di Eccellenza dal Ministero dell&rsquo;Università e della Ricerca. Il piano di studi spazia da algoritmi, ingegneria del software, reti e sistemi operativi al calcolo distribuito, con particolare attenzione sia ai fondamenti teorici sia all&rsquo;applicazione pratica attraverso attività di laboratorio e tirocini.",

    cvProj1Title: 'DIVULGAZIONE DI QUANTUM COMPUTING E HPC',
    cvProj1Role:  'Docente & Responsabile dei Programmi',
    cvProj1Dept:  'Università e Centri di Eccellenza',
    cvProj1Desc:  'Progettazione e realizzazione di corsi avanzati per università e centri di ricerca su soluzioni di HPC e Quantum Computing.',
    cvProj1L1:    'CINECA — Practical Quantum Computing School su ottimizzazione combinatoria e QAOA',
    cvProj1L2:    'UNINA — Introduzione ai sistemi HPC per studenti CNMOST e universitari',
    cvProj1L3:    'INFN — Intervento sulle community Quantum per il workshop di Calcolo',
    cvProj1L4:    'Luigi Einaudi — Introduzione al Quantum Computing per studenti delle scuole superiori',
    cvProj2Title: 'MANUTENZIONE PREDITTIVA',
    cvProj2Role:  'Product Owner & Project Manager',
    cvProj2Dept:  'Centro Nazionale per la Mobilità',
    cvProj2Desc:  'Coordinamento di sette colleghi nello sviluppo di un sistema di IA per la previsione di guasti veicolari. Gestione di riunioni, stakeholder e direzione di prodotto.',
    cvProj3Title: 'PILOT SNAP4CITY',
    cvProj3Role:  'Team Lead & Punto di Contatto Stakeholder',
    cvProj3Dept:  'Mobilità Urbana & Città Digitali',
    cvProj3Desc:  'Conduzione di un team di sei persone dedicato all&rsquo;aggregazione di dati per la mobilità urbana (Università di Firenze). Punto di contatto per stakeholder e colleghi.',
    cvLinksLabel: 'COLLEGAMENTI //',

    cvSklP1:      'Nel corso degli anni ho maturato un modo di lavorare che si colloca tra <span class="cv-hl-accent">le persone e i sistemi</span> — gestire team con processi agile, redigere documentazione che venga effettivamente letta, e coordinare progetti i cui ingranaggi non smettono mai del tutto di muoversi. Pianificazione strategica, gestione degli stakeholder e costruzione di rapporti di fiducia con i clienti sono divenuti parte naturale del mestiere, in contesti molto diversi tra loro.',
    cvSklP2:      'Sul piano tecnico, il mio percorso attraversa il <span class="cv-hl-green">Quantum Computing</span>, i <span class="cv-hl-green">sistemi HPC</span> e <span class="cv-hl-green">l&rsquo;intelligenza artificiale e il machine learning</span> — con esperienza diretta in divulgazione, pre-vendita e delivery di progetto. Mi muovo agevolmente in ambienti Linux, ho lavorato con Kubernetes e infrastrutture containerizzate, e ho avuto modo di operare con piattaforme di tipo GIS in contesti di mobilità urbana.',
    cvSklP3:      'La comunicazione è sempre stata parte integrante del lavoro: public speaking, corsi intensivi presso università e centri di ricerca, presentazioni a clienti e costruzione di rapporti duraturi. Tradurre concetti tecnici complessi in qualcosa che una sala di non addetti possa cogliere è, a mio avviso, una delle parti più appaganti di questo mestiere.',
    cvSklCertLbl: 'CERTIFICAZIONI //',
    cvSklCert:    'Prince2 Foundation &nbsp;·&nbsp; Qiskit Global Summer School I & II &nbsp;·&nbsp; Elements of AI — Università di Helsinki &nbsp;·&nbsp; Jarvice Expert — Lutech S.p.A.',
    cvSklLangLbl: 'LINGUE //',
    cvSklLangNative: 'madrelingua',
    cvSklLangC1:     'C1',
    cvSklLangWip:    'in corso — pazienta',
    cvSklLangIt:     'Italiano',
    cvSklLangEn:     'Inglese',
    cvSklLangZh:     'Cinese tradizionale',

    intLinuxLbl:  'LINUX & FOSS',
    intScifiLbl:  'FANTASCIENZA & HORROR',
    intDesignLbl: 'DESIGN',
    intGdrLbl:    'GDR / TTRPG',
    intLinux:     'Appassionato di software open-source e di ecosistemi Linux.',
    intScifi:     'Lettore e scrittore appassionato. Scrive libri quando la mente si fa troppo affollata.',
    intDesign:    'Sensibile al design architettonico, della moda e della comunicazione.',
    intGdr:       'Giochi di ruolo da tavolo e world-building collaborativo.',

    // ── ABOUT PAGE ──
    aboutSub:           '>_ Fascicolo recuperato &mdash; classificazione registrata a fini d&rsquo;archivio',
    aboutFileTag:       'MEMBRO DEL PERSONALE ALTERATO',
    aboutClearance:     'AUTORIZZAZIONE: LIVELLO 2 // OSSERVAZIONE',
    aboutStampClassified: 'CLASSIFICATO',
    aboutPortraitCap:   'FOTOGRAFIA AGLI ATTI',
    aboutMetaDesignation: 'DESIGNAZIONE',
    aboutMetaAlias:     'ALIAS',
    aboutMetaStatus:    'STATO',
    aboutMetaStatusVal: 'IN TRANSITO',
    aboutMetaDisruption:'CLASSE DI DISTURBO',
    aboutMetaLocation:  'POSIZIONE',
    aboutMetaLocationVal: 'NON RISOLTA',
    aboutMetaContact:   'PRIMO CONTATTO',
    aboutMetaCustody:   'CUSTODIA',
    aboutMetaCustodyVal:'AUTOCONTENUTO',
    aboutObsLabel:      '// REGISTRO DI OSSERVAZIONE',
    aboutObsBody:       'Il soggetto manifesta un cronico <em>comportamento da pendolare</em> attraverso molteplici discipline &mdash; quantum computing, HPC, IA/ML, coordinamento di progetti e consulenza in cybersecurity. È stato documentato mentre trasportava un <span class="redacted">&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;</span> attraverso la landa, da una fermata all&rsquo;altra, intento a fotografare paesaggi singolari dai finestrini degli autobus. Nei momenti di quiete, scrive in modo compulsivo; la sua produzione spazia dall&rsquo;horror alla fantascienza più sommessa. Parla italiano (madrelingua), inglese (C1) e cinese tradizionale (in corso). Considerato <em class="obs-green">non ostile</em>, ma imprevedibile.',
    aboutContainmentLabel: '// PROTOCOLLO DI CONTENIMENTO',
    aboutContainmentP1: 'Nessun contenimento fisico è praticabile. Il soggetto è, per sua stessa definizione, in transito. Il contatto è consentito esclusivamente attraverso i canali autorizzati. Non tentare alcuna intercettazione diretta.',
    aboutContainmentP2: 'Se interpellato in buona fede, il soggetto può rispondere con fotografie, racconti, consigli tecnici o silenziose osservazioni dal finestrino.',
    aboutChannelsLabel: '// CANALI AUTORIZZATI',
    aboutChInstagramLbl: 'INSTAGRAM',
    aboutChLinkedinLbl:  'LINKEDIN',
    aboutChEmailLbl:     'LINEA SICURA',
    aboutFootLeft:      'FBC-INT // SOLO PER I VOSTRI OCCHI',
    aboutFootRight:     'FINE DEL FILE',
    aboutStatusDossier: 'Fascicolo online',
    aboutStatusFile:    'FILE // SIN-001',
  },

  zh: {
    navPhotos:   '影像',
    navStories:  '故事',
    navWork:     '工作',
    navAbout:    '關於',

    heroCode:    '>_ 下一站... SIN-001 // 記憶遺失',
    heroSubtitle: "在這趟你剛踏上的想像列車上，並無明確的目的地——也許僅有一個清晰的起點：<br>Sinthan，又名 Agostino Maria Cassese，將為你駕駛，穿越一片奇異照片、遠方故事，以及來自他職業生涯點滴智慧的土地。請勿將腳放上座椅，除非 真有趣",

    card1Desc:    '我喜歡想像自己身處一列外星列車，捕捉奇異的風景——歡迎一覽。',
    card2Desc:    '我寫作，且寫得太多。你可以在此覓得其中一些。',
    card3Desc:    '一段工作的人生：職業、熱忱與奉獻，皆為旅途中先前的停靠站。',

    archiveSub:    '>_ 通往虛無之窗——滑動並點擊以一窺',
    archiveLoaded: '檔案已載入',
    nextStop:      '下一站：',

    storiesSub:    '>_ 來自窗邊的書信——點擊列車以閱讀',
    trainsToRead:  '列待讀的列車',
    storyLoading:  '載入中...',
    storyLoadErr:  '// 無法載入文字檔。請於本機伺服器執行。',
    delayedLabel:  '誤點',
    signalLost:    '// 訊號中斷——無法載入清單',

    workSub:    '>_ 登車券——點擊一個類別，窺探我的職業旅途',
    workDl:     '↓ 履歷.PDF',
    tabExp:     '經歷',
    tabEdu:     '學歷',
    tabProj:    '專案',
    tabSkills:  '技能',
    tabInt:     '興趣',

    cvSecExp:    '經歷',
    cvSecEdu:    '學歷',
    cvSecProj:   '專案',
    cvSecSkl:    '技能',
    cvSecInt:    '興趣',

    cvExp1Role:  '技術顧問',
    cvExp1Dept:  '網路安全與數位防護 · 米蘭，義大利',
    cvExp1B1:    '後量子密碼學顧問，負責就緒度評估與導入路線圖',
    cvExp1B2:    'FST 基礎建設專案經理，督導交付治理與利害關係人協調',
    cvExp1B3:    '資料保護顧問，就歐盟與義大利法規架構（含 GDPR 及國家合規要求）提供策略性建議',
    cvExp2Role:  '專案協調員',
    cvExp2Dept:  '智慧城市與行動方案 · 米蘭，義大利',
    cvExp2B1:    '以敏捷方法管理多個研發團隊',
    cvExp2B2:    '主導 AI 預測模型與類 GIS 系統於 HPC 與量子環境之專案',
    cvExp2B3:    '撰寫文件、儲存庫、示例與分析，支援團隊運作',
    cvExp2B4:    '協調會議、活動與利害關係人之溝通',
    cvExp3Role:  '顧問 — HPC、AI 與量子運算',
    cvExp3Dept:  '米蘭，義大利',
    cvExp3B1:    '擔任量子運算佈道者，主理售前技術業務',
    cvExp3B2:    '主要客戶：ENI、CINECA、CNMOST、PoliMI、BIREX',
    cvExp3B3:    '為拿坡里大學、CINECA 等機構開設密集課程',
    cvExp3B4:    '介紹量子產品線：最佳化、網路安全、機器學習',
    cvExp3B5:    '深化與 PoliMI 量子觀測站及 IBM Quantum 之合作',
    cvPresent:   '至今',

    cvEdu1Role:  '量子科學與技術碩士',
    cvEdu1Dept:  '巴里大學 Aldo Moro · 巴里，義大利',
    cvEdu1Desc:  "為期一年、面向產業的學程，貫通量子理論與實務，由物理系主辦——該系於義大利排名第三，亦為羅馬以南唯一的卓越系所。課程涵蓋量子運算、量子演算法、量子通訊、量子機器學習與量子工程，含八個月的學程與四個月的業界實習。學程與企業及研究機構積極合作，並與 Xanadu Quantum Technologies 建立正式合作。",
    cvEdu2Role:  '電腦科學學士',
    cvEdu2Dept:  '薩萊諾大學 · 薩萊諾，義大利',
    cvEdu2Desc:  "於義大利歷史最悠久的電腦科學系之一就讀的三年制學程——該系創立於 1971 年，獲義大利大學暨研究部認定為卓越系所。課程涵蓋演算法、軟體工程、電腦網路、作業系統與分散式運算，於理論基礎與透過實驗及業界實習所進行的實務應用，皆有深厚著墨。",

    cvProj1Title: '量子運算與 HPC 推廣',
    cvProj1Role:  '講師與課程負責人',
    cvProj1Dept:  '大學與卓越中心',
    cvProj1Desc:  '為大學與研究中心設計並執行 HPC 與量子運算解決方案之進階課程。',
    cvProj1L1:    'CINECA — 組合最佳化與 QAOA 之實務量子運算學校',
    cvProj1L2:    'UNINA — 為 CNMOST 與大學學生介紹 HPC 系統',
    cvProj1L3:    'INFN — 計算工作坊中關於量子社群之演講',
    cvProj1L4:    'Luigi Einaudi — 為高中生介紹量子運算',
    cvProj2Title: '預測性維運',
    cvProj2Role:  '產品負責人與專案經理',
    cvProj2Dept:  '國家行動中心',
    cvProj2Desc:  '帶領七位同事，開發車輛之 AI 故障預測系統。負責會議、利害關係人與產品方向。',
    cvProj3Title: 'PILOT SNAP4CITY',
    cvProj3Role:  '團隊負責人與利害關係人聯絡窗口',
    cvProj3Dept:  '都市行動與數位城市',
    cvProj3Desc:  '帶領六人團隊，探討都市行動之資料整合（佛羅倫斯大學）。同事與利害關係人之聯絡窗口。',
    cvLinksLabel: '相關連結 //',

    cvSklP1:      '多年來，我逐漸塑造了一種介於<span class="cv-hl-accent">人與系統</span>之間的工作方式——以敏捷流程帶領團隊、撰寫真正會被閱讀的文件，並協調那些零件從不停止運轉的專案。策略規劃、利害關係人管理，以及與客戶建立信任，已在迥異的情境之中成為自然而然之事。',
    cvSklP2:      '在技術一面，我的背景貫穿<span class="cv-hl-green">量子運算</span>、<span class="cv-hl-green">HPC 系統</span>及<span class="cv-hl-green">人工智慧與機器學習</span>——並具備推廣、售前與專案交付的實務經驗。我熟悉 Linux 環境，亦與 Kubernetes 及容器化基礎建設共事，並曾於都市行動情境中接觸類 GIS 平台。',
    cvSklP3:      '溝通向來是工作不可或缺的部分：公開演說、為大學與研究中心開設密集課程、向客戶簡報並建立持久的關係。將複雜的技術概念，轉譯為一群非專業人士能理解的語言，是我認為這份工作中最令人滿足的時刻之一。',
    cvSklCertLbl: '認證 //',
    cvSklCert:    'Prince2 Foundation &nbsp;·&nbsp; Qiskit Global Summer School I & II &nbsp;·&nbsp; Elements of AI — 赫爾辛基大學 &nbsp;·&nbsp; Jarvice Expert — Lutech S.p.A.',
    cvSklLangLbl: '語言 //',
    cvSklLangNative: '母語',
    cvSklLangC1:     'C1',
    cvSklLangWip:    '進行中——請耐心相待',
    cvSklLangIt:     '義大利文',
    cvSklLangEn:     '英文',
    cvSklLangZh:     '繁體中文',

    intLinuxLbl:  'LINUX 與 FOSS',
    intScifiLbl:  '科幻與恐怖',
    intDesignLbl: '設計',
    intGdrLbl:    'GDR / TTRPG',
    intLinux:     '熱衷於開源軟體與 Linux 生態系。',
    intScifi:     '愛閱讀也愛寫作。當思緒過於喧囂時，便提筆寫書。',
    intDesign:    '對建築、時尚與傳播設計皆懷有興趣。',
    intGdr:       '桌上角色扮演遊戲與共同世界構築。',

    // ── ABOUT PAGE ──
    aboutSub:           '>_ 復原之檔案 &mdash; 為存檔之故，已記錄其分級',
    aboutFileTag:       '受異變之職員',
    aboutClearance:     '權限等級：第二級 // 觀察',
    aboutStampClassified: '機密',
    aboutPortraitCap:   '存檔影像',
    aboutMetaDesignation: '代號',
    aboutMetaAlias:     '別名',
    aboutMetaStatus:    '狀態',
    aboutMetaStatusVal: '途中',
    aboutMetaDisruption:'擾動等級',
    aboutMetaLocation:  '所在',
    aboutMetaLocationVal: '未定',
    aboutMetaContact:   '初次接觸',
    aboutMetaCustody:   '管制',
    aboutMetaCustodyVal:'自我封存',
    aboutObsLabel:      '// 觀察日誌',
    aboutObsBody:       '受觀察者展現出橫跨多個領域的長期<em>通勤行為</em>——量子運算、HPC、人工智慧／機器學習、專案協調，以及網路安全顧問。據記錄，其曾於荒原之中攜帶一具<span class="redacted">&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;</span>，自一站行至次一站，並透過巴士窗扉拍攝奇異之景。閒暇之時，強迫性地寫作；其產出，自恐怖至溫和的科幻皆有。通義大利文（母語）、英文（C1）、繁體中文（學習中）。經評估為<em class="obs-green">無敵意</em>，然不可預測。',
    aboutContainmentLabel: '// 收容協定',
    aboutContainmentP1: '無從進行物理性收容。受觀察者依其自述，正處於途中。接觸僅限於經許可之渠道。不得嘗試任何直接攔截。',
    aboutContainmentP2: '若以善意相詢，受觀察者或將以照片、故事、技術建言，或自窗邊座位的靜默觀察作為回應。',
    aboutChannelsLabel: '// 經許可之渠道',
    aboutChInstagramLbl: 'INSTAGRAM',
    aboutChLinkedinLbl:  'LINKEDIN',
    aboutChEmailLbl:     '安全線路',
    aboutFootLeft:      'FBC-INT // 僅供查閱',
    aboutFootRight:     '檔案結束',
    aboutStatusDossier: '檔案在線',
    aboutStatusFile:    'FILE // SIN-001',
  }
};

// ── LANG SWITCHER LOGIC ──
(function () {
  const STORAGE_KEY = 'tc-lang';

  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && TRANSLATIONS[saved]) return saved;
    const candidates = (navigator.languages && navigator.languages.length)
      ? navigator.languages : [navigator.language || 'en'];
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

  // Public helpers exposed to other scripts
  window.getCurrentLang = function () { return currentLang; };
  window.getCurrentNextStop = function () {
    return (TRANSLATIONS[currentLang] || TRANSLATIONS.en).nextStop || 'Next stop:';
  };
  window.tc_t = function (key) {
    const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
    return (key in t) ? t[key] : (TRANSLATIONS.en[key] || '');
  };
  window.applyCurrentTranslations = function () {
    applyTranslations(currentLang, false);
  };

  function flipText(el, newText, animate) {
    if (!el) return;
    // Detect any HTML: tags OR entities (&rsquo;, &nbsp;, etc.)
    const isHTML = newText && (newText.includes('<') || /&[a-z#0-9]+;/i.test(newText));
    if (isHTML) { el.innerHTML = newText; return; }
    const text = newText || '';

    if (!animate) { el.textContent = text; return; }

    const hasSpans = el.querySelector('.tc-fc');
    if (!hasSpans) { el.textContent = ''; }

    const chars = [...text];
    while (el.querySelectorAll('.tc-fc').length < chars.length) {
      const o = document.createElement('span'); o.className = 'tc-fc';
      o.style.cssText = 'display:inline-block;perspective:200px;vertical-align:bottom;';
      const i = document.createElement('span'); i.className = 'tc-fi';
      i.style.cssText = 'display:inline-block;transform-origin:center bottom;backface-visibility:hidden;';
      o.appendChild(i); el.appendChild(o);
    }
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

    // Generic: any element with [data-t="key"] gets translated.
    document.querySelectorAll('[data-t]').forEach(el => {
      const key = el.getAttribute('data-t');
      if (key in t) flipText(el, t[key], animate);
    });

    // Legacy ID-based mappings (kept for backwards compatibility)
    setText('t-nav-photos',    t.navPhotos);
    setText('t-nav-stories',   t.navStories);
    setText('t-nav-work',      t.navWork);
    setText('t-nav-about',     t.navAbout);
    setText('t-nav-photos-m',  t.navPhotos);
    setText('t-nav-stories-m', t.navStories);
    setText('t-nav-work-m',    t.navWork);
    setText('t-nav-about-m',   t.navAbout);

    setText('t-hero-code',     t.heroCode);
    setText('t-hero-subtitle', t.heroSubtitle);

    setText('t-card1-desc', t.card1Desc);
    setText('t-card2-desc', t.card2Desc);
    setText('t-card3-desc', t.card3Desc);

    setText('t-archive-sub',    t.archiveSub);
    setText('t-archive-loaded', t.archiveLoaded);

    setText('t-stories-sub', t.storiesSub);

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

    document.querySelectorAll('.stop-label-eyebrow').forEach(el => {
      el.textContent = t.nextStop || 'Next stop:';
    });

    const btn = document.getElementById('lang-btn-label');
    if (btn) btn.textContent = LANG_LABELS[lang];

    document.querySelectorAll('.lang-option').forEach(el => {
      el.classList.toggle('lang-option-active', el.dataset.lang === lang);
    });

    // Notify page-specific scripts so they can refresh dynamic content
    window.dispatchEvent(new CustomEvent('tc-lang-changed', { detail: { lang, animate } }));
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
