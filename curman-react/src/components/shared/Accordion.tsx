import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

export function Accordion({ title, defaultOpen = false, children }: { title: string; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-4 py-3 text-sm font-[500] text-slate-700 hover:bg-slate-50 transition-colors">
        <span>{title}</span>
        <ChevronRight size={15} className={`text-slate-400 transition-transform ${open ? 'rotate-90' : ''}`} />
      </button>
      {open && <div className="px-4 pb-4 pt-2 border-t border-slate-100">{children}</div>}
    </div>
  )
}
