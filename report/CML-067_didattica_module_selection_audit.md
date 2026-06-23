# Report — CML-067 Didattica Module Selection Audit

## Matrice opzioni

| Opzione | Valore | Rischio | Complessità | Coerenza modello | Dati normalizzati | Priorità contratto | Raccomandazione |
|---|---|---|---|---|---|---|---|
| **A. UDA / Progettazione** | Alto | Medio | Alta | Perfetta | Obiettivi, conoscenze, abilità | Alta | Rinviata |
| **B. Attività didattiche** | Alto | Medio-basso | Media | Buona | Obiettivi, abilità | Media | Rinviata |
| **C. Materiali per la classe** | Immediato ma limitato | Medio | Bassa | Buona | Minimi | Bassa | Rinviata |
| **D. Valutazione / evidenze** | Alto | Basso | Bassa | Perfetta | Evidenze, criteri, conoscenze, abilità | Alta (Valutazione) | **Scelta** |
| **E. Programmazione annuale** | Alto | Medio-alto | Alta | Borderline | Intero dataset | Non elencata | Rinviata |

## Scelta: Opzione D — Valutazione / Evidenze

### Motivazione dettagliata

1. **Dati già disponibili**: Tecnologia normalizzata (13 unità) ha `evidenze` (array di stringhe) e `criteriValutazione` (array di stringhe) per ogni unità, oltre a `obiettivi`, `conoscenze`, `abilita`. Nessun dato da creare.

2. **Read-only naturale**: la vista mostra dati esistenti, non li modifica. Rischio tecnico minimo.

3. **Valore percepito immediato**: un docente vede come il curricolo di istituto si traduce in "cosa osservare" (evidenze) e "come valutare" (criteri). Questo è il collegamento più concreto tra Curriculum e classe.

4. **Confine Curriculum/Didattica rispettato**:
   - Curriculum: dichiara evidenze e criteri nel documento istituzionale
   - Didattica: li presenta in chiave operativa, con "attività possibile" e nota "da adattare alla classe"
   - Nessuna sovrapposizione

5. **Progressione chiara**: dopo evidenze/criteri, il passo successivo naturale è l'UDA (Obiettivo → Conoscenze → Abilità → Attività → Evidenze → Criteri = semi-UDA)

### Rischi evitati

| Rischio | Come viene evitato |
|---|---|
| Complessità eccessiva (UDA) | Scelto modulo più semplice (Valutazione) |
| Sovrapposizione con Curriculum (Programmazione) | Scartata Opzione E |
| Area Didattica sembra repository (Materiali) | Scartata Opzione C |
| Attività senza contesto classe (Attività) | Rimandata Opzione B |
| Modifica schema `.cml` | Il primo prototipo è solo lettura dati esistenti |
| Creazione dati personali | Nessun editor, nessuna persistenza |
| Backend/API/Login | Non necessari per vista read-only statica |

## Roadmap Didattica

```
CML-067   [audit]      Selezione modulo (Valutazione / Evidenze)         ← siamo qui
CML-068   [runtime]    Prototipo read-only "Didattica da Tecnologia"
CML-069   [runtime]    UDA / Progettazione didattica (primo step)
CML-070   [runtime]    Attività didattiche (collegate a obiettivi)
CML-071   [runtime]    Materiali per la classe (archivio)
CML-072   [audit]      Programmazione annuale (valutazione)
```

## Criteri di successo per CML-068

1. Vista "Didattica da Tecnologia" caricata senza errori console
2. Mostra: obiettivo, conoscenze, abilità, attività possibile, evidenze, criteri di valutazione
3. Layout mobile-responsive
4. Badge "Didattica — bozza operativa" visibile
5. Nota "Da adattare alla classe" presente
6. Nessuna modifica a Curriculum o schema `.cml`
7. Nessuna persistenza aggiunta
8. Nessun export aggiuntivo
9. Nessun editor
10. Validazione Tecnologia ancora PASS
