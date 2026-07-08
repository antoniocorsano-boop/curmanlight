# CML-423 — Work Context and School Year Patch Contract Report

## 1. Scopo

Registrare l'esito del gate tecnico per la prima micro-slice runtime:

```text
Contesto di lavoro + Anno scolastico
```

## 2. Evidenze runtime lette

Da `index.html`:

```js
const DEFAULT_PROFILE={nome:"",cognome:"",disciplina:DISCIPLINE[0],ordine:"Secondaria"};
let userProfile={...DEFAULT_PROFILE};
```

Il runtime salva già:

```js
profile:userProfile
```

in:

```text
saveLocalState
exportLocalBackup
```

E ricarica già il profilo con fallback retrocompatibile:

```js
userProfile={...DEFAULT_PROFILE,...payload.profile}
```

in:

```text
loadLocalState
importLocalBackup
```

## 3. Patch minima definita

Estendere il profilo:

```js
const DEFAULT_PROFILE={
  nome:"",
  cognome:"",
  disciplina:DISCIPLINE[0],
  ordine:"Secondaria",
  annoScolastico:""
};
```

Aggiungere helper:

```js
getSchoolYearLabel()
getWorkContextChip()
requiresSchoolYearMessage()
```

Aggiungere il campo UI:

```text
Anno scolastico
```

nel Contesto di lavoro / profilo.

Aggiungere alla bozza UDA:

```text
Anno scolastico: A.S. 2026/27
```

## 4. Perché non applicata ora via connettore remoto

Il file `index.html` è molto grande e il connettore disponibile per modifica file opera come sostituzione completa del contenuto.

Applicare una patch runtime su un file di grandi dimensioni senza un meccanismo patch-aware aumenterebbe il rischio di:

```text
perdita involontaria di contenuto;
divergenza tra index.html e _published_snapshot/netlify-current/index.html;
regressione runtime;
modifica non controllata di sezioni non coinvolte.
```

Decisione prudente:

```text
non applicare runtime da remoto in questa sessione;
preparare contratto patch esatto;
applicare localmente o con strumento patch-aware;
poi eseguire validazioni.
```

## 5. File runtime da modificare quando si applica

```text
index.html
_published_snapshot/netlify-current/index.html
```

## 6. Validazioni richieste

```text
git diff --check
validator curriculum 14/14
runtime shape test 14/14
smoke Home
smoke profilo/contesto
smoke UDA draft
backup export/import
mobile smoke chip contesto
```

## 7. Stato

```text
Runtime non modificato
Main non modificato
Deploy non eseguito
Patch contract pronto
```

## Verdict

```text
CML_423_WORK_CONTEXT_AND_SCHOOL_YEAR_RUNTIME_PATCH_CONTRACT_READY_REMOTE_BRANCH_NOT_APPLIED
```
