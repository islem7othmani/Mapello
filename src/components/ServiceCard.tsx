import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ServiceItem } from '../data/siteData'

type ServiceCardProps = {
  service: ServiceItem
}

const iconMap: Record<string, string> = {
  'shield-check': '✓',
  sparkles: '✦',
  stethoscope: '✚',
  wrench: '⚒',
  'wand-sparkles': '✧',
  smile: '☺',
  'alert-circle': '!'
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--border)] bg-white p-5 shadow-[0_18px_45px_rgba(15,38,60,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,38,60,0.08)]">
      <img
        src={service.image}
        alt={`${service.name} dental care`}
        className="mb-5 aspect-[4/3] w-full rounded-[20px] object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface)] text-lg text-[var(--primary)]">
        {iconMap[service.icon] || '•'}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-[var(--heading)]">{service.name}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.shortDescription}</p>
      <Link
        to={`/services/${service.slug}`}
        className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-[var(--primary)] transition group-hover:gap-3"
      >
        Learn More
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  )
}
