# CML-033 — Full Curriculum Viewer Completeness and Status Audit

## Summary

Audit di completezza e stato della sezione "Curricolo di istituto" (CML-032). Il viewer fornisce contenuto disciplinare completo per 14 discipline nelle versioni 2012 e 2025, con stato documento esplicito, indice navigabile e avvertenza istituzionale. Le sezioni generali (Premessa, Profilo, Competenze, ecc.) non sono integrate ma sono accessibili nel tab "Sezioni generali".

## Preflight

| Controllo | Esito |
|---|---|
| HEAD | `65a6930` ✅ |
| Runtime commit da verificare | `c04d903` ✅ |
| Working tree | Pulita ✅ |
| MEMORY.md | ✅ non committato |
| Runtime modificato | ❌ Nessuno (audit-only) |

## Contenuto viewer

### Disciplinare

| Dato | Valore |
|---|---|
| Discipline con dati | 14/14 ✅ |
| Traguardi presenti | ✅ Per tutte le discipline |
| Obiettivi presenti | ✅ Per tutte le discipline |
| Campi proposto 2025 | 117 ✅ |
| Organizzazione per ordine (Infanzia/Primaria/Secondaria) | ✅ |
| Version switch 2012/2025 | ✅ |

### Sezioni curricolari

| Sezione | Viewer "Curricolo" | Tab "Generali" |
|---|---|---|
| Traguardi per disciplina | ✅ COMPLETA | ❌ |
| Obiettivi per disciplina | ✅ COMPLETA | ❌ |
| Version switch + stato | ✅ COMPLETA | ❌ |
| Indice navigabile | ✅ COMPLETA | ❌ |
| Fonti MIM | ✅ COMPLETA | ✅ |
| Avvertenza | ✅ COMPLETA | ✅ |
| Premessa | ❌ Non integrata | ✅ |
| Finalità | ❌ Non integrata | ✅ |
| Profilo studente | ❌ Non integrata | ✅ |
| Competenze chiave | ❌ Non integrata | ✅ |
| Valutazione | ❌ Non integrata | ✅ |
| Inclusione | ❌ Non integrata | ✅ |
| Continuità | ❌ Non integrata | ✅ |
| Orientamento | ❌ Non integrata | ✅ |

## Stato documento

| Versione | Messaggio | Esito |
|---|---|---|
| 2012 | "Stato da verificare — Curricolo basato su D.M. 254/2012. Stato di approvazione non documentato." | ✅ Chiaro, no falsa approvazione |
| 2025 | "Bozza simulata — Versione completa per revisione interna. Non approvata." | ✅ Chiaro, no falsa approvazione |

## Navigabilità

| Controllo | Esito |
|---|---|
| Indice pill | ✅ |
| Version tabs | ✅ |
| Anchor link scroll | ✅ |
| Collapse/expand discipline | ✅ |
| Mobile bottom bar | ✅ |
| Desktop/Mobile responsive | ✅ |

## Decisione

Il viewer "Curricolo di istituto" è **completo per il contenuto disciplinare** (traguardi + obiettivi, 14 discipline, 2 versioni). Le sezioni generali non sono integrate ma sono disponibili nel tab separato "Sezioni generali". Non si raccomanda un CML-034 per popolamento: il livello di completezza è adeguato allo scopo del viewer (consultazione e confronto del contenuto disciplinare oggetto di revisione).

## Esito

```
CML_033_FULL_CURRICULUM_VIEWER_COMPLETENESS_CONFIRMED
```

## Prossimo step

Valutare se aprire un ciclo su:
- onboarding in-app;
- guida contestuale;
- archivio file;
- esempi dimostrativi (CML-031 sospeso);
- oppure chiudere il ciclo viewer e passare a manutenzione/debito tecnico.
