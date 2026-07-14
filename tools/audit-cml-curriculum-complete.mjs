import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const sourceDir = path.join(root, 'content', 'curriculum')
const outDir = path.join(root, 'report', 'CML-CURR-AUDIT-01')
fs.mkdirSync(outDir, { recursive: true })

const files = fs.readdirSync(sourceDir).filter(name => name.endsWith('.normalized.json')).sort()
const fields = ['ambito','competenza','traguardo','obiettivi','conoscenze','abilita','evidenze','criteriValutazione','fonte']
const arrayFields = new Set(['obiettivi','conoscenze','abilita','evidenze','criteriValutazione'])
const expected = { Infanzia: ['3-4','5'], Primaria: ['1','2','3','4','5'], Secondaria: ['1','2','3'] }

const nonEmpty = value => Array.isArray(value) ? value.some(item => String(item ?? '').trim()) : String(value ?? '').trim().length > 0
const keyFor = unit => unit.ordine === 'Infanzia' ? String(unit.fascia ?? '') : String(unit.classe ?? '')
const pct = (n, d) => d ? Number((n * 100 / d).toFixed(1)) : 0
const norm = value => String(value ?? '').trim().toLocaleLowerCase('it-IT').replace(/\s+/g, ' ')

const globalIds = new Map()
const globalTexts = new Map()
const disciplines = []
const globalIssues = []
let totalUnits = 0

for (const fileName of files) {
  const filePath = path.join(sourceDir, fileName)
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  const units = Array.isArray(data.unitaApprendimento) ? data.unitaApprendimento : []
  totalUnits += units.length
  const orders = {}
  const coverage = Object.fromEntries(fields.map(field => [field, 0]))
  const states = {}
  let validated = 0
  const issues = []
  const localIds = new Map()
  const localTexts = new Map()

  for (const unit of units) {
    const hasOrder = nonEmpty(unit.ordine)
    const order = hasOrder ? String(unit.ordine).trim() : 'SENZA_ORDINE'
    const level = keyFor(unit) || 'SENZA_CLASSE_FASCIA'
    if (!hasOrder) issues.push({ severity: 'P1', type: 'ordine_mancante', unitId: unit.id, order, level })
    orders[order] ??= { total: 0, levels: {}, nuclei: new Set(), ambiti: new Set() }
    orders[order].total++
    orders[order].levels[level] = (orders[order].levels[level] || 0) + 1
    if (nonEmpty(unit.nucleoFondante || unit.nucleo)) orders[order].nuclei.add(String(unit.nucleoFondante || unit.nucleo).trim())
    if (nonEmpty(unit.ambito)) orders[order].ambiti.add(String(unit.ambito).trim())

    for (const field of fields) if (nonEmpty(unit[field])) coverage[field]++
    states[unit.stato || 'SENZA_STATO'] = (states[unit.stato || 'SENZA_STATO'] || 0) + 1
    if (unit.validazioneUmana === true) validated++

    for (const field of fields) {
      if (!nonEmpty(unit[field])) {
        const optionalInfanzia = unit.ordine === 'Infanzia' && ['conoscenze','abilita','evidenze','criteriValutazione'].includes(field)
        issues.push({ severity: optionalInfanzia ? 'P3' : 'P1', type: 'campo_vuoto', unitId: unit.id, order, level, field })
      }
      if (arrayFields.has(field) && unit[field] !== undefined && !Array.isArray(unit[field])) {
        issues.push({ severity: 'P1', type: 'tipo_non_array', unitId: unit.id, order, level, field })
      }
    }

    if (!unit.id) issues.push({ severity: 'P0', type: 'id_mancante', order, level })
    const id = String(unit.id || '')
    if (id) {
      if (localIds.has(id)) issues.push({ severity: 'P0', type: 'id_duplicato_disciplina', unitId: id, other: localIds.get(id) })
      else localIds.set(id, `${order}/${level}`)
      if (globalIds.has(id)) globalIssues.push({ severity: 'P0', type: 'id_duplicato_globale', unitId: id, files: [globalIds.get(id), fileName] })
      else globalIds.set(id, fileName)
    }

    for (const field of ['competenza','traguardo']) {
      const text = norm(unit[field])
      if (!text) continue
      const textKey = `${field}:${text}`
      if (localTexts.has(textKey)) issues.push({ severity: 'P2', type: 'testo_duplicato', field, unitId: unit.id, other: localTexts.get(textKey) })
      else localTexts.set(textKey, unit.id)
      const globalKey = `${data.disciplina}:${textKey}`
      if (!globalTexts.has(globalKey)) globalTexts.set(globalKey, unit.id)
    }

    if (!nonEmpty(unit.fonte)) issues.push({ severity: 'P1', type: 'fonte_mancante', unitId: unit.id, order, level })
    if (unit.validazioneUmana !== true) issues.push({ severity: 'P2', type: 'non_validata', unitId: unit.id, order, level })
  }

  for (const [order, levels] of Object.entries(expected)) {
    const present = new Set(Object.keys(orders[order]?.levels || {}))
    if (present.size > 0) for (const level of levels) if (!present.has(level)) issues.push({ severity: 'P1', type: 'livello_mancante', order, level })
  }

  const normalizedOrders = Object.fromEntries(Object.entries(orders).map(([order, info]) => [order, {
    total: info.total,
    levels: info.levels,
    nuclei: [...info.nuclei].sort(),
    ambiti: [...info.ambiti].sort(),
  }]))

  disciplines.push({
    file: fileName,
    disciplina: data.disciplina,
    schemaVersion: data.schemaVersion,
    totalUnits: units.length,
    orders: normalizedOrders,
    coverage: Object.fromEntries(fields.map(field => [field, { present: coverage[field], total: units.length, percent: pct(coverage[field], units.length) }])),
    states,
    validated: { count: validated, total: units.length, percent: pct(validated, units.length) },
    issues,
    issueCounts: issues.reduce((acc, issue) => { acc[issue.severity] = (acc[issue.severity] || 0) + 1; return acc }, {}),
  })
}

const totals = {
  files: files.length,
  units: totalUnits,
  disciplines: disciplines.length,
  coverage: {},
  validation: {},
  issues: {},
}
for (const field of fields) {
  const present = disciplines.reduce((sum, d) => sum + d.coverage[field].present, 0)
  totals.coverage[field] = { present, total: totalUnits, percent: pct(present, totalUnits) }
}
const validatedCount = disciplines.reduce((sum, d) => sum + d.validated.count, 0)
totals.validation = { count: validatedCount, total: totalUnits, percent: pct(validatedCount, totalUnits) }
for (const issue of [...globalIssues, ...disciplines.flatMap(d => d.issues)]) totals.issues[issue.severity] = (totals.issues[issue.severity] || 0) + 1

const audit = {
  auditId: 'CML-CURR-AUDIT-01',
  generatedAt: new Date().toISOString(),
  source: 'content/curriculum/*.normalized.json',
  totals,
  globalIssues,
  disciplines,
  interpretation: {
    P0: 'errore bloccante di identità o struttura',
    P1: 'lacuna sostanziale su campo obbligatorio o copertura',
    P2: 'incoerenza, duplicazione o mancata validazione',
    P3: 'campo facoltativo o miglioramento documentale',
  },
}

fs.writeFileSync(path.join(outDir, 'audit-matrix.json'), JSON.stringify(audit, null, 2))

const lines = []
lines.push('# CML-CURR-AUDIT-01 — Audit documentale completo del curricolo', '')
lines.push(`Generato: ${audit.generatedAt}`, '')
lines.push('## Quadro complessivo', '')
lines.push(`- File disciplinari: **${totals.files}**`)
lines.push(`- Unità curricolari: **${totals.units}**`)
lines.push(`- Validazione umana: **${totals.validation.count}/${totals.validation.total} (${totals.validation.percent}%)**`)
lines.push(`- Rilievi P0: **${totals.issues.P0 || 0}**; P1: **${totals.issues.P1 || 0}**; P2: **${totals.issues.P2 || 0}**; P3: **${totals.issues.P3 || 0}**`, '')
lines.push('## Copertura globale dei campi', '')
lines.push('| Campo | Presenti | Totale | Copertura |', '|---|---:|---:|---:|')
for (const field of fields) { const c = totals.coverage[field]; lines.push(`| ${field} | ${c.present} | ${c.total} | ${c.percent}% |`) }
lines.push('', '## Matrice per disciplina', '')
lines.push('| Disciplina | Unità | Ordini | Validazione | P0 | P1 | P2 | P3 |', '|---|---:|---|---:|---:|---:|---:|---:|')
for (const d of disciplines) lines.push(`| ${d.disciplina} | ${d.totalUnits} | ${Object.keys(d.orders).join(', ')} | ${d.validated.percent}% | ${d.issueCounts.P0 || 0} | ${d.issueCounts.P1 || 0} | ${d.issueCounts.P2 || 0} | ${d.issueCounts.P3 || 0} |`)
lines.push('', '## Criteri', '', '- P0: identità o struttura bloccante.', '- P1: campo obbligatorio o copertura sostanziale mancante.', '- P2: incoerenza, duplicazione o validazione mancante.', '- P3: campo facoltativo o miglioramento documentale.', '')
lines.push('Il report non modifica né approva contenuti. Ogni correzione richiede una successiva validazione disciplinare umana.')
fs.writeFileSync(path.join(outDir, 'audit-summary.md'), lines.join('\n'))

console.log(JSON.stringify({ totals, output: outDir }, null, 2))
if ((totals.issues.P0 || 0) > 0) process.exitCode = 1
