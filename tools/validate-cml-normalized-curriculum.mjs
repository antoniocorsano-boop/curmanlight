import fs from 'fs';
import path from 'path';

const FILE = path.join('content', 'curriculum', 'tecnologia.normalized.json');
const REQUIRED_FIELDS = [
  'id','disciplina','ordine','classe','fascia','ambito','competenza','traguardo',
  'obiettivi','conoscenze','abilita','evidenze','criteriValutazione','fonte',
  'stato','validazioneUmana','noteDipartimento'
];
const VALID_ORDERS = new Set(['Infanzia','Primaria','Secondaria']);
const VALID_STATES = new Set(['ok','modifica','nuovo','eliminato']);

let data;
try {
  data = JSON.parse(fs.readFileSync(FILE, 'utf8'));
} catch (e) {
  console.error(JSON.stringify({ valid: false, error: `Impossibile leggere ${FILE}: ${e.message}` }));
  process.exit(1);
}

const errors = [];
const warnings = [];
const missing = [];
const empty = [];

if (data.schemaVersion !== 'cml-normalized-curriculum-v1') {
  errors.push(`schemaVersion atteso "cml-normalized-curriculum-v1", trovato "${data.schemaVersion}"`);
}

if (data.disciplina !== 'Tecnologia') {
  errors.push(`disciplina attesa "Tecnologia", trovata "${data.disciplina}"`);
}

if (!Array.isArray(data.unitaApprendimento)) {
  errors.push('unitaApprendimento mancante o non array');
} else {
  const orders = new Set();
  const primariaClasses = new Set();
  const secondariaClasses = new Set();

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
    orders.add(unit.ordine);
    if (unit.ordine === 'Primaria') primariaClasses.add(unit.classe);
    if (unit.ordine === 'Secondaria') secondariaClasses.add(unit.classe);
    if (!VALID_ORDERS.has(unit.ordine)) warnings.push(`Ordine non standard: ${unit.ordine} in ${unit.id}`);
    if (unit.stato && !VALID_STATES.has(unit.stato)) warnings.push(`Stato non standard: ${unit.stato} in ${unit.id}`);
    if (unit.validazioneUmana !== true) {
      errors.push(`validazioneUmana non true in ${unit.id}`);
    }
  }

  // Copertura
  const requiredOrders = new Set(['Infanzia','Primaria','Secondaria']);
  for (const o of requiredOrders) {
    if (!orders.has(o)) errors.push(`Ordine mancante: ${o}`);
  }

  const requiredPri = ['1','2','3','4','5'];
  for (const c of requiredPri) {
    if (!primariaClasses.has(c)) errors.push(`Primaria classe ${c} mancante`);
  }

  const requiredSec = ['1','2','3'];
  for (const c of requiredSec) {
    if (!secondariaClasses.has(c)) errors.push(`Secondaria classe ${c} mancante`);
  }

  if (primariaClasses.size === 0) warnings.push('Nessuna unità primaria');
  if (secondariaClasses.size === 0) warnings.push('Nessuna unità secondaria');
}

const result = {
  totalUnits: Array.isArray(data.unitaApprendimento) ? data.unitaApprendimento.length : 0,
  ordersCovered: Array.from(new Set((data.unitaApprendimento || []).map(u => u.ordine))),
  classesCovered: Array.from(new Set((data.unitaApprendimento || []).map(u => u.classe).filter(Boolean))),
  missingRequiredFields: missing,
  emptyFields: empty,
  warnings,
  valid: errors.length === 0 && missing.length === 0
};

console.log(JSON.stringify(result, null, 2));
if (!result.valid) process.exit(1);
