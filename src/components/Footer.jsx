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

        {/* Main footer grid */}
        <div className="container-pad py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Col 1 — Brand */}
            <div>
              <img src="/wakargo-logo.png" alt="WAKARGO" className="h-16 w-auto mb-4" />
              <p className="text-white/70 text-sm leading-relaxed">
                A tech-driven shipping company moving cargo by Air, Sea & Land — worldwide.
              </p>
            </div>

            {/* Col 2 — Quick Links */}
            <div>
              <p className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
                Quick Links
              </p>
              <ul className="space-y-3">
                {quickLinks.map(link => (
                  <li key={link.label}>
                    <Link to={link.href}
                      className="text-white/70 hover:text-accent text-sm transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Services */}
            <div>
              <p className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
                Our Services
              </p>
              <ul className="space-y-3">
                {services.map(s => (
                  <li key={s} className="text-white/70 text-sm">{s}</li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact */}
            <div>
              <p className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
                Get In Touch
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm">shipping@wakargo.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm">+234 810 637 0135</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm">Lagos, Nigeria</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container-pad py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
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