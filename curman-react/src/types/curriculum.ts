export type Ordine = 'Infanzia' | 'Primaria' | 'Secondaria'
export type OrdineEsteso = Ordine | 'Tutti'

export type DisciplinaSlug =
  | 'arte-immagine'
  | 'educazione-civica'
  | 'educazione-fisica'
  | 'geografia'
  | 'inglese'
  | 'italiano'
  | 'latino-lel'
  | 'matematica'
  | 'musica'
  | 'religione-cattolica'
  | 'scienze'
  | 'seconda-lingua-comunitaria'
  | 'storia'
  | 'tecnologia'

export const DISCIPLINE_SLUGS: DisciplinaSlug[] = [
  'arte-immagine',
  'educazione-civica',
  'educazione-fisica',
  'geografia',
  'inglese',
  'italiano',
  'latino-lel',
  'matematica',
  'musica',
  'religione-cattolica',
  'scienze',
  'seconda-lingua-comunitaria',
  'storia',
  'tecnologia',
]

export const DISCIPLINE_LABELS: Record<DisciplinaSlug, string> = {
  'arte-immagine': 'Arte e Immagine',
  'educazione-civica': 'Educazione Civica',
  'educazione-fisica': 'Educazione Fisica',
  'geografia': 'Geografia',
  'inglese': 'Inglese',
  'italiano': 'Italiano',
  'latino-lel': 'Latino / LEL',
  'matematica': 'Matematica',
  'musica': 'Musica',
  'religione-cattolica': 'Religione Cattolica',
  'scienze': 'Scienze',
  'seconda-lingua-comunitaria': 'Seconda Lingua Comunitaria',
  'storia': 'Storia',
  'tecnologia': 'Tecnologia',
}

export interface StrutturaSostanziale {
  id: string
  nome: string
  descrizione: string
  fonte: string
}

export interface ProgressioneVerticale {
  id: string
  ordine: Ordine
  fascia?: string
  classe?: string
  descrizioneProgressione: string
  nodiRiferimento: string[]
  fonte: string
}

export interface DecisioneCurricolare {
  id: string
  tipo: string
  nodiRiferimento: string[]
  unitaRiferimento: string[]
  motivazione: string
  stato: string
  fonte: string
}

export interface UnitaApprendimento {
  id: string
  disciplina: string
  ordine: Ordine
  classe: string | null
  fascia: string | null
  ambito: string
  competenza: string
  traguardo: string
  obiettivi: string[]
  conoscenze: string[]
  abilita: string[]
  evidenze: string[]
  criteriValutazione: string[]
  fonte: string
  stato: string
  validazioneUmana: boolean
  noteDipartimento: string
  nucleo: string
  gap?: import('./gap').GapEntry
}

export interface CurriculumDisciplina {
  disciplina: string
  unitaApprendimento: UnitaApprendimento[]
  struttureSostanziali?: StrutturaSostanziale[]
  progressioneVerticale?: ProgressioneVerticale[]
  decisioniCurricolari?: DecisioneCurricolare[]
}
