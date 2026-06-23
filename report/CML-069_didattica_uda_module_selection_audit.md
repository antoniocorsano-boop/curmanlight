# CML-069 — Didattica UDA Module Selection Audit — Report

**Stato:** ✅ Completed  
**HEAD:** `6a6c87f`  
**Nessuna modifica runtime, nessun deploy**

## Matrice opzioni

| Criterio | A (read-only) | B (guidata) | C (esportabile) | D (editor) | E (generatore) |
|----------|:---:|:---:|:---:|:---:|:---:|
| Valore | Alto | Medio-alto | Alto | Alto | Alto |
| Rischio | **Basso** | Medio | Medio-alto | Alto | Alto |
| Complessità | **Bassa** | Media | Media | Alta | Molto alta |
| UX (leggibilità) | ✅ Buona | ⚠️ Rischiosa | ✅ Buona | ⚠️ Complessa | ⚠️ Rischiosa |
| Coerenza modello Didattica | ✅ Progettazione | ✅ | ⚠️ | ❌ | ❌ |
| Impatto schema .cml | **Nessuno** | Nessuno | Medio | Nessuno | Nessuno |
| Impatto runtime futuro | **Minimo** | Medio | Medio | Alto | Alto |
| Facilità smoke | ✅ Alta | ✅ Media | ✅ Media | ❌ Bassa | ❌ Bassa |
| Priorità contratto | ✅ Alta | Media | Media | Bassa | Bassa |

## Scelta motivata: Opzione A

**UDA read-only da unità Tecnologia** — la scelta più sicura e di maggior valore immediato.

### Perché A e non B

L'opzione B (guidata senza salvataggio) crea aspettativa di persistenza: l'utente scrive, poi perde tutto al refresh. Read-only è più onesto e meno rischioso.

### Perché A e non C

L'opzione C (esportabile) introduce un nuovo output che può essere confuso con un documento ufficiale. Il modello UDA deve prima essere stabile e comprensibile, poi esportabile.

### Perché A e non D/E

D ed E sono troppo complesse per questa fase. Richiedono contratti dati, logica di stato e validazione che non esistono ancora.

## Rischi evitati

| Rischio | Come A lo evita |
|---------|-----------------|
| Confusione con documento approvato | Microcopy obbligatoria + read-only |
| Aspettativa salvataggio | Nessun campo editabile |
| Export prematuro | Nessun export nuovo |
| Complessità schema .cml | Nessuna modifica |
| Lock-in su modello UDA | Solo 1-2 esempi, nessuna struttura dati persistente |
| Sovrapposizione Curriculum | Confine Didattica > Progettazione (contratto CML-065) |

## Roadmap Didattica (aggiornata)

| CML | Modulo | Tipo | Stato |
|-----|--------|------|-------|
| CML-067 | Selezione modulo | Audit | ✅ |
| CML-068 | Valutazione/Evidenze (prototipo read-only) | Runtime | ✅ |
| CML-068A | Valutazione/Evidenze (deploy + smoke) | Deploy | ✅ |
| CML-068B | UX density audit | Audit | ✅ |
| **CML-069** | **Selezione modulo UDA** | **Audit** | **⬅️** |
| **CML-070** | **UDA read-only (prototipo)** | **Runtime** | **⬆️ prossimo** |
| CML-071 | Attività didattiche (selezione) | Audit | Futuro |
| CML-072 | Programmazione annuale (selezione) | Audit | Futuro |

## Criteri di successo per CML-070

1. Scheda UDA read-only visibile in area Didattica
2. Dati provenienti da `TECNOLOGIA_NORM_DATA`
3. Almeno 1 UDA modello per ordine (Infanzia, Primaria, Secondaria)
4. Campi: titolo, disciplina, ordine/classe, durata, competenza, traguardo, obiettivi, conoscenze, abilità, attività, metodologia, materiali, evidenze, criteri, adattamenti, nota, fonte, validazione
5. Layout espandibile, filtrabile per ordine
6. Microcopy prudente: "modello didattico non approvato", "da adattare alla classe"
7. Nessun campo editabile
8. Nessun salvataggio
9. Nessun export nuovo
10. Nessuna modifica schema .cml
11. Nessuna modifica Curriculum
12. Nessun errore console
13. Mobile responsive

## Verdetto

`CML_069_DIDATTICA_UDA_MODULE_SELECTION_AUDIT_READY`
