import { ArrowRight, Car, Package, Wrench, Truck, CheckCircle, Globe2, ShieldCheck, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const importCategories = [
  {
    icon: Car,
    title: 'Vehicles',
    items: ['Saloon Cars', 'SUVs & Crossovers', 'Buses & Vans', 'Trucks & Trailers', 'Motorcycles'],
  },
  {
    icon: Wrench,
    title: 'Spare Parts & Tyres',
    items: ['Car Tyres', 'Truck Tyres', 'Engine Parts', 'Body Parts', 'Electrical Components'],
  },
  {
    icon: Package,
    title: 'General Cargo (GenCo)',
    items: ['Consumer Goods', 'Electronics', 'Clothing & Textiles', 'Food Products', 'Raw Materials'],
  },
  {
    icon: Truck,
    title: 'Heavy Equipment',
    items: ['Excavators', 'Bulldozers', 'Cranes', 'Generators', 'Industrial Machinery'],
  },
]

const whoWeServe = [
  {
    title: 'Individual Importers',
    desc: 'Buying a vehicle or goods from abroad for personal use? We handle the full import process — shipping, customs clearing, and last-mile delivery to your door.',
  },
  {
    title: 'Business Importers',
    desc: 'Importing stock, equipment, or raw materials for your business? We offer commercial import solutions with full documentation, compliance, and port handling.',
  },
]

const whyWakargo = [
  { icon: Globe2, title: 'Worldwide Sourcing', desc: 'We import from the USA, UK, Europe, Asia, UAE and beyond — by air and sea.' },
  { icon: ShieldCheck, title: 'Customs Compliant', desc: 'Full NCS compliance, duty calculation, and documentation handled by our experts.' },
  { icon: CheckCircle, title: 'End-to-End', desc: 'From origin pickup to delivery at your location — one team, one process.' },
  { icon: Clock, title: '24/7 Support', desc: 'Your shipment is tracked and managed in real time, every step of the way.' },
]

export default function Imports() {
  return (
    <div>
      {/* Hero */}
      <div
        className="relative text-white py-20 px-6"
        style={{
          backgroundImage: 'url(/Images/imports-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-brand/85" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Imports & Customs Clearing
          </p>
          <h1 className="font-display font-bold leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            From Anywhere in the World —<br />Delivered to Your Door
          </h1>
          <p className="text-white/80 font-body text-base leading-relaxed max-w-2xl mx-auto mb-8">
            WAKARGO handles the full import process — vehicles, cargo, equipment, and general goods.
            We manage shipping, customs clearing, documentation, and last-mile delivery.
          </p>
          <Link to="/quote"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-display font-semibold px-8 py-4 rounded-md transition-colors duration-200">
            Start an Import <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Who We Serve */}
      <div className="py-16 bg-white">
        <div className="container-pad">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Who We Serve
          </p>
          <h2 className="font-display font-bold text-gray-900 mb-10"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Personal & Commercial Imports
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whoWeServe.map(({ title, desc }) => (
              <div key={title} className="bg-offwhite rounded-xl border border-border p-8">
                <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Import Categories */}
      <div className="py-16 bg-offwhite">
        <div className="container-pad">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
            What We Import
          </p>
          <h2 className="font-display font-bold text-gray-900 mb-10"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Import Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {importCategories.map(({ icon: Icon, title, items }) => (
              <div key={title} className="bg-white rounded-xl border border-border p-6">
                <div className="w-11 h-11 rounded-lg bg-brand/8 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-brand" />
                </div>
                <h3 className="font-display font-semibold text-gray-900 text-base mb-4">{title}</h3>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted font-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand/40 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why WAKARGO */}
      <div className="py-16 bg-white">
        <div className="container-pad">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Why WAKARGO
          </p>
          <h2 className="font-display font-bold text-gray-900 mb-10"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Your Import Partner, Start to Finish
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

      {/* Customs Clearance CTA */}
      <div className="py-12 bg-offwhite border-y border-border">
        <div className="container-pad flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-gray-900 text-lg mb-1">Need a Duty Estimate?</h3>
            <p className="text-muted font-body text-sm">Use our customs clearance estimator to get an instant duty calculation for your vehicle.</p>
          </div>
          <Link to="/customs-clearance"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-display font-semibold px-8 py-4 rounded-md transition-colors duration-200">
            Estimate Duty <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-brand text-white text-center">
        <div className="container-pad">
          <h2 className="font-display font-bold mb-4"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Ready to Import?
          </h2>
          <p className="text-white/75 font-body text-base mb-8 max-w-xl mx-auto">
            Tell us what you're importing, where it's coming from, and we'll handle the rest.
          </p>
          <Link to="/quote"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-display font-semibold px-10 py-4 rounded-md transition-colors duration-200">
            Get an Import Quote <ArrowRight size={18} />
          </Link>
        </div>
      </div>

    </div>
  )
}