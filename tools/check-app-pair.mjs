#!/usr/bin/env node
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const PAIR = [
  {
    label: 'index.html',
    root: resolve(ROOT, 'index.html'),
    published: resolve(ROOT, '_published_snapshot', 'netlify-current', 'index.html'),
  },
  {
    label: 'sw.js',
    root: resolve(ROOT, 'sw.js'),
    published: resolve(ROOT, '_published_snapshot', 'netlify-current', 'sw.js'),
  },
];

let allSync = true;
const results = [];

for (const { label, root, published } of PAIR) {
  const rootExists = existsSync(root);
  const pubExists = existsSync(published);

  if (!rootExists && !pubExists) {
    results.push({ label, status: 'MISSING', detail: 'Entrambi i file mancano' });
    allSync = false;
    continue;
  }
  if (!rootExists) {
    results.push({ label, status: 'MISSING_ROOT', detail: `File radice mancante: ${root}` });
    allSync = false;
    continue;
  }
  if (!pubExists) {
    results.push({ label, status: 'MISSING_PUBLISHED', detail: `File pubblicato mancante: ${published}` });
    allSync = false;
    continue;
  }

  const rootContent = readFileSync(root, 'utf8');
  const pubContent = readFileSync(published, 'utf8');
  const rootHash = createHash('sha256').update(rootContent).digest('hex');
  const pubHash = createHash('sha256').update(pubContent).digest('hex');

  if (rootHash === pubHash) {
    results.push({
      label,
      status: 'PAIR_SYNC',
      detail: `Hash identico: ${rootHash.substring(0, 16)}...`,
      rootLines: rootContent.split('\n').length,
      pubLines: pubContent.split('\n').length,
    });
  } else {
    allSync = false;
    const rootLines = rootContent.split('\n').length;
    const pubLines = pubContent.split('\n').length;
    const diff = Math.abs(rootContent.length - pubContent.length);
    results.push({
      label,
      status: 'PAIR_DIVERGED',
      detail: `Hash diversi. Root: ${rootHash.substring(0, 16)}... (${rootContent.length} bytes, ${rootLines} lines) | Published: ${pubHash.substring(0, 16)}... (${pubContent.length} bytes, ${pubLines} lines) | Diff: ${diff} bytes`,
      rootHash: rootHash.substring(0, 16),
      pubHash: pubHash.substring(0, 16),
      rootLines,
      pubLines,
      diffBytes: diff,
    });
  }
}

// Output
console.log(JSON.stringify({ allSync, results }, null, 2));

// Exit code
process.exit(allSync ? 0 : 1);
