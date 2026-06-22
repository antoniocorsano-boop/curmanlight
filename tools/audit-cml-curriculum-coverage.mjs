#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const runtimePath = process.argv[2] || '_published_snapshot/netlify-current/index.html';
const html = fs.readFileSync(runtimePath, 'utf8');

function between(source, startMarker, endMarker){
  const start = source.indexOf(startMarker);
  if(start < 0) return '';
  const end = source.indexOf(endMarker, start);
  return end < 0 ? source.slice(start) : source.slice(start, end);
}

const disciplineMetaBlock = between(html, 'const DISCIPLINE_META = {', '};\nconst DISCIPLINE');
const dataBlock = between(html, 'let DATA = {', '\n};\n\n// ================================================================\n// ================================================================\nlet selDisc');

const metaDisciplines = [...disciplineMetaBlock.matchAll(/^\s*"([^"]+)"\s*:/gm)].map(m => m[1]);
const dataDisciplines = [...dataBlock.matchAll(/^"([^"]+)"\s*:\s*\{/gm)].map(m => m[1]);
const expectedOrders = ['Infanzia','Primaria','Secondaria'];

function countIn(fragment, regex){
  return [...fragment.matchAll(regex)].length;
}

function disciplineFragment(name){
  const index = dataBlock.indexOf(`"${name}":`);
  if(index < 0) return '';
  const nextIndexes = dataDisciplines
    .filter(d => d !== name)
    .map(d => dataBlock.indexOf(`\n"${d}":`, index + 1))
    .filter(i => i > index)
    .sort((a,b) => a-b);
  const end = nextIndexes[0] || dataBlock.length;
  return dataBlock.slice(index, end);
}

const coverage = dataDisciplines.map(name => {
  const fragment = disciplineFragment(name);
  const byOrder = Object.fromEntries(expectedOrders.map(order => [order, countIn(fragment, new RegExp(`ordine:\\"${order}\\"`, 'g'))]));
  return {
    disciplina: name,
    traguardi: countIn(fragment, /traguardi:\[/g) ? countIn(fragment, /id:\"[^\"]+\"/g) - countIn(fragment.match(/obiettivi:\[[\s\S]*/)?.[0] || '', /id:\"[^\"]+\"/g) : 0,
    obiettivi: countIn(fragment.match(/obiettivi:\[[\s\S]*/)?.[0] || '', /id:\"[^\"]+\"/g),
    totaleVoci: countIn(fragment, /id:\"[^\"]+\"/g),
    ordiniConVoci: Object.entries(byOrder).filter(([,v]) => v > 0).map(([k]) => k),
    ordiniVuoti: Object.entries(byOrder).filter(([,v]) => v === 0).map(([k]) => k),
    stati: {
      ok: countIn(fragment, /status:\"ok\"/g),
      modifica: countIn(fragment, /status:\"modifica\"/g),
      nuovo: countIn(fragment, /status:\"nuovo\"/g),
      eliminato: countIn(fragment, /status:\"eliminato\"/g)
    },
    campiIstituzionaliPresenti: {
      ambito: /ambito\s*:/.test(fragment),
      competenza: /competenza\s*:/.test(fragment),
      conoscenze: /conoscenze\s*:/.test(fragment),
      abilita: /abilit[àa]\s*:/.test(fragment)
    }
  };
});

const uiDensity = {
  buttonTags: countIn(html, /<button\b/g),
  inlineOnclick: countIn(html, /onclick=/g),
  exportButtons: countIn(html, /export-btn/g),
  protectedActions: countIn(html, /requireRoleAccess\(/g),
  tabs: countIn(html, /tab-/g),
  mobileBottomBar: /mobile-bottom-bar/.test(html)
};

const result = {
  generatedAt: new Date().toISOString(),
  runtimePath: path.normalize(runtimePath),
  metaDisciplines,
  dataDisciplines,
  disciplineCount: dataDisciplines.length,
  metadataOnlyDisciplines: metaDisciplines.filter(d => !dataDisciplines.includes(d)),
  dataWithoutMetadata: dataDisciplines.filter(d => !metaDisciplines.includes(d)),
  coverage,
  schemaFinding: 'Il runtime corrente modella traguardi e obiettivi. Non emerge una struttura dati sistematica per ambito, competenza, conoscenze e abilità su ogni disciplina.',
  uxFinding: 'La UI espone molte azioni e pulsanti nello stesso spazio operativo; serve un audit orientato a una schermata/una decisione e a un livello progressivo di dettaglio.',
  uiDensity
};

console.log(JSON.stringify(result, null, 2));
