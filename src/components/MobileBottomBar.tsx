import { MessageCircle, Phone, Plus } from 'lucide-react'
import { clinicInfo } from '../data/siteData'

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-white/90 p-3 backdrop-blur-sm md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-3">
        <a href={`tel:${clinicInfo.phoneLink}`} className="flex items-center justify-center gap-2 rounded-full bg-[var(--surface)] px-3 py-3 text-sm font-medium text-[var(--heading)]">
          <Phone className="h-4 w-4" />
          Call
        </a>
        <a href={`https://wa.me/${clinicInfo.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-[var(--surface)] px-3 py-3 text-sm font-medium text-[var(--heading)]">
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a href="/appointment" className="flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-3 py-3 text-sm font-medium text-white">
          <Plus className="h-4 w-4" />
          Book
        </a>
      </div>
    </div>
  )
}
