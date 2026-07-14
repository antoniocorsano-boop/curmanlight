# CML-CURR-AUDIT-01 — Pilot Educazione Fisica

## Perimetro

Analizzato `content/curriculum/educazione-fisica.normalized.json`: 7 unità, con Infanzia fascia 5, Primaria classi 1/3/5 e Secondaria classi 1/2/3.

## Applicabilità

- Infanzia 3–4: `DA_VERIFICARE`; la fascia 5 non dichiara copertura plurifascia.
- Primaria classe 2: `DA_VERIFICARE`; nessuna fonte o nota dichiara copertura dalla classe 1 o 3.
- Primaria classe 4: `APPLICABILE_AGGREGATO`; le fonti di `ef_pri_3_001` e `ef_pri_5_001` dichiarano esplicitamente `Primaria classi 3-4-5`.

La classe 4 è quindi coperta testualmente, ma non modellata nei campi strutturati. Serve in futuro un campo esplicito per i livelli coperti, così da evitare falsi gap automatici.

## Rilievi

### P1 — Semantica della validazione incoerente

Il metadato generale definisce il contenuto provvisorio e non validato da revisione umana o dipartimentale. Tutte le unità dichiarano però `validazioneUmana: true`.

Il booleano non distingue fra contenuto già validato e contenuto che richiede validazione. Non deve essere interpretato come approvazione finché il contratto non viene chiarito.

### P1 — Provenienza non granulare

Le fonti non separano traguardi ufficiali, parafrasi, progressione locale, evidenze, soglie quantitative e criteri. Gli interventi CML-179/CML-210A devono essere trattati come adattamento didattico interno.

### P2 — Aggregazione non strutturata

La copertura della classe 4 compare solo nella stringa `fonte`, mentre il record conserva una singola classe. Il runtime e il validatore non possono quindi ricostruirla in modo affidabile.

### P3 — Accenti impropri ricorrenti

Sono presenti forme come `Capacitá`, `attivitá`, `abilitá`, `responsabilitá`, `lateralitá`, da normalizzare in una futura correzione editoriale.

## Esito

`CML_CURR_AUDIT_01_EDUCAZIONE_FISICA_PILOT_COMPLETE_CLASS_4_AGGREGATED_CLASS_2_UNRESOLVED_VALIDATION_SEMANTICS_CONFLICT`

Nessun dato curricolare è stato modificato.
