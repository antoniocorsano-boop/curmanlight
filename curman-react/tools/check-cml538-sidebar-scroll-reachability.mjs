import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd().endsWith('curman-react') ? process.cwd() : join(process.cwd(), 'curman-react')
const repoRoot = process.cwd().endsWith('curman-react') ? join(process.cwd(), '..') : process.cwd()

function read(relativePath) {
  return readFileSync(join(root, relativePath), 'utf8')
}

function readRepo(relativePath) {
  return readFileSync(join(repoRoot, relativePath), 'utf8')
}

function assertIncludes(source, expected, label) {
  if (!source.includes(expected)) throw new Error(`${label}: missing "${expected}"`)
}

function assertNotIncludes(source, forbidden, label) {
  if (source.includes(forbidden)) throw new Error(`${label}: forbidden "${forbidden}"`)
}

const layout = read('src/components/layout/Layout.tsx')
const sidebar = read('src/components/layout/Sidebar.tsx')
const packageJson = JSON.parse(read('package.json'))
const historicalRuntime = [
  readRepo('index.html'),
  readRepo('_published_snapshot/netlify-current/index.html'),
  readRepo('sw.js'),
  readRepo('_published_snapshot/netlify-current/sw.js'),
].join('\n')

assertIncludes(layout, 'flex min-h-0 flex-1 overflow-hidden', 'layout content shell')
assertIncludes(layout, 'min-h-0 flex-1 overflow-y-auto', 'main scroll container')
assertIncludes(sidebar, 'h-full min-h-0', 'sidebar constrained height')
assertIncludes(sidebar, 'overflow-y-auto', 'sidebar vertical scroll')
assertIncludes(sidebar, 'overscroll-contain', 'sidebar scroll containment')
assertIncludes(sidebar, 'pb-6', 'sidebar bottom padding')
assertIncludes(sidebar, 'focus-visible', 'keyboard focus visibility')
assertIncludes(sidebar, "aria-current={active ? 'page' : undefined}", 'active state unchanged')
assertIncludes(sidebar, 'max-sm:bottom-0', 'mobile drawer keeps bottom boundary')
assertIncludes(sidebar, 'max-sm:h-[calc(100vh-3.5rem)]', 'mobile drawer uses residual viewport height')

assert(
  packageJson.scripts?.['test:cml538'] === 'node tools/check-cml538-sidebar-scroll-reachability.mjs',
  'Script npm test:cml538 mancante o non coerente',
)

for (const forbidden of [
  'overflow-y-auto overscroll-contain',
  'test:cml538',
]) {
  assertNotIncludes(historicalRuntime, forbidden, 'historical runtime untouched by CML-538')
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

console.log('CML-538 sidebar scroll reachability contract: PASS')
