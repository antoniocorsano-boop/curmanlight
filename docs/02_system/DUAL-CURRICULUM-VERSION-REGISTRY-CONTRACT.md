# Dual Curriculum Version Registry and Consultation Selection Contract

## 1. Scopo

Questo contratto definisce come CurManLight deve registrare, distinguere e presentare più versioni curricolari durante la transizione fra Indicazioni nazionali 2012 e Indicazioni nazionali 2025.

Il registro non sostituisce il resolver temporale CML-478. Il resolver determina quale quadro nazionale è applicabile a una combinazione di anno scolastico, ordine, classe e disciplina. Il registro identifica invece quali versioni documentali esistono, quale contenuto rappresentano e con quale stato istituzionale possono essere consultate.

## 2. Principio fondamentale

CurManLight deve mantenere distinti almeno quattro oggetti:

1. **quadro nazionale applicabile** — risultato normativo del resolver temporale;
2. **versione nazionale di riferimento** — contenuto derivato dalle Indicazioni 2012 o 2025;
3. **versione curricolare d'istituto** — adattamento elaborato dalla scuola;
4. **stato istituzionale** — livello di elaborazione, validazione e deliberazione della versione d'istituto.

Nessuno di questi oggetti può essere dedotto automaticamente dagli altri.

## 3. Identità di versione

Ogni versione deve avere un identificatore stabile e non ambiguo.

```ts
interface CurriculumVersionDescriptor {
  versionId: string
  framework: 'IN_2012' | 'IN_2025'
  scope: 'nazionale' | 'istituto'
  institutionId: string | null
  discipline: string
  order: 'Infanzia' | 'Primaria' | 'Secondaria'
  classBand: string | null
  academicYearFrom: string | null
  academicYearTo: string | null
  contentRef: string
  sourceRefs: string[]
  lifecycleStatus: CurriculumVersionLifecycleStatus
  deliberationStatus: CurriculumDeliberationStatus
  supersedesVersionId: string | null
  derivedFromVersionId: string | null
  createdAt: string | null
  updatedAt: string | null
}
```

### 3.1 `versionId`

Formato raccomandato:

```text
<scope>:<framework>:<ordine>:<disciplina>:<versione>
```

Esempi:

```text
nazionale:IN_2012:Secondaria:tecnologia:v1
nazionale:IN_2025:Secondaria:tecnologia:v1
istituto:IN_2025:Secondaria:tecnologia:2026-draft-01
```

L'identificatore non deve incorporare implicitamente uno stato deliberativo modificabile.

## 4. Stati della versione

### 4.1 Ciclo di vita documentale

```ts
type CurriculumVersionLifecycleStatus =
  | 'disponibile'
  | 'in_preparazione'
  | 'in_revisione'
  | 'sostituita'
  | 'archiviata'
```

- `disponibile`: contenuto consultabile e completo per il proprio perimetro;
- `in_preparazione`: versione incompleta, non utilizzabile come riferimento operativo definitivo;
- `in_revisione`: versione sottoposta a confronto o validazione umana;
- `sostituita`: versione mantenuta per tracciabilità ma superata da un'altra versione;
- `archiviata`: versione conservata solo per storia e audit.

### 4.2 Stato istituzionale

```ts
type CurriculumDeliberationStatus =
  | 'non_applicabile'
  | 'bozza'
  | 'proposta_dipartimentale'
  | 'validata_referente'
  | 'approvata_collegio'
  | 'adottata_istituto'
  | 'revocata'
```

Per le versioni nazionali il valore è `non_applicabile`.

Per le versioni d'istituto lo stato deve derivare da un atto umano esplicito e tracciabile. Il sistema non può promuovere automaticamente una bozza a versione approvata o adottata.

## 5. Relazioni fra versioni

- `derivedFromVersionId` collega un adattamento d'istituto alla versione nazionale o istituzionale da cui deriva;
- `supersedesVersionId` indica quale versione viene sostituita;
- una versione può essere applicabile normativamente senza essere ancora adottata dall'istituto;
- una versione d'istituto può essere adottata per una coorte e non per un'altra;
- una versione nazionale IN 2012 deve restare consultabile finché esistono coorti per cui è applicabile o finché serve per la tracciabilità storica.

## 6. Registro minimo

Il registro deve poter rappresentare contemporaneamente:

| Versione | Tipo | Stato tipico durante la transizione |
|---|---|---|
| IN 2012 nazionale | nazionale | disponibile |
| IN 2025 nazionale | nazionale | disponibile |
| curricolo d'istituto vigente derivato da IN 2012 | istituto | adottata_istituto |
| curricolo d'istituto in adeguamento a IN 2025 | istituto | bozza / proposta_dipartimentale / validata_referente |
| curricolo d'istituto IN 2025 adottato | istituto | adottata_istituto |

La presenza di IN 2025 nel registro non implica che il curricolo d'istituto sia già adeguato.

## 7. Contratto di selezione in Consultazione

La Consultazione deve distinguere due selezioni:

### 7.1 Quadro applicabile

Deriva da:

```text
anno scolastico × ordine × classe × disciplina
```

ed è calcolato dal resolver temporale.

### 7.2 Versione mostrata

È la versione documentale effettivamente caricata nella vista.

La selezione della versione mostrata deve essere:

- esplicita;
- leggibile;
- reversibile;
- priva di effetti decisionali;
- separata dal calcolo di applicabilità.

## 8. Comportamento predefinito

Finché non esistono due dataset completi e verificati, CurManLight non deve simulare la commutazione fra IN 2012 e IN 2025.

Quando entrambe le versioni saranno disponibili, il comportamento raccomandato è:

1. calcolare il quadro applicabile;
2. proporre come selezione iniziale una versione compatibile, se disponibile;
3. mostrare sempre il nome della versione caricata;
4. consentire la consultazione della versione alternativa;
5. evidenziare quando la versione mostrata non coincide con il quadro applicabile;
6. non modificare automaticamente decisioni, filtri o stato istituzionale.

La preselezione iniziale è una comodità di consultazione, non una decisione normativa o istituzionale.

## 9. Stati UI obbligatori

### 9.1 Versione applicabile disponibile

```text
Quadro applicabile: Indicazioni nazionali 2025
Versione mostrata: Curricolo nazionale IN 2025
```

### 9.2 Versione alternativa mostrata

```text
Quadro applicabile: Indicazioni nazionali 2025
Versione mostrata: Curricolo nazionale IN 2012
Stai consultando una versione alternativa, mantenuta per confronto e continuità storica.
```

### 9.3 Versione applicabile non disponibile

```text
Quadro applicabile: Indicazioni nazionali 2025
Versione mostrata: Curricolo attualmente disponibile
La versione corrispondente al quadro applicabile non è ancora disponibile in forma completa e verificata.
```

### 9.4 Versione d'istituto non adottata

```text
Versione d'istituto in revisione
Questa versione non risulta ancora approvata o adottata dall'istituto.
```

### 9.5 Contesto incompleto

```text
Applicabilità da verificare
Completa anno scolastico, ordine e classe. Puoi comunque consultare le versioni disponibili senza attribuire loro automaticamente validità per la classe.
```

## 10. Regole per Revisione

La Revisione deve registrare sempre:

- `baseVersionId`;
- `targetVersionId` oppure il quadro di destinazione;
- unità e campo oggetto della proposta;
- stato della decisione locale;
- eventuale versione d'istituto risultante.

Una decisione B03 non cambia direttamente:

- `deliberationStatus`;
- `lifecycleStatus` della versione adottata;
- versione mostrata in Consultazione;
- quadro applicabile calcolato dal resolver.

## 11. Regole per Esportazione

Ogni esportazione deve includere almeno:

```json
{
  "applicabilityContext": {
    "academicYear": "2027/2028",
    "order": "Primaria",
    "classYear": 3,
    "discipline": "storia",
    "resolvedFramework": "IN_2025"
  },
  "displayedVersion": {
    "versionId": "nazionale:IN_2025:Primaria:storia:v1",
    "scope": "nazionale",
    "deliberationStatus": "non_applicabile"
  }
}
```

Se viene esportata una versione d'istituto, lo stato deliberativo deve essere esplicito.

## 12. Guardrail

CurManLight non deve:

- chiamare `vigente` una versione solo perché è visualizzata;
- chiamare `approvata` una versione priva di atto umano registrato;
- nascondere IN 2012 durante il periodo di coesistenza;
- presentare una bozza d'istituto come equivalente al quadro nazionale;
- creare automaticamente contenuti mancanti per completare una versione;
- applicare una proposta B03 al dataset curricolare senza una successiva operazione umana esplicita;
- confondere stato normativo, stato documentale e stato deliberativo.

## 13. Compatibilità con il repository attuale

Il dataset curricolare attuale resta una singola versione mostrata. Fino all'introduzione di un secondo dataset verificato deve essere registrato come contenuto disponibile, senza attribuirgli automaticamente una corrispondenza completa a IN 2012 o IN 2025 quando tale corrispondenza non è documentata.

Il banner CML-480 continua a mostrare il quadro applicabile. La futura UI di selezione deve aggiungere il registro versioni senza sostituire il resolver.

## 14. Sequenza di implementazione

```text
CML-482 — Version Registry Data Model and Validator
CML-483 — Register Current Curriculum Dataset without False Framework Claims
CML-484 — Consultation Version Selector and Mismatch States
CML-485 — Revision Version Provenance and Export Metadata
```

## 15. Criteri di accettazione per CML-481

- distinzione esplicita fra quadro applicabile e versione mostrata;
- distinzione fra versione nazionale e versione d'istituto;
- stato deliberativo separato dal ciclo di vita documentale;
- compatibilità con la coesistenza IN 2012/IN 2025;
- nessuna falsa attestazione sul dataset corrente;
- nessuna modifica ai contenuti curricolari;
- nessuna selezione automatica implementata in questa slice.
