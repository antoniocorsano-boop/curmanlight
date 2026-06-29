# CML-009E — Controlled Netlify Publication — Top View Lightening

## Riepilogo

Pubblicata la vista utente alleggerita (CML-009B/C/D) su Netlify production.

https://curmanlight.netlify.app

## Cosa è cambiato rispetto alla versione precedente

Prima:

- quick-info-bar (save chip, profilo, azioni)
- orientation-card (5 passi, nota metodologica)
- toolbar con 6 filtri + 5 pulsanti export sempre visibili
- usage-notice sempre espanso
- local-save-bar con testo esteso e 5 pulsanti pieni
- progress-wrap separato (3 righe)
- install-hint visibile di default
- toggle filtri/export come span non accessibili
- pulsanti cruscotto non cambiavano tab

Dopo:

- **Cruscotto minimo**: stato + prossima azione + 3 pulsanti + barra progresso/salvataggio
- **Toolbar compatta**: 2 filtri primari (Tutti/Da decidere), "⋯ Altri filtri" toggle, Export collassato
- **Usage-notice**: collassato in `<details>`
- **Local-save-bar**: pulsanti compatti
- **Install-hint**: nascosto di default
- **Toggle accessibili**: `<button type="button" class="toolbar-toggle">` + `button:focus-visible`
- **Coerenza cross-tab**: `setTab('lavoro')` prima delle azioni

## Dettaglio deploy

| Parametro      | Valore                                                                |
| -------------- | --------------------------------------------------------------------- |
| Comando        | `npx netlify deploy --prod --dir _published_snapshot/netlify-current` |
| File deployati | 1 (index.html)                                                        |
| Durata         | 4s                                                                    |
| URL produzione | https://curmanlight.netlify.app                                       |
| Unique deploy  | https://6a378c2be64a2ac4b706115a--curmanlight.netlify.app             |

## Verifiche

- Preflight: ✅
- Locale (27 check): ✅
- Responsivo 360/414/768/1280px: ✅
- Post-deploy (14 check): ✅
- Asset invariati: ✅
- Nessuna modifica runtime oltre index.html: ✅

## Rischi residui

Nessuno bloccante. Osservazioni minori già documentate in CML-009C (P2: touch target salvataggio compatti, P3 originario già corretto in CML-009D).

## Verdetto

```
CML_009E_CONTROLLED_NETLIFY_PUBLICATION_TOP_VIEW_LIGHTENING_CLOSED
```
