# CML-533 - React Product Roadmap Re-entry Audit Report

## Sintesi

Audit breve, docs-only e decisionale per rientrare nella roadmap React dopo la chiusura del filone service worker. L'audit conferma che la baseline React dispone gia degli strumenti tecnici per raccogliere feedback pilota, trasformarlo in backlog e collegarlo al Registro decisioni. Il collo di bottiglia non e un nuovo componente, ma un protocollo di pilot reale guidato.

## Evidenza principale

- CML-525O: feedback pilota anonimo, locale, esportabile in JSON/Markdown.
- CML-525P: import e analisi descrittiva dei feedback, senza backend o classificazione automatica.
- CML-525Q: triage manuale in backlog locale.
- CML-526: Registro decisioni collegato a `PilotFinding`, con export Markdown e campi di implementazione/verifica/pubblicazione.
- CML-518C/D/E: guardie tecniche per Docente, Dipartimento e Referente.
- React UI corrente: `ProductDecisionRegisterView`, `PilotFeedbackAnalysisView`, `RevisioneView`, `EsportazioniView` e viste ruolo presenti; `ProcessoView` ancora descrittiva.

## Matrice compatta

| Asse | Stato reale | Blocco al pilot | Valore del prossimo incremento | Priorita |
|------|-------------|----------------:|-------------------------------:|---------:|
| Registro decisioni | Completo tecnicamente; da usare dopo evidenze reali | Basso | Medio | P2 |
| Pilot docenti | Pronto come infrastruttura; manca protocollo operativo | Alto | Alto | P0 |
| Mobile/accessibilita | Parziale; gate P0/P1 da verificare su compiti reali | Medio | Medio | P1 |
| Flusso ruoli | Guardie solide; orientamento operativo ancora fragile | Medio | Medio-alto | P1 |

## Decisione

Il prossimo incremento consigliato non e ampliare il Registro decisioni ne riscrivere subito il flusso ruoli. La scelta a maggior valore e:

```text
CML-534 - Guided Teacher Pilot Protocol for React Baseline
```

Ragione: riduce il rischio del pilot, produce evidenze utili, usa capacita gia disponibili, ha perimetro tecnico ridotto e avvicina la baseline React a un uso reale da parte dei docenti.

## Gate da mantenere

- Mobile/accessibilita: trattare come blocco solo se emergono P0/P1 durante scenari reali.
- Flusso ruoli: osservare se i docenti/coordinatori capiscono passaggi e file; correggere solo frizioni dimostrate.
- Registro decisioni: usare per tracciare decisioni derivate dal backlog pilota, non come prerequisito da espandere.

## Verdetto

```text
CML_533_REACT_PRODUCT_ROADMAP_REENTRY_AUDIT_READY_LOCAL_NOT_PUSHED
```