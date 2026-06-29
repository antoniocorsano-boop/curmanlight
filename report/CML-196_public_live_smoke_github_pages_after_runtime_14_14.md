# CML-196 - Public Live Smoke GitHub Pages After Runtime 14/14

Data: 2026-06-27

## 1. Scopo

Verificare che la build pubblica di GitHub Pages rifletta l'integrazione runtime 14/14 completa dopo il push controllato CML-195.

## 2. URL verificato

`https://antoniocorsano-boop.github.io/curmanlight/`

## 3. Risultati

| Verifica                                      | Esito                     |
| --------------------------------------------- | ------------------------- |
| HTTP 200                                      | OK                        |
| `DISCIPLINE_META`                             | 14/14 discipline presenti |
| `SECONDA_LINGUA_COMUNITARIA_MAPPA_DATI`       | Presente                  |
| `RELIGIONE_CATTOLICA_MAPPA_DATI`              | Presente                  |
| `LATINO_LEL_MAPPA_DATI`                       | Presente                  |
| `#cur-SecondaLinguaComunitaria` render branch | Presente                  |
| `#cur-ReligioneCattolica` render branch       | Presente                  |
| `#cur-LatinoLEL` render branch                | Presente                  |
| 14 selettori                                  | Tutti presenti            |
| Discipline preesistenti (Tecnologia → EF)     | Invariate                 |

## 4. Cache/service-worker note

GitHub Pages ha distribuito automaticamente la build contenente il commit `6ec65ec`. Nessun deploy manuale effettuato. Nessun segreto esposto.

## 5. Raccomandazione

Il ciclo di integrazione runtime è completo. Prossimo ciclo consigliato: **B** (export/import e schema .cml), **C** (evidenze/UDA), **D** (SchoolKB), o **E** (design/UML docs).
