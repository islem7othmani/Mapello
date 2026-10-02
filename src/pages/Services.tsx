import { CTASection } from '../components/CTASection'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceCard } from '../components/ServiceCard'
import { services } from '../data/siteData'
import { Seo } from '../lib/seo'

export function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Seo title="Dental Services | Mapello, Dentist in Canada" description="Explore preventive, cosmetic, restorative, implant and orthodontic dental care offered by Mapello." />

      <SectionHeading
        eyebrow="Services"
        title="Comprehensive dental care designed around your needs."
        text="Explore preventive, restorative and cosmetic dental services. Mapello will discuss suitable care options based on your needs and goals."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      <div className="mt-20">
        <CTASection
          title="Need help choosing the right treatment?"
          text="Book a consultation and we will guide you toward a plan that suits your goals, timeline and comfort level."
        />
      </div>
    </div>
  )
}
