import { X } from 'lucide-react'
import { useEffect } from 'react'

type LightboxItem = {
  title: string
  category: string
  image: string
}

type LightboxProps = {
  item: LightboxItem | null
  onClose: () => void
}

export function Lightbox({ item, onClose }: LightboxProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  if (!item) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(7,17,27,0.8)] p-4" onClick={onClose}>
      <div className="relative max-w-4xl rounded-[28px] border border-white/20 bg-white p-3 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={onClose} aria-label="Close modal" className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[var(--heading)]">
          <X className="h-5 w-5" />
        </button>
        <img src={item.image} alt={item.title} className="max-h-[75vh] w-full rounded-[20px] object-cover" />
        <div className="px-3 pb-2 pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{item.category}</p>
          <h3 className="mt-2 text-2xl font-semibold text-[var(--heading)]">{item.title}</h3>
        </div>
      </div>
    </div>
  )
}
