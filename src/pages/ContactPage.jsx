import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactDetails = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'shipping@wakargo.com',
    sub: 'We respond within 24 hours',
    href: 'mailto:shipping@wakargo.com',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+234 810 637 0135',
    sub: 'Mon – Sat, 8am – 6pm',
    href: 'tel:+2348106370135',
  },
  {
    icon: MapPin,
    label: 'Our Office',
    value: 'Lagos, Nigeria',
    sub: 'Serving clients worldwide',
    href: null,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Sat',
    sub: '8:00 AM – 6:00 PM WAT',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <div className="bg-white">

      {/* Page header */}
      <div className="bg-offwhite border-b border-border py-14">
        <div className="container-pad">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Reach Out
          </p>
          <h1 className="font-display font-bold text-gray-900 leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
            Contact Us
          </h1>
          <p className="text-muted font-body text-base mt-3 max-w-lg">
            Have a shipment in mind or a question about our services? We're here to help.
          </p>
        </div>
      </div>

      <div className="container-pad py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — contact cards */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {contactDetails.map(({ icon: Icon, label, value, sub, href }) => (
                <div key={label} className="border border-border rounded-xl p-6 hover:border-brand/30 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 rounded-lg bg-brand/8 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-brand" />
                  </div>
                  <p className="font-display font-semibold text-gray-900 text-sm mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="font-body text-brand text-sm hover:text-accent transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="font-body text-gray-800 text-sm">{value}</p>
                  )}
                  <p className="text-muted text-xs mt-1">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — quick message form */}
          <div>
            <h2 className="font-display font-bold text-gray-900 text-xl mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-display font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input type="text" placeholder="John Doe"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm font-body text-gray-900 focus:outline-none focus:border-brand transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-display font-medium text-gray-700 mb-1.5">Email</label>
                  <input type="email" placeholder="john@example.com"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm font-body text-gray-900 focus:outline-none focus:border-brand transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-display font-medium text-gray-700 mb-1.5">Subject</label>
                <input type="text" placeholder="What's this about?"
                  className="w-full border border-border rounded-lg px-4 py-3 text-sm font-body text-gray-900 focus:outline-none focus:border-brand transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-display font-medium text-gray-700 mb-1.5">Message</label>
                <textarea rows={5} placeholder="Tell us how we can help..."
                  className="w-full border border-border rounded-lg px-4 py-3 text-sm font-body text-gray-900 focus:outline-none focus:border-brand transition-colors resize-none" />
              </div>
              <button type="submit"
                className="w-full bg-brand hover:bg-brand-dark text-white font-display font-semibold py-4 rounded-lg transition-colors duration-200">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}