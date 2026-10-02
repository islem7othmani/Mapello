import { ArrowRight, BadgeCheck, CalendarDays, Clock3, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CTASection } from '../components/CTASection'
import { ReviewCard } from '../components/ReviewCard'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceCard } from '../components/ServiceCard'
import { TrustBar } from '../components/TrustBar'
import { reviews, services } from '../data/siteData'
import { Seo } from '../lib/seo'
import heroImage from '../assets/hero-image.png'
import whyMapelloImage from '../assets/why mapello.jpeg'

export function Home() {
  const featuredServices = services.slice(0, 6)
  const featuredReviews = reviews.slice(0, 3)

  return (
    <>
      <Seo title="Mapello | Dentist in Canada | General & Cosmetic Dentistry" description="Looking for a dentist in Canada? Mapello offers general, cosmetic and restorative dental care with one-to-one appointments." />

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">Dental care in Canada</p>
            <h1 className="mt-4 max-w-xl text-5xl font-semibold tracking-[-0.06em] text-[var(--heading)] sm:text-6xl">
              Personalized Dental Care in Canada, Centered on You.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Mapello provides general, cosmetic and restorative dentistry with care planned around your oral health needs and goals.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/appointment" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-medium text-white shadow-[0_15px_35px_rgba(17,46,74,0.18)] transition hover:-translate-y-0.5 hover:bg-[var(--primary-strong)]">
                Book an Appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-white px-6 py-3.5 text-sm font-medium text-[var(--heading)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]">
                Explore Our Services
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-[var(--muted)]">
              <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-[var(--primary)]" /> Calm and welcoming care</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[var(--primary)]" /> Modern clinical standards</div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-white p-2 shadow-[0_30px_70px_rgba(18,39,58,0.10)]">
              <img
                src={heroImage}
                alt="Dental care from Mapello"
                className="h-[540px] w-full rounded-[28px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 rounded-2xl border border-[var(--border)] bg-white p-4 shadow-[0_20px_45px_rgba(15,38,60,0.08)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--primary)]">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Flexible scheduling</p>
                  <p className="text-sm font-medium text-[var(--heading)]">Appointments available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TrustBar />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Dental services"
          title="Explore dental treatments for prevention, restoration and smile care."
          text="From routine dental exams and preventive care to cosmetic and restorative treatments, explore dental services available from Mapello in Canada."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-white p-2 shadow-[0_20px_50px_rgba(15,38,60,0.04)]">
              <img
                src={whyMapelloImage}
                alt="Modern dental treatment room"
                className="h-[420px] w-full rounded-[28px] object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <SectionHeading
                eyebrow="About Mapello"
                title="A thoughtful approach to modern dentistry."
                text="Discuss your dental concerns and goals directly with Mapello, and learn about care options suited to your needs."
              />
              <div className="mt-8 space-y-4">
                <div className="flex gap-4 rounded-[24px] border border-[var(--border)] bg-white p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface)] text-[var(--primary)]"><Clock3 className="h-5 w-5" /></div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--heading)]">Patient-first planning</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">Every visit begins with listening, understanding your goals and building a clear plan that fits your needs.</p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-[24px] border border-[var(--border)] bg-white p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface)] text-[var(--primary)]"><ShieldCheck className="h-5 w-5" /></div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--heading)]">Modern clinical care</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">Technology supports thoughtful treatment decisions, smoother workflows and a more confident patient experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Patient feedback" title="Reviews of the Mapello dental experience." center />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      </section>

      <div className="pb-20 pt-20">
        <CTASection
          title="Looking for a dentist in Canada?"
          text="Request an appointment with Mapello to discuss your dental care needs, treatment options and next steps."
        />
      </div>
    </>
  )
}
