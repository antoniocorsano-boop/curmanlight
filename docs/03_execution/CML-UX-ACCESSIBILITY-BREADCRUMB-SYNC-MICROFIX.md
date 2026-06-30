# CML-UX-ACCESSIBILITY-BREADCRUMB-SYNC-MICROFIX — Breadcrumb Sync Microfix

## Contesto

L'audit precedente (CML-UX-ACCESSIBILITY-BREADCRUMB-SYNC-AUDIT) ha confermato che il breadcrumb desktop non si aggiorna dopo il cambio disciplina da sidebar/menu. Causa: `selectDisc()` non aggiorna il breadcrumb.

## Obiettivo

Aggiornare il breadcrumb quando l'utente cambia disciplina su tab "curricolo", "lavoro", "riepilogo".

## Modifica Runtime

**File**: `_published_snapshot/netlify-current/index.html`

**Righe modificate**: +4

```javascript
var _bc=document.getElementById("breadcrumb");
if(_bc&&(currentTab==="curricolo"||currentTab==="lavoro"||currentTab==="riepilogo")){
    _bc.innerHTML='<span class="crumb-current">'+({curricolo:"Curriculum — Consultazione",lavoro:"Curriculum — Revisione",riepilogo:"Curriculum — Definitivo"}[currentTab])+(selDisc?" — "+selDisc:"")+'</span>';
}
```

Aggiunto in `refreshCurrentDisciplineViews()`.

## Vincoli Rispettati

- Solo modifica JS interna alla funzione esistente
- Nessun cambio layout/comportamento visivo
- Nessun tocco a JSON, .cml, export, tool, o asset

## Verifica

- `git diff --check`: clean
- Validatore: non eseguito (nessun file dati modificato)
- Shape test: non eseguito (nessun file dati modificato)
- Secret scan: clean

## Verdict

`CML_UX_ACCESSIBILITY_BREADCRUMB_SYNC_MICROFIX_READY`
