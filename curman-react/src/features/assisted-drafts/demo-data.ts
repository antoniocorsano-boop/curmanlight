import type { AssistedCurriculumDraft, CurriculumTargetRegistry } from './contracts'

export const assistedDraftDemoRegistry: CurriculumTargetRegistry = {
  registryType: 'curriculum_target_registry',
  registryVersion: 'tec-secondary-v1',
  canonicalDataVersion: 'cml-normalized-curriculum-v1',
  disciplineId: 'tecnologia',
  orderId: 'secondaria',
  readOnly: true,
  generatedFrom: 'content/curriculum/tecnologia.normalized.json',
  targets: [
    {
      targetId: 'cml:tecnologia:secondaria:tec_sec_2_002:energia-sostenibilita:conoscenze',
      disciplineId: 'tecnologia',
      orderId: 'secondaria',
      unitId: 'tec_sec_2_002',
      nucleusId: 'energia-sostenibilita',
      fieldId: 'conoscenze',
      label: 'Conoscenze — Energia e sostenibilità — classe 2',
      canonicalPath: 'unitaApprendimento[id=tec_sec_2_002].conoscenze',
      status: 'active',
      aliases: ['fonti energetiche', 'rinnovabili', 'non rinnovabili'],
    },
  ],
}

export const createAssistedDraftDemo = (): AssistedCurriculumDraft => ({
  schemaVersion: '1.0',
  fileType: 'assisted_curriculum_draft',
  packageId: 'demo-tecnologia-energia-001',
  packageVersion: 0,
  humanValidationRequired: true,
  canonicalWriteAllowed: false,
  targetRegistryVersion: assistedDraftDemoRegistry.registryVersion,
  suggestions: [
    {
      suggestionId: 'demo-sug-energia-001',
      state: 'generated_unreviewed',
      originalGeneratedText: 'Confrontare fonti rinnovabili e non rinnovabili.',
      proposedText: 'Confrontare fonti rinnovabili e non rinnovabili, riconoscendone vantaggi e limiti nel contesto locale.',
      target: {
        registryVersion: assistedDraftDemoRegistry.registryVersion,
        disciplineId: 'tecnologia',
        orderId: 'secondaria',
        unitId: 'tec_sec_2_002',
        nucleusId: 'energia-sostenibilita',
        fieldId: 'conoscenze',
      },
      evidence: [
        {
          sourceId: 'demo-fonte-istituzionale-001',
          sourceVersionId: 'demo-fonte-istituzionale-001-v1',
          locatorType: 'section',
          locatorValue: 'Energia',
          excerpt: 'Conoscere le fonti energetiche rinnovabili e non rinnovabili.',
          excerptHash: 'demo-hash-evidence-001',
        },
      ],
      humanValidationRequired: true,
      canonicalWriteAllowed: false,
    },
  ],
  auditTrail: [],
})
