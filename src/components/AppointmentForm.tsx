import { useState } from 'react'
import type { FormEvent } from 'react'
import { openWhatsAppMessage } from '../lib/whatsapp'

type FormState = {
  firstName: string
  lastName: string
  phone: string
  email: string
  service: string
  date: string
  time: string
  message: string
}

const defaultState: FormState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  service: 'General Dentistry',
  date: '',
  time: '',
  message: ''
}

export function AppointmentForm() {
  const [formData, setFormData] = useState<FormState>(defaultState)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  const validate = () => {
    const newErrors: Partial<Record<keyof FormState, string>> = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.'
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'A valid email is required.'
    if (!formData.date) newErrors.date = 'Preferred date is required.'
    if (!formData.time) newErrors.time = 'Preferred time is required.'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!validate()) return

    openWhatsAppMessage([
      'Hello Mapello, I would like to request a dental appointment.',
      `Name: ${formData.firstName} ${formData.lastName}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Preferred service: ${formData.service}`,
      `Preferred date: ${formData.date}`,
      `Preferred time: ${formData.time}`,
      formData.message ? `Message: ${formData.message}` : ''
    ])
    setSubmitted(true)
    setFormData(defaultState)
    setErrors({})
  }

  return (
    <div className="rounded-[32px] border border-[var(--border)] bg-white p-5 shadow-[0_18px_45px_rgba(15,38,60,0.04)] sm:p-8">
      {submitted ? (
        <div className="rounded-[24px] bg-[var(--surface)] p-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">Continue in WhatsApp</p>
          <h3 className="mt-3 text-2xl font-semibold text-[var(--heading)]">Your appointment message is ready.</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">Review the prefilled message in WhatsApp and press Send to request your appointment. Mapello will follow up to confirm availability.</p>
        </div>
      ) : (
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-[var(--heading)]">First Name</label>
              <input id="firstName" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 outline-none transition focus:border-[var(--primary)]" />
              {errors.firstName && <p className="mt-2 text-xs text-red-600">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-[var(--heading)]">Last Name</label>
              <input id="lastName" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 outline-none transition focus:border-[var(--primary)]" />
              {errors.lastName && <p className="mt-2 text-xs text-red-600">{errors.lastName}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[var(--heading)]">Phone</label>
              <input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 outline-none transition focus:border-[var(--primary)]" />
              {errors.phone && <p className="mt-2 text-xs text-red-600">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--heading)]">Email</label>
              <input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 outline-none transition focus:border-[var(--primary)]" />
              {errors.email && <p className="mt-2 text-xs text-red-600">{errors.email}</p>}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div className="sm:col-span-1">
              <label htmlFor="service" className="mb-2 block text-sm font-medium text-[var(--heading)]">Preferred Service</label>
              <select id="service" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 outline-none transition focus:border-[var(--primary)]">
                <option>General Dentistry</option>
                <option>Cosmetic Dentistry</option>
                <option>Dental Implants</option>
                <option>Restorative Dentistry</option>
                <option>Orthodontics</option>
                <option>Pediatric Dentistry</option>
                <option>Emergency Dentistry</option>
              </select>
            </div>
            <div>
              <label htmlFor="date" className="mb-2 block text-sm font-medium text-[var(--heading)]">Preferred Date</label>
              <input id="date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 outline-none transition focus:border-[var(--primary)]" />
              {errors.date && <p className="mt-2 text-xs text-red-600">{errors.date}</p>}
            </div>
            <div>
              <label htmlFor="time" className="mb-2 block text-sm font-medium text-[var(--heading)]">Preferred Time</label>
              <input id="time" type="time" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 outline-none transition focus:border-[var(--primary)]" />
              {errors.time && <p className="mt-2 text-xs text-red-600">{errors.time}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--heading)]">Message</label>
            <textarea id="message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 outline-none transition focus:border-[var(--primary)]" placeholder="Tell us a little about your goals or any concerns." />
          </div>

          <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white shadow-[0_15px_35px_rgba(17,46,74,0.18)] transition hover:-translate-y-0.5 hover:bg-[var(--primary-strong)]">
            Request Appointment
          </button>
        </form>
      )}
    </div>
  )
}
