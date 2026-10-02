import { Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { clinicInfo } from '../data/siteData'
import logo from '../assets/logo mapello.jpeg'

const footerNav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'The Dentist', to: '/about' },
  { label: 'Technology', to: '/technology' },
  { label: 'Results', to: '/results' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' }
]

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[var(--primary)] shadow-sm">
                <img src={logo} alt="" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="text-xl font-semibold text-[var(--heading)]">Mapello</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)]">
              Dental care from Mapello, a dentist from Canada, with a focus on clear communication and individual care.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={`https://wa.me/${clinicInfo.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--heading)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href={`mailto:${clinicInfo.email}`} aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--heading)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--heading)]">Navigation</h3>
            <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition hover:text-[var(--primary)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--heading)]">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-[var(--muted)]">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[var(--primary)]" />
                <a href={`tel:${clinicInfo.phoneLink}`}>{clinicInfo.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[var(--primary)]" />
                <a href={`mailto:${clinicInfo.email}`}>{clinicInfo.email}</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--primary)]" />
                <span>{clinicInfo.address}</span>
              </li>
              <li className="flex gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 text-[var(--primary)]" />
                <span>{clinicInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="hover:text-[var(--primary)]">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[var(--primary)]">Terms & Conditions</Link>
          </div>
          <p>© 2026 Mapello. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
