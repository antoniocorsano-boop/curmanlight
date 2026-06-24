# Report CML-118: Competenze e Progettazione Content Refocus Audit

## Riepilogo
Audit documentale per definire il contenuto target dell'area "Competenze e progettazione" (ex-Didattica), distinguerla da Guida, evitare materiali generici, e decidere il primo incremento runtime minimo. Esito: CML-119 come primo incremento — sezione "Competenze chiave" read-only aggregata dalle discipline normalizzate.

## Mappatura Stato Attuale

### Esistente
- Valutazione/Evidenze: 13 unità Tecnologia (read-only, filtri ordine)
- UDA modello: 2 schede UDA (Primaria + Secondaria, read-only)

### Mancante (Navigation Map)
- Competenze chiave aggregate
- Progettazione per competenze
- Nodi disciplinari
- Collegamenti interdisciplinari
- Criteri di continuità verticale
- Indicazioni operative per i docenti

## Confine Guida vs Competenze e progettazione

| Aspetto | Guida | Competenze e progettazione |
|---------|-------|---------------------------|
| Natura | Istruzioni sullo strumento | Contenuto curricolare e progettazione |
| Destinatario | Utente di CurManLight | Docente / dipartimento |
| Aggiornamento | Versioni strumento | Revisioni curricolo |
| Formato | Testo informativo | Schede, mappe, viste aggregati |
| Esempio | "Come approvare una proposta" | "Competenze chiave di Tecnologia" |
| Esempio | "Come esportare in Word" | "Collegamenti Matematica-Tecnologia" |

### Regola di confine
> Guida insegna a usare lo strumento. Competenze e progettazione usa i contenuti del curricolo per guidare la progettazione didattica.

## Primo Incremento: CML-119

### Cosa include
- Sezione "Competenze chiave" dentro Competenze e progettazione
- Vista read-only che aggrega competenze chiave da tutte le discipline normalizzate
- Per ogni competenza: disciplina, ordine, traguardo, evidenze, criteri
- Filtri per disciplina e ordine
- Card espandibili, coerenti con design system
- Badge "Dato curricolare" 🟢

### Cosa NON include
- Editor, salvataggio, export nuovi, backend, auth
- Modifiche a Curriculum, Validazione, Esportazioni

### Perché primo
1. Dati già pronti (14 discipline normalizzate)
2. Alto valore: vista "dall'alto" del curricolo
3. Basso rischio: read-only
4. Confine pulito: contenuto curricolare vs istruzione strumento
5. Progressivo: base per nodi, collegamenti, continuità
6. Primo elemento nella Navigation Map

### Cosa NON diventerà
- Una seconda Guida
- Un archivio generico
- Una sezione ridondante di Curriculum
- Una raccolta di UDA/programmazioni
- Materiali senza collegamento al curricolo

## Prossimi passi

| Slice | Tipo | Descrizione |
|-------|------|-------------|
| **CML-119** | Runtime | COMPETENZE_CHIAVE_AGGREGATE_OVERVIEW |
| **CML-120** | Smoke | COMPETENZE_KEY_LIVE_SMOKE |
| **CML-121** | Audit | NODI_DISCIPLINARI_E_PROGRESSIONE_VERTICALE_AUDIT |
| **CML-122** | Runtime | NODI_DISCIPLINARI_E_PROGRESSIONE_VERTICALE_OVERVIEW |
| **CML-123** | Audit | COLLEGAMENTI_INTERDISCIPLINARI_AUDIT |
| **CML-124** | Runtime | COLLEGAMENTI_INTERDISCIPLINARI_OVERVIEW |
| **CML-125** | Audit | INDICAZIONI_OPERATIVE_DOCENTI_AUDIT |

## Verdetto
```text
CML_118_COMPETENZE_E_PROGETTAZIONE_CONTENT_REFOCUS_AUDIT_READY
```
