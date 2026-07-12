import { readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..')
const readJson = async path => JSON.parse(await readFile(resolve(root, path), 'utf8'))

const [gap, mirroredGap, curriculum, sourceProposal] = await Promise.all([
  readJson('content/gap/tecnologia.gap.json'),
  readJson('curman-react/src/data/gap/tecnologia.gap.json'),
  readJson('content/curriculum/tecnologia.normalized.json'),
  readJson('docs/04_user/esempi_cml/esempio_proposta_docente_tecnologia.cml'),
])

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

assert(JSON.stringify(gap) === JSON.stringify(mirroredGap), 'Il pacchetto canonico e la copia React non coincidono')
assert(gap.schemaVersion === 'gap-v1', 'schemaVersion non valida')
assert(gap.disciplina === 'Tecnologia', 'disciplina non valida')
assert(gap.humanValidationRequired === true, 'validazione umana non obbligatoria')
assert(gap.entries.length === 1, 'Il pilot deve contenere una sola proposta')

const entry = gap.entries[0]
assert(entry.unitaId === 'tec_pri_1_001', 'Unità pilot inattesa')
assert(entry.targetField === 'traguardo', 'Il secondo pilot deve verificare il campo traguardo')
assert(entry.status === 'proposta', 'La proposta deve essere azionabile in B03')

const unit = curriculum.unitaApprendimento.find(item => item.id === entry.unitaId)
assert(unit, 'Unità tec_pri_1_001 non trovata nel curriculum')
assert(unit.traguardo === entry.testoOriginale, 'testoOriginale non coincide con il traguardo vigente')
assert(entry.proposto !== entry.testoOriginale, 'La proposta non introduce alcun delta')

const sourceIds = new Set(sourceProposal.proposals.map(item => item.id))
assert(sourceIds.has('te_pri1') && sourceIds.has('te_pri2'), 'Le proposte sorgente te_pri1 e te_pri2 non sono disponibili')
assert(entry.sourceRefs.some(ref => ref.includes('te_pri1') && ref.includes('te_pri2')), 'Riferimento alle proposte sorgente mancante')
assert(entry.note.includes('Obiettivi, conoscenze, abilità, evidenze e criteri di valutazione restano invariati'), 'Garanzia field-level incompleta')

console.log('CML-472 second verified Tecnologia traguardo pilot: PASS')
