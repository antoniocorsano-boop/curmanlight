# CML-151: Live Deploy Alignment After Tecnologia Content Gap

## Stato iniziale

| Parametro | Valore |
|-----------|--------|
| Branch | `main` |
| HEAD | `d69ea5a` |
| origin/main | `b3fb181` |

## URL live

https://antoniocorsano-boop.github.io/curmanlight/index.html

## Confronto locale/live

| Elemento | Locale | Live |
|----------|--------|------|
| `TECNOLOGIA_MAPPA_DATI_GENERATA` | ✅ | ❌ |
| `TECNOLOGIA_MAPPA_DATI_FALLBACK` | ✅ | ❌ |
| `GENERATA\|\|FALLBACK` | ✅ | ❌ |

## Causa

**A — Deploy non aggiornato**

Il workflow GitHub Pages non ha processato il commit CML-147.

## Azione

Attendere deploy o verificare su Netlify.