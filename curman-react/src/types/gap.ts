// Tipi per il Gap Layer e Revisione (IN 2012 → IN 2025)
// Conforme a: IN-2025-ALIGNMENT-LAYER-CONTRACT, REVISION-PROCESS-LAYER-CONTRACT

export type GapStatus =
  | 'vigente'
  | 'proposta'
  | 'non_validato'
  | 'validato'
  | 'approvato'
  | 'applicabile'
  | 'non_applicabile'
  | 'archiviato'

export type Ruolo = 'docente' | 'dipartimento' | 'referente' | 'dirigenza' | 'consultatore'
export type DecisioneValore = 'approvata' | 'rifiutata' | null
export type GapTargetField = 'traguardo' | 'obiettivi' | 'conoscenze' | 'abilita' | 'evidenze' | 'criteriValutazione'

export interface GapEntry {
  unitaId: string
  status: GapStatus
  targetField: GapTargetField
  proposto: string
  motivazione?: string
  note?: string
  testoOriginale: string
  sourceRefs?: string[]
}

export interface GapLayer {
  disciplina: string
  schemaVersion: 'gap-v1'
  note?: string
  entries: GapEntry[]
}

export interface Decisione {
  unitaId: string
  decisione: DecisioneValore
  testoFinale: string | null
  timestamp: string
  autore?: string
  ruolo?: Ruolo
  note?: string
}

export type DecisioniMap = Record<string, Decisione>

export interface ProfiloUtente {
  ruolo: Ruolo
  ordine: import('./curriculum').OrdineEsteso
  disciplina: string
  annoScolastico: string
  classe?: string
  nome?: string
  cognome?: string
  istituto?: string
}

export interface ProgressStats {
  totale: number
  decise: number
  approvate: number
  rifiutate: number
  percentuale: number
}

export interface ApplicabilitaEntry {
  annoScolastico: string
  classe: string
  disciplina?: string
  versioneCurricolare: string
  stato: GapStatus
  dataDecorrenza?: string
}
