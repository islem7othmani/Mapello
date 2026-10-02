import { Seo } from '../lib/seo'

export function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Seo title="Terms & Conditions | Mapello Dentist" description="Terms and conditions placeholder for Mapello’s dental practice website." />
      <h1 className="text-4xl font-semibold tracking-[-0.05em] text-[var(--heading)]">Terms & Conditions</h1>
      <p className="mt-6 text-sm leading-8 text-[var(--muted)]">This terms and conditions document is a placeholder and should be updated with final practice policy and legal requirements before launch.</p>
      <div className="mt-8 space-y-5 text-sm leading-8 text-[var(--muted)]">
        <p>These terms govern website access and use. Information on the website is provided for general guidance and should not replace professional dental advice or in-person consultation.</p>
        <p>Appointments, treatments and care plans are subject to clinical review, availability and practice policy. The website does not provide medical diagnosis or replace the clinician-patient relationship.</p>
        <p>By using the website, you agree to use the information responsibly and understand that not all treatments are appropriate for every patient.</p>
      </div>
    </div>
  )
}
