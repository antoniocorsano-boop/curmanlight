#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const RUNTIME_FILES = [
  'index.html',
  '_published_snapshot/netlify-current/index.html'
];
const CSS_PATH = 'runtime-fragments/CML-401_process_home_hub.css';
const HTML_PATH = 'runtime-fragments/CML-401_process_home_hub.html';
const CSS_MARKER = '/* CML-401 — Process ecosystem Home hub */';
const HTML_MARKER = '<!-- CML-401 — Process ecosystem Home hub -->';

function read(rel){return fs.readFileSync(path.join(ROOT, rel), 'utf8');}
function write(rel, content){fs.writeFileSync(path.join(ROOT, rel), content, 'utf8');}
function assertFile(rel){if(!fs.existsSync(path.join(ROOT, rel))) throw new Error('File mancante: '+rel);}

function insertCss(source, css){
  if(source.includes(CSS_MARKER)) return source;
  if(!source.includes('</style>')) throw new Error('Marcatore </style> non trovato');
  return source.replace('</style>', '\n' + css.trim() + '\n</style>');
}

function buildHomeHubJsLiteral(html){
  const compact = html
    .replace(/<!-- CML-401[\s\S]*?-->/g, '')
    .replace(/<!-- END CML-401 -->/g, '')
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .join('');
  return compact
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'");
}

function insertHomeHub(source, html){
  if(source.includes(HTML_MARKER) || source.includes('home-process-hub')) return source;
  const hubLiteral = "'" + HTML_MARKER + "'+'" + buildHomeHubJsLiteral(html) + "'+'<!-- END CML-401 -->'";

  const markers = [
    "'<section class=\"home-inline-banner\"",
    "'<div class=\"home-grid\"",
    "'<section class=\"home-context-card\"",
    "'<div id=\"work-context-body\""
  ];

  for(const marker of markers){
    const idx = source.indexOf(marker);
    if(idx !== -1){
      return source.slice(0, idx) + hubLiteral + '+\n      ' + source.slice(idx);
    }
  }

  throw new Error('Nessun marcatore Home trovato per inserire il blocco CML-401');
}

function patchFile(rel, css, html){
  let source = read(rel);
  const before = source;
  source = insertCss(source, css);
  source = insertHomeHub(source, html);
  if(source !== before) write(rel, source);
  return source !== before;
}

for(const rel of [...RUNTIME_FILES, CSS_PATH, HTML_PATH]) assertFile(rel);

const css = read(CSS_PATH);
const html = read(HTML_PATH);
const results = [];
for(const rel of RUNTIME_FILES){
  results.push([rel, patchFile(rel, css, html)]);
}

const root = read(RUNTIME_FILES[0]);
const snap = read(RUNTIME_FILES[1]);
if(root.includes(CSS_MARKER) !== snap.includes(CSS_MARKER)) throw new Error('Root/snapshot non allineati: CSS CML-401');
if(root.includes('home-process-hub') !== snap.includes('home-process-hub')) throw new Error('Root/snapshot non allineati: HTML CML-401');

console.log('CML-401 patch completata');
for(const [rel, changed] of results){
  console.log('- ' + rel + ': ' + (changed ? 'aggiornato' : 'già presente'));
}
