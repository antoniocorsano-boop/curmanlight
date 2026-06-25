import fs from 'fs';
import path from 'path';

const REQUIRED_FIELDS = ['disciplina', 'unitaApprendimento'];
const UNIT_FIELDS = ['id', 'disciplina', 'ordine', 'classe', 'fascia', 'ambito', 'nucleo', 'competenza', 'traguardo', 'obiettivi', 'conoscenze', 'abilita', 'evidenze', 'criteriValutazione', 'fonte', 'stato', 'validazioneUmana', 'noteDipartimento'];

function warn(msg) {
  process.stderr.write('[WARN] ' + msg + '\n');
}

function error(msg) {
  process.stderr.write('[ERROR] ' + msg + '\n');
  process.exit(1);
}

function readJson(filePath) {
  if (!fs.existsSync(filePath)) {
    error('File non trovato: ' + filePath);
  }
  let raw;
  try {
    raw = fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    error('Impossibile leggere ' + filePath + ': ' + e.message);
  }
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    error('JSON non valido in ' + filePath + ': ' + e.message);
  }
  return data;
}

function validateInput(data, filePath) {
  for (const f of REQUIRED_FIELDS) {
    if (!Object.prototype.hasOwnProperty.call(data, f)) {
      error(filePath + ': campo "' + f + '" mancante');
    }
  }
  if (!Array.isArray(data.unitaApprendimento)) {
    error(filePath + ': unitaApprendimento non è un array');
  }
  if (data.unitaApprendimento.length === 0) {
    error(filePath + ': unitaApprendimento è vuoto — nessuna unità trasformabile');
  }
  for (let i = 0; i < data.unitaApprendimento.length; i++) {
    const u = data.unitaApprendimento[i];
    if (!u.id) warn('Unità #' + i + ' senza id');
    if (!u.ambito || u.ambito === '') warn('Unità ' + (u.id || '#' + i) + ': ambito mancante o vuoto');
    if (!u.nucleo || u.nucleo === '') warn('Unità ' + (u.id || '#' + i) + ': nucleo mancante o vuoto');
    if (u.ordine === 'Infanzia' && (!u.fascia || u.fascia === '')) warn('Unità ' + (u.id || '#' + i) + ' Infanzia: fascia mancante');
    if ((u.ordine === 'Primaria' || u.ordine === 'Secondaria') && (u.classe === null || u.classe === '')) warn('Unità ' + (u.id || '#' + i) + ' ' + u.ordine + ': classe mancante');
  }
}

function buildUnitaRef(u) {
  return {
    id: u.id,
    titolo: u.ambito,
    ordine: u.ordine,
    classe: u.classe || null,
    fascia: u.fascia || null,
    nucleo: u.nucleo || null
  };
}

function buildStruttureSostanziali(units) {
  const groups = {};
  for (const u of units) {
    const key = u.ambito;
    if (!key) continue;
    if (!groups[key]) {
      groups[key] = { nome: key, unita: [] };
    }
    groups[key].unita.push(buildUnitaRef(u));
  }
  const result = Object.values(groups);
  result.sort((a, b) => a.nome.localeCompare(b.nome));
  return result;
}

function buildNodiDisciplinari(units) {
  const groups = {};
  for (const u of units) {
    let key = u.nucleoFondante && u.nucleoFondante !== '' ? u.nucleoFondante : u.nucleo;
    if (!key || key === '') {
      warn('Unità ' + u.id + ': impossibile determinare nucleo — skip per nodiDisciplinari');
      continue;
    }
    if (!groups[key]) {
      groups[key] = { etichetta: key, unita: [] };
    }
    groups[key].unita.push(buildUnitaRef(u));
  }
  const result = Object.values(groups);
  result.sort((a, b) => a.etichetta.localeCompare(b.etichetta));
  return result;
}

function buildProgressioneVerticale(units) {
  const groups = {};
  for (const u of units) {
    const key = u.ordine + '|' + (u.classe || '') + '|' + (u.fascia || '');
    if (!groups[key]) {
      groups[key] = {
        ordine: u.ordine,
        classe: u.classe || null,
        fascia: u.fascia || null,
        unita: []
      };
    }
    groups[key].unita.push(buildUnitaRef(u));
  }
  const result = Object.values(groups);
  const orderRank = { 'Infanzia': 0, 'Primaria': 1, 'Secondaria': 2 };
  result.sort((a, b) => {
    const ra = orderRank[a.ordine] || 99;
    const rb = orderRank[b.ordine] || 99;
    if (ra !== rb) return ra - rb;
    const ca = a.classe ? parseInt(a.classe, 10) || 0 : 0;
    const cb = b.classe ? parseInt(b.classe, 10) || 0 : 0;
    if (ca !== cb) return ca - cb;
    const fa = a.fascia || '';
    const fb = b.fascia || '';
    return fa.localeCompare(fb);
  });
  return result;
}

function buildDecisioniCurricolari(data) {
  if (Array.isArray(data.decisioniCurricolari)) {
    return data.decisioniCurricolari;
  }
  return [];
}

function toMappaDati(data) {
  const units = data.unitaApprendimento || [];
  return {
    disciplina: data.disciplina,
    struttureSostanziali: buildStruttureSostanziali(units),
    nodiDisciplinari: buildNodiDisciplinari(units),
    progressioneVerticale: buildProgressioneVerticale(units),
    decisioniCurricolari: buildDecisioniCurricolari(data)
  };
}

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    error('Usage: node tools/json-to-mappa-dati-adapter.mjs <normalized.json>');
  }
  const filePath = path.resolve(args[0]);
  const data = readJson(filePath);
  validateInput(data, path.basename(filePath));
  const result = toMappaDati(data);
  process.stdout.write(JSON.stringify(result, null, 2) + '\n');
}

main();
