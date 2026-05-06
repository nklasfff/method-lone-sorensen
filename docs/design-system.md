# Design-system — Visuel identitet for app'en

> Læs `docs/fundament.md` først. Hvert valg her er forankret i de
> principper der beskrives der: klinisk-præcis æstetik, klinisk-uden-
> at-være-kold sprog, mobil-først, indhold-først, aldrig generisk.

App'ens visuelle udtryk skal afspejle Lones univers — som det fremtræder
på [metodelonesorensen.dk](https://metodelonesorensen.dk). Det er ikke
"alternative wellness". Det er klinisk præcision blandet med menneskelig
varme. Navy mod hvid, sans-serif, anatomisk klarhed.

## Grundprincipper

1. **Lys tema er default.** Lone selv arbejder lyst. Mørk tema bevares
   som option for kursister der foretrækker det aften eller på lange
   skiftehold, men det er ikke standard.
2. **Høj kontrast, lav støj.** Stort hvidt rum, klar typografi,
   tilbageholdt brug af accentfarver.
3. **Anatomisk klarhed frem for symbolik.** Når vi viser et motiv, skal
   det være anatomisk genkendeligt (et ansigt, en hånd, en kraniel linje)
   — ikke en abstrakt blomst eller et chakra-hjul.
4. **Én typografisk familie.** Vi bruger ikke to typer skrifttyper for
   at "skabe variation". Hierarki etableres med vægt og størrelse.

## Farver

### Lys tema (default)

```
/* Baggrunde */
--bg-page:        #fafaf7   /* Næsten hvid med varm undertone */
--bg-elevated:    #ffffff   /* Helt hvid — kort, dialoger */
--bg-subtle:      #f1ede5   /* Varm beige — sektion-afsnit */

/* Tekst */
--ink-primary:    #1a2030   /* Næsten sort med blå undertone */
--ink-secondary:  #4a5160   /* Læsbar grå-blå til subtitler */
--ink-muted:      #8a8e98   /* Meta-tekst, dato, hint */

/* Accent — sparsomt brugt */
--accent-navy:    #2c3e5a   /* Lones primære brand-farve */
--accent-warm:    #b8956a   /* Varm tan — kun til hover, fokus, aktive states */

/* Funktionelle */
--border-soft:    #e8e3d8   /* Subtile kort- og divider-linjer */
--border-strong:  #c8c2b4   /* Tydeligere afgrænsninger */

/* Status */
--ok:             #4a7a5a   /* Bekræftelser */
--warn:           #a86a3a   /* Forsigtige hint */
--err:            #9a3a3a   /* Fejl */
```

**Brug navy som accent — ikke som baggrund.** Hele paletten er bygget op
om princippet at navy fremhæver, ikke dominerer. Store navy-flader føles
kliniske; navy som streg, som ikon, som understregning føles præcis.

### Mørk tema (option)

```
--bg-page:        #1a1f2a
--bg-elevated:    #232936
--bg-subtle:      #2c3340
--ink-primary:    #f5f1e8
--ink-secondary:  #b8b3a8
--ink-muted:      #7a7568
--accent-navy:    #6a86b0   /* Lyser op i mørk */
--accent-warm:    #d4a978
--border-soft:    #2c3340
--border-strong:  #3a4150
```

Mørk tema beholder samme palette-logik (navy + varm tan som accenter,
varm-undertone hvid som "lys") men inverteret. Aldrig pitch-black.

### Hvad vi ikke bruger

- ❌ **Fem-element-farver** (træ-grøn, ild-rød, jord-gul, metal-sølv,
  vand-blå) — de hører til TCM, ikke Sorensensistem™
- ❌ **Guld** som dominerende accent — tilhører tidligere TCM-design
- ❌ **Neon eller mættede primære** — passer ikke æstetikken
- ❌ **Gradient-baggrunde** — ren flade frem for visuel støj

## Typografi

### Skrifttype-valg

**Inter** som primær typografi — gennem hele app'en. Fri Google Font,
veldokumenteret, klinisk-præcis, fungerer i alle vægte og størrelser.

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Inter er valgt fordi:
- Den er **anatomisk klar** — bogstaverne er præcise, ikke poetiske
- Den fungerer **lige godt på telefon og laptop**
- Den har **mange vægte** så vi kan etablere hierarki uden en anden font
- Den **ligner det der er på hendes hjemmeside** — vi gør app'en
  kontinuert med hendes brand

**Vi bruger ikke to skrifttyper.** Den nuværende Cormorant Garamond
(fra TCM-app'en) er smuk men poetisk-klassisk — det er en anden æstetik
end Lones.

### Typografi-skala

```
/* Display — bruges sjældent, kun forsidetitel og lign. */
--text-display:   2.5rem;   /* 40px */ font-weight: 600;

/* Overskrifter */
--text-h1:        1.875rem; /* 30px */ font-weight: 600;
--text-h2:        1.375rem; /* 22px */ font-weight: 600;
--text-h3:        1.125rem; /* 18px */ font-weight: 600;

/* Brødtekst */
--text-body-lg:   1.0625rem; /* 17px */ font-weight: 400; line-height: 1.6;
--text-body:      0.9375rem; /* 15px */ font-weight: 400; line-height: 1.55;
--text-body-sm:   0.8125rem; /* 13px */ font-weight: 400; line-height: 1.5;

/* Funktionelle */
--text-caption:   0.75rem;  /* 12px */ font-weight: 500; letter-spacing: 0.04em;
--text-label:     0.875rem; /* 14px */ font-weight: 500;
--text-meta:      0.8125rem; /* 13px */ font-weight: 400; letter-spacing: 0.02em;
```

### Hierarki-regler

- **Brødtekst altid mindst 15px** på mobil
- **Linjeafstand 1.55-1.6** for læselighed
- **Letter-spacing kun på små caps** (caption, meta) — aldrig på
  brødtekst
- **Hvid space efter overskrifter** — minimum 0.75× linjehøjde

## Rytme og spacing

```
--space-1:    0.25rem;  /*  4px */
--space-2:    0.5rem;   /*  8px */
--space-3:    0.75rem;  /* 12px */
--space-4:    1rem;     /* 16px */
--space-5:    1.5rem;   /* 24px */
--space-6:    2rem;     /* 32px */
--space-7:    3rem;     /* 48px */
--space-8:    4rem;     /* 64px */
```

Brug 16px (--space-4) som basis-enhed. Større afstande for visuel ro,
mindre for tæt-relateret indhold.

## Komponenter

### Kort

```
Padding:           --space-5 (24px)
Border:            1px solid var(--border-soft)
Border-radius:     12px
Background:        var(--bg-elevated)
Shadow:            ingen i lys tema; subtil i mørk
Hover:             border-color skifter til var(--accent-navy)
```

Kort skal føles **rolige** — ikke knap-agtige. Ingen tunge skygger,
ingen farverig glød. Hvis et kort er klikbart, signaleres det via en
subtil pil og hover-respons.

### Knapper

**Primær knap** — bruges til hovedhandlinger:
```
Background:        var(--accent-navy)
Color:             white
Padding:           --space-3 --space-5
Border-radius:     8px
Font-weight:       500
```

**Sekundær knap** — bruges til alternativ handling:
```
Background:        transparent
Color:             var(--accent-navy)
Border:            1px solid var(--accent-navy)
```

**Tertiær / link** — i tekstflow:
```
Color:             var(--accent-navy)
Underline:         on hover only
```

**Tap-targets minimum 44×44 px.** Ingen undtagelser.

### Navigation

**Bundnavigation** (5 ikoner):
- Hjem · Praksis · Zoner · Fokus · Teknikker
- Aktiv tilstand: `var(--accent-warm)` på ikon og label
- Inaktiv: `var(--ink-muted)`

**Top-bar:**
- Hamburger-menu venstre, søg + tema-toggle højre
- Float over indhold, ingen baggrundsstøj

### Ikoner

Lineart-ikoner i 1.8px stroke. Aldrig fyldte symboler. Aldrig emoji.

## Billede- og illustrationsstil

**Foto:** Hvis vi bruger fotografier, skal de være i hendes stil —
ansigtsnærbilleder, hænder ved arbejde, anatomisk klart belyst, varme
hudtoner. Aldrig stock-fotos af "wellness" (sten, blade, lotus).

**Illustrationer:** Strege, ikke fyldte former. Hvis vi viser en zone i
ansigtet, så vis et abstrakt ansigtsomrids med en stiplet linje for
zone-grænsen. Aldrig kunstneriske portrætter eller fantasi-anatomi.

**Motiver vi gerne bruger:**
- Ansigt-omrids (frontalt, profil)
- Hænder (palpation, tryk)
- Kraniel linje-skitser
- Punkt-konstellationer
- Anatomiske referencer (kranienerver, hjernestammeområder)

**Motiver vi ikke bruger:**
- Yin-yang
- Fem-element-symboler (træ, ild, jord, metal, vand)
- Akupunkturnåle
- Chakra-hjul
- Lotus, blomster, naturmystik
- Generiske wellness-piktogrammer

## Animation og overgange

Subtilt og funktionelt — aldrig dekorativt.

```
--ease-out:        cubic-bezier(0.2, 0.8, 0.2, 1);
--duration-fast:   150ms;
--duration-base:   240ms;
--duration-slow:   400ms;
```

Brug overgange for at signalere **state-skift** (modal åbner,
accordion folder ud, navigation skifter), ikke for at tilføje liv.
Hvis en animation kan fjernes uden at brugeren mister information —
fjern den.

## Hvad designet aldrig skal gøre

- Ikke konkurrere med teksten om opmærksomhed
- Ikke "låne stemning" fra Eastern philosophy eller New Age
- Ikke bruge dekorative elementer der ikke har en funktion
- Ikke skabe afstand mellem kursisten og indholdet via stil-leg
- Ikke føles som en præsentation — det er et arbejdsværktøj

## Kalibrering

Værdierne her er **et udgangspunkt**. Når CSS'en er omskrevet, skal
designet sammenholdes med Lones faktiske materiale (hjemmeside,
kursusbøger, marketing) og finjusteres. Hex-koderne kan og skal flytte
sig hvis det forbedrer trofastheden.
