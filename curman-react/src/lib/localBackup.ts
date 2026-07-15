export const BACKUP_SCHEMA = 'cml-local-backup-v1' as const

const BACKUP_KEYS = [
  'cml-programmazione-annuale-v1',
  'cml-uda-essenziale-v1',
  'curmanlight.teacher-proposal-drafts.v1',
  'curmanlight.department-proposal-queue.v1',
  'curmanlight.referent-validations.v1',
] as const

export type LocalBackupPayload = {
  schemaVersion: typeof BACKUP_SCHEMA
  appName: 'CurManLight'
  createdAt: string
  entries: Record<string, string>
}

export type BackupPreview = {
  payload: LocalBackupPayload
  entryCount: number
  keys: string[]
}

export function createLocalBackup(storage: Storage = window.localStorage): LocalBackupPayload {
  const entries: Record<string, string> = {}
  for (const key of BACKUP_KEYS) {
    const value = storage.getItem(key)
    if (value !== null) entries[key] = value
  }
  return {
    schemaVersion: BACKUP_SCHEMA,
    appName: 'CurManLight',
    createdAt: new Date().toISOString(),
    entries,
  }
}

export function parseBackup(raw: string): BackupPreview {
  const parsed = JSON.parse(raw) as Partial<LocalBackupPayload>
  if (parsed.schemaVersion !== BACKUP_SCHEMA || parsed.appName !== 'CurManLight' || !isStringMap(parsed.entries)) {
    throw new Error('Formato di backup non riconosciuto.')
  }
  const keys = Object.keys(parsed.entries)
  const unsupported = keys.filter(key => !BACKUP_KEYS.includes(key as typeof BACKUP_KEYS[number]))
  if (unsupported.length > 0) throw new Error('Il backup contiene archivi non supportati.')
  return {
    payload: parsed as LocalBackupPayload,
    entryCount: keys.length,
    keys,
  }
}

export function restoreLocalBackup(payload: LocalBackupPayload, storage: Storage = window.localStorage) {
  const previous = new Map<string, string | null>()
  try {
    for (const key of BACKUP_KEYS) previous.set(key, storage.getItem(key))
    for (const key of BACKUP_KEYS) {
      const value = payload.entries[key]
      if (typeof value === 'string') storage.setItem(key, value)
      else storage.removeItem(key)
    }
    return { ok: true as const }
  } catch {
    for (const [key, value] of previous) {
      try {
        if (value === null) storage.removeItem(key)
        else storage.setItem(key, value)
      } catch {
        // Best-effort rollback; the caller reports the failed restore.
      }
    }
    return { ok: false as const, message: 'Ripristino non riuscito. I dati precedenti sono stati mantenuti quando possibile.' }
  }
}

export function backupFilename(createdAt: string) {
  const stamp = createdAt.replace(/[:.]/g, '-').replace('T', '_').replace('Z', '')
  return `curmanlight-backup-${stamp}.json`
}

function isStringMap(value: unknown): value is Record<string, string> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    && Object.values(value).every(item => typeof item === 'string')
}
