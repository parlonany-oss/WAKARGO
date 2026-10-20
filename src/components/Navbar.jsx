import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="container-pad flex items-center justify-between h-20">

        {/* Logo */}
        <a href="/">
          <img src="/wakargo-logo.png" alt="WAKARGO" className="h-32 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-display font-medium text-gray-700 hover:text-brand transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#track" className="text-sm font-display font-medium text-brand hover:text-brand-dark transition-colors">
            Track Shipment
          </a>
          <a href="/quote" className="btn-primary text-sm">
            Get a Quote
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-brand"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 py-4 space-y-4">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="block text-sm font-display font-medium text-gray-700 hover:text-brand py-2"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="/quote" className="btn-primary w-full justify-center mt-2">
            Get a Quote
          </a>
        </div>
      )}
    </header>
  )
}