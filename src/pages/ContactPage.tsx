import { Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import { SectionHeading } from '../components/SectionHeading'
import { clinicInfo } from '../data/siteData'
import { Seo } from '../lib/seo'

export function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Seo title="Contact Mapello | Dentist in Canada" description="Contact Mapello, a dentist from Canada, for appointment requests and dental treatment enquiries." />

      <SectionHeading eyebrow="Contact" title="We’re here to help you take the next step." text="Reach out with questions, appointment requests or treatment enquiries. We’ll guide you with clarity and warmth." />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[0_18px_45px_rgba(15,38,60,0.04)]">
            <h3 className="text-xl font-semibold text-[var(--heading)]">Practice details</h3>
            <ul className="mt-5 space-y-4 text-sm text-[var(--muted)]">
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 text-[var(--primary)]" /> {clinicInfo.phone}</li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 text-[var(--primary)]" /> {clinicInfo.email}</li>
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 text-[var(--primary)]" /> {clinicInfo.address}</li>
              <li className="flex gap-3"><Clock3 className="mt-0.5 h-4 w-4 text-[var(--primary)]" /> {clinicInfo.hours}</li>
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${clinicInfo.phoneLink}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white">Call Mapello</a>
              <a href={`https://wa.me/${clinicInfo.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-white px-5 py-3 text-sm font-medium text-[var(--heading)]">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-white p-2 shadow-[0_18px_45px_rgba(15,38,60,0.04)]">
            <iframe
              title="Map placeholder"
              src="https://www.google.com/maps?q=Montreal%2C%20Quebec%2C%20Canada&output=embed"
              className="h-[260px] w-full rounded-[20px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  )
}
