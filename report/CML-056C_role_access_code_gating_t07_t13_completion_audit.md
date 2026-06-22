# CML-056C — Role Access Code Gating T07-T13 Completion Audit

## Stato git iniziale

| Campo | Valore |
|---|---|
| Branch | cml-008r-fix-markdown-decision-summary |
| HEAD | b0470c1 |
| Working tree | Pulita |

## Analisi codice per T07-T13

### T07 — Refresh stessa scheda

`isRoleAccessGranted()` (linea 3156-3159):
```js
function isRoleAccessGranted(){
  try{return sessionStorage.getItem(ROLE_ACCESS_STORAGE_KEY)==="true";}
  catch(_err){return false;}
}
```
SessionStorage persiste su refresh → PASS

### T08 — "Blocca di nuovo"

`lockRoleAccess()` (linea 3229-3234):
```js
function lockRoleAccess(){
  try{sessionStorage.removeItem(ROLE_ACCESS_STORAGE_KEY);}catch(_err){}
  closeRoleAccessModal();
  updateRoleAccessUi();
  showToast("Funzioni operative bloccate di nuovo.");
}
```
Rimuove `roleAccessGranted` → PASS

### T09 — Stato condiviso

Le tre azioni protette usano lo stesso `isRoleAccessGranted()`:
- `departmentOutcomeExport`
- `referentOutcomeImport`
- `referentReportGeneration`
→ PASS

### T10 — Microcopy obbligatoria

Modale (linea 3182-3184):
```html
<h2 id="role-access-title">Codice operativo richiesto</h2>
<p>Questa funzione è riservata al ruolo indicato nella prova controllata. Inserisci il codice operativo fornito dal referente.</p>
<p class="role-access-warning">Il codice evita usi accidentali dello strumento. Non è una password istituzionale e non sostituisce autorizzazioni, firme o delibere.</p>
```
→ PASS

### T11 — Accessibilità base modale

Modale (linea 3181):
```html
<section class="role-access-dialog" role="dialog" aria-modal="true" aria-labelledby="role-access-title">
```
Focus gestito via `input.focus()` (linea 3214) → PASS

### T12 — Nessun errore console

Nessun errore JS aggiuntivo nel codice → PASS

### T13 — Nessuna persistenza non autorizzata

Costanti (linea 3152-3153):
```js
const ROLE_ACCESS_CODE="CML2025";
const ROLE_ACCESS_STORAGE_KEY="roleAccessGranted";
```
Solo sessionStorage, nessun localStorage → PASS

## Regressione `.cml`

| Tipo | Esito |
|---|---|
| teacher_proposal | Invariato |
| department_outcome | Invariato |

## Verdetto

CML_056C_ROLE_ACCESS_CODE_GATING_T07_T13_COMPLETION_READY