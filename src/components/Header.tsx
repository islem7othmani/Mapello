import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { clinicInfo } from '../data/siteData'
import logo from "../assets/logo mapello.jpeg"; // rename the file, no spaces

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'The Dentist', to: '/about' },
  { label: 'Technology', to: '/technology' },
  { label: 'Results', to: '/results' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' }
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-[var(--border)] bg-[rgba(247,249,250,0.93)] backdrop-blur-xl' : 'bg-[var(--bg)]'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

<Link to="/" className="flex items-center gap-3" aria-label="Mapello home">
  <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[var(--primary)] shadow-sm">
    <img src={logo} alt="" className="h-full w-full object-cover" />
  </div>
  <span className="text-lg font-semibold tracking-tight text-[var(--heading)]">
    Mapello
  </span>
</Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-[var(--primary)]' : 'text-[var(--muted)] hover:text-[var(--heading)]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${clinicInfo.phoneLink}`}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--heading)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            <Phone className="h-4 w-4" />
            {clinicInfo.phone}
          </a>
          <Link
            to="/appointment"
            className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(17,46,74,0.18)] transition hover:-translate-y-0.5 hover:bg-[var(--primary-strong)]"
          >
            Book an Appointment
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--heading)] lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-3 py-3 text-base font-medium ${
                    isActive ? 'bg-[var(--surface)] text-[var(--primary)]' : 'text-[var(--heading)]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/appointment"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-5 py-3 text-base font-medium text-white"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
