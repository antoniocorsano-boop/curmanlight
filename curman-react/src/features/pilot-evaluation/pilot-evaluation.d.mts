export interface PilotEvaluationContext {
  role: string
  schoolOrder: string
  experienceNote: string
}

export interface PilotEvaluationData {
  schema: 'cml-pilot-evaluation-v2'
  id: string
  createdAt: string
  updatedAt: string
  currentStep: number
  completed: boolean
  notes: string[]
  secondTestAvailable: boolean | null
  context: PilotEvaluationContext
}

export interface PilotEvaluationStep {
  title: string
  instruction: string
  prompt: string
}

export const PILOT_EVALUATION_STORAGE_KEY: string
export const LEGACY_PILOT_EVALUATION_STORAGE_KEY: string
export const PILOT_EVALUATION_SCHEMA: 'cml-pilot-evaluation-v2'
export const PILOT_EVALUATION_STEPS: readonly PilotEvaluationStep[]

export function createPilotEvaluation(): PilotEvaluationData
export function normalizePilotEvaluation(value: unknown): PilotEvaluationData | null
export function readPilotEvaluation(storage: Storage): PilotEvaluationData | null
export function writePilotEvaluation(storage: Storage, evaluation: PilotEvaluationData): PilotEvaluationData
export function clearPilotEvaluation(storage: Storage): void
export function buildPilotEvaluationExport(evaluation: PilotEvaluationData): Record<string, unknown>
export function serializePilotEvaluationMarkdown(evaluation: PilotEvaluationData): string
export function serializePilotEvaluationJson(evaluation: PilotEvaluationData): string
