# CML-014C — Controlled Publication and Smoke: Enhanced Pending Detail Panel

## Summary

Pubblicazione controllata su Netlify del file `index.html` contenente le modifiche CML-014B (enhanced pending detail panel) e verifica post-deploy completa. Nessuna modifica runtime — solo deploy + smoke audit.

## Preflight

- **Branch:** `cml-008r-fix-markdown-decision-summary`
- **HEAD pre-deploy:** `7ab9276` — feat: enhance CML pending detail panel
- **Working tree:** Pulita
- **File deployato:** 1 (`_published_snapshot/netlify-current/index.html`)
- **Asset:** sw.js, _headers, PDF — tutti invariati

## Deploy

```
npx netlify deploy --prod --dir _published_snapshot/netlify-current
```

- 1 file, 3.8s
- URL: https://curmanlight.netlify.app

## Verifica live — 7 enhancement CML-014B

| Enhancement                                      | Esito |
| ------------------------------------------------ | ----- |
| `DM 254/2012 (vigente)`                          | ✅    |
| `✏️ DM 221/2025 — proposta di aggiornamento`     | ✅    |
| Bordo arancione (`#f57f17`) su pannello corrente | ✅    |
| Bordo verde (`#43a047`) su pannello proposta     | ✅    |
| Pulsante ✏️ viola (`#7b1fa2`) in pending-actions | ✅    |
| Pulsante ✏️ viola in dettaglio espandibile       | ✅    |
| Scroll mobile 200px (150px ≤760px)               | ✅    |

## Verifica live — 16 criteri CML-014A

16/16 criteri verificati. Nessuna regressione.

## Asset invariati

sw.js, _headers, PDF, manifest.webmanifest, icons, motto.html — tutti invariati rispetto al commit pre-deploy.

## Regressioni

Nessuna regressione bloccante rilevata. Tutte le aree (cruscotto, card, dettaglio, toolbar, export, tabs, navigazione mobile, touch target) preservate.

## Verdetto

```
CML_014C_CONTROLLED_PUBLICATION_ENHANCED_DETAIL_PANEL_CLOSED
```

## Output

| Campo             | Valore                                                                |
| ----------------- | --------------------------------------------------------------------- |
| URL               | https://curmanlight.netlify.app                                       |
| Comando deploy    | `npx netlify deploy --prod --dir _published_snapshot/netlify-current` |
| Commit pre-deploy | `7ab9276`                                                             |
| File deployato    | index.html                                                            |
| Enhancement       | 7/7 ✅                                                                |
| Criteri CML-014A  | 16/16 ✅                                                              |
| Asset             | Invariati ✅                                                          |
| Regressioni       | Nessuna ✅                                                            |
| Modifiche runtime | ❌ Nessuna                                                            |
| Nuovo deploy      | ❌ Nessuno                                                            |

## Prossimo step

CML-014D — closure ciclo dettaglio o micro-test reale mirato: "apro una voce, leggo fonti e differenze, decido se validare o personalizzare".
