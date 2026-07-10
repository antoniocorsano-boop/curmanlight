const VARIANTS = { default: 'bg-slate-100 text-slate-600', primary: 'bg-indigo-50 text-indigo-700', success: 'bg-emerald-50 text-emerald-700', warning: 'bg-amber-50 text-amber-700', danger: 'bg-red-50 text-red-600' }

export function Badge({ children, variant = 'default' }: { children: React.ReactNode; variant?: keyof typeof VARIANTS }) {
  return <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-[500] ${VARIANTS[variant]}`}>{children}</span>
}
