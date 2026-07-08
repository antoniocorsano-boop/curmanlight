# CML-423A — Remote Handoff for Work Context Runtime Patch

## Mandatory Slice Header

- Macroprogramma: PM-09 Validazione con utenti / PM-03 Orientamento / PM-05 Esperienza di lavoro / PM-06 Accompagnamento / PM-07 Uniformità
- Dipende da: CML-423
- Tipo slice: docs/remote-handoff-only
- Branch: `remote-lab/cml-419-in2012-in2025-technical-table`
- Runtime: non modificato da questa slice
- Main: non modificato

## Motivo

L'utente non può eseguire ora in locale.

La patch runtime CML-423 non deve essere forzata via sostituzione completa remota del file `index.html`, perché il file è grande e deve restare allineato con `_published_snapshot/netlify-current/index.html`.

Questa slice prepara quindi un handoff preciso per un agente patch-aware o per una futura sessione con ambiente locale.

## Obiettivo della patch futura

Implementare:

```text
Contesto di lavoro + Anno scolastico
```

con perimetro minimo:

```text
userProfile.annoScolastico
helper per label anno scolastico
chip contesto sintetico
campo UI anno scolastico nel profilo/contesto
riga anno scolastico nella bozza UDA
salvataggio locale retrocompatibile
backup automaticamente esteso tramite profile:userProfile
```

## File runtime da patchare

```text
index.html
_published_snapshot/netlify-current/index.html
```

Le modifiche devono essere identiche nel runtime pair.

## Patch plan dettagliato

### STEP 1 — Estendere DEFAULT_PROFILE

Cercare:

```js
const DEFAULT_PROFILE={nome:"",cognome:"",disciplina:DISCIPLINE[0],ordine:"Secondaria"};
```

Sostituire con:

```js
const DEFAULT_PROFILE={nome:"",cognome:"",disciplina:DISCIPLINE[0],ordine:"Secondaria",annoScolastico:""};
```

Motivo:

```text
Retrocompatibile perché loadLocalState/importLocalBackup usano {...DEFAULT_PROFILE,...payload.profile}.
```

### STEP 2 — Aggiungere helper anno scolastico

Inserire dopo `escapeHtml(value)` o vicino alle funzioni profilo:

```js
function getSchoolYearLabel(){
  var value=(userProfile&&userProfile.annoScolastico?String(userProfile.annoScolastico).trim():"");
  return value ? "A.S. "+value : "Anno scolastico non impostato";
}
function getWorkContextChip(){
  var parts=[];
  if(userProfile.disciplina) parts.push(userProfile.disciplina);
  if(userProfile.ordine) parts.push(ORDER_PROFILE_LABELS[userProfile.ordine]||userProfile.ordine);
  if(userProfile.annoScolastico) parts.push("A.S. "+userProfile.annoScolastico);
  else parts.push("Anno scolastico non impostato");
  return parts.join(" · ");
}
function requiresSchoolYearMessage(){
  return "Completa l'Anno scolastico in Impostazioni / Contesto di lavoro per generare documenti per classe o report.";
}
```

### STEP 3 — Campo UI Anno scolastico

Individuare il form o pannello profilo/contesto già esistente.

Aggiungere campo:

```html
<label for="profile-anno-scolastico">Anno scolastico</label>
<input id="profile-anno-scolastico" type="text" placeholder="2026/27" autocomplete="off">
```

Regola UX:

```text
Campo breve, non invasivo.
Usare esempio 2026/27.
Non richiedere dati personali studenti.
```

### STEP 4 — Popolare il campo dal profilo

Nel render del profilo/contesto, aggiungere:

```js
var yearInput=document.getElementById("profile-anno-scolastico");
if(yearInput) yearInput.value=userProfile.annoScolastico||"";
```

### STEP 5 — Salvare il campo nel profilo

Nel salvataggio profilo/contesto, aggiungere:

```js
var yearInput=document.getElementById("profile-anno-scolastico");
if(yearInput) userProfile.annoScolastico=yearInput.value.trim();
```

Poi mantenere:

```js
saveLocalState(false);
renderProfileSummary();
```

oppure il flusso equivalente già esistente.

### STEP 6 — Chip contesto

Nel riepilogo profilo o nell'header/home dove è mostrato il contesto, usare:

```js
getWorkContextChip()
```

Esempio output:

```text
Tecnologia · Scuola Secondaria di I grado · A.S. 2026/27
```

Se manca:

```text
Tecnologia · Scuola Secondaria di I grado · Anno scolastico non impostato
```

### STEP 7 — UDA draft

In `buildUdaDraftMarkdown()`, dopo:

```js
lines.push('**Ordine:** ' + ordLabel + ' · ' + classeLabel);
```

aggiungere:

```js
lines.push('**Anno scolastico:** ' + getSchoolYearLabel());
```

### STEP 8 — Nessuna modifica strutturale backup

Non modificare `saveLocalState()` o `exportLocalBackup()` salvo necessità, perché già includono:

```js
profile:userProfile
```

## Divieti

Non fare in CML-423A/CML-423 runtime:

```text
nuovi export completi
nuovo backend
login
Drive/Workspace
modifica dati curricolari
modifica flusso .cml
refactor ampio
nuova navigazione completa
implementazione intero mock D2
```

## Validazioni obbligatorie dopo patch

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

## Acceptance criteria

```text
Anno scolastico configurabile nel Contesto di lavoro.
Campo retrocompatibile con salvataggi precedenti.
Contesto salvato localmente.
Chip contesto mostra disciplina/ordine/anno scolastico se disponibili.
Bozza UDA include Anno scolastico.
Backup include il campo tramite profile:userProfile.
Nessuna modifica ai dati curricolari.
Nessun cambio al flusso .cml esistente.
Runtime pair allineato.
```

## Stato

```text
Runtime non modificato
Main non modificato
Deploy non eseguito
Handoff pronto
```

## Verdict

```text
CML_423A_REMOTE_HANDOFF_WORK_CONTEXT_SCHOOL_YEAR_PATCH_READY_NOT_APPLIED
```
