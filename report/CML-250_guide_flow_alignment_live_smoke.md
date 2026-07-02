# CML-250 — GUIDE FLOW ALIGNMENT LIVE SMOKE

## Sintesi esecutiva

Verifica live completata con successo. Il micro-UX introdotto in CML-249 (allineamento Guida al percorso operativo Docente → Dipartimento → Referente → Documento finale/Esportazioni) è correttamente pubblicato su GitHub Pages. Tutte le verifiche funzionali e di contenuto hanno esito positivo.

## Verifica deploy

- **Commit**: `1fa69b6c5713bc6aa98ed1416c04ac644dd227b2`
- **Branch**: main
- **Workflow Pages**: conclusione `success`
- **URL**: `https://antoniocorsano-boop.github.io/curmanlight/`
- **Deploy automatico**: triggerato da push su `_published_snapshot/netlify-current/**

## Contenuti verificati

### Home — "Percorso di lavoro"

```
1. Docente — prepara la proposta → Esito: proposta pronta per il confronto
2. Dipartimento — confronta → Esito: esito dipartimentale definito
3. Referente — valida → Esito: validazione pronta per il documento finale
4. Documento finale — esporta → Esito: materiale pronto per condivisione e archiviazione
```

### Guida — "Cosa fare in base al ruolo"

```
🧭 Cosa fare in base al ruolo
Usa la Guida insieme al percorso di lavoro: ogni ruolo ha un compito essenziale e un esito da produrre.

1. Docente — Revisione/Esportazioni → Esito: proposta pronta per confronto dipartimentale
2. Dipartimento — Processo → Esito: esito dipartimentale da consegnare al referente
3. Referente — Processo → Esito: validazione finale del percorso di revisione
4. Documento finale/Esportazioni — Esportazioni → Esito: curricolo aggiornato e file di supporto

Se non sai da dove partire, individua prima il tuo ruolo e poi segui l'azione indicata.
```

### Esportazioni — riferimento al percorso

```
Percorso di lavoro: docente prepara la proposta → dipartimento confronta e registra l'esito → referente controlla e valida → documento finale in Esportazioni.
```

## Confronto atteso/reale

| Elemento | Atteso | Reale | Esito |
|---|---|---|---|
| Guida sottotitolo | "Ogni ruolo ha un compito..." | Presente | ✅ |
| Guida card title | "Cosa fare in base al ruolo" | Presente | ✅ |
| Guida 4 fasi | Docente, Dipartimento, Referente, Doc. finale | Presenti | ✅ |
| Guida esiti | 4 esiti attesi | 4 esiti attesi | ✅ |
| Guida microtesto | "Se non sai da dove partire..." | Presente | ✅ |
| Home "Percorso di lavoro" | 4 fasi con esiti | Presente (invariato) | ✅ |
| Processo accessibile | Navigazione funzionante | Funzionante | ✅ |
| Esportazioni accessibile | Navigazione funzionante | Funzionante | ✅ |
| Riferimento percorso in Esportazioni | "Percorso di lavoro: docente → dipartimento → ..." | Presente | ✅ |

## Rischi evitati

- **Nessuna regressione** della navigazione principale
- **Nessuna duplicazione pesante** tra Home e Guida — il primo resta sintesi, la seconda aggiunge dettaglio operativo
- **Nessun errore console** introdotto
- **Nessun cambiamento** a JS, CSS, storage, schema

## Checklist finale

- [x] commit CML-249 pushato su origin/main
- [x] GitHub Pages workflow completato con successo
- [x] URL live raggiungibile
- [x] Home "Percorso di lavoro" ancora visibile
- [x] Guida "Cosa fare in base al ruolo" visibile
- [x] 4 fasi complete e leggibili
- [x] Navigazione Guida → Processo → Esportazioni funzionante
- [x] Hash/tab non rotti
- [x] Nessun errore console bloccante
- [x] No deploy manuale eseguito
- [x] No push eseguito

## Verdict

```
CML_250_GUIDE_FLOW_ALIGNMENT_LIVE_SMOKE_PASSED
```
