// The Patterns Behind — App Logic v2
import { getLangData } from './data.js?v=lone-2';
import { polyvagalIntro, polyvagalStates, polyvagalSymptoms, polyvagalPatterns } from './data-pv.js?v=1';

// ============================================
// Internationalization (inlined)
// ============================================
const translations = {
  en: {
    pageTitle: 'The Patterns Behind — TCM in Practice',
    brandTitle: 'The Patterns Behind',
    brandSubtitle: 'Traditional Chinese Medicine in Practice',
    homeIntro: 'Explore organs, meridians and elements — and discover patterns in your practice.',
    hubPractice: 'In Practice',
    hubPracticeDesc: 'Guidance for dialogue and pattern discovery',
    hubOrgans: 'The 12 Organs',
    hubOrgansDesc: 'Organ systems, meridians and the organ clock',
    hubElements: 'Five Elements',
    hubElementsDesc: 'Wood, Fire, Earth, Metal, Water and core principles',
    hubMeridians: 'The 8 Extraordinary',
    hubMeridiansDesc: 'Deeper energy systems and meridians',
    hubOverviews: 'Overviews',
    hubOverviewsDesc: 'Quick reference for organs, symptoms and dialogue',
    sectionPracticeTitle: 'In Practice',
    sectionPracticeSubtitle: 'Guidance · Dialogue · Pattern Discovery',
    sectionOrgansTitle: 'The 12 Organs',
    sectionOrgansSubtitle: 'Meridians & Organ Systems',
    sectionElementsTitle: 'Five Elements',
    sectionElementsSubtitle: 'Wood · Fire · Earth · Metal · Water',
    sectionMeridiansTitle: 'The 8 Extraordinary',
    sectionMeridiansSubtitle: 'Deeper Energy Systems',
    sectionOverviewsTitle: 'Overviews',
    sectionOverviewsSubtitle: 'Quick reference · Organs · Patterns · Symptoms · Dialogue',
    navHome: 'Home',
    navPractice: 'Practice',
    navOrgans: 'Organs',
    navElements: 'Elements',
    navMeridians: 'Meridians',
    backHome: 'Home',
    btnOrganClock: 'The Organ Clock',
    btnCorePrinciples: 'Core Principles',
    tabOrgans: 'Organs & The 12 Meridians',
    tabMeridians: 'Extraordinary Meridians',
    tabSymptoms: 'Symptoms',
    tabDialogue: 'Dialogue',
    tabPatterns: 'Patterns',
    tabOverview: 'Overview',
    tab8Themes: '8 Themes',
    tabKeyPoints: 'Key Points',
    tabElOverview: 'Overview',
    tabCorrespondences: 'Correspondences',
    tabCycles: 'Cycles',
    tabSeasonal: 'Seasonal Wisdom',
    tabMOverview: 'Overview',
    tabPathway: 'Pathway',
    tabMKeyPoints: 'Key Points',
    tabMThemes: '8 Themes',
    searchPlaceholder: 'Search organs, elements, meridians...',
    searchTyping: 'Start typing to search...',
    searchNoResults: 'No results for',
    searchOrgans: 'Organs',
    searchElements: 'Elements',
    searchMeridians: 'Extraordinary Meridians',
    searchPractice: 'In Practice',
    searchFoundation: 'Core Principles',
    searchOverviews: 'Overviews',
    menuSections: 'Sections',
    menuHome: 'Home',
    menuPractice: 'In Practice',
    menuPolyvagal: 'Patterns in the Nervous System',
    menuOrgans: 'The 12 Organs',
    menuElements: 'Five Elements & Core Principles',
    menuMeridians: 'The 8 Extraordinary Meridians',
    menuOverviews: 'Overviews',
    menuInfo: 'Information',
    menuAbout: 'About The Patterns Behind',
    menuHowTo: 'How to Use the App',
    menuAppearance: 'Appearance',
    menuLanguage: 'Language',
    themeLightMode: 'Switch to light mode',
    themeDarkMode: 'Switch to dark mode',
    langEnglish: 'English',
    langDanish: 'Dansk',
    readMore: 'Read more',
    hide: 'Hide',
    elementOrgansTitle: 'Element Organs',
    generatingCycle: 'Generating Cycle (Sheng)',
    controllingCycle: 'Controlling Cycle (Ke)',
    nourishedBy: 'Nourished by',
    nourishes: 'Nourishes',
    controls: 'Controls',
    controlledBy: 'Controlled by',
    seasonalGuidance: 'Guidance for the',
    seasonalGuidanceSuffix: 'season',
    nourishesArrow: 'nourishes →',
    controlsArrow: 'controls →',
    elWood: 'Wood',
    elFire: 'Fire',
    elEarth: 'Earth',
    elMetal: 'Metal',
    elWater: 'Water',
    yinYangPairs: 'Yin & Yang Pairs',
    openingPoint: 'Opening Point:',
    coupledPoint: 'Coupled Point:',
    pairedWith: 'Paired with',
    relatedOrgans: 'Related Organs',
    ovKnownAs: 'Known as',
    ovTime: 'Time',
    ovPartner: 'Partner',
    ovElement: 'Element',
    ovOpensTo: 'Opens to',
    ovShowsIn: 'Shows in',
    ovEmotion: 'Emotion',
    ovHouses: 'Houses',
    ovKeyFunction: 'Key Function',
    ovClassicSigns: 'Classic Signs',
    ovQuickSigns: 'Quick Signs',
    ovDetailedOverview: 'Detailed Overview',
    ovSymptoms: 'Symptoms',
    ovPhysical: 'Physical Manifestations',
    ovFunctionsEmotions: 'Functions & Emotions',
    ovViewFull: 'View full',
    ovPageWith8Themes: 'page with 8 mapping themes →',
    ovPageArrow: 'page →',
    ovPrimarySymptoms: 'Primary Symptoms',
    ovFunctionsProperties: 'Functions & Properties',
    ovManifestations: 'Manifestations',
    ovEnergetics: 'Energetics & Emotions',
    symptomIntro: 'Tap a symptom to see the primary organs to investigate',
    patternsIntro: 'Tap a pattern to see its description, differential, and treatment guidance',
    aboutTitle: 'About The Patterns Behind',
    aboutBody: [
      'The Patterns Behind is an app built as a companion tool to the material of the same name. It gives practitioners a practical reference for understanding and mapping patterns in their clients based on Traditional Chinese Medicine.',
      'The clinical content draws on "The Patterns Behind" by Niklas Patursson, supplemented by classical sources from Giovanni Maciocia (The Foundations of Chinese Medicine, The Practice of Chinese Medicine, The Channels of Acupuncture, The Psyche in Chinese Medicine), Peter Deadman (A Manual of Acupuncture), and Cheng Xinnong (Chinese Acupuncture and Moxibustion).',
      'The app covers the 12 organs and meridians, the 8 extraordinary meridians, five element theory, the organ clock and the core TCM principles — all presented with concrete questions and themes for use in practice.',
      'It also includes a symptom analysis tool that, through cross-references, points to the organs, elements, meridians and 12 classical patterns most consistent with your client’s picture — and a local client archive so you can follow a course of treatment over time.',
      'The thought behind it: this app is not an authority that delivers a diagnosis. It is an entry tool that points to where you can begin listening. The pattern behind — what binds the symptoms together — is discovered in conversation and palpation, not in a spreadsheet. The app can remind you where to look; it cannot see the client for you.'
    ],
    howtoTitle: 'How to Use the App',
    howtoBody: [
      'Use the bottom navigation to jump between sections. "In Practice" guides the conversation with your client and the eight foundational questions.',
      'Under each organ you find 8 mapping themes with concrete questions to ask. Use the organ clock to read time patterns and the five element section to see relationships between organs.',
      'Symptom Analysis: pick 3–9 of the client’s symptoms and the app shows which organs, elements, meridians and patterns emerge. The result is an entry point for further dialogue and palpation — never a diagnosis.',
      'My Clients: save analyses per client using a code (e.g. K01) — everything stays on your device. Follow the course over time with pattern bars, an element pentagon and a what-changed-since-last view. Export or import your archive as a JSON backup.',
      'Overviews: a quick reference to organs, the 12 patterns, symptoms and the conversation structure — even outside an active analysis. Tap any pattern or symptom to expand it.'
    ],
    privacyTitle: 'Privacy and Data',
    privacyBody: [
      'Everything about your clients is stored locally on your device. Nothing is sent to a server, nothing to a cloud service, nothing to a third party. The app has no account, no login, no tracking.',
      'When you save an analysis to a client, it is kept in your browser\'s local storage. That also means if you clear browser data or switch to a different device or browser, the data is gone — unless you exported it as a backup first.',
      'Your responsibility: use a client code (e.g. K01 or a journal number), never a full name. The link between code and person stays safely in your clinic\'s own journal. The app does not know who the client is — only which symptoms and patterns have shown up over time.',
      'Export saves a .json file to your device\'s default Download folder. Import opens the same folder so you can pick a previous file. That is your backup when you switch device or browser. You can also move the file between devices via email, AirDrop or a USB key.'
    ],
    faqTitle: 'Questions and Answers',
    faqBody: [
      ['Can I use the app offline?', 'Yes. Once you have opened the site once, it works without internet. It is a web page, so you can save it to the home screen or as a bookmark.'],
      ['Where is my client data stored?', 'Only locally in your browser, on the device you use. Nothing is sent to a server. See "Privacy and Data" for more.'],
      ['Can I share an analysis with my client?', 'Yes. On the analysis result there is a "Copy summary" button that puts a plain summary on your clipboard. You can then paste it into an email, a note, or wherever.'],
      ['Where is my exported archive?', 'The file tcm-clients-YYYYMMDD.json is saved in your device\'s default Download folder (Files app → Downloads on iPhone/iPad, Downloads folder on Mac/Windows/Android). When you import, you pick it from the same place.'],
      ['Can I move my archive to a different device?', 'Yes. Export on one device, send the file to yourself (e.g. via email or AirDrop), save it on the other device, and import.'],
      ['What do I do when a pattern does not clearly match?', 'That is normal. The result is an entry point — not a diagnosis. Use the dominant organ or element as a start, and let the conversation and palpation lead you deeper. If several patterns are tied without a clear lead, one of the extraordinary meridians may be the entry.'],
      ['What is the difference between the live analysis and the one I save to a client?', 'They show the same result. The difference is that the saved version is remembered chronologically in My Clients, so you can see pattern shifts and the course over time.'],
      ['Should I use the app as a practitioner tool or a client tool?', 'It is built for practitioners. The client sees nothing in the app directly — it helps you structure your view and your course of treatment.']
    ],
    menuPrivacy: 'Privacy and Data',
    menuFaq: 'Questions and Answers',
    clockActiveNow: 'is active now',
    ariaMenu: 'Menu',
    ariaSearch: 'Search',
    ariaCloseSearch: 'Close search',
    ariaCloseMenu: 'Close menu',
    saTitle: 'Symptom Analysis',
    saSubtitle: 'Resonance · Entry Point · Pattern Discovery',
    saIntro: 'Select between 3 and 9 of your client’s symptoms below. The app shows which organ systems emerge through the cross-references in the material.',
    saDisclaimer: 'This is not a diagnosis. The result is an entry point for further dialogue and palpation — a starting place for the pattern, not a conclusion.',
    saCounter: 'selected',
    saCounterRange: '3–9',
    saReset: 'Clear',
    saAnalyse: 'Analyse pattern',
    saResultsHeading: 'Organ Resonance',
    saResultsLead: 'Based on the symptoms you selected, these organs stand out:',
    saHits: 'symptoms',
    saHitsOf: 'of',
    saPrimary: 'Primary',
    saSecondary: 'Secondary',
    saTertiary: 'Tertiary',
    saNotesHeading: 'Specific observations',
    saNotesLead: 'What to look for and listen for behind each symptom you selected:',
    saNextHeading: 'Next Step',
    saNextBody: 'Open the primary organ’s page and use the 8 mapping themes to deepen the dialogue with your client.',
    saOpenOrgan: 'Open',
    saMinHint: 'Select at least 3 symptoms',
    saMaxHint: 'Maximum 9 reached',
    saPracticeCardTitle: 'Symptom Analysis',
    saPracticeCardDesc: 'Select 3–9 symptoms — see which organs resonate',
    saElementHeading: 'Element Resonance',
    saElementLead: 'Together, the selected symptoms point to this element:',
    saElementOrgans: 'Organs in this element',
    saElementOpen: 'Explore',
    saMeridianHeading: 'Meridian Resonance',
    saMeridianLead: 'These extraordinary meridians are also activated by the symptoms you selected:',
    saCopySummary: 'Copy summary',
    saCopySummaryHint: 'for my notes',
    saSaveToClientHint: 'in client archive',
    saClientHandoutHint: 'home practice',
    saResultSavePrimary: 'Save analysis',
    saResultSavePrimaryHint: 'to a client in your archive',
    saResultActionsNote: 'Once saved, you\'ll find it under Mine klienter in the menu — there you can open the home-practice handout for the client and copy a summary for your own notes.',
    sessionHandoutHint: 'send a link via Mail, SMS, WhatsApp — or print the document with illustration',
    sessionCopySummary: 'Copy summary for my notes',
    sessionCopySummaryHint: 'paste the analysis into your own journal system or notes app — for the practitioner, not the client',
    saCopiedConfirm: 'Copied ✓',
    saCopyFailed: 'Could not copy',
    saSummaryTitle: 'Symptom Analysis',
    saSummarySymptoms: 'Selected symptoms',
    saSummaryOpenPrimary: 'Open',
    saSummaryAndUseThemes: 'and use the 8 mapping themes.',
    saSummaryDisclaimer: '(Generated by The Patterns Behind — TCM reference. Not a diagnosis.)',
    saPatternHeading: 'Pattern Resonance',
    saPatternLead: 'Classical TCM syndromes most consistent with the symptoms you selected:',
    saPatternKey: 'Key',
    saPatternSupporting: 'Supporting',
    saPatternMatch: 'match',
    saPatternToggleOpen: 'Show more',
    saPatternToggleClose: 'Show less',
    saPatternDescription: 'Description',
    saPatternDifferential: 'Differential',
    saPatternTreatment: 'Approach',
    saHomePractice: 'For the client at home',
    hpInnerImage: 'Inner picture',
    hpDiet: 'Diet',
    hpMovement: 'Movement',
    hpAcupressure: 'Acupressure',
    hpAwareness: 'Awareness',
    saClientHandout: 'For the client',
    handoutHeading: 'For your home',
    handoutWeSawTitle: 'What we saw together today',
    handoutWhatYouCanDoTitle: 'What you can do yourself',
    handoutFooter: 'This is not extra work. These are ways of listening to the body in everyday life. Pick the one that speaks to you — or just one of them to start with.\n\nIf you would like to share it with me next time, you can note what you tried, and what you noticed.',
    followupTitle: 'Follow-up',
    followupLead: 'What did the client try, and what did it do? Update freely between sessions.',
    followupTriedQ: 'Tried?',
    followupHelpedQ: 'Helped?',
    followupTriedNo: 'No',
    followupTriedSome: 'A bit',
    followupTriedYes: 'Yes',
    followupHelpedNo: 'Not really',
    followupHelpedSome: 'A bit',
    followupHelpedClearly: 'Clearly',
    followupNotesLabel: 'Notes from the follow-up',
    followupNotesPlaceholder: 'What surprised? What stood out?',
    followupResponded: 'What responded best across the course',
    followupNoData: 'No follow-up data yet',
    saPatternMatchedSymptoms: 'Symptoms in your selection that match',
    saPatternEmpty: 'None of the 12 patterns clearly match your selection — try adjusting symptoms or treat the organ-resonance as the primary guide.',
    menuClients: 'My Clients',
    clientsTitle: 'My Clients',
    clientsSubtitle: 'Local progression-sketches. Never leave your device.',
    clientsEmpty: 'No saved clients yet. Save an analysis to start tracking a client over time.',
    clientsDisclaimer: 'This is not a journal — it is your own progression-sketch. Use your clinic journal system for formal documentation.',
    clientsSessionsLabel: 'sessions',
    clientsSessionLabel: 'session',
    clientsLastSession: 'Last',
    saSaveToClient: 'Save to client',
    saveDialogTitle: 'Save analysis',
    saveDialogExisting: 'Existing client',
    saveDialogNew: 'New client',
    saveDialogClientId: 'Client code',
    saveDialogClientIdHint: 'Use a code, not a name (e.g. K01, JN-1234)',
    saveDialogNotes: 'Notes (optional)',
    saveDialogNotesPlaceholder: 'Notes for this session...',
    saveDialogSave: 'Save',
    saveDialogCancel: 'Cancel',
    saveDialogSaved: 'Saved',
    saveDialogPickClient: 'Pick a client',
    clientDetailDeleteClient: 'Delete client',
    clientDetailDeleteSession: 'Delete session',
    clientDetailConfirmDeleteClient: 'Delete this client and all sessions? This cannot be undone.',
    clientDetailConfirmDeleteSession: 'Delete this session? This cannot be undone.',
    clientDetailEmpty: 'No sessions saved.',
    clientDetailSessionsTitle: 'Sessions',
    sessionPrimary: 'Primary',
    sessionPattern: 'Primary pattern',
    sessionSymptoms: 'Symptoms',
    sessionNotes: 'Notes',
    sessionNoPattern: 'No clear pattern',
    exportArchive: 'Save a copy',
    importArchive: 'Restore a copy',
    importDone: 'Imported',
    importDoneSuffix: 'client(s)',
    importError: 'Could not read the file — is it a valid client archive?',
    clientsActionsHint: 'Export saves a JSON file to your device\'s Download folder (Files app → Downloads on iPhone/iPad, Downloads on Mac/Windows). Import opens the same place so you can pick a previous file.',
    progressTitle: 'Progression',
    progressLead: 'How the primary pattern shifts across sessions',
    progressNoPattern: 'No clear pattern',
    progressDiffTitle: 'Since last session',
    progressDiffNew: 'Appeared',
    progressDiffGone: 'Resolved',
    progressDiffStable: 'No change in selected symptoms',
    progressElementsTitle: 'Element balance over time'
  },
  da: {
    pageTitle: 'Metode Lone Sørensen — Opslagsværk',
    brandTitle: 'Metode Lone Sørensen',
    brandSubtitle: 'Opslagsværk for kursister',
    homeIntro: 'En neuro-regulatorisk tilgang til hormonel balance.',
    hubPractice: 'Tilgangen',
    hubPracticeDesc: 'Hvorfor systemet skal mødes som helhed',
    hubOrgans: 'Kirtlerne',
    hubOrgansDesc: 'Masterkirtler og perifere kirtler',
    hubElements: 'Fokusområder',
    hubElementsDesc: '',
    hubMeridians: 'Teknikkerne',
    hubMeridiansDesc: 'Nervepunkter, colon-link og det lagvise arbejde',
    hubOverviews: 'Oversigter',
    hubOverviewsDesc: '',
    sectionPracticeTitle: 'Tilgangen',
    sectionPracticeSubtitle: 'Den neuro-regulatoriske tilgang til hormonel balance',
    sectionOrgansTitle: 'Kirtlerne',
    sectionOrgansSubtitle: 'Masterkirtler & Perifere Kirtler',
    sectionElementsTitle: 'Fokusområder',
    sectionElementsSubtitle: '',
    sectionMeridiansTitle: 'Teknikkerne',
    sectionMeridiansSubtitle: 'Nervepunkter · Colon-link · Lagvis arbejde',
    sectionOverviewsTitle: 'Oversigter',
    sectionOverviewsSubtitle: '',
    navHome: 'Hjem',
    navPractice: 'Tilgangen',
    navOrgans: 'Kirtler',
    navElements: 'Fokus',
    navMeridians: 'Teknikker',
    backHome: 'Hjem',
    btnOrganClock: 'Organuret',
    btnCorePrinciples: 'Grundprincipper',
    tabOrgans: 'Organer & De 12 Meridianer',
    tabMeridians: 'Ekstraordinære Meridianer',
    tabSymptoms: 'Symptomer',
    tabDialogue: 'Dialog',
    tabPatterns: 'Mønstre',
    tabOverview: 'Overblik',
    tab8Themes: '8 Temaer',
    tabKeyPoints: 'Nøglepunkter',
    tabElOverview: 'Overblik',
    tabCorrespondences: 'Korrespondancer',
    tabCycles: 'Cyklusser',
    tabSeasonal: 'Sæsonvisdom',
    tabMOverview: 'Overblik',
    tabPathway: 'Forløb',
    tabMKeyPoints: 'Nøglepunkter',
    tabMThemes: '8 Temaer',
    searchPlaceholder: 'Søg zoner, teknikker, symptomer...',
    searchTyping: 'Begynd at skrive for at søge...',
    searchNoResults: 'Ingen resultater for',
    searchOrgans: 'Ansigtszoner',
    searchElements: 'Fokusområder',
    searchMeridians: 'Behandlingsteknikker',
    searchPractice: 'I Praksis',
    searchFoundation: 'Grundprincipper',
    searchOverviews: 'Oversigter',
    menuSections: 'Sektioner',
    menuHome: 'Hjem',
    menuPractice: 'I Praksis',
    menuPolyvagal: 'Mønstre i nervesystemet',
    menuOrgans: 'Ansigtszoner',
    menuElements: 'Fokusområder',
    menuMeridians: 'Behandlingsteknikker',
    menuOverviews: 'Oversigter',
    menuInfo: 'Information',
    menuAbout: 'Om appen',
    menuHowTo: 'Sådan bruger du appen',
    menuAppearance: 'Udseende',
    menuLanguage: 'Sprog',
    themeLightMode: 'Skift til lyst tema',
    themeDarkMode: 'Skift til mørkt tema',
    langEnglish: 'English',
    langDanish: 'Dansk',
    readMore: 'Læs mere',
    hide: 'Skjul',
    elementOrgansTitle: 'Elementets Organer',
    generatingCycle: 'Skabelsescyklus (Sheng)',
    controllingCycle: 'Kontrolcyklus (Ke)',
    nourishedBy: 'Næres af',
    nourishes: 'Nærer',
    controls: 'Kontrollerer',
    controlledBy: 'Kontrolleres af',
    seasonalGuidance: 'Vejledning til',
    seasonalGuidanceSuffix: 'sæsonen',
    nourishesArrow: 'nærer →',
    controlsArrow: 'kontrollerer →',
    elWood: 'Træ',
    elFire: 'Ild',
    elEarth: 'Jord',
    elMetal: 'Metal',
    elWater: 'Vand',
    yinYangPairs: 'Yin & Yang Par',
    openingPoint: 'Åbningspunkt:',
    coupledPoint: 'Makkerpunkt:',
    pairedWith: 'Parret med',
    relatedOrgans: 'Relaterede Organer',
    ovKnownAs: 'Kaldenavn',
    ovTime: 'Tid',
    ovPartner: 'Partner',
    ovElement: 'Element',
    ovOpensTo: 'Åbner til',
    ovShowsIn: 'Vises i',
    ovEmotion: 'Emotion',
    ovHouses: 'Huser',
    ovKeyFunction: 'Nøglefunktion',
    ovClassicSigns: 'Klassiske Tegn',
    ovQuickSigns: 'Hurtige Tegn',
    ovDetailedOverview: 'Detaljeret Overblik',
    ovSymptoms: 'Symptomer',
    ovPhysical: 'Fysiske Manifestationer',
    ovFunctionsEmotions: 'Funktioner & Emotioner',
    ovViewFull: 'Se fuld',
    ovPageWith8Themes: 'side med 8 kortlægningstemaer →',
    ovPageArrow: 'side →',
    ovPrimarySymptoms: 'Primære Symptomer',
    ovFunctionsProperties: 'Funktioner & Egenskaber',
    ovManifestations: 'Manifestationer',
    ovEnergetics: 'Energetik & Emotioner',
    symptomIntro: 'Tryk på et symptom for at se de primære organer at undersøge',
    patternsIntro: 'Tryk på et mønster for at se beskrivelse, differential og tilgang',
    aboutTitle: 'Om appen',
    aboutBody: [
      'Dette er et opslagsværk for kursister hos Lone Sørensen. Det er bygget som et arbejdsrum mellem kurserne — et sted hvor du kan slå op, repetere og finde sammenhænge i ansigtszoneterapi, refleksterapi og neurologisk behandling.',
      'Appen er ikke en erstatning for kurserne, men et supplement der støtter din praksis i hverdagen.'
    ],
    howtoTitle: 'Sådan bruger du appen',
    howtoBody: [
      'Brug bundnavigationen til at skifte mellem hovedsektioner. "I Praksis" rummer vejledning til klientmødet og forløbet.',
      '"Ansigtszoner" giver dig et opslag på de neurologiske refleksområder. "Fokusområder" samler hovedtemaerne i metoden — neurologi, lymfe, hormoner, trauma. "Behandlingsteknikker" beskriver greb, sekvenser og protokoller. "Oversigter" giver hurtige opslag på tværs.',
      'Tryk på et kort for at se detaljer. Brug søgefunktionen øverst til højre når du leder efter noget specifikt.'
    ],
    privacyTitle: 'Privatliv og data',
    privacyBody: [
      'Alt om dine klienter gemmes lokalt på din enhed. Der sendes intet til en server, intet til en sky-tjeneste, intet til tredjepart. Appen har ingen konto, ingen indlogning, ingen sporing.',
      'Når du gemmer en analyse til en klient, opbevares det i din browsers lokale lager (localStorage). Det betyder også at hvis du sletter browser-data eller skifter til en anden enhed eller browser, er data væk — medmindre du først har eksporteret dem som backup.',
      'Dit ansvar: brug en klient-kode (fx K01 eller et journalnummer), aldrig et fuldt navn. Koblingen kode↔person ligger sikkert i din egen kliniks journal. Appen ved ikke hvem klienten er — kun hvilke symptomer og mønstre der har vist sig over tid.',
      'Eksport gemmer en .json-fil i din enheds standard Download-mappe. Import åbner samme mappe så du kan vælge en tidligere fil. Det er din backup når du skifter enhed eller browser. Du kan også flytte filen mellem enheder via email, AirDrop eller en USB-nøgle.'
    ],
    faqTitle: 'Spørgsmål og svar',
    faqBody: [
      ['Kan jeg bruge appen offline?', 'Ja. Når du har åbnet siden én gang, virker den uden internet. Det er en webside, så du kan gemme den på hjemmeskærmen eller som bogmærke.'],
      ['Hvor gemmes mine klient-data?', 'Kun lokalt i din browser, på den enhed du bruger. Der sendes intet til en server. Læs mere under "Privatliv og data".'],
      ['Hvad er forskellen på Symptom-Analyse og Mønstre i nervesystemet?', 'De er to parallelle mønster-værktøjer der bruger samme udvælgelses-princip, men forskellige paradigmer. Symptom-Analyse kortlægger TCM-organer, elementer og 12 klassiske mønstre. Mønstre i nervesystemet kortlægger autonome tilstande på Stephen Porges\' stige (ventral, sympatisk, dorsal) og 6 polyvagale mønstre. Vælg det spor der matcher den linse du arbejder med på den specifikke klient — eller brug dem komplementært på samme klient.'],
      ['Kan jeg dele en hjem-anvisning med min klient?', 'Ja. Fra en gemt session kan du åbne en pænt opsat hjem-anvisning og sende et link via mail, SMS eller WhatsApp — klienten ser et forhåndsvisningsbillede (yinyang eller stige). Du kan også printe som PDF, eller kopiere det faglige resumé til dit eget journalsystem.'],
      ['Hvor er mit eksporterede arkiv?', 'Filen tcm-klienter-YYYYMMDD.json gemmes i din enheds standard Download-mappe (Files-appen → Downloads på iPhone/iPad, Downloads-mappen på Mac/Windows/Android). Når du importerer, vælger du den fra samme sted.'],
      ['Kan jeg flytte mit arkiv til en anden enhed?', 'Ja. Eksportér på den ene enhed, send filen til dig selv (fx via email eller AirDrop), gem den på den anden enhed, og importér.'],
      ['Hvad gør jeg når et mønster ikke matcher noget tydeligt?', 'Det er normalt. Resultatet er en indgangsvinkel — ikke en diagnose. Brug det dominerende organ, element eller den dominerende ANS-tilstand som start, og lad samtalen og palpationen lede dig dybere. Hvis flere mønstre bobler tæt sammen uden et klart hovedbillede, kan klienten være i en blandet tilstand — eller en af de ekstraordinære meridianer kan være indgangen.'],
      ['Hvad er forskellen på live analyse og den jeg gemmer til en klient?', 'De viser samme resultat. Forskellen er at den gemte version huskes kronologisk i Mine klienter, så du over tid kan se mønster-skift og forløbet — både for TCM og polyvagal.'],
      ['Skal jeg bruge appen som behandler-værktøj eller klient-værktøj?', 'Den er bygget til behandlere. Klienten ser kun det link og den hjem-anvisning du sender — appen i øvrigt hjælper dig med at strukturere dit blik og dit forløb.']
    ],
    menuPrivacy: 'Privatliv og data',
    menuFaq: 'Spørgsmål og svar',
    clockActiveNow: 'er aktivt nu',
    ariaMenu: 'Menu',
    ariaSearch: 'Søg',
    ariaCloseSearch: 'Luk søgning',
    ariaCloseMenu: 'Luk menu',
    saTitle: 'Symptom-Analyse',
    saSubtitle: 'Resonans · Indgangsvinkel · Mønsteropdagelse',
    saIntro: 'Vælg mellem 3 og 9 af din klients symptomer nedenfor. Appen viser hvilke organsystemer der træder frem gennem materialet’s krydsreferencer.',
    saDisclaimer: 'Dette er ikke en diagnose. Resultatet er en indgangsvinkel til videre samtale og palpation — et udgangspunkt for mønsteret, ikke en konklusion.',
    saCounter: 'valgt',
    saCounterRange: '3–9',
    saReset: 'Nulstil',
    saAnalyse: 'Analysér mønster',
    saResultsHeading: 'Organ-resonans',
    saResultsLead: 'Baseret på de symptomer du har valgt, træder disse organer frem:',
    saHits: 'symptomer',
    saHitsOf: 'af',
    saPrimary: 'Primær',
    saSecondary: 'Sekundær',
    saTertiary: 'Tertiær',
    saNotesHeading: 'Særlige observationer',
    saNotesLead: 'Hvad du skal lytte og se efter bag hvert symptom du valgte:',
    saNextHeading: 'Næste skridt',
    saNextBody: 'Åbn det primære organs side og brug de 8 kortlægningstemaer til at uddybe samtalen med klienten.',
    saOpenOrgan: 'Åbn',
    saMinHint: 'Vælg mindst 3 symptomer',
    saMaxHint: 'Maksimum 9 nået',
    saPracticeCardTitle: 'Symptom-Analyse',
    saPracticeCardDesc: 'Vælg 3–9 symptomer — se hvilke organer der resonerer',
    saElementHeading: 'Element-resonans',
    saElementLead: 'Tilsammen peger de valgte symptomer mod dette element:',
    saElementOrgans: 'Organer i elementet',
    saElementOpen: 'Udforsk',
    saMeridianHeading: 'Meridian-resonans',
    saMeridianLead: 'Disse ekstraordinære meridianer aktiveres også af de valgte symptomer:',
    saCopySummary: 'Kopier resumé',
    saCopySummaryHint: 'til mine noter',
    saSaveToClientHint: 'i forløbs-arkiv',
    saClientHandoutHint: 'hjem-anvisning',
    saResultSavePrimary: 'Gem analyse',
    saResultSavePrimaryHint: 'i en klients forløbs-arkiv',
    saResultActionsNote: 'Når den er gemt, finder du den under Mine klienter i menuen — dér kan du åbne hjem-anvisningen til klienten og kopiere resuméet til dine egne noter.',
    sessionHandoutHint: 'send link via Mail, SMS, WhatsApp — eller print dokumentet med illustration',
    sessionCopySummary: 'Kopier resumé til mine noter',
    sessionCopySummaryHint: 'indsæt analysen i dit eget journalsystem eller notes-app — til behandleren, ikke klienten',
    saCopiedConfirm: 'Kopieret ✓',
    saCopyFailed: 'Kunne ikke kopiere',
    saSummaryTitle: 'Symptom-Analyse',
    saSummarySymptoms: 'Valgte symptomer',
    saSummaryOpenPrimary: 'Åbn',
    saSummaryAndUseThemes: 'og brug de 8 kortlægningstemaer.',
    saSummaryDisclaimer: '(Genereret af Mønstrene Bag — TCM-opslagsværk. Ikke en diagnose.)',
    saPatternHeading: 'Mønster-resonans',
    saPatternLead: 'Klassiske TCM-syndromer der bedst forklarer de valgte symptomer:',
    saPatternKey: 'Nøgle',
    saPatternSupporting: 'Støtte',
    saPatternMatch: 'match',
    saPatternToggleOpen: 'Se mere',
    saPatternToggleClose: 'Skjul',
    saPatternDescription: 'Beskrivelse',
    saPatternDifferential: 'Differential',
    saPatternTreatment: 'Tilgang',
    saHomePractice: 'Til klienten derhjemme',
    hpInnerImage: 'Indre billede',
    hpDiet: 'Kost',
    hpMovement: 'Bevægelse',
    hpAcupressure: 'Akupressur',
    hpAwareness: 'Opmærksomhed',
    saClientHandout: 'Til klienten',
    handoutHeading: 'Til dit hjem',
    handoutWeSawTitle: 'Det vi har set sammen i dag',
    handoutWhatYouCanDoTitle: 'Hvad du selv kan gøre',
    handoutFooter: 'Det her er ikke ekstra arbejde. Det er måder at lytte til kroppen på i hverdagen. Vælg det der taler til dig — eller bare ét af dem til at starte med.\n\nHvis du vil dele det med mig næste gang, kan du notere hvad du har prøvet, og hvad du har mærket.',
    followupTitle: 'Opfølgning',
    followupLead: 'Hvad har klienten prøvet, og hvad gjorde det? Opdater frit mellem sessioner.',
    followupTriedQ: 'Prøvet?',
    followupHelpedQ: 'Hjalp?',
    followupTriedNo: 'Nej',
    followupTriedSome: 'Lidt',
    followupTriedYes: 'Ja',
    followupHelpedNo: 'Ikke',
    followupHelpedSome: 'Lidt',
    followupHelpedClearly: 'Tydeligt',
    followupNotesLabel: 'Noter fra opfølgningen',
    followupNotesPlaceholder: 'Hvad overraskede? Hvad trådte frem?',
    followupResponded: 'Hvad har responderet bedst i forløbet',
    followupNoData: 'Ingen opfølgnings-data endnu',
    saPatternMatchedSymptoms: 'Symptomer i din udvælgelse der matcher',
    saPatternEmpty: 'Ingen af de 12 mønstre matcher klart de valgte symptomer — overvej at justere udvælgelsen eller brug organ-resonansen som primær vejledning.',
    menuClients: 'Mine klienter',
    clientsTitle: 'Mine klienter',
    clientsSubtitle: 'Lokale forløbs-skitser. Forlader aldrig din enhed.',
    clientsEmpty: 'Ingen gemte klienter endnu. Gem en analyse for at begynde at følge en klient over tid.',
    clientsDisclaimer: 'Dette er ikke en journal — det er din egen forløbs-skitse. Brug din kliniks journalsystem til formel dokumentation.',
    clientsSessionsLabel: 'sessioner',
    clientsSessionLabel: 'session',
    clientsLastSession: 'Seneste',
    saSaveToClient: 'Gem til klient',
    saveDialogTitle: 'Gem analyse',
    saveDialogExisting: 'Eksisterende klient',
    saveDialogNew: 'Ny klient',
    saveDialogClientId: 'Klient-kode',
    saveDialogClientIdHint: 'Brug en kode, ikke et navn (fx K01, JN-1234)',
    saveDialogNotes: 'Notater (valgfri)',
    saveDialogNotesPlaceholder: 'Notater til denne session...',
    saveDialogSave: 'Gem',
    saveDialogCancel: 'Annuller',
    saveDialogSaved: 'Gemt',
    saveDialogPickClient: 'Vælg klient',
    clientDetailDeleteClient: 'Slet klient',
    clientDetailDeleteSession: 'Slet session',
    clientDetailConfirmDeleteClient: 'Slet denne klient og alle sessioner? Dette kan ikke fortrydes.',
    clientDetailConfirmDeleteSession: 'Slet denne session? Dette kan ikke fortrydes.',
    clientDetailEmpty: 'Ingen sessioner gemt.',
    clientDetailSessionsTitle: 'Sessioner',
    sessionPrimary: 'Primært',
    sessionPattern: 'Primært mønster',
    sessionSymptoms: 'Symptomer',
    sessionNotes: 'Notater',
    sessionNoPattern: 'Intet klart mønster',
    exportArchive: 'Gem en kopi',
    importArchive: 'Hent en kopi tilbage',
    importDone: 'Importeret',
    importDoneSuffix: 'klient(er)',
    importError: 'Kunne ikke læse filen — er det et gyldigt klient-arkiv?',
    clientsActionsHint: 'Eksport gemmer en JSON-fil i din enheds Download-mappe (Files-appen → Downloads på iPhone/iPad, Downloads-mappen på Mac/Windows). Import åbner samme sted så du kan vælge en tidligere fil.',
    progressTitle: 'Forløb',
    progressLead: 'Sådan har det primære mønster bevæget sig på tværs af sessioner',
    progressNoPattern: 'Intet klart mønster',
    progressDiffTitle: 'Siden sidst',
    progressDiffNew: 'Kommet til',
    progressDiffGone: 'Sluppet',
    progressDiffStable: 'Ingen ændring i valgte symptomer',
    progressElementsTitle: 'Element-balance over tid'
  }
};

let currentLanguage = 'da';

function t(key) {
  return translations[currentLanguage]?.[key] ?? translations.en[key] ?? key;
}

function getLanguage() {
  return currentLanguage;
}

function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'da') return;
  currentLanguage = lang;
}

// ============================================
// State
// ============================================
let currentScreen = 'home';
let previousScreen = 'home'; // Track where we came from for back navigation

// Language-switchable data references
let langData = getLangData(getLanguage());
let { organs, extraordinaryMeridians, organClock, fiveElements, tcmFoundation, sectionIntros, practiceGuide, educationOverview, organOverviews, meridianOverviews, symptomReference, patternLibrary, conversationStructure } = langData;

// ============================================
// Theme Toggle
// ============================================
// Lys er default. Hvis kursisten har valgt mørk tidligere, sæt attributten.
function initTheme() {
  const saved = localStorage.getItem('lone-theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  updateThemeIcon();
}

function toggleTheme() {
  document.documentElement.setAttribute('data-theme-transitioning', '');
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('lone-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('lone-theme', 'dark');
  }
  updateThemeIcon();
  renderOrganClock();
  setTimeout(() => document.documentElement.removeAttribute('data-theme-transitioning'), 350);
}

function updateThemeIcon() {
  const label = document.getElementById('theme-label');
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (label) label.textContent = isDark ? t('themeLightMode') : t('themeDarkMode');
  // I mørk: vis sol (skift til lys). I lys: vis måne (skift til mørk).
  const newInner = isDark
    ? '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'
    : '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>';
  document.querySelectorAll('#theme-toggle svg, [data-forward="theme-toggle"] svg').forEach(svg => {
    svg.innerHTML = newInner;
  });
}

function setupThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', toggleTheme);
}

function setupHomeTopForwarders() {
  document.querySelectorAll('[data-forward]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(btn.dataset.forward);
      if (target) target.click();
    });
  });
}

// ============================================
// Language Toggle
// ============================================
function updateLangLabel() {
  const label = document.getElementById('lang-label');
  if (label) label.textContent = getLanguage() === 'en' ? t('langDanish') : t('langEnglish');
}

function switchLanguage() {
  const newLang = getLanguage() === 'en' ? 'da' : 'en';
  setLanguage(newLang);

  // Swap data references
  langData = getLangData(newLang);
  ({ organs, extraordinaryMeridians, organClock, fiveElements, tcmFoundation, sectionIntros, practiceGuide, educationOverview, organOverviews, meridianOverviews, symptomReference, patternLibrary, conversationStructure } = langData);

  // Update all UI text
  updateUILanguage();

  // Re-render all data-driven content
  renderSectionIntros();
  renderPracticeGrid();
  renderOrganGrid();
  renderMeridianGrid();
  renderOrganClock();
  renderElements();
  renderFoundation();
  renderOverviewOrganGrid();
  renderOverviewMeridianGrid();
  renderOverviewSymptoms();
  renderOverviewConversation();
  renderSymptomAnalysis();

  // Update labels
  updateLangLabel();
  updateThemeIcon();
}

function updateUILanguage() {
  // Page title and html lang
  document.title = t('pageTitle');
  document.documentElement.lang = getLanguage();

  // Home screen
  const brandTitle = document.querySelector('.home-brand-title');
  const brandSubtitle = document.querySelector('.home-brand-subtitle');
  const homeIntro = document.querySelector('.home-intro');
  if (brandTitle) brandTitle.textContent = t('brandTitle');
  if (brandSubtitle) brandSubtitle.textContent = t('brandSubtitle');
  if (homeIntro) homeIntro.textContent = t('homeIntro');

  // Hub cards
  const hubCards = document.querySelectorAll('.hub-card');
  const hubKeys = ['practice', 'organs', 'elements', 'meridians', 'overviews'];
  const hubTitleKeys = ['hubPractice', 'hubOrgans', 'hubElements', 'hubMeridians', 'hubOverviews'];
  const hubDescKeys = ['hubPracticeDesc', 'hubOrgansDesc', 'hubElementsDesc', 'hubMeridiansDesc', 'hubOverviewsDesc'];
  hubCards.forEach(card => {
    const hub = card.dataset.hub;
    const idx = hubKeys.indexOf(hub);
    if (idx >= 0) {
      const title = card.querySelector('.hub-card-title');
      const desc = card.querySelector('.hub-card-desc');
      if (title) title.textContent = t(hubTitleKeys[idx]);
      if (desc) desc.textContent = t(hubDescKeys[idx]);
    }
  });

  // Section screen headers
  const sectionMappings = [
    { screen: 'screen-section-practice', title: 'sectionPracticeTitle', subtitle: 'sectionPracticeSubtitle' },
    { screen: 'screen-section-organs', title: 'sectionOrgansTitle', subtitle: 'sectionOrgansSubtitle' },
    { screen: 'screen-section-elements', title: 'sectionElementsTitle', subtitle: 'sectionElementsSubtitle' },
    { screen: 'screen-section-meridians', title: 'sectionMeridiansTitle', subtitle: 'sectionMeridiansSubtitle' },
    { screen: 'screen-section-overviews', title: 'sectionOverviewsTitle', subtitle: 'sectionOverviewsSubtitle' }
  ];
  sectionMappings.forEach(({ screen, title, subtitle }) => {
    const el = document.getElementById(screen);
    if (!el) return;
    const h1 = el.querySelector('.section-screen-title-area h1');
    const sub = el.querySelector('.section-screen-subtitle');
    if (h1) h1.textContent = t(title);
    if (sub) sub.textContent = t(subtitle);
  });

  // Back buttons (all say "Home" or "Back")
  document.querySelectorAll('.back-btn[data-back="home"] span').forEach(s => s.textContent = t('backHome'));

  // Section dividers
  const dividers = document.querySelectorAll('.section-divider span');
  dividers.forEach(d => {
    if (d.textContent.match(/Organ Clock|Organuret/i)) d.textContent = t('btnOrganClock');
    if (d.textContent.match(/Core Principles|Grundprincipper/i)) d.textContent = t('btnCorePrinciples');
  });

  // Overview tabs
  const ovTabMap = { organs: 'tabOrgans', patterns: 'tabPatterns', meridians: 'tabMeridians', symptoms: 'tabSymptoms', conversation: 'tabDialogue' };
  document.querySelectorAll('.overview-tab[data-ov-tab]').forEach(tab => {
    const key = ovTabMap[tab.dataset.ovTab];
    if (key) tab.textContent = t(key);
  });

  // Organ detail tabs
  document.querySelectorAll('#screen-organ .tab[data-tab]').forEach(tab => {
    if (tab.dataset.tab === 'overview') tab.textContent = t('tabOverview');
    if (tab.dataset.tab === 'themes') tab.textContent = t('tab8Themes');
    if (tab.dataset.tab === 'keypoints') tab.textContent = t('tabKeyPoints');
  });

  // Element detail tabs
  document.querySelectorAll('#screen-element .tab[data-tab]').forEach(tab => {
    if (tab.dataset.tab === 'el-overview') tab.textContent = t('tabElOverview');
    if (tab.dataset.tab === 'el-correspondences') tab.textContent = t('tabCorrespondences');
    if (tab.dataset.tab === 'el-cycles') tab.textContent = t('tabCycles');
    if (tab.dataset.tab === 'el-seasonal') tab.textContent = t('tabSeasonal');
  });

  // Meridian detail tabs
  document.querySelectorAll('#screen-meridian .tab[data-tab]').forEach(tab => {
    if (tab.dataset.tab === 'm-overview') tab.textContent = t('tabMOverview');
    if (tab.dataset.tab === 'm-pathway') tab.textContent = t('tabPathway');
    if (tab.dataset.tab === 'm-keypoints') tab.textContent = t('tabMKeyPoints');
    if (tab.dataset.tab === 'm-themes') tab.textContent = t('tabMThemes');
  });

  // Bottom navigation
  document.querySelectorAll('.bottom-nav-item').forEach(btn => {
    const nav = btn.dataset.nav;
    const span = btn.querySelector('span');
    if (!span) return;
    const navMap = { home: 'navHome', practice: 'navPractice', organs: 'navOrgans', elements: 'navElements', meridians: 'navMeridians' };
    if (navMap[nav]) span.textContent = t(navMap[nav]);
  });

  // Search
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.placeholder = t('searchPlaceholder');
  const searchPlaceholder = document.querySelector('.search-placeholder');
  if (searchPlaceholder) searchPlaceholder.textContent = t('searchTyping');

  // Hamburger menu
  const menuBrand = document.querySelector('.hamburger-brand');
  if (menuBrand) menuBrand.textContent = t('brandTitle');

  const menuSectionLabels = document.querySelectorAll('.hamburger-section-label');
  menuSectionLabels.forEach(label => {
    if (label.id === 'menu-label-sections') label.textContent = t('menuSections');
    if (label.id === 'menu-label-info') label.textContent = t('menuInfo');
    if (label.id === 'menu-label-appearance') label.textContent = t('menuAppearance');
    if (label.id === 'menu-label-language') label.textContent = t('menuLanguage');
  });

  // Hamburger menu links
  document.querySelectorAll('.hamburger-link[data-nav]').forEach(link => {
    const nav = link.dataset.nav;
    const text = link.childNodes[link.childNodes.length - 1];
    if (!text || text.nodeType !== 3) return;
    const menuMap = { home: 'menuHome', practice: 'menuPractice', organs: 'menuOrgans', elements: 'menuElements', meridians: 'menuMeridians', overviews: 'menuOverviews', clients: 'menuClients' };
    if (menuMap[nav]) text.textContent = '\n          ' + t(menuMap[nav]) + '\n        ';
  });

  document.querySelectorAll('.hamburger-link[data-info]').forEach(link => {
    const info = link.dataset.info;
    const text = link.childNodes[link.childNodes.length - 1];
    if (!text || text.nodeType !== 3) return;
    if (info === 'about') text.textContent = '\n          ' + t('menuAbout') + '\n        ';
    if (info === 'howto') text.textContent = '\n          ' + t('menuHowTo') + '\n        ';
    if (info === 'privacy') text.textContent = '\n          ' + t('menuPrivacy') + '\n        ';
    if (info === 'faq') text.textContent = '\n          ' + t('menuFaq') + '\n        ';
  });

  // Aria labels
  const hamburgerBtn = document.getElementById('hamburger-btn');
  if (hamburgerBtn) hamburgerBtn.setAttribute('aria-label', t('ariaMenu'));
  const searchBtn = document.getElementById('search-btn');
  if (searchBtn) searchBtn.setAttribute('aria-label', t('ariaSearch'));
  const searchClose = document.getElementById('search-close');
  if (searchClose) searchClose.setAttribute('aria-label', t('ariaCloseSearch'));
  const hamburgerClose = document.getElementById('hamburger-close');
  if (hamburgerClose) hamburgerClose.setAttribute('aria-label', t('ariaCloseMenu'));
}

function setupLanguageToggle() {
  // Kursist-version: kun dansk, ingen sprogskift
}

// ============================================
// Navigation
// ============================================
function scrollWindowToTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

// iOS Safari starter nogle gange ikke CSS-animationer i standalone
// (Add to Home Screen) mode. Denne tvinger animation restart ved at
// toggle parent-klassen — browser rebuilds animation timeline.
function kickAnimations(root) {
  const scope = root || document;
  scope.querySelectorAll('.hub-anim, .hub-drift, .hub-flow, .hub-snake, .ray-sway, .hub-orbit').forEach(el => {
    const prev = el.style.animation;
    el.style.animation = 'none';
    // læs en layout-property → tvinger reflow
    void el.offsetWidth;
    el.style.animation = prev;
  });
}

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById(`screen-${screenId}`);
  screen.classList.add('active');
  previousScreen = currentScreen;
  currentScreen = screenId;
  document.body.classList.toggle('is-screen-home', screenId === 'home');
  scrollWindowToTop();
  // Gentag efter næste layout-frame så scroll også virker når ny
  // skærm har andet indhold/højde end den vi kom fra.
  requestAnimationFrame(() => {
    scrollWindowToTop();
    kickAnimations(screen);
  });
}

// Map section screen IDs to bottom nav IDs
const sectionToNav = {
  'home': 'home',
  'section-practice': 'practice',
  'section-organs': 'organs',
  'section-elements': 'elements',
  'section-meridians': 'meridians',
  'section-overviews': 'home'
};

// ============================================
// Render — Organ Grid
// ============================================
function renderOrganGrid() {
  const grid = document.getElementById('organ-grid');
  grid.innerHTML = organs.map(organ => `
    <div class="organ-card" data-organ="${organ.id}" style="--card-accent: ${organ.color}">
      <span class="organ-card-icon">${organ.icon}</span>
      <div class="organ-card-name">${organ.name}</div>
      <div class="organ-card-meta">${organ.element} · ${organ.yinYang}</div>
      <div class="organ-card-time">${organ.time}</div>
    </div>
  `).join('');

  grid.querySelectorAll('.organ-card').forEach(card => {
    card.addEventListener('click', () => {
      const organ = organs.find(o => o.id === card.dataset.organ);
      if (organ) showOrganDetail(organ);
    });
  });
}

// ============================================
// Render — Meridian Grid
// ============================================
function renderMeridianGrid() {
  const grid = document.getElementById('meridian-grid');
  grid.innerHTML = extraordinaryMeridians.map(m => `
    <div class="meridian-card" data-meridian="${m.id}">
      <span class="meridian-card-icon">${m.icon}</span>
      <div class="meridian-card-name">${m.name}</div>
      <div class="meridian-card-aka">${m.nickname}</div>
    </div>
  `).join('');

  grid.querySelectorAll('.meridian-card').forEach(card => {
    card.addEventListener('click', () => {
      const m = extraordinaryMeridians.find(x => x.id === card.dataset.meridian);
      if (m) showMeridianDetail(m);
    });
  });
}

// ============================================
// Render — Organ Clock
// ============================================
function getActiveOrganIndex() {
  const now = new Date();
  const hour = now.getHours();
  return organClock.findIndex(item => {
    if (item.startHour < item.endHour) {
      return hour >= item.startHour && hour < item.endHour;
    }
    return hour >= item.startHour || hour < item.endHour;
  });
}

function renderOrganClock() {
  const container = document.getElementById('organ-clock');
  const size = 340;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size / 2 - 8;
  const innerR = outerR * 0.42;
  const textR = (outerR + innerR) / 2;
  const timeR = outerR - 12;

  const elementColors = {
    'Metal': '#a8c4d6', 'Earth': '#deb87a', 'Fire': '#e88585', 'Water': '#7ba4da', 'Wood': '#5cc98e',
    'Træ': '#5cc98e', 'Ild': '#e88585', 'Jord': '#deb87a', 'Vand': '#7ba4da'
  };

  const activeIndex = getActiveOrganIndex();

  let segments = '';
  organClock.forEach((item, i) => {
    const startAngle = (i * 30 - 90) * Math.PI / 180;
    const endAngle = ((i + 1) * 30 - 90) * Math.PI / 180;
    const midAngle = ((i + 0.5) * 30 - 90) * Math.PI / 180;

    const x1 = cx + outerR * Math.cos(startAngle);
    const y1 = cy + outerR * Math.sin(startAngle);
    const x2 = cx + outerR * Math.cos(endAngle);
    const y2 = cy + outerR * Math.sin(endAngle);
    const x3 = cx + innerR * Math.cos(endAngle);
    const y3 = cy + innerR * Math.sin(endAngle);
    const x4 = cx + innerR * Math.cos(startAngle);
    const y4 = cy + innerR * Math.sin(startAngle);

    const textX = cx + textR * Math.cos(midAngle);
    const textY = cy + textR * Math.sin(midAngle);
    const timeX = cx + timeR * Math.cos(midAngle);
    const timeY = cy + timeR * Math.sin(midAngle);

    const color = elementColors[item.element] || '#666';
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const isActive = i === activeIndex;
    const baseFill = isLight ? 0.15 : 0.2;
    const fillOpacity = isActive ? '0.55' : String(baseFill);
    const baseStroke = isLight ? 0.6 : 0.4;
    const strokeOpacity = isActive ? '0.9' : String(baseStroke);
    const strokeWidth = isActive ? '2' : '1';
    const textWeight = isActive ? 'bold' : 'normal';

    segments += `
      <g class="clock-segment${isActive ? ' clock-segment-active' : ''}" data-organ-name="${item.organ}">
        <path d="M${x1},${y1} A${outerR},${outerR} 0 0 1 ${x2},${y2} L${x3},${y3} A${innerR},${innerR} 0 0 0 ${x4},${y4} Z"
              fill="${color}" fill-opacity="${fillOpacity}" stroke="${color}" stroke-opacity="${strokeOpacity}" stroke-width="${strokeWidth}"/>
        <text x="${textX}" y="${textY}" text-anchor="middle" dominant-baseline="central" font-size="10" font-weight="${textWeight}">${item.organ}</text>
        <text x="${timeX}" y="${timeY}" text-anchor="middle" dominant-baseline="central" class="clock-time">${item.time}</text>
      </g>
    `;
  });

  const now = new Date();
  const timeStr = now.toLocaleTimeString(getLanguage() === 'da' ? 'da-DK' : 'en-US', { hour: '2-digit', minute: '2-digit' });
  const activeOrgan = activeIndex >= 0 ? organClock[activeIndex] : null;

  container.innerHTML = `
    <svg class="clock-svg" viewBox="0 0 ${size} ${size}">
      ${segments}
      <circle cx="${cx}" cy="${cy}" r="${innerR}" fill="var(--bg-primary)" stroke="var(--border-light)" stroke-width="0.5"/>
      <text x="${cx}" y="${cy - 14}" class="clock-center-text" font-size="11">${timeStr}</text>
      <text x="${cx}" y="${cy + 2}" class="clock-center-text clock-center-active" font-size="11">${activeOrgan ? activeOrgan.organ : ''}</text>
      <text x="${cx}" y="${cy + 16}" class="clock-center-text" font-size="8" fill="var(--text-muted)">${t('clockActiveNow')}</text>
    </svg>
  `;

  if (activeOrgan) {
    let wisdomBox = container.querySelector('.clock-wisdom');
    if (!wisdomBox) {
      wisdomBox = document.createElement('div');
      wisdomBox.className = 'clock-wisdom';
      container.after(wisdomBox);
    }
    wisdomBox.innerHTML = `
      <div class="clock-wisdom-label">${activeOrgan.organ} · ${activeOrgan.time}</div>
      <p class="clock-wisdom-text">${activeOrgan.wisdom}</p>
    `;
  }

  container.querySelectorAll('.clock-segment').forEach(seg => {
    seg.addEventListener('click', () => {
      const name = seg.dataset.organName;
      const organ = organs.find(o => o.name === name);
      if (organ) showOrganDetail(organ);
    });
  });
}

// ============================================
// Render — Five Elements
// ============================================
function renderElements() {
  const grid = document.getElementById('elements-grid');
  grid.innerHTML = fiveElements.map(el => `
    <div class="element-card" data-element="${el.id}">
      <div class="element-card-header">
        <span class="element-card-icon">${el.icon}</span>
        <div class="element-card-info">
          <div class="element-card-name">${el.name} <span class="element-card-chinese">${el.chineseName}</span></div>
          <div class="element-card-organs">${el.organs.join(' · ')}</div>
        </div>
        <span class="element-card-season">${el.season}</span>
      </div>
      <div class="element-card-bar" style="background: ${el.color}"></div>
    </div>
  `).join('');

  grid.querySelectorAll('.element-card').forEach(card => {
    card.addEventListener('click', () => {
      const el = fiveElements.find(e => e.id === card.dataset.element);
      if (el) showElementDetail(el);
    });
  });
}

// ============================================
// Render — TCM Foundation
// ============================================
function renderFoundation() {
  const grid = document.getElementById('foundation-grid');
  const items = [
    { key: 'yinYang', icon: '☯', title: tcmFoundation.yinYang.title, desc: tcmFoundation.yinYang.subtitle },
    { key: 'elementCycles', icon: '◎', title: tcmFoundation.elementCycles.title, desc: tcmFoundation.elementCycles.subtitle },
    { key: 'organPartnership', icon: '⇌', title: tcmFoundation.organPartnership.title, desc: tcmFoundation.organPartnership.subtitle }
  ];

  grid.innerHTML = items.map(item => `
    <div class="foundation-card" data-key="${item.key}">
      <span class="foundation-card-icon">${item.icon}</span>
      <div class="foundation-card-info">
        <div class="foundation-card-title">${item.title}</div>
        <div class="foundation-card-desc">${item.desc}</div>
      </div>
      <svg class="foundation-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </div>
  `).join('');

  grid.querySelectorAll('.foundation-card').forEach(card => {
    card.addEventListener('click', () => {
      showFoundationDetail(card.dataset.key);
    });
  });
}

// ============================================
// Element Detail
// ============================================
function showElementDetail(el) {
  document.getElementById('element-detail-icon').textContent = el.icon;
  document.getElementById('element-detail-name').textContent = el.name;
  document.getElementById('element-detail-chinese').textContent = el.chineseName;

  document.getElementById('element-detail-meta').innerHTML = `
    <span class="meta-tag"><span class="dot" style="background: ${el.color}"></span> ${el.season}</span>
    <span class="meta-tag">${el.emotion}</span>
    <span class="meta-tag">${el.direction}</span>
    <span class="meta-tag">${el.climate}</span>
  `;

  document.getElementById('element-description').innerHTML =
    el.description.map(p => `<p>${p}</p>`).join('');

  document.getElementById('element-organs-nav').innerHTML = `
    <div class="element-organs-section">
      <h3 class="element-organs-title">${el.name} ${t('elementOrgansTitle')}</h3>
      ${el.organs.map(organName => {
        const organ = organs.find(o => o.name === organName);
        if (!organ) return '';
        return `
          <div class="element-organ-link" data-organ-id="${organ.id}">
            <span class="element-organ-icon">${organ.icon}</span>
            <div class="element-organ-info">
              <div class="element-organ-name">${organ.name}</div>
              <div class="element-organ-nickname">"${organ.nickname}" · ${organ.yinYang}</div>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </div>
        `;
      }).join('')}
    </div>
  `;

  document.querySelectorAll('#element-organs-nav .element-organ-link').forEach(link => {
    link.addEventListener('click', () => {
      const organ = organs.find(o => o.id === link.dataset.organId);
      if (organ) showOrganDetail(organ);
    });
  });

  document.getElementById('element-correspondences').innerHTML =
    el.correspondences.map(c => `
      <div class="correspondence-item">
        <div class="correspondence-label">${c.label}</div>
        <div class="correspondence-value">${c.value}</div>
      </div>
    `).join('');

  document.getElementById('element-cycles').innerHTML = `
    <div class="cycle-section">
      <h3 class="cycle-title">${t('generatingCycle')}</h3>
      <div class="cycle-diagram">
        ${renderMiniCycle(el, 'sheng')}
      </div>
      <div class="cycle-card">
        <div class="cycle-card-label">${t('nourishedBy')}</div>
        <p class="cycle-card-text">${el.cycles.generating}</p>
      </div>
      <div class="cycle-card">
        <div class="cycle-card-label">${t('nourishes')}</div>
        <p class="cycle-card-text">${el.cycles.generated}</p>
      </div>
    </div>
    <div class="cycle-section">
      <h3 class="cycle-title">${t('controllingCycle')}</h3>
      <div class="cycle-card">
        <div class="cycle-card-label">${t('controls')}</div>
        <p class="cycle-card-text">${el.cycles.controlling}</p>
      </div>
      <div class="cycle-card">
        <div class="cycle-card-label">${t('controlledBy')}</div>
        <p class="cycle-card-text">${el.cycles.controlledBy}</p>
      </div>
    </div>
  `;

  document.getElementById('element-seasonal').innerHTML = `
    <div class="seasonal-header">
      <div class="seasonal-season">${el.season}</div>
      <div class="seasonal-subtitle">${t('seasonalGuidance')} ${el.name} ${t('seasonalGuidanceSuffix')}</div>
    </div>
    ${el.seasonalWisdom.map((tip, i) => `
      <div class="seasonal-tip">
        <span class="seasonal-tip-number">${i + 1}</span>
        <p class="seasonal-tip-text">${tip}</p>
      </div>
    `).join('')}
  `;

  resetTabs('screen-element');
  showScreen('element');
}

function renderMiniCycle(currentEl, type) {
  const elNames = [t('elWood'), t('elFire'), t('elEarth'), t('elMetal'), t('elWater')];
  const colors = ['#5cc98e', '#e88585', '#deb87a', '#a8c4d6', '#7ba4da'];

  return `<div class="mini-cycle">${elNames.map((name, i) => {
    const isCurrent = name === currentEl.name;
    const color = colors[i];
    return `
      <span class="mini-cycle-node${isCurrent ? ' mini-cycle-active' : ''}" style="--node-color: ${color}">
        ${name}
      </span>
      ${i < elNames.length - 1 ? '<span class="mini-cycle-arrow">→</span>' : '<span class="mini-cycle-arrow">→</span>'}
    `;
  }).join('')}</div>`;
}

// ============================================
// Foundation Detail
// ============================================
function showFoundationDetail(key) {
  const section = tcmFoundation[key];
  document.getElementById('foundation-detail-title').textContent = section.title;
  document.getElementById('foundation-detail-subtitle').textContent = section.subtitle;

  let bodyHTML = section.description.map(p => `<p>${p}</p>`).join('');

  if (key === 'yinYang') {
    bodyHTML += `
      <div class="yin-yang-pairs">
        <h3 class="pairs-title">${t('yinYangPairs')}</h3>
        <div class="pairs-grid">
          ${section.pairs.map(p => `
            <div class="pair-row">
              <span class="pair-yin">${p.yin}</span>
              <span class="pair-divider">☯</span>
              <span class="pair-yang">${p.yang}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (key === 'elementCycles') {
    const colors = { 'Wood': '#5cc98e', 'Fire': '#e88585', 'Earth': '#deb87a', 'Metal': '#a8c4d6', 'Water': '#7ba4da', 'Træ': '#5cc98e', 'Ild': '#e88585', 'Jord': '#deb87a', 'Vand': '#7ba4da' };
    bodyHTML += `
      <div class="cycle-visual">
        <h3 class="pairs-title">${t('generatingCycle')}</h3>
        <div class="cycle-flow">
          ${section.shengCycle.map((name, i) => `
            <span class="cycle-node" style="--node-color: ${colors[name] || '#999'}">${name}</span>
            ${i < section.shengCycle.length - 1 ? `<span class="cycle-arrow">${t('nourishesArrow')}</span>` : `<span class="cycle-arrow">${t('nourishesArrow')}</span>`}
          `).join('')}
        </div>
        <h3 class="pairs-title" style="margin-top: 24px;">${t('controllingCycle')}</h3>
        <div class="cycle-flow">
          ${section.keCycle.map((name, i) => `
            <span class="cycle-node" style="--node-color: ${colors[name] || '#999'}">${name}</span>
            ${i < section.keCycle.length - 1 ? `<span class="cycle-arrow">${t('controlsArrow')}</span>` : `<span class="cycle-arrow">${t('controlsArrow')}</span>`}
          `).join('')}
        </div>
      </div>
    `;
  }

  if (key === 'organPartnership') {
    const elementColors = { 'Wood': '#5cc98e', 'Fire': '#e88585', 'Earth': '#deb87a', 'Metal': '#a8c4d6', 'Water': '#7ba4da', 'Træ': '#5cc98e', 'Ild': '#e88585', 'Jord': '#deb87a', 'Vand': '#7ba4da' };
    bodyHTML += `
      <div class="partnerships">
        ${section.pairs.map(p => `
          <div class="partnership-card" style="--pair-color: ${elementColors[p.element]}">
            <div class="partnership-element">${p.element}</div>
            <div class="partnership-organs">
              <span class="partnership-yin">${p.yin}</span>
              <span class="partnership-divider">⟷</span>
              <span class="partnership-yang">${p.yang}</span>
            </div>
            <div class="partnership-theme">${p.theme}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  document.getElementById('foundation-body').innerHTML = `<div class="description-text">${bodyHTML}</div>`;
  showScreen('foundation');
}

// ============================================
// Organ Detail
// ============================================
function showOrganDetail(organ) {
  document.getElementById('organ-detail-icon').textContent = organ.icon;
  document.getElementById('organ-detail-name').textContent = organ.name;
  document.getElementById('organ-detail-nickname').textContent = `"${organ.nickname}"`;

  document.getElementById('organ-detail-meta').innerHTML = `
    <span class="meta-tag"><span class="dot" style="background: ${organ.color}"></span> ${organ.element}</span>
    <span class="meta-tag">${organ.yinYang}</span>
    <span class="meta-tag">Partner: ${organ.partner}</span>
    <span class="meta-tag">${organ.time}</span>
  `;

  document.getElementById('organ-description').innerHTML =
    organ.description.map(p => `<p>${p}</p>`).join('');

  document.getElementById('organ-themes').innerHTML =
    organ.themes.map((theme, i) => `
      <div class="theme-item">
        <div class="theme-header">
          <span class="theme-number">${i + 1}</span>
          <span class="theme-title">${theme.title}</span>
          <svg class="theme-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
        <div class="theme-body">
          <div class="theme-questions">
            ${theme.questions.map(q => `<div class="question">${q}</div>`).join('')}
          </div>
        </div>
      </div>
    `).join('');

  if (organ.keyPoints) {
    document.getElementById('organ-keypoints').innerHTML =
      organ.keyPoints.map(kp => `
        <div class="keypoint">
          <div class="keypoint-title">${kp.title}</div>
          <div class="keypoint-text">${kp.text}</div>
        </div>
      `).join('');
  }

  resetTabs('screen-organ');
  showScreen('organ');
  setupThemeAccordion('organ-themes');
}

// ============================================
// Meridian Detail
// ============================================
function showMeridianDetail(meridian) {
  document.getElementById('meridian-detail-icon').textContent = meridian.icon;
  document.getElementById('meridian-detail-name').textContent = meridian.name;
  document.getElementById('meridian-detail-nickname').textContent = `"${meridian.nickname}"`;

  document.getElementById('meridian-detail-meta').innerHTML = `
    <div class="meta-points">
      <span class="meta-point"><strong>${t('openingPoint')}</strong> ${meridian.openingPoint}</span>
      <span class="meta-point"><strong>${t('coupledPoint')}</strong> ${meridian.coupledPoint}</span>
    </div>
    ${meridian.level ? `<div class="meridian-level">${meridian.level}</div>` : ''}
  `;

  document.getElementById('meridian-description').innerHTML =
    meridian.description.map(p => `<p>${p}</p>`).join('');

  let connectionsHTML = '';
  if (meridian.partnerMeridian || meridian.relatedOrgans) {
    connectionsHTML += '<div class="meridian-connections-section">';

    if (meridian.partnerMeridian) {
      const partner = extraordinaryMeridians.find(m => m.name === meridian.partnerMeridian);
      if (partner) {
        connectionsHTML += `
          <div class="connection-block">
            <h3 class="connection-title">${t('pairedWith')}</h3>
            <div class="element-organ-link" data-partner-id="${partner.id}">
              <span class="element-organ-icon">${partner.icon}</span>
              <div class="element-organ-info">
                <div class="element-organ-name">${partner.name}</div>
                <div class="element-organ-nickname">"${partner.nickname}" · ${partner.aka}</div>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
          </div>
        `;
      }
    }

    if (meridian.relatedOrgans) {
      connectionsHTML += `
        <div class="connection-block">
          <h3 class="connection-title">${t('relatedOrgans')}</h3>
          ${meridian.relatedOrgans.map(organName => {
            const organ = organs.find(o => o.name === organName);
            if (!organ) return '';
            return `
              <div class="element-organ-link" data-organ-id="${organ.id}">
                <span class="element-organ-icon">${organ.icon}</span>
                <div class="element-organ-info">
                  <div class="element-organ-name">${organ.name}</div>
                  <div class="element-organ-nickname">"${organ.nickname}" · ${organ.element}</div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    connectionsHTML += '</div>';
  }
  document.getElementById('meridian-connections').innerHTML = connectionsHTML;

  document.querySelectorAll('#meridian-connections .element-organ-link[data-organ-id]').forEach(link => {
    link.addEventListener('click', () => {
      const organ = organs.find(o => o.id === link.dataset.organId);
      if (organ) showOrganDetail(organ);
    });
  });
  document.querySelectorAll('#meridian-connections .element-organ-link[data-partner-id]').forEach(link => {
    link.addEventListener('click', () => {
      const m = extraordinaryMeridians.find(x => x.id === link.dataset.partnerId);
      if (m) showMeridianDetail(m);
    });
  });

  if (meridian.pathway) {
    document.getElementById('meridian-pathway').innerHTML = `
      <div class="pathway-section">
        <div class="pathway-subtitle">${meridian.aka}</div>
        <div class="pathway-steps">
          ${meridian.pathway.map((step, i) => `
            <div class="pathway-step">
              <div class="pathway-step-marker">
                <span class="pathway-dot"></span>
                ${i < meridian.pathway.length - 1 ? '<span class="pathway-line"></span>' : ''}
              </div>
              <p class="pathway-step-text">${step}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (meridian.keyPoints) {
    document.getElementById('meridian-keypoints').innerHTML =
      meridian.keyPoints.map(kp => `
        <div class="keypoint">
          <div class="keypoint-title">${kp.title}</div>
          <div class="keypoint-text">${kp.text}</div>
        </div>
      `).join('');
  }

  document.getElementById('meridian-themes').innerHTML =
    meridian.themes.map((theme, i) => `
      <div class="theme-item">
        <div class="theme-header">
          <span class="theme-number">${i + 1}</span>
          <span class="theme-title">${theme.title}</span>
          <svg class="theme-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
        <div class="theme-body">
          <div class="theme-questions">
            ${theme.questions.map(q => `<div class="question">${q}</div>`).join('')}
          </div>
        </div>
      </div>
    `).join('');

  resetTabs('screen-meridian');
  showScreen('meridian');
  setupThemeAccordion('meridian-themes');
}

// ============================================
// Tabs & Accordion
// ============================================
function resetTabs(screenId) {
  const screen = document.getElementById(screenId);
  screen.querySelectorAll('.tab').forEach((t, i) => {
    t.classList.toggle('active', i === 0);
  });
  screen.querySelectorAll('.tab-content').forEach((tc, i) => {
    tc.classList.toggle('active', i === 0);
  });
}

function setupTabs() {
  document.querySelectorAll('.detail-tabs').forEach(tabBar => {
    tabBar.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const tabId = tab.dataset.tab;
        const screen = tab.closest('.screen');

        screen.querySelectorAll('.detail-tabs .tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        screen.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        document.getElementById(`tab-${tabId}`).classList.add('active');
      });
    });
  });
}

function setupThemeAccordion(containerId) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.theme-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const wasOpen = item.classList.contains('open');

      container.querySelectorAll('.theme-item').forEach(i => i.classList.remove('open'));

      if (!wasOpen) {
        item.classList.add('open');
      }
    });
  });
}

// ============================================
// Back Navigation
// ============================================
function goBack() {
  // Determine where to go back to
  const detailScreens = ['organ', 'element', 'foundation', 'overview', 'meridian', 'practice', 'symptom-analysis', 'polyvagal-analysis', 'client-handout', 'track-overview'];
  const sectionScreens = ['section-practice', 'section-organs', 'section-elements', 'section-meridians', 'section-overviews'];

  // Track-overview hører til ansigtszone-sporet — gå tilbage dertil
  if (currentScreen === 'track-overview') {
    showScreen('track-ansigtszone');
    return;
  }

  if (detailScreens.includes(currentScreen)) {
    // If we came from a section screen, go back there
    if (sectionScreens.includes(previousScreen)) {
      showScreen(previousScreen);
      const navId = sectionToNav[previousScreen] || 'home';
      if (window._updateBottomNav) window._updateBottomNav(navId);
    } else if (previousScreen === 'symptom-analysis') {
      // Drilled into organ/element from symptom-analysis — return there
      showScreen('symptom-analysis');
      if (window._updateBottomNav) window._updateBottomNav('practice');
    } else {
      showScreen('home');
      if (window._updateBottomNav) window._updateBottomNav('home');
    }
  } else if (sectionScreens.includes(currentScreen)) {
    showScreen('home');
    if (window._updateBottomNav) window._updateBottomNav('home');
  } else {
    showScreen('home');
    if (window._updateBottomNav) window._updateBottomNav('home');
  }
}

function setupBackButtons() {
  // Detail screen back buttons
  document.getElementById('btn-back-practice').addEventListener('click', goBack);
  document.getElementById('btn-back-organ').addEventListener('click', goBack);
  document.getElementById('btn-back-meridian').addEventListener('click', goBack);
  document.getElementById('btn-back-element').addEventListener('click', goBack);
  document.getElementById('btn-back-foundation').addEventListener('click', goBack);
  document.getElementById('btn-back-overview').addEventListener('click', goBack);

  // Section screen back buttons (data-back="home")
  document.querySelectorAll('.back-btn[data-back="home"]').forEach(btn => {
    btn.addEventListener('click', () => {
      showScreen('home');
      if (window._updateBottomNav) window._updateBottomNav('home');
    });
  });

  // Track-overview back button (data-back-track="ansigtszone")
  document.querySelectorAll('.back-btn[data-back-track]').forEach(btn => {
    btn.addEventListener('click', () => {
      const track = btn.dataset.backTrack;
      showScreen(`track-${track}`);
    });
  });

  // Browser back button
  window.addEventListener('popstate', () => {
    if (currentScreen !== 'home') {
      goBack();
    }
  });
}

// Push state when navigating away from home
const originalShowScreen = showScreen;
showScreen = function(screenId) {
  if (screenId !== 'home' && currentScreen === 'home') {
    history.pushState({ screen: screenId }, '');
  } else if (screenId !== currentScreen && currentScreen !== 'home') {
    history.pushState({ screen: screenId }, '');
  }
  originalShowScreen(screenId);
};

// ============================================
// Track Overview — Overblik / 8 Temaer / Nøglepunkter
// Rendres on-demand når kursisten åbner skærmen.
// ============================================
function showTrackOverview() {
  const ov = educationOverview;
  if (!ov) return;

  const eyebrowEl = document.getElementById('track-overview-eyebrow');
  const titleEl = document.getElementById('track-overview-title');
  const ledeEl = document.getElementById('track-overview-lede');
  if (eyebrowEl) eyebrowEl.textContent = ov.eyebrow || '';
  if (titleEl) titleEl.textContent = ov.title || '';
  if (ledeEl) ledeEl.textContent = ov.lede || '';

  const body = document.getElementById('track-overview-body');
  if (body && ov.overview) {
    body.innerHTML = ov.overview.map((section, i) => `
      <section class="track-ov-section">
        <span class="track-ov-num">${String(i + 1).padStart(2, '0')}</span>
        <h2 class="track-ov-heading">${section.heading}</h2>
        ${section.paragraphs.map(p => `<p class="track-ov-paragraph">${p}</p>`).join('')}
      </section>
    `).join('');
  }

  const themesEl = document.getElementById('track-overview-themes');
  if (themesEl && ov.themes) {
    themesEl.innerHTML = ov.themes.map((theme, i) => `
      <div class="theme-item">
        <div class="theme-header">
          <span class="theme-number">${i + 1}</span>
          <span class="theme-title">
            ${theme.title}
            ${theme.subtitle ? `<span class="theme-subtitle">${theme.subtitle}</span>` : ''}
          </span>
          <svg class="theme-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
        <div class="theme-body">
          ${theme.lead ? `<p class="theme-lead">${theme.lead}</p>` : ''}
          <div class="theme-questions">
            ${theme.questions.map(q => `<div class="question">${q}</div>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  const kpEl = document.getElementById('track-overview-keypoints');
  if (kpEl && ov.keyPoints) {
    kpEl.innerHTML = ov.keyPoints.map(kp => `
      <div class="keypoint">
        <div class="keypoint-title">${kp.title}</div>
        <div class="keypoint-text">${kp.text}</div>
      </div>
    `).join('');
  }

  resetTabs('screen-track-overview');
  showScreen('track-overview');
  setupThemeAccordion('track-overview-themes');
}

// ============================================
// Render Practice Guide Grid
// ============================================
function renderPracticeGrid() {
  const grid = document.getElementById('practice-grid');
  const featuredCard = `
    <div class="practice-card practice-card-featured" data-practice-tool="symptom-analysis">
      <span class="practice-card-icon">◈</span>
      <div class="practice-card-info">
        <div class="practice-card-title">${t('saPracticeCardTitle')}</div>
        <div class="practice-card-desc">${t('saPracticeCardDesc')}</div>
      </div>
      <svg class="practice-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </div>
  `;
  const polyvagalCard = `
    <div class="practice-card practice-card-featured practice-card-polyvagal" data-practice-tool="polyvagal-analysis">
      <span class="practice-card-icon" aria-hidden="true">
        <svg viewBox="0 0 60 90" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" width="20" height="30">
          <line x1="15" y1="6" x2="15" y2="84"/>
          <line x1="45" y1="6" x2="45" y2="84"/>
          <line x1="15" y1="20" x2="45" y2="20"/>
          <line x1="15" y1="45" x2="45" y2="45"/>
          <line x1="15" y1="70" x2="45" y2="70"/>
        </svg>
      </span>
      <div class="practice-card-info">
        <div class="practice-card-title">Mønstre i nervesystemet</div>
        <div class="practice-card-desc">Polyvagal-perspektivet — autonome tilstande</div>
      </div>
      <svg class="practice-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </div>
  `;
  const guideCards = practiceGuide.map(item => `
    <div class="practice-card" data-practice="${item.id}">
      <span class="practice-card-icon">${item.icon}</span>
      <div class="practice-card-info">
        <div class="practice-card-title">${item.title}</div>
        <div class="practice-card-desc">${item.subtitle}</div>
      </div>
      <svg class="practice-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </div>
  `).join('');
  grid.innerHTML = featuredCard + polyvagalCard + guideCards;

  grid.querySelectorAll('.practice-card[data-practice]').forEach(card => {
    card.addEventListener('click', () => {
      const item = practiceGuide.find(p => p.id === card.dataset.practice);
      if (item) showPracticeDetail(item);
    });
  });

  const featured = grid.querySelector('.practice-card[data-practice-tool="symptom-analysis"]');
  if (featured) {
    featured.addEventListener('click', () => showSymptomAnalysis());
  }
  const pvCard = grid.querySelector('.practice-card[data-practice-tool="polyvagal-analysis"]');
  if (pvCard) {
    pvCard.addEventListener('click', () => showPolyvagalAnalysis());
  }
}

// ============================================
// Practice Guide Detail
// ============================================
function showPracticeDetail(item) {
  document.getElementById('practice-detail-icon').textContent = item.icon;
  document.getElementById('practice-detail-title').textContent = item.title;
  document.getElementById('practice-detail-subtitle').textContent = item.subtitle;

  const body = document.getElementById('practice-detail-body');
  body.innerHTML = item.sections.map(section => `
    <div class="practice-section">
      <h3 class="practice-section-heading">${section.heading}</h3>
      ${section.paragraphs.map(p => `<p class="practice-section-text">${p}</p>`).join('')}
    </div>
  `).join('');

  showScreen('practice');
}

// ============================================
// Render Section Introductions
// ============================================
function renderSectionIntros() {
  const sections = [
    { key: 'practice', el: 'intro-practice' },
    { key: 'organs', el: 'intro-organs' },
    { key: 'extraordinary', el: 'intro-extraordinary' },
    { key: 'elements', el: 'intro-elements' },
    { key: 'foundation', el: 'intro-foundation' },
    { key: 'overviews', el: 'intro-overviews' }
  ];

  sections.forEach(({ key, el }) => {
    const container = document.getElementById(el);
    const intro = sectionIntros[key];
    if (!container || !intro) return;

    // Create a short preview (first sentence of first paragraph)
    const firstPara = intro.paragraphs[0] || '';
    const preview = firstPara.split(/[.!?]/)[0] + '.';

    container.innerHTML = `
      <div class="section-intro-preview visible">
        <p>${preview}</p>
      </div>
      <div class="section-intro-content collapsed">
        ${intro.paragraphs.map(p => `<p>${p}</p>`).join('')}
      </div>
      <button class="section-intro-toggle" data-expanded="false">
        <span class="toggle-text">${t('readMore')}</span>
        <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" style="transform: rotate(180deg)">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    `;

    const toggle = container.querySelector('.section-intro-toggle');
    const content = container.querySelector('.section-intro-content');
    const previewEl = container.querySelector('.section-intro-preview');
    toggle.addEventListener('click', () => {
      const expanded = toggle.dataset.expanded === 'true';
      toggle.dataset.expanded = expanded ? 'false' : 'true';
      content.classList.toggle('collapsed');
      previewEl.classList.toggle('visible');
      toggle.querySelector('.toggle-text').textContent = expanded ? t('readMore') : t('hide');
      toggle.querySelector('.toggle-icon').style.transform = expanded ? 'rotate(180deg)' : '';
    });
  });
}

// ============================================
// Bottom Navigation — Now shows section screens
// ============================================
function setupBottomNav() {
  const navItems = document.querySelectorAll('.bottom-nav-item');

  function setActiveTab(navId) {
    navItems.forEach(item => item.classList.toggle('active', item.dataset.nav === navId));
  }

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const navId = item.dataset.nav;
      handleNavigation(navId);
      setActiveTab(navId);
    });
  });

  window._updateBottomNav = setActiveTab;
}

function handleNavigation(navId) {
  switch (navId) {
    case 'home':
      showScreen('home');
      break;
    case 'track-ansigtszone':
      showScreen('track-ansigtszone');
      break;
    case 'track-overview':
      showTrackOverview();
      break;
    case 'practice':
      showScreen('section-practice');
      break;
    case 'organs':
      showScreen('section-organs');
      break;
    case 'elements':
      showScreen('section-elements');
      break;
    case 'meridians':
      showScreen('section-meridians');
      break;
    case 'overviews':
      showScreen('section-overviews');
      break;
    case 'clients':
      showClientsScreen();
      break;
  }
}

// ============================================
// Hub Card Navigation
// ============================================
function setupHubCards() {
  document.querySelectorAll('.hub-card[data-hub], .hub-row[data-hub]').forEach(card => {
    card.addEventListener('click', () => {
      const hub = card.dataset.hub;
      if (!hub) return;
      handleNavigation(hub);
      if (window._updateBottomNav) {
        window._updateBottomNav(hub === 'overviews' ? 'home' : hub);
      }
    });
  });
  // Mønster-analyse på track-skærmen
  const saBtn = document.getElementById('track-symptom-analysis-btn');
  if (saBtn) saBtn.addEventListener('click', () => showSymptomAnalysis());
}

// ============================================
// Hamburger Menu
// ============================================
function setupHamburger() {
  const btn = document.getElementById('hamburger-btn');
  const overlay = document.getElementById('hamburger-overlay');
  const closeBtn = document.getElementById('hamburger-close');
  const menu = document.getElementById('hamburger-menu');

  function openMenu() {
    overlay.classList.add('open');
    btn.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    overlay.classList.remove('open');
    btn.classList.remove('open');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', () => {
    if (overlay.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  closeBtn.addEventListener('click', closeMenu);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeMenu();
  });

  menu.querySelectorAll('.hamburger-link[data-nav]').forEach(link => {
    link.addEventListener('click', () => {
      const navId = link.dataset.nav;
      closeMenu();
      handleNavigation(navId);
      if (window._updateBottomNav) {
        window._updateBottomNav(navId === 'overviews' ? 'home' : navId);
      }
    });
  });

  menu.querySelectorAll('.hamburger-link[data-info]').forEach(link => {
    link.addEventListener('click', () => {
      const infoId = link.dataset.info;
      closeMenu();
      if (infoId === 'backup') {
        openBackupDialog();
      } else {
        showInfoModal(infoId);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeMenu();
  });
}

function showInfoModal(infoId) {
  const content = {
    about: { title: t('aboutTitle'), body: t('aboutBody'), kind: 'paragraphs' },
    howto: { title: t('howtoTitle'), body: t('howtoBody'), kind: 'paragraphs' },
    privacy: { title: t('privacyTitle'), body: t('privacyBody'), kind: 'paragraphs' },
    faq: { title: t('faqTitle'), body: t('faqBody'), kind: 'qa' }
  };

  const info = content[infoId];
  if (!info) return;

  document.getElementById('practice-detail-icon').textContent = '◌';
  document.getElementById('practice-detail-title').textContent = info.title;
  document.getElementById('practice-detail-subtitle').textContent = '';

  let bodyHTML = '';
  if (info.kind === 'qa') {
    bodyHTML = info.body.map(([q, a]) => `
      <div class="info-qa-item">
        <div class="info-qa-q">${q}</div>
        <p class="info-qa-a">${a}</p>
      </div>
    `).join('');
  } else {
    bodyHTML = info.body.map(p => `<p class="practice-section-text">${p}</p>`).join('');
  }

  // Add a small element-illustration row at the top of about + faq + privacy
  const decoratedScreens = ['about', 'privacy', 'faq'];
  const decoration = decoratedScreens.includes(infoId) ? `
    <div class="info-element-row" aria-hidden="true">
      <span class="info-element-dot info-element-tree" title="Træ">木</span>
      <span class="info-element-dot info-element-fire" title="Ild">火</span>
      <span class="info-element-dot info-element-earth" title="Jord">土</span>
      <span class="info-element-dot info-element-metal" title="Metal">金</span>
      <span class="info-element-dot info-element-water" title="Vand">水</span>
    </div>
  ` : '';

  document.getElementById('practice-detail-body').innerHTML = `
    <div class="practice-section">
      ${decoration}
      ${bodyHTML}
    </div>
  `;

  showScreen('practice');
}

// ============================================
// Search
// ============================================
function setupSearch() {
  const btn = document.getElementById('search-btn');
  const overlay = document.getElementById('search-overlay');
  const input = document.getElementById('search-input');
  const closeBtn = document.getElementById('search-close');
  const resultsEl = document.getElementById('search-results');

  function openSearch() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input.focus(), 100);
  }

  function closeSearch() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    input.value = '';
    resultsEl.innerHTML = `<div class="search-placeholder">${t('searchTyping')}</div>`;
  }

  btn.addEventListener('click', openSearch);
  closeBtn.addEventListener('click', closeSearch);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeSearch();
  });

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) {
      resultsEl.innerHTML = `<div class="search-placeholder">${t('searchTyping')}</div>`;
      return;
    }
    const results = performSearch(q);
    renderSearchResults(results, q, resultsEl, closeSearch);
  });
}

function performSearch(query) {
  const results = { organs: [], elements: [], meridians: [], practice: [], foundation: [], overviews: [] };

  organs.forEach(o => {
    const searchable = [o.name, o.nickname, o.element, o.yinYang, o.partner, ...o.description, ...(o.keyPoints || []).map(k => k.title + ' ' + k.text)].join(' ').toLowerCase();
    if (searchable.includes(query)) {
      results.organs.push({ type: 'organ', data: o, icon: o.icon, name: o.name, meta: `${o.element} · ${o.yinYang} · ${o.time}` });
    }
  });

  fiveElements.forEach(el => {
    const searchable = [el.name, el.chineseName, el.season, el.emotion, ...el.organs, ...el.description].join(' ').toLowerCase();
    if (searchable.includes(query)) {
      results.elements.push({ type: 'element', data: el, icon: el.icon, name: el.name, meta: `${el.season} · ${el.organs.join(' & ')}` });
    }
  });

  extraordinaryMeridians.forEach(m => {
    const searchable = [m.name, m.nickname, m.aka || '', ...m.description, ...(m.keyPoints || []).map(k => k.title + ' ' + k.text)].join(' ').toLowerCase();
    if (searchable.includes(query)) {
      results.meridians.push({ type: 'meridian', data: m, icon: m.icon, name: m.name, meta: m.nickname });
    }
  });

  practiceGuide.forEach(p => {
    const searchable = [p.title, p.subtitle, ...p.sections.flatMap(s => [s.heading, ...s.paragraphs])].join(' ').toLowerCase();
    if (searchable.includes(query)) {
      results.practice.push({ type: 'practice', data: p, icon: p.icon, name: p.title, meta: p.subtitle });
    }
  });

  ['yinYang', 'elementCycles', 'organPartnership'].forEach(key => {
    const section = tcmFoundation[key];
    const searchable = [section.title, section.subtitle, ...section.description].join(' ').toLowerCase();
    if (searchable.includes(query)) {
      results.foundation.push({ type: 'foundation', data: key, icon: '☯', name: section.title, meta: section.subtitle });
    }
  });

  organOverviews.forEach(ov => {
    const searchable = [ov.name, ov.nickname, ov.element, ov.emotion, ov.keyFunction, ov.classicSigns, ...ov.quickSigns, ...ov.symptomer].join(' ').toLowerCase();
    if (searchable.includes(query)) {
      const organ = organs.find(o => o.id === ov.organId);
      results.overviews.push({ type: 'overview', data: ov, icon: organ ? organ.icon : '〇', name: `${ov.name} Overview`, meta: ov.quickSigns.slice(0, 3).join(' · ') });
    }
  });

  return results;
}

function renderSearchResults(results, query, container, closeCallback) {
  const groups = [
    { key: 'organs', label: t('searchOrgans'), items: results.organs },
    { key: 'elements', label: t('searchElements'), items: results.elements },
    { key: 'meridians', label: t('searchMeridians'), items: results.meridians },
    { key: 'practice', label: t('searchPractice'), items: results.practice },
    { key: 'foundation', label: t('searchFoundation'), items: results.foundation },
    { key: 'overviews', label: t('searchOverviews'), items: results.overviews }
  ].filter(g => g.items.length > 0);

  if (groups.length === 0) {
    container.innerHTML = `<div class="search-no-results">${t('searchNoResults')} "${query}"</div>`;
    return;
  }

  container.innerHTML = groups.map(group => `
    <div class="search-result-group">
      <div class="search-result-group-label">${group.label}</div>
      ${group.items.map((item, i) => `
        <div class="search-result-item" data-type="${item.type}" data-index="${i}" data-group="${group.key}">
          <span class="search-result-icon">${item.icon}</span>
          <div class="search-result-info">
            <div class="search-result-name">${highlightMatch(item.name, query)}</div>
            <div class="search-result-meta">${item.meta}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');

  container.querySelectorAll('.search-result-item').forEach(el => {
    el.addEventListener('click', () => {
      const type = el.dataset.type;
      const groupKey = el.dataset.group;
      const idx = parseInt(el.dataset.index);
      const item = results[groupKey][idx];

      closeCallback();

      setTimeout(() => {
        switch (type) {
          case 'organ': showOrganDetail(item.data); break;
          case 'element': showElementDetail(item.data); break;
          case 'meridian': showMeridianDetail(item.data); break;
          case 'practice': showPracticeDetail(item.data); break;
          case 'foundation': showFoundationDetail(item.data); break;
          case 'overview': showOverviewDetail(item.data, 'organ'); break;
        }
      }, 280);
    });
  });
}

function highlightMatch(text, query) {
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

// ============================================
// Overview Section — Tabs & Rendering
// ============================================
function setupOverviewTabs() {
  const tabs = document.querySelectorAll('.overview-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.overview-tab-content').forEach(tc => tc.classList.remove('active'));
      document.getElementById(`ov-tab-${tab.dataset.ovTab}`).classList.add('active');
    });
  });
}

function renderOverviewOrganGrid() {
  const grid = document.getElementById('overview-organ-grid');
  grid.innerHTML = organOverviews.map(ov => {
    const organ = organs.find(o => o.id === ov.organId);
    return `
      <div class="overview-card" data-ov-organ="${ov.organId}">
        <div class="overview-card-header">
          <span class="overview-card-icon">${organ ? organ.icon : '〇'}</span>
          <div class="overview-card-title-area">
            <div class="overview-card-name">${ov.name} <span class="overview-card-chinese">${ov.chinese}</span></div>
            <div class="overview-card-meta">${ov.element} · ${ov.time} · ${ov.partner}</div>
          </div>
        </div>
        <div class="overview-card-signs">
          ${ov.quickSigns.slice(0, 5).map(s => `<span class="overview-sign">${s}</span>`).join('')}
          <span class="overview-sign overview-sign-more">+${ov.quickSigns.length - 5}</span>
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.overview-card').forEach(card => {
    card.addEventListener('click', () => {
      const ov = organOverviews.find(o => o.organId === card.dataset.ovOrgan);
      if (ov) showOverviewDetail(ov, 'organ');
    });
  });
}

function renderOverviewMeridianGrid() {
  const grid = document.getElementById('overview-meridian-grid');
  grid.innerHTML = meridianOverviews.map(mov => {
    const m = extraordinaryMeridians.find(x => x.id === mov.meridianId);
    return `
      <div class="overview-card overview-card-meridian" data-ov-meridian="${mov.meridianId}">
        <div class="overview-card-header">
          <span class="overview-card-icon">${m ? m.icon : '〇'}</span>
          <div class="overview-card-title-area">
            <div class="overview-card-name">${mov.name}</div>
            <div class="overview-card-meta">${mov.aka}</div>
          </div>
        </div>
        <div class="overview-card-signs">
          ${mov.primarySymptoms.slice(0, 4).map(s => `<span class="overview-sign">${s}</span>`).join('')}
          ${mov.primarySymptoms.length > 4 ? `<span class="overview-sign overview-sign-more">+${mov.primarySymptoms.length - 4}</span>` : ''}
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.overview-card').forEach(card => {
    card.addEventListener('click', () => {
      const mov = meridianOverviews.find(x => x.meridianId === card.dataset.ovMeridian);
      if (mov) showOverviewDetail(mov, 'meridian');
    });
  });
}

function renderOverviewSymptoms() {
  const container = document.getElementById('overview-symptoms-content');
  container.innerHTML = `
    <div class="symptom-ref-intro">
      <p>${t('symptomIntro')}</p>
    </div>
    ${symptomReference.map(item => `
      <div class="symptom-ref-item">
        <div class="symptom-ref-header">
          <span class="symptom-ref-name">${item.symptom}</span>
          <svg class="symptom-ref-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
        <div class="symptom-ref-body">
          <div class="symptom-ref-organs">
            ${item.organs.map(org => {
              const organ = organs.find(o => o.name === org);
              return `<span class="symptom-ref-organ-tag" ${organ ? `data-organ-id="${organ.id}"` : ''}>${org}</span>`;
            }).join('')}
          </div>
          <p class="symptom-ref-note">${item.note}</p>
        </div>
      </div>
    `).join('')}
  `;

  container.querySelectorAll('.symptom-ref-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const wasOpen = item.classList.contains('open');
      container.querySelectorAll('.symptom-ref-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  container.querySelectorAll('.symptom-ref-organ-tag[data-organ-id]').forEach(tag => {
    tag.addEventListener('click', (e) => {
      e.stopPropagation();
      const organ = organs.find(o => o.id === tag.dataset.organId);
      if (organ) showOrganDetail(organ);
    });
  });
}

function renderOverviewPatterns() {
  const container = document.getElementById('overview-patterns-content');
  if (!container || !Array.isArray(patternLibrary)) return;
  container.innerHTML = `
    <div class="symptom-ref-intro">
      <p>${escapeHtml(t('patternsIntro'))}</p>
    </div>
    ${patternLibrary.map(p => `
      <div class="pattern-ref-item">
        <div class="pattern-ref-header">
          <div class="pattern-ref-title-row">
            <span class="pattern-ref-name">${escapeHtml(p.name)}</span>
            ${p.chinese ? `<span class="pattern-ref-chinese">${escapeHtml(p.chinese)}</span>` : ''}
          </div>
          ${p.plainName ? `<div class="pattern-ref-plain">${escapeHtml(p.plainName)}</div>` : ''}
          <svg class="pattern-ref-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="pattern-ref-body">
          ${p.summaryDescription ? `<p class="pattern-ref-summary">${escapeHtml(p.summaryDescription)}</p>` : ''}
          ${p.description ? `
            <div class="pattern-ref-section">
              <div class="pattern-ref-label">${escapeHtml(t('saPatternDescription'))}</div>
              <p class="pattern-ref-text">${escapeHtml(p.description)}</p>
            </div>` : ''}
          ${p.differential ? `
            <div class="pattern-ref-section">
              <div class="pattern-ref-label">${escapeHtml(t('saPatternDifferential'))}</div>
              <p class="pattern-ref-text">${escapeHtml(p.differential)}</p>
            </div>` : ''}
          ${p.treatment ? `
            <div class="pattern-ref-section">
              <div class="pattern-ref-label">${escapeHtml(t('saPatternTreatment'))}</div>
              <p class="pattern-ref-text">${escapeHtml(p.treatment)}</p>
            </div>` : ''}
          ${p.homePractice ? `
            <div class="sa-pattern-homepractice">
              <div class="sa-pattern-homepractice-title">${escapeHtml(t('saHomePractice'))}</div>
              <div class="hp-section"><span class="hp-label">${escapeHtml(t('hpInnerImage'))}</span><p class="hp-text">${escapeHtml(p.homePractice.innerImage)}</p></div>
              <div class="hp-section"><span class="hp-label">${escapeHtml(t('hpDiet'))}</span><p class="hp-text">${escapeHtml(p.homePractice.diet)}</p></div>
              <div class="hp-section"><span class="hp-label">${escapeHtml(t('hpMovement'))}</span><p class="hp-text">${escapeHtml(p.homePractice.movement)}</p></div>
              <div class="hp-section"><span class="hp-label">${escapeHtml(t('hpAcupressure'))}</span><p class="hp-text">${escapeHtml(p.homePractice.acupressure)}</p></div>
              <div class="hp-section"><span class="hp-label">${escapeHtml(t('hpAwareness'))}</span><p class="hp-text">${escapeHtml(p.homePractice.awareness)}</p></div>
            </div>` : ''}
        </div>
      </div>
    `).join('')}
  `;
  container.querySelectorAll('.pattern-ref-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const wasOpen = item.classList.contains('open');
      container.querySelectorAll('.pattern-ref-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

function renderOverviewConversation() {
  const container = document.getElementById('overview-conversation-content');
  container.innerHTML = `
    <div class="conversation-structure">
      <div class="conversation-header-info">
        <h3 class="conversation-title">${conversationStructure.title}</h3>
        <p class="conversation-subtitle">${conversationStructure.subtitle}</p>
      </div>
      ${conversationStructure.sections.map((section, i) => `
        <div class="conversation-section">
          <div class="conversation-section-number">${i + 1}</div>
          <h4 class="conversation-section-heading">${section.heading}</h4>
          <div class="conversation-items">
            ${section.items.map(item => `
              <div class="conversation-item">
                <div class="conversation-item-label">${item.label}</div>
                <div class="conversation-item-text">${item.text}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function showOverviewDetail(ov, type) {
  const organ = type === 'organ' ? organs.find(o => o.id === ov.organId) : null;
  const meridian = type === 'meridian' ? extraordinaryMeridians.find(m => m.id === ov.meridianId) : null;

  document.getElementById('overview-detail-icon').textContent = organ ? organ.icon : (meridian ? meridian.icon : '〇');
  document.getElementById('overview-detail-name').textContent = ov.name;
  document.getElementById('overview-detail-nickname').textContent = type === 'organ' ? `"${ov.nickname}"` : ov.aka;

  let bodyHTML = '';

  if (type === 'organ') {
    bodyHTML += `
      <div class="ov-info-card">
        <div class="ov-info-row"><span class="ov-info-label">${t('ovKnownAs')}</span><span class="ov-info-value">"${ov.nickname}"</span></div>
        <div class="ov-info-row"><span class="ov-info-label">${t('ovTime')}</span><span class="ov-info-value">${ov.time}</span></div>
        <div class="ov-info-row"><span class="ov-info-label">${t('ovPartner')}</span><span class="ov-info-value">${ov.partner}</span></div>
        <div class="ov-info-row"><span class="ov-info-label">${t('ovElement')}</span><span class="ov-info-value">${ov.element}</span></div>
        <div class="ov-info-row"><span class="ov-info-label">${t('ovOpensTo')}</span><span class="ov-info-value">${ov.opensTo}</span></div>
        <div class="ov-info-row"><span class="ov-info-label">${t('ovShowsIn')}</span><span class="ov-info-value">${ov.showsIn}</span></div>
        <div class="ov-info-row"><span class="ov-info-label">${t('ovEmotion')}</span><span class="ov-info-value">${ov.emotion}</span></div>
        ${ov.houses ? `<div class="ov-info-row"><span class="ov-info-label">${t('ovHouses')}</span><span class="ov-info-value">${ov.houses}</span></div>` : ''}
      </div>
    `;

    bodyHTML += `
      <div class="ov-section">
        <h3 class="ov-section-title">${t('ovKeyFunction')}</h3>
        <p class="ov-section-text">${ov.keyFunction}</p>
      </div>
    `;

    bodyHTML += `
      <div class="ov-section">
        <h3 class="ov-section-title">${t('ovClassicSigns')}</h3>
        <p class="ov-section-text">${ov.classicSigns}</p>
      </div>
    `;

    bodyHTML += `
      <div class="ov-section">
        <h3 class="ov-section-title">${t('ovQuickSigns')}</h3>
        <div class="ov-signs-grid">
          ${ov.quickSigns.map(s => `<div class="ov-sign-pill">${s}</div>`).join('')}
        </div>
      </div>
    `;

    bodyHTML += `
      <div class="ov-section">
        <h3 class="ov-section-title">${t('ovDetailedOverview')}</h3>
        <div class="ov-table">
          <div class="ov-table-col">
            <div class="ov-table-col-header">${t('ovSymptoms')}</div>
            ${ov.symptomer.map(s => `<div class="ov-table-cell">${s}</div>`).join('')}
          </div>
          <div class="ov-table-col">
            <div class="ov-table-col-header">${t('ovPhysical')}</div>
            ${ov.fysiske.map(s => `<div class="ov-table-cell">${s}</div>`).join('')}
          </div>
          <div class="ov-table-col">
            <div class="ov-table-col-header">${t('ovFunctionsEmotions')}</div>
            ${ov.funktioner.map(s => `<div class="ov-table-cell">${s}</div>`).join('')}
          </div>
        </div>
      </div>
    `;

    bodyHTML += `
      <div class="ov-section">
        <button class="ov-link-full" data-organ-id="${ov.organId}">
          ${t('ovViewFull')} ${ov.name} ${t('ovPageWith8Themes')}
        </button>
      </div>
    `;
  } else {
    bodyHTML += `
      <div class="ov-section">
        <h3 class="ov-section-title">${t('ovPrimarySymptoms')}</h3>
        <div class="ov-signs-grid">
          ${ov.primarySymptoms.map(s => `<div class="ov-sign-pill">${s}</div>`).join('')}
        </div>
      </div>
      <div class="ov-table">
        <div class="ov-table-col">
          <div class="ov-table-col-header">${t('ovFunctionsProperties')}</div>
          ${ov.functions.map(s => `<div class="ov-table-cell">${s}</div>`).join('')}
        </div>
        <div class="ov-table-col">
          <div class="ov-table-col-header">${t('ovManifestations')}</div>
          ${ov.manifestations.map(s => `<div class="ov-table-cell">${s}</div>`).join('')}
        </div>
        <div class="ov-table-col">
          <div class="ov-table-col-header">${t('ovEnergetics')}</div>
          ${ov.energetics.map(s => `<div class="ov-table-cell">${s}</div>`).join('')}
        </div>
      </div>
    `;

    bodyHTML += `
      <div class="ov-section" style="margin-top: 20px;">
        <button class="ov-link-full" data-meridian-id="${ov.meridianId}">
          ${t('ovViewFull')} ${ov.name} ${t('ovPageArrow')}
        </button>
      </div>
    `;
  }

  document.getElementById('overview-detail-body').innerHTML = bodyHTML;

  const organLink = document.querySelector('.ov-link-full[data-organ-id]');
  if (organLink) {
    organLink.addEventListener('click', () => {
      const org = organs.find(o => o.id === organLink.dataset.organId);
      if (org) showOrganDetail(org);
    });
  }
  const meridianLink = document.querySelector('.ov-link-full[data-meridian-id]');
  if (meridianLink) {
    meridianLink.addEventListener('click', () => {
      const m = extraordinaryMeridians.find(x => x.id === meridianLink.dataset.meridianId);
      if (m) showMeridianDetail(m);
    });
  }

  showScreen('overview');
}

// ============================================
// Symptom Analysis — Resonance Engine
// ============================================
const SA_MAX = 9;
const SA_MIN = 3;
let saSelected = new Set();
const PV_MAX = 9;
const PV_MIN = 3;
let pvSelected = new Set();

// Symptom-domæner tilpasset Lones univers — endokrin og neurologisk ramme.
const SA_DOMAINS = [
  {
    id: 'energi-stress',
    title: 'Energi & stress',
    symptoms: ['Vedvarende træthed', 'Mental udmattelse', 'Manglende fokus', 'Vedvarende uro', 'Kronisk stress', 'Wired-but-tired (træt men kan ikke slappe af)', 'Morgen-træthed', 'Eftermiddags-energidyk']
  },
  {
    id: 'soevn-rytme',
    title: 'Søvn & døgnrytme',
    symptoms: ['Indsovningsbesvær', 'Fragmenteret søvn', 'Søvnløshed med rastløshed', 'Forskudt døgnrytme', 'Skifteholds-symptomer', 'Aften-vågenhed']
  },
  {
    id: 'hormon',
    title: 'Hormonel balance',
    symptoms: ['Cyklus-uregelmæssighed', 'PMS', 'Fertilitetsbekymring', 'Overgangsalder-symptomer', 'Hedeture', 'Reduceret libido', 'Uforklarlig vægtændring', 'Temperaturreguleringsproblemer']
  },
  {
    id: 'tarm-hjerne',
    title: 'Tarm-hjerne-aksen',
    symptoms: ['Fordøjelsesproblemer', 'Oppustethed', 'Sukker-cravings', 'Ustabilt blodsukker', 'Irritabel tarm']
  },
  {
    id: 'emotionel',
    title: 'Emotionel regulering',
    symptoms: ['Angst', 'Emotionel ustabilitet', 'Hyperarousal', 'Følelsesmæssig flad-hed', 'Trauma-respons', 'Irritabilitet']
  },
  {
    id: 'krop-smerte',
    title: 'Krop & smerte',
    symptoms: ['Hovedpine', 'Migræne', 'Nakke-skulder-spændinger', 'Kæbespændinger', 'Hjertebanken']
  },
  {
    id: 'sanser',
    title: 'Sanser & vagus',
    symptoms: ['Tinnitus', 'Svimmelhed', 'Synkebesvær', 'Stemmeforandring']
  }
];

function buildSADomainView() {
  const view = SA_DOMAINS.map(d => ({
    ...d,
    indices: d.symptoms
      .map(name => symptomReference.findIndex(s => s.symptom === name))
      .filter(i => i >= 0)
  }));
  // Catch any uncategorized symptoms so the app can't silently drop new entries
  const seen = new Set(view.flatMap(d => d.indices));
  const orphans = symptomReference
    .map((s, i) => ({ s, i }))
    .filter(({ i }) => !seen.has(i));
  if (orphans.length) {
    view.push({
      id: 'andre',
      title: 'Andre',
      symptoms: orphans.map(o => o.s.symptom),
      indices: orphans.map(o => o.i)
    });
  }
  return view;
}

function renderSymptomAnalysis() {
  const intro = document.getElementById('sa-intro');
  const disclaimer = document.getElementById('sa-disclaimer');
  const grid = document.getElementById('sa-symptom-grid');
  const analyseBtn = document.getElementById('sa-analyse-btn');
  const resetBtn = document.getElementById('sa-reset-btn');
  const titleEl = document.getElementById('symptom-analysis-title');
  const subtitleEl = document.getElementById('symptom-analysis-subtitle');
  if (!grid) return;

  if (titleEl) titleEl.textContent = t('saTitle');
  if (subtitleEl) subtitleEl.textContent = t('saSubtitle');
  if (intro) intro.textContent = t('saIntro');
  if (disclaimer) disclaimer.textContent = t('saDisclaimer');
  if (analyseBtn) {
    const label = analyseBtn.querySelector('.sa-analyse-label');
    if (label) label.textContent = t('saAnalyse');
  }
  if (resetBtn) resetBtn.textContent = t('saReset');

  const domains = buildSADomainView();
  grid.innerHTML = domains.map(d => `
    <section class="sa-domain" data-sa-domain="${d.id}">
      <header class="sa-domain-header">
        <span class="sa-domain-title">${d.title}</span>
      </header>
      <div class="sa-domain-grid">
        ${d.indices.map(i => `
          <button class="sa-chip" type="button" data-sa-symptom="${i}">
            <span class="sa-chip-check" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14"><path d="M5 13l4 4L19 7"/></svg>
            </span>
            <span class="sa-chip-label">${symptomReference[i].symptom}</span>
          </button>
        `).join('')}
      </div>
    </section>
  `).join('');

  grid.querySelectorAll('.sa-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const idx = parseInt(chip.dataset.saSymptom, 10);
      if (saSelected.has(idx)) {
        saSelected.delete(idx);
      } else if (saSelected.size < SA_MAX) {
        saSelected.add(idx);
      }
      updateSAState();
    });
  });

  updateSAState();
}

function updateSAState() {
  const count = saSelected.size;
  const counter = document.getElementById('sa-counter');
  const analyseBtn = document.getElementById('sa-analyse-btn');
  const grid = document.getElementById('sa-symptom-grid');
  const results = document.getElementById('sa-results');

  if (counter) counter.textContent = `${count} ${t('saHitsOf')} ${SA_MAX} ${t('saCounter')}`;

  if (grid) {
    grid.querySelectorAll('.sa-chip').forEach(chip => {
      const idx = parseInt(chip.dataset.saSymptom, 10);
      const selected = saSelected.has(idx);
      chip.classList.toggle('selected', selected);
      chip.classList.toggle('disabled', !selected && count >= SA_MAX);
    });
    // Update per-domain selected-state highlight
    const domains = buildSADomainView();
    domains.forEach(d => {
      const groupCount = d.indices.filter(i => saSelected.has(i)).length;
      const domainEl = grid.querySelector(`.sa-domain[data-sa-domain="${d.id}"]`);
      if (domainEl) domainEl.classList.toggle('has-selection', groupCount > 0);
    });
  }

  if (analyseBtn) {
    const ready = count >= SA_MIN;
    analyseBtn.disabled = !ready;
    analyseBtn.classList.toggle('ready', ready);
  }

  // Hide stale results when selection changes
  if (results && !results.hidden) {
    results.hidden = true;
    results.innerHTML = '';
  }
}

function resetSymptomAnalysis() {
  saSelected.clear();
  updateSAState();
  const results = document.getElementById('sa-results');
  if (results) {
    results.hidden = true;
    results.innerHTML = '';
  }
  // Collapse all opened domains
  const grid = document.getElementById('sa-symptom-grid');
  if (grid) grid.querySelectorAll('.sa-domain.open').forEach(el => el.classList.remove('open'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function computeSymptomResonance() {
  const picked = Array.from(saSelected).map(i => symptomReference[i]).filter(Boolean);
  const scores = {};
  const hits = {};
  picked.forEach(sym => {
    const w = sym.organs.length > 0 ? 1 / sym.organs.length : 0;
    sym.organs.forEach(orgName => {
      scores[orgName] = (scores[orgName] || 0) + w;
      hits[orgName] = (hits[orgName] || 0) + 1;
    });
  });
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const tally = Object.entries(scores)
    .map(([name, score]) => ({
      name,
      score,
      hits: hits[name] || 0,
      percentage: totalScore > 0 ? score / totalScore : 0
    }))
    .sort((a, b) => b.score - a.score || b.hits - a.hits);
  return { picked, tally };
}

function computeElementResonance(tally) {
  const scores = {};
  const hits = {};
  tally.forEach(row => {
    const organ = organs.find(o => o.name === row.name);
    if (!organ || !organ.element) return; // skip extraordinary meridians
    const el = organ.element;
    scores[el] = (scores[el] || 0) + row.score;
    hits[el] = (hits[el] || 0) + row.hits;
  });
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  return Object.entries(scores)
    .map(([name, score]) => ({
      name, score,
      hits: hits[name] || 0,
      percentage: total > 0 ? score / total : 0
    }))
    .sort((a, b) => b.score - a.score);
}

function computeMeridianResonance(tally) {
  return tally
    .map(row => {
      const m = extraordinaryMeridians.find(x => x.name === row.name);
      if (!m) return null;
      return { ...row, ref: m };
    })
    .filter(Boolean);
}

function computePatternResonance(picked) {
  if (!patternLibrary || picked.length === 0) return [];
  const pickedNames = new Set(picked.map(s => s.symptom));
  return patternLibrary
    .map(pattern => {
      const keyHits = pattern.keySymptoms.filter(s => pickedNames.has(s));
      const supportingHits = (pattern.supportingSymptoms || []).filter(s => pickedNames.has(s));
      // Score: how much of user's selection is explained by this pattern
      const score = (keyHits.length + 0.5 * supportingHits.length) / picked.length;
      return {
        pattern,
        keyHits,
        supportingHits,
        totalHits: keyHits.length + supportingHits.length,
        score
      };
    })
    .filter(r => r.totalHits > 0)
    .sort((a, b) => b.score - a.score || b.keyHits.length - a.keyHits.length);
}

function buildSymptomAnalysisSummary(sessionData) {
  // sessionData (optional) = saved client session record.
  // Without it, we compute live from the current SA selection.
  // Polyvagal sessions are routed to a dedicated summary builder.
  if (sessionData && sessionData.kind === 'polyvagal') {
    return buildPolyvagalSummary(sessionData);
  }
  let symptoms, tallyTop, topElementName, topPattern, topPatternScore, summaryDate;
  if (sessionData) {
    symptoms = (sessionData.symptoms || []).map(name => ({ symptom: name }));
    if (symptoms.length === 0) return '';
    tallyTop = (sessionData.organs || []).slice(0, 4);
    topElementName = sessionData.element ? sessionData.element.name : null;
    if (Array.isArray(sessionData.patterns) && sessionData.patterns.length && Array.isArray(patternLibrary)) {
      const ref = patternLibrary.find(p => p.name === sessionData.patterns[0].name);
      if (ref) {
        topPattern = ref;
        topPatternScore = sessionData.patterns[0].score; // already 0-100
      }
    }
    summaryDate = new Date(sessionData.date);
  } else {
    const live = computeSymptomResonance();
    if (live.picked.length < SA_MIN) return '';
    symptoms = live.picked;
    tallyTop = live.tally.slice(0, 4);
    const elementTally = computeElementResonance(live.tally);
    topElementName = elementTally[0] ? elementTally[0].name : null;
    const patternResonance = computePatternResonance(live.picked);
    if (patternResonance[0]) {
      topPattern = patternResonance[0].pattern;
      topPatternScore = Math.round(patternResonance[0].score * 100);
    }
    summaryDate = new Date();
  }

  const isDa = getLanguage() === 'da';
  const T = isDa ? {
    client: 'Klienten oplever',
    symptomsWord: 'symptomer',
    emerging: 'Hvad der træder frem',
    primary: 'Primært',
    secondary: 'Sekundært',
    of: 'ud af',
    pointHere: 'peger derhen',
    elementSuffix: '-elementet dominerer',
    patternBehind: 'Mønstret bag',
    nextStep: 'Næste skridt',
    openSide: 'Åbn',
    sideInApp: 'siden i appen og gennemgå de 8 kortlægningstemaer sammen med klienten.',
    disclaimer: 'Dette er en indgangsvinkel — ikke en diagnose.'
  } : {
    client: 'The client is experiencing',
    symptomsWord: 'symptoms',
    emerging: 'What stands out',
    primary: 'Primary',
    secondary: 'Secondary',
    of: 'of',
    pointHere: 'point here',
    elementSuffix: ' element stands out',
    patternBehind: 'The pattern behind',
    nextStep: 'Next step',
    openSide: 'Open',
    sideInApp: 'side in the app and go through the 8 mapping themes with the client.',
    disclaimer: 'This is an entry point — not a diagnosis.'
  };

  const lines = [];
  const dateLocale = isDa ? 'da-DK' : 'en-US';
  const dateStr = summaryDate.toLocaleDateString(dateLocale, { day: 'numeric', month: 'long', year: 'numeric' });
  lines.push(`${t('saSummaryTitle')} — ${dateStr}`);
  lines.push('');

  lines.push(`${T.client} (${symptoms.length} ${T.symptomsWord}):`);
  symptoms.forEach(s => lines.push(`- ${s.symptom}`));
  lines.push('');

  lines.push(`${T.emerging}:`);
  if (tallyTop[0]) {
    lines.push(`- ${T.primary}: ${tallyTop[0].name} (${tallyTop[0].hits} ${T.of} ${symptoms.length} ${T.pointHere})`);
  }
  const secondaryNames = tallyTop.slice(1, 3).map(r => r.name).filter(Boolean);
  if (secondaryNames.length) {
    lines.push(`- ${T.secondary}: ${secondaryNames.join(', ')}`);
  }
  if (topElementName) {
    lines.push(`- ${topElementName}${T.elementSuffix}`);
  }
  lines.push('');

  if (topPattern) {
    lines.push(`${T.patternBehind}:`);
    lines.push(`${topPattern.plainName || topPattern.name} — ${intensityWord(topPatternScore)}`);
    if (topPattern.summaryDescription) {
      lines.push(topPattern.summaryDescription);
    }
    lines.push('');
  }

  const primary = tallyTop[0];
  const primaryEntity = primary ? findResonanceEntity(primary.name) : null;
  if (primaryEntity && primaryEntity.ref) {
    lines.push(`${T.nextStep}:`);
    lines.push(`${T.openSide} ${primaryEntity.name}-${T.sideInApp}`);
    lines.push('');
  }

  lines.push('—');
  lines.push(T.disclaimer);
  return lines.join('\n');
}

function buildClientHandoutText() {
  // Prefer the resolved handout context (covers both SA and saved sessions);
  // fall back to live SA data so the helper still works on its own.
  let pattern, dateStr;
  if (currentHandoutContext && currentHandoutContext.pattern) {
    pattern = currentHandoutContext.pattern;
    dateStr = currentHandoutContext.dateStr;
  } else {
    const { picked } = computeSymptomResonance();
    if (picked.length < SA_MIN) return '';
    const patternResonance = computePatternResonance(picked);
    const top = patternResonance[0];
    if (!top || !top.pattern.homePractice) return '';
    pattern = top.pattern;
    dateStr = formatHandoutDate(new Date());
  }
  if (!pattern || !pattern.homePractice) return '';
  const summary = pattern.summaryDescription || '';
  const rows = buildHandoutPracticeRows(pattern);

  const lines = [];
  lines.push(`${t('handoutHeading')} — ${dateStr}`);
  lines.push('');
  lines.push(t('handoutWeSawTitle'));
  if (summary) lines.push(summary);
  lines.push('');
  lines.push(`${t('handoutWhatYouCanDoTitle')}:`);
  lines.push('');
  rows.forEach(row => {
    lines.push(row.label);
    lines.push(row.text || '');
    lines.push('');
  });
  lines.push('—');
  lines.push(t('handoutFooter'));
  return lines.join('\n');
}

async function copyClientHandoutToClipboard(btn) {
  const text = buildClientHandoutText();
  if (!text) return;
  const labelEl = btn.querySelector('.sa-client-label');
  const setLabel = (key) => { if (labelEl) labelEl.textContent = t(key); };
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'absolute';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    showToast(t('saveDialogSaved'));
  } catch (e) {
    console.error('Failed to copy client handout', e);
  }
}

async function copySummaryToClipboard(btn) {
  const text = buildSymptomAnalysisSummary();
  if (!text) return;
  const labelEl = btn.querySelector('.sa-copy-label');
  const setLabel = (key) => { if (labelEl) labelEl.textContent = t(key); };
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      // Fallback for non-secure contexts (rare, but defensive)
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setLabel('saCopiedConfirm');
    btn.classList.add('copied');
  } catch (e) {
    setLabel('saCopyFailed');
  }
  setTimeout(() => {
    setLabel('saCopySummary');
    btn.classList.remove('copied');
  }, 2000);
}

function findResonanceEntity(name) {
  const organ = organs.find(o => o.name === name);
  if (organ) return { kind: 'organ', name: organ.name, id: organ.id, icon: organ.icon, color: organ.color, ref: organ };
  const meridian = extraordinaryMeridians.find(m => m.name === name);
  if (meridian) return { kind: 'meridian', name: meridian.name, id: meridian.id, icon: meridian.icon || '〇', color: 'var(--accent-gold)', ref: meridian };
  return { kind: 'unknown', name, icon: '〇', color: 'var(--accent-gold)', ref: null };
}

function renderSymptomAnalysisResults() {
  const { picked, tally } = computeSymptomResonance();
  const results = document.getElementById('sa-results');
  if (!results || picked.length < SA_MIN) return;

  const top = tally.slice(0, 3);
  const tierLabels = [t('saPrimary'), t('saSecondary'), t('saTertiary')];
  const elementTally = computeElementResonance(tally);
  const topElement = elementTally[0];
  const elementData = topElement ? fiveElements.find(e => e.name === topElement.name) : null;

  const elementHTML = elementData ? `
    <h3 class="sa-results-subheading">${t('saElementHeading')}</h3>
    <p class="sa-results-lead">${t('saElementLead')}</p>
    <button class="sa-element-card" type="button" data-sa-open-element="${elementData.id}" style="--el-accent: ${elementData.color}">
      <span class="sa-element-icon">${elementData.icon}</span>
      <div class="sa-element-info">
        <div class="sa-element-name">${elementData.name} <span class="sa-element-chinese">${elementData.chineseName}</span></div>
        <div class="sa-element-meta">${elementData.season} · ${elementData.emotion}</div>
        <div class="sa-element-organs">${elementData.organs.join(' · ')}</div>
      </div>
      <span class="sa-element-pct">${intensityWord(Math.round(topElement.percentage * 100))}</span>
      <svg class="sa-element-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M9 18l6-6-6-6"/></svg>
    </button>
  ` : '';

  const meridianTally = computeMeridianResonance(tally);
  const meridianHTML = meridianTally.length ? `
    <h3 class="sa-results-subheading">${t('saMeridianHeading')}</h3>
    <p class="sa-results-lead">${t('saMeridianLead')}</p>
    <div class="sa-meridian-list">
      ${meridianTally.map(row => `
        <button class="sa-meridian-card" type="button" data-sa-open-meridian="${row.ref.id}">
          <span class="sa-meridian-icon">${row.ref.icon || '〇'}</span>
          <div class="sa-meridian-info">
            <div class="sa-meridian-name">${row.ref.name}</div>
            <div class="sa-meridian-nick">"${row.ref.nickname}"</div>
          </div>
          <span class="sa-meridian-hits">${row.hits} ${t('saHits')}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      `).join('')}
    </div>
  ` : '';

  const patternResonance = computePatternResonance(picked);
  const topPatterns = patternResonance.slice(0, 3);
  const patternHTML = topPatterns.length ? `
    <h3 class="sa-results-subheading">${t('saPatternHeading')}</h3>
    <p class="sa-results-lead">${t('saPatternLead')}</p>
    <div class="sa-pattern-list">
      ${topPatterns.map((row, idx) => `
        <div class="sa-pattern-card" data-sa-pattern="${row.pattern.id}">
          <button class="sa-pattern-header" type="button" data-sa-pattern-toggle>
            <div class="sa-pattern-title-row">
              <span class="sa-pattern-name">${row.pattern.name}</span>
              <span class="sa-pattern-chinese">${row.pattern.chinese}</span>
            </div>
            ${row.pattern.plainName ? `<div class="sa-pattern-plain">${row.pattern.plainName}</div>` : ''}
            <div class="sa-pattern-meta-row">
              <span class="sa-pattern-tag">${row.pattern.organ}</span>
              <span class="sa-pattern-tag sa-pattern-tag-nature">${row.pattern.nature}</span>
              <span class="sa-pattern-score">${intensityWord(Math.round(row.score * 100))}</span>
            </div>
            <div class="sa-pattern-hits">
              ${row.keyHits.length ? `<span class="sa-pattern-hits-label">${t('saPatternKey')}:</span> ${row.keyHits.length}` : ''}
              ${row.supportingHits.length ? `<span class="sa-pattern-hits-label">${t('saPatternSupporting')}:</span> ${row.supportingHits.length}` : ''}
            </div>
            <svg class="sa-pattern-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="sa-pattern-body">
            ${row.pattern.summaryDescription ? `<p class="sa-pattern-summary">${row.pattern.summaryDescription}</p>` : ''}
            <div class="sa-pattern-section">
              <div class="sa-pattern-section-label">${t('saPatternDescription')}</div>
              <p class="sa-pattern-section-text">${row.pattern.description}</p>
            </div>
            <div class="sa-pattern-section">
              <div class="sa-pattern-section-label">${t('saPatternMatchedSymptoms')}</div>
              <div class="sa-pattern-symptoms">
                ${row.keyHits.map(s => `<span class="sa-pattern-symptom sa-pattern-symptom-key">${s}</span>`).join('')}
                ${row.supportingHits.map(s => `<span class="sa-pattern-symptom">${s}</span>`).join('')}
              </div>
            </div>
            <div class="sa-pattern-section">
              <div class="sa-pattern-section-label">${t('saPatternDifferential')}</div>
              <p class="sa-pattern-section-text">${row.pattern.differential}</p>
            </div>
            <div class="sa-pattern-section">
              <div class="sa-pattern-section-label">${t('saPatternTreatment')}</div>
              <p class="sa-pattern-section-text">${row.pattern.treatment}</p>
            </div>
            ${row.pattern.homePractice ? `
              <div class="sa-pattern-homepractice">
                <div class="sa-pattern-homepractice-title">${t('saHomePractice')}</div>
                <div class="hp-section"><span class="hp-label">${t('hpInnerImage')}</span><p class="hp-text">${row.pattern.homePractice.innerImage}</p></div>
                <div class="hp-section"><span class="hp-label">${t('hpDiet')}</span><p class="hp-text">${row.pattern.homePractice.diet}</p></div>
                <div class="hp-section"><span class="hp-label">${t('hpMovement')}</span><p class="hp-text">${row.pattern.homePractice.movement}</p></div>
                <div class="hp-section"><span class="hp-label">${t('hpAcupressure')}</span><p class="hp-text">${row.pattern.homePractice.acupressure}</p></div>
                <div class="hp-section"><span class="hp-label">${t('hpAwareness')}</span><p class="hp-text">${row.pattern.homePractice.awareness}</p></div>
              </div>
            ` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  ` : '';

  const topHTML = top.map((row, i) => {
    const entity = findResonanceEntity(row.name);
    const widthPct = Math.max(8, Math.round(row.percentage * 100));
    const linkAttr = entity.kind === 'organ' ? `data-sa-open-organ="${entity.id}"`
                   : entity.kind === 'meridian' ? `data-sa-open-meridian="${entity.id}"`
                   : '';
    return `
      <div class="sa-result-row sa-tier-${i + 1}" style="--row-accent: ${entity.color}">
        <div class="sa-result-header">
          <span class="sa-result-tier">${tierLabels[i]}</span>
          <span class="sa-result-organ-icon">${entity.icon}</span>
          <span class="sa-result-organ-name">${entity.name}</span>
          <span class="sa-result-hits">${row.hits} ${t('saHitsOf')} ${picked.length} ${t('saHits')}</span>
        </div>
        <div class="sa-result-bar">
          <div class="sa-result-bar-fill" style="width: ${widthPct}%"></div>
        </div>
        ${entity.ref ? `
          <button class="sa-result-link" type="button" ${linkAttr}>
            ${t('saOpenOrgan')} ${entity.name}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        ` : ''}
      </div>
    `;
  }).join('');

  const notesHTML = picked.map(sym => `
    <div class="sa-note-card">
      <div class="sa-note-symptom">${sym.symptom}</div>
      <div class="sa-note-organs">
        ${sym.organs.map(org => `<span class="sa-note-organ">${org}</span>`).join('')}
      </div>
      <p class="sa-note-text">${sym.note}</p>
    </div>
  `).join('');

  const primary = top[0];
  const primaryEntity = primary ? findResonanceEntity(primary.name) : null;
  const primaryRef = primaryEntity && primaryEntity.ref;

  results.innerHTML = `
    <div class="sa-results-inner">
      <h2 class="sa-results-heading">${t('saResultsHeading')}</h2>
      <p class="sa-results-lead">${t('saResultsLead')}</p>
      <div class="sa-results-list">${topHTML}</div>

      ${elementHTML}

      ${patternHTML}

      ${meridianHTML}

      <h3 class="sa-results-subheading">${t('saNotesHeading')}</h3>
      <p class="sa-results-lead">${t('saNotesLead')}</p>
      <div class="sa-notes-list">${notesHTML}</div>

      <div class="sa-next-step"${primaryEntity ? ` style="--row-accent: ${primaryEntity.color}"` : ''}>
        <div class="sa-next-step-heading">${t('saNextHeading')}</div>
        <p class="sa-next-step-body">${t('saNextBody')}</p>
        ${primaryRef ? `
          <button class="sa-next-step-cta" type="button" ${primaryEntity.kind === 'meridian' ? `data-sa-open-meridian="${primaryRef.id}"` : `data-sa-open-organ="${primaryRef.id}"`}>
            ${primaryEntity.icon} ${t('saOpenOrgan')} ${primaryEntity.name}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        ` : ''}
      </div>

      <div class="sa-result-actions sa-result-actions-single">
        <button class="sa-save-btn sa-save-btn-primary" type="button" data-sa-save>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="18" height="18">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
            <polyline points="17 21 17 13 7 13 7 21"/>
            <polyline points="7 3 7 8 15 8"/>
          </svg>
          <span class="sa-action-text">
            <span class="sa-save-label">${t('saResultSavePrimary')}</span>
            <span class="sa-action-hint">${t('saResultSavePrimaryHint')}</span>
          </span>
        </button>
        <p class="sa-result-actions-note">${t('saResultActionsNote')}</p>
      </div>
    </div>
  `;

  results.hidden = false;

  results.querySelectorAll('[data-sa-open-organ]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const organ = organs.find(o => o.id === btn.dataset.saOpenOrgan);
      if (organ) showOrganDetail(organ);
    });
  });

  results.querySelectorAll('[data-sa-open-meridian]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const m = extraordinaryMeridians.find(x => x.id === btn.dataset.saOpenMeridian);
      if (m) showMeridianDetail(m);
    });
  });

  results.querySelectorAll('[data-sa-open-element]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const el = fiveElements.find(x => x.id === btn.dataset.saOpenElement);
      if (el) showElementDetail(el);
    });
  });

  results.querySelectorAll('[data-sa-copy]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      copySummaryToClipboard(btn);
    });
  });

  results.querySelectorAll('[data-sa-save]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openSaveDialog();
    });
  });

  results.querySelectorAll('[data-sa-client]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      showClientHandout();
    });
  });

  results.querySelectorAll('[data-sa-pattern-toggle]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.sa-pattern-card');
      if (card) card.classList.toggle('open');
    });
  });

  // Smooth scroll so user sees the results appearing below the button
  requestAnimationFrame(() => {
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function setupSymptomAnalysis() {
  const analyseBtn = document.getElementById('sa-analyse-btn');
  const resetBtn = document.getElementById('sa-reset-btn');
  const backBtn = document.getElementById('btn-back-symptom-analysis');

  if (analyseBtn) {
    analyseBtn.addEventListener('click', () => {
      if (saSelected.size >= SA_MIN) renderSymptomAnalysisResults();
    });
  }
  if (resetBtn) resetBtn.addEventListener('click', resetSymptomAnalysis);
  if (backBtn) backBtn.addEventListener('click', goBack);
}

function showSymptomAnalysis() {
  renderSymptomAnalysis();
  showScreen('symptom-analysis');
}

// ============================================
// Polyvagal Analysis — parallel to symptom-analysis,
// scoring against ANS states (ventral/sympatisk/dorsal)
// ============================================

function renderPolyvagalAnalysis() {
  const introEl = document.getElementById('pv-intro');
  const discEl = document.getElementById('pv-disclaimer');
  const titleEl = document.getElementById('polyvagal-analysis-title');
  const subEl = document.getElementById('polyvagal-analysis-subtitle');
  const grid = document.getElementById('pv-symptom-grid');
  const counter = document.getElementById('pv-counter');
  const analyseBtn = document.getElementById('pv-analyse-btn');
  if (!grid) return;

  if (titleEl) titleEl.textContent = polyvagalIntro.title;
  if (subEl) subEl.textContent = polyvagalIntro.subtitle;
  if (introEl) introEl.innerHTML = `<p>${escapeHtml(polyvagalIntro.lead)}</p>`;
  if (discEl) discEl.textContent = polyvagalIntro.disclaimer;

  // Group symptoms by primary state for visual clarity
  const byState = { sympatisk: [], dorsal: [], ventral: [], blandet: [] };
  polyvagalSymptoms.forEach(sym => {
    const states = sym.states || {};
    const entries = Object.entries(states);
    if (entries.length === 0) { byState.blandet.push(sym); return; }
    // Find dominant state
    entries.sort((a, b) => b[1] - a[1]);
    const top = entries[0];
    const second = entries[1];
    if (second && Math.abs(second[1] - top[1]) < 0.15) {
      byState.blandet.push(sym);
    } else {
      (byState[top[0]] || byState.blandet).push(sym);
    }
  });

  const groupTitle = {
    sympatisk: 'Sympatisk aktivering',
    dorsal: 'Dorsal nedslukning',
    ventral: 'Ventral / forbindelse',
    blandet: 'Blandede tilstande'
  };

  // Match the TCM symptom-grid structure (sa-domain + sa-chip) so the
  // polyvagal screen reuses the white-card chip styling already in css.
  const groups = ['sympatisk', 'dorsal', 'blandet', 'ventral']
    .filter(k => byState[k].length > 0)
    .map(k => `
      <section class="sa-domain" data-pv-group="${k}">
        <header class="sa-domain-header">
          <span class="sa-domain-title">${escapeHtml(groupTitle[k])}</span>
        </header>
        <div class="sa-domain-grid">
          ${byState[k].map(sym => `
            <button class="sa-chip${pvSelected.has(sym.id) ? ' selected' : ''}" type="button" data-pv-sym="${escapeHtml(sym.id)}">
              <span class="sa-chip-check" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14"><path d="M5 13l4 4L19 7"/></svg>
              </span>
              <span class="sa-chip-label">${escapeHtml(sym.name)}</span>
            </button>
          `).join('')}
        </div>
      </section>
    `).join('');

  grid.innerHTML = groups;

  grid.querySelectorAll('[data-pv-sym]').forEach(btn => {
    btn.addEventListener('click', () => togglePolyvagalSymptom(btn.dataset.pvSym));
  });

  updatePolyvagalCounter();
}

function togglePolyvagalSymptom(id) {
  if (pvSelected.has(id)) {
    pvSelected.delete(id);
  } else {
    if (pvSelected.size >= PV_MAX) return;
    pvSelected.add(id);
  }
  document.querySelectorAll(`#pv-symptom-grid [data-pv-sym="${CSS.escape(id)}"]`).forEach(el => {
    el.classList.toggle('selected', pvSelected.has(id));
  });
  updatePolyvagalCounter();
}

function updatePolyvagalCounter() {
  const counter = document.getElementById('pv-counter');
  const analyseBtn = document.getElementById('pv-analyse-btn');
  if (counter) counter.textContent = `${pvSelected.size} af ${PV_MAX} valgt`;
  if (analyseBtn) analyseBtn.disabled = pvSelected.size < PV_MIN;
}

function resetPolyvagalAnalysis() {
  pvSelected.clear();
  const results = document.getElementById('pv-results');
  if (results) {
    results.innerHTML = '';
    results.hidden = true;
  }
  renderPolyvagalAnalysis();
}

function getPickedPolyvagalSymptoms() {
  return polyvagalSymptoms.filter(s => pvSelected.has(s.id));
}

function computePolyvagalStateResonance(picked) {
  const totals = { ventral: 0, sympatisk: 0, dorsal: 0 };
  picked.forEach(s => {
    Object.entries(s.states || {}).forEach(([k, v]) => {
      if (totals[k] !== undefined) totals[k] += v;
    });
  });
  const sum = totals.ventral + totals.sympatisk + totals.dorsal;
  return polyvagalStates.map(state => ({
    id: state.id,
    name: state.name,
    rung: state.rung,
    color: state.color,
    description: state.description,
    weight: totals[state.id] || 0,
    pct: sum > 0 ? (totals[state.id] || 0) / sum : 0
  })).sort((a, b) => b.pct - a.pct);
}

function computePolyvagalPatternResonance(picked) {
  if (picked.length === 0) return [];
  const pickedNames = new Set(picked.map(s => s.name));
  return polyvagalPatterns.map(pattern => {
    const keyHits = pattern.keySymptoms.filter(s => pickedNames.has(s));
    const supportingHits = (pattern.supportingSymptoms || []).filter(s => pickedNames.has(s));
    const score = (keyHits.length + 0.5 * supportingHits.length) / picked.length;
    return { pattern, keyHits, supportingHits, totalHits: keyHits.length + supportingHits.length, score };
  })
  .filter(r => r.totalHits > 0)
  .sort((a, b) => b.score - a.score || b.keyHits.length - a.keyHits.length);
}

function renderPolyvagalAnalysisResults() {
  const picked = getPickedPolyvagalSymptoms();
  const results = document.getElementById('pv-results');
  if (!results || picked.length < PV_MIN) return;

  const stateTally = computePolyvagalStateResonance(picked);
  const patternTally = computePolyvagalPatternResonance(picked);
  const topPattern = patternTally[0];
  const topState = stateTally[0];

  // Ladder visualisation: 3 rungs, top=ventral, middle=sympatisk, bottom=dorsal,
  // each annotated with the percentage from the analysis.
  const rungs = [
    { id: 'ventral',   label: 'Ventral',   y: 22, sub: 'forbindelse · ro' },
    { id: 'sympatisk', label: 'Sympatisk', y: 50, sub: 'mobilisering · alarm' },
    { id: 'dorsal',    label: 'Dorsal',    y: 78, sub: 'kollaps · dvale' }
  ];
  const stateById = Object.fromEntries(stateTally.map(s => [s.id, s]));

  const ladderHTML = `
    <div class="pv-ladder">
      <svg class="pv-ladder-svg" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="40" y1="14" x2="40" y2="106" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
        <line x1="80" y1="14" x2="80" y2="106" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
        ${rungs.map(r => `<line x1="40" y1="${r.y}" x2="80" y2="${r.y}" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>`).join('')}
        ${rungs.map(r => {
          const s = stateById[r.id];
          const pct = s ? Math.round(s.pct * 100) : 0;
          const radius = 4 + (pct / 100) * 9;
          const color = s && s.color ? s.color : 'currentColor';
          return `
            <circle cx="60" cy="${r.y}" r="${radius}" fill="${color}" opacity="${0.25 + (pct / 100) * 0.6}"/>
            <text x="100" y="${r.y - 1}" font-family="Cormorant Garamond, serif" font-size="14" fill="currentColor" font-weight="500">${r.label}</text>
            <text x="100" y="${r.y + 13}" font-family="Inter, sans-serif" font-size="9" letter-spacing="0.08em" fill="currentColor" opacity="0.6">${r.sub.toUpperCase()}</text>
            <text x="290" y="${r.y + 5}" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="${color}" text-anchor="end">${pct}%</text>
          `;
        }).join('')}
      </svg>
    </div>
  `;

  const patternHTML = topPattern ? `
    <div class="pv-pattern-card" style="--pv-state-color: ${stateById[topPattern.pattern.primaryState] ? stateById[topPattern.pattern.primaryState].color : 'var(--accent-gold)'}">
      <div class="pv-pattern-eyebrow">Primært mønster — ${escapeHtml(intensityWord(Math.round(topPattern.score * 100)))}</div>
      <h3 class="pv-pattern-title">${escapeHtml(topPattern.pattern.name)}</h3>
      <div class="pv-pattern-plain">${escapeHtml(topPattern.pattern.plainName)}</div>
      <p class="pv-pattern-summary">${escapeHtml(topPattern.pattern.summaryDescription)}</p>

      <details class="pv-pattern-details">
        <summary>Klinisk beskrivelse og differentiering</summary>
        <div class="pv-pattern-section">
          <div class="pv-pattern-section-label">Beskrivelse</div>
          <p>${escapeHtml(topPattern.pattern.description)}</p>
        </div>
        <div class="pv-pattern-section">
          <div class="pv-pattern-section-label">Differentiering</div>
          <p>${escapeHtml(topPattern.pattern.differential)}</p>
        </div>
        <div class="pv-pattern-section">
          <div class="pv-pattern-section-label">Behandlings-retning</div>
          <p>${escapeHtml(topPattern.pattern.treatment)}</p>
        </div>
        <div class="pv-pattern-section">
          <div class="pv-pattern-section-label">Matchede symptomer</div>
          <div class="pv-symptom-chips">
            ${topPattern.keyHits.map(s => `<span class="pv-symptom-chip-tag pv-symptom-chip-key">${escapeHtml(s)}</span>`).join('')}
            ${topPattern.supportingHits.map(s => `<span class="pv-symptom-chip-tag">${escapeHtml(s)}</span>`).join('')}
          </div>
        </div>
      </details>

      <div class="pv-homepractice">
        <div class="pv-homepractice-title">Hjem-anvisning</div>
        ${[
          { key: 'innerImage',  glyph: 'I', label: 'Indre billede', text: topPattern.pattern.homePractice.innerImage },
          { key: 'orientation', glyph: 'O', label: 'Orientering',   text: topPattern.pattern.homePractice.orientation },
          { key: 'movement',    glyph: 'B', label: 'Bevægelse',     text: topPattern.pattern.homePractice.movement },
          { key: 'anchor',      glyph: 'A', label: 'Anker',         text: topPattern.pattern.homePractice.anchor, accent: true },
          { key: 'glimmer',     glyph: 'G', label: 'Øjeblikke',     text: topPattern.pattern.homePractice.glimmer }
        ].map(row => `
          <div class="pv-hp-row${row.accent ? ' pv-hp-row-anchor' : ''}">
            <div class="pv-hp-glyph" aria-hidden="true">${row.glyph}</div>
            <div class="pv-hp-body">
              <div class="pv-hp-label">${escapeHtml(row.label)}${row.accent ? ' <span class="pv-hp-accent-tag">vigtigste anker</span>' : ''}</div>
              <p class="pv-hp-text">${escapeHtml(row.text)}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : `
    <div class="pv-no-match">
      <p>Ingen klart mønster trådte frem af dine valg. Det kan betyde at klienten er i en mere blandet eller stabil tilstand — eller at flere symptomer hjælper.</p>
    </div>
  `;

  // Other patterns that scored
  const othersHTML = patternTally.slice(1, 4).length ? `
    <div class="pv-other-patterns">
      <div class="pv-other-patterns-label">Andre mønstre der spiller med</div>
      ${patternTally.slice(1, 4).map(row => `
        <div class="pv-other-pattern">
          <div class="pv-other-pattern-name">${escapeHtml(row.pattern.name)}</div>
          <div class="pv-other-pattern-score">${escapeHtml(intensityWord(Math.round(row.score * 100)))}</div>
        </div>
      `).join('')}
    </div>
  ` : '';

  results.innerHTML = `
    <div class="sa-results-inner pv-results-inner">
      <h2 class="sa-results-heading">Hvor er klienten på stigen?</h2>
      <p class="sa-results-lead">Symptomerne, som du valgte, peger på følgende fordeling i autonome nervesystem.</p>
      ${ladderHTML}

      <details class="pv-ladder-info">
        <summary>Hvad betyder stigen?</summary>
        <div class="pv-ladder-info-body">
          <p>Stephen Porges' polyvagale teori beskriver det autonome nervesystem som tre tilstande, vi bevæger os op og ned ad — som trin på en stige (Deb Dana).</p>
          <ul>
            <li><strong>Ventral</strong> (øverst): forbindelse, ro, regulering. Vi kan møde os selv og andre.</li>
            <li><strong>Sympatisk</strong> (mellem): mobilisering, alarm, fight/flight. Designet til kortvarig beskyttelse.</li>
            <li><strong>Dorsal</strong> (nederst): kollaps, dvale, bevarelse. Når aktivering ikke har hjulpet.</li>
          </ul>
          <p>Behandlingens retning er ikke at fjerne sympatisk eller dorsal — de er nødvendige beskyttelser. Det er at bygge fleksibiliteten til at bevæge sig <em>op</em> til ventral igen, særligt gennem co-regulering.</p>
        </div>
      </details>

      ${patternHTML}

      ${othersHTML}

      <div class="pv-disclaimer-note">
        <p>${escapeHtml(polyvagalIntro.disclaimer)}</p>
      </div>

      <div class="sa-result-actions sa-result-actions-single">
        <button class="sa-save-btn sa-save-btn-primary" type="button" data-pv-save>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="18" height="18">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
            <polyline points="17 21 17 13 7 13 7 21"/>
            <polyline points="7 3 7 8 15 8"/>
          </svg>
          <span class="sa-action-text">
            <span class="sa-save-label">Gem analyse</span>
            <span class="sa-action-hint">i en klients forløbs-arkiv</span>
          </span>
        </button>
        <p class="sa-result-actions-note">Når den er gemt, finder du den under Mine klienter i menuen — dér kan du åbne hjem-anvisningen til klienten og kopiere resuméet til dine egne noter.</p>
      </div>
    </div>
  `;
  results.querySelectorAll('[data-pv-save]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openSaveDialog('polyvagal');
    });
  });
  results.hidden = false;

  requestAnimationFrame(() => {
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function setupPolyvagalAnalysis() {
  const analyseBtn = document.getElementById('pv-analyse-btn');
  const resetBtn = document.getElementById('pv-reset-btn');
  const backBtn = document.getElementById('btn-back-polyvagal-analysis');

  if (analyseBtn) {
    analyseBtn.addEventListener('click', () => {
      if (pvSelected.size >= PV_MIN) renderPolyvagalAnalysisResults();
    });
  }
  if (resetBtn) resetBtn.addEventListener('click', resetPolyvagalAnalysis);
  if (backBtn) backBtn.addEventListener('click', goBack);
}

function showPolyvagalAnalysis() {
  renderPolyvagalAnalysis();
  showScreen('polyvagal-analysis');
}

// ============================================
// Client Handout — printable home practice document
// ============================================
const HANDOUT_THERAPIST_KEY = 'tcm-handout-therapist-name';
let currentHandoutContext = null; // { pattern, dateStr, clientId, fromSession }

function resolveHandoutContext(opts) {
  // opts: { pattern, dateStr, clientId }. If pattern omitted, derive from SA.
  if (opts && opts.pattern) {
    return {
      pattern: opts.pattern,
      dateStr: opts.dateStr || formatHandoutDate(new Date()),
      clientId: opts.clientId || null,
      fromSession: true
    };
  }
  const { picked } = computeSymptomResonance();
  if (picked.length < SA_MIN) return null;
  const patternResonance = computePatternResonance(picked);
  const top = patternResonance[0];
  if (!top || !top.pattern.homePractice) return null;
  return {
    pattern: top.pattern,
    dateStr: formatHandoutDate(new Date()),
    clientId: activeClientId || null,
    fromSession: false
  };
}

function formatHandoutDate(d) {
  const isDa = getLanguage() === 'da';
  const dateLocale = isDa ? 'da-DK' : 'en-US';
  return d.toLocaleDateString(dateLocale, { day: 'numeric', month: 'long', year: 'numeric' });
}

function findPatternByName(name, kind) {
  if (kind === 'polyvagal') {
    return polyvagalPatterns.find(p => p.name === name);
  }
  if (kind === 'tcm' && Array.isArray(patternLibrary)) {
    return patternLibrary.find(p => p.name === name);
  }
  // Unknown kind — try both, TCM first (legacy sessions had no kind)
  if (Array.isArray(patternLibrary)) {
    const tcm = patternLibrary.find(p => p.name === name);
    if (tcm) return tcm;
  }
  return polyvagalPatterns.find(p => p.name === name);
}

function buildHandoutPracticeRows(pattern) {
  const hp = pattern.homePractice || {};
  if (pattern.kind === 'polyvagal') {
    return [
      { label: 'Indre billede', glyph: 'I', text: hp.innerImage },
      { label: 'Orientering',   glyph: 'O', text: hp.orientation },
      { label: 'Bevægelse',     glyph: 'B', text: hp.movement },
      { label: 'Anker',         glyph: 'A', text: hp.anchor, accent: true },
      { label: 'Øjeblikke',     glyph: 'G', text: hp.glimmer }
    ];
  }
  // TCM (default) — Chinese radicals as discreet glyphs
  return [
    { label: t('hpInnerImage'),  glyph: '心', text: hp.innerImage },
    { label: t('hpDiet'),        glyph: '食', text: hp.diet },
    { label: t('hpMovement'),    glyph: '行', text: hp.movement },
    { label: t('hpAcupressure'), glyph: '穴', text: hp.acupressure },
    { label: t('hpAwareness'),   glyph: '觀', text: hp.awareness }
  ];
}

const LADDER_SVG = `<svg class="handout-seal handout-seal-ladder" viewBox="0 0 60 90" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round">
  <line x1="15" y1="6" x2="15" y2="84"/>
  <line x1="45" y1="6" x2="45" y2="84"/>
  <line x1="15" y1="20" x2="45" y2="20"/>
  <line x1="15" y1="45" x2="45" y2="45"/>
  <line x1="15" y1="70" x2="45" y2="70"/>
</svg>`;

const YINYANG_SEAL = `<img class="handout-seal" src="yinyang_highres.png" alt="" />`;

function renderClientHandout(opts) {
  const ctx = resolveHandoutContext(opts);
  if (!ctx) return false;
  currentHandoutContext = ctx;

  const titleEl = document.getElementById('handout-title');
  const dateEl = document.getElementById('handout-date');
  const clientEl = document.getElementById('handout-client');
  const summaryEl = document.getElementById('handout-summary');
  const practicesEl = document.getElementById('handout-practices');
  const footerEl = document.getElementById('handout-footer-text');
  const signatureEl = document.getElementById('handout-therapist-name');

  if (titleEl) titleEl.textContent = ctx.pattern.plainName || ctx.pattern.name;
  if (dateEl) dateEl.textContent = ctx.dateStr;
  if (summaryEl) summaryEl.textContent = ctx.pattern.summaryDescription || '';
  if (footerEl) footerEl.textContent = t('handoutFooter');

  // Letterhead seal: ladder for polyvagal, yinyang for TCM
  const sealWrap = document.getElementById('handout-seal-wrap');
  if (sealWrap) {
    sealWrap.innerHTML = ctx.pattern.kind === 'polyvagal' ? LADDER_SVG : YINYANG_SEAL;
  }

  if (clientEl) {
    if (ctx.clientId) {
      clientEl.textContent = ctx.clientId;
      clientEl.setAttribute('contenteditable', 'false');
    } else {
      clientEl.textContent = '';
      clientEl.setAttribute('contenteditable', 'true');
    }
  }

  if (signatureEl) {
    const stored = (() => { try { return localStorage.getItem(HANDOUT_THERAPIST_KEY) || ''; } catch (e) { return ''; } })();
    signatureEl.textContent = stored;
  }

  if (practicesEl) {
    practicesEl.innerHTML = buildHandoutPracticeRows(ctx.pattern).map(row => `
      <div class="handout-practice${row.accent ? ' handout-practice-accent' : ''}">
        <div class="handout-practice-glyph" aria-hidden="true">${row.glyph}</div>
        <div class="handout-practice-body">
          <div class="handout-practice-label">${escapeHtml(row.label)}</div>
          <p class="handout-practice-text">${escapeHtml(row.text)}</p>
        </div>
      </div>
    `).join('');
  }

  return true;
}

function showClientHandout(opts) {
  if (!renderClientHandout(opts)) return;
  showScreen('client-handout');
}

function sessionHasHandout(session) {
  if (!session || !Array.isArray(session.patterns) || !session.patterns.length) return false;
  const p = findPatternByName(session.patterns[0].name, session.kind);
  return !!(p && p.homePractice);
}

function showHandoutFromSession(session, clientId) {
  if (!session || !Array.isArray(session.patterns) || !session.patterns.length) return;
  const pattern = findPatternByName(session.patterns[0].name, session.kind);
  if (!pattern || !pattern.homePractice) {
    showToast(t('handoutMissing') || 'Hjem-anvisning ikke tilgængelig');
    return;
  }
  const dateStr = formatHandoutDate(new Date(session.date));
  showClientHandout({ pattern, dateStr, clientId });
}

async function shareHandout() {
  const ctx = currentHandoutContext;
  if (!ctx || !ctx.pattern || !ctx.pattern.id) return;

  // Build absolute URL to the share page so messaging apps can fetch
  // OG meta tags. Polyvagal links land on a dedicated page with the
  // ladder PNG as og:image; TCM links use the yinyang share page.
  const sharePage = ctx.pattern.kind === 'polyvagal' ? 'share-polyvagal.html' : 'share.html';
  const shareUrl = new URL(sharePage, window.location.href);
  shareUrl.searchParams.set('id', ctx.pattern.id);

  const patternName = ctx.pattern.plainName || ctx.pattern.name;
  const title = `Til dit hjem — ${patternName}`;
  const therapistName = (() => {
    try { return (localStorage.getItem(HANDOUT_THERAPIST_KEY) || '').trim(); } catch (e) { return ''; }
  })();

  // Short, warm message for SMS / WhatsApp / native share-sheet —
  // designed to fit even SMS without truncation.
  const shortText = `Her er din hjem-anvisning fra i dag — “${patternName}”. Tag den i dit eget tempo.`;

  // Mobile path: native share sheet (Mail, Messages, WhatsApp, etc.)
  if (navigator.share) {
    try {
      await navigator.share({ title, text: shortText, url: shareUrl.href });
      return;
    } catch (e) {
      if (e && e.name === 'AbortError') return;
      // fall through to mailto fallback
    }
  }

  // Desktop fallback: full email body with greeting, breathing room,
  // clearly placed link, and a signature line.
  const signature = therapistName
    ? `Med varme hilsner,\n${therapistName}`
    : 'Med varme hilsner';

  const body = [
    'Hej,',
    '',
    `Her er den lille hjem-anvisning fra i dag. Den følger det mønster, vi mærkede frem træde — “${patternName}” — og rummer nogle blide praksisser, du kan tage med ind i ugen.`,
    '',
    'Du finder den her:',
    shareUrl.href,
    '',
    'Tag det i dit eget tempo. Vælg det, der taler til dig — eller bare ét af felterne til at starte med. Hvis du vil dele med mig næste gang, kan du notere, hvad du har prøvet, og hvad du har mærket.',
    '',
    signature
  ].join('\n');

  const mailto = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
}

function setupClientHandout() {
  const backBtn = document.getElementById('btn-back-handout');
  const printBtn = document.getElementById('handout-print-btn');
  const shareBtn = document.getElementById('handout-share-btn');
  const signatureEl = document.getElementById('handout-therapist-name');

  if (backBtn) backBtn.addEventListener('click', () => {
    // Sessions return to the client-detail screen they came from;
    // SA results fall through to goBack().
    if (currentHandoutContext && currentHandoutContext.fromSession) {
      showClientDetail();
    } else {
      goBack();
    }
  });
  if (printBtn) printBtn.addEventListener('click', () => window.print());
  if (shareBtn) shareBtn.addEventListener('click', shareHandout);
  if (signatureEl) {
    signatureEl.addEventListener('blur', () => {
      try { localStorage.setItem(HANDOUT_THERAPIST_KEY, signatureEl.textContent.trim()); } catch (e) {}
    });
  }
}

// ============================================
// Client History (Phase 1) — local-only storage
// ============================================
const CLIENT_STORAGE_KEY = 'tcm-clients';
const CLIENT_STORAGE_VERSION = 1;
let activeClientId = null;

function loadClientStorage() {
  try {
    const raw = localStorage.getItem(CLIENT_STORAGE_KEY);
    if (!raw) return { version: CLIENT_STORAGE_VERSION, clients: {} };
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.clients) return { version: CLIENT_STORAGE_VERSION, clients: {} };
    return parsed;
  } catch (e) {
    console.error('Failed to load client storage', e);
    return { version: CLIENT_STORAGE_VERSION, clients: {} };
  }
}

function persistClientStorage(data) {
  try {
    localStorage.setItem(CLIENT_STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error('Failed to save client storage', e);
    return false;
  }
}

function listClients() {
  const data = loadClientStorage();
  return Object.values(data.clients).sort((a, b) => {
    const aDate = a.updated || a.created || '';
    const bDate = b.updated || b.created || '';
    return bDate.localeCompare(aDate);
  });
}

function getClientRecord(clientId) {
  const data = loadClientStorage();
  return data.clients[clientId] || null;
}

function saveClientSession(clientId, sessionData) {
  const trimmed = (clientId || '').trim();
  if (!trimmed) return false;
  const data = loadClientStorage();
  const now = new Date().toISOString();
  if (!data.clients[trimmed]) {
    data.clients[trimmed] = { id: trimmed, created: now, sessions: [] };
  }
  data.clients[trimmed].sessions.push({
    id: 'sess-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8),
    date: now,
    ...sessionData
  });
  data.clients[trimmed].updated = now;
  return persistClientStorage(data);
}

function deleteClientRecord(clientId) {
  const data = loadClientStorage();
  delete data.clients[clientId];
  return persistClientStorage(data);
}

function updateSessionFollowup(clientId, sessionId, areaKey, field, value) {
  const data = loadClientStorage();
  const client = data.clients[clientId];
  if (!client) return false;
  const session = client.sessions.find(s => s.id === sessionId);
  if (!session) return false;
  if (!session.followup) session.followup = {};
  if (areaKey === 'notes') {
    session.followup.notes = value;
  } else {
    if (!session.followup[areaKey]) session.followup[areaKey] = {};
    if (value === null) {
      delete session.followup[areaKey][field];
    } else {
      session.followup[areaKey][field] = value;
    }
  }
  client.updated = new Date().toISOString();
  return persistClientStorage(data);
}

function deleteClientSession(clientId, sessionId) {
  const data = loadClientStorage();
  const client = data.clients[clientId];
  if (!client) return false;
  client.sessions = client.sessions.filter(s => s.id !== sessionId);
  client.updated = new Date().toISOString();
  return persistClientStorage(data);
}

function buildSessionFromCurrentAnalysis(notes) {
  const { picked, tally } = computeSymptomResonance();
  const elementTally = computeElementResonance(tally);
  const meridianTally = computeMeridianResonance(tally);
  const patternResonance = computePatternResonance(picked);
  return {
    kind: 'tcm',
    symptoms: picked.map(s => s.symptom),
    organs: tally.slice(0, 5).map(o => ({ name: o.name, hits: o.hits, pct: Math.round(o.percentage * 100) })),
    element: elementTally[0] ? { name: elementTally[0].name, pct: Math.round(elementTally[0].percentage * 100) } : null,
    meridians: meridianTally.slice(0, 3).map(m => ({ name: m.ref.name, hits: m.hits })),
    patterns: patternResonance.slice(0, 3).map(p => ({ name: p.pattern.name, score: Math.round(p.score * 100) })),
    notes: (notes || '').trim()
  };
}

function buildPolyvagalSessionFromCurrentAnalysis(notes) {
  const picked = getPickedPolyvagalSymptoms();
  const stateTally = computePolyvagalStateResonance(picked);
  const patternResonance = computePolyvagalPatternResonance(picked);
  return {
    kind: 'polyvagal',
    symptoms: picked.map(s => s.name),
    states: stateTally.map(s => ({ id: s.id, name: s.name, pct: Math.round(s.pct * 100) })),
    patterns: patternResonance.slice(0, 3).map(p => ({ name: p.pattern.name, score: Math.round(p.score * 100) })),
    notes: (notes || '').trim()
  };
}

function buildPolyvagalSummary(sessionData) {
  // Practitioner-facing summary for a polyvagal session — paste into journal.
  const symptoms = sessionData.symptoms || [];
  const states = sessionData.states || [];
  const patterns = sessionData.patterns || [];
  if (symptoms.length === 0) return '';

  const dateLocale = 'da-DK';
  const dateStr = new Date(sessionData.date || Date.now()).toLocaleDateString(dateLocale, { day: 'numeric', month: 'long', year: 'numeric' });

  const lines = [];
  lines.push(`Polyvagal-analyse — ${dateStr}`);
  lines.push('');

  lines.push(`Klienten oplever (${symptoms.length} symptomer):`);
  symptoms.forEach(s => lines.push(`- ${s}`));
  lines.push('');

  if (states.length) {
    lines.push('Fordeling på stigen:');
    states.forEach(s => lines.push(`- ${s.name}: ${s.pct}%`));
    lines.push('');
  }

  if (patterns[0]) {
    const pattern = findPatternByName(patterns[0].name, 'polyvagal');
    lines.push('Primært mønster:');
    lines.push(`${(pattern && pattern.plainName) || patterns[0].name} — ${intensityWord(patterns[0].score)}`);
    if (pattern && pattern.summaryDescription) {
      lines.push(pattern.summaryDescription);
    }
    lines.push('');
  }

  if (patterns.length > 1) {
    lines.push('Andre mønstre der spiller med:');
    patterns.slice(1).forEach(p => {
      const pl = findPatternByName(p.name, 'polyvagal');
      lines.push(`- ${(pl && pl.plainName) || p.name} (${intensityWord(p.score)})`);
    });
    lines.push('');
  }

  if (sessionData.notes) {
    lines.push('Noter:');
    lines.push(sessionData.notes);
    lines.push('');
  }

  lines.push('—');
  lines.push('Dette er en indgangsvinkel — ikke en diagnose.');
  return lines.join('\n');
}

function escapeHtml(str) {
  return String(str || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function intensityWord(pct) {
  const isDa = getLanguage() === 'da';
  if (pct < 40) return isDa ? 'antydet' : 'hint of';
  if (pct < 60) return isDa ? 'tydelig' : 'clear';
  if (pct < 80) return isDa ? 'markant' : 'marked';
  return isDa ? 'udtalt' : 'pronounced';
}

function patternPlainName(name, kind) {
  const p = findPatternByName(name, kind);
  return (p && p.plainName) ? p.plainName : name;
}

// ----- Save dialog -----
let saveDialogKind = 'tcm';

function openSaveDialog(kind = 'tcm') {
  saveDialogKind = kind;
  const dialog = document.getElementById('save-dialog');
  if (!dialog) return;
  dialog.dataset.saveKind = kind;
  const existingClients = listClients();
  const select = dialog.querySelector('#save-existing-client');
  const newInput = dialog.querySelector('#save-new-client-id');
  const notes = dialog.querySelector('#save-notes');
  const titleEl = dialog.querySelector('#save-dialog-title');
  const tabExisting = dialog.querySelector('[data-save-tab="existing"]');
  const tabNew = dialog.querySelector('[data-save-tab="new"]');
  const labelClientId = dialog.querySelector('#save-label-clientid');
  const hintClientId = dialog.querySelector('#save-hint-clientid');
  const labelNotes = dialog.querySelector('#save-label-notes');
  const cancelBtn = dialog.querySelector('[data-save-cancel]');
  const commitBtn = dialog.querySelector('[data-save-commit]');

  if (titleEl) titleEl.textContent = t('saveDialogTitle');
  if (tabExisting) tabExisting.textContent = t('saveDialogExisting');
  if (tabNew) tabNew.textContent = t('saveDialogNew');
  if (labelClientId) labelClientId.textContent = t('saveDialogClientId');
  if (hintClientId) hintClientId.textContent = t('saveDialogClientIdHint');
  if (labelNotes) labelNotes.textContent = t('saveDialogNotes');
  if (cancelBtn) cancelBtn.textContent = t('saveDialogCancel');
  if (commitBtn) commitBtn.textContent = t('saveDialogSave');
  if (notes) notes.placeholder = t('saveDialogNotesPlaceholder');

  if (select) {
    select.innerHTML = `<option value="">${escapeHtml(t('saveDialogPickClient'))}</option>` +
      existingClients.map(c => `<option value="${escapeHtml(c.id)}">${escapeHtml(c.id)}</option>`).join('');
  }
  if (newInput) newInput.value = '';
  if (notes) notes.value = '';

  const startMode = existingClients.length > 0 ? 'existing' : 'new';
  setSaveDialogMode(startMode);

  // Hide "existing" tab if no clients yet
  if (tabExisting) tabExisting.hidden = existingClients.length === 0;

  dialog.hidden = false;
  dialog.classList.add('open');
  document.body.classList.add('save-dialog-open');
}

function closeSaveDialog() {
  const dialog = document.getElementById('save-dialog');
  if (!dialog) return;
  dialog.classList.remove('open');
  dialog.hidden = true;
  document.body.classList.remove('save-dialog-open');
}

function setSaveDialogMode(mode) {
  const dialog = document.getElementById('save-dialog');
  if (!dialog) return;
  dialog.dataset.mode = mode;
  dialog.querySelectorAll('[data-save-tab]').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.saveTab === mode);
  });
}

function commitSaveDialog() {
  const dialog = document.getElementById('save-dialog');
  if (!dialog) return;
  const mode = dialog.dataset.mode || 'new';
  const select = dialog.querySelector('#save-existing-client');
  const newInput = dialog.querySelector('#save-new-client-id');
  const notes = dialog.querySelector('#save-notes');
  let clientId = '';
  if (mode === 'existing') {
    clientId = (select?.value || '').trim();
  } else {
    clientId = (newInput?.value || '').trim();
  }
  if (!clientId) {
    if (mode === 'existing' && select) select.focus();
    if (mode === 'new' && newInput) newInput.focus();
    return;
  }
  const sessionData = saveDialogKind === 'polyvagal'
    ? buildPolyvagalSessionFromCurrentAnalysis(notes?.value || '')
    : buildSessionFromCurrentAnalysis(notes?.value || '');
  const ok = saveClientSession(clientId, sessionData);
  if (ok) {
    closeSaveDialog();
    showSavedToast();
  }
}

function showSavedToast() {
  showToast(t('saveDialogSaved'));
}

function showToast(text, duration = 2200) {
  const toast = document.getElementById('save-toast');
  if (!toast) return;
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}

// ----- Export / Import (Phase 3) -----
function exportClientArchive() {
  const data = loadClientStorage();
  const out = {
    version: CLIENT_STORAGE_VERSION,
    exported: new Date().toISOString(),
    clients: data.clients || {}
  };
  const json = JSON.stringify(out, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  a.href = url;
  a.download = `tcm-klienter-${today}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function importClientArchive(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        if (!parsed || typeof parsed !== 'object') throw new Error('Invalid format');
        if (!parsed.clients || typeof parsed.clients !== 'object') throw new Error('No clients in file');
        const existing = loadClientStorage();
        let importedCount = 0;
        for (const [id, client] of Object.entries(parsed.clients)) {
          if (!client || typeof client !== 'object' || !Array.isArray(client.sessions)) continue;
          if (!existing.clients[id]) {
            existing.clients[id] = client;
          } else {
            const existingSessionIds = new Set(existing.clients[id].sessions.map(s => s.id));
            for (const s of client.sessions) {
              if (!existingSessionIds.has(s.id)) {
                existing.clients[id].sessions.push(s);
              }
            }
            existing.clients[id].updated = new Date().toISOString();
          }
          importedCount++;
        }
        persistClientStorage(existing);
        resolve(importedCount);
      } catch (e) {
        reject(e);
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}

// ----- Client list screen -----
function renderClientsScreen() {
  const screen = document.getElementById('screen-clients');
  if (!screen) return;
  const titleEl = screen.querySelector('#clients-title');
  const subEl = screen.querySelector('#clients-subtitle');
  const listEl = screen.querySelector('#clients-list');
  const emptyEl = screen.querySelector('#clients-empty');
  const discEl = screen.querySelector('#clients-disclaimer');
  // Backup button labels live on the global backup-dialog now, not in this screen.
  const exportLabel = document.getElementById('export-archive-label');
  const importLabel = document.getElementById('import-archive-label');
  if (titleEl) titleEl.textContent = t('clientsTitle');
  if (subEl) subEl.textContent = t('clientsSubtitle');
  if (discEl) discEl.textContent = t('clientsDisclaimer');
  if (exportLabel) exportLabel.textContent = t('exportArchive');
  if (importLabel) importLabel.textContent = t('importArchive');
  const hintEl = screen.querySelector('#clients-actions-hint');
  if (hintEl) hintEl.textContent = t('clientsActionsHint');

  const clients = listClients();
  if (!clients.length) {
    if (listEl) listEl.innerHTML = '';
    if (emptyEl) {
      emptyEl.textContent = t('clientsEmpty');
      emptyEl.hidden = false;
    }
    return;
  }
  if (emptyEl) emptyEl.hidden = true;
  if (!listEl) return;
  const dateLocale = getLanguage() === 'da' ? 'da-DK' : 'en-US';
  listEl.innerHTML = clients.map(c => {
    const sessionCount = c.sessions.length;
    const lastDate = c.sessions[c.sessions.length - 1]?.date;
    const lastStr = lastDate ? new Date(lastDate).toLocaleDateString(dateLocale, { day: 'numeric', month: 'short', year: 'numeric' }) : '—';
    const sessionLabel = sessionCount === 1 ? t('clientsSessionLabel') : t('clientsSessionsLabel');
    return `
      <button class="client-card" data-client-id="${escapeHtml(c.id)}" type="button">
        <div class="client-card-id">${escapeHtml(c.id)}</div>
        <div class="client-card-meta">${sessionCount} ${escapeHtml(sessionLabel)} · ${escapeHtml(t('clientsLastSession'))} ${escapeHtml(lastStr)}</div>
        <svg class="client-card-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    `;
  }).join('');
  listEl.querySelectorAll('[data-client-id]').forEach(card => {
    card.addEventListener('click', () => {
      activeClientId = card.dataset.clientId;
      showClientDetail();
    });
  });
}

function showClientsScreen() {
  renderClientsScreen();
  showScreen('clients');
}

// ----- Progression visualization (Phase 2) -----
function elementColor(name) {
  const map = {
    'Træ': '#5cc98e', 'Wood': '#5cc98e',
    'Ild': '#e88585', 'Fire': '#e88585',
    'Jord': '#deb87a', 'Earth': '#deb87a',
    'Metal': '#a8c4d6',
    'Vand': '#7ba4da', 'Water': '#7ba4da'
  };
  return map[name] || 'var(--accent-gold)';
}

function intensityWidth(pct) {
  if (pct < 40) return 28;
  if (pct < 60) return 52;
  if (pct < 80) return 76;
  return 100;
}

function computeOrganTallyFromSymptoms(symptomNames) {
  if (!Array.isArray(symptomNames) || !symptomReference) return [];
  const scores = {};
  const hits = {};
  symptomNames.forEach(name => {
    const sym = symptomReference.find(r => r.symptom === name);
    if (!sym) return;
    const w = sym.organs.length > 0 ? 1 / sym.organs.length : 0;
    sym.organs.forEach(org => {
      scores[org] = (scores[org] || 0) + w;
      hits[org] = (hits[org] || 0) + 1;
    });
  });
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  return Object.entries(scores).map(([name, score]) => ({
    name, score, hits: hits[name] || 0,
    percentage: totalScore > 0 ? score / totalScore : 0
  }));
}

function renderElementPentagonSVG(symptomNames) {
  const tally = computeOrganTallyFromSymptoms(symptomNames);
  const elTally = computeElementResonance(tally);
  const elMap = { 'Træ': 0, 'Ild': 0, 'Jord': 0, 'Metal': 0, 'Vand': 0 };
  elTally.forEach(e => { if (e.name in elMap) elMap[e.name] = e.percentage; });

  // Clockwise from top: Ild, Jord, Metal, Vand, Træ
  const order = [
    { el: 'Ild',   angle: -90,  label: 'I' },
    { el: 'Jord',  angle: -18,  label: 'J' },
    { el: 'Metal', angle: 54,   label: 'M' },
    { el: 'Vand',  angle: 126,  label: 'V' },
    { el: 'Træ',   angle: 198,  label: 'T' }
  ];
  const cx = 50, cy = 52, rOut = 32;

  const verts = order.map(o => {
    const a = (o.angle * Math.PI) / 180;
    const pct = elMap[o.el] || 0;
    return {
      el: o.el,
      label: o.label,
      angle: o.angle,
      pct,
      x: cx + Math.cos(a) * rOut,
      y: cy + Math.sin(a) * rOut,
      color: elementColor(o.el)
    };
  });

  // Outer reference pentagon (faint)
  const outerPts = verts.map(v => `${v.x.toFixed(1)},${v.y.toFixed(1)}`).join(' ');
  const outerPolygon = `<polygon points="${outerPts}" fill="none" stroke="rgba(184,149,46,0.18)" stroke-width="0.6"/>`;

  // Inner polygon: vertices pulled toward center based on percentage
  // Map: 0% -> 0.15 of radius, 50%+ -> 1.0
  const scaleFor = p => Math.max(0.15, Math.min(1.0, 0.15 + (p / 0.5) * 0.85));
  const innerVerts = verts.map(v => {
    const s = scaleFor(v.pct);
    return {
      ...v,
      ix: cx + (v.x - cx) * s,
      iy: cy + (v.y - cy) * s
    };
  });
  const innerPts = innerVerts.map(v => `${v.ix.toFixed(1)},${v.iy.toFixed(1)}`).join(' ');
  const innerPolygon = `<polygon points="${innerPts}" fill="rgba(184,149,46,0.10)" stroke="rgba(232,224,208,0.45)" stroke-width="0.7"/>`;

  // Colored dots at inner polygon vertices, slightly bigger for stronger element
  const dots = innerVerts.map(v => {
    const r = 1.6 + Math.min(v.pct, 0.5) / 0.5 * 1.8;
    return `<circle cx="${v.ix.toFixed(1)}" cy="${v.iy.toFixed(1)}" r="${r.toFixed(1)}" fill="${v.color}"/>`;
  }).join('');

  // Labels outside pentagon
  const labels = verts.map(v => {
    const a = (v.angle * Math.PI) / 180;
    const lx = cx + Math.cos(a) * (rOut + 7);
    const ly = cy + Math.sin(a) * (rOut + 7) + 2;
    return `<text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="middle" fill="${v.color}" font-size="8" font-family="var(--font-sans)" opacity="0.8">${v.label}</text>`;
  }).join('');

  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="element-pentagon">${outerPolygon}${innerPolygon}${dots}${labels}</svg>`;
}

function renderPolyvagalProgressionHTML(sessionsAsc) {
  if (!sessionsAsc || sessionsAsc.length < 2) return '';

  const dateLocale = 'da-DK';
  const fmtDate = d => new Date(d).toLocaleDateString(dateLocale, { day: 'numeric', month: 'short' });
  const stateColor = id => {
    const s = polyvagalStates.find(x => x.id === id);
    return s ? s.color : 'var(--accent-gold)';
  };

  const rows = sessionsAsc.map((s, i) => {
    const dateStr = fmtDate(s.date);
    const num = i + 1;
    const pat = s.patterns?.[0];
    if (!pat) {
      return `
        <div class="progress-row">
          <div class="progress-meta-col">
            <div class="progress-num">#${num}</div>
            <div class="progress-date">${escapeHtml(dateStr)}</div>
          </div>
          <div class="progress-bar-col">
            <div class="progress-bar-track"></div>
            <div class="progress-pattern progress-pattern-none">Intet klart mønster</div>
          </div>
        </div>
      `;
    }
    const plainName = patternPlainName(pat.name, 'polyvagal');
    const intensity = intensityWord(pat.score);
    const width = intensityWidth(pat.score);
    const pattern = findPatternByName(pat.name, 'polyvagal');
    const primaryStateId = pattern && pattern.primaryState;
    const color = primaryStateId && primaryStateId !== 'mixed' && primaryStateId !== 'sympatisk-dorsal'
      ? stateColor(primaryStateId)
      : 'var(--accent-gold)';
    const stateName = primaryStateId === 'sympatisk-dorsal' ? 'blandet'
                    : primaryStateId === 'mixed' ? 'skift'
                    : (polyvagalStates.find(x => x.id === primaryStateId) || {}).name || '';
    return `
      <div class="progress-row">
        <div class="progress-meta-col">
          <div class="progress-num">#${num}</div>
          <div class="progress-date">${escapeHtml(dateStr)}</div>
        </div>
        <div class="progress-bar-col">
          <div class="progress-bar-track">
            <div class="progress-bar-fill" style="width: ${width}%; background: ${color}"></div>
          </div>
          <div class="progress-pattern">
            <div class="progress-pattern-name">${escapeHtml(plainName)}</div>
            <div class="progress-pattern-meta"><span class="progress-pattern-intensity">${escapeHtml(intensity)}</span>${stateName ? ` · ${escapeHtml(stateName)}` : ''}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Mini ladder per session showing state-distribution.
  const laddersHTML = `
    <div class="pv-progress-ladders">
      <div class="pv-progress-ladders-label">Bevægelse på stigen</div>
      <div class="pv-progress-ladders-row">
        ${sessionsAsc.map((s, i) => {
          const states = Array.isArray(s.states) ? s.states : [];
          const byId = Object.fromEntries(states.map(x => [x.id, x.pct || 0]));
          const v = byId.ventral || 0;
          const sy = byId.sympatisk || 0;
          const d = byId.dorsal || 0;
          const r = pct => 3 + (pct / 100) * 7;
          const a = pct => 0.25 + (pct / 100) * 0.6;
          return `
            <div class="pv-progress-cell">
              <svg viewBox="0 0 80 100" class="pv-progress-ladder">
                <line x1="22" y1="14" x2="22" y2="86" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                <line x1="58" y1="14" x2="58" y2="86" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                <line x1="22" y1="22" x2="58" y2="22" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                <line x1="22" y1="50" x2="58" y2="50" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                <line x1="22" y1="78" x2="58" y2="78" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                <circle cx="40" cy="22" r="${r(v)}" fill="${stateColor('ventral')}" opacity="${a(v)}"/>
                <circle cx="40" cy="50" r="${r(sy)}" fill="${stateColor('sympatisk')}" opacity="${a(sy)}"/>
                <circle cx="40" cy="78" r="${r(d)}" fill="${stateColor('dorsal')}" opacity="${a(d)}"/>
              </svg>
              <div class="pv-progress-cell-meta">#${i + 1} · ${escapeHtml(fmtDate(s.date))}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // Symptom diff between latest and previous polyvagal session
  let diffHTML = '';
  const last = sessionsAsc[sessionsAsc.length - 1];
  const prev = sessionsAsc[sessionsAsc.length - 2];
  const lastSyms = new Set(last.symptoms || []);
  const prevSyms = new Set(prev.symptoms || []);
  const newOnes = [...lastSyms].filter(s => !prevSyms.has(s));
  const goneOnes = [...prevSyms].filter(s => !lastSyms.has(s));
  if (newOnes.length || goneOnes.length) {
    diffHTML = `
      <div class="symptom-diff">
        <div class="symptom-diff-label">Siden sidst</div>
        ${newOnes.length ? `
          <div class="diff-row diff-new">
            <span class="diff-arrow">↑</span>
            <span class="diff-label">Kommet til:</span>
            <span class="diff-syms">${newOnes.map(s => `<span class="diff-chip diff-chip-new">${escapeHtml(s)}</span>`).join('')}</span>
          </div>` : ''}
        ${goneOnes.length ? `
          <div class="diff-row diff-gone">
            <span class="diff-arrow">↓</span>
            <span class="diff-label">Sluppet:</span>
            <span class="diff-syms">${goneOnes.map(s => `<span class="diff-chip diff-chip-gone">${escapeHtml(s)}</span>`).join('')}</span>
          </div>` : ''}
      </div>
    `;
  } else {
    diffHTML = `
      <div class="symptom-diff symptom-diff-stable">
        <div class="symptom-diff-label">Siden sidst</div>
        <div class="diff-row"><span class="diff-stable">Mønstret er stabilt</span></div>
      </div>
    `;
  }

  return `
    <div class="client-progress client-progress-polyvagal">
      <h3 class="client-progress-title">Forløb — Polyvagal</h3>
      <p class="client-progress-lead">Sådan har stigen bevæget sig på tværs af sessioner</p>
      <div class="progress-rows">${rows}</div>
      ${laddersHTML}
      ${diffHTML}
    </div>
  `;
}

function renderProgressionHTML(sessionsAsc) {
  if (!sessionsAsc || sessionsAsc.length < 2) return '';

  const dateLocale = getLanguage() === 'da' ? 'da-DK' : 'en-US';
  const fmtDate = d => new Date(d).toLocaleDateString(dateLocale, { day: 'numeric', month: 'short' });

  const rows = sessionsAsc.map((s, i) => {
    const dateStr = fmtDate(s.date);
    const num = i + 1;
    const pat = s.patterns?.[0];
    if (!pat) {
      return `
        <div class="progress-row">
          <div class="progress-meta-col">
            <div class="progress-num">#${num}</div>
            <div class="progress-date">${escapeHtml(dateStr)}</div>
          </div>
          <div class="progress-bar-col">
            <div class="progress-bar-track"></div>
            <div class="progress-pattern progress-pattern-none">${escapeHtml(t('progressNoPattern'))}</div>
          </div>
        </div>
      `;
    }
    const plainName = patternPlainName(pat.name);
    const intensity = intensityWord(pat.score);
    const width = intensityWidth(pat.score);
    const elName = s.element?.name || '';
    const color = elementColor(elName);
    return `
      <div class="progress-row">
        <div class="progress-meta-col">
          <div class="progress-num">#${num}</div>
          <div class="progress-date">${escapeHtml(dateStr)}</div>
        </div>
        <div class="progress-bar-col">
          <div class="progress-bar-track">
            <div class="progress-bar-fill" style="width: ${width}%; background: ${color}"></div>
          </div>
          <div class="progress-pattern">
            <div class="progress-pattern-name">${escapeHtml(plainName)}</div>
            <div class="progress-pattern-meta"><span class="progress-pattern-intensity">${escapeHtml(intensity)}</span>${elName ? ` · ${escapeHtml(elName)}-elementet` : ''}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Symptom diff between latest and previous
  let diffHTML = '';
  const last = sessionsAsc[sessionsAsc.length - 1];
  const prev = sessionsAsc[sessionsAsc.length - 2];
  const lastSyms = new Set(last.symptoms || []);
  const prevSyms = new Set(prev.symptoms || []);
  const newOnes = [...lastSyms].filter(s => !prevSyms.has(s));
  const goneOnes = [...prevSyms].filter(s => !lastSyms.has(s));
  if (newOnes.length || goneOnes.length) {
    diffHTML = `
      <div class="symptom-diff">
        <div class="symptom-diff-label">${escapeHtml(t('progressDiffTitle'))}</div>
        ${newOnes.length ? `
          <div class="diff-row diff-new">
            <span class="diff-arrow">↑</span>
            <span class="diff-label">${escapeHtml(t('progressDiffNew'))}:</span>
            <span class="diff-syms">${newOnes.map(s => `<span class="diff-chip diff-chip-new">${escapeHtml(s)}</span>`).join('')}</span>
          </div>` : ''}
        ${goneOnes.length ? `
          <div class="diff-row diff-gone">
            <span class="diff-arrow">↓</span>
            <span class="diff-label">${escapeHtml(t('progressDiffGone'))}:</span>
            <span class="diff-syms">${goneOnes.map(s => `<span class="diff-chip diff-chip-gone">${escapeHtml(s)}</span>`).join('')}</span>
          </div>` : ''}
      </div>
    `;
  } else {
    diffHTML = `
      <div class="symptom-diff symptom-diff-stable">
        <div class="symptom-diff-label">${escapeHtml(t('progressDiffTitle'))}</div>
        <div class="diff-row"><span class="diff-stable">${escapeHtml(t('progressDiffStable'))}</span></div>
      </div>
    `;
  }

  // Element-balance pentagons row (one per session, oldest first)
  const dateLocaleShort = getLanguage() === 'da' ? 'da-DK' : 'en-US';
  const fmtShort = d => new Date(d).toLocaleDateString(dateLocaleShort, { day: 'numeric', month: 'short' });
  const pentagonsHTML = `
    <div class="element-balance">
      <div class="element-balance-label">${escapeHtml(t('progressElementsTitle'))}</div>
      <div class="element-balance-row">
        ${sessionsAsc.map((s, i) => `
          <div class="element-pentagon-cell">
            ${renderElementPentagonSVG(s.symptoms || [])}
            <div class="element-pentagon-meta">#${i+1} · ${escapeHtml(fmtShort(s.date))}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  return `
    <div class="client-progress">
      <h3 class="client-progress-title">${escapeHtml(t('progressTitle'))}</h3>
      <p class="client-progress-lead">${escapeHtml(t('progressLead'))}</p>
      <div class="progress-rows">${rows}</div>
      ${pentagonsHTML}
      ${diffHTML}
    </div>
  `;
}

// ----- Client detail screen -----
function renderClientDetail() {
  const screen = document.getElementById('screen-client-detail');
  if (!screen || !activeClientId) return;
  const client = getClientRecord(activeClientId);
  if (!client) {
    showClientsScreen();
    return;
  }
  const titleEl = screen.querySelector('#client-detail-title');
  const subEl = screen.querySelector('#client-detail-subtitle');
  const listEl = screen.querySelector('#client-sessions-list');
  const emptyEl = screen.querySelector('#client-sessions-empty');
  const deleteBtn = screen.querySelector('#client-delete-btn');
  if (titleEl) titleEl.textContent = client.id;
  const dateLocale = getLanguage() === 'da' ? 'da-DK' : 'en-US';
  if (subEl) {
    const count = client.sessions.length;
    const label = count === 1 ? t('clientsSessionLabel') : t('clientsSessionsLabel');
    subEl.textContent = `${count} ${label}`;
  }
  if (deleteBtn) deleteBtn.textContent = t('clientDetailDeleteClient');

  const progressEl = screen.querySelector('#client-progress-wrap');

  if (!client.sessions.length) {
    if (listEl) listEl.innerHTML = '';
    if (progressEl) progressEl.innerHTML = '';
    if (emptyEl) {
      emptyEl.textContent = t('clientDetailEmpty');
      emptyEl.hidden = false;
    }
    return;
  }
  if (emptyEl) emptyEl.hidden = true;
  if (!listEl) return;

  // Progression block (only if 2+ sessions of the same kind)
  if (progressEl) {
    const sessionsAsc = [...client.sessions].sort((a, b) => a.date.localeCompare(b.date));
    const tcmSessions = sessionsAsc.filter(s => s.kind !== 'polyvagal');
    const pvSessions = sessionsAsc.filter(s => s.kind === 'polyvagal');
    let html = '';
    if (tcmSessions.length >= 2) html += renderProgressionHTML(tcmSessions);
    if (pvSessions.length >= 2) html += renderPolyvagalProgressionHTML(pvSessions);
    progressEl.innerHTML = html;
  }

  const sessions = [...client.sessions].sort((a, b) => b.date.localeCompare(a.date));
  listEl.innerHTML = sessions.map((s, i) => {
    const dateStr = new Date(s.date).toLocaleDateString(dateLocale, { day: 'numeric', month: 'long', year: 'numeric' });
    const primaryOrgan = s.organs?.[0];
    const primaryPattern = s.patterns?.[0];
    const num = sessions.length - i;
    return `
      <div class="session-card" data-session-id="${escapeHtml(s.id)}">
        <button class="session-card-header" type="button" data-session-toggle>
          <div class="session-card-meta">
            <span class="session-card-num">#${num}</span>
            <span class="session-card-date">${escapeHtml(dateStr)}</span>
          </div>
          <div class="session-card-summary">
            ${s.kind === 'polyvagal' ? `<span class="session-card-kind">Polyvagal</span>` : ''}
            ${primaryOrgan ? `<span class="session-card-organ">${escapeHtml(primaryOrgan.name)}</span>` : ''}
            ${s.kind === 'polyvagal' && Array.isArray(s.states) && s.states[0] ? `<span class="session-card-organ">${escapeHtml(s.states[0].name)} ${s.states[0].pct}%</span>` : ''}
            ${primaryPattern ? `<span class="session-card-pattern">${escapeHtml(patternPlainName(primaryPattern.name, s.kind))} <span class="session-card-intensity">— ${escapeHtml(intensityWord(primaryPattern.score))}</span></span>` : `<span class="session-card-pattern session-card-pattern-none">${escapeHtml(t('sessionNoPattern'))}</span>`}
          </div>
          <svg class="session-card-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="session-card-body">
          ${s.symptoms?.length ? `
            <div class="session-card-section">
              <div class="session-card-section-label">${escapeHtml(t('sessionSymptoms'))}</div>
              <div class="session-card-chips">
                ${s.symptoms.map(sym => `<span class="session-card-chip">${escapeHtml(sym)}</span>`).join('')}
              </div>
            </div>` : ''}
          ${s.kind === 'polyvagal' && Array.isArray(s.states) && s.states.length ? `
            <div class="session-card-section">
              <div class="session-card-section-label">Tilstande på stigen</div>
              <div class="session-card-row">${s.states.map(st => `${escapeHtml(st.name)} ${st.pct}%`).join(' · ')}</div>
            </div>` : ''}
          ${s.kind !== 'polyvagal' && s.element ? `
            <div class="session-card-section">
              <div class="session-card-section-label">Element</div>
              <div class="session-card-row">${escapeHtml(s.element.name)}-elementet — ${escapeHtml(intensityWord(s.element.pct))}</div>
            </div>` : ''}
          ${s.kind !== 'polyvagal' && s.organs?.length ? `
            <div class="session-card-section">
              <div class="session-card-section-label">Organer</div>
              <div class="session-card-row">${s.organs.map(o => `${escapeHtml(o.name)} (${o.hits})`).join(' · ')}</div>
            </div>` : ''}
          ${s.patterns?.length ? `
            <div class="session-card-section">
              <div class="session-card-section-label">Mønstre</div>
              <div class="session-card-row">${s.patterns.map(p => `${escapeHtml(patternPlainName(p.name, s.kind))} (${escapeHtml(intensityWord(p.score))})`).join(' · ')}</div>
            </div>` : ''}
          ${s.notes ? `
            <div class="session-card-section">
              <div class="session-card-section-label">${escapeHtml(t('sessionNotes'))}</div>
              <div class="session-card-notes">${escapeHtml(s.notes)}</div>
            </div>` : ''}
          ${renderFollowupSectionHTML(s)}
          <div class="session-actions">
            ${sessionHasHandout(s) ? `
              <button class="session-action-btn session-action-handout" type="button" data-session-handout="${escapeHtml(s.id)}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="18" height="18"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>
                <span class="session-action-text">
                  <span class="session-action-label">${escapeHtml(t('saClientHandout'))}</span>
                  <span class="session-action-hint">${escapeHtml(t('sessionHandoutHint'))}</span>
                </span>
              </button>` : ''}
            <button class="session-action-btn session-action-summary" type="button" data-session-copy="${escapeHtml(s.id)}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="18" height="18"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span class="session-action-text">
                <span class="session-action-label">${escapeHtml(t('sessionCopySummary'))}</span>
                <span class="session-action-hint">${escapeHtml(t('sessionCopySummaryHint'))}</span>
              </span>
            </button>
          </div>
          <button class="session-delete-btn" type="button" data-session-delete="${escapeHtml(s.id)}">${escapeHtml(t('clientDetailDeleteSession'))}</button>
        </div>
      </div>
    `;
  }).join('');

  listEl.querySelectorAll('[data-session-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.session-card');
      if (card) card.classList.toggle('open');
    });
  });
  listEl.querySelectorAll('[data-session-delete]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm(t('clientDetailConfirmDeleteSession'))) {
        deleteClientSession(activeClientId, btn.dataset.sessionDelete);
        renderClientDetail();
      }
    });
  });
  listEl.querySelectorAll('[data-session-handout]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const client = getClientRecord(activeClientId);
      const session = client && client.sessions.find(x => x.id === btn.dataset.sessionHandout);
      if (session) showHandoutFromSession(session, activeClientId);
    });
  });
  listEl.querySelectorAll('[data-session-copy]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const client = getClientRecord(activeClientId);
      const session = client && client.sessions.find(x => x.id === btn.dataset.sessionCopy);
      if (!session) return;
      const text = buildSymptomAnalysisSummary(session);
      if (!text) return;
      const labelEl = btn.querySelector('.session-action-label');
      const originalLabel = labelEl ? labelEl.textContent : '';
      const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent || '');
      const shortcut = isMac ? '⌘V' : 'Ctrl+V';
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.style.position = 'fixed';
          ta.style.left = '-9999px';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        }
        if (labelEl) labelEl.textContent = 'Kopieret ✓';
        btn.classList.add('session-action-btn-copied');
        showToast(`Resumé kopieret. Indsæt nu med ${shortcut} i din notes-app eller dit journalsystem.`, 4000);
        setTimeout(() => {
          if (labelEl) labelEl.textContent = originalLabel;
          btn.classList.remove('session-action-btn-copied');
        }, 2400);
      } catch (err) {
        console.error('Failed to copy session summary', err);
        if (labelEl) labelEl.textContent = 'Kunne ikke kopiere — prøv igen';
        showToast('Kunne ikke kopiere resuméet. Prøv igen, eller kontakt support.', 4000);
        setTimeout(() => {
          if (labelEl) labelEl.textContent = originalLabel;
        }, 2400);
      }
    });
  });
  // Followup pill clicks
  listEl.querySelectorAll('[data-followup-set]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const [sessionId, areaKey, field, value] = btn.dataset.followupSet.split('|');
      const isActive = btn.classList.contains('active');
      // Toggle: clicking active deselects; clicking inactive selects
      updateSessionFollowup(activeClientId, sessionId, areaKey, field, isActive ? null : value);
      renderClientDetail();
      // Re-open the same session
      const reopened = listEl.querySelector(`.session-card[data-session-id="${sessionId}"]`);
      if (reopened) reopened.classList.add('open');
    });
  });
  // Followup notes textarea
  listEl.querySelectorAll('[data-followup-notes]').forEach(textarea => {
    let saveTimer;
    textarea.addEventListener('input', () => {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => {
        updateSessionFollowup(activeClientId, textarea.dataset.followupNotes, 'notes', null, textarea.value);
      }, 400);
    });
    // Stop propagation on click so it doesn't toggle the card
    textarea.addEventListener('click', (e) => e.stopPropagation());
  });
}

function renderFollowupSectionHTML(session) {
  const fb = session.followup || {};
  const areas = session.kind === 'polyvagal' ? [
    { key: 'innerImage',  label: 'Indre billede' },
    { key: 'orientation', label: 'Orientering' },
    { key: 'movement',    label: 'Bevægelse' },
    { key: 'anchor',      label: 'Anker' },
    { key: 'glimmer',     label: 'Øjeblikke' }
  ] : [
    { key: 'diet', labelKey: 'hpDiet' },
    { key: 'movement', labelKey: 'hpMovement' },
    { key: 'acupressure', labelKey: 'hpAcupressure' },
    { key: 'awareness', labelKey: 'hpAwareness' }
  ];
  const triedOpts = [
    { v: 'nej', label: 'followupTriedNo' },
    { v: 'lidt', label: 'followupTriedSome' },
    { v: 'ja', label: 'followupTriedYes' }
  ];
  const helpedOpts = [
    { v: 'ikke', label: 'followupHelpedNo' },
    { v: 'lidt', label: 'followupHelpedSome' },
    { v: 'tydeligt', label: 'followupHelpedClearly' }
  ];

  const renderPills = (areaKey, field, opts, currentValue) => opts.map(opt =>
    `<button type="button" class="followup-pill ${currentValue === opt.v ? 'active' : ''}" data-followup-set="${escapeHtml(session.id)}|${areaKey}|${field}|${opt.v}">${escapeHtml(t(opt.label))}</button>`
  ).join('');

  return `
    <div class="session-card-section session-followup">
      <div class="session-card-section-label">${escapeHtml(t('followupTitle'))}</div>
      <p class="followup-lead">${escapeHtml(t('followupLead'))}</p>
      ${areas.map(area => {
        const data = fb[area.key] || {};
        const label = area.label || t(area.labelKey);
        return `
          <div class="followup-row">
            <div class="followup-area-label">${escapeHtml(label)}</div>
            <div class="followup-question">
              <span class="followup-question-label">${escapeHtml(t('followupTriedQ'))}</span>
              <div class="followup-pills">${renderPills(area.key, 'tried', triedOpts, data.tried)}</div>
            </div>
            <div class="followup-question">
              <span class="followup-question-label">${escapeHtml(t('followupHelpedQ'))}</span>
              <div class="followup-pills">${renderPills(area.key, 'helped', helpedOpts, data.helped)}</div>
            </div>
          </div>
        `;
      }).join('')}
      <div class="followup-notes-row">
        <label class="followup-notes-label">${escapeHtml(t('followupNotesLabel'))}</label>
        <textarea class="followup-notes" rows="2" data-followup-notes="${escapeHtml(session.id)}" placeholder="${escapeHtml(t('followupNotesPlaceholder'))}">${escapeHtml(fb.notes || '')}</textarea>
      </div>
    </div>
  `;
}

function showClientDetail() {
  renderClientDetail();
  showScreen('client-detail');
}

function openBackupDialog() {
  const d = document.getElementById('backup-dialog');
  if (d) d.hidden = false;
}

function closeBackupDialog() {
  const d = document.getElementById('backup-dialog');
  if (d) d.hidden = true;
}

function setupBackupDialog() {
  const d = document.getElementById('backup-dialog');
  if (!d) return;
  d.querySelectorAll('[data-backup-cancel]').forEach(el => {
    el.addEventListener('click', closeBackupDialog);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !d.hidden) closeBackupDialog();
  });
}

function setupClientHistory() {
  const backFromClients = document.getElementById('btn-back-clients');
  if (backFromClients) backFromClients.addEventListener('click', () => showScreen('home'));
  const backFromDetail = document.getElementById('btn-back-client-detail');
  if (backFromDetail) backFromDetail.addEventListener('click', () => showClientsScreen());

  const dialog = document.getElementById('save-dialog');
  if (dialog) {
    dialog.querySelectorAll('[data-save-tab]').forEach(tab => {
      tab.addEventListener('click', () => setSaveDialogMode(tab.dataset.saveTab));
    });
    dialog.querySelector('[data-save-cancel]')?.addEventListener('click', closeSaveDialog);
    dialog.querySelector('[data-save-commit]')?.addEventListener('click', commitSaveDialog);
    dialog.querySelector('.save-dialog-backdrop')?.addEventListener('click', closeSaveDialog);
  }

  const deleteClientBtn = document.getElementById('client-delete-btn');
  if (deleteClientBtn) {
    deleteClientBtn.addEventListener('click', () => {
      if (!activeClientId) return;
      if (confirm(t('clientDetailConfirmDeleteClient'))) {
        deleteClientRecord(activeClientId);
        activeClientId = null;
        showClientsScreen();
      }
    });
  }

  const exportBtn = document.getElementById('export-archive-btn');
  if (exportBtn) exportBtn.addEventListener('click', () => {
    exportClientArchive();
    closeBackupDialog();
  });

  const importBtn = document.getElementById('import-archive-btn');
  const importInput = document.getElementById('import-file-input');
  if (importBtn && importInput) {
    importBtn.addEventListener('click', () => importInput.click());
    importInput.addEventListener('change', async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      try {
        const count = await importClientArchive(file);
        renderClientsScreen();
        showToast(`${t('importDone')} ${count} ${t('importDoneSuffix')}`);
      } catch (err) {
        console.error('Import failed', err);
        showToast(t('importError'));
      } finally {
        importInput.value = '';
        closeBackupDialog();
      }
    });
  }
}

// ============================================
// Init
// ============================================
function init() {
  document.body.classList.add('is-screen-home');
  try { initTheme(); } catch(e) { console.error('initTheme:', e); }
  try { setupThemeToggle(); } catch(e) { console.error('setupThemeToggle:', e); }
  try { setupLanguageToggle(); } catch(e) { console.error('setupLanguageToggle:', e); }
  try { updateUILanguage(); } catch(e) { console.error('updateUILanguage:', e); }
  try { renderSectionIntros(); } catch(e) { console.error('renderSectionIntros:', e); }
  try { renderPracticeGrid(); } catch(e) { console.error('renderPracticeGrid:', e); }
  try { renderOrganGrid(); } catch(e) { console.error('renderOrganGrid:', e); }
  try { renderMeridianGrid(); } catch(e) { console.error('renderMeridianGrid:', e); }
  try { renderOrganClock(); } catch(e) { console.error('renderOrganClock:', e); }
  try { renderElements(); } catch(e) { console.error('renderElements:', e); }
  try { renderFoundation(); } catch(e) { console.error('renderFoundation:', e); }
  try { setupOverviewTabs(); } catch(e) { console.error('setupOverviewTabs:', e); }
  try { renderOverviewOrganGrid(); } catch(e) { console.error('renderOverviewOrganGrid:', e); }
  try { renderOverviewMeridianGrid(); } catch(e) { console.error('renderOverviewMeridianGrid:', e); }
  try { renderOverviewSymptoms(); } catch(e) { console.error('renderOverviewSymptoms:', e); }
  try { renderOverviewPatterns(); } catch(e) { console.error('renderOverviewPatterns:', e); }
  try { renderOverviewConversation(); } catch(e) { console.error('renderOverviewConversation:', e); }
  try { renderSymptomAnalysis(); } catch(e) { console.error('renderSymptomAnalysis:', e); }
  try { setupSymptomAnalysis(); } catch(e) { console.error('setupSymptomAnalysis:', e); }
  try { setupPolyvagalAnalysis(); } catch(e) { console.error('setupPolyvagalAnalysis:', e); }
  try { setupClientHandout(); } catch(e) { console.error('setupClientHandout:', e); }
  try { setupClientHistory(); } catch(e) { console.error('setupClientHistory:', e); }
  try { setupBackupDialog(); } catch(e) { console.error('setupBackupDialog:', e); }
  try { setupTabs(); } catch(e) { console.error('setupTabs:', e); }
  try { setupBackButtons(); } catch(e) { console.error('setupBackButtons:', e); }
  try { setupBottomNav(); } catch(e) { console.error('setupBottomNav:', e); }
  try { setupHubCards(); } catch(e) { console.error('setupHubCards:', e); }
  try { setupHamburger(); } catch(e) { console.error('setupHamburger:', e); }
  try { setupSearch(); } catch(e) { console.error('setupSearch:', e); }
  try { setupHomeTopForwarders(); } catch(e) { console.error('setupHomeTopForwarders:', e); }

  // Update clock every minute
  setInterval(renderOrganClock, 60000);

  // iOS standalone fix: tving animations til at starte efter first paint.
  // Uden dette: animationerne starter nogle gange ikke når appen åbnes
  // fra hjemmeskærm. Double-kick (paint + load) dækker begge timing-cases.
  requestAnimationFrame(() => kickAnimations());
  window.addEventListener('load', () => kickAnimations());
  // Også ved visibilitychange — iOS paruserer animationer når app er
  // i baggrunden; ved resume skal vi tvinge restart.
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') kickAnimations();
  });
}

try {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
} catch(e) {
  console.error('INIT ERROR:', e);
}
