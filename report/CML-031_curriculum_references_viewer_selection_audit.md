# CML-031 — Curriculum References Viewer Selection Audit

## Summary

Audit di selezione per integrare consultazione fonti curricolari 2012 e 2025 in CurManLight. Docs-only.
Scelta: **Opzione E — Soluzione ibrida**.

Il precedente CML-031 (esempi dimostrativi) è sospeso: priorità ridefinita verso le fonti di riferimento.

## Preflight

| Controllo          | Esito             |
| ------------------ | ----------------- |
| HEAD partenza      | `2e27114` ✅      |
| Working tree       | Pulita ✅         |
| MEMORY.md presente | ✅ non committato |
| Runtime modificato | ❌ Nessuno        |

## Opzioni valutate

| #     | Opzione                 | Valore docente | Rischio tecnico | Rischio istituzionale | Raccomandazione    |
| ----- | ----------------------- | -------------- | --------------- | --------------------- | ------------------ |
| A     | Link ufficiali MIM      | Basso          | Nullo           | Nullo                 | Base minima        |
| B     | Viewer PDF incorporato  | Alto           | Medio           | Basso                 | Buona, ma peso     |
| C     | Indice navigabile       | Alto           | Medio           | Medio                 | Utile ma rischiosa |
| D     | Testo completo nell'app | Alto           | Alto            | Alto                  | **Sconsigliata**   |
| **E** | **Soluzione ibrida**    | **Alto**       | **Basso**       | **Basso**             | **Consigliata**    |

## Dettaglio opzione E

Componenti: (1) link ufficiali MIM, (2) schede sintetiche non sostitutive, (3) indice navigabile essenziale, (4) avvertenza istituzionale.
Nessuna riproduzione integrale dei testi ministeriali.

## Esito

```
CML_031_CURRICULUM_REFERENCES_VIEWER_SELECTION_AUDIT_READY
```

## Prossimo step

**CML-032** — Implementazione sezione "Fonti curricolari" in `index.html` + deploy + smoke.
Non serve CML-031A (contratto): opzione E è sufficientemente definita e conservativa.
