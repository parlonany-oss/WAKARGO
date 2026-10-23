import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const services = [
  'Ship Abroad',
  'Imports',
  'Exports',
  'Customs Clearing',
  'Freight Forwarding',
]

const socials = [
  { href: 'https://www.linkedin.com/company/wakargo-plc/', label: 'LinkedIn' },
  { href: 'https://www.instagram.com/shipwithwakargo', label: 'Instagram' },
  { href: 'https://x.com/Wakargoshipping', label: 'X' },
  { href: 'https://www.facebook.com/share/1c7Y4roRx3/', label: 'Facebook' },
  { href: 'https://youtube.com/@wakargoshippingpodcast', label: 'YouTube' },
]

const SocialIcon = ({ label }) => {
  if (label === 'LinkedIn') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
  if (label === 'Instagram') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
  if (label === 'X') return (
    <span className="text-sm font-bold leading-none">𝕏</span>
  )
  if (label === 'Facebook') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
  if (label === 'YouTube') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
    </svg>
  )
  return null
}

export default function Footer() {
  return (
    <footer
      className="text-white relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-brand/90" />
      <div className="relative z-10">

        <div className="container-pad py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 items-start">

            <div className="lg:col-span-1">
              <img src="/wakargo-logo.png" alt="WAKARGO" className="h-16 md:h-20 w-auto mb-1" />
              <p className="text-white/70 text-sm leading-snug max-w-xs">
                A tech-driven shipping company moving cargo by Air, Sea & Land — worldwide.
              </p>
            </div>

            <div>
              <p className="font-display font-semibold text-white text-xs uppercase tracking-widest mb-4">
                Quick Links
              </p>
              <ul className="space-y-3">
                {quickLinks.map(link => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-white/70 hover:text-accent text-sm transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-display font-semibold text-white text-xs uppercase tracking-widest mb-4">
                Our Services
              </p>
              <ul className="space-y-3">
                {services.map(s => (
                  <li key={s} className="text-white/70 text-sm">{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-display font-semibold text-white text-xs uppercase tracking-widest mb-4">
                Get In Touch
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail size={15} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm">shipping@wakargo.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={15} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm whitespace-nowrap">+234 810 637 0135</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm">Lagos, Nigeria</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-pad py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-xs">Follow us</p>
            <div className="flex items-center gap-5">
              {socials.map(({ href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/50 hover:text-accent transition-colors duration-200">
                  <SocialIcon label={label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-pad py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-white/50 text-xs">
              © {new Date().getFullYear()} WAKARGO. All rights reserved.
            </p>
            <p className="text-white/50 text-xs">
              Shipping Happiness to Your Doorstep
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
