import type { DecisioniMap } from '@/types/gap'
import type { WorkDecisionMap } from '@/types/decision'
import type { LocalSavePayload, WorkDecisionLocalPayload } from '@/types/state'

export const WORK_DECISION_STORAGE_KEY = 'curmanlight:work-decisions:v1'

export interface HydratedWorkDecisionState {
  savedAt: string | null
  workDecisioni: WorkDecisionMap
  decisioni: DecisioniMap
  migratedFromLegacy: boolean
}

export function createWorkDecisionPayload(
  workDecisioni: WorkDecisionMap,
  decisioni: DecisioniMap,
  savedAt = new Date().toISOString(),
): WorkDecisionLocalPayload {
  return {
    version: 'cml-work-decisions-v2',
    savedAt,
    workDecisioni,
    decisioni,
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function withLegacyFieldFallback(workDecisioni: Record<string, unknown>): WorkDecisionMap {
  const migrated: WorkDecisionMap = {}
  for (const [id, rawDecision] of Object.entries(workDecisioni)) {
    if (!isRecord(rawDecision)) continue
    migrated[id] = {
      ...(rawDecision as unknown as WorkDecisionMap[string]),
      fieldDecision: isRecord(rawDecision.fieldDecision)
        ? rawDecision.fieldDecision as unknown as WorkDecisionMap[string]['fieldDecision']
        : null,
    }
  }
  return migrated
}

export function parseWorkDecisionPayload(raw: string): HydratedWorkDecisionState | null {
  let parsed: unknown
  try {
    parsed = JSON.parse(raw)
  } catch {
    return null
  }

  if (!isRecord(parsed)) return null

  if (parsed.version === 'cml-work-decisions-v2') {
    if (!isRecord(parsed.workDecisioni) || !isRecord(parsed.decisioni)) return null
    return {
      savedAt: typeof parsed.savedAt === 'string' ? parsed.savedAt : null,
      workDecisioni: withLegacyFieldFallback(parsed.workDecisioni),
      decisioni: parsed.decisioni as DecisioniMap,
      migratedFromLegacy: false,
    }
  }

  if (parsed.version === 'cml-work-decisions-v1') {
    if (!isRecord(parsed.workDecisioni) || !isRecord(parsed.decisioni)) return null
    return {
      savedAt: typeof parsed.savedAt === 'string' ? parsed.savedAt : null,
      workDecisioni: withLegacyFieldFallback(parsed.workDecisioni),
      decisioni: parsed.decisioni as DecisioniMap,
      migratedFromLegacy: true,
    }
  }

  if (parsed.version === 'cml-local-v3') {
    const legacy = parsed as unknown as LocalSavePayload
    if (!isRecord(legacy.decisioni)) return null
    return {
      savedAt: typeof legacy.savedAt === 'string' ? legacy.savedAt : null,
      workDecisioni: {},
      decisioni: legacy.decisioni,
      migratedFromLegacy: true,
    }
  }

  return null
}

export function getBrowserStorage(): Storage | null {
  if (typeof window === 'undefined') return null
  try {
    return window.localStorage
  } catch {
    return null
  }
}

export function saveWorkDecisionPayload(
  storage: Storage,
  workDecisioni: WorkDecisionMap,
  decisioni: DecisioniMap,
): string | null {
  try {
    const payload = createWorkDecisionPayload(workDecisioni, decisioni)
    storage.setItem(WORK_DECISION_STORAGE_KEY, JSON.stringify(payload))
    return payload.savedAt
  } catch {
    return null
  }
}

export function loadWorkDecisionPayload(storage: Storage): HydratedWorkDecisionState | null {
  try {
    const raw = storage.getItem(WORK_DECISION_STORAGE_KEY)
    return raw ? parseWorkDecisionPayload(raw) : null
  } catch {
    return null
  }
}

export function clearWorkDecisionPayload(storage: Storage): boolean {
  try {
    storage.removeItem(WORK_DECISION_STORAGE_KEY)
    return true
  } catch {
    return false
  }
}
