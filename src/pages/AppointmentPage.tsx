import { CalendarCheck2 } from 'lucide-react'
import { AppointmentForm } from '../components/AppointmentForm'
import { SectionHeading } from '../components/SectionHeading'
import { Seo } from '../lib/seo'

export function AppointmentPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Seo title="Book a Dental Appointment | Mapello, Dentist in Canada" description="Request a dental appointment with Mapello, a dentist from Canada. Share your preferred service and timing for follow-up." />

      <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="Appointment" title="Request an appointment with Mapello." text="Share your preferred service and timing. Mapello will follow up to confirm availability." />
        <div className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--heading)]">
          <CalendarCheck2 className="h-4 w-4 text-[var(--primary)]" />
          Frontend request form
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-5 rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-xl font-semibold text-[var(--heading)]">Before you book</h3>
          <p className="text-sm leading-7 text-[var(--muted)]">Your details help us prepare for your visit and understand your preferences. This basic form is intentionally designed to avoid collecting sensitive medical information.</p>
          <ul className="space-y-3 text-sm text-[var(--muted)]">
            <li>• Choose your preferred treatment area</li>
            <li>• Share dates and appointment timing</li>
            <li>• Include any questions or concerns</li>
          </ul>
        </div>

        <AppointmentForm />
      </div>
    </div>
  )
}
