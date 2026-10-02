import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type CTASectionProps = {
  title: string
  text: string
  buttonText?: string
  buttonLink?: string
}

export function CTASection({ title, text, buttonText = 'Book an Appointment', buttonLink = '/appointment' }: CTASectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-[32px] bg-[var(--primary)] px-6 py-10 text-white shadow-[0_20px_45px_rgba(18,49,82,0.18)] sm:px-8 lg:px-12 lg:py-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">Mapello, Dentist</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{title}</h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-blue-100">{text}</p>
          </div>
          <Link
            to={buttonLink}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--primary)] transition hover:translate-y-[-1px]"
          >
            {buttonText}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
