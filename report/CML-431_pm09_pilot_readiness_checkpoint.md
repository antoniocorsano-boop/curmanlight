# CML-431 — PM-09 Pilot Readiness Checkpoint

Checkpoint di governance che certifica la prontezza di CurManLight per una prova pilota reale con docenti non tecnici.

---

## Catena PM-09 completata

```text
CML-399 ──→ scenario pack
CML-400 ──→ ingresso runtime (card + modal + export .txt)
CML-427 ──→ smoke desktop/mobile/export
CML-428 ──→ pilot kit (invito + istruzioni + griglia)
CML-429 ──→ evidence intake model (classificazione + priorit)
CML-430 ──→ intake summary template (sintesi decisionale)
```

## Artefatti disponibili

| Cosa | Dove |
|---|---|
| Test guidato per docenti | Home → "Partecipa al test guidato" |
| Export osservazioni | Modal test guidato → "Esporta osservazioni" |
| Messaggio di invito | `report/CML-428_user_validation_pilot_kit.md` §3 |
| Istruzioni operative | `report/CML-428_user_validation_pilot_kit.md` §4 |
| Griglia di lettura | `report/CML-428_user_validation_pilot_kit.md` §8 |
| Modello intake evidenze | `report/CML-429_user_validation_evidence_intake_model.md` |
| Template sintesi decisionale | `report/CML-430_user_validation_intake_summary_template.md` |

## Regola operativa per le prossime slice

**Fermo modifica UI fino a raccolta evidenze reali.**

Deroghe consentite solo per:
- bug che bloccano la navigazione in uno dei flussi principali;
- problemi di sicurezza;
- altri casi da motivare e documentare esplicitamente nell'execution doc.

Ogni nuova slice deve:
1. Derivare da almeno un'evidenza classificata (CML-429);
2. Essere documentata nel template sintesi (CML-430);
3. Riferire l'ID evidenza sorgente.

## Prossimi passi (fuori-repo)

1. Selezionare 2–5 docenti non tecnici (Infanzia, Primaria, Secondaria).
2. Inviare il messaggio di invito.
3. Raccogliere i file `.txt` esportati.
4. Compilare il template CML-430.
5. Decidere le slice sulla base delle evidenze.

## Stato repository al checkpoint

- Branch: `main`
- HEAD: `796411e`
- Origin/main: sincronizzato
- Runtime: invariato rispetto a CML-400
- Dati curricolari: 14/14 validi
- Shape test runtime: 14/14 PASS

---

## Verdetto

CML_431_PM09_PILOT_READINESS_CHECKPOINT_READY_LOCAL_NOT_PUSHED
