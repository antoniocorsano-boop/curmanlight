export type ReferentValidationValue = 'confermata' | 'respinta' | 'sospesa'

export type ReferentValidation = {
  value: ReferentValidationValue
  note: string
  validatedAt: string
}

export type ReferentValidationMap = Record<string, ReferentValidation>

export type ReferentValidationInput = {
  value: ReferentValidationValue
  note?: string
}
