import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const serviceTypes = [
  'Ship Abroad (Diaspora)',
  'Import – Vehicles & Tyres',
  'Import – General Cargo',
  'Import – Heavy Duty Equipment',
  'Export – Food & Agricultural Products',
  'Export – Local Content',
  'Customs Clearing',
  'Freight Forwarding',
]

const modes = ['Air', 'Sea', 'Land', 'Not Sure – Advise Me']

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '',
    serviceType: '', mode: '',
    origin: '', destination: '',
    cargoDesc: '', weight: '', dimensions: '',
    notes: '',
  })

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Backend will be wired here
    console.log('Quote request:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-white">
        <div className="text-center max-w-md px-6">
          <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} className="text-brand" />
          </div>
          <h2 className="font-display font-bold text-gray-900 text-2xl mb-3">Quote Request Received</h2>
          <p className="text-muted font-body text-base leading-relaxed mb-8">
            Thank you! We've received your shipment details and will send you a quote within 24 hours.
          </p>
          <a href="/" className="inline-flex items-center gap-2 bg-brand text-white font-display font-semibold px-8 py-4 rounded-md hover:bg-brand-dark transition-colors">
            Back to Home <ArrowRight size={16} />
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">

      {/* Page header */}
      <div className="bg-offwhite border-b border-border py-14">
        <div className="container-pad">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Let's Move Your Cargo
          </p>
          <h1 className="font-display font-bold text-gray-900 leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
            Get a Quote
          </h1>
          <p className="text-muted font-body text-base mt-3 max-w-lg">
            Fill in the details below and we'll get back to you with a clear, no-hidden-fees quote.
          </p>
        </div>
      </div>

      <div className="container-pad py-16">
        <div className="max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* Section 1 — Contact Info */}
            <div>
              <h2 className="font-display font-semibold text-gray-900 text-base mb-5 pb-3 border-b border-border">
                1. Your Contact Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-display font-medium text-gray-700 mb-1.5">Full Name *</label>
                  <input required name="fullName" value={form.fullName} onChange={handleChange}
                    type="text" placeholder="John Doe"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm font-body focus:outline-none focus:border-brand transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-display font-medium text-gray-700 mb-1.5">Email Address *</label>
                  <input required name="email" value={form.email} onChange={handleChange}
                    type="email" placeholder="john@example.com"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm font-body focus:outline-none focus:border-brand transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-display font-medium text-gray-700 mb-1.5">Phone Number *</label>
                  <input required name="phone" value={form.phone} onChange={handleChange}
                    type="tel" placeholder="+234 000 000 0000"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm font-body focus:outline-none focus:border-brand transition-colors" />
                </div>
              </div>
            </div>

            {/* Section 2 — Service */}
            <div>
              <h2 className="font-display font-semibold text-gray-900 text-base mb-5 pb-3 border-b border-border">
                2. Service Type
              </h2>
              <div>
                <label className="block text-sm font-display font-medium text-gray-700 mb-1.5">What do you need? *</label>
                <select required name="serviceType" value={form.serviceType} onChange={handleChange}
                  className="w-full border border-border rounded-lg px-4 py-3 text-sm font-body focus:outline-none focus:border-brand transition-colors bg-white">
                  <option value="">Select a service</option>
                  {serviceTypes.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-display font-medium text-gray-700 mb-3">Preferred Mode of Transport *</label>
                <div className="flex flex-wrap gap-3">
                  {modes.map(m => (
                    <button key={m} type="button"
                      onClick={() => setForm(prev => ({ ...prev, mode: m }))}
                      className={`px-5 py-2.5 rounded-lg border text-sm font-display font-medium transition-colors
                        ${form.mode === m
                          ? 'bg-brand text-white border-brand'
                          : 'bg-white text-gray-700 border-border hover:border-brand/40'}`}>
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3 — Shipment Details */}
            <div>
              <h2 className="font-display font-semibold text-gray-900 text-base mb-5 pb-3 border-b border-border">
                3. Shipment Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-display font-medium text-gray-700 mb-1.5">Origin (Country / City) *</label>
                  <input required name="origin" value={form.origin} onChange={handleChange}
                    type="text" placeholder="e.g. London, UK"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm font-body focus:outline-none focus:border-brand transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-display font-medium text-gray-700 mb-1.5">Destination (Country / City) *</label>
                  <input required name="destination" value={form.destination} onChange={handleChange}
                    type="text" placeholder="e.g. Lagos, Nigeria"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm font-body focus:outline-none focus:border-brand transition-colors" />
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-display font-medium text-gray-700 mb-1.5">Cargo Description *</label>
                <textarea required name="cargoDesc" value={form.cargoDesc} onChange={handleChange}
                  rows={3} placeholder="Describe what you're shipping — e.g. 2 Toyota Camry vehicles, used"
                  className="w-full border border-border rounded-lg px-4 py-3 text-sm font-body focus:outline-none focus:border-brand transition-colors resize-none" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <div>
                  <label className="block text-sm font-display font-medium text-gray-700 mb-1.5">Estimated Weight (kg)</label>
                  <input name="weight" value={form.weight} onChange={handleChange}
                    type="text" placeholder="e.g. 500kg"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm font-body focus:outline-none focus:border-brand transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-display font-medium text-gray-700 mb-1.5">Dimensions (L × W × H)</label>
                  <input name="dimensions" value={form.dimensions} onChange={handleChange}
                    type="text" placeholder="e.g. 120 × 80 × 100 cm"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm font-body focus:outline-none focus:border-brand transition-colors" />
                </div>
              </div>
            </div>

            {/* Section 4 — Additional Notes */}
            <div>
              <h2 className="font-display font-semibold text-gray-900 text-base mb-5 pb-3 border-b border-border">
                4. Additional Notes
              </h2>
              <textarea name="notes" value={form.notes} onChange={handleChange}
                rows={4} placeholder="Any special instructions, delivery timeline, or questions for our team..."
                className="w-full border border-border rounded-lg px-4 py-3 text-sm font-body focus:outline-none focus:border-brand transition-colors resize-none" />
            </div>

            <button type="submit"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-display font-semibold px-10 py-4 rounded-md transition-colors duration-200">
              Submit Quote Request <ArrowRight size={18} />
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}