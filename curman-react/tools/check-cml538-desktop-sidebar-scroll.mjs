import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd().endsWith('curman-react') ? process.cwd() : join(process.cwd(), 'curman-react')

function read(relativePath) {
  return readFileSync(join(root, relativePath), 'utf8')
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

const layout = read('src/components/layout/Layout.tsx')
const sidebar = read('src/components/layout/Sidebar.tsx')
const packageJson = JSON.parse(read('package.json'))

for (const expected of [
  'relative flex min-h-0 flex-1 overflow-hidden',
  'min-h-0 flex-1 overflow-y-auto',
]) {
  assert(layout.includes(expected), `Contratto layout CML-538 mancante: ${expected}`)
}

for (const expected of [
  'min-h-0 overflow-y-auto overscroll-contain',
  'pb-8',
  'focus-visible:ring-2',
]) {
  assert(sidebar.includes(expected), `Contratto sidebar CML-538 mancante: ${expected}`)
}

assert(!sidebar.includes('overflow-x-auto'), 'La sidebar non deve introdurre scorrimento orizzontale')
assert(
  packageJson.scripts?.['test:cml538'] === 'node tools/check-cml538-desktop-sidebar-scroll.mjs',
  'Script npm test:cml538 mancante o non coerente',
)

console.log('CML-538 desktop sidebar scroll and reachability contract: PASS')
