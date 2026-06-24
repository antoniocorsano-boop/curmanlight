# CML-095 — Scienze Normalized Curriculum Draft

## Report di creazione bozza normalizzata

### Dati generali

| Campo | Valore |
|---|---|
| Disciplina | Scienze |
| Stato | `bozza_generabile` |
| Readiness | `in_revisione` |
| Schema | `cml-normalized-curriculum-v1` |
| Totale unità | 15 |
| Target | 12-15 (max 20) |
| Validazione umana | Richiesta (true su ogni unità) |
| Commit | HEAD `cddd1f4` + untracked |

### Distribuzione unità per ordine e nucleo

| Nucleo \ Ordine | Infanzia | Primaria | Secondaria | Totale |
|---|---|---|---|---|
| Osservazione e metodo scientifico | 1 | 1 | 2 | 4 |
| Viventi e ambiente | 1 | 1 | 2 | 4 |
| Materia e trasformazioni | — | 1 | 1 | 2 |
| Terra, ambiente e sostenibilità | — | 1 | 2 | 3 |
| Energia e fenomeni | — | 1 | 1 | 2 |
| **Totale** | **2** | **5** | **8** | **15** |

### Dimensione

| Parametro | Valore |
|---|---|
| Unità | 15 |
| Caratteri totali JSON | ~28.500 |
| Caratteri medi per unità | ~1.900 |
| Campi per unità | 18 |
| Stati in uso | 1 ("nuovo") |

### Unità create

| ID | Ordine | Classe/Fascia | Nucleo | Ambito |
|---|---|---|---|---|
| sci_inf_5_001 | Infanzia | Fascia 5 | Osservazione e metodo scientifico | Esplorazione sensoriale e prime domande |
| sci_inf_5_002 | Infanzia | Fascia 5 | Viventi e ambiente | Animali, piante e cicli naturali |
| sci_pri_1_001 | Primaria | Cl. 1 | Osservazione e metodo scientifico | Primi approcci all'osservazione scientifica |
| sci_pri_2_001 | Primaria | Cl. 2 | Viventi e ambiente | Esseri viventi e relazioni |
| sci_pri_3_001 | Primaria | Cl. 3 | Materia e trasformazioni | Proprietà della materia e cambiamenti |
| sci_pri_4_001 | Primaria | Cl. 4 | Terra, ambiente e sostenibilità | Suolo, ecosistemi e risorse naturali |
| sci_pri_5_001 | Primaria | Cl. 5 | Energia e fenomeni | Fonti di energia e uso consapevole |
| sci_sec_1_001 | Secondaria | Cl. 1 | Osservazione e metodo scientifico | Il metodo scientifico sperimentale |
| sci_sec_1_002 | Secondaria | Cl. 1 | Materia e trasformazioni | Fenomeni fisici e chimici della materia |
| sci_sec_1_003 | Secondaria | Cl. 1 | Viventi e ambiente | La cellula e la classificazione dei viventi |
| sci_sec_2_001 | Secondaria | Cl. 2 | Viventi e ambiente | Il corpo umano: anatomia, fisiologia e salute |
| sci_sec_2_002 | Secondaria | Cl. 2 | Terra, ambiente e sostenibilità | Il sistema Terra: geologia, atmosfera e idrosfera |
| sci_sec_3_001 | Secondaria | Cl. 3 | Energia e fenomeni | Fonti di energia e applicazioni scientifiche |
| sci_sec_3_002 | Secondaria | Cl. 3 | Osservazione e metodo scientifico | Errore scientifico, pensiero critico e decisioni informate |
| sci_sec_3_003 | Secondaria | Cl. 3 | Terra, ambiente e sostenibilità | Biodiversità, evoluzione e sostenibilità globale |

### Fonti utilizzate

- **D.M. 254/2012**: Indicazioni Nazionali 2012 — sezioni Scienze per ogni nucleo
- **D.M. 221/2025**: Nuove Indicazioni — Fonti di energia, errore scientifico, storia della scienza, prospettiva di genere
- **Agenda 2030**: Sviluppo sostenibile e Obiettivi ONU
- **DATA index.html**: 5 traguardi + 4 obiettivi (stati ok/modifica/nuovo)

### Note specifiche

1. **Energia**: Taglio scientifico (fenomeno naturale, trasformazione, osservazione, sostenibilità), non tecnologico. Overlap con Tecnologia gestito.
2. **D.M. 221/2025**: Applicato a sci_pri_5_001 (fonti di energia in primaria), sci_sec_3_001 (fonti + storia della scienza + figure femminili), sci_sec_3_002 (errore scientifico).
3. **Infanzia**: 2 unità entrambe su fascia 5. Campo di esperienza "La conoscenza del mondo" come fonte.
4. **Validazione umana**: Ogni unità richiede validazione umana esplicita (`validazioneUmana: true`).
5. **Contatori UI**: Non aggiornati (3/12/0 invariati). L'aggiornamento seguirà dopo quality audit (CML-095A).

### Verdetto

```
CML_095_SCIENZE_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT_READY
```
