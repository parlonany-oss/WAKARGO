import { useState } from 'react'
import { Search, Package, Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const carriers = [
  { name: 'DHL', color: '#FFCC00', bg: '#D40511' },
  { name: 'FedEx', color: '#FF6600', bg: '#4D148C' },
  { name: 'UPS', color: '#FFB500', bg: '#351C15' },
  { name: 'Aramex', color: '#ffffff', bg: '#E2231A' },
]

const steps = [
  { step: '01', title: 'Find Your Reference', desc: 'Check your email or WhatsApp for your WAKARGO reference number (format: WKG-000001).' },
  { step: '02', title: 'Enter It Below', desc: 'Type your reference number in the search box and submit.' },
  { step: '03', title: 'Get Your Update', desc: 'We\'ll show your shipment status or connect you with your carrier\'s tracking link.' },
]

export default function Tracking() {
  const [ref, setRef] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (ref.trim()) setSubmitted(true)
  }

  const whatsappUrl = `https://wa.me/2348106370135?text=Hello%20WAKARGO%2C%20I%20would%20like%20to%20track%20my%20shipment.%20My%20reference%20number%20is%20${encodeURIComponent(ref || '...')}`

  return (
    <div>
      {/* Hero */}
<div
  className="relative text-white py-20 px-6 text-center"
  style={{
    backgroundImage: 'url(/Images/box.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute inset-0 bg-brand/85" />
  <div className="relative z-10">
    <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
      Shipment Tracking
    </p>
    <h1 className="font-display font-bold leading-tight mb-5"
      style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
      Where Is My Shipment?
    </h1>
    <p className="text-white/75 font-body text-base max-w-xl mx-auto">
      Enter your WAKARGO reference number below to get your shipment status.
    </p>
  </div>
</div>

      {/* Search */}
      <div className="bg-offwhite py-16 px-6">
        <div className="max-w-xl mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={ref}
                onChange={e => setRef(e.target.value)}
                placeholder="e.g. WKG-000003"
                className="flex-1 border border-border rounded-md px-4 py-3 font-body text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-display font-semibold px-6 py-3 rounded-md transition-colors duration-200"
              >
                <Search size={16} /> Track
              </button>
            </form>
          ) : (
            <div className="bg-white rounded-xl border border-border p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4">
                <Package size={28} className="text-brand" />
              </div>
              <p className="font-display font-bold text-gray-900 text-lg mb-2">
                Reference: {ref.toUpperCase()}
              </p>
              <p className="font-body text-sm text-muted mb-6">
                Our team will send you your carrier tracking link via WhatsApp or email.
                Click below to get an instant update.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-display font-semibold px-8 py-3 rounded-md transition-colors duration-200 mb-4"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
              <br />
              <button
                onClick={() => { setSubmitted(false); setRef('') }}
                className="text-sm text-muted hover:text-brand font-body mt-3 underline"
              >
                Search another reference
              </button>
            </div>
          )}

          <p className="text-center text-muted text-xs font-body mt-4">
            Don't have a reference number?{' '}
            <a
              href="https://wa.me/2348106370135"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Contact us on WhatsApp
            </a>
          </p>
        </div>
      </div>

      {/* How to Track */}
      <div className="py-16 bg-white">
        <div className="container-pad">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="font-display font-bold text-gray-900 mb-10"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Tracking Your Shipment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                  <span className="font-display font-bold text-brand text-sm">{step}</span>
                </div>
                <h3 className="font-display font-semibold text-gray-900 text-base">{title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carrier Partners */}
      <div className="py-16 bg-offwhite">
        <div className="container-pad text-center">
          <p className="font-display font-semibold text-gray-500 text-xs uppercase tracking-widest mb-8">
            Carrier Partners
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {carriers.map(({ name, color, bg }) => (
              <div
                key={name}
                className="px-8 py-4 rounded-xl font-display font-bold text-lg"
                style={{ backgroundColor: bg, color }}
              >
                {name}
              </div>
            ))}
          </div>
          <p className="text-muted font-body text-sm mt-6">
            We ship with leading global carriers. Your tracking link is sent directly to you once your shipment is dispatched.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-brand text-white text-center">
        <div className="container-pad">
          <h2 className="font-display font-bold mb-4"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Need Help With Your Shipment?
          </h2>
          <p className="text-white/75 font-body text-base mb-8 max-w-xl mx-auto">
            Our team is available to assist you with tracking, delivery updates, and any shipment concerns.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/2348106370135"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-display font-semibold px-8 py-4 rounded-md transition-colors duration-200"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            <Link to="/quote"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-display font-semibold px-8 py-4 rounded-md transition-colors duration-200">
              Start a New Shipment <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}