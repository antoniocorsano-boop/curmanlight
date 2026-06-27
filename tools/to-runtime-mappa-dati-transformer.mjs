#!/usr/bin/env node
import { readFileSync } from 'fs';

function readStdin() {
  return new Promise((resolve, reject) => {
    let buf = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', chunk => buf += chunk);
    process.stdin.on('end', () => resolve(buf));
    process.stdin.on('error', reject);
  });
}

function buildDescrizione(unita) {
  const titoli = unita.map(u => u.titolo).filter(Boolean);
  const classi = [...new Set(unita.map(u => u.classe).filter(Boolean))];
  const fasce = [...new Set(unita.map(u => u.fascia).filter(Boolean))];
  let desc = `Raccoglie ${unita.length} unità di apprendimento`;
  if (titoli.length) {
    if (titoli.length <= 2) desc += `: ${titoli.join(', ')}`;
    else desc += `, tra cui "${titoli[0]}" e "${titoli[titoli.length - 1]}"`;
  }
  if (classi.length) desc += `. Classi coinvolte: ${classi.join(', ')}`;
  if (fasce.length) desc += `. Fasce: ${fasce.join(', ')}`;
  return desc;
}

function buildDescrizioneProgressione(unita) {
  const titoli = unita.map(u => u.titolo).filter(Boolean);
  let desc = `Raccoglie ${unita.length} unità`;
  if (titoli.length) {
    if (titoli.length <= 2) desc += `: ${titoli.join(', ')}`;
    else desc += `, tra cui "${titoli[0]}" e "${titoli[titoli.length - 1]}"`;
  }
  return desc;
}

function transformStruttureSostanziali(items) {
  return items.map(s => ({
    nome: s.nome,
    descrizione: buildDescrizione(s.unita || []),
    fonte: 'JSON curriculum strutturato'
  }));
}

function transformNodiDisciplinari(items) {
  return items.map(n => ({
    etichetta: n.etichetta,
    tipo: 'sostanziale',
    descrizione: buildDescrizione(n.unita || []),
    fonte: 'JSON curriculum strutturato'
  }));
}

function transformProgressioneVerticale(items) {
  return items.map(p => ({
    ordine: p.ordine,
    classe: p.classe || null,
    fascia: p.fascia || null,
    descrizioneProgressione: buildDescrizioneProgressione(p.unita || []),
    fonte: 'JSON curriculum strutturato'
  }));
}

function transformDecisioniCurricolari(items) {
  if (!items || !items.length) return [];
  return items;
}

function toRuntimeMappaDati(data) {
  const output = { disciplina: data.disciplina };
  if (data.struttureSostanziali) output.struttureSostanziali = transformStruttureSostanziali(data.struttureSostanziali);
  if (data.nodiDisciplinari) output.nodiDisciplinari = transformNodiDisciplinari(data.nodiDisciplinari);
  if (data.progressioneVerticale) output.progressioneVerticale = transformProgressioneVerticale(data.progressioneVerticale);
  if (data.decisioniCurricolari) output.decisioniCurricolari = transformDecisioniCurricolari(data.decisioniCurricolari);
  return output;
}

async function main() {
  const raw = await readStdin();
  const cleaned = raw.replace(/^\uFEFF/, '').trim();
  let data;
  try {
    data = JSON.parse(cleaned);
  } catch (e) {
    console.error('[WARNING] Input non è JSON valido:', e.message);
    process.exit(1);
  }
  if (!data.disciplina) {
    console.error('[WARNING] Input mancante del campo "disciplina"');
    process.exit(1);
  }
  const output = toRuntimeMappaDati(data);
  process.stdout.write(JSON.stringify(output, null, 2) + '\n');
}

main().catch(e => {
  console.error('[ERROR]', e.message);
  process.exit(1);
});
