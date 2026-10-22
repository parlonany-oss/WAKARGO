import { ArrowRight, Package, Clock, Shield, MapPin, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const destinations = [
  { country: 'United Kingdom', flag: '🇬🇧', shipments: 'Multiple shipments' },
  { country: 'United States', flag: '🇺🇸', shipments: 'Multiple shipments' },
  { country: 'Germany', flag: '🇩🇪', shipments: 'Multiple shipments' },
  { country: 'Ireland', flag: '🇮🇪', shipments: 'Multiple shipments' },
  { country: 'Canada', flag: '🇨🇦', shipments: 'Multiple shipments' },
  { country: 'UAE', flag: '🇦🇪', shipments: 'Multiple shipments' },
  { country: 'Zambia', flag: '🇿🇲', shipments: 'Multiple shipments' },
  { country: 'Worldwide', flag: '🌍', shipments: '50+ shipments total' },
]

const whatWeShip = [
  'Clothes & Fashion Items',
  'Food & Nigerian Provisions',
  'Skincare & Cosmetics',
  'Documents & Parcels',
  'Personal Effects',
  'Gifts & Care Packages',
  'Electronics & Gadgets',
  'Business Goods',
]

const howItWorks = [
  {
    step: '01',
    title: 'Tell Us What You\'re Sending',
    desc: 'Share the contents, destination, and receiver\'s address. We\'ll confirm eligibility and give you a quote.',
  },
  {
    step: '02',
    title: 'Pack & Drop Off',
    desc: 'Pack your items or let us help. Drop off at our location in Agbara, Lagos or arrange a pickup.',
  },
  {
    step: '03',
    title: 'We Weigh & Document',
    desc: 'We weigh your package, prepare all shipping documentation, and handle customs requirements.',
  },
  {
    step: '04',
    title: 'Your Package Ships',
    desc: 'Your shipment moves by air to the destination country — tracked every step of the way.',
  },
  {
    step: '05',
    title: 'Delivered to the Door',
    desc: 'Your receiver gets the package delivered to their address. We confirm delivery with you.',
  },
]

const recentShipments = [
  {
    route: 'Lagos → Berlin, Germany',
    cargo: 'Clothes & Personal Items',
    mode: 'Air',
    date: 'Feb 2026',
  },
  {
    route: 'Lagos → United States',
    cargo: 'Clothing',
    mode: 'Air',
    date: 'Apr 2026',
  },
  {
    route: 'Lagos → United Kingdom',
    cargo: 'Documents',
    mode: 'Air',
    date: 'May 2026',
  },
  {
    route: 'Lagos → Dublin, Ireland',
    cargo: 'Crayfish, Ogbono, Skincare & Personal Effects',
    mode: 'Air',
    date: 'Jun 2026',
  },
  {
    route: 'Lagos → United Kingdom',
    cargo: 'Styled Clothing',
    mode: 'Air',
    date: 'Jul 2026',
  },
]

const whyWakargo = [
  { icon: Package, title: 'Any Item, Any Size', desc: 'From documents to large boxes — we handle all sizes and cargo types.' },
  { icon: Clock, title: 'Air & Sea Shipping', desc: 'We ship by air for speed or sea for cost-efficiency — whichever works best for your cargo and budget.' },
  { icon: Shield, title: 'Safe & Insured', desc: 'Every shipment is carefully handled, documented, and tracked from pickup to delivery.' },
  { icon: MapPin, title: 'Worldwide Delivery', desc: 'We ship to addresses across Europe, North America, Asia, the Middle East and beyond.' },
]

export default function ShipAbroad() {
  return (
    <div>
      {/* Hero */}
      <div
        className="relative text-white py-20 px-6"
        style={{
          backgroundImage: 'url(/Images/box.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-brand/85" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Diaspora Shipping
          </p>
          <h1 className="font-display font-bold leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Send Anything —<br />From Nigeria to the World
          </h1>
          <p className="text-white/80 font-body text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Clothes, food, documents, personal effects — we pack it, ship it by air or sea,
            and deliver it to your loved ones abroad. Simple, safe, and stress-free.
          </p>
          <Link to="/quote"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-display font-semibold px-8 py-4 rounded-md transition-colors duration-200">
            Ship Something <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Where We've Delivered */}
      <div className="py-16 bg-white">
        <div className="container-pad">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Where We've Delivered
          </p>
          <h2 className="font-display font-bold text-gray-900 mb-10"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Real Shipments. Real Destinations.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
            {destinations.map(({ country, flag, shipments }) => (
              <div key={country} className="bg-offwhite rounded-xl border border-border p-5 text-center">
                <p className="text-3xl mb-2">{flag}</p>
                <p className="font-display font-semibold text-gray-900 text-sm">{country}</p>
                <p className="font-body text-xs text-muted mt-0.5">{shipments}</p>
              </div>
            ))}
          </div>

          {/* Recent Shipments Table */}
          <p className="font-display font-semibold text-gray-500 text-xs uppercase tracking-widest mb-5">
            Recent Shipments
          </p>
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-offwhite border-b border-border">
                <tr>
                  <th className="text-left font-display font-semibold text-gray-600 text-xs px-5 py-3">Route</th>
                  <th className="text-left font-display font-semibold text-gray-600 text-xs px-5 py-3 hidden sm:table-cell">Cargo</th>
                  <th className="text-left font-display font-semibold text-gray-600 text-xs px-5 py-3 hidden md:table-cell">Mode</th>
                  <th className="text-left font-display font-semibold text-gray-600 text-xs px-5 py-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentShipments.map(({ route, cargo, mode, date }, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-offwhite/50'}>
                    <td className="font-body text-gray-900 text-xs px-5 py-3">{route}</td>
                    <td className="font-body text-muted text-xs px-5 py-3 hidden sm:table-cell">{cargo}</td>
                    <td className="font-body text-xs px-5 py-3 hidden md:table-cell">
                      <span className="bg-brand/10 text-brand px-2 py-0.5 rounded-full text-xs font-display font-medium">{mode}</span>
                    </td>
                    <td className="font-body text-muted text-xs px-5 py-3">{date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* What We Ship */}
      <div className="py-16 bg-offwhite">
        <div className="container-pad">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
            What We Ship
          </p>
          <h2 className="font-display font-bold text-gray-900 mb-10"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Almost Anything You Can Pack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {whatWeShip.map(item => (
              <div key={item} className="bg-white rounded-xl border border-border p-4 flex items-center gap-3">
                <CheckCircle size={16} className="text-brand flex-shrink-0" />
                <p className="font-body text-sm text-gray-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-white">
        <div className="container-pad">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
            The Process
          </p>
          <h2 className="font-display font-bold text-gray-900 mb-10"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            How Ship Abroad Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {howItWorks.map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-brand text-sm">{step}</span>
                </div>
                <h3 className="font-display font-semibold text-gray-900 text-sm">{title}</h3>
                <p className="font-body text-xs text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why WAKARGO */}
      <div className="py-16 bg-offwhite">
        <div className="container-pad">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Why WAKARGO
          </p>
          <h2 className="font-display font-bold text-gray-900 mb-10"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Shipping Happiness to Every Doorstep
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWakargo.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col gap-3">
                <div className="w-11 h-11 rounded-lg bg-brand/8 flex items-center justify-center">
                  <Icon size={22} className="text-brand" />
                </div>
                <h3 className="font-display font-semibold text-gray-900 text-base">{title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-brand text-white text-center">
        <div className="container-pad">
          <h2 className="font-display font-bold mb-4"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Ready to Send a Package?
          </h2>
          <p className="text-white/75 font-body text-base mb-8 max-w-xl mx-auto">
            Tell us what you're sending, where it's going, and we'll take it from there.
          </p>
          <Link to="/quote"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-display font-semibold px-10 py-4 rounded-md transition-colors duration-200">
            Get a Shipping Quote <ArrowRight size={18} />
          </Link>
        </div>
      </div>

    </div>
  )
}