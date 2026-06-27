import fs from 'fs';
import path from 'path';

const DIR = path.join('content', 'curriculum');
const FILES = fs.readdirSync(DIR)
  .filter(f => f.endsWith('.normalized.json'))
  .map(f => path.join(DIR, f))
  .sort();

const REQUIRED_FIELDS = [
  'id','disciplina','ordine','classe','fascia','ambito','competenza','traguardo',
  'obiettivi','conoscenze','abilita','evidenze','criteriValutazione','fonte',
  'stato','validazioneUmana','noteDipartimento'
];
const VALID_ORDERS = new Set(['Infanzia','Primaria','Secondaria']);
const VALID_STATES = new Set(['ok','modifica','nuovo','eliminato']);

let totalFiles = 0;
let totalUnits = 0;
const results = [];

for (const file of FILES) {
  totalFiles++;
  let data;
  try {
    data = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    results.push({ file, valid: false, error: `Impossibile leggere ${file}: ${e.message}` });
    continue;
  }

  const errors = [];
  const warnings = [];
  const missing = [];
  const empty = [];
  const orders = new Set();
  const primariaClasses = new Set();
  const secondariaClasses = new Set();

  if (data.schemaVersion !== 'cml-normalized-curriculum-v1') {
    errors.push(`schemaVersion atteso "cml-normalized-curriculum-v1", trovato "${data.schemaVersion}"`);
  }

  if (!data.disciplina || typeof data.disciplina !== 'string') {
    errors.push(`disciplina mancante o non valida in ${file}`);
  }

  const hasNucleo = data.nucleo !== undefined;
  const hasNucleoFondante = data.nucleoFondante !== undefined;
  if (hasNucleo && !hasNucleoFondante) {
    warnings.push(`Campo "nucleo" presente ma "nucleoFondante" assente (retrocompatibile)`);
  }
  if (!hasNucleo && hasNucleoFondante) {
    warnings.push(`Campo "nucleoFondante" presente ma "nucleo" assente (retrocompatibile)`);
  }
  if (hasNucleo && hasNucleoFondante) {
    warnings.push(`Entrambi i campi "nucleo" e "nucleoFondante" presenti — uniformare in futuro`);
  }

  if (!Array.isArray(data.unitaApprendimento)) {
    errors.push('unitaApprendimento mancante o non array');
  } else {
    for (const unit of data.unitaApprendimento) {
      const unitMissing = REQUIRED_FIELDS.filter(f => !Object.prototype.hasOwnProperty.call(unit, f));
      if (unitMissing.length > 0) missing.push({ id: unit.id || 'SENZA_ID', missing: unitMissing });

      for (const f of REQUIRED_FIELDS) {
        const v = unit[f];
        if (v === undefined || v === null || v === '') {
          if (f !== 'classe' || unit.ordine !== 'Infanzia') {
            if (f !== 'fascia' || unit.ordine === 'Infanzia') {
              empty.push({ id: unit.id || 'SENZA_ID', field: f });
            }
          }
        }
      }

      const hasNucleo = Object.prototype.hasOwnProperty.call(unit, 'nucleo');
      const hasNucleoFondante = Object.prototype.hasOwnProperty.call(unit, 'nucleoFondante');
      if (hasNucleo && !hasNucleoFondante) {
        warnings.push({ id: unit.id || 'SENZA_ID', msg: `Campo "nucleo" presente ma "nucleoFondante" assente (retrocompatibile)` });
      }
      if (!hasNucleo && hasNucleoFondante) {
        warnings.push({ id: unit.id || 'SENZA_ID', msg: `Campo "nucleoFondante" presente ma "nucleo" assente (retrocompatibile)` });
      }
      if (hasNucleo && hasNucleoFondante) {
        warnings.push({ id: unit.id || 'SENZA_ID', msg: `Entrambi i campi "nucleo" e "nucleoFondante" presenti — uniformare in futuro` });
      }

      orders.add(unit.ordine);
      if (unit.ordine === 'Primaria') primariaClasses.add(unit.classe);
      if (unit.ordine === 'Secondaria') secondariaClasses.add(unit.classe);
      if (!VALID_ORDERS.has(unit.ordine)) warnings.push({ id: unit.id || 'SENZA_ID', msg: `Ordine non standard: ${unit.ordine}` });
      if (unit.stato && !VALID_STATES.has(unit.stato)) warnings.push({ id: unit.id || 'SENZA_ID', msg: `Stato non standard: ${unit.stato}` });
      if (unit.validazioneUmana !== true) {
        errors.push(`validazioneUmana non true in ${unit.id}`);
      }
    }

    const requiredOrders = new Set(['Infanzia','Primaria','Secondaria']);
    for (const o of requiredOrders) {
      if (!orders.has(o)) warnings.push({ id: 'FILE', msg: `Ordine mancante: ${o}` });
    }

    const requiredPri = ['1','2','3','4','5'];
    if (primariaClasses.size > 0) {
      for (const c of requiredPri) {
        if (!primariaClasses.has(c)) warnings.push({ id: 'FILE', msg: `Primaria classe ${c} mancante` });
      }
    }

    const requiredSec = ['1','2','3'];
    if (secondariaClasses.size > 0) {
      for (const c of requiredSec) {
        if (!secondariaClasses.has(c)) warnings.push({ id: 'FILE', msg: `Secondaria classe ${c} mancante` });
      }
    }

    if (primariaClasses.size === 0) warnings.push({ id: 'FILE', msg: 'Nessuna unità primaria' });
    if (secondariaClasses.size === 0) warnings.push({ id: 'FILE', msg: 'Nessuna unità secondaria' });
  }

  totalUnits += Array.isArray(data.unitaApprendimento) ? data.unitaApprendimento.length : 0;

  results.push({
    file: path.basename(file),
    disciplina: data.disciplina || 'SENZA_NOME',
    valid: errors.length === 0 && missing.length === 0,
    totalUnits: Array.isArray(data.unitaApprendimento) ? data.unitaApprendimento.length : 0,
    ordersCovered: Array.from(orders),
    primariaClasses: Array.from(primariaClasses).sort(),
    secondariaClasses: Array.from(secondariaClasses).sort(),
    missingRequiredFields: missing,
    emptyFields: empty,
    warnings,
    errors
  });
}

const invalidCount = results.filter(r => !r.valid).length;
const overallValid = invalidCount === 0;

const summary = {
  totalFiles,
  totalUnits,
  overallValid,
  invalidCount,
  results
};

console.log(JSON.stringify(summary, null, 2));
if (!overallValid) process.exit(1);
