#!/usr/bin/env node
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';
import vm from 'vm';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const FILES = [
  resolve(ROOT, 'sw.js'),
  resolve(ROOT, '_published_snapshot', 'netlify-current', 'sw.js'),
];

const EXPECTED_APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './motto-non-multa-sed-multum/',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

const FORBIDDEN_APP_SHELL = [
  './motto-non-multa-sed-multum.html',
  './riferimenti_istituzionali_normativa.json',
  './docs_distribuzione/FONTI_PTOF_RAV_NORMATIVA.md',
  './docs_distribuzione/NOTE_TESTATA_ESPANDIBILE_MOBILE.txt',
];

function assert(condition, message, failures) {
  if (!condition) failures.push(message);
}

function readServiceWorkers(failures) {
  return FILES.map(file => {
    assert(existsSync(file), `${file}: file mancante`, failures);
    return { file, source: existsSync(file) ? readFileSync(file, 'utf8') : '' };
  });
}

function extractAppShell(source) {
  const match = source.match(/const APP_SHELL = \[(.*?)\];/s);
  if (!match) return null;
  return [...match[1].matchAll(/"([^"]+)"/g)].map(item => item[1]);
}

function verifyStaticContract(entries, failures) {
  const hashes = entries.map(({ source }) => createHash('sha256').update(source).digest('hex'));
  assert(hashes[0] === hashes[1], 'sw.js e snapshot sw.js non sono sincronizzati', failures);

  for (const { file, source } of entries) {
    const shell = extractAppShell(source);
    assert(Array.isArray(shell), `${file}: APP_SHELL non trovato`, failures);
    if (!Array.isArray(shell)) continue;

    assert(JSON.stringify(shell) === JSON.stringify(EXPECTED_APP_SHELL), `${file}: APP_SHELL non corrisponde alla policy minima (${shell.join(', ')})`, failures);
    for (const url of EXPECTED_APP_SHELL) {
      assert(shell.includes(url), `${file}: APP_SHELL non contiene ${url}`, failures);
    }
    for (const url of FORBIDDEN_APP_SHELL) {
      assert(!shell.includes(url), `${file}: APP_SHELL contiene risorsa vietata ${url}`, failures);
    }

    assert(source.includes('function offlineFallbackResponse(request)'), `${file}: fallback offline mancante`, failures);
    assert(source.includes('status: 503'), `${file}: fallback navigation 503 mancante`, failures);
    assert(source.includes('status: 504'), `${file}: fallback asset 504 mancante`, failures);
    assert(source.includes('.then(fallback => fallback || offlineFallbackResponse(request))'), `${file}: fallback finale Response non garantito`, failures);
  }
}

async function verifyRuntimeContract(entry, failures) {
  const handlers = new Map();
  const addAttempts = [];
  const context = {
    Response,
    Headers,
    URL,
    fetch: () => Promise.reject(new Error('offline')),
    caches: {
      open: () => Promise.resolve({
        add: url => {
          addAttempts.push(url);
          return Promise.reject(new Error(`missing ${url}`));
        },
        put: () => Promise.resolve(),
      }),
      keys: () => Promise.resolve([]),
      delete: () => Promise.resolve(true),
      match: () => Promise.resolve(undefined),
    },
    self: {
      location: { origin: 'https://example.test' },
      skipWaiting() {},
      clients: { claim() {} },
      addEventListener(type, handler) {
        handlers.set(type, handler);
      },
    },
  };

  vm.createContext(context);
  vm.runInContext(entry.source, context, { filename: entry.file });

  const installHandler = handlers.get('install');
  const fetchHandler = handlers.get('fetch');
  assert(typeof installHandler === 'function', `${entry.file}: handler install non registrato`, failures);
  assert(typeof fetchHandler === 'function', `${entry.file}: handler fetch non registrato`, failures);
  if (typeof installHandler !== 'function' || typeof fetchHandler !== 'function') return;

  let installPromise;
  installHandler({ waitUntil(promise) { installPromise = Promise.resolve(promise); } });
  try {
    await installPromise;
  } catch (error) {
    failures.push(`${entry.file}: install fallisce con asset mancanti (${error.message})`);
  }
  assert(addAttempts.length === EXPECTED_APP_SHELL.length, `${entry.file}: install non tenta tutte le risorse APP_SHELL`, failures);

  async function runFetch(request) {
    let responsePromise;
    fetchHandler({ request, respondWith(promise) { responsePromise = Promise.resolve(promise); } });
    assert(responsePromise, `${entry.file}: respondWith non chiamato`, failures);
    if (!responsePromise) return null;
    const response = await responsePromise;
    assert(response instanceof Response, `${entry.file}: respondWith risolve a valore non Response`, failures);
    return response;
  }

  const nav = await runFetch({
    method: 'GET',
    mode: 'navigate',
    headers: new Headers({ accept: 'text/html' }),
    url: 'https://example.test/curmanlight/offline-nav',
  });
  if (nav) assert(nav.status === 503, `${entry.file}: navigation offline attesa 503, ricevuto ${nav.status}`, failures);

  const asset = await runFetch({
    method: 'GET',
    mode: 'cors',
    headers: new Headers({ accept: 'image/png' }),
    url: 'https://example.test/curmanlight/missing.png',
  });
  if (asset) assert(asset.status === 504, `${entry.file}: asset offline atteso 504, ricevuto ${asset.status}`, failures);
}

const failures = [];
const entries = readServiceWorkers(failures);
verifyStaticContract(entries, failures);
for (const entry of entries) {
  await verifyRuntimeContract(entry, failures);
}

if (failures.length) {
  console.error('Service worker offline regression check: FAIL');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('Service worker offline regression check: PASS');
console.log(JSON.stringify({
  files: FILES.map(file => file.replace(`${ROOT}\\`, '').replaceAll('\\', '/')),
  appShell: EXPECTED_APP_SHELL,
  forbidden: FORBIDDEN_APP_SHELL,
  checks: [
    'sw pair sync',
    'minimal APP_SHELL policy',
    'canonical motto path',
    'forbidden optional resources absent',
    'install tolerates missing assets',
    'offline navigation returns Response 503',
    'offline asset returns Response 504',
    'respondWith never resolves undefined in simulated offline/cache-empty paths',
  ],
}, null, 2));