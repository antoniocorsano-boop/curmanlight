# CML-421E — Mock C: Workspace professionale a pannelli

## 1. Idea generale

Mock pensato per referente curricolo, dipartimento e lavoro continuativo di revisione.

Priorità:

```text
potenza operativa
fonti sempre visibili
contesto sempre visibile
processo e stati sotto controllo
alta densità informativa
```

## 2. Layout desktop

```text
┌────────────────────────────────────────────────────────────────────┐
│ Ambiente curricolare d'istituto   Stato: processo attivo           │
│ Secondaria · Tecnologia · A.S. 2026/27       [Impostazioni] [Guida]│
├───────────────┬──────────────────────────────────────┬─────────────┤
│ NAVIGAZIONE   │ CONTENUTO                            │ CONTESTO    │
│               │                                      │             │
│ Curricolo     │ Titolo vista                         │ Fonte       │
│ Progettazione │ Contenuto principale                 │ Versione    │
│ Esportazione  │ Azioni                               │ Stato       │
│ Riferimenti   │ Tabelle/Card                         │ Avvisi      │
│               │                                      │ Validazione │
└───────────────┴──────────────────────────────────────┴─────────────┘
```

## 3. Home

Home come dashboard:

```text
Stato curricolo
Stato processo
Fonti aperte
Documenti recenti
Azioni da completare
Accessi principali
```

## 4. Curricolo / Consulta

```text
Sinistra: discipline e ordini
Centro: contenuto curricolare
Destra: fonte, versione, stato, azioni
```

## 5. Curricolo / Fonti

```text
Centro: tabella fonti
Destra: scheda fonte selezionata

Campi:
- titolo
- ente/autore
- livello
- stato verifica
- uso consentito
- vista collegata
```

## 6. Curricolo / Versioni

```text
Centro: tabella versioni
Destra: dettaglio versione

Stati:
- vigente
- proposta
- in revisione
- sintesi finale pronta
- approvata esternamente
- adottata se atto presente
```

## 7. Curricolo / Processo

```text
Pipeline orizzontale:
Docente → Dipartimento → Referente → Organi esterni

Pannello centrale:
- proposte
- esiti
- report
- decisioni aperte

Pannello destro:
- stato processo
- avvisi governance
- validazione umana
```

## 8. Progettazione didattica

```text
Sinistra: classe / unità / documento
Centro: programmazione o UDA
Destra: curricolo collegato / evidenze / stato documento
```

## 9. Esportazione

```text
Sinistra: categorie documenti
Centro: elenco documenti disponibili
Destra: requisiti, formato, stato, cautele
```

Categorie:

```text
Per la classe
Per la progettazione
Per il curricolo
Per il processo
Archivio e sicurezza
```

## 10. Riferimenti e guida

```text
Centro: contenuto guida
Destra: link rapidi a fonti, ruoli, limiti
```

## 11. Impostazioni / Contesto di lavoro

```text
Pannello centrale: campi contesto
Pannello destro: effetto del contesto sulle aree
```

## 12. Mobile

Adattamento più difficile:

```text
pannelli trasformati in sezioni espandibili
contesto come drawer
bottom bar sempre presente
```

## 13. Punti forti

```text
potente per lavoro curricolare avanzato
ottimo per fonti/versioni/processo
molto utile a referente e dipartimento
chiaro nel distinguere contesto, contenuto e stato
```

## 14. Rischi

```text
più complesso per docente non tecnico
mobile più difficile
runtime più impegnativo nel single-file attuale
rischio sovraccarico visivo
```

## Verdict

```text
CML_421E_MOCK_C_PROFESSIONAL_WORKSPACE_READY
```
