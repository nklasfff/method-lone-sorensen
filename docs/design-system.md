# Design-system — Metode Lone Sørensen

> Kilde til sandheden for visuel identitet. Implementering må kun afvige
> efter eksplicit beslutning der noteres som "Vigtige beslutninger" i
> `CLAUDE.md`.

## Designprincipper

Hentet fra studie af [metodelonesorensen.dk](https://metodelonesorensen.dk)
og hendes brand-billede (`hero.png`).

1. **Klinisk-varm**, ikke alternativ-wellness. Hendes æstetik er
   neuro-anatomisk præcision blandet med menneskelig varme. Aldrig
   "spiritual", "mystic", eller "energy".
2. **Typografi-drevet**, ikke ikon-drevet. Lones hjemmeside har
   **ingen** dekorative ikoner. Hierarki bæres af skala, vægt og
   whitespace — ikke af grafik.
3. **Cream som rygrad**, navy som understregning, varm tan som accent.
   Aldrig store flader af accent-farve.
4. **Arkiv-lignende tæthed.** Information-rig, tekstforward,
   som en professionel institut-katalog. Ikke lifestyle-app.
5. **Fotografi af mennesker**, når brugt — ansigter og hænder, varme
   hudtoner, klinisk-men-intim. Aldrig stock-fotos af "wellness" (sten,
   blade, lotus).
6. **Mobil-først.** Tap-targets ≥ 44×44 px. Ingen hover-afhængig
   interaktion.
7. **En enkelt typografisk familie.** Inter, alle vægte. Ingen sekundær
   skrifttype "for variation".

## Design-tokens

### Farver

#### Lyst tema (default)

```css
/* Baggrunde — cream-rygrad */
--bg-page:        #fafaf7;  /* hovedside */
--bg-elevated:    #ffffff;  /* kort, dialoger */
--bg-subtle:      #f1ede5;  /* sektion-bånd, dividers */
--bg-deep:        #2a2a2c;  /* hero-portræt-baggrund (matcher hero.png) */

/* Tekst — navy-undertone */
--text-primary:   #1a2030;  /* brødtekst, overskrifter */
--text-secondary: #4a5160;  /* underoverskrifter, beskrivelser */
--text-muted:     #8a8e98;  /* meta, eyebrows, captions */
--text-inverse:   #fafaf7;  /* tekst på mørke baggrunde */

/* Accent — tan understreger, navy fremhæver */
--accent-warm:    #b8956a;  /* aktive states, hover-highlight, separator-streger */
--accent-warm-soft: rgba(184, 149, 106, 0.14);
--accent-navy:    #2c3e5a;  /* brand, primær handling */
--accent-navy-soft: rgba(44, 62, 90, 0.10);

/* Kanter */
--border-soft:    rgba(26, 32, 48, 0.06);  /* mellem-blok-divider */
--border-medium:  rgba(26, 32, 48, 0.12);  /* kort-kanter */
--border-strong:  rgba(44, 62, 90, 0.32);  /* aktive elementer */
```

#### Mørkt tema (option)

```css
--bg-page:        #1a1f2a;
--bg-elevated:    #232936;
--bg-subtle:      #2c3340;
--bg-deep:        #0f1218;

--text-primary:   #f5f1e8;
--text-secondary: #b8b3a8;
--text-muted:     #7a7568;
--text-inverse:   #1a2030;

--accent-warm:    #d4a978;
--accent-warm-soft: rgba(212, 169, 120, 0.18);
--accent-navy:    #6a86b0;
--accent-navy-soft: rgba(106, 134, 176, 0.18);

--border-soft:    rgba(245, 241, 232, 0.06);
--border-medium:  rgba(245, 241, 232, 0.14);
--border-strong:  rgba(212, 169, 120, 0.36);
```

### Typografi

**Skrifttype:** Inter (kun denne ene). Vægte 300, 400, 500, 600, 700.

```css
--font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Skala — lineær, mobil-justeret */
--text-display:   2rem;      /* 32px — hero-overskrifter */
--text-h1:        1.75rem;   /* 28px — sektionsoverskrifter */
--text-h2:        1.375rem;  /* 22px — kort-titler */
--text-h3:        1.125rem;  /* 18px — sub-overskrifter */
--text-body-lg:   1rem;      /* 16px — fremhævet brødtekst */
--text-body:      0.9375rem; /* 15px — primær brødtekst */
--text-body-sm:   0.875rem;  /* 14px — sekundær brødtekst */
--text-caption:   0.75rem;   /* 12px — meta */
--text-eyebrow:   0.6875rem; /* 11px — uppercase eyebrows */

/* Linjehøjder */
--lh-tight:       1.2;       /* overskrifter */
--lh-normal:      1.5;       /* kompakt brødtekst */
--lh-relaxed:     1.6;       /* lange afsnit */
--lh-loose:       1.7;       /* artikler */

/* Letter-spacing */
--ls-tight:       -0.01em;   /* store overskrifter */
--ls-normal:      0;         /* standard */
--ls-wide:        0.04em;    /* labels */
--ls-eyebrow:     0.18em;    /* uppercase eyebrows */
```

### Rytme og afstand

```css
--space-1:   4px;    /* hairline-gaps */
--space-2:   8px;    /* tæt-relateret indhold */
--space-3:   12px;   /* indre kort-padding */
--space-4:   16px;   /* basis-enhed */
--space-5:   24px;   /* kort-padding, sektion-pad */
--space-6:   32px;   /* mellem-sektion */
--space-7:   48px;   /* mellem-skærme-pad */
--space-8:   64px;   /* hero-pad */
--space-9:   96px;   /* skærm-bottom-pad (over bottom-nav) */
```

### Kanter og runding

```css
--radius-none:   0;
--radius-sm:     4px;    /* tags, små knapper */
--radius-md:     8px;    /* knapper, små kort */
--radius-lg:     12px;   /* kort, dialoger */
--radius-pill:   999px;  /* ikon-knapper, pills */
```

### Skygger

Brug **sparsomt**. Lones univers er fladt og luftigt — ikke skygge-tungt.

```css
--shadow-none:     none;
--shadow-soft:     0 1px 3px rgba(26, 32, 48, 0.06), 0 4px 16px rgba(26, 32, 48, 0.04);
--shadow-elevated: 0 4px 12px rgba(26, 32, 48, 0.08), 0 16px 40px rgba(26, 32, 48, 0.06);
```

### Bevægelse

```css
--ease:           cubic-bezier(0.2, 0.8, 0.2, 1);
--duration-fast:  150ms;   /* hover, focus */
--duration-base:  240ms;   /* state-skift */
--duration-slow:  400ms;   /* skærm-skift, accordion */
```

Ingen "decorative" animationer — kun funktionelle.

---

## Komponenter

### 1. Hero-portræt

Lones brand-billede, fuld bredde, øverst på home-skærmen.

| Prop | Værdi |
|------|-------|
| Bredde | 100% af viewport |
| Højde | auto, max 56vh |
| Object-fit | cover, position center 30% (så ansigtet ses) |
| Baggrund | `--bg-deep` (matcher hero.png) |

**Bruges kun på home.** Ikke som decorative banners på andre skærme.

### 2. Top-bar (icon-bar)

Floating ikoner over hero eller sektion-header.

```
┌────────────────────────────────────────┐
│  ☰                          🔍   ☾    │
└────────────────────────────────────────┘
```

| Element | Spec |
|---------|------|
| Position | absolute, top + safe-area, padding 12px 16px |
| Knap-størrelse | 40×40 px (rund) |
| Baggrund | `rgba(255,255,255,0.78)` + backdrop-blur(8px) |
| Border | 1px solid `--border-medium` |
| Tap-target | 40×40 (lige under 44 — kompenseres af padding rundt) |

### 3. Hub-row (home-listens elementer)

Den primære navigation. Tekstdrevet — **ingen** illustrative ikoner.

```
┌────────────────────────────────────────┐
│  01    I Praksis                    →  │
│        Klientmøde, samtale og forløb   │
├────────────────────────────────────────┤
│  02    Ansigtszoner                 →  │
│        Refleksområder...                │
└────────────────────────────────────────┘
```

| Variant | Brug |
|---------|------|
| Default | Standard hub-row |
| Hover | Padding-left øges 8px, pil flytter 4px højre |
| Focus | Outline 2px `--accent-navy` |

| State | Visuel | Adfærd |
|-------|--------|--------|
| Default | Bottom-border `--border-medium` | Klikbar |
| Hover | Padding-shift, pil-shift, pil farver navy | Cursor pointer |
| Active (pressed) | Background `--accent-navy-soft` kortvarigt | — |

| Element | Typografi | Farve |
|---------|-----------|-------|
| `01` | text-eyebrow, vægt 500, letter-spacing wide | text-muted |
| Title | text-h3, vægt 600, letter-spacing tight | text-primary |
| Desc | text-body-sm, vægt 400, lh-normal | text-secondary |
| → | text-h3 | text-muted (→ navy ved hover) |

**Tilgængelighed:**
- Role: button
- Tab-rækkefølge: oppefra og ned
- Aria-label genereres fra title hvis description er truncated

### 4. Headline med pipe-separators

Lones signatur fra hjemmesiden: tre relaterede begreber adskilt med `|`.

```
Ansigtszoner | Behandlingsteknikker | Fokusområder
```

| Element | Spec |
|---------|------|
| Tag | `<h1>` med `<span class="sep">` rundt om hver `|` |
| Font-size | text-display |
| Font-weight | 600 |
| Line-height | lh-tight |
| Letter-spacing | ls-tight |
| Separator-farve | `--accent-warm` (varm tan) |
| Separator-margin | 0 0.4em |

### 5. Eyebrow

Lille uppercase-tekst over hovedoverskrift. Kategoritag.

```
OPSLAGSVÆRK FOR KURSISTER
```

| Prop | Værdi |
|------|-------|
| Font-size | text-eyebrow (11px) |
| Font-weight | 500 |
| Letter-spacing | ls-eyebrow (0.18em) |
| Text-transform | uppercase |
| Color | text-muted |

### 6. Lede

Brødtekst-introduktion under hovedoverskrift. Kortere end fuld-paragraph.

| Prop | Værdi |
|------|-------|
| Font-size | text-body-lg eller text-body |
| Line-height | lh-relaxed |
| Color | text-secondary |
| Max-width | 60ch (læselighed) |

### 7. Section-card (på sektionslister)

Til lister af zoner, teknikker, artikler. **Ikke** rounded-tile-stil med
abstrakt SVG i hjørnet (det er TCM-arv). I stedet: en tekstforward række.

```
┌──────────────────────────────────────────┐
│  Pandezone                         →     │
│  Frontallappen                            │
│  Neurologi · Højere hjernefunktion        │
└──────────────────────────────────────────┘
```

| Element | Spec |
|---------|------|
| Padding | space-5 (24px) vertical, space-4 (16px) horizontal |
| Border-bottom | 1px `--border-medium` |
| Background | transparent (cream from page) |
| Hover | bg-elevated (hvid), pil flytter |

| Element | Typografi |
|---------|-----------|
| Title | text-h3, vægt 600, text-primary |
| Subtitle (anatomisk ref) | text-body-sm, italic, text-secondary |
| Meta-tags | text-caption, text-muted, separated by `·` |

### 8. Detail-skærm-header

Editorial layout på detalje-skærme. Stor titel, dæmpet meta, ren whitespace.

```
←  Hjem

──────────────────────────────────────────

   PANDEZONE / 02
   ───────────────────────

   Frontallappen
   Højere hjernefunktion · Frontalt

   Pandezonen forbinder til frontallappen — hjernens
   område for planlægning, beslutningstagning,
   opmærksomhed og hæmning af impulser.
```

| Element | Spec |
|---------|------|
| Eyebrow | "PANDEZONE / 02" — text-eyebrow, text-muted |
| Title | text-display, vægt 600, lh-tight |
| Subtitle (nickname) | text-h3, vægt 400, italic, text-secondary |
| Meta-row | text-body-sm, text-muted, separated by `·` |
| Description | text-body-lg, lh-loose, text-primary, max-width 60ch |

**Ingen decorative SVG-illustration i header.** Ingen organ-figurer, ingen
dobbelt-helix, ingen abstrakte symboler. Hvis senere et foto er
tilgængeligt, kan det placeres som top-banner (samme spec som hero-portræt).

### 9. Tabs (Overblik / Temaer / Nøglepunkter)

Underordnet navigation på detalje-skærme. Tekstforward, intet ikon.

```
┌─────────────────────────────────────────┐
│  Overblik   8 Temaer   Nøglepunkter     │
│  ───────                                │
└─────────────────────────────────────────┘
```

| Element | Spec |
|---------|------|
| Layout | Flex row, gap space-5 |
| Padding | space-4 horizontal, space-3 vertical |
| Border-bottom | 1px `--border-medium` (hele tab-rækken) |

| State | Visuel |
|-------|--------|
| Default | text-secondary, regular |
| Active | text-primary, vægt 600, bottom 2px `--accent-warm` |
| Hover | text-primary |

### 10. Foldable / Accordion

For "8 Temaer"-fanen — hver tema kan foldes ud.

```
┌──────────────────────────────────────────┐
│  Indikationer                       ⌄    │
└──────────────────────────────────────────┘
       ↓ folder ud:
┌──────────────────────────────────────────┐
│  Indikationer                       ⌃    │
│  • Oplever klienten manglende fokus?     │
│  • Er der tegn på beslutningstræthed?    │
│  • Hvordan reagerer klienten på stimuli? │
└──────────────────────────────────────────┘
```

| State | Spec |
|-------|------|
| Collapsed | Title + chevron-down, padding space-4 |
| Expanded | Title + chevron-up, body slides ned, max-height auto |

| Element | Typografi |
|---------|-----------|
| Title | text-body-lg, vægt 500, text-primary |
| Body items | text-body, lh-relaxed, text-secondary |

Animation: 240ms ease.

### 11. Bottom-nav

5-tab navigation. **Tekstdrevet** med minimale ikoner (helst 1-streg-line-art,
ikke abstrakte symboler).

| Element | Spec |
|---------|------|
| Position | fixed bottom |
| Background | `rgba(250, 250, 247, 0.94)` + backdrop-blur(20px) |
| Border-top | 1px `--border-soft` |
| Padding | space-2 vertical + safe-bottom |
| Layout | Flex row, justify-around |

| State | Visuel |
|-------|--------|
| Default | text-muted, ikon-stroke 1.5px |
| Active | text-primary, label vægt 500, ikon-stroke 1.8px, lille `--accent-warm`-prik under label |

**Ikoner:** Hold dem i samme stil — outlined, 1.5px stroke, ingen fill.
Akupunkturnål-ikon (det nuværende på "Praksis") **fjernes** og erstattes
med simpel line-art.

### 12. Hamburger menu (overlay)

Slide-in fra venstre. Lyst tema-konsistent.

| Element | Spec |
|---------|------|
| Width | min(320px, 85vw) |
| Background | `--bg-elevated` (hvid) |
| Padding | space-7 horizontal, space-6 vertical |
| Brand-area | Top: "Metode Lone Sørensen" som text-h3, eyebrow under |

| Item-state | Spec |
|-----------|------|
| Default | text-body, text-secondary, py space-3 |
| Active | text-primary, vægt 500, venstre-streg `--accent-warm` 2px |
| Hover | text-primary, bg-subtle |

Sektion-overskrifter ("Sektioner", "Information"): text-eyebrow,
text-muted, mt space-5.

### 13. Search overlay

Fuld-skærm overlay. Centret søgefelt, resultater nedenunder.

| Element | Spec |
|---------|------|
| Background | `rgba(250, 250, 247, 0.98)` + backdrop-blur(20px) |
| Input | Stor, transparent, border-bottom 2px `--border-medium`, focus → `--accent-navy` |
| Input-font | text-h2, lh-tight |
| Placeholder | text-muted |
| Results | text-body, kategori-grupperet, hver kategori har eyebrow-overskrift |

### 14. Back-button

På detalje- og sektion-skærme.

```
←  Hjem
```

| Element | Spec |
|---------|------|
| Layout | Flex inline, gap space-2 |
| Font | text-body-sm, vægt 500 |
| Color | text-secondary, hover text-primary |
| Icon | Pil-venstre, 1.5px stroke |
| Padding | space-2 vertical, space-3 horizontal (tap-target) |

### 15. Tag / Pill

Til metadata på kort og detalje-headers.

```
[ Neurologi ]   [ Frontalt ]
```

| Prop | Værdi |
|------|-------|
| Display | inline-flex, padding 4px 10px |
| Font | text-caption, vægt 500 |
| Background | `--accent-navy-soft` |
| Color | `--accent-navy` |
| Border-radius | --radius-sm |

---

## Patterns

### Home-skærm

```
┌──────────────────────────────────────────┐
│ [☰]                          [🔍]  [☾]  │  ← top-bar (floating)
│                                          │
│  ┌────────────────────────────────────┐  │
│  │                                    │  │
│  │   [hero-portræt af Lone]          │  │  ← hero-portrait
│  │                                    │  │
│  └────────────────────────────────────┘  │
│                                          │
│  OPSLAGSVÆRK FOR KURSISTER               │  ← eyebrow
│                                          │
│  Ansigtszoner | Behandlingsteknikker     │  ← headline (pipes)
│  | Fokusområder                          │
│                                          │
│  Et arbejdsrum mellem dine kurser —      │  ← lede
│  slå op, repetér, find sammenhænge.      │
│  ─────────────────────────────────       │
│                                          │
│  01   I Praksis                    →     │  ← hub-row
│       Klientmøde, samtale og forløb      │
│  ─────────────────────────────────       │
│  02   Ansigtszoner                 →     │
│       Refleksområder...                  │
│  ─────────────────────────────────       │
│  ...                                     │
│                                          │
├──────────────────────────────────────────┤
│  Hjem  Praksis  Zoner  Fokus  Teknikker │  ← bottom-nav
└──────────────────────────────────────────┘
```

### Sektions-skærm (fx Ansigtszoner)

```
┌──────────────────────────────────────────┐
│ [☰]                          [🔍]  [☾]  │
│                                          │
│  ←  Hjem                                 │
│                                          │
│  ANSIGTSZONER                            │  ← eyebrow
│                                          │
│  Refleksområder &                        │  ← display title
│  Neurologiske Zoner                      │
│                                          │
│  Et opslag på de overordnede zone-       │  ← lede
│  områder i ansigtet. Detaljerede zone-   │
│  kort hører til i kursusmaterialet.      │
│  ─────────────────────────────────       │
│                                          │
│  Pandezone                          →    │  ← section-card
│  Frontallappen                            │
│  Neurologi · Højere hjernefunktion       │
│  ─────────────────────────────────       │
│  Limbisk zone                       →    │
│  Følelseshjernen                          │
│  ─────────────────────────────────       │
│  ...                                     │
│                                          │
├──────────────────────────────────────────┤
│  Hjem  Praksis  Zoner  Fokus  Teknikker │
└──────────────────────────────────────────┘
```

### Detalje-skærm

```
┌──────────────────────────────────────────┐
│  ←  Ansigtszoner                         │
│  ─────────────────────────────────       │
│                                          │
│  ANSIGTSZONE / 01                        │  ← eyebrow
│                                          │
│  Pandezone                               │  ← display title
│                                          │
│  Frontallappen                           │  ← subtitle (italic)
│                                          │
│  [Neurologi] [Frontalt] [Pandezone↔Limbisk]│ ← tags
│                                          │
│  ─────────────────────────────────       │
│                                          │
│  Pandezonen forbinder til frontallappen  │  ← description
│  — hjernens område for planlægning,      │
│  beslutningstagning, opmærksomhed og     │
│  hæmning af impulser.                    │
│                                          │
│  I Sorensensistem™ bruges pandezonen     │
│  ofte i arbejde med koncentration...     │
│                                          │
│  ─────────────────────────────────       │
│                                          │
│  Overblik   Temaer   Nøglepunkter        │  ← tabs
│  ───────                                 │
│                                          │
│  [tab-content...]                        │
│                                          │
├──────────────────────────────────────────┤
│  Hjem  Praksis  Zoner  Fokus  Teknikker │
└──────────────────────────────────────────┘
```

---

## Tilgængelighed

### Generelt
- Tap-targets ≥ 44×44 px (med padding rundt om mindre visuelle elementer)
- Tekstkontrast: brødtekst ≥ 7:1 (WCAG AAA), labels ≥ 4.5:1 (WCAG AA)
- Fokus-indikator synlig på alle interaktive elementer (2px outline navy)

### Skærmlæser
- Ikoner i top-bar har `aria-label`
- Hub-rows: button-role, label = title (desc læses som beskrivelse)
- Tabs: ARIA tab/tabpanel-mønster
- Accordion: aria-expanded toggles på title-knap

### Tastatur
- Tab: cykler gennem fokuserbare elementer i visuel rækkefølge
- Enter/Space: aktiverer button-elementer
- Escape: lukker overlays (search, hamburger)
- Pil-piler i tabs: skifter mellem tabs (valgfri, men best practice)

---

## Hvad designet ALDRIG må gøre

1. Bruge yin-yang, fem-element-symboler, akupunkturnåle, chakra-hjul,
   lotus-blomster eller andre TCM/wellness-piktogrammer
2. Bruge en sekundær skrifttype "for variation"
3. Bruge fyldte fil-ikoner (kun outlined)
4. Bruge gradient-baggrunde
5. Bruge skygger som dekorativt element (kun til reel elevation)
6. Bruge "decorative" animationer (kun funktionelle state-skift)
7. Bruge stock-fotos af "wellness" — sten, blade, sand, lotus, hænder-mod-himlen
8. Lade en visuel beslutning tage overhånd over læsbarhed

---

## Implementations-rækkefølge

Når koden bygges efter dette dokument:

1. **Tokens først** — definér alle CSS-variabler ovenfor
2. **Typografi-rytme** — body, hierarki, links
3. **Layout-skelet** — screen, header, main, bottom-nav
4. **Hub-row** — den vigtigste komponent på home
5. **Section-card** — for sektions-lister
6. **Detail-header** — for detalje-skærme
7. **Tabs + Accordion** — sekundær navigation
8. **Bottom-nav, Hamburger, Search** — i denne rækkefølge
9. **Mørk tema-override** — sidst, kun overskrift af tokens

Hvert trin verificeres visuelt før det næste startes.

---

## Versionering

**v1.0 — 2026-05-06.** Første komplette specifikation. Erstatter den
midlertidige design-dokumentation jeg skrev som del af bid 4 før
implementationen begyndte.
