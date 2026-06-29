# CML-UX-MOBILE-PROGETTAZIONE-HOTFIX - Report

## Riepilogo

Triage P0/P1 su mobile e sezione "Competenze e progettazione". Il mobile essenziale rispondeva, ma e' stato riprodotto un P1: entrando in Competenze con disciplina diversa da Tecnologia, Evidenze e Mappa potevano restare agganciate a `mappaDisciplinaCorrente=tecnologia`.

La hotfix riallinea Competenze, Evidenze, Mappa e generatore UDA alla disciplina selezionata (`selDisc`) senza modificare contenuti curricolari.

| Aspetto                      | Valore                                           |
| ---------------------------- | ------------------------------------------------ |
| Branch                       | `main`                                           |
| Commit iniziale              | `3c8b54d`                                        |
| Runtime modificato           | si                                               |
| File runtime                 | `_published_snapshot/netlify-current/index.html` |
| JSON disciplinari modificati | no                                               |
| Push eseguito                | no                                               |
| Verdict                      | `CML_UX_MOBILE_PROGETTAZIONE_HOTFIX_READY`       |

## Problemi riprodotti

| Problema                                                                     | Gravita       | Esito                                            |
| ---------------------------------------------------------------------------- | ------------- | ------------------------------------------------ |
| Mobile completamente bloccato                                                | P0 ipotizzato | Non riprodotto: bottom bar e menu rispondono     |
| Competenze/Evidenze agganciate a Tecnologia con altra disciplina selezionata | P1            | Riprodotto e corretto                            |
| UDA statico Tecnologia mostrato anche su altre discipline                    | P1/P2         | Corretto senza creare nuovi contenuti            |
| Fallback mappa non coerente                                                  | P2            | Non riprodotto post-fix sulle discipline testate |

## Causa

La sezione Competenze usava due stati disciplina diversi:

- `selDisc`, usato da sidebar, breadcrumb e curriculum;
- `mappaDisciplinaCorrente`, usato da Evidenze/Mappa.

Quando si entrava in Competenze da mobile senza selezionare esplicitamente una nuova disciplina nella sidebar, `mappaDisciplinaCorrente` poteva restare su `tecnologia`. Questo produceva contenuti non coerenti con la disciplina visibile.

## Fix

- Evidenze: dati letti da `discKeyFromName(selDisc)`.
- Tab Competenze/UDA: sincronizzazione `mappaDisciplinaCorrente` da `selDisc` prima del render.
- Generatore UDA: select disciplina riallineata a `selDisc`.
- UDA statico: card Tecnologia mostrate solo per Tecnologia; per altre discipline viene mostrata una nota che indica di usare il generatore bozza UDA.

## Smoke mobile

| Viewport | Home | Curriculum | Competenze | UDA  | Export | Menu/Guida | Esito |
| -------- | ---- | ---------- | ---------- | ---- | ------ | ---------- | ----- |
| 390x844  | PASS | PASS       | PASS       | PASS | PASS   | PASS       | PASS  |
| 430x932  | PASS | PASS       | PASS       | PASS | PASS   | PASS       | PASS  |
| 360x740  | PASS | PASS       | PASS       | PASS | PASS   | PASS       | PASS  |

## Discipline

| Disciplina | Evidenze post-fix | UDA draft post-fix | Mappa post-fix |
| ---------- | ----------------- | ------------------ | -------------- |
| Tecnologia | 13 unita          | 13 unita           | Tecnologia     |
| Italiano   | 14 unita          | 14 unita           | Italiano       |
| Matematica | 13 unita          | 13 unita           | Matematica     |
| Storia     | 15 unita          | 15 unita           | Storia         |
| Inglese    | 12 unita          | 12 unita           | Inglese        |

## Validazioni

| Verifica                                            | Esito                          |
| --------------------------------------------------- | ------------------------------ |
| `node --check` script inline                        | PASS                           |
| `node tools/validate-cml-normalized-curriculum.mjs` | 14/14 PASS                     |
| `node tools/test-runtime-mappa-dati-shape.mjs`      | 14/14 PASS                     |
| CDP smoke mobile HTTP                               | PASS                           |
| Errori JavaScript reali                             | 0                              |
| 404 non bloccanti                                   | favicon/risorsa statica locale |

## Regressioni

Nessuna regressione rilevata su Curriculum, Evidenze, UDA generator, Export, Guida, bottom bar, menu mobile, hash disciplina e mappa dati. Gli accordion ARIA non sono stati modificati.

## Stato git e push

Il commit docs-only `3c8b54d` resta locale e non pushato. Questa hotfix non e' stata pushata.

## Conclusione

La sezione Competenze e progettazione ora segue la disciplina selezionata nelle aree operative testate. Il mobile essenziale resta utilizzabile sulle tre viewport richieste.
