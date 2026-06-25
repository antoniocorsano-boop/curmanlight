#!/usr/bin/env node
import { spawnSync } from 'child_process';
import { existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ADAPTER = resolve(__dirname, 'json-to-mappa-dati-adapter.mjs');
const TRANSFORMER = resolve(__dirname, 'to-runtime-mappa-dati-transformer.mjs');

function parseArgs() {
  const args = process.argv.slice(2);
  let constName = null;
  let jsonPath = null;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--const') {
      constName = args[++i];
      if (!constName) {
        process.stderr.write('[ERROR] --const richiede un nome\n');
        process.exit(1);
      }
    } else {
      jsonPath = args[i];
    }
  }
  if (!jsonPath) {
    process.stderr.write('Uso: node tools/generate-static-mappa-dati.mjs <json-path> [--const NOME]\n');
    process.exit(1);
  }
  return { jsonPath, constName };
}

function inferConstName(disciplina) {
  const map = {
    'Tecnologia': 'TECNOLOGIA_MAPPA_DATI',
    'Matematica': 'MATEMATICA_MAPPA_DATI',
    'Italiano': 'ITALIANO_MAPPA_DATI',
  };
  return map[disciplina] || (disciplina.toUpperCase().replace(/\s+/g, '_') + '_MAPPA_DATI');
}

function stripNulls(obj) {
  if (Array.isArray(obj)) return obj.map(stripNulls);
  if (obj && typeof obj === 'object') {
    const cleaned = {};
    for (const [k, v] of Object.entries(obj)) {
      if (v !== null) cleaned[k] = stripNulls(v);
    }
    return cleaned;
  }
  return obj;
}

function run() {
  const { jsonPath, constName } = parseArgs();

  const absPath = resolve(jsonPath);
  if (!existsSync(absPath)) {
    process.stderr.write(`[ERROR] File non trovato: ${absPath}\n`);
    process.exit(1);
  }

  const adapter = spawnSync('node', [ADAPTER, absPath], { stdio: ['pipe', 'pipe', 'inherit'], encoding: 'utf8' });
  if (adapter.status !== 0) {
    process.stderr.write('[ERROR] Adapter fallito\n');
    process.exit(adapter.status);
  }

  const transformer = spawnSync('node', [TRANSFORMER], {
    input: adapter.stdout,
    stdio: ['pipe', 'pipe', 'inherit'],
    encoding: 'utf8'
  });
  if (transformer.status !== 0) {
    process.stderr.write('[ERROR] Transformer fallito\n');
    process.exit(transformer.status);
  }

  let data;
  try {
    data = JSON.parse(transformer.stdout.replace(/^\uFEFF/, '').trim());
  } catch (e) {
    process.stderr.write(`[ERROR] Output transformer non è JSON valido: ${e.message}\n`);
    process.exit(1);
  }

  const name = constName || inferConstName(data.disciplina);
  const cleaned = stripNulls(data);
  const json = JSON.stringify(cleaned, null, 2);
  process.stdout.write(`const ${name} = ${json};\n`, 'utf8');
}

run();