# CML-UX-NAVIGATION-AND-SCROLLING-STABILIZATION

## Obiettivo
Stabilizzare la navigazione e il comportamento dello scrolling nell'app CurManLight, risolvendo problemi di:
- Codice ridondante nella gestione delle discipline
- Doppi scroll nella vista UDA modello

## Stato iniziale
- Branch: `main`
- HEAD: `ffd78b2`
- origin/main: allineato
- Score accessibilità: 88/100
- Validatori: 14/14 PASS

## Problemi risolti

### 1. Codice ridondante `discKeyFromName` (P2)
**File**: `_published_snapshot/netlify-current/index.html`
**Linee**: 3659-3662
**Problema**: Chiamata duplice a `discKeyFromName(selDisc)` in sequenza, la seconda sovrascrivendo la prima senza ragione
**Fix**: Rimossa la variabile intermedia `selectedKey`, mantenuto unica chiamata

```javascript
// Prima (ridondante)
var selectedKey=discKeyFromName(selDisc);
if(selectedKey) mappaDisciplinaCorrente=selectedKey;
var dk=discKeyFromName(selDisc);if(dk)mappaDisciplinaCorrente=dk;

// Dopo (ottimizzato)
var dk=discKeyFromName(selDisc);if(dk)mappaDisciplinaCorrente=dk;
```

### 2. Doppio scroll in `didattica_uda` (P2)
**File**: `_published_snapshot/netlify-current/index.html`
**Linee**: 3671 (rimossa) + 3707 (esistente)
**Problema**: `scrollIntoView({behavior:"smooth"})` su `didattica-uda` veniva eseguito insieme a `window.scrollTo({top:0,behavior:"smooth"})`, causando scrolling eccessivo/confuso
**Fix**: Rimosso il `scrollIntoView` ridondante - il `setTab` gestisce già lo scroll al top con focus management

## Modifiche applicate
| File | Righe modificate | Tipo |
|------|-----------------|------|
| `_published_snapshot/netlify-current/index.html` | -4 (rimozione ridondanze) | runtime microfix |

## Validazione
- **Curriculum validator**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **JS error check**: nessuna ridondanza logica, nessun errore

## Invarianti rispettate
- Nessun file dati modificato
- Nessun schema .cml modificato
- Nessun tool modificato
- Nessun asset modificato
- Accessibilità: 88/100 invariato

## Verdetto
```text
CML_UX_NAVIGATION_AND_SCROLLING_STABILIZATION_READY
```