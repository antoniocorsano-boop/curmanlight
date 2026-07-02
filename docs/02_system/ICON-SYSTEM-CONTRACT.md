# ICON SYSTEM CONTRACT

**Stato:** Contratto docs-only
**Riferimenti:** CML-065, CML-267, CML-268, CML-269, CML-270, CML-271, CML-272, CML-273, CML-274, CML-275, CML-276, CML-276E
**Slice:** CML-277
**App:** CurManLight

## 1. Scopo

Definire il sistema icone ufficiale di CurManLight per sostituire progressivamente le emoji strutturali con un subset locale di SVG coerenti, accessibili e indipendenti da CDN/font remoti.

Questo contratto e docs-only e non modifica runtime, dati, schema `.cml`, export/import o storage.

## 2. Problema delle emoji strutturali

Le emoji usate come icone strutturali introducono rischi operativi e di coerenza:

- resa grafica variabile tra OS/browser/font;
- semantica visiva non stabile nel tempo;
- rumore in scenari di encoding/cache stale;
- contrasto e leggibilita non sempre controllabili;
- difficolta di allineamento con una libreria visuale governata.

## 3. Distinzione: icone decorative vs funzionali

- Icone decorative: aggiungono contesto visivo, non cambiano il significato del testo.
- Icone funzionali: identificano azioni, stati, sezioni operative o segnali di affidabilita.

Regola base:

- nelle aree principali, il testo resta sempre visibile accanto all'icona;
- un controllo solo-icona e ammesso solo con `aria-label` esplicita.

## 4. Decisione di sistema

Sistema adottato:

- Lucide SVG subset locale.

Vincoli non negoziabili:

- no CDN;
- no font iconici remoti;
- no dipendenze esterne runtime;
- no emoji come icone strutturali.

## 5. Motivazione no-CDN/no-font-remoto

La scelta locale riduce variabilita e rischi:

- disponibilita offline coerente con PWA statica;
- controllo completo di versione e subset;
- riduzione superfici di failure esterne (latency, outage, policy terze parti);
- controllo a11y/cromia/stroke a livello progetto;
- semplificazione audit e troubleshooting.

## 6. Mappa icone/funzioni (prima versione contrattuale)

| Area/Funzione | Icona Lucide proposta | Note |
|---|---|---|
| Home | `house` | ingresso operativo principale |
| Curricolo vigente | `book-open` | stato base istituzionale |
| Applicazione per classi | `users` | lettura per classe/gruppo |
| Adeguamento IN 2025 | `refresh-cw` | allineamento e transizione |
| Processo di revisione | `workflow` | avanzamento fasi/ruoli |
| Progettazione e competenze | `graduation-cap` | pianificazione didattica |
| Esportazioni | `download` | produzione documenti |
| Guida | `circle-help` | supporto on demand |
| Discipline | `library` | elenco disciplinare secondario |
| Mostra/Nascondi | `chevrons-up-down` | toggle pannelli |
| Documento | `file-text` | artefatto documentale |
| Avviso | `triangle-alert` | warning/cautela |
| Validato | `badge-check` | stato verificato |
| Non validato | `badge-alert` | stato non validato |

Nota: la mappa puo ricevere micro-adjustment in CML-278 solo se non cambia il significato semantico.

## 7. Regole di accessibilita

- Icone decorative: `aria-hidden="true"`.
- Controlli solo-icona: obbligo `aria-label` descrittiva.
- Il testo rimane la fonte primaria del significato.
- Stato validato/non validato non deve dipendere solo dal colore.
- Focus ring e target cliccabile restano invariati rispetto al comportamento attuale.

## 8. Regole di fallback

- Se SVG non disponibile, la UI deve mantenere testo e significato operativo.
- Nessun fallback su emoji strutturali per elementi core.
- Fallback ammesso: visualizzazione text-only senza regressioni funzionali.

## 9. Criteri visuali

- Stroke coerente tra icone principali.
- Dimensioni standard per macro-aree principali e azioni secondarie.
- Spaziatura testo/icona uniforme nelle card e nei pulsanti.
- Gerarchia visiva guidata dal testo, icona come rinforzo.

## 10. Perimetro CML-278 (runtime minimo previsto)

CML-278 potra coprire solo:

- navigazione principale;
- Home/cruscotto;
- pulsanti Guida rapida e Mostra/Nascondi discipline;
- eventuali badge principali di stato.

Fuori scope CML-278:

- variazioni logiche di flusso;
- modifica schema `.cml`;
- modifica dati curricolari;
- modifica export/import;
- modifica storage locale/sessione.

## 11. Criteri di accettazione

Il contratto e accettato se:

- sistema icone definito come Lucide SVG subset locale;
- regole a11y e fallback esplicite;
- mappa icone/funzioni copre le aree richieste;
- perimetro CML-278 esplicito e minimo;
- divieti di scope ribaditi (no runtime logic/data/schema/storage/export-import in CML-277).

Verdetto contrattuale atteso:

`CML_277_ICON_SYSTEM_CONTRACT_READY_LOCAL_NOT_PUSHED`
