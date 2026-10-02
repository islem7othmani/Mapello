import { useState } from 'react'
import { CTASection } from '../components/CTASection'
import { Lightbox } from '../components/Lightbox'
import { SectionHeading } from '../components/SectionHeading'
import { resultGallery, resultsCategories } from '../data/siteData'
import { Seo } from '../lib/seo'

export function ResultsPage() {
  const [filter, setFilter] = useState<(typeof resultsCategories)[number]>('All')
  const [selected, setSelected] = useState<(typeof resultGallery)[number] | null>(null)

  const filtered = filter === 'All' ? resultGallery : resultGallery.filter((item) => item.category === filter)

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Seo title="Dental Results | Mapello, Dentist in Canada" description="Explore example cosmetic and restorative dental cases. Any patient images must be authorized before publication." />

      <SectionHeading
        eyebrow="Before & after"
        title="Smile transformations with careful planning and thoughtful care."
        text="These gallery images are placeholders. We recommend replacing them only with properly authorized patient cases and fully approved clinical content."
      />

      <div className="mt-8 flex flex-wrap gap-3">
        {resultsCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === category ? 'bg-[var(--primary)] text-white' : 'border border-[var(--border)] bg-white text-[var(--heading)]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <button key={item.title} type="button" onClick={() => setSelected(item)} className="group overflow-hidden rounded-[28px] text-left">
            <div className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-white shadow-[0_18px_45px_rgba(15,38,60,0.04)]">
              <img src={item.image} alt={item.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{item.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-[var(--heading)]">{item.title}</h3>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-20">
        <CTASection title="Looking for a smile solution that fits your goals?" text="Schedule a consultation to discuss treatment options and design a plan that suits your needs." />
      </div>

      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
