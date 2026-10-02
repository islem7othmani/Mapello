import { SectionHeading } from '../components/SectionHeading'
import { Seo } from '../lib/seo'
import about from '../assets/hero-image.png'
export function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Seo title="About Mapello | Dentist in Canada" description="Meet Mapello, a dentist from Canada. Learn about his one-to-one approach to dental care and treatment planning." />

      <SectionHeading eyebrow="About the dentist" title="Personal dental care from Mapello." text="Mapello is a dentist from Canada. This is a single-dentist practice, so your care is centered on one dentist from consultation through treatment planning." />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-white p-2 shadow-[0_20px_50px_rgba(15,38,60,0.04)]">
          <img src={about} alt="Modern dental treatment room" className="h-[420px] w-full rounded-[28px] object-cover" loading="lazy" />
        </div>
        <div className="space-y-5 text-[var(--muted)]">
          <p className="text-base leading-8">Mapello is a dentist from Canada who provides dental care as an individual practitioner. He takes time to understand each patient's concerns and explain care options clearly.</p>
          <p className="text-base leading-8">From preventive visits to treatment planning, patients work directly with Mapello. Information about his specific credentials and experience can be added here when confirmed.</p>
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[
          { title: 'Prevention and education', text: 'Mapello discusses preventive care and practical ways to support oral health over time.' },
          { title: 'Care from one dentist', text: 'Patients speak directly with Mapello about their concerns, treatment options and care plan.' },
          { title: 'Modern dentistry', text: 'Dental care options are discussed with attention to each patient’s needs and goals.' },
        ].map((item) => (
          <div key={item.title} className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[0_18px_45px_rgba(15,38,60,0.04)]">
            <h3 className="text-xl font-semibold text-[var(--heading)]">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
