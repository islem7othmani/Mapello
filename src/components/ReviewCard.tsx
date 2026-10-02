import { Star } from 'lucide-react'
import type { Review } from '../data/siteData'

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full flex-col rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[0_18px_45px_rgba(15,38,60,0.04)]">
      <div className="flex items-center gap-1 text-[var(--primary)]">
        {Array.from({ length: review.rating }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-5 text-base leading-8 text-[var(--heading)]">“{review.review}”</p>
      <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-4">
        <div>
          <p className="font-semibold text-[var(--heading)]">{review.name}</p>
          <p className="text-sm text-[var(--muted)]">{review.treatment}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface)] text-sm font-semibold text-[var(--primary)]">
          {review.initials}
        </div>
      </div>
    </article>
  )
}
