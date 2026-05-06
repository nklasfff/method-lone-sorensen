// Metode Lone Sørensen — opslagsværk for kursister
// Dansk indhold. Strukturen genbruger motorens 12 navngivne eksporter,
// men kategori-navnene oversættes til Lones univers via app.js's
// inlinede oversettelser og via index.html.
//
// Mapping fra motorens TCM-slots til Lones kategorier:
//   organs               → Ansigtszoner (overordnede zone-områder)
//   extraordinaryMeridians → Behandlingsteknikker (greb, mønstre, sekvenser)
//   fiveElements         → Fokusområder (hovedtemaer i hendes metode)
//   practiceGuide        → I Praksis (klientmøde, samtale, forløb)
//   organOverviews etc.  → Oversigter (hurtige opslag)
//
// VIGTIGT om kilder: Indhold i denne fil er sammensat fra Lone Sørensens
// offentlige hjemmeside (metodelonesorensen.dk). Det er bevidst holdt på et
// overordnet niveau. Specifikke zone-kort, NP-punkter, og protokoller hører
// til i kursusmaterialet og bør tilføjes derfra — ikke konstrueres her.

export const APP_INFO = {
  title: 'Metode Lone Sørensen',
  subtitle: 'Opslagsværk for kursister',
  author: 'Lone Sørensen'
};

// Motoren forventer hver intro som { paragraphs: [string, ...] }.
// 'organs', 'meridians' osv. matcher motorens nøgler — ikke Lones overskrifter.
// 'extraordinary' bruges af motoren til samme felt som 'meridians'.
export const sectionIntros = {
  practice: {
    paragraphs: [
      'Vejledning til den første samtale, hudaflæsning og opbygning af et behandlingsforløb i Sorensensistem™.'
    ]
  },
  organs: {
    paragraphs: [
      'Et opslag på de overordnede zone-områder i ansigtet. Detaljerede zone-kort og NP-punkter hører til i kursusmaterialet.'
    ]
  },
  extraordinary: {
    paragraphs: [
      'De grundteknikker og specialiserede protokoller der indgår i Sorensensistem™.'
    ]
  },
  elements: { paragraphs: [] },
  foundation: { paragraphs: [] },
  overviews: { paragraphs: [] }
};

// ============================================
// I Praksis — klientmøde, samtale, forløb
// ============================================
export const practiceGuide = [
  {
    id: 'sorensensistem-fundament',
    icon: '○',
    title: 'Sorensensistem™ — fundamentet',
    subtitle: 'Hvad metoden bygger på',
    sections: [
      {
        heading: 'En sammenvævning af kilder',
        paragraphs: [
          'Sorensensistem™ er Lone Sørensens systematiserede metode, udviklet over fyrre års klinisk arbejde. Den væver flere kilder sammen: traditionel zoneterapi (fod- og hånd), kinesisk og tibetansk meridianforståelse, vietnamesisk Dien Cham-cybernetik og moderne neuroanatomi.',
          'Metoden arbejder primært med refleksområder i ansigtet — tæt på hjernen — og bruger fod- og håndzoner som understøttelse af kredsløb og hormonfrigørelse.'
        ]
      },
      {
        heading: 'Det neurologiske princip',
        paragraphs: [
          'Det grundlæggende princip er at stimulation af specifikke refleksområder kan påvirke hjernestamme, nervesystem og hormonsystem. Behandlingen sigter på at genetablere funktionel balance — ikke at fjerne symptomer.',
          'I metoden indgår 564 neurologiske refleksområder (NP-punkter) i ansigtet, kranielinjer, og specialiserede mikrosystemer som Colonlink™ udviklet af Lone selv.'
        ]
      }
    ]
  },
  {
    id: 'hudaflaesning-depotgrader',
    icon: '∿',
    title: 'Hudaflæsning og depotgrader',
    subtitle: 'At læse vævets respons',
    sections: [
      {
        heading: 'Hudens struktur som diagnostisk redskab',
        paragraphs: [
          'En central kompetence i metoden er aflæsning af hudens sensitivitet og struktur. Vævet bærer information om hvor en ubalance er opstået, og hvor langt den er nået i sin udvikling.',
          'Begrebet "depotgrader" beskriver små vævsreaktioner og blokeringer der viser sig ved palpation. De afslører ikke kun hvor symptomet sidder, men også hvilket lag i kroppens regulering der er involveret.'
        ]
      },
      {
        heading: 'Fra symptom til årsag',
        paragraphs: [
          'Aflæsningen gør det muligt at arbejde med årsagen frem for symptomet. Den klient der kommer med tinnitus kan have et depotgrads-mønster der peger mod kæbe, nakke, eller stress-respons — og behandlingen retter sig efter dette mønster, ikke alene mod tinnitus-symptomet.'
        ]
      }
    ]
  },
  {
    id: 'behandlingsforloeb',
    icon: '◇',
    title: 'Det intensive behandlingsforløb',
    subtitle: 'Hvorfor gentagelse er central',
    sections: [
      {
        heading: 'Daglig, gentagen stimulation',
        paragraphs: [
          'Sorensensistem™ er bygget op omkring intensive forløb med daglig eller hyppig behandling. Det neurologiske respons styrkes ved gentagelse — én enkelt behandling rækker sjældent til den dybde metoden arbejder mod.',
          'Forløbet planlægges individuelt ud fra klientens depotgrads-mønster, livsomstændigheder og behandlingsmål.'
        ]
      },
      {
        heading: 'Den individuelle behandlingsplan',
        paragraphs: [
          'Hver klient får sin egen plan — ikke en standardprotokol. Planen bygger på den indledende samtale, hudaflæsningen, og de zone-områder der responderer i den første sekvens. Den justeres løbende efterhånden som vævet bevæger sig.'
        ]
      }
    ]
  }
];

// ============================================
// Ansigtszoner — overordnede refleksområder
// ============================================
// NB: Kun overordnede zone-områder her, ikke specifikke NP-punkter.
// Detaljeret kortlægning hører hjemme i kursusmaterialet.
export const organs = [
  {
    id: 'pandezone',
    color: '#b8952e',
    icon: '◐',
    name: 'Pandezone',
    nickname: 'Frontallappen',
    element: 'Neurologi',
    yinYang: 'Højere hjernefunktion',
    time: 'Frontalt',
    partner: 'Limbisk zone',
    description: [
      'Pandezonen forbinder til frontallappen — hjernens område for planlægning, beslutningstagning, opmærksomhed og hæmning af impulser.',
      'I Sorensensistem™ bruges pandezonen ofte i arbejde med koncentration, kognitiv udmattelse og følelsesmæssig regulering. Områder inden for kraniellinjen kan stimulere overgang mellem hjernehalvdele.'
    ],
    themes: [
      {
        title: 'Indikationer',
        questions: [
          'Oplever klienten manglende fokus eller mental tåge?',
          'Er der tegn på beslutningstræthed eller kognitiv overbelastning?',
          'Hvordan reagerer klienten på stimuli — hyperreaktiv eller flad?'
        ]
      },
      {
        title: 'Sammenhænge',
        questions: [
          'Hvordan står søvnmønstret?',
          'Er der koncentrationsskift hen over døgnet?'
        ]
      }
    ]
  },
  {
    id: 'limbisk-zone',
    color: '#c43c3c',
    icon: '◑',
    name: 'Limbisk zone',
    nickname: 'Følelseshjernen',
    element: 'Neurologi',
    yinYang: 'Emotionel regulering',
    time: 'Midt-pande',
    partner: 'Pandezone',
    description: [
      'Den limbiske zone forbinder til det limbiske system — amygdala, hippocampus og tilstødende strukturer der står for følelsesmæssig respons, hukommelse og stressregulering.',
      'Stimulation i området bruges ofte ved trauma, angst og søvnforstyrrelser, og som led i den 8-trins neurologiske behandling i Mental Balance-arbejdet.'
    ],
    themes: [
      {
        title: 'Indikationer',
        questions: [
          'Er der vedvarende uro eller hyperarousal?',
          'Findes der traumetema i klientens historik?',
          'Hvordan ser klientens stress-respons ud — fight, flight, freeze, fawn?'
        ]
      },
      {
        title: 'Sammenhænge',
        questions: [
          'Hvordan står følelsesmæssig stabilitet over tid?',
          'Er der tegn på dissociation eller emotionel afflukket­hed?'
        ]
      }
    ]
  },
  {
    id: 'kraniel-midtlinje',
    color: '#2e7a2e',
    icon: '│',
    name: 'Kraniel midtlinje',
    nickname: 'Hemisfærelinjen',
    element: 'Neurologi',
    yinYang: 'Højre/venstre koordinering',
    time: 'Midtsagittal',
    partner: 'Pandezone',
    description: [
      'Den kraniel midtlinje arbejder med koordinering mellem højre og venstre hjernehalvdel. Den indgår i den 7. grundfase af basis-behandlingen og er central i mental balance-arbejdet.',
      'Området relaterer til corpus callosum og strukturer der formidler mellem hemisfærerne. Stimulation kan understøtte integration efter traumer, læringsvanskeligheder og kognitiv ubalance.'
    ],
    themes: [
      {
        title: 'Indikationer',
        questions: [
          'Er der tegn på dyskoordinering — mellem tanke og handling, ord og krop?',
          'Hvordan står læringskapacitet og hukommelse?'
        ]
      }
    ]
  },
  {
    id: 'vagus-parasympatisk',
    color: '#2e4a8b',
    icon: '∿',
    name: 'Vagus- og parasympatisk zone',
    nickname: 'Hvilesystemet',
    element: 'Neurologi',
    yinYang: 'Autonom balance',
    time: 'Lateralt',
    partner: 'Limbisk zone',
    description: [
      'Vagusnerven er det parasympatiske nervesystems hovedrute — den regulerer hjerterytme, fordøjelse, åndedræt og ro-tilstand. I Sorensensistem™ stimuleres vagus via specifikke zoner i ansigt og hals.',
      'Vagus-stimulering bruges ofte ved kronisk stress, fordøjelsesproblemer, tinnitus, og som led i tarm-hjerne-aksen sammen med Colonlink™.'
    ],
    themes: [
      {
        title: 'Indikationer',
        questions: [
          'Hvordan er klientens fordøjelse og hjerterytme i hvile?',
          'Findes der tegn på vedvarende sympatikus-aktivering?',
          'Hvordan står åndedrættet — overfladisk, holdende, dybt?'
        ]
      },
      {
        title: 'Sammenhænge',
        questions: [
          'Er der søvnforstyrrelser eller manglende restitution?',
          'Tinnitus, svimmelhed, eller andre kraniale symptomer?'
        ]
      }
    ]
  }
];

// ============================================
// Behandlingsteknikker
// ============================================
// Genbruger meridian-shape: id, icon, name, nickname, aka,
// openingPoint, coupledPoint, level, description, partnerMeridian, relatedOrgans
export const extraordinaryMeridians = [
  {
    id: 'syv-grundfaser',
    icon: '7',
    name: 'De syv grundfaser',
    nickname: 'Basis-sekvensen',
    aka: 'Sorensensistem™ basis',
    openingPoint: 'Meridian- og nervepunktstimulation',
    coupledPoint: 'Lymfedrænage',
    level: 'Modul 1 — fundament',
    description: [
      'Den grundlæggende behandlings-sekvens i Sorensensistem™ består af syv faser, der tilsammen aktiverer kroppens regulerende systemer. Sekvensen er ens fra klient til klient i sin struktur, men intensitet og fokus tilpasses individuelt.',
      'Faserne dækker meridian- og nervepunktstimulation, lymfeaktivering, vietnamesiske mikrosystemer for hjerne og sansestimulation, lymfedrænage, og koordinering mellem højre og venstre hjernehalvdel.'
    ]
  },
  {
    id: 'colonlink',
    icon: '⊙',
    name: 'Colonlink™',
    nickname: 'Tarm-hjerne-aksen',
    aka: 'Lone Sørensens egen mikrosystem',
    openingPoint: 'Refleksområder for fordøjelse',
    coupledPoint: 'Hormonelle pulskontaktpunkter',
    level: 'Modul 4 — hormonelt og gut-brain',
    description: [
      'Colonlink™ er et mikrosystem udviklet af Lone Sørensen, der arbejder med tarm-hjerne-aksen og hormonel regulering. Det forbinder fordøjelsessystemets refleksområder med hormonelle puls-kontaktpunkter.',
      'Anvendes ved hormonelle ubalancer, infertilitet, fordøjelsesproblemer og som led i mental balance-arbejdet — særligt hvor stress, tarm og hjernekemi er sammenvævet.'
    ]
  },
  {
    id: 'ynsa-yamamoto',
    icon: '⚡',
    name: 'Yamamoto Neuro Puncture',
    nickname: 'YNSA',
    aka: 'Yamamoto New Scalp Acupuncture',
    openingPoint: 'Skalp-zoner',
    coupledPoint: 'Neurologiske basispunkter',
    level: 'Modul 4 — avanceret neurologi',
    description: [
      'YNSA er en japansk skalp-akupunktur-metode udviklet af Toshikatsu Yamamoto. I Sorensensistem™ integreres den i avanceret neurologisk behandling — særligt ved facialisparese, talevanskeligheder, synkebesvær og andre kranienerve-relaterede tilstande.',
      'Metoden bruger specifikke zoner på skalpen der korresponderer til motoriske og sensoriske områder i hjernen.'
    ]
  },
  {
    id: 'castillo-muskelstimulation',
    icon: '◢',
    name: 'Dr. Castillos muskelstimulation',
    nickname: 'Cubansk neuro-muskulær',
    aka: 'Muskelreflektorisk protokol',
    openingPoint: 'Muskelfæste-punkter',
    coupledPoint: 'Neurologisk relé',
    level: 'Avanceret',
    description: [
      'En protokol fra Dr. Castillos arbejde i Cuba, integreret i metodens avancerede arbejde. Bruges ved akutte skader, muskulære lammelser og neurologiske tilstande hvor motorisk respons er kompromitteret.'
    ]
  },
  {
    id: 'plexus-balancering',
    icon: '✦',
    name: 'Plexus-balancering',
    nickname: 'Emotionel regulering',
    aka: 'Solar plexus og diafragma',
    openingPoint: 'Plexus solaris-zone',
    coupledPoint: 'Diafragma-zone',
    level: 'Grundteknik',
    description: [
      'Plexus-balancering arbejder med solar plexus-området og diafragma. Anvendes ved emotionel ustabilitet, angst, og som forberedelse til dybere arbejde med limbiske strukturer.',
      'Indgår ofte som "stille fase" mellem mere stimulerende sekvenser — for at lade klientens system integrere det der er igangsat.'
    ]
  },
  {
    id: 'kranielinjer',
    icon: '═',
    name: 'Kranielinjer og kraniepunkter',
    nickname: 'Linjearbejdet',
    aka: 'Kraniel mapping',
    openingPoint: 'Sagittale linjer',
    coupledPoint: 'Lateral koronallinjer',
    level: 'Grundteknik',
    description: [
      'Kranielinjerne er specifikke linjer i ansigt og kranie der tilsammen udgør et netværk af stimulationsveje. Hver linje har sit fokus — nogle adresserer hjernehalvdels-koordinering, andre forbindelser til kranienerver eller hormonale strukturer.',
      'Linjerne arbejdes ofte i sekvens — fra grov til fin — og kombineres med punktstimulation på specifikke koordinater langs linjen.'
    ]
  }
];

// ============================================
// Fokusområder — udfyldes fra kursusmateriale senere.
// ============================================
export const fiveElements = [];

// ============================================
// Oversigter — udfyldes senere.
// ============================================
export const organOverviews = [];
export const meridianOverviews = [];
export const symptomReference = [];
export const patternLibrary = [];
// Stubs der opfylder motorens shape-krav. Skjules på UI-niveau senere.
export const conversationStructure = {
  title: '',
  subtitle: '',
  sections: []
};
export const organClock = [];
export const tcmFoundation = {
  yinYang: { title: '', subtitle: '' },
  elementCycles: { title: '', subtitle: '' },
  organPartnership: { title: '', subtitle: '' }
};
