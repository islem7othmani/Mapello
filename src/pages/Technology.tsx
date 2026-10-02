import { SectionHeading } from '../components/SectionHeading'
import { technologyFeatures } from '../data/siteData'
import { Seo } from '../lib/seo'

export function TechnologyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Seo title="Dental Technology | Mapello, Dentist in Canada" description="Learn how diagnostic tools and digital workflows may support dental assessment and treatment planning with Mapello." />

      <SectionHeading
        eyebrow="Technology"
        title="Modern tools designed to support more precise, comfortable treatment."
        text="Mapello uses appropriate diagnostic tools and digital workflows to support clear conversations about dental care and treatment options."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {technologyFeatures.map((feature) => (
          <article key={feature.title} className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-white shadow-[0_18px_45px_rgba(15,38,60,0.04)]">
            <img src={feature.image} alt={feature.title} className="h-56 w-full object-cover" loading="lazy" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[var(--heading)]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
