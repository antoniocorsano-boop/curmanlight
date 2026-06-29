# Report: CML-086 — NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

## Dettagli audit

### Conferma docs-only

- ✅ Nessun file runtime modificato.
- ✅ `_published_snapshot/netlify-current/index.html` non toccato.
- ✅ `content/curriculum/tecnologia.normalized.json` non toccato.
- ✅ Schema `.cml` non modificato.
- ✅ Export/import non modificati.
- ✅ Role-access non modificato.

### Discipline candidate valutate

10 discipline multi-ordine:

1. Italiano
2. Matematica
3. Scienze
4. Storia
5. Geografia
6. Inglese
7. Educazione Civica
8. Arte e Immagine
9. Musica
10. Educazione Fisica

(Escluse dal confronto: Religione Cattolica, Seconda Lingua Comunitaria, Latino (LEL) per copertura o specificità.)

### Criteri applicati

1. Centralità curricolare
2. Utilità come secondo modello
3. Disponibilità dati base (items DATA)
4. Copertura ordini
5. Articolabilità (nuclei/ambiti)
6. Valore per approvazione
7. Rischio contenutistico
8. Coerenza col modello Tecnologia

### Disciplina selezionata

**Italiano**

### Motivazione

- 17 items DATA (la più ricca)
- 6 nuclei: Ascolto, Parlato, Lettura, Scrittura, Lessico, Grammatica
- Copertura completa: Infanzia (5), Primaria (7), Secondaria (5)
- Disciplina centrale e trasversale
- Alto valore per approvazione curricolare
- Consente di validare l'adattabilità del modello Tecnologia a discipline linguistico-espressive

### Rischi

- 6 nuclei ampi → potenziale numero elevato di unità (18+)
- Allineamento con Indicazioni Nazionali 2012 + D.M. 221/2025
- Overlap con Educazione Civica e altre discipline linguistiche

### Mitigazioni

- Limitare a 10-14 unità iniziali
- Tecnologia come template strutturale, non vincolo rigido
- `humanValidationRequired: true`
- Classificazione: `bozza_generabile / in_revisione`

### Prossimo step

`CML-087 — ITALIANO_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT`

### Perimetro CML-087

Creare file normalizzato per Italiano con: id, disciplina, ordine, classe/fascia, ambito, competenza, traguardo, obiettivi[], conoscenze[], abilita[], evidenze[], criteriValutazione[], fonte, stato, validazioneUmana, noteDipartimento.
