#!/usr/bin/env node
import { readFileSync } from 'fs';
import { execSync } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TOOLS_DIR = resolve(__dirname);
const CURRICULUM_DIR = resolve(TOOLS_DIR, '..', 'content', 'curriculum');

const FILES = [
  'tecnologia.normalized.json',
  'italiano.normalized.json',
  'matematica.normalized.json',
  'scienze.normalized.json',
  'storia.normalized.json',
  'geografia.normalized.json',
  'inglese.normalized.json',
  'educazione-civica.normalized.json',
  'educazione-fisica.normalized.json',
  'arte-immagine.normalized.json',
  'musica.normalized.json',
  'seconda-lingua-comunitaria.normalized.json',
  'religione-cattolica.normalized.json',
  'latino-lel.normalized.json'
];

const EXPECTED_COUNTS = {
  'educazione-fisica.normalized.json': { s: 7, n: 4, p: 7, d: 0 },
  'musica.normalized.json': { s: 7, n: 3, p: 7, d: 0 }
};

function check(condition, label, errors) {
  if (!condition) errors.push(label);
}

function normalizeJsonText(raw, label) {
  if (raw.includes('\u0000')) {
    throw new Error(`${label}: byte nulli rilevati nell'output JSON (possibile UTF-16 o encoding non valido)`);
  }
  return raw.replace(/^\uFEFF/, '').trim();
}
function testPipeline(filepath) {
  const adapterPath = resolve(TOOLS_DIR, 'json-to-mappa-dati-adapter.mjs');
  const transformerPath = resolve(TOOLS_DIR, 'to-runtime-mappa-dati-transformer.mjs');
  const cmd = `node "${adapterPath}" "${filepath}" | node "${transformerPath}"`;
  const raw = execSync(cmd, { encoding: 'utf8', shell: 'powershell', maxBuffer: 10 * 1024 * 1024 });
  const data = JSON.parse(normalizeJsonText(raw, filepath));
  const errors = [];
  const discipline = data.disciplina || 'unknown';

  check(data.disciplina, 'disciplina mancante', errors);

  const s = data.struttureSostanziali || [];
  check(s.length > 0, 'struttureSostanziali vuoto', errors);
  for (let i = 0; i < s.length; i++) {
    check(s[i].nome, `struttureSostanziali[${i}].nome mancante`, errors);
    check(s[i].descrizione, `struttureSostanziali[${i}].descrizione mancante`, errors);
    check(s[i].fonte, `struttureSostanziali[${i}].fonte mancante`, errors);
  }

  const n = data.nodiDisciplinari || [];
  check(n.length > 0, 'nodiDisciplinari vuoto', errors);
  for (let i = 0; i < n.length; i++) {
    check(n[i].etichetta, `nodiDisciplinari[${i}].etichetta mancante`, errors);
    check(n[i].tipo, `nodiDisciplinari[${i}].tipo mancante`, errors);
    check(n[i].descrizione, `nodiDisciplinari[${i}].descrizione mancante`, errors);
    check(n[i].fonte, `nodiDisciplinari[${i}].fonte mancante`, errors);
  }

  const p = data.progressioneVerticale || [];
  check(p.length > 0, 'progressioneVerticale vuoto', errors);
  for (let i = 0; i < p.length; i++) {
    check(p[i].ordine, `progressioneVerticale[${i}].ordine mancante`, errors);
    check(p[i].fascia || p[i].classe, `progressioneVerticale[${i}]: almeno uno tra fascia e classe richiesto`, errors);
    check(p[i].descrizioneProgressione, `progressioneVerticale[${i}].descrizioneProgressione mancante`, errors);
    check(p[i].fonte, `progressioneVerticale[${i}].fonte mancante`, errors);
  }

  const d = data.decisioniCurricolari || [];
  check(Array.isArray(data.decisioniCurricolari), 'decisioniCurricolari non è array', errors);
  for (let i = 0; i < d.length; i++) {
    check(d[i].tipo, `decisioniCurricolari[${i}].tipo mancante`, errors);
    check(d[i].motivazione, `decisioniCurricolari[${i}].motivazione mancante`, errors);
    check(d[i].fonte, `decisioniCurricolari[${i}].fonte mancante`, errors);
  }

  const expected = EXPECTED_COUNTS[filepath.split(/[\\/]/).pop()];
  if (expected) {
    check(s.length === expected.s, `struttureSostanziali attese ${expected.s}, trovate ${s.length}`, errors);
    check(n.length === expected.n, `nodiDisciplinari attesi ${expected.n}, trovati ${n.length}`, errors);
    check(p.length === expected.p, `progressioneVerticale attesa ${expected.p}, trovata ${p.length}`, errors);
    check(d.length === expected.d, `decisioniCurricolari attese ${expected.d}, trovate ${d.length}`, errors);
  }
  return { discipline, errors, counts: `S=${s.length} N=${n.length} P=${p.length} D=${d.length}` };
}

function main() {
  console.log('Runtime MAPPA_DATI shape test\n');
  let totalErrors = 0;
  let totalPass = 0;
  let totalFail = 0;

  for (const f of FILES) {
    const filepath = resolve(CURRICULUM_DIR, f);
    try {
      const result = testPipeline(filepath);
      if (result.errors.length === 0) {
        console.log(`${result.discipline}: PASS — ${result.counts}`);
        totalPass++;
      } else {
        console.log(`${result.discipline}: FAIL`);
        for (const err of result.errors) {
          console.log(`  - ${err}`);
        }
        totalFail++;
        totalErrors += result.errors.length;
      }
    } catch (e) {
      console.log(`${f}: ERROR — ${e.message}`);
      totalFail++;
    }
  }

  console.log(`\noverall: ${totalFail > 0 ? 'FAIL' : 'PASS'}`);
  console.log(`disciplines: ${totalPass} passed, ${totalFail} failed`);
  if (totalErrors > 0) console.log(`field errors: ${totalErrors}`);
  process.exit(totalFail > 0 ? 1 : 0);
}

main();
