# CML-434D — Bozzetti alternativi pre-runtime

## 1. Scopo

Questo documento produce tre bozzetti alternativi per la futura evoluzione di CurManLight, senza modificare il runtime.

I bozzetti sono testuali e decisionali: servono a scegliere la direzione prima di qualunque intervento su `index.html` e `_published_snapshot/netlify-current/index.html`.

## 2. Criterio guida

Ogni bozzetto è valutato rispetto al contratto definito in CML-433U:

```text
bisogno utente → contesto → vista → pannello → azione → stato → criterio di accettazione
```

## 3. Requisiti utente da rispettare

- Il docente deve capire immediatamente cosa può fare.
- Il docente non tecnico deve poter procedere senza interpretare termini tecnici.
- Il dipartimento deve poter confrontare, discutere e sintetizzare.
- Il referente deve poter controllare lo stato e preparare la validazione.
- Il dirigente deve poter leggere il processo senza entrare nel dettaglio operativo minuto.
- Ogni proposta deve restare distinta da curricolo in vigore e validazione istituzionale.
- Le annotazioni devono essere possibili ma non vincolanti.
- L'esportazione deve dipendere dal compito, non dalla struttura tecnica del file.

---

# Bozzetto A — Cruscotto istituzionale

## Profilo principale

Dirigente scolastico, referente curricolo, coordinamento d'istituto.

## Idea

CurManLight si presenta come ambiente di governo del curricolo, con una Home simile a un cruscotto istituzionale.

## Struttura

```text
┌──────────────────────────────────────────────────────────────┐
│ Ambiente curricolare d'istituto | anno | ruolo | stato lavoro │
├──────────────────────────────────────────────────────────────┤
│ Stato generale del curricolo                                  │
│ [In vigore] [In lavorazione] [Proposte] [Da validare]          │
├───────────────────────┬──────────────────────────────────────┤
│ Aree di lavoro         │ Pannello di sintesi                   │
│ - Curricolo            │ - discipline coinvolte                │
│ - Progettazione        │ - proposte presenti                   │
│ - Dipartimento         │ - documenti esportabili               │
│ - Fonti                │ - passaggi di validazione             │
├───────────────────────┴──────────────────────────────────────┤
│ Azioni: consulta | prepara sintesi | esporta documento         │
└──────────────────────────────────────────────────────────────┘
```

## Vantaggi

- Forte identità istituzionale.
- Buona per dirigente e referente.
- Mostra stato e processo.
- Riduce l'idea di strumento isolato del singolo docente.

## Rischi

- Può risultare astratta per il docente che vuole solo iniziare un compito.
- Può aumentare il carico cognitivo in avvio.
- Richiede dati di stato molto chiari per non sembrare un cruscotto vuoto.

## Criterio di accettazione

Un dirigente o referente deve poter capire in meno di un minuto:

- cosa è vigente;
- cosa è in lavorazione;
- quali passaggi richiedono validazione;
- quali documenti possono essere prodotti.

---

# Bozzetto B — Percorso guidato docente

## Profilo principale

Docente non tecnico, docente tester, docente che prepara una proposta o una progettazione.

## Idea

CurManLight si apre con pochi compiti chiari, espressi in linguaggio naturale.

## Struttura

```text
┌──────────────────────────────────────────────────────────────┐
│ Ambiente curricolare d'istituto | Docente | anno | guida breve │
├──────────────────────────────────────────────────────────────┤
│ Che cosa vuoi fare?                                           │
│                                                              │
│ [Consulta il curricolo]                                       │
│ Leggi ciò che è in vigore e orientati.                        │
│                                                              │
│ [Prepara una progettazione]                                   │
│ Parti da competenze, attività e unità.                        │
│                                                              │
│ [Proponi un aggiornamento]                                    │
│ Formula una proposta da discutere nel dipartimento.            │
│                                                              │
│ [Esporta un documento]                                        │
│ Prepara materiale leggibile per il lavoro scolastico.          │
├──────────────────────────────────────────────────────────────┤
│ Pannello contestuale: cosa succede dopo / cosa non viene fatto │
└──────────────────────────────────────────────────────────────┘
```

## Vantaggi

- Molto adatto al test con colleghi.
- Riduce il linguaggio tecnico.
- Chiarisce che lo strumento non valida automaticamente.
- Si presta a una prima micro-slice runtime piccola e controllabile.

## Rischi

- Meno adatto a mostrare subito la complessità istituzionale.
- Potrebbe semplificare troppo il ruolo del dipartimento se non collegato a pannelli successivi.

## Criterio di accettazione

Un docente deve poter scegliere il compito iniziale senza chiedersi:

- dove devo cliccare;
- se sto modificando il curricolo ufficiale;
- cosa verrà salvato;
- quale documento potrò ottenere.

---

# Bozzetto C — Ambiente professionale di lavoro

## Profilo principale

Dipartimento, referente curricolo, docente esperto, gruppo di revisione.

## Idea

CurManLight diventa una scrivania professionale: intestazione compatta, area principale, pannello laterale, pannello inferiore contestuale.

## Struttura

```text
┌──────────────────────────────────────────────────────────────┐
│ CML | ruolo | disciplina | anno | stato | azioni rapide        │
├───────────────┬─────────────────────────────┬────────────────┤
│ Navigazione   │ Area principale              │ Pannello        │
│ - Home        │ Curricolo / proposta / UDA    │ contestuale     │
│ - Curricolo   │                               │ - fonti         │
│ - Progetta    │ Vista selezionata             │ - stato         │
│ - Esporta     │                               │ - note          │
│ - Guida       │                               │ - limiti        │
├───────────────┴─────────────────────────────┴────────────────┤
│ Barra azioni: annota | confronta | prepara sintesi | esporta   │
└──────────────────────────────────────────────────────────────┘
```

## Vantaggi

- È il più vicino alla logica professionale osservata nell'interfaccia desktop di riferimento.
- Permette apertura/chiusura di aree senza cambiare continuamente pagina.
- Supporta confronto, annotazione, fonti e stato.
- È scalabile verso dipartimento e referente.

## Rischi

- Se introdotto tutto insieme può sembrare complesso.
- Richiede una gerarchia visiva molto controllata.
- Va costruito per micro-slice, non in un'unica patch.

## Criterio di accettazione

Un utente deve capire sempre:

- vista corrente;
- ruolo attivo;
- stato del contenuto;
- azione primaria disponibile;
- pannello aperto e perché.

---

# 4. Matrice comparativa

| Criterio | A Cruscotto | B Percorso docente | C Ambiente lavoro |
|---|---:|---:|---:|
| Chiarezza per docente non tecnico | media | alta | media |
| Forza istituzionale | alta | media | alta |
| Supporto al dipartimento | media | media | alta |
| Facilità prima micro-slice | media | alta | media |
| Scalabilità futura | alta | media | alta |
| Rischio sovraccarico | medio | basso | medio-alto |
| Coerenza CML-433U | alta | alta | alta |

## 5. Raccomandazione

Non scegliere un solo bozzetto puro.

La direzione più solida è:

```text
B come ingresso iniziale + C come logica operativa + A come vista istituzionale futura
```

## 6. Prima micro-slice runtime candidata

La prima patch runtime non deve implementare tutto il sistema.

Deve limitarsi a:

```text
Home task selector
```

con quattro azioni ordinate:

1. Consulta il curricolo.
2. Prepara una progettazione.
3. Proponi un aggiornamento.
4. Esporta un documento.

Ogni azione deve mostrare un breve pannello contestuale:

- cosa permette di fare;
- cosa non fa;
- quale stato curricolare riguarda;
- quale passaggio umano resta necessario.

## 7. Hard rules per CML-434 runtime

- Non modificare dati curricolari.
- Non introdurre account, backend o raccolta remota.
- Non cambiare il significato degli stati curricolari.
- Non trasformare proposte in validazioni.
- Non aumentare il numero di scelte iniziali.
- Non usare termini tecnici nell'interfaccia ordinaria.
- Mantenere sincronizzato il runtime pair.

## 8. Decisione operativa

Procedere con CML-434 come runtime micro-slice solo dopo conferma della direzione ibrida:

```text
Home task selector + pannello contestuale leggero
```

## 9. Verdetto

```text
CML_434D_PRE_RUNTIME_MOCK_ALTERNATIVES_MERGED_REMOTE
```
