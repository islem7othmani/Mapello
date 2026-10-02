import { ReviewCard } from '../components/ReviewCard'
import { SectionHeading } from '../components/SectionHeading'
import { reviews } from '../data/siteData'
import { Seo } from '../lib/seo'

export function ReviewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Seo title="Patient Reviews | Mapello, Dentist in Canada" description="Review examples for Mapello. Placeholder testimonials must be replaced with verified, authorized patient feedback before publication." />

      <SectionHeading
        eyebrow="Reviews"
        title="Thoughtful care experiences, shared with care."
        text="These review examples are clearly placeholders and should be replaced with approved patient feedback once available."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>
    </div>
  )
}
