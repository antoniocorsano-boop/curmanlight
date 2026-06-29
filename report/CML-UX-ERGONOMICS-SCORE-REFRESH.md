# CML UX Ergonomics Score Refresh

## Riepilogo esecutivo

Refresh docs-only del punteggio ergonomico dopo la slice CML-UX-NAVIGATION-AND-ORIENTATION. I 3 fix P1 (sidebar Fonti, scroll Evidenze, breadcrumb disciplina) producono un delta netto di +4 punti.

## Punteggi

| Aspetto              | Valore     |
| -------------------- | ---------- |
| Punteggio precedente | 72/100     |
| Punteggio aggiornato | **76/100** |
| Delta complessivo    | **+4**     |

## Delta per area

| Area                              | Pre | Post | Delta |
| --------------------------------- | --- | ---- | ----- |
| Navigazione e orientamento        | 6   | 8    | +2    |
| Densità visiva e carico cognitivo | 10  | 12   | +2    |
| Altre 7 aree                      | —   | —    | 0     |

## Miglioramenti confermati

- Sidebar Fonti: nascosta su desktop in tab normativa/generali — disorientamento eliminato
- Evidenze: da 3-6 a 2-4 schermate di scroll — accordion per ordine con primo gruppo aperto
- Breadcrumb: disciplina attiva visibile in Curriculum/Revisione/Definitivo — orientamento migliorato
- Export Center: nessuna regressione, 6 gruppi preservati, bridge Definitivo intatto
- Validatore: 14/14 PASS
- Shape test: 14/14 PASS

## Aree ancora sotto soglia (score < 70%)

| Area                        | Score      | Gap |
| --------------------------- | ---------- | --- |
| Accessibilità e leggibilità | 6/10 (60%) | 4   |
| Mobile/touch ergonomia      | 7/10 (70%) | 3   |
| Navigazione e orientamento  | 8/10 (80%) | 2   |
| Export Center               | 8/10 (80%) | 2   |

Accessibilità è l'area più distante dal target, seguita da mobile.

## Tabella "per arrivare a 100"

| Priorità | Area                                       | Punti | Sforzo | Slice suggerita           |
| -------- | ------------------------------------------ | ----- | ------ | ------------------------- |
| 1        | Navigazione (hash sync)                    | +2    | Basso  | CML-UX-HASH-SYNC          |
| 2        | Accessibilità (skip link, ARIA, alt-text)  | +4    | Medio  | CML-UX-ACCESSIBILITY-V2   |
| 3        | Microcopy (tablabel compatta)              | +1    | Basso  | CML-UX-MICROCOPY-POLISH   |
| 4        | Architettura (default disciplina neutrale) | +1-2  | Basso  | CML-UX-DEFAULT-DISCIPLINA |
| 5        | Flusso (onboarding guidato)                | +2-3  | Medio  | CML-UX-ONBOARDING         |

## Prossima slice consigliata

**Hash navigation syncing** (estendere `#cur-{disciplina}` a Revisione/Didattica). Sforzo basso, +2 punti immediati su Navigazione, porta la voce a 10/10.

## Rischi se si procede con interventi troppo ampi

- **Accessibilità V2**: può richiedere modifiche estensive al markup. Rischio regressione su layout e UX consolidata. Consigliato solo dopo hash syncing.
- **Flusso onboarding**: richiede nuove componenti UI e test. Sforzo medio-alto, non consigliato in sequenza immediata.
- **Mobile V2**: viewport 360px e scroll Evidenze su mobile sono P2 noti. Rischio di introdurre regressioni responsive.

Raccomandazione: procedere con hash syncing come prossima slice (basso rischio, alto impatto), poi accessibilità sistematica.
