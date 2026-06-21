# CML-013B — Report

**Task**: Guided Home Static Prototype  
**Data**: 21/06/2026  
**Base**: CML-013A (e3c105d) — Full UI/UX Redesign Study and Contract

## Descrizione

Primo prototipo runtime della nuova home guidata. Intervento minimo:
23 insertion, 10 deletion, solo CSS + HTML, nessuna logica modificata.

## Verifiche

- [x] Preflight: branch, HEAD e3c105d, working tree pulita
- [x] CML-013A e CML-012A preservati
- [x] Tre azioni principali visibili: Controlla voci, Apri documento, Esporta
- [x] Breadcrumb "Revisione per disciplina" sotto tabbar
- [x] Sidebar meno dominante (box-shadow leggero, title #78909c)
- [x] Toolbar compatta (no shadow, border sottile, filtri font 10px)
- [x] Salvataggio come stato compatto nel cruscotto-bar
- [x] Salva/Backup/Importa/Ripristina nel menu Azioni
- [x] Nessuna funzione persa
- [x] Conteggi invariati
- [x] Logica approvazione/rifiuto invariata
- [x] Asset invariati (PDF, sw.js, _headers, manifest, export panel)
- [x] Nessun deploy
- [x] Working tree: pulita dopo commit

## Verdetto

```
CML_013B_GUIDED_HOME_STATIC_PROTOTYPE_READY
```
