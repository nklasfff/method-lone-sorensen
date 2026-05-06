# Motor-arv — Hvad er overført fra TCM-projektet

> Dette dokument er et **levende dokument**. Når en oprydning fuldføres,
> opdateres tjeklisten her så fremtidige sessioner ved hvor langt vi er.

## Hvorfor vi kopierede

App'ens motor — navigation, hub-grid, søgning, tema-toggle, hamburger-
menu, foldbare kort, søgeoverlay — er kopieret fra et tidligere projekt:
`~/Desktop/tcmdynamics/`. Det projekt var et opslagsværk om Traditionel
Kinesisk Medicin (TCM) for behandlere, og Niklas (projektejeren) var
glad for hvordan dets motor var bygget op.

Beslutningen var **at genbruge motoren, ikke indholdet**. Det sparer
uger af arbejde — men det skaber også den udfordring at TCM-strukturen
sidder dybt i koden, og vi skal gradvist rense den ud så app'en bliver
**Lones** og ikke "TCM-app i forklædning".

Datoen var **2026-05-06**.

## Hvad der blev kopieret

Disse filer kom over fra `tcmdynamics/` 1:1:

- `index.html` — alle skærme, hub-grid, navigation
- `css/style.css` — komplet design-system med farver, fonte, komponenter
- `js/app.js` — al app-logik, oversettelser inline, render-funktioner
- `js/i18n.js` — bevaret af inerti, men **ubrugt** (oversettelser er
  flyttet ind i `app.js`)
- `manifest.json` — PWA-manifest

Disse blev **ikke** kopieret over (de var TCM-specifikt indhold):

- `js/data-da.js` — TCM-organer, meridianer, elementer
- `js/data-en.js` — engelsk TCM-data
- `js/data.js` — den oprindelige loader (vi har skrevet vores egen)
- `js/data-pv.js` — polyvagal-data (om Stephen Porges' ladder)
- `js/seasons-data.js` — fem-årstider-data
- TCM-billeder (yinyang, hero, ladder)
- Share-sider (`share.html`, `share-polyvagal.html`)
- TCM-PDF og symptom-listen

## Hvad der allerede er ændret

Disse opgaver er fuldført:

| Opgave | Status |
|---|---|
| Brand-strenge i `index.html` (Patterns Behind → Metode Lone Sørensen) | ✓ Fuldført |
| Kinesiske tegn (醫, 氣, 道, 聽, m.fl.) fjernet fra HTML | ✓ Fuldført |
| Yin-yang-segl fjernet fra hamburger-menu og handout | ✓ Fuldført |
| TCM-strenge i `app.js` (DA-blokken, hub, nav, menu) opdateret til Lones univers | ✓ Fuldført |
| Ny `js/data-lone.js` oprettet med Lone-stub-indhold | ✓ Fuldført |
| Ny `js/data.js` skrevet som tynd loader til `data-lone.js` | ✓ Fuldført |
| Standardsprog låst til dansk (`currentLanguage = 'da'`) | ✓ Fuldført |
| `manifest.json` rebrandet | ✓ Fuldført |
| `js/i18n.js` slettet (Fase A) | ✓ Fuldført 2026-05-06 |

## Hvad der stadig er TCM-rest

Følgende skal renses ud, kategoriseret efter risiko:

### Død kode (lav risiko)

| Fil/element | Begrundelse | Status |
|---|---|---|
| ~~`js/i18n.js`~~ | Oversettelserne er flyttet ind i `app.js`. Filen importeredes ikke af nogen. | ✓ Slettet 2026-05-06 |

> `js/data-pv.js` blev oprindeligt klassificeret som død kode, men en
> nærmere analyse viste at polyvagal-funktionen er flettet ind i
> `app.js` over **51 referencer** (setupPolyvagalAnalysis, save-dialog,
> client-handout, FAQ, hardkodet kort på Praksis-skærmen). Det er ikke
> oprydning af død kode — det er **fjernelse af en TCM-feature**, og
> hører hjemme i Fase B nedenfor.

### Hardkodet TCM-funktionalitet i `app.js` (medium risiko)

Disse er **ikke** data-drevne — de er hardkodede HTML-strenge eller
funktioner. Skal fjernes med kode-ændring:

| Element | Linje (ca.) | Hvad der skal ske |
|---|---|---|
| **Polyvagal-kompleks** (51 referencer) | spredt | Slet `data-pv.js`, importen, `setupPolyvagalAnalysis`, `polyvagalCard`, polyvagal-skærmen, FAQ-omtale |
| `renderPracticeGrid` — "Symptom-Analyse"-kortet | ~1614 | Hardkodet `featuredCard`-HTML fjernes |
| `renderOrganClock` (24-timers organ-ur) | ~969 | Hele funktionen fjernes — ikke relevant |
| `renderElements` (fem-element grid) | ~1064 | Beholdes, men render-shape skal omdefineres til Lones fokusområder |
| `renderFoundation` (yinYang, elementCycles, organPartnership) | ~1091 | Hele funktionen fjernes — ikke relevant |
| `renderSymptomAnalysis` + `setupSymptomAnalysis` | ~3180+ | Hele TCM-symptom-analysen fjernes |
| `setupClientHandout` | — | "Hjem-anvisning til klienten" — beholdes som mulighed senere, men hører ikke til første version |
| `showOrganDetail` — render af `organ.yinYang`, `organ.element`, `organ.partner`, `organ.time` | ~1310 | Felter omdøbes når data-omdøbning sker (fase D) |
| `showMeridianDetail` — `partnerMeridian`-relationer | ~1402 | Bevares i kode, men data-shape skal genovervejes |

### Visuelle TCM-rester (medium risiko)

| Element | Hvor | Hvad der skal ske |
|---|---|---|
| Hub-kort SVG-illustrationer (4 stk.) | `index.html` linje ~60-200 | Erstattes med motiver fra Lones univers (ansigt, hænder, kraniel linje) |
| Sektion-illustrationer | `index.html` (organ-torso, dobbelthelix, fem-element-cirkel) | Erstattes |
| Hero-billede-plads | `index.html` linje ~28 | Tomt nu — Lone-passende billede tilføjes |
| App-ikoner (192/512/apple-touch) | rod | Stadig de gamle TCM-ikoner |
| `--el-wood`, `--el-fire`, `--el-earth`, `--el-metal`, `--el-water` CSS-variabler | `css/style.css` | Fjernes — bruges ikke i Lone-design |
| Cormorant Garamond serif-font | `index.html` head | Erstattes med Inter (jf. design-system.md) |
| Guldgul accent (`#b8952e`) som dominerende | `css/style.css` | Erstattes med navy + varm tan paletten |
| Mørk tema som default | `css/style.css` | Skiftes til lys default; mørk bliver option |

### Data-feltnavne (høj risiko — ændrer mange filer samtidig)

Feltnavnene i `js/data-lone.js` er TCM-arvet og skal omdøbes — men det
kræver samtidige ændringer i `app.js`'s render-funktioner. Foreslået
omdøbning:

| Nuværende navn (TCM) | Nyt navn (Lone) |
|---|---|
| `organs` | `ansigtszoner` |
| `extraordinaryMeridians` | `behandlingsteknikker` |
| `fiveElements` | `fokusomraader` |
| `tcmFoundation` | (fjernes helt) |
| `organClock` | (fjernes helt) |
| `organOverviews` | `zoneOverviews` |
| `meridianOverviews` | `teknikOverviews` |
| `organ.element` | `zone.fokusomraade` |
| `organ.yinYang` | `zone.funktion` |
| `organ.time` | `zone.placering` |
| `organ.partner` | `zone.relateretZone` |
| `meridian.openingPoint` | `teknik.primaertOmraade` |
| `meridian.coupledPoint` | `teknik.sekundaertOmraade` |
| `meridian.partnerMeridian` | `teknik.relateretTeknik` |

### Skærm-IDs i HTML (høj risiko)

`app.js` slår skærme op via ID som `screen-organ`, `screen-element`,
`screen-meridian`. Hvis vi omdøber, skal vi opdatere både HTML og JS.
Indtil omdøbning:

- `screen-organ` betyder "ansigtszone-detalje"
- `screen-element` betyder "fokusområde-detalje"
- `screen-meridian` betyder "behandlingsteknik-detalje"

Det er IKKE oplagt for nye bidragsydere at læse koden. Omdøbningen er
en oplagt del af **fase D**.

## Oprydningsplan i faser

Anbefalet rækkefølge — fra lavest risiko til højest:

### Fase A — Død kode (✓ fuldført 2026-05-06)

Kun én fil var **truly død** kode (importeret af ingen):

1. ✓ Slet `js/i18n.js`

`data-pv.js` blev flyttet til Fase B fordi den er aktivt importeret og
har 51 spredte referencer — at fjerne den kræver samtidig fjernelse af
polyvagal-funktionaliteten.

**Verifikation:** ✓ App'en boot'er stadig, ingen konsol-fejl, hjem-skærm
viser fem hub-kort med Lones strenge.

### Fase B — Hardkodet TCM-funktionalitet

Anbefales delt op i flere mindre skridt — hvert skridt verificeres før
det næste startes.

**Fase B.1 — Polyvagal-fjernelse (én sammenhængende opgave):**
1. Slet `js/data-pv.js`
2. Slet importen `import { polyvagal... } from './data-pv.js'` i `app.js`
3. Slet `setupPolyvagalAnalysis`-funktionen og dens render-kode
4. Slet `polyvagalCard` fra `renderPracticeGrid`
5. Slet polyvagal-skærmen `screen-polyvagal-analysis` fra `index.html`
6. Slet polyvagal-felter i save-dialog og client-handout
7. Slet polyvagal-omtale i FAQ-tekst
8. Slet hamburger-menu-link til "Mønstre i nervesystemet"

**Fase B.2 — Symptom-Analyse-fjernelse:**
1. Slet `renderSymptomAnalysis`, `setupSymptomAnalysis` fra `app.js`
2. Slet `featuredCard` (Symptom-Analyse) fra `renderPracticeGrid`
3. Slet `screen-symptom-analysis` fra `index.html`
4. Slet patternLibrary-rendering hvis det kun bruges af symptom-analyse

**Fase B.3 — Mindre TCM-features:**
1. Slet `renderOrganClock` og DOM-element
2. Slet `renderFoundation` og DOM-element
3. Slet `setupClientHandout` og tilhørende skærme
4. Slet hero-PDF-print-funktionalitet hvis den hører til handout

**Verifikation efter hver delfase:**
- App'en boot'er, ingen konsol-fejl
- Praksis-skærmen viser kun det den skal
- Detalje-skærme for ansigtszoner og teknikker fungerer
- Søgning fungerer

### Fase C — Visuel kalibrering

1. Skift CSS-paletten til navy/charcoal mod hvid (jf.
   `docs/design-system.md`)
2. Skift font fra Cormorant Garamond til kun Inter
3. Vend tema-default fra mørk til lys
4. Erstat hub-kort-SVG'er med Lone-motiver
5. Erstat sektion-illustrationer
6. Erstat app-ikoner

**Verifikation:** App'en ligner Lones hjemmeside i sit udtryk. Ingen
TCM-symboler tilbage visuelt.

### Fase D — Datafelt-omdøbning

1. Omdøb data-eksporter i `data-lone.js` (`organs` → `ansigtszoner`
   osv.)
2. Opdater destrukturering i `app.js` linje 622
3. Opdater alle references i `app.js`'s render-funktioner
4. Opdater skærm-IDs i `index.html` og DOM-queries i `app.js`
5. Opdater CSS-klassenavne (`.organ-card` → `.zone-card` osv.)
6. Opdater `docs/indholds-struktur.md` så feltnavnene matcher
   virkeligheden

**Verifikation:** Alle sektioner virker som før. Ingen TCM-ord findes
i kildekoden ud over `docs/motor-arv.md` (denne fil) som historisk
reference.

## Hvad denne fil bør indeholde fremover

Når en oprydningsfase fuldføres:

1. Markér de tilhørende rækker i tabellerne ovenfor som **✓ Fuldført**
2. Tilføj en linje under "Hvad der allerede er ændret"-tabellen med
   datoen for fasens fuldførelse
3. Opdater `CLAUDE.md`'s "Vigtige beslutninger"-sektion hvis fasen
   ændrer noget grundlæggende

Det her er ikke historisk dokumentation der skrives én gang — det er
**et levende kort** der gør det sikkert for en fremtidig session at
fortsætte arbejdet uden at træde forkert.
