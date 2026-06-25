# CML-147: Controlled Tecnologia Runtime Integration with Fallback

## Fotografia iniziale

| Parametro | Valore |
|-----------|--------|
| Branch | `main` |
| HEAD | `8fb49a0` |
| origin/main | `810ae84` |
| Commit locali ahead | 3 |

## Riferimenti

- CML-145: Opzione C selezionata
- CML-146: Tool generatore creato
- CML-146A: Confronto generato vs hardcoded completato

## Blocco generato usato

```bash
node tools/generate-static-mappa-dati.mjs content/curriculum/tecnologia.normalized.json
```

## Punto integrazione runtime

File: `_published_snapshot/netlify-current/index.html`

Linee 2039-2201:
1. Rinominato `TECNOLOGIA_MAPPA_DATI` → `TECNOLOGIA_MAPPA_DATI_FALLBACK`
2. Aggiunto `TECNOLOGIA_MAPPA_DATI_GENERATA` (blocco pipeline)
3. Fallback: `TECNOLOGIA_MAPPA_DATI = TECNOLOGIA_MAPPA_DATI_GENERATA || TECNOLOGIA_MAPPA_DATI_FALLBACK`

## Discipline coinvolte

- ✅ Solo Tecnologia
- ✅ Matematica e Italiano non toccati

## Controlli statici

| Verifica | Esito |
|----------|-------|
| Struttura JS valida | ✅ |
| Solo Tecnologia modificata | ✅ |
| MATEMATICA_MAPPA_DATI non toccato | ✅ |
| ITALIANO_MAPPA_DATI non toccato | ✅ |

## Conferme

- ✅ Runtime `renderMappaDisciplinare()` invariato
- ✅ JSON/adapter/transformer/generator non modificati
- ✅ Temporanei rimossi

## Prossimo passo

CML-147A — Runtime Smoke per verificare rendering Tecnologia