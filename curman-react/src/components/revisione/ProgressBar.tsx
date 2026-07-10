import type { ProgressStats } from '@/types/gap'

export function ProgressBar({ stats, label }: { stats: ProgressStats; label?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <div className="flex items-center justify-between">
          <span className="text-xs font-[500] text-slate-600">{label}</span>
          <span className="text-xs text-slate-400">{stats.decise}/{stats.totale} ({stats.percentuale}%)</span>
        </div>
      )}
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-300 bg-indigo-500" style={{ width: `${stats.percentuale}%` }} />
      </div>
      <div className="flex gap-4 text-[11px] text-slate-400">
        <span>Approvate: {stats.approvate}</span>
        <span>Rifiutate: {stats.rifiutate}</span>
        <span>Da decidere: {stats.totale - stats.decise}</span>
      </div>
    </div>
  )
}
