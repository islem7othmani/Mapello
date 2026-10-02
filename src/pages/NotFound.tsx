import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../lib/seo'

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <Seo title="Page not found | Mapello Dentist" description="The page you were looking for could not be found." />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">404 Error</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-[var(--heading)]">This page could not be found.</h1>
      <p className="mt-6 text-base leading-8 text-[var(--muted)]">The page you’re looking for may have moved or no longer exists. Return to the homepage to learn more about Mapello’s dental care.</p>
      <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white">
        <ArrowLeft className="h-4 w-4" />
        Return home
      </Link>
    </div>
  )
}
