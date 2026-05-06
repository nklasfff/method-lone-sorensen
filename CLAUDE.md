# Metode Lone Sørensen — Opslagsværk

PWA og opslagsværk til kursister hos Lone Sørensen. Hun underviser i
ansigtszoneterapi, refleksterapi og neurologisk behandling — under
samlebetegnelsen **Sorensensistem™**. Appen er et arbejdsrum mellem
kurserne — ikke en lærebog, ikke en erstatning for kurset.

## Hvem appen er for

Kursister på Lones uddannelser. De har allerede modtaget undervisning,
prøvet teknikkerne i hænderne, set zoner kortlagt på ansigter. Appen er
et opslagsværk de griber til mellem timerne — ikke en introduktion til
metoden, ikke en autoritet, ikke en diagnose.

## Stack

- Vanilla HTML/CSS/JavaScript — ingen frameworks, ingen build-step
- ES Modules (`import`/`export`)
- LocalStorage til tema-præference
- Google Fonts (vælges i `docs/design-system.md`)
- Ingen tredjepart i runtime ud over Google Fonts: ingen analytics, ingen
  sporing, ingen eksterne kald

## Projektstruktur

```
.
├── CLAUDE.md                    # Denne fil — projektets memorial
├── README.md                    # Projekt-forside, hvordan man kører
├── docs/
│   ├── fundament.md             # Pædagogisk og filosofisk grundlag
│   ├── design-system.md         # Visuel identitet (farver, fonte, komponenter)
│   ├── indholds-struktur.md     # Hvordan data-lone.js er organiseret
│   └── motor-arv.md             # Hvad er overført fra TCM-motoren, hvad er fjernet
├── index.html                   # Alle skærme i én fil
├── css/style.css                # Komplet design-system
├── js/
│   ├── app.js                   # Al app-logik (oversettelser inlinet)
│   ├── data.js                  # Data-loader (tynt lag)
│   └── data-lone.js             # Lones faglige indhold
├── manifest.json                # PWA-manifest
└── .claude/launch.json          # Lokal preview-server-konfig
```

## Principper

1. **Hendes univers — ikke generisk wellness, ikke TCM-warmed-over.**
   Visuelt, sprogligt, strukturelt: alt skal afspejle Sorensensistem™.
   Ord som *neurologi, refleks, depotgrad, NP-punkt, kraniel linje,
   tarm-hjerne-akse, vagus, kranienerve* hører hjemme her. Ord som
   *yin/yang, fem elementer, meridian-flow, qi, akupunkturnål* hører
   ikke hjemme — heller ikke som metaforer.

2. **Mellem kurset og hverdagen.** Appen minder kursisten om hvad hun
   lærte — den underviser ikke. Den må ikke fortolkes som en autoritet.
   Konkrete zone-kort, NP-punkter og protokoller er kursusmateriale og
   bør komme derfra, ikke konstrueres i appen.

3. **Lys og klinisk-præcis.** Lones æstetik er navy/charcoal mod hvid,
   sans-serif, anatomisk klar. Lys tema er default. Mørk tema bevares
   som option.

4. **Indhold-først.** Designet støtter indholdet, ikke omvendt. Hvis et
   visuelt element konkurrerer med tekstens læsbarhed, ryger det.

5. **Mobil-først.** Kursister åbner appen på telefonen mellem klienter.
   Tap-targets ≥ 44×44 px. Ingen hover-afhængig interaktion.

## Arbejdsmetode

Når du tilføjer indhold eller bygger en sektion:

1. Læs `docs/fundament.md` hvis du ikke har konteksten.
2. Læs den relevante doc i `docs/` (design-system, indholds-struktur).
3. Konsulter `js/data-lone.js` for det aktuelle indholds shape.
4. Skriv indhold på dansk i Lones sprog — kliniks-præcist, ikke poetisk.
5. Hvis du er i tvivl om fagligt indhold, **marker det som
   `[bekræftes med kursusmateriale]`** frem for at gætte. Aldrig
   fabriker zone-koordinater, NP-numre eller protokoller.

## Vigtige beslutninger

- **Motor-arv (2026-05-06):** App-skellet er kopieret fra
  `~/Desktop/tcmdynamics/` og bygges gradvist om til Lones univers.
  Detaljer i `docs/motor-arv.md`.
- **Lys tema er default (2026-05-06).** Mørk forbliver tilgængelig via
  toggle øverst til højre.
- **Sprog: kun dansk.** Ingen engelsk-version planlagt.
- **Ingen indlogning, ingen sky.** Alt gemmes lokalt i kursistens browser.
- **Sorensensistem™** skrives med trademark-tegnet hver gang.

## Commands

```bash
# Kør lokalt (vælg én):
npx http-server . -p 8765 -c-1
python3 -m http.server 8765

# Foretrukken: brug Claude Codes preview-panel via .claude/launch.json
```

Ingen build-step. Filerne serveres direkte.

## Hvad du ikke skal gøre

- Ikke introducér frameworks (React, Vue, Svelte) uden eksplicit aftale
- Ikke skriv klinisk indhold du ikke kan kildeangive — marker
  `[bekræftes]` i stedet for at gætte
- Ikke kopiér tekst, metaforer eller strukturer fra TCM-appen direkte
- Ikke brug yin/yang, fem elementer, eller organ-ur som strukturerende
  metaforer her — heller ikke "subtilt"
- Ikke konstruér zone-kort, NP-punkter eller protokoller du ikke har
  set i hendes officielle materiale
- Ikke tilføj tredjepart-tjenester (analytics, error tracking, fonts ud
  over Google Fonts, CDN-libraries)
- Ikke forsøg at fjerne `Sorensensistem™`-mærket — det er hendes
  registrerede term
