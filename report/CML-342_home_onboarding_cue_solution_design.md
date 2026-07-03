# CML-342 Home Onboarding Cue Solution Design Report

**Macroprogramma**: PM-06 — Accompagnamento

**Tipo slice**: docs-only / design-only

**Obiettivo**: Analizzare la Home di CurManLight e proporre una soluzione di micro‑cue di onboarding, senza modificare runtime.

---

### 1. Sintesi del problema
Gli utenti scolastici al primo accesso alla Home non hanno un’indicazione chiara su quale azione intraprendere. Il flusso attuale è troppo denso (UX‑007) e non guida l’utente al primo passo (es. “avvia una proposta curricolare”).

### 2. Alternative valutate
| Opzione | Descrizione | Posizione | Testo indicativo | Vantaggi | Rischi | Impatto mobile | Costo stimato | Rischio regressione |
|---|---|---|---|---|---|---|---|---|
| **STATIC_HOME_WELCOME_CUE** | Banner statico in alto con messaggio di benvenuto e pulsante “Inizia”. | Header Home | "Benvenuto! Clicca **Inizia** per creare la tua prima lezione." | Implementazione semplice (HTML/CSS) | Possibile conflitto con banner esistenti | Buono | Basso | Basso |
| **START_HERE_ROLE_CHOICE** | Call‑out con scelta ruolo (Studente / Insegnante) che porta a una vista guidata. | Center Home | "Sei uno studente o un insegnante? Seleziona per il primo passo." | Personalizza percorso | Complessità UI aggiuntiva | Medio | Medio | Medio |
| **FIRST_USE_CHECKLIST** | Mini‑checklist di 3 passi visualizzata al primo login. | Sidebar/Home | "1️⃣ Scegli una disciplina → 2️⃣ Crea una lezione → 3️⃣ Pubblica" | Chiara sequenza | Richiede stato persistente (localStorage) | Buono | Medio | Medio |
| **RECOMMENDED_ACTION_CALLOUT** | Callout evidenziato con icona e azione principale (es. “Crea lezione”). | Hero area | "🚀 **Crea la tua prima lezione** ora!" | Minimalista, alta visibilità | Nessuna interazione extra | Ottimo | Basso | Basso |

### 3. Matrice comparativa
| Criterio | STATIC_HOME_WELCOME_CUE | START_HERE_ROLE_CHOICE | FIRST_USE_CHECKLIST | RECOMMENDED_ACTION_CALLOUT |
|---|---|---|---|---|
| Chiarezza per primo uso | ★★☆☆☆ | ★★★☆☆ | ★★★★☆ | ★★★★★ |
| Semplicità implementativa | ★★★★★ | ★★★☆☆ | ★★☆☆☆ | ★★★★★ |
| Rischio regressione | ★★★★★ | ★★★☆☆ | ★★☆☆☆ | ★★★★★ |
| Coerenza con PM-06 | ★★★★☆ | ★★★★☆ | ★★★☆☆ | ★★★★★ |
| Coerenza mobile | ★★★★☆ | ★★★☆☆ | ★★★★☆ | ★★★★★ |
| Valore per utente scolastico | ★★★☆☆ | ★★★★☆ | ★★★★☆ | ★★★★★ |
| Compatibilità CML attuale | ★★★★★ | ★★★★☆ | ★★☆☆☆ | ★★★★★ |

### 4. Soluzione raccomandata
**RECOMMENDED_ACTION_CALLOUT** è la scelta migliore: massima visibilità, minimo impatto di sviluppo, nessuna persistenza necessaria, allineata a PM‑06 e completamente responsiva.

### 5. Futura slice proposta
**CML-343 — Home Onboarding Cue Runtime Microfix**
- **Obiettivo**: implementare il callout raccomandato in `index.html` e `_published_snapshot/netlify-current/index.html`.
- **Perimetro**: modifica di un unico file HTML/CSS, nessun nuovo script.
- **File modificabili**: `index.html`, `_published_snapshot/netlify-current/index.html`.
- **File vietati**: tutti gli altri runtime, curriculum, assets, tools.
- **Controlli**: `git diff --check`, validazione curriculum, test shape runtime.
- **Criteri di completamento**: callout visibile, test su desktop e mobile, nessun warning.
- **Verdetto atteso**: `CML_343_HOME_ONBOARDING_CUE_RUNTIME_MICROFIX_READY_LOCAL_NOT_PUSHED`

### 6. Verdict
`CML_342_HOME_ONBOARDING_CUE_SOLUTION_DESIGN_READY_LOCAL_NOT_PUSHED`
