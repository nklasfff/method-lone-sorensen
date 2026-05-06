# Indholdsstruktur — Hvordan `data-lone.js` er organiseret

> Læs `docs/fundament.md` og `CLAUDE.md` først hvis du tilføjer fagligt
> indhold for første gang.

App'ens indhold ligger i én fil: [`js/data-lone.js`](../js/data-lone.js).
Det er en JavaScript-modul der eksporterer en række navngivne arrays
og objekter. Hver eksport svarer til en sektion i app'en.

## De fem hovedsektioner

App'en har fem hub-kategorier, som hver har sin tilsvarende data-eksport:

| Sektion i app'en | Data-eksport i filen | Indhold |
|---|---|---|
| **I Praksis** | `practiceGuide` | Artikler om klientmøde, samtale, forløb |
| **Ansigtszoner** | `organs` | Overordnede zone-områder i ansigtet |
| **Fokusområder** | `fiveElements` | Hovedtemaer i metoden (neurologi, lymfe, hormon, trauma) |
| **Behandlingsteknikker** | `extraordinaryMeridians` | Greb, sekvenser, navngivne protokoller |
| **Oversigter** | `organOverviews`, `meridianOverviews`, m.fl. | Hurtige opslag på tværs |

> **Bemærk om navngivningen:** Eksport-navnene (`organs`,
> `extraordinaryMeridians`, `fiveElements`) er arvet fra det tidligere
> projekt og afspejler **ikke** Lones univers. De omdøbes senere — se
> `docs/motor-arv.md`. Indtil da bruger vi de eksisterende navne for
> ikke at bryde motoren.

## Felterne forklaret

### `practiceGuide` — I Praksis

En artikel-samling. Hver artikel er et objekt med dette shape:

```js
{
  id: 'unik-streng-id',          // bruges af motoren, må ikke ændre sig
  icon: '○',                      // ét ASCII/Unicode-tegn
  title: 'At møde klienten',      // overskrift
  subtitle: 'Filosofien bag',     // underskrift
  sections: [
    {
      heading: 'Et afsnit',
      paragraphs: [
        'Første afsnit som tekst.',
        'Andet afsnit.'
      ]
    },
    // flere afsnit...
  ]
}
```

**Tilladt indhold:** Generelle principper, samtale-vejledninger,
klientmøde-overvejelser. Det er det nemmeste sted at tilføje indhold
uden at bekymre sig om kliniske detaljer.

### `organs` — Ansigtszoner

> Feltnavnet *organs* er TCM-arv. Læs det som *ansigtszoner*.

```js
{
  id: 'pandezone',                // unik ID
  color: '#2c3e5a',               // accent-farve fra design-system.md
  icon: '◐',                      // ét tegn, lineart-stil
  name: 'Pandezone',              // kortets titel
  nickname: 'Frontallappen',      // anatomisk reference vises i citationstegn
  element: 'Neurologi',           // bredt fokusområde — ikke et TCM-element
  yinYang: 'Højere hjernefunktion', // kort beskrivende tag — ikke yin/yang
  time: 'Frontalt',               // anatomisk placering
  partner: 'Limbisk zone',        // relateret zone
  description: [                  // én eller flere afsnit
    'Pandezonen forbinder til frontallappen — hjernens område for...',
    'I Sorensensistem™ bruges...'
  ],
  themes: [                       // refleksions-spørgsmål, ikke kliniske påstande
    {
      title: 'Indikationer',
      questions: [
        'Oplever klienten manglende fokus eller mental tåge?',
        'Er der tegn på beslutningstræthed?'
      ]
    }
  ],
  keyPoints: [                    // valgfri — vises i 'Nøglepunkter'-fanen
    {
      title: 'Anatomisk reference',
      text: 'Frontallappen ligger bag panden, fra hårgrænsen til...'
    }
  ]
}
```

**Felter med TCM-arvede navne** der **må omfortolkes til Lones univers:**

| Feltnavn | TCM-betydning | Lones brug |
|---|---|---|
| `element` | Træ/Ild/Jord/Metal/Vand | Bredt fokusområde (Neurologi, Lymfe, Hormon, Trauma) |
| `yinYang` | Yin eller yang | Kort funktions-tag (Højere hjernefunktion, Emotionel regulering, ...) |
| `time` | Klokketime fra organuret | Anatomisk placering (Frontalt, Lateralt, Midtsagittal) |
| `partner` | Yin/Yang-organpar | Relateret zone (Pandezone ↔ Limbisk zone) |

Disse felter omdøbes til Lone-passende navne i en senere oprydning. Indtil
da: skriv det indhold der hører til, som beskrevet ovenfor.

### `extraordinaryMeridians` — Behandlingsteknikker

> Feltnavnet er TCM-arv. Læs det som *behandlingsteknikker*.

```js
{
  id: 'colonlink',
  icon: '⊙',
  name: 'Colonlink™',
  nickname: 'Tarm-hjerne-aksen',
  aka: 'Lones eget mikrosystem',
  openingPoint: 'Refleksområder for fordøjelse',  // omfortolket
  coupledPoint: 'Hormonelle pulskontaktpunkter',  // omfortolket
  level: 'Modul 4 — hormonelt og gut-brain',
  description: [
    'Colonlink™ er et mikrosystem udviklet af Lone Sørensen...',
    'Anvendes ved hormonelle ubalancer...'
  ]
}
```

**Felter med TCM-arvede navne:**

| Feltnavn | TCM-betydning | Lones brug |
|---|---|---|
| `openingPoint` | Akupunkturpunkt der "åbner" meridianen | Primært kontaktområde i teknikken |
| `coupledPoint` | Makker-akupunkturpunkt | Sekundært/relateret område |
| `level` | Klassisk dybde-niveau | Hvor i kursusforløbet teknikken introduceres |

### `fiveElements` — Fokusområder

> Feltnavnet er TCM-arv. Læs det som *fokusområder*. Lige nu står
> denne sektion **tom** — den fyldes ind når kursusmateriale er
> tilgængeligt.

Den oprindelige TCM-shape har felter som `chineseName`, `season`,
`organs[]`, `cycles` der **ikke** giver mening hos Lone. Vi har ikke
besluttet hvilke felter Lones fokusområder skal have endnu — det
afventer indhold.

### Oversigter

Flere arrays bruges til hurtige opslag:

- `organOverviews` — kort version af hver ansigtszone
- `meridianOverviews` — kort version af hver teknik
- `symptomReference` — symptom→zone/teknik krydsreference
- `patternLibrary` — sammenhænge mellem zoner og symptomer
- `conversationStructure` — samtalestruktur (kan rumme spørgsmålsserier)

Disse er **alle tomme** lige nu. De fyldes når vi har materiale.

### Stub-objekter (skal ikke ændres uden videre)

Disse felter findes i filen for at motoren kan boote uden fejl, men
har ingen reel betydning hos Lone:

- `organClock` — tomt array (TCM-arv: organuret)
- `tcmFoundation` — minimal stub med `yinYang`, `elementCycles`,
  `organPartnership`-objekter

Når motoren ryddes op (se `docs/motor-arv.md`), fjernes disse helt.

## Sådan tilføjer du indhold

### Tilføj en ansigtszone

1. Åbn [`js/data-lone.js`](../js/data-lone.js)
2. Find `export const organs = [...]`
3. Kopier en eksisterende zone som skabelon
4. Skift `id` til noget unikt (fx `vagus-parasympatisk` → `kæbe-zone`)
5. Udfyld `name`, `nickname`, `description`, og mindst ét tema med
   spørgsmål
6. Test ved at åbne app'en og navigere til Ansigtszoner

### Tilføj en behandlingsteknik

1. Find `export const extraordinaryMeridians = [...]`
2. Kopier en eksisterende teknik
3. Skift `id` til unikt
4. Udfyld `name`, `nickname`, `aka`, `level`, og `description`
5. Hvis du ikke kender `openingPoint`/`coupledPoint` — sæt dem til
   `'[bekræftes med kursusmateriale]'`

### Tilføj en praksis-artikel

1. Find `export const practiceGuide = [...]`
2. Kopier en eksisterende artikel
3. Skift `id`, `title`, `subtitle`
4. Tilføj `sections` — en eller flere afsnit med `heading` og
   `paragraphs[]`

## Konventioner

### ID'er

- Brug korte, beskrivende, lowercase-strings med bindestreg:
  `pandezone`, `colonlink`, `vagus-parasympatisk`
- ID'er må aldrig ændre sig efter oprettelse — de bruges af søgning
  og navigation

### Sprog

- **Dansk hele vejen.** Ingen engelske termer ud over fagudtryk hvor de
  er naturlige (NP-punkter, vagus, palpation)
- **Klinisk-præcis tone** — som beskrevet i `docs/fundament.md`
- **Sorensensistem™** skrives med trademark

### Usikkerhed — `[bekræftes]`-konventionen

Hvis du tilføjer indhold du ikke er 100% sikker på er fra Lones
materiale, så **marker det** i stedet for at gætte:

```js
description: [
  'Vagus-zone behandlingen er [bekræftes med kursusmateriale] — den ' +
  'overordnede beskrivelse er at vagusnerven stimuleres via specifikke ' +
  'punkter i kæbe og hals.'
]
```

Det er bedre at **mangle** indhold end at have **forkert** indhold.
En kursist der ser et `[bekræftes]`-mærke ved, at hun skal kigge i sit
kursusmateriale. En kursist der ser en forkert påstand uden mærke
forledes.

### Tomme felter

Hvis et felt ikke har indhold, lad det være en tom streng (`''`) eller
tom array (`[]`) — aldrig `null` eller `undefined`. Motoren forventer
at felterne findes, og fejler ved fraværende felter.

## Validering

Efter du har tilføjet indhold:

1. **Syntaks-check:** Kør `node --check js/data-lone.js` i terminalen.
   Hvis der er en JavaScript-fejl (manglende komma, citationstegn, osv.)
   stopper appen helt.
2. **Visuel test:** Åbn app'en og naviger til den sektion du ændrede.
   Klik dig ind på det nye element og bekræft at felterne vises korrekt.
3. **Søge-test:** Søg efter et nøgleord fra det nye indhold for at se
   om det optræder i søgeresultater.

## Hvad der ikke skal stå her

- ❌ Specifikke NP-punkt-koordinater du ikke har set i Lones materiale
- ❌ Behandlings-protokoller med præcise sekvenser, antal gentagelser,
  varighed
- ❌ Kliniske påstande om effekt der ikke kan kildeangives
- ❌ Generel "wellness-snak" der lige så godt kunne stå i en hvilken
  som helst alternativ-app
- ❌ Sammenligninger med TCM, qi, meridianer — heller ikke for at
  forklare et koncept

Hold dig til det Lone selv har formuleret offentligt eller i materiale
du har adgang til.
