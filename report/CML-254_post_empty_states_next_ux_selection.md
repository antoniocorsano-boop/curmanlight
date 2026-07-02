# Report CML-254 — Post-Empty-States Next UX Selection

**Data:** 2026-07-02

## Sintesi esecutiva

Audit di pianificazione dopo il completamento della catena CML-252 → CML-253 (empty states action messages). Tre aree candidate valutate: Esportazioni, UDA smart/Programmazione, Audit finale di maturità UX. Scelta: **CML-255 — EXPORTS ROLE-BASED CLARITY MICRO-UX**, per rendere più chiaro il momento finale del lavoro: cosa esportare, per quale ruolo e con quale scopo.

## Stato tecnico di partenza

- Repository allineato a `origin/main` (`0d37e07`)
- Working tree pulito
- Ultima slice runtime: CML-252 (empty states action messages)
- Ultima slice docs: CML-253 (live smoke)

## Riepilogo catena CML-252 → CML-253

| Slice | Tipo | Esito |
|-------|------|-------|
| CML-252 | runtime microfix | 5 messaggi azione migliorati |
| CML-252P | controlled push | Pushato a origin/main |
| CML-253 | live smoke + docs | Verificato su GitHub Pages: 5/5 messaggi confermati |

## Analisi delle tre aree candidate

### Area 1 — Esportazioni

**Stato attuale:**
- La sezione Esportazioni contiene 6 gruppi (Documento finale, Confronto modifiche, Bozza disciplina, File di lavoro CurManLight, Report e resoconti, Copia di sicurezza)
- Ogni gruppo ha un role badge (es. "Referente · Collegio", "Docente · Dipartimento")
- Descrizioni brevi presenti ma **non collegate esplicitamente al flusso di processo**: Docente → Dipartimento → Referente → Documento finale

**Problemi identificati:**
- Utenti non esperti faticano a distinguere: file `.cml` (scambio lavoro), Word/PDF (documento finale), copia di sicurezza (backup)
- Nessuna guia "Quale esportazione usare in base al ruolo?"
- I pulsanti sono funzionali ma privi di orientamento contestuale
- La relazione tra ruolo, fase del percorso e tipo di file non è esplicita

**Impatto previsto dell'intervento:**
- Alto: la sezione Esportazioni è il punto di arrivo del percorso
- Riduce il carico cognitivo per utenti non esperti
- Completa il quadro del flusso Docente → Dipartimento → Referente → Documento finale

### Area 2 — UDA smart / Programmazione

**Stato attuale:**
- Già migliorata in slice precedenti
- Messaggi "Passo suggerito" e filtri funzionanti
- Relazione curricolo → programmazione → UDA documentata nei messaggi guida

**Problemi identificati:**
- La relazione tra i tre livelli è ancora implicitamente compresa
- Richiederebbe un intervento più strutturato (medio rischio, medio impatto)
- Utenti occasionali potrebbero beneficiare di ulteriore orientamento

**Impatto previsto:**
- Medio: riguarda la progettazione didattica, non il percorso di revisione
- Rischio medio: tocca più sezioni e più logica

### Area 3 — Audit finale di maturità UX

**Stato attuale:**
- Home, Guida, Processo, Esportazioni e messaggi azione coperti
- Residui P2/P3 non ancora emersi come bloccanti

**Problemi identificati:**
- Audit puro non produce valore immediato per l'utente
- Meglio rimandare dopo un altro ciclo di miglioramenti runtime

**Impatto previsto:**
- Basso: attività di verifica, non di miglioramento
- Utile come fase di chiusura del ciclo UX, non come prossimo passo

## Motivazione della scelta

| Fattore | Esportazioni | UDA smart | Audit |
|---------|-------------|-----------|-------|
| Impatto utente | Alto | Medio | Basso |
| Rischio tecnico | Basso | Medio | Nullo |
| Coerenza con flusso | Alto | Medio | Medio |
| Dimensione runtime | Piccola | Media | Nessuna |
| Urgenza percepita | Alta | Media | Bassa |

**Esportazioni vince** su tutti i fattori: massimo impatto, minimo rischio, dimensione contenuta e coerenza massima con il percorso di lavoro.

## Perimetro consigliato per CML-255

- Solo microcopy in `index.html` (sezione Esportazioni)
- Aggiungere un blocco "Quale esportazione usare?" (o equivalente) che guidi per ruolo
- Collegare ogni gruppo di esportazione alla fase del percorso
- Nessuna modifica a storage, schema `.cml`, import/export, dipendenze
- Nessuna nuova funzione
- Nessuna rete/API/OAuth/backend

## Rischi da evitare

- Non duplicare la Guida o la Home: il blocco deve essere compatto e posizionato nella sezione Esportazioni
- Non modificare la logica di export, i formati o i contratti
- Non introdurre stati o messaggi ridondanti
- Mantenere il principio "una schermata, una decisione"

## Criteri preliminari di accettazione per CML-255

1. Un utente non esperto deve capire quale pulsante usare in base al proprio ruolo
2. La relazione tra fase del percorso (Docente/Dipartimento/Referente/Documento finale) e tipo di esportazione deve essere esplicita
3. Nessuna nuova dipendenza
4. Nessuna modifica a storage o schema `.cml`
5. Validatori 14/14 PASS e shape test 14/14 PASS
6. `git diff --check` OK

## Checklist

- [x] repository preflight verified
- [x] post-empty-states live result reviewed
- [x] UX candidate areas reviewed
- [x] next runtime slice selected
- [x] runtime unchanged
- [x] no deploy executed
- [x] no push executed
- [x] verdict recorded

## Verdict

`CML_254_POST_EMPTY_STATES_NEXT_UX_SELECTION_READY_LOCAL_NOT_PUSHED`
