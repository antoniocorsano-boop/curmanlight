import { useEffect, useState } from 'react'
import { Check, X } from 'lucide-react'

export type ToastType = 'success' | 'error' | 'info'

export function Toast({ message, type = 'info', duration = 3000, onClose }: { message: string; type?: ToastType; duration?: number; onClose: () => void }) {
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => { setVisible(false); setTimeout(onClose, 200) }, duration)
    return () => clearTimeout(t)
  }, [duration, onClose])

  const colors = type === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : type === 'error' ? 'border-red-200 bg-red-50 text-red-700' : 'border-indigo-200 bg-indigo-50 text-indigo-700'
  const icon = type === 'success' ? <Check size={15} /> : type === 'error' ? <X size={15} /> : null

  return (
    <div className={`fixed bottom-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-lg border text-sm transition-opacity duration-200 ${colors} ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {icon}<span>{message}</span>
    </div>
  )
}
