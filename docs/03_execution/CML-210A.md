# CML-210A — EDUCAZIONE_FISICA_CONTROLLED_JSON_CONTENT_POLISH_PROVISIONAL

Data: 2026-06-27

## Scopo

Applicare un polish contenutistico controllato e provvisorio a `content/curriculum/educazione-fisica.normalized.json`, mantenendo la struttura a 4 nuclei, senza introdurre un quinto nucleo autonomo e senza modifiche runtime.

Slice: controlled JSON content polish (provisional). Non modifica runtime, non modifica `tools/`, non modifica SchoolKB, non esegue deploy e non esegue push.

## Decisione progettuale provvisoria

```text
Educazione Fisica mantiene temporaneamente il modello a 4 nuclei.

È autorizzato un controlled JSON content polish limitato a:
- migliorare la progressione verticale;
- rendere più espliciti salute, benessere, sicurezza e corretti stili di vita dentro i nuclei esistenti;
- rafforzare Abilità motorie;
- rendere più chiari obiettivi, traguardi, evidenze e wording;
- evitare l'introduzione di un quinto nucleo autonomo senza validazione dipartimentale.

La decisione non equivale a validazione formale del dipartimento.
```

## Collegamenti

- Precedente: CML-204 (gap model), CML-210 (refinement plan — Opzione A), CML-211 (human validation package)
- Seguirà: CML-211B — department validation follow-up (se dipartimento formalizza)

## Contenuti modificati

Solo `content/curriculum/educazione-fisica.normalized.json`:
- `ef_inf_5_001` — Corpo e percezione, Infanzia
- `ef_pri_1_001` — Corpo e percezione, Primaria 1
- `ef_pri_3_001` — Abilità motorie, Primaria 3
- `ef_pri_5_001` — Gioco e sport, Primaria 5
- `ef_sec_1_001` — Corpo e percezione, Secondaria 1
- `ef_sec_2_001` — Gioco e sport, Secondaria 2
- `ef_sec_3_001` — Espressione e inclusione, Secondaria 3

## Cosa è stato modificato

1. **Rafforzamento trasversale "Salute e benessere"** — aggiunti riferimenti a sicurezza, igiene, postura, riscaldamento, benessere scolastico in tutti i nuclei esistenti
2. **Ponte verticale Infanzia→Primaria→Secondaria** — obiettivi e traguardi richiamano esplicitamente le basi motorie dei cicli precedenti
3. **Abilità motorie rafforzate** — Primaria 3: wording più specifico, evidenze calibrate, riferimento a progressione da Primaria 1
4. **Wording obiettivi/traguardi** — più specifico, osservabile, meno generico
5. **Evidenze** — soglie più definite, livelli di padronanza espliciti
6. **Fonti** — aggiunto riferimento a CML-179/CML-183/CML-210/CML-211 come fonte diretta

## Cosa NON è stato modificato

1. Struttura a 4 nuclei — preservata
2. Nessun nuovo nucleo autonomo
3. Nessuna nuova unità di apprendimento
4. Nessuna modifica a ID, ordini, classi, fasce
5. Nessuna modifica runtime
6. Nessuna modifica schema `.cml`
7. Nessuna modifica a `tools/`, `content/curriculum/` (altre discipline), SchoolKB
8. Nessun deploy, nessun push

## Validazioni

- JSON validator: 14/14 PASS, 0 errori
- Shape test: 14/14 PASS
- Educazione Fisica: S=7, N=4, P=7, D=0 (invariato)
- git diff --check: pulito
- Secret scan: negativo

## Invarianti

- 4 nuclei preservati
- 7 unità preservate
- schema `.cml` invariato
- export/import invariati
- funzioni evidenze/UDA invariate
- runtime invariato
- nessuna credenziale/client ID/token
- nessuna dipendenza
- nessun deploy
- nessun push

## Verdetto

`CML_210A_EDUCAZIONE_FISICA_CONTROLLED_JSON_CONTENT_POLISH_PROVISIONAL_READY`
