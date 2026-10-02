import { Seo } from '../lib/seo'

export function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Seo title="Privacy Policy | Mapello Dentist" description="Privacy policy placeholder for Mapello’s dental practice website." />
      <h1 className="text-4xl font-semibold tracking-[-0.05em] text-[var(--heading)]">Privacy Policy</h1>
      <p className="mt-6 text-sm leading-8 text-[var(--muted)]">This privacy policy is a placeholder and should be reviewed and updated with the practice’s legal and compliance requirements before publication.</p>
      <div className="mt-8 space-y-5 text-sm leading-8 text-[var(--muted)]">
        <p>We respect the privacy of patients and website visitors. Information collected through the website may be used to respond to enquiries, manage appointments and provide a better patient experience.</p>
        <p>We may collect contact details, appointment information and communication preferences through forms and direct contact. This information should be used only for legitimate practice operations and in accordance with applicable legal and privacy obligations.</p>
        <p>We do not share personal information with third parties except where required for the purpose of service delivery or in accordance with legal obligations.</p>
      </div>
    </div>
  )
}
