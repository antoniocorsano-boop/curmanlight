# External Provider Readiness and Discipline Data Access Audit

## Scope

Audit dei pattern di accesso ai dati disciplinari e valutazione della maturità delle integrazioni con provider esterni (Drive, AI, Second Brain/Obsidian) nel runtime CurManLight.

**Slice**: CML-369 (docs-only audit)  
**Base**: `main` @ `f9f836d`  
**Branch**: `codex/cml-369-external-provider-readiness-audit`

---

## 1. Discipline Data Access Patterns

### 1.1 Pattern attuali

| Pattern | Descrizione | Funzioni coinvolte |
|---|---|---|
| `ALL_CURRICULUM_DATA[discKey]` | Oggetto inline con tutte le 14 discipline, accesso per chiave | `getDisciplineEvidenceData()`, `getAnnualDraftUnitsFor()`, `renderTecnologiaNorm()` |
| `TECNOLOGIA_NORM_DATA` | Alias di `TECNOLOGIA_NORM`, costante inline solo Tecnologia (16 unità) | `getDisciplineEvidenceData()`, `getAnnualDraftUnitsFor()`, `renderTecnologiaNorm()` |
| `discKey === 'tecnologia'` guard | Branch esplicito prima del fallback su `ALL_CURRICULUM_DATA` | `getDisciplineEvidenceData()` (L2962), `getAnnualDraftUnitsFor()` (L3085), `renderTecnologiaNorm()` (L6362) |

### 1.2 Duplicazione Tecnologia (P1)

`TECNOLOGIA_NORM` è una costante inline (~L6202, ~3500 righe di JSON) contenente tutte le 16 unità di Tecnologia. Tecnologia è presente anche dentro `ALL_CURRICULUM_DATA.tecnologia` con dati identici.

**Impatto**: ~3.5 KB di byte duplicati nel payload HTML, fragilità di manutenzione (due punti da aggiornare per ogni modifica a Tecnologia).

### 1.3 Funzioni che accedono ai dati disciplinari

| Funzione | Linea | Pattern usato | Ordini gestiti |
|---|---|---|---|
| `getDisciplineEvidenceData()` | 2960 | Tecnologia guard → ALL_CURRICULUM_DATA | Infanzia, Primaria, Secondaria |
| `getAnnualDraftUnitsFor()` | 3085 | Tecnologia guard → ALL_CURRICULUM_DATA | Infanzia, Primaria, Secondaria |
| `renderTecnologiaNorm()` | 6358 | Tecnologia guard → ALL_CURRICULUM_DATA | Infanzia, Primaria, Secondaria |

Tutte e tre seguono lo stesso schema: (a) branch speciale per Tecnologia, (b) fallback su `ALL_CURRICULUM_DATA[discKey]`.

---

## 2. Drive Hook Analysis

### 2.1 Architettura

```
localStorage.getItem('curmanlight.driveUploadEndpoint')
         ↓
validateDriveEndpoint(endpoint)
         ↓
isAllowedHost(hostname, ALLOWED_ENDPOINT_HOSTS)
         ↓
fetch(endpoint, { method: 'POST', body: JSON.stringify(payload) })
```

### 2.2 Security posture

| Layer | Protezione | Dettaglio |
|---|---|---|
| Protocollo | ✅ Solo HTTPS | Blocca `http:`, `javascript:`, `data:`, `file:` |
| Credenziali | ✅ Blocco username:password | `url.username`/`url.password` check |
| Host whitelist | ✅ `['drive.google.com', 'docs.google.com']` | Subdomain matching via `endsWith('.host')` |
| Private network | ✅ Blocco IP privati | localhost, 127.x, 192.168.x, 10.x, 172.16-31.x |
| Fallback UX | ✅ Toast informativo | Invito a download manuale se endpoint non configurato o non valido |
| Payload | ✅ JSON strutturato | `buildTeacherCmlModel()` produce modello validato |

### 2.2 Gap

| Gap | Severità | Dettaglio |
|---|---|---|
| Nessuna UI di configurazione | Media | Endpoint impostabile solo via `localStorage` da dev tools |
| Whitelist fissa (2 host) | Bassa | Non estensibile senza modifica codice |
| Nessun retry/backoff | Bassa | Unico tentativo, errore → fallback manuale |
| Nessuna autenticazione | Media | L'endpoint deve gestire auth lato server; nessun token inviato |

### 2.3 Payload `.cml` docente

```
{
  schemaVersion: "1.0",
  fileType: "teacher_proposal",
  role: "teacher",
  discipline: string,
  sourceContext: { currentFramework, revisionFramework },
  counts: { total, ok, modifica, nuovo },
  proposals: [{ id, discipline, ordine, classe, type, status, decisione, testoAttuale, proposta, motivazione, fonte }],
  humanValidationRequired: true
}
```

---

## 3. Export Functions Census

| # | Funzione | Linea | Formato | Descrizione |
|---|---|---|---|---|
| 1 | `exportMarkdown()` | 4646 | .md | Full curriculum markdown |
| 2 | `exportTeacherCml()` | 4773 | .cml | Singola proposta docente |
| 3 | `exportDepartmentOutcomeCml()` | 5103 | .cml | Esito dipartimento |
| 4 | `exportWord()` | 5116 | .docx | Documento Word |
| 5 | `exportPDF()` | 5279 | .pdf | Documento PDF |
| 6 | `exportLocalBackup()` | 3631 | JSON | Backup completo locale |
| 7 | `buildAnnualPlanningMarkdown()` | 3094 | .md | Bozza programmazione annuale |
| 8 | `downloadUdaMarkdown()` | 3496 | .md | UDA markdown |
| 9 | `downloadUdaSmartMarkdown()` | 3143 | .md | UDA Smart markdown |
| 10 | `downloadDiscMarkdown()` | 4710 | .md | Singola disciplina |
| 11 | `downloadReferentGroupWorkReport()` | 6188 | .md | Report gruppo referente |
| 12 | `buildTeacherCmlModel()` | 4718 | (data) | Modello dati .cml |
| 13 | `copyMarkdownToClipboard()` | 4670 | — | Clipboard |

Nessuna delle funzioni export condivide un'interfaccia comune o un contratto astratto.

---

## 4. Classification Matrix

| Rilievo | Priorità | Impatto | Urgenza | Sforzo stimato |
|---|---|---|---|---|
| **R1** — Duplicazione Tecnologia | P1 | Medio (byte, fragilità) | Media (prossima slice) | Piccolo (centralizzazione) |
| **R2** — Hook Drive senza UI | P2 | Basso (solo dev tool) | Bassa | Medio (UI + contratto) |
| **R3** — Provider senza contratto | P2/P3 | Medio (blocco evolutivo) | Bassa | Alto (design contract) |
| **R4** — Second Brain/Obsidian | — | — | — | Già pronto (export-only) |
| **R5** — AI provider | HOLD | Alto (privacy) | Nulla | Policy necessaria prima |

---

## 5. Raccomandazioni

### Immediata (CML-370 raccomandata)
Definire un **contratto centralizzato di accesso ai dati disciplinari**:
- Interfaccia unica `getUnitsForDiscipline(discKey)` che elimini i branch speciali
- Eliminazione della duplicazione `TECNOLOGIA_NORM` / `ALL_CURRICULUM_DATA.tecnologia`
- Singolo punto di validazione e trasformazione

### Breve termine
- Contratto provider astratto (configurazione, autenticazione, error handling, retry)
- Documentazione utente per export Second Brain / Obsidian (già sicuro)

### Medio termine
- UI di configurazione endpoint Drive (dopo contratto provider)
- Policy istituzionale per AI provider

### Non fare
- Implementare AI provider prima di policy e contratto
- Modificare runtime senza contratto dati centralizzato

---

## 6. Dettaglio tecnico: localizzazione pattern Tecnologia

### `getDisciplineEvidenceData()` — L2960-L2968
```javascript
if (discKey === 'tecnologia' && typeof TECNOLOGIA_NORM_DATA !== 'undefined') {
  return TECNOLOGIA_NORM_DATA.unitaApprendimento || [];
}
if (typeof ALL_CURRICULUM_DATA !== 'undefined' && ALL_CURRICULUM_DATA[discKey]) {
  return ALL_CURRICULUM_DATA[discKey].unitaApprendimento || [];
}
return [];
```

### `getAnnualDraftUnitsFor()` — L3085
```javascript
if(discKey==="tecnologia"&&typeof TECNOLOGIA_NORM_DATA!=="undefined")
  return TECNOLOGIA_NORM_DATA.unitaApprendimento||[];
if(typeof ALL_CURRICULUM_DATA!=="undefined"&&ALL_CURRICULUM_DATA[discKey])
  return ALL_CURRICULUM_DATA[discKey].unitaApprendimento||[];
return [];
```

### `renderTecnologiaNorm()` — L6362-L6364
```javascript
const units = discKey === 'tecnologia'
  ? ((typeof TECNOLOGIA_NORM_DATA !== 'undefined' && TECNOLOGIA_NORM_DATA.unitaApprendimento) || [])
  : ((discKey && typeof ALL_CURRICULUM_DATA !== 'undefined' && ALL_CURRICULUM_DATA[discKey]
      && ALL_CURRICULUM_DATA[discKey].unitaApprendimento) || []);
```

### Costanti dati — L6202-L6204
```javascript
const TECNOLOGIA_NORM = {"schemaVersion":"cml-normalized-curriculum-v1",...};  // ~3.5 KB
const TECNOLOGIA_NORM_DATA = TECNOLOGIA_NORM;
```

`ALL_CURRICULUM_DATA` è definito inline con tutte le 14 discipline, inclusa Tecnologia.

---

## 7. Verdict

`CML_369_EXTERNAL_PROVIDER_READINESS_AND_DISCIPLINE_DATA_ACCESS_AUDIT_READY_LOCAL_NOT_PUSHED`
