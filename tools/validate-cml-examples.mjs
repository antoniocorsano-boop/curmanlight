#!/usr/bin/env node

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const examplesDir = path.join(root, 'docs', '04_user', 'esempi_cml');

const failures = [];
let checkedFiles = 0;
let checkedTeacherFiles = 0;
let checkedProposals = 0;

function fail(file, message) {
  failures.push(`${file}: ${message}`);
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function validateCounts(file, doc) {
  const counts = doc.counts;
  if (!counts || typeof counts !== 'object') {
    fail(file, 'counts mancante o non valido');
    return;
  }

  for (const key of ['total', 'ok', 'modifica', 'nuovo']) {
    if (!Number.isInteger(counts[key]) || counts[key] < 0) {
      fail(file, `counts.${key} deve essere un intero non negativo`);
    }
  }

  if (Array.isArray(doc.proposals) && counts.total !== doc.proposals.length) {
    fail(file, `counts.total (${counts.total}) non coincide con proposals.length (${doc.proposals.length})`);
  }

  if (Array.isArray(doc.proposals)) {
    const derived = { ok: 0, modifica: 0, nuovo: 0 };
    for (const proposal of doc.proposals) {
      if (Object.hasOwn(derived, proposal?.status)) derived[proposal.status] += 1;
    }
    for (const key of Object.keys(derived)) {
      if (counts[key] !== derived[key]) {
        fail(file, `counts.${key} (${counts[key]}) non coincide con il totale derivato (${derived[key]})`);
      }
    }
  }
}

function validateProposal(file, proposal, index, ids) {
  const prefix = `proposals[${index}]`;
  checkedProposals += 1;

  if (!proposal || typeof proposal !== 'object') {
    fail(file, `${prefix} non è un oggetto`);
    return;
  }

  if (!isNonEmptyString(proposal.id)) fail(file, `${prefix}.id mancante`);
  if (!isNonEmptyString(proposal.unitaId)) fail(file, `${prefix}.unitaId mancante`);
  if (!['ok', 'modifica', 'nuovo'].includes(proposal.status)) {
    fail(file, `${prefix}.status non ammesso: ${String(proposal.status)}`);
  }
  if (proposal.decisione !== null) fail(file, `${prefix}.decisione deve essere null`);
  if (proposal.testoFinale !== null) fail(file, `${prefix}.testoFinale deve essere null`);

  if (isNonEmptyString(proposal.id)) {
    if (ids.has(proposal.id)) fail(file, `${prefix}.id duplicato: ${proposal.id}`);
    ids.add(proposal.id);
  }
}

async function main() {
  const entries = await readdir(examplesDir, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.cml'))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, 'it'));

  if (files.length === 0) {
    throw new Error(`Nessun file .cml trovato in ${examplesDir}`);
  }

  for (const file of files) {
    checkedFiles += 1;
    const absolutePath = path.join(examplesDir, file);
    let doc;

    try {
      doc = JSON.parse(await readFile(absolutePath, 'utf8'));
    } catch (error) {
      fail(file, `JSON non valido: ${error.message}`);
      continue;
    }

    if (!isNonEmptyString(doc.fileType)) {
      fail(file, 'fileType mancante');
      continue;
    }

    if (doc.fileType !== 'teacher_proposal') continue;
    checkedTeacherFiles += 1;

    if (doc.schemaVersion !== '1.0') fail(file, 'schemaVersion deve essere "1.0"');
    if (doc.humanValidationRequired !== true) fail(file, 'humanValidationRequired deve essere true');
    if (!Array.isArray(doc.proposals)) {
      fail(file, 'proposals deve essere un array');
      continue;
    }

    validateCounts(file, doc);
    const ids = new Set();
    doc.proposals.forEach((proposal, index) => validateProposal(file, proposal, index, ids));
  }

  if (checkedTeacherFiles === 0) {
    fail('libreria', 'nessun teacher_proposal trovato');
  }

  if (failures.length > 0) {
    console.error(`CML example validation FAILED: ${failures.length} problema/i`);
    for (const failure of failures) console.error(`- ${failure}`);
    process.exitCode = 1;
    return;
  }

  console.log(
    `CML example validation PASS: ${checkedFiles} file .cml, ${checkedTeacherFiles} teacher_proposal, ${checkedProposals} proposte`,
  );
}

main().catch((error) => {
  console.error(`CML example validation ERROR: ${error.message}`);
  process.exitCode = 1;
});
