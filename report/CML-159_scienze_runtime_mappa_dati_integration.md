# CML-159 — Scienze Runtime Mappa Dati Integration

## Riepilogo esecutivo

Integrazione della disciplina Scienze nella vista read-only "Mappa disciplinare" della sezione "Competenze e progettazione", allineandola alle discipline già presenti (Tecnologia, Matematica, Italiano).

## Contesto

- **HEAD iniziale**: `31b2243` (sync con `origin/main`)
- **Slice precedente**: CML-158 — UI_UX_3D_LANDING_STUDY_ARCHIVE
- **Tipo slice**: runtime increment — integrazione mappa disciplinare Scienze
- **File modificato**: `_published_snapshot/netlify-current/index.html` (+4 righe)

## Modifiche applicate

### 1. Pulsante selettore disciplina

Aggiunto pulsante Scienze al selettore discipline della mappa disciplinare:

```html
<button class="mappa-disc-btn" onclick="setMappaDisciplina('scienze',this)" style="...">Scienze</button>
```

### 2. Variabile `SCIENZE_MAPPA_DATI`

Aggiunto blocco dati completo con:
- **5 strutture sostanziali**: Osservazione e metodo scientifico, Viventi e ambiente, Materia e trasformazioni, Terra/ambiente/sostenibilità, Energia e fenomeni
- **5 nodi disciplinari**: derivati dai nuclei del JSON normalizzato
- **9 progressioni verticali**: Infanzia (fascia 5) → Secondaria (classe 3)
- **3 decisioni curricolari**: stato `da_validare`, fonti Indicazioni Nazionali 2012 + D.M. 221/2025

### 3. Switch rendering

Aggiunto branch nello switch di `renderMappaDisciplinare()`:

```javascript
else if (mappaDisciplinaCorrente === 'scienze' && typeof SCIENZE_MAPPA_DATI !== 'undefined') dati = SCIENZE_MAPPA_DATI;
```

## Perimetro non toccato

- Tecnologia, Matematica, Italiano — invariati
- JSON disciplinari (`content/curriculum/*.normalized.json`) — invariati
- Schema `.cml`, import/export, service worker/cache — invariati
- CSS, layout, altre funzioni JS — invariati
- Nessuna nuova dipendenza

## Validazioni

| Controllo | Comando | Esito |
|---|---|---|
| Git diff check | `git diff --check` | ✅ Pulito |
| Git diff stat | `git diff --stat` | 1 file, +4 righe |
| Validatore curriculum | `node tools/validate-cml-normalized-curriculum.mjs` | ✅ 7 file / 94 unità / `overallValid: true` / 0 errori |
| Shape harness | `node tools/test-runtime-mappa-dati-shape.mjs` | ✅ 7/7 discipline PASS (Scienze: S=15 N=5 P=9 D=0) |

## Note

- I dati `SCIENZE_MAPPA_DATI` sono derivati dal JSON normalizzato `content/curriculum/scienze.normalized.json` (15 unità, 5 nuclei)
- Le decisioni curricolari includono riferimenti al D.M. 221/2025 (Fonti di energia come nucleo scientifico autonomo, evoluzione biologica, pensiero critico)
- Tutti gli elementi nuovi hanno stato `da_validare` e `validazioneUmana: true`

## Verdetto

`CML_159_SCIENZE_RUNTIME_MAPPA_DATI_INTEGRATION_READY`