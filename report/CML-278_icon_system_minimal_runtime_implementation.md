# CML-278 - ICON SYSTEM MINIMAL RUNTIME IMPLEMENTATION

## Sintesi
Implementazione runtime minima del contratto CML-277 completata. Le emoji strutturali principali sono state sostituite con icone SVG locali (subset Lucide-like) nelle aree ad alta priorita: header, tabbar principale, Home/cruscotto, Guida rapida e toggle Mostra/Nascondi discipline.

## Interventi applicati
1. Inserito sprite SVG locale nel runtime (subset icone necessario per CML-278).
2. Aggiunte classi CSS leggere per rendering coerente (`ui-icon`, `icon-label`).
3. Sostituite icone emoji in:
   - titolo header e badge avviso principale;
   - tabbar principale;
   - pulsanti cruscotto principali;
   - pulsanti Guida rapida (quick actions + Home inline);
   - card Home di ingresso operativo;
   - pulsante Mostra/Nascondi discipline.
4. Aggiornato toggle UI per mantenere icona + testo nel cambio stato.
5. Riallineata parita root/snapshot tramite copia controllata del runtime aggiornato.

## Accessibilita
- SVG decorative marcate `aria-hidden="true"`.
- Nessun controllo solo-icona introdotto.
- Testo funzionale sempre presente accanto all'icona.

## Invarianti confermate
- logiche curricolari: invariate
- dati curricolari: invariati
- schema `.cml`: invariato
- export/import: invariati
- storage locale/sessione: invariato

## File modificati
- index.html
- _published_snapshot/netlify-current/index.html
- docs/03_execution/CML-278.md
- report/CML-278_icon_system_minimal_runtime_implementation.md
- docs/REPO-MOVELOG.md

## Verdict
`CML_278_ICON_SYSTEM_MINIMAL_RUNTIME_IMPLEMENTATION_READY_LOCAL_NOT_PUSHED`
