# CML-397 — Next Phase Selection Audit

## Sintesi
Selezione della prossima fase dopo lo stable checkpoint CML-396. Raccomandazione: **Validazione con utenti**.

## Stato attuale
- **Repository:** Stabile, sincronizzato con origin/main
- **Deploy:** GitHub Pages disponibile
- **Validazioni:** Tutte superate
- **PM consolidati:** PM-03 (45%), PM-06 (70%), PM-07 (40%)

## Alternative valutate

| Alternativa | Benefici principali | Rischi principali | Fattibilità |
|-------------|---------------------|-------------------|-------------|
| Ulteriore maturità UX | Miglioramento continuo | Interventi cosmetici | Alta |
| Documentazione d'uso | Supporto adozione | Obsolescenza rapida | Media |
| **Validazione con utenti** | **Feedback reale** | **Coordinamento utenti** | **Media** |
| Chiusura milestone | Formalizzazione | Prematuro senza test | Alta |

## Scelta: Validazione con utenti

**Motivazione:** Dopo 14 slice di interventi interni, il sistema è stabile e pronto per essere verificato con scenari reali. Serve capire se gli utenti finali comprendono il percorso **consulta → scegli → progetta → esporta → verifica**.

## Catena CML proposta

1. **CML-398** — Protocollo di test utente leggero (docs-only)
2. **CML-399** — Esecuzione test utente (docs-only)
3. **CML-400** — Analisi risultati e decisione successiva (docs-only)

## Criteri di chiusura
- Protocollo di test definito e approvato
- Test eseguito con almeno 1 docente
- Risultati analizzati con raccomandazioni
- Decisione sulla prossima tranche presa

## Verdict
```text
CML_397_NEXT_PHASE_SELECTION_AUDIT_READY
```
