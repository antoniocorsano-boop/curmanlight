import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { resolveCurriculumApplicability } from '@/lib/temporal-applicability'
import type { ProfiloUtente } from '@/types/gap'
import type { DisciplinaSlug, OrdineEsteso } from '@/types/curriculum'

interface ApplicabilityContextBannerProps {
  profilo: ProfiloUtente | null
  ordine: OrdineEsteso
  disciplina: DisciplinaSlug | null
  mode: 'consultazione' | 'revisione'
}

function frameworkLabel(framework: 'IN_2012' | 'IN_2025' | null) {
  if (framework === 'IN_2012') return 'Indicazioni nazionali 2012'
  if (framework === 'IN_2025') return 'Indicazioni nazionali 2025'
  return 'Applicabilità da verificare'
}

export function ApplicabilityContextBanner({ profilo, ordine, disciplina, mode }: ApplicabilityContextBannerProps) {
  const contextOrder = ordine === 'Tutti' ? null : ordine
  const classYear = contextOrder === 'Infanzia'
    ? null
    : profilo?.ordine === contextOrder && profilo.classe
      ? Number(profilo.classe)
      : null

  const resolution = contextOrder
    ? resolveCurriculumApplicability({
        academicYear: profilo?.annoScolastico ?? '',
        order: contextOrder,
        classYear,
        discipline: disciplina,
      })
    : null

  const resolved = resolution?.status === 'applicabile'
  const Icon = resolved ? CheckCircle2 : AlertCircle
  const wrapperClass = resolved
    ? 'border-sky-200 bg-sky-50 text-sky-950'
    : 'border-amber-200 bg-amber-50 text-amber-950'
  const iconClass = resolved ? 'text-sky-600' : 'text-amber-600'

  const operationalMessage = mode === 'consultazione'
    ? 'La consultazione resta in sola lettura: il quadro applicabile orienta la lettura, ma non sostituisce né nasconde automaticamente altri riferimenti curricolari.'
    : 'Il quadro applicabile orienta il confronto. Testo vigente, proposta e decisione restano separati; nessuna proposta viene applicata automaticamente.'

  return (
    <section className={`rounded-2xl border p-4 ${wrapperClass}`} aria-label="Contesto temporale del curricolo">
      <div className="flex items-start gap-3">
        <Icon size={20} className={`mt-0.5 shrink-0 ${iconClass}`} />
        <div>
          <p className="text-xs font-[650] uppercase tracking-wide">Quadro nazionale applicabile</p>
          <h2 className="mt-1 text-base font-[700]">{frameworkLabel(resolution?.framework ?? null)}</h2>
          <p className="mt-1 text-sm leading-6">{resolution?.message ?? 'Completa anno scolastico, ordine e classe nelle Impostazioni per determinare il quadro applicabile.'}</p>
          <p className="mt-2 text-xs leading-5 opacity-80">{operationalMessage}</p>
          <p className="mt-1 text-xs leading-5 opacity-80">Questo dato non certifica che il curricolo d'istituto sia aggiornato, deliberato o approvato.</p>
        </div>
      </div>
    </section>
  )
}
