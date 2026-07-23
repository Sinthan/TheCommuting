const TRANSLATIONS = {
  en: {
    // ── NAV ──
    navPhotos:   'Photos',
    navStories:  'Stories',
    navWork:     'Work',
    navAbout:    'About',

    // ── HERO (index) ──
    heroCode:    '>_ NEXT STOP... SIN-001 // MEMORY_LOST',
    heroSubtitle: "On this imaginary train trip you've just embarked on, there's no clear destination — maybe just a clear start:<br>Sinthan, a.k.a. Agostino Maria Cassese, will be your driver to a land of weird photos, stories from different lands, and his own little wisdom picked up along his working life. Please don't put your feet on the seats, unless 真有趣",

    // ── CARDS (index) ──
    card1Desc:    'I like to imagine myself on an alien train, snapping photos of strange landscapes — have a look.',
    card2Desc:    'I write, and I write too much. Some of it ended up here.',
    card3Desc:    'A working life: career, passions and dedication from the stops that came before.',
    card4Desc:    'Who is holding the wheel? A classified file, partially declassified.',

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
    cvSklP1:      'Over the years I\'ve found a way of working that sits somewhere between <span class="cv-hl-accent">people and systems</span> — running teams through agile processes, writing documentation people actually read, and keeping projects together when the moving parts never quite stop moving. Strategic planning, stakeholder management and earning a client\'s trust have become second nature, in very different settings.',
    cvSklP2:      'On the technical side, my background runs through <span class="cv-hl-green">Quantum Computing</span>, <span class="cv-hl-green">HPC systems</span> and <span class="cv-hl-green">AI and machine learning</span> — hands-on, between teaching, pre-sales and delivery. I\'m at home in Linux environments, I\'ve worked with Kubernetes and containerised infrastructure, and I\'ve had my hands on GIS-like platforms for urban mobility.',
    cvSklP3:      'Communication has always been part of the job: public speaking, crash courses for universities and research centres, client presentations, relationships that last. Taking a complicated technical idea and turning it into something a room full of non-specialists can actually follow — that\'s one of the most satisfying parts of the work.',
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
    aboutObsBody:       'Subject displays an unsettling fluency across domains that should not coexist within a single individual. Reports describe instances of <em>unexplainable knowledge</em> &mdash; correct answers offered to questions never posed, references made to texts the subject could not have read. Capable of shifting through matter and topic alike: where one observer reports a physicist, another, on the same evening, reports a writer, a designer, a translator, a mediator. Adapts to any environment within minutes &mdash; <em>language, posture, register, idiom</em> &mdash; in a manner that suggests the subject is not assuming forms but selecting them from an inventory previously catalogued. Has been spotted navigating across the wasteland, between tongues, between disciplines, between rooms full of strangers, with the same unhurried gait. Considered <em class="obs-green">non-hostile</em>, but emphatically <span class="redacted">&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;</span> &mdash; the subject does not appear to settle into any single shape, and field agents are advised against attempting to define it.',
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
    heroSubtitle: "Su questo treno immaginario in cui sei appena salito non c'è una destinazione precisa — forse solo un inizio chiaro:<br>Sinthan, ovvero Agostino Maria Cassese, sarà il tuo conducente attraverso una terra di fotografie strane, racconti da posti lontani e piccoli frammenti di saggezza raccolti lungo il suo percorso lavorativo. Si prega di non poggiare i piedi sui sedili, a meno che 真有趣",

    card1Desc:    'Mi piace immaginarmi su un treno alieno, a fotografare paesaggi strani — dai pure un&rsquo;occhiata.',
    card2Desc:    'Scrivo, e scrivo fin troppo. Una parte è finita qui.',
    card3Desc:    'Una vita di lavoro: carriera, passioni e dedizione dalle fermate che sono venute prima.',
    card4Desc:    'Chi è che tiene il volante? Un fascicolo riservato, in parte declassificato.',

    archiveSub:    '>_ Finestre sul nulla — scorri e clicca per dare un&rsquo;occhiata',
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
    cvExp1B1:    'Consulente di Crittografia Post-Quantistica: valutazioni di readiness e roadmap di adozione',
    cvExp1B2:    'Project Manager infrastrutturale per FST: governance della delivery e coordinamento degli stakeholder',
    cvExp1B3:    'Consulente Data Protection: consulenza strategica sui quadri normativi europei e italiani, GDPR e requisiti nazionali inclusi',
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
    cvEdu1Desc:  "Un anno di programma orientato all&rsquo;industria, pensato per unire teoria e pratica del quantum, organizzato dal Dipartimento di Fisica — terzo in Italia e unico Dipartimento di Eccellenza a sud di Roma. Il piano di studi copre Quantum Computing, Algoritmi Quantistici, Comunicazione Quantistica, Quantum Machine Learning e Quantum Engineering: otto mesi di didattica e quattro di tirocinio in azienda. Il programma collabora attivamente con imprese e istituti di ricerca, tra cui una partnership formale con Xanadu Quantum Technologies.",
    cvEdu2Role:  'Laurea Triennale in Informatica',
    cvEdu2Dept:  'Università degli Studi di Salerno · Salerno, IT',
    cvEdu2Desc:  "Corso triennale in uno dei dipartimenti di Informatica più antichi d&rsquo;Italia — fondato nel 1971 e riconosciuto Dipartimento di Eccellenza dal Ministero dell&rsquo;Università e della Ricerca. Il piano di studi va dagli algoritmi all&rsquo;ingegneria del software, dalle reti ai sistemi operativi fino al calcolo distribuito, con un buon equilibrio tra fondamenti teorici e pratica, tra laboratori e tirocini in azienda.",

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

    cvSklP1:      'Negli anni ho trovato un modo di lavorare che sta a metà tra <span class="cv-hl-accent">le persone e i sistemi</span> — gestire team con processi agile, scrivere documentazione che venga letta davvero, e tenere insieme progetti i cui ingranaggi non si fermano mai del tutto. Pianificazione strategica, gestione degli stakeholder e fiducia dei clienti sono diventate una seconda natura, in contesti anche molto diversi tra loro.',
    cvSklP2:      'Sul lato tecnico, il mio percorso passa per il <span class="cv-hl-green">Quantum Computing</span>, i <span class="cv-hl-green">sistemi HPC</span> e <span class="cv-hl-green">l&rsquo;intelligenza artificiale e il machine learning</span> — con esperienza diretta tra divulgazione, pre-vendita e delivery. Mi muovo a mio agio in ambienti Linux, ho lavorato con Kubernetes e infrastrutture containerizzate, e ho messo le mani su piattaforme di tipo GIS per la mobilità urbana.',
    cvSklP3:      'La comunicazione è sempre stata parte del lavoro: parlare in pubblico, tenere corsi intensivi per università e centri di ricerca, presentare ai clienti, costruire rapporti che durano. Prendere un concetto tecnico complicato e trasformarlo in qualcosa che una stanza piena di non addetti ai lavori riesca davvero a seguire — è una delle parti più soddisfacenti di questo mestiere.',
    cvSklCertLbl: 'CERTIFICAZIONI //',
    cvSklCert:    'Prince2 Foundation &nbsp;·&nbsp; Qiskit Global Summer School I & II &nbsp;·&nbsp; Elements of AI — Università di Helsinki &nbsp;·&nbsp; Jarvice Expert — Lutech S.p.A.',
    cvSklLangLbl: 'LINGUE //',
    cvSklLangNative: 'madrelingua',
    cvSklLangC1:     'C1',
    cvSklLangWip:    'in corso — abbi pazienza',
    cvSklLangIt:     'Italiano',
    cvSklLangEn:     'Inglese',
    cvSklLangZh:     'Cinese tradizionale',

    intLinuxLbl:  'LINUX & FOSS',
    intScifiLbl:  'FANTASCIENZA & HORROR',
    intDesignLbl: 'DESIGN',
    intGdrLbl:    'GDR / TTRPG',
    intLinux:     'Appassionato di software open-source e di ecosistemi Linux.',
    intScifi:     'Lettore e scrittore accanito. Scrive libri quando la testa fa troppo rumore.',
    intDesign:    'Attratto dal design architettonico, della moda e della comunicazione.',
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
    aboutObsBody:       'Il soggetto mostra una disinvoltura inquietante in ambiti che non dovrebbero coesistere in un singolo individuo. Le testimonianze descrivono episodi di <em>conoscenza inspiegabile</em> &mdash; risposte corrette a domande mai poste, riferimenti a testi che il soggetto non può aver letto. Capace di passare attraverso la materia e gli argomenti con la stessa facilità: dove un osservatore riferisce di un fisico, un altro, la stessa sera, riferisce di uno scrittore, un designer, un traduttore, un mediatore. Si adatta a qualsiasi ambiente nel giro di pochi minuti &mdash; <em>lingua, postura, registro, modi di dire</em> &mdash; in un modo che fa pensare che il soggetto non assuma forme, ma le scelga da un inventario già catalogato. È stato avvistato mentre attraversava la landa, tra le lingue, tra le discipline, tra stanze piene di sconosciuti, sempre con lo stesso passo tranquillo. Considerato <em class="obs-green">non ostile</em>, ma decisamente <span class="redacted">&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;</span> &mdash; il soggetto non sembra fermarsi in nessuna forma precisa, e si raccomanda agli agenti sul campo di non provare a definirlo.',
    aboutContainmentLabel: '// PROTOCOLLO DI CONTENIMENTO',
    aboutContainmentP1: 'Nessun contenimento fisico è praticabile. Il soggetto è, per sua stessa definizione, in transito. Il contatto è consentito solo attraverso i canali autorizzati. Non tentare intercettazioni dirette.',
    aboutContainmentP2: 'Se interpellato in buona fede, il soggetto può rispondere con fotografie, racconti, consigli tecnici o una silenziosa osservazione dal finestrino.',
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
    heroSubtitle: "你剛踏上的這班想像列車，沒有明確的目的地——或許只有一個清楚的起點：<br>Sinthan，又名 Agostino Maria Cassese，會載著你穿越一片土地，那裡有奇怪的照片、來自遠方的故事，還有他一路工作下來撿拾的小小智慧。請不要把腳放到座椅上，除非 真有趣",

    card1Desc:    '我喜歡想像自己坐在一班外星列車上，拍下奇怪的風景——來看看吧。',
    card2Desc:    '我寫作，而且寫得太多了。其中一部分，就收在這裡。',
    card3Desc:    '一段工作人生：職涯、熱情與投入，都是旅途上先前停靠過的站。',
    card4Desc:    '方向盤到底在誰手上？一份機密檔案，已部分解密。',

    archiveSub:    '>_ 望向虛無的窗——滑動、點擊，看一眼吧',
    archiveLoaded: '檔案已載入',
    nextStop:      '下一站：',

    storiesSub:    '>_ 來自窗邊座位的隨筆——點一班列車，開始閱讀',
    trainsToRead:  '班待讀的列車',
    storyLoading:  '載入中...',
    storyLoadErr:  '// 無法載入文字檔。請在本機伺服器上執行。',
    delayedLabel:  '誤點',
    signalLost:    '// 訊號中斷——無法載入時刻表',

    workSub:    '>_ 車票——點一個類別，偷看一下我的工作人生',
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
    cvExp2B1:    '用敏捷方法帶領多個研發團隊',
    cvExp2B2:    '主導 AI 預測模型與類 GIS 系統的專案，跑在 HPC 與量子平台上',
    cvExp2B3:    '撰寫文件、程式庫、示範與分析，支援團隊日常運作',
    cvExp2B4:    '協調會議、活動與對外溝通',
    cvExp3Role:  '顧問 — HPC、AI 與量子運算',
    cvExp3Dept:  '米蘭，義大利',
    cvExp3B1:    '以量子運算佈道者的身分，負責售前技術工作',
    cvExp3B2:    '主要客戶：ENI、CINECA、CNMOST、PoliMI、BIREX',
    cvExp3B3:    '在拿坡里大學、CINECA 等機構開設密集課程',
    cvExp3B4:    '介紹量子產品線：最佳化、網路安全、機器學習',
    cvExp3B5:    '深化與 PoliMI 量子觀測站、IBM Quantum 的合作',
    cvPresent:   '至今',

    cvEdu1Role:  '量子科學與技術碩士',
    cvEdu1Dept:  '巴里大學 Aldo Moro · 巴里，義大利',
    cvEdu1Desc:  "為期一年、面向產業的學程，把量子的理論和實務接在一起，由物理系主辦——這個系在義大利排名第三，也是羅馬以南唯一的卓越系所。課程涵蓋量子運算、量子演算法、量子通訊、量子機器學習與量子工程：八個月的課程，加上四個月的業界實習。學程和企業、研究機構合作密切，其中包括與 Xanadu Quantum Technologies 的正式合作。",
    cvEdu2Role:  '電腦科學學士',
    cvEdu2Dept:  '薩萊諾大學 · 薩萊諾，義大利',
    cvEdu2Desc:  "三年制學程，就讀於義大利歷史最悠久的電腦科學系之一——1971 年創立，獲大學暨研究部認定為卓越系所。課程從演算法、軟體工程、電腦網路、作業系統，一路到分散式運算，理論和實作並重，也透過實驗課和業界實習累積實務經驗。",

    cvProj1Title: '量子運算與 HPC 推廣',
    cvProj1Role:  '講師與課程負責人',
    cvProj1Dept:  '大學與卓越中心',
    cvProj1Desc:  '為大學與研究中心設計並開設 HPC 與量子運算的進階課程。',
    cvProj1L1:    'CINECA — 實務量子運算學校：組合最佳化與 QAOA',
    cvProj1L2:    'UNINA — 為 CNMOST 與大學學生介紹 HPC 系統',
    cvProj1L3:    'INFN — 計算工作坊上關於量子社群的演講',
    cvProj1L4:    'Luigi Einaudi — 為高中生介紹量子運算',
    cvProj2Title: '預測性維護',
    cvProj2Role:  '產品負責人與專案經理',
    cvProj2Dept:  '國家行動中心',
    cvProj2Desc:  '帶著七位同事，開發車輛的 AI 故障預測系統。負責會議、對外窗口和產品方向。',
    cvProj3Title: 'PILOT SNAP4CITY',
    cvProj3Role:  '團隊負責人與利害關係人聯絡窗口',
    cvProj3Dept:  '都市行動與數位城市',
    cvProj3Desc:  '帶領六人團隊，研究都市行動的資料整合（佛羅倫斯大學）。同事與外部單位的聯絡窗口。',
    cvLinksLabel: '相關連結 //',

    cvSklP1:      '這些年下來，我摸索出一種介於<span class="cv-hl-accent">人與系統</span>之間的工作方式——用敏捷流程帶團隊、寫真的有人會讀的文件、把那些零件永遠停不下來的專案撐在一起。策略規劃、利害關係人管理、贏得客戶的信任，在各種截然不同的場合裡，都已經變成了第二天性。',
    cvSklP2:      '技術這一面，我的背景經過<span class="cv-hl-green">量子運算</span>、<span class="cv-hl-green">HPC 系統</span>和<span class="cv-hl-green">人工智慧與機器學習</span>——教學、售前、專案交付，都是實際動手做過的。我在 Linux 環境裡很自在，用過 Kubernetes 和容器化基礎建設，也碰過都市交通用的類 GIS 平台。',
    cvSklP3:      '溝通一直是這份工作的一部分：公開演講、替大學和研究中心開密集課程、對客戶簡報、經營長久的關係。把一個複雜的技術概念，講成一屋子非專業聽眾也真的能跟上的話——這是這份工作裡最讓我滿足的部分之一。',
    cvSklCertLbl: '認證 //',
    cvSklCert:    'Prince2 Foundation &nbsp;·&nbsp; Qiskit Global Summer School I & II &nbsp;·&nbsp; Elements of AI — 赫爾辛基大學 &nbsp;·&nbsp; Jarvice Expert — Lutech S.p.A.',
    cvSklLangLbl: '語言 //',
    cvSklLangNative: '母語',
    cvSklLangC1:     'C1',
    cvSklLangWip:    '學習中——請多包涵',
    cvSklLangIt:     '義大利文',
    cvSklLangEn:     '英文',
    cvSklLangZh:     '繁體中文',

    intLinuxLbl:  'LINUX 與 FOSS',
    intScifiLbl:  '科幻與恐怖',
    intDesignLbl: '設計',
    intGdrLbl:    'GDR / TTRPG',
    intLinux:     '熱衷於開源軟體與 Linux 生態系。',
    intScifi:     '愛讀也愛寫。腦袋太吵的時候，就寫書。',
    intDesign:    '對建築、時尚與傳播設計都有興趣。',
    intGdr:       '桌上角色扮演遊戲，還有一起構築世界。',

    // ── ABOUT PAGE ──
    aboutSub:           '>_ 尋回的檔案 &mdash; 分級已登錄存檔',
    aboutFileTag:       '受異變之職員',
    aboutClearance:     '權限等級：第二級 // 觀察',
    aboutStampClassified: '機密',
    aboutPortraitCap:   '存檔照片',
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
    aboutObsBody:       '對象在一些照理說不該同時存在於一個人身上的領域之間，展現出令人不安的熟練。報告記載了多起<em>無法解釋的知識</em>——對沒有人問過的問題給出正確答案，提到他不可能讀過的文本。他能同樣輕鬆地穿過物質與話題：一位觀察員回報看見一名物理學家，另一位在同一個晚上，回報的卻是一名作家、設計師、譯者、協調人。他能在幾分鐘內融入任何環境——<em>語言、姿態、語氣、慣用語</em>——熟練得讓人懷疑：他不是在「變成」某種形態，而是從一份早就建好的目錄裡「挑選」。曾有人目擊他穿越荒原，在語言之間、學科之間、一屋子陌生人之間穿行，步伐始終不疾不徐。評估為<em class="obs-green">無敵意</em>，但絕對<span class="redacted">&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;</span>——對象似乎不會停留在任何一種固定的形態，外勤探員請勿嘗試定義他。',
    aboutContainmentLabel: '// 收容協定',
    aboutContainmentP1: '物理收容不可行。對象依他自己的說法，正在途中。接觸僅限經許可的渠道。請勿嘗試直接攔截。',
    aboutContainmentP2: '若以善意相待，對象可能會用照片、故事、技術上的建議，或窗邊座位上一段安靜的注視，作為回應。',
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
    setText('t-card4-desc', t.card4Desc);

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
