# CML-421E — Mock D: Ibrido raccomandato A+B con innesti C

## 1. Idea generale

Mock raccomandato perché unisce:

```text
A — sobrietà istituzionale
B — guida operativa per docente
C — potenza solo nelle viste avanzate
```

## 2. Principio

```text
Home istituzionale.
Percorsi guidati dove il docente deve produrre.
Pannelli avanzati solo dove servono fonti, versioni e processo.
```

## 3. Home desktop

```text
┌────────────────────────────────────────────────────────────────────┐
│ Ambiente curricolare d'istituto        Secondaria · Tecnologia     │
│ Stato: consultazione disponibile        [Impostazioni] [Guida]     │
├────────────────────────────────────────────────────────────────────┤
│ Consulta, progetta, esporta e verifica materiali curricolari.      │
│ La validazione resta umana. L'app non approva il curricolo.        │
├───────────────────────────────┬────────────────────────────────────┤
│ CURRICOLO                     │ PROGETTAZIONE DIDATTICA            │
│ Fonti, versioni, consulta,    │ Parti dal curricolo, programma,    │
│ processo, sintesi finale.     │ prepara UDA.                       │
│ [Apri curricolo]              │ [Inizia a progettare]              │
├───────────────────────────────┼────────────────────────────────────┤
│ ESPORTAZIONE                  │ RIFERIMENTI E GUIDA                │
│ Scegli il documento da        │ Fonti e normativa, IN2012/IN2025,  │
│ preparare per classe/ruolo.   │ ruoli, uso e limiti.               │
│ [Scegli documento]            │ [Apri guida]                       │
└───────────────────────────────┴────────────────────────────────────┘
```

## 4. Header

```text
Ambiente curricolare d'istituto | Contesto attivo | Stato lavoro | Impostazioni | Guida
```

Esempio:

```text
Ambiente curricolare d'istituto | Tecnologia · Secondaria · A.S. 2026/27 | consultazione | [Impostazioni] [Guida]
```

## 5. Curricolo

Stile A con dettagli C.

```text
Curricolo
├─ Consulta
├─ Estrai
├─ Fonti
├─ Versioni
├─ Processo aggiornamento
└─ Sintesi finale
```

### Consulta

```text
Selettori in alto
Contenuto centrale
Badge fonte/stato sempre visibile
Azioni: copia estratto, usa in progettazione, esporta
```

### Fonti / Versioni

Usano micro-pannello laterale solo su desktop:

```text
Tabella centrale
Dettaglio fonte/versione a destra
```

### Processo aggiornamento

```text
Pipeline docente → dipartimento → referente → organi esterni
Card azioni per fase
Avviso: approvazione fuori app
```

### Sintesi finale

```text
Esito tecnico della revisione
Stato: non disponibile / in preparazione / pronta / in attesa di atto
Avviso: non equivale ad approvazione collegiale
```

## 6. Progettazione didattica

Stile B guidato.

```text
Che cosa vuoi preparare?

[Parti dal curricolo]
[Programmazione annuale]
[UDA]
[Evidenze e collegamenti]
```

### Parti dal curricolo

```text
1. scegli disciplina/classe
2. scegli unità/evidenze
3. usa in programmazione o UDA
```

### Programmazione annuale

```text
1. classe
2. periodo/unità
3. obiettivi/traguardi
4. metodologie
5. verifiche
6. note inclusione
7. esporta bozza
```

### UDA

Recupera la logica già presente nel runtime:

```text
disciplina
unità
evidenze adottate/adattate
fonte curricolare
bozza locale
export Markdown
```

## 7. Esportazione

Stile B guidato per documento.

```text
Che documento devi preparare?

Per la classe:
- Programmazione annuale
- Programma svolto
- Relazione finale
- Sintesi percorso

Per la progettazione:
- UDA
- Rubriche
- Evidenze

Per il curricolo:
- Estratto disciplinare
- Documento curricolo
- Fonti e versioni
- Sintesi finale

Per il processo:
- Proposta docente .cml
- Esito dipartimentale .cml
- Report referente

Archivio e sicurezza:
- Backup locale
- Pacchetto classe
- Pacchetto dipartimento
```

Ogni documento mostra:

```text
contesto richiesto
fonte/versione
stato documento
validazione richiesta
formati disponibili
```

## 8. Riferimenti e guida

Compatto:

```text
Fonti e normativa
IN2012 e IN2025
Ruoli e processo
Uso e limiti
```

## 9. Impostazioni / Contesto di lavoro

Stile guidato ma compatto:

```text
Chi sei?
Dove lavori?
Che cosa insegni?
Quali classi segui?
Quale anno scolastico?
Quale riferimento curricolare?
```

Output chip:

```text
Tecnologia · Secondaria · Classi 1A, 2B, 3C · A.S. 2026/27
```

## 10. Mobile

Stile B compatto:

```text
Topbar: ambiente + stato + impostazioni
Bottom bar: Curricolo | Progetta | Esporta | Guida
Card grandi
Una azione primaria per vista
Dettagli fonte/stato espandibili
```

## 11. Punti forti

```text
equilibrio tra istituzione e semplicità
adatto a docenti non tecnici
presentabile a referente/dirigenza
compatibile con runtime progressivo
riusa elementi già presenti in index.html
```

## 12. Rischi

```text
richiede disciplina nel microcopy
serve decidere quali pannelli avanzati implementare prima
non tutte le viste possono essere implementate insieme
```

## 13. Raccomandazione

Questa è la proposta consigliata come base per CML-421F.

## Verdict

```text
CML_421E_MOCK_D_HYBRID_RECOMMENDED_READY
```
