#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const dir = path.join(process.cwd(), 'docs', '04_user', 'esempi_cml');
const files = [
  'proposta_ia_consapevole_tecnologia.cml',
  'proposta_economia_circolare_tecnologia_primaria.cml',
  'proposta_benessere_digitale_tecnologia_infanzia.cml',
  'proposta_prototipazione_tecnologia_secondaria.cml',
  'proposta_lettura_integrale_interpretazione_italiano.cml',
  'proposta_riassunto_riscrittura_italiano.cml',
  'proposta_corsivo_scrittura_manuale_italiano.cml',
  'proposta_grammatica_normativa_italiano.cml',
  'proposta_cittadinanza_digitale_verifica_fonti.cml',
  'proposta_sostenibilita_beni_comuni_educazione_civica.cml',
  'proposta_costituzione_partecipazione_educazione_civica.cml',
  'proposta_etica_tecnologica_educazione_civica.cml',
];
const errors = [];
let proposals = 0;
const fail = (file, message) => errors.push(`${file}: ${message}`);
const text = (value) => typeof value === 'string' && value.trim().length > 0;

for (const file of files) {
  let doc;
  try {
    doc = JSON.parse(await readFile(path.join(dir, file), 'utf8'));
  } catch (error) {
    fail(file, `file assente o JSON non valido: ${error.message}`);
    continue;
  }
  if (doc.schemaVersion !== '1.0') fail(file, 'schemaVersion non valido');
  if (doc.fileType !== 'teacher_proposal') fail(file, 'fileType non valido');
  if (doc.humanValidationRequired !== true) fail(file, 'validazione umana non obbligatoria');
  if (!Array.isArray(doc.proposals)) {
    fail(file, 'proposals non è un array');
    continue;
  }
  const counts = doc.counts;
  if (!counts || counts.total !== doc.proposals.length) fail(file, 'counts.total non coerente');
  const derived = { ok: 0, modifica: 0, nuovo: 0 };
  const ids = new Set();
  doc.proposals.forEach((item, index) => {
    proposals += 1;
    if (!text(item?.id)) fail(file, `proposals[${index}].id mancante`);
    if (!text(item?.unitaId)) fail(file, `proposals[${index}].unitaId mancante`);
    if (!Object.hasOwn(derived, item?.status)) fail(file, `proposals[${index}].status non valido`);
    else derived[item.status] += 1;
    if (item?.decisione !== null) fail(file, `proposals[${index}].decisione deve essere null`);
    if (item?.testoFinale !== null) fail(file, `proposals[${index}].testoFinale deve essere null`);
    if (text(item?.id) && ids.has(item.id)) fail(file, `proposals[${index}].id duplicato`);
    if (text(item?.id)) ids.add(item.id);
  });
  for (const key of Object.keys(derived)) {
    if (counts?.[key] !== derived[key]) fail(file, `counts.${key} non coerente`);
  }
}

if (errors.length) {
  console.error(`Managed CML pilot validation FAILED: ${errors.length} problema/i`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}
console.log(`Managed CML pilot validation PASS: ${files.length} file, ${proposals} proposte`);
