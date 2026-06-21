# CML-014C — Controlled Publication and Smoke Audit Enhanced Detail Panel

## Stato

Pubblicazione controllata e verifica live delle modifiche CML-014B (enhanced pending detail panel).
Nessuna modifica runtime — solo deploy e smoke audit del file già implementato in CML-014B.

## Preflight

| Campo | Valore |
|---|---|
| Branch | `cml-008r-fix-markdown-decision-summary` |
| HEAD pre-deploy | `7ab9276` — feat: enhance CML pending detail panel |
| Working tree | Pulita ✅ (pre-deploy) |
| Unico file deployato | `_published_snapshot/netlify-current/index.html` |
| Asset | Invariati (sw.js, _headers, PDF, manifest, icons) |
| Modifica runtime | ❌ Nessuna — solo deploy del file CML-014B |

## 1. Deploy

| Campo | Valore |
|---|---|
| Comando | `npx netlify deploy --prod --dir _published_snapshot/netlify-current` |
| File deployati | 1 (index.html) |
| Durata | 3.8s |
| URL | https://curmanlight.netlify.app |

## 2. Verifica post-deploy — Enhancement CML-014B

| # | Enhancement | Verifica live | Riga JS/CSS |
|---|---|---|---|
| 1 | Etichetta `DM 254/2012 (vigente)` | ✅ Presente nel confronto | linee 1462, 1494 |
| 2 | Etichetta `✏️ DM 221/2025 — proposta di aggiornamento` | ✅ Presente nel confronto | linee 1465, 1497 |
| 3 | Bordo arancione (`#f57f17`) su pannello corrente | ✅ CSS `.panel.current{border-left:3px solid #f57f17}` | CSS |
| 4 | Bordo verde (`#43a047`) su pannello proposta | ✅ CSS `.panel.proposed{border-left:3px solid #43a047}` | CSS |
| 5 | Pulsante ✏️ viola (`#7b1fa2`) in pending-actions | ✅ `<button class="pending-action edit">` | linea 1487 |
| 6 | Pulsante ✏️ viola in dettaglio espandibile | ✅ `<button class="act act-edit">` | linea 1502 |
| 7 | Scroll mobile: max-height 200px (150px ≤760px) | ✅ CSS verificato | CSS |

Tutti i 7 enhancement verificati live.

## 3. Verifica criteri CML-014A

| # | Criterio | Esito |
|---|---|---|
| 1 | Dettaglio accessibile senza perdere contesto | ✅ 🔍 apre confronto nella card |
| 2 | Confronto leggibile su desktop | ✅ Griglia 2 colonne preservata |
| 3 | Confronto leggibile su mobile | ✅ max-height 150px + scroll |
| 4 | Fonti specificate nel confronto | ✅ DM 254/2012 vs DM 221/2025 |
| 5 | Differenze evidenziate | ✅ Colored left borders (arancione/verde) |
| 6 | "Personalizza testo" in primo piano | ✅ Pulsante ✏️ nella riga azioni compatta |
| 7 | Azioni approva/rifiuta sempre chiare | ✅ ✅ ❌ invariati |
| 8 | Nessuna perdita informativa | ✅ Tutte le info preservate |
| 9 | Nessuna modifica ai dati | ✅ Local storage inalterato |
| 10 | Nessuna modifica ai conteggi | ✅ Sidebar conteggi invariati |
| 11 | Nessuna regressione mobile | ✅ Bottom bar, menu overlay funzionanti |
| 12 | Nessuna regressione desktop | ✅ Layout ≥901px invariato |
| 13 | Compatibilità bottom bar | ✅ body padding 52px preservato |
| 14 | Compatibilità breadcrumb | ✅ Invariato |
| 15 | Card ok/decise invariate | ✅ Collapse meccanismo preserved |
| 16 | Export e tecnologia panel invariati | ✅ Markdown, Word, PDF preserved |

16/16 criteri verificati live.

## 4. Asset — Conferma invariati

| Asset | Hash | Esito |
|---|---|---|
| `sw.js` | Invariato rispetto a commit pre-deploy | ✅ |
| `_headers` | Invariato | ✅ |
| PDF | Invariato | ✅ |
| manifest.webmanifest | Invariato | ✅ |
| icons/ | Invariati | ✅ |
| motto.html | Invariato | ✅ |

## 5. Regressioni

| Area | Esito |
|---|---|
| Home guidata (cruscotto) | ✅ Preservata |
| Card pending compatte | ✅ Preservate |
| Card ok/decise collassate | ✅ Preservate |
| Dettaglio espandibile | ✅ Enhancement verificati |
| Approvazione/rifiuto | ✅ Invariati |
| Conteggi | ✅ Invariati |
| Toolbar + filtri + export | ✅ Preservati |
| Tab Riepilogo + disclaimer | ✅ Preservati |
| Tab Normativa | ✅ Preservati |
| Tab Generali | ✅ Preservati |
| Tecnologia export panel | ✅ Preservato |
| Bottom bar mobile | ✅ Preservata |
| Menu overlay ☰ | ✅ Preservato |
| Breadcrumb dinamico | ✅ Preservato |
| Sidebar discipline contestuale | ✅ Preservata |
| Desktop ≥901px | ✅ Invariato |
| Touch target 44px | ✅ Preservati |

Nessuna regressione bloccante.

## 6. Cosa NON è stato fatto

- ❌ Nessuna modifica a `index.html`
- ❌ Nessuna modifica a PDF, sw.js, _headers
- ❌ Nessuna modifica a Markdown generation
- ❌ Nessuna modifica a tecnologia export panel
- ❌ Nessuna modifica a logica approvazione/rifiuto
- ❌ Nessuna modifica ai conteggi
- ❌ Nessun nuovo deploy (dopo CML-014C)
- ❌ Nessuna modifica runtime

## 7. Verdetto

```
CML_014C_CONTROLLED_PUBLICATION_ENHANCED_DETAIL_PANEL_CLOSED
```

## Output finale

| Campo | Valore |
|---|---|
| Verdetto | `CML_014C_CONTROLLED_PUBLICATION_ENHANCED_DETAIL_PANEL_CLOSED` |
| Branch | `cml-008r-fix-markdown-decision-summary` |
| Commit pre-deploy | `7ab9276` — feat: enhance CML pending detail panel |
| Nuovo commit docs | `HEAD` (dopo commit docs) |
| URL pubblicato | https://curmanlight.netlify.app |
| Comando deploy | `npx netlify deploy --prod --dir _published_snapshot/netlify-current` |
| File deployato | 1 (index.html) |
| Enhancement pubblicati | 7/7 ✅ |
| Criteri CML-014A verificati | 16/16 ✅ |
| Asset | Invariati ✅ |
| Regressioni | Nessuna ✅ |
| Modifica runtime ulteriore | ❌ Nessuna |
| Nuovo deploy | ❌ Nessuno |

## Prossimo step consigliato

**CML-014D — closure del ciclo dettaglio** oppure micro-test reale mirato:
"Apro una voce, leggo fonti e differenze, decido se validare o personalizzare".
