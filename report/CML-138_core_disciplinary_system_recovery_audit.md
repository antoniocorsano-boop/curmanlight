# CML-138 — Core Disciplinary System Recovery Audit

## Fotografia Git iniziale

- **Branch:** `main`
- **HEAD / origin/main:** `37152be` (allineato)
- **Working tree:** pulito ✅
- **Commit locali aggiuntivi:** nessuno ✅
- **Validatore:** 7 file, 94 unità, `overallValid: true` ✅
- **Residui ignorati:** `.agents`, `skills-lock.json`, `Consultazione` ✅

## File disciplinari trovati

7 file JSON in `content/curriculum/*.normalized.json`:

- Tecnologia (13u), Italiano (14u), Matematica (13u), Scienze (15u), Storia (15u), Geografia (12u), Inglese (12u)
- Tutti validi, tutti **non consumati dal runtime** per il rendering utente.

## Fonte dati reale della mappa disciplinare

| Componente            | Fonte                                      | Discipline | Stato                       |
| --------------------- | ------------------------------------------ | ---------- | --------------------------- |
| Mappa disciplinare    | Hardcoded `*_MAPPA_DATI` (linee 2039-2043) | 3/7        | ❌ Disallineato dai JSON    |
| Pacchetto strutturato | `TECNOLOGIA_NORM` (linea 4621)             | 1/7        | ❌ Solo Tecnologia          |
| Curriculum editing    | `DATA` inline + localStorage               | 11 (UI)    | ⚠️ Formato diverso dai JSON |
| Selettore discipline  | `DISCIPLINE_META`                          | 11         | ✅ Coerente                 |

## Stato discipline

- **Tecnologia:** Completa (pilota) — ha JSON, mappa, NORM
- **Italiano:** Mappa hardcoded, no NORM
- **Matematica:** Mappa hardcoded, no NORM, gap classi 2-4
- **Scienze, Storia, Geografia, Inglese:** Solo JSON validati — non usati dal runtime per mappa o vista strutturata

## Disallineamenti principali

1. **JSON vs runtime:** 7 file JSON validati ma ignorati dal rendering
2. **Mappa hardcoded:** 3 oggetti JS duplicano dati già presenti nei JSON
3. **Solo 1/7 discipline** ha vista strutturata nel runtime (Tecnologia)
4. **Matematica:** gap contenutistico (classi 2-4 Primaria)
5. **Campo legacy:** 6/7 discipline usano `nucleo` anziché `nucleoFondante`

## Opzione selezionata

**Opzione B — Selezione fonte dati canonica:** agganciare il runtime ai JSON disciplinari validati, abbandonando i dati hardcoded.

## Perimetro raccomandato CML-139

- Audit layer dati: mappatura campi JSON ↔ campi runtime
- Progettazione bridge dati
- Estensione vista strutturata a 1 disciplina non-pilota

## Commit

File: `docs/03_execution/CML-138.md`, `report/CML-138_core_disciplinary_system_recovery_audit.md`, `docs/REPO-MOVELOG.md`

## Verdetto

`CML_138_CORE_DISCIPLINARY_SYSTEM_RECOVERY_AUDIT_READY`
