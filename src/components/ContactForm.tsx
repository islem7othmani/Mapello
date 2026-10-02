import { useState } from 'react'
import type { FormEvent } from 'react'
import { openWhatsAppMessage } from '../lib/whatsapp'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget as HTMLFormElement)

    openWhatsAppMessage([
      'Hello Mapello, I have a dental enquiry.',
      `Name: ${formData.get('name') ?? ''}`,
      `Email: ${formData.get('email') ?? ''}`,
      `Phone: ${formData.get('phone') || 'Not provided'}`,
      `Message: ${formData.get('message') ?? ''}`
    ])
    setSubmitted(true)
  }

  return (
    <div className="rounded-[32px] border border-[var(--border)] bg-white p-5 shadow-[0_18px_45px_rgba(15,38,60,0.04)] sm:p-8">
      {submitted ? (
        <div className="rounded-[24px] bg-[var(--surface)] p-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">Continue in WhatsApp</p>
          <h3 className="mt-3 text-2xl font-semibold text-[var(--heading)]">Your message is ready.</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">Review the prefilled message in WhatsApp and press Send to contact Mapello.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--heading)]">Name</label>
            <input id="name" name="name" required className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 outline-none transition focus:border-[var(--primary)]" />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--heading)]">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 outline-none transition focus:border-[var(--primary)]" />
          </div>
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[var(--heading)]">Phone</label>
            <input id="phone" name="phone" className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 outline-none transition focus:border-[var(--primary)]" />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--heading)]">Message</label>
            <textarea id="message" name="message" required rows={5} className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 outline-none transition focus:border-[var(--primary)]" />
          </div>
          <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--primary-strong)]">
            Send Message
          </button>
        </form>
      )}
    </div>
  )
}
