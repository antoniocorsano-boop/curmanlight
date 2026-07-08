# CML-421B — School Document Export Needs Audit

## Mandatory Slice Header

- Macroprogramma: PM-09 Validazione con utenti / PM-05 Esperienza di lavoro / PM-07 Uniformità
- Dipende da: CML-421
- Tipo slice: docs/design-audit-only remoto
- Branch: `remote-lab/cml-419-in2012-in2025-technical-table`
- Runtime: non modificato
- Main: non modificato

## Origine

Questa slice nasce dal rilievo:

```text
CML-421-R004 — Esportazione per documenti scolastici ricorrenti
```

Durante il test simulato è emerso che l'area Esportazione deve essere organizzata per documenti scolastici reali, non solo per formati o file tecnici.

## Obiettivo

Definire gli output scolastici necessari a docente, dipartimento, referente e governance prima di implementare un centro esportazioni maturo.

## Principio

L'utente deve partire dal bisogno scolastico:

```text
Che documento devo preparare?
Per quale classe, ruolo o fase di lavoro?
```

Non dal formato file.

## Struttura da validare

```text
Esportazione
├─ Per la classe
│  ├─ Programmazione annuale
│  ├─ Programma svolto
│  ├─ Relazione finale
│  └─ Sintesi percorso
├─ Per la progettazione
│  ├─ UDA
│  ├─ Evidenze
│  ├─ Rubriche
│  └─ Collegamenti curricolo
├─ Per il curricolo
│  ├─ Estratto disciplinare
│  ├─ Documento curricolo
│  ├─ Fonti e versioni
│  └─ Sintesi finale
├─ Per il processo
│  ├─ Proposta docente .cml
│  ├─ Esito dipartimentale
│  ├─ Report referente
│  └─ Materiale per discussione collegiale
└─ Archivio e sicurezza
   ├─ Copia locale
   ├─ Pacchetto classe
   ├─ Pacchetto dipartimento
   └─ Backup .cml
```

## Relazione con Impostazioni

Il Contesto di lavoro non appartiene a Esportazione.

Esportazione usa il contesto globale già impostato in:

```text
Impostazioni / Contesto di lavoro
```

Se il contesto manca, Esportazione mostra solo un avviso:

```text
Per generare documenti per classe devi prima completare il Contesto di lavoro nelle Impostazioni.
```

## Domande guida

1. Quali documenti servono realmente al docente durante l'anno?
2. Quali documenti servono a fine anno?
3. Quali documenti servono al dipartimento?
4. Quali documenti servono al referente curricolo?
5. Quali documenti sono materiali di lavoro e quali documenti verificati?
6. Quali export devono includere stato fonte/versione?
7. Quali export devono contenere cautele su validazione umana?
8. Quali pacchetti documentali sono utili per classe, dipartimento o anno scolastico?

## Output attesi

- catalogo documenti scolastici;
- raggruppamento per classe/progettazione/curricolo/processo/archivio;
- campi minimi per ciascun documento;
- dipendenze dal Contesto di lavoro;
- dipendenze dal Curricolo;
- cautele di fonte e validazione;
- priorità runtime.

## Non autorizzato

CML-421B non autorizza:

- runtime;
- export automatici definitivi;
- documenti istituzionali non verificati;
- cambio stack;
- merge su main.

## Verdict atteso

```text
CML_421B_SCHOOL_DOCUMENT_EXPORT_NEEDS_AUDIT_READY_REMOTE_BRANCH
```
