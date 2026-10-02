import { ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { FAQItem } from '../components/FAQItem'
import { SectionHeading } from '../components/SectionHeading'
import { services } from '../data/siteData'
import { Seo } from '../lib/seo'

export function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">Service not found</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--heading)]">This treatment page isn’t available.</h1>
        <Link to="/services" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white">
          Back to services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Seo title={`${service.name} | Mapello, Dentist in Canada`} description={`${service.description} Learn about this dental treatment and requesting an appointment with Mapello.`} />

      <div className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-white shadow-[0_20px_50px_rgba(15,38,60,0.04)]">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <img src={service.image} alt={service.name} className="h-full min-h-[360px] w-full object-cover" />
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">Treatment</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--heading)]">{service.name}</h1>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">{service.intro}</p>
            <Link to="/appointment" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white">
              Book an Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[var(--heading)]">Who the treatment is for</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)]">
            {service.forWho.map((item) => (
              <li key={item} className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[var(--heading)]">Benefits</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)]">
            {service.benefits.map((item) => (
              <li key={item} className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[var(--heading)]">The treatment process</h2>
          <ol className="mt-5 space-y-4 text-sm leading-7 text-[var(--muted)]">
            {service.process.map((step, index) => (
              <li key={step} className="flex gap-3"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--surface)] text-xs font-semibold text-[var(--primary)]">{index + 1}</span>{step}</li>
            ))}
          </ol>
        </div>

        <div className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[var(--heading)]">What to expect</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)]">
            {service.expect.map((item) => (
              <li key={item} className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-8 space-y-4">
          {service.faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      <div className="mt-20 rounded-[32px] bg-[var(--primary)] p-8 text-white shadow-[0_20px_45px_rgba(18,49,82,0.18)] lg:p-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">Book a consultation</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">Ready to explore {service.name.toLowerCase()}?</h2>
          </div>
          <Link to="/appointment" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--primary)]">
            Book an Appointment
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
