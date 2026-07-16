export type PilotFeedbackRecord = {
  evaluationId: string
  exportedAt: string
  completed: boolean
  secondTestAvailable: boolean | null
  context: { role: string; schoolOrder: string; experienceNote: string }
  responses: Array<{ step: number; title: string; prompt: string; note: string }>
}

export type PilotFeedbackImportResult =
  | { ok: true; sourceName: string; record: PilotFeedbackRecord }
  | { ok: false; sourceName: string; errors: string[] }

export type PilotFeedbackAggregate = {
  records: PilotFeedbackRecord[]
  duplicateIds: string[]
  total: number
  completed: number
  roles: Record<string, number>
  schoolOrders: Record<string, number>
  secondTest: { yes: number; no: number; unspecified: number }
  steps: Array<{ step: number; title: string; prompt: string; answered: number; notes: Array<{ evaluationId: string; note: string }> }>
}

export function validatePilotFeedbackPayload(value: unknown): { valid: boolean; errors: string[] }
export function parsePilotFeedbackJson(raw: string, sourceName?: string): PilotFeedbackImportResult
export function aggregatePilotFeedback(records: PilotFeedbackRecord[]): PilotFeedbackAggregate
export function serializePilotFeedbackAggregateMarkdown(aggregate: PilotFeedbackAggregate): string
