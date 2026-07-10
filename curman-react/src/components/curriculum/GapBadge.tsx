import type { GapStatus } from '@/types/gap'

const STATUS_CONFIG: Record<GapStatus, { label: string; className: string }> = {
  vigente: { label: 'Vigente', className: 'bg-slate-100 text-slate-500' },
  proposta: { label: 'Proposta', className: 'bg-indigo-50 text-indigo-600' },
  non_validato: { label: 'Da validare', className: 'bg-amber-50 text-amber-600' },
  validato: { label: 'Validato', className: 'bg-emerald-50 text-emerald-600' },
  approvato: { label: 'Approvato', className: 'bg-green-50 text-green-700' },
  applicabile: { label: 'Applicabile', className: 'bg-teal-50 text-teal-600' },
  non_applicabile: { label: 'Non applicabile', className: 'bg-gray-100 text-gray-400' },
  archiviato: { label: 'Archiviato', className: 'bg-gray-50 text-gray-300' },
}

export function GapBadge({ status }: { status: GapStatus }) {
  const c = STATUS_CONFIG[status]
  return <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-[500] ${c.className}`}>{c.label}</span>
}
