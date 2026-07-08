# CML-401 — Process Home Runtime Remote Lab

## Sintesi

È stato predisposto un ramo remoto mantenibile per simulare un'integrazione locale senza modificare `main`.

Branch:

```text
remote-lab/cml-401-process-home-runtime-keep
```

## Cosa è stato implementato

### 1. Struttura Home

File:

```text
runtime-fragments/CML-401_process_home_hub.html
```

Contiene il blocco Home completo:

- titolo `Hub del processo curricolare`;
- CTA verso Curricolo, Progetta, Esportazioni, Guida;
- percorso operativo `Consulta → Scegli → Progetta → Esporta → Verifica`;
- pipeline `Docente → Dipartimento → Referente → Collegio`;
- riferimenti a proposta `.cml`, esito dipartimento, validazione e documento approvato;
- aree del sistema: Curricolo, Progetta, Esportazioni, Guida;
- principi: dati locali, nessun invio automatico, validazione umana.

### 2. Stili dedicati

File:

```text
runtime-fragments/CML-401_process_home_hub.css
```

Contiene classi isolate:

- `.home-process-hub`
- `.home-process-flow`
- `.home-process-step`
- `.home-process-pipeline`
- `.home-process-role`
- `.home-system-areas`
- `.home-system-area`
- `.home-governance-strip`

Non modifica classi globali esistenti.

### 3. Script di applicazione runtime

File:

```text
tools/cml-401-apply-process-home-runtime.mjs
```

Lo script applica la struttura a:

```text
index.html
_published_snapshot/netlify-current/index.html
```

Lo script:

- evita duplicazioni;
- cerca marcatori Home esistenti;
- inserisce CSS prima di `</style>`;
- inserisce il blocco Home come stringa JS/HTML nel runtime;
- verifica coerenza root/snapshot;
- non modifica dati curricolari;
- non modifica schema `.cml`.

## Perché non è stata fatta sostituzione diretta dei runtime via connettore

Il file runtime è esteso e all-in-one. Il connettore remoto consente la sostituzione completa del file, ma non offre una patch parziale sicura equivalente a un lavoro locale.

La scelta più prudente è stata:

- creare branch remota mantenibile;
- salvare frammenti e script;
- rendere la patch ripetibile;
- evitare una sostituzione cieca di `index.html` e snapshot.

## Comando previsto

In un clone del ramo:

```bash
node tools/cml-401-apply-process-home-runtime.mjs
```

Poi:

```bash
git diff --check
node tools/validate-cml-normalized-curriculum.mjs
node tools/test-runtime-mappa-dati-shape.mjs
```

## Stato runtime

- `main`: non modificato.
- Pages: non toccata.
- Branch laboratorio: pronta per integrazione controllata.

## Verdict

```text
CML_401_PROCESS_HOME_RUNTIME_REMOTE_LAB_PREPARED
```
