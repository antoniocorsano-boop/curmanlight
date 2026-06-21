# CML-013A — Full UI/UX Redesign Study and Contract

## Stato

Studio completo e contratto di riprogettazione UI/UX per trasformare CurManLight
da dashboard completa a percorso guidato a livelli.
Solo documentazione — nessuna modifica runtime, nessun deploy.

## Preflight

- Branch: `cml-008r-fix-markdown-decision-summary`
- HEAD: `2c32bab` (CML-012A — Real User Task Acceptance Test Design)
- Working tree: pulita
- CML-012A preservato: ✅ non modificato, citato come strumento di verifica futura
- Nessuna modifica runtime ✅
- Nessun deploy ✅

## 1. Contesto storico

| Ciclo | Risultato |
|---|---|
| CML-009/010 | Alleggerimento vista utente, card compatte, dettaglio espandibile, touch target mobile 44px, pubblicazione Netlify |
| CML-011 | Export microcopy (confronto/definitivo), disclaimer validazione, smoke reale positivo — ciclo chiuso |
| CML-012A | Test utente reale progettato (8 passi) — preservato per re-test dopo redesign |

## 2. Diagnosi consolidata

### Problema principale

**Gerarchia di esposizione** — non mancanza di funzioni.

Lo strumento oggi è funzionale ma espone troppe funzioni allo stesso livello visivo.
L'utente non distingue subito:

| Domanda | Situazione attuale |
|---|---|
| Cosa devo fare adesso? | Mescolato tra cruscotto, toolbar, sidebar, export |
| Cosa posso consultare? | Fonti, normativa e sezioni generali sono in schede ma con molto testo |
| Cosa posso modificare? | Card di revisione mescolate con filtri, export, salvataggio |
| Cosa posso esportare? | Due sezioni export (toolbar confronto + tab riepilogo definitivo) |
| Cosa resta da validare? | Disclaimer presente ma dopo molte informazioni |

### Direzione progettuale

```
Da: dashboard completa con tutte le funzioni visibili
A:  percorso guidato con funzioni progressive e sempre recuperabili
```

Principio guida: **una schermata, una decisione**.

## 3. Nuova architettura UX

5 livelli, di cui 3 schermate principali e 2 livelli trasversali:

### Schermata 1 — Home operativa (orientamento)

| Elemento | Dettaglio |
|---|---|
| Stato lavoro | "Revisione avviata" |
| Prossima azione | "Controlla le voci da validare" |
| Azioni principali (3) | Controlla voci · Apri definitivo · Esporta |
| Avanzamento | Barra minima |
| Menu secondario | Azioni, backup, importazione, guida |

Tutto il resto sta dietro menu, schede o pannelli espandibili.

### Schermata 2 — Revisione per disciplina (decisione)

- Disciplina selezionata (dalla sidebar o menu)
- Voci da validare in card
- Filtri: Da decidere (default) + Altri filtri (collassato)
- Azioni approva/rivedi
- Export confronto contestuale alla disciplina

### Schermata 3 — Curricolo definitivo (controllo)

- Voci approvate + invariate
- Export definitivo
- Disclaimer validazione sempre visibile
- Leggi / Copia / Esporta

### Livello trasversale — Export contestuale

Non una schermata autonoma, ma presente in due punti:
- Durante revisione: export confronto (toolbar contestuale)
- Su definitivo: export documento ufficiale

### Livello trasversale — Validazione umana

Non una schermata autonoma, ma segnalata:
- Disclaimer su ogni export
- Badge "Documento di lavoro — da validare"
- Nota metodologica persistente

### Schermata 4 — Dettaglio voce (consultazione)

Contenuto:
- Testo attuale (IN 2012)
- Proposta di modifica (Gap 2025)
- Motivazione
- Fonte collegata
- Stato decisione
- Azioni: Valida / Da rivedere

Su desktop: pannello laterale destro.
Su mobile: pannello espandibile o schermata dedicata.

### Schermata 5 — Fonti e riferimenti (consultazione)

- Tab separato con indice interno
- Card fonte con metadata
- Ricerca
- Collegamento dalla singola voce alla fonte pertinente
- Sezioni generali consultabili (non modificabili)

## 4. Navigazione desktop (3 colonne)

```
┌─────────────────────────────────────────────────────┐
│ Header istituzionale compatto                       │
├──────────────┬──────────────────────┬────────────────┤
│ Discipline   │ Area di lavoro       │ Dettaglio /    │
│ (sidebar     │ (cruscotto / card    │ Fonti          │
│  discreta)   │  / azioni)           │ (pannello      │
│              │                      │  contestuale)  │
└──────────────┴──────────────────────┴────────────────┘
```

### Breadcrumb (percorso di navigazione)

```
Curricolo Verticale > Tecnologia > Voci da validare > Competenze digitali e STEM
```

## 5. Navigazione mobile (stack verticale)

```
┌─────────────────────┐
│ Header compatto      │
├─────────────────────┤
│ Cruscotto            │
├─────────────────────┤
│ ↓ Menu a scomparsa   │
├─────────────────────┤
│ Scheda attiva        │
├─────────────────────┤
│ ↓ Dettaglio          │
├─────────────────────┤
│ [Revisione|Definitivo|Esporta]  ← bottom bar
└─────────────────────┘
```

### Elementi mobile

- Menu a scomparsa per discipline, fonti, azioni secondarie
- Bottom bar fissa: Revisione / Definitivo / Esporta
- Card a tutta larghezza
- Dettaglio in pannello espandibile
- Salvataggio come stato compatto, non come blocco

## 6. Componenti grafici

| Componente | Descrizione |
|---|---|
| Header compatto | Nome istituto, titolo, DM |
| Cruscotto minimo | Stato + prossima azione + 3 pulsanti |
| Card disciplina | Nome, badge voci, attivo/inattivo |
| Card operativa | Stato, titolo, sintesi 1 riga, azione primaria |
| Pannello dettaglio | Testi confronto, fonte, scelta, note |
| Pannello fonti | Card fonte con metadata, link |
| Menu azioni | Salva, backup, importa, ripristina, installa, guida |
| Bottom bar mobile | Revisione / Definitivo / Esporta |
| Export center contestuale | Formati raggruppati per contesto |
| Disclaimer validazione | Sempre uguale, riconoscibile, color #e65100 |
| Stato salvataggio | Icona + percentuale compatta |
| Breadcrumb | Percorso navigazione |

## 7. Mappa funzione → nuova collocazione

| Funzione attuale | Posizione oggi | Criticità | Nuova collocazione | Azione progettuale |
|---|---|---|---|---|
| Header istituzionale | Top pagina | Ok | Header compatto | Mantenere visibile |
| Tab bar (4 tabs) | Sotto header | Troppi livelli | Breadcrumb + bottom bar | Trasformare in navigazione |
| Sidebar discipline | Sinistra | Dominante su mobile | Sidebar desktop / menu mobile a scomparsa | Rendere contestuale |
| Cruscotto stato | Sotto tabs | Ok | Home operativa | Mantenere visibile |
| Prossima azione | Nel cruscotto | Ok | Home operativa | Mantenere visibile |
| 3 pulsanti azione | Nel cruscotto | Ok con leggero overlap | Home operativa, raggruppati | Mantenere visibile |
| Barra salvataggio | Sotto cruscotto | Troppo visibile | Stato compatto + menu Azioni | Trasformare in stato |
| Pulsante Azioni ⚙️ | Accanto a salvataggio | Ok | Menu Azioni | Mantenere visibile |
| Installazione app | In menu Azioni | Ok ma secondario | Menu Azioni | Spostare in menu |
| Impostazioni/onboarding | In menu Azioni | Ok | Menu Azioni | Spostare in menu |
| Corso PDF | In menu Azioni | Ok | Menu Azioni + tab Fonti | Spostare in menu |
| Motto e metodo | In menu Azioni | Ok | Menu Azioni + footer | Spostare in menu |
| Guida rapida | In menu Azioni | Ok | Menu Azioni | Spostare in menu |
| Toolbar filtri | Sopra card | Troppi filtri insieme | Filtri essenziali + Altri filtri collassato | Collassare |
| Toolbar export (confronto) | Inline nel toolbar | Troppo visibile in fase di revisione | Export contestuale nella card/disciplina | Rendere contestuale |
| Uso ibrido e requisiti | Sotto toolbar | Troppo testo inline | Dettaglio espandibile o tooltip | Collassare |
| Export curricolo revisionato | Pannello dedicato | Separato dal flusso | Unificato con export contestuale | Rendere contestuale |
| Curricolo Definitivo | Tab Riepilogo | Ok, ma nascosto in tab | Schermata 3 autonoma | Mantenere visibile |
| Disclaimer validazione | Su definitivo e bozza | Ok, già presente | Persistente su tutti gli export | Mantenere visibile |
| Fonti normative | Tab Normativa | Molto testo, ok ma isolato | Tab Fonti con indice | Mantenere visibile |
| Sezioni generali | Sotto fonti | Consultazione non modificabile | Sezione consultazione separata | Mantenere visibile |
| Gap 2025 | Nota in fondo | Necessario ma marginale nel flusso | Collegato a dettaglio voce | Collegare a dettaglio/fonti |
| Card revisione | Area centrale | Ok | Schema card invariato | Mantenere visibile |
| Dettaglio espandibile | In card | Su desktop meglio pannello | Pannello laterale (desktop) / espandibile (mobile) | Rendere contestuale |
| Filtri approvati/rifiutati | In "Altri filtri" | Ok | Altri filtri collassato | Collassare |
| Backup/Importa/Ripristina | Sotto toolbar | Secondario | Menu Azioni | Spostare in menu |
| Export Word/Copia/Markdown/PDF | Due gruppi separati | Distinzione confronto/definitivo ok | Raggruppati per contesto d'uso | Mantenere visibile |
| Nota metodologica finale | Footer | Importante ma in fondo | Persistente in area validazione | Rendere contestuale |

## 8. Principi visivi

### Colori

| Colore | Uso |
|---|---|
| #1a237e (blu scuro) | Struttura, titoli, navigazione |
| #00695c (verde) | Salvataggio, conferme, validazioni |
| #e65100 (arancio) | Avvisi, disclaimer, attenzione |
| #c62828 (rosso) | Rifiuto, blocco, ripristino |
| #f5f7fa (grigio chiaro) | Sfondi secondari |

### Tipografia

- Titoli brevi (max 6 parole)
- Sintesi max 2 righe
- Testo lungo solo nel dettaglio
- Etichette verbali più chiare delle sole icone
- Font system-ui esistente preservato

### Densità

Regola: **nella vista principale non più di 3 azioni visibili**.

### Accessibilità

- Touch target minimo 44px (già implementato)
- Contrasto WCAG AA (già implementato)
- Aria-label su pulsanti icona (già implementato)
- Focus visible (già implementato)

## 9. Cosa non viene perso

- ❌ Nessuna funzione rimossa
- ❌ Nessun contenuto perso
- ✅ Logica approvazione/rifiuto invariata
- ✅ Conteggi invariati
- ✅ Dati invariati
- ✅ Markdown generation invariata
- ✅ PDF, sw.js, _headers, assets invariati
- ✅ Nessun backend
- ✅ CML-012A preservato come verifica futura

## 10. Criteri di accettazione per CML-013B (prototipo home)

1. La prima schermata risponde a "che cosa devo fare adesso?"
2. Massimo 3 azioni principali visibili
3. Discipline accessibili ma non dominanti
4. Salvataggio visibile come stato, non come blocco
5. Funzioni secondarie nel menu Azioni
6. Nessuna perdita funzionale
7. Nessuna regressione mobile
8. CML-012A applicabile come test dopo il prototipo

## 11. Strategia di implementazione

| Blocco | Cosa | Runtime |
|---|---|---|
| CML-013A | Studio e contratto (questo) | ❌ No |
| CML-013B | Prototipo statico nuova home guidata | ✅ CSS/HTML minimo |
| CML-013C | Navigazione mobile + menu a scomparsa | ✅ |
| CML-013D | Pannello dettaglio contestuale desktop/mobile | ✅ |
| CML-013E | Export center contestuale | ✅ |
| CML-013F | Re-test utente con protocollo CML-012A | ❌ Solo test |

## 12. Verdetto

```
CML_013A_FULL_UI_UX_REDESIGN_CONTRACT_READY
```

## Prossimo step

CML-013B — Guided Home Static Prototype (primo intervento runtime).
