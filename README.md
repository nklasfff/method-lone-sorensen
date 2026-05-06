# Metode Lone Sørensen — Opslagsværk

Et opslagsværk og arbejdsrum til kursister hos [Lone Sørensen](https://metodelonesorensen.dk).
Bygget som en progressiv webapp (PWA) — installerbar på telefonen, fungerer
offline, ingen indlogning, ingen sky.

Indholdet dækker **Sorensensistem™** — ansigtszoneterapi, refleksterapi
og neurologisk behandling, som det undervises på Lones uddannelser.

## Kør lokalt

Ingen build-step. Vælg én af disse:

```bash
npx http-server . -p 8765 -c-1
# eller
python3 -m http.server 8765
```

Åbn dernæst `http://localhost:8765` i browseren.

I Claude Code starter en preview-server automatisk via `.claude/launch.json`.

## Projektstruktur

| Fil/mappe | Indhold |
|-----------|---------|
| [`CLAUDE.md`](CLAUDE.md) | Projektets memorial — principper, beslutninger, forbud |
| [`docs/`](docs/) | Designdokumentation, indholdsstruktur, motor-arv |
| `index.html` | Alle skærme i én fil (single-page app) |
| `css/style.css` | Design-system — farver, typografi, komponenter |
| `js/app.js` | App-logik — navigation, søgning, tema |
| `js/data-lone.js` | Lones faglige indhold |
| `manifest.json` | PWA-manifest |

For en udførlig beskrivelse — se [`CLAUDE.md`](CLAUDE.md).

## Status

App'en er under opbygning. Motoren (navigation, struktur, søgning) er på
plads og overført fra et tidligere projekt; visuel identitet og fagligt
indhold bygges gradvist op til at afspejle Lones univers. Se
[`docs/motor-arv.md`](docs/motor-arv.md) for arvelisten og
[`docs/fundament.md`](docs/fundament.md) for det pædagogiske grundlag.

## Bidrag

Det faglige indhold tilføjes i `js/data-lone.js`. Strukturen er beskrevet
i [`docs/indholds-struktur.md`](docs/indholds-struktur.md). Hvis du er
i tvivl om noget fagligt — marker det `[bekræftes med kursusmateriale]`
frem for at gætte.

## Licens

Indholdet om Sorensensistem™ tilhører Lone Sørensen. Selve app-koden er
til intern brug i undervisningsregi.
