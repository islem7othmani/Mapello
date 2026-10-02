import { FAQItem } from '../components/FAQItem'
import { SectionHeading } from '../components/SectionHeading'
import { faqEntries } from '../data/siteData'
import { Seo } from '../lib/seo'

export function FAQPage() {
  const categories = Array.from(new Set(faqEntries.map((item) => item.category)))

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Seo title="Dental Care FAQs | Mapello, Dentist in Canada" description="Answers to common questions about dental appointments, implants, cosmetic dentistry and general dental care with Mapello." />

      <SectionHeading eyebrow="FAQ" title="Questions patients often ask before treatment." text="Helpful answers and guidance to support informed care decisions." />

      <div className="mt-12 space-y-8">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="mb-5 text-xl font-semibold text-[var(--heading)]">{category}</h3>
            <div className="space-y-4">
              {faqEntries.filter((item) => item.category === category).map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
