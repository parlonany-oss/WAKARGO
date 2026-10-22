import { Package, Truck, Ship, FileCheck, Plane, Anchor, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Ship,
    title: 'Ship Abroad',
    subtitle: 'Diaspora Shipping',
    desc: 'Sending goods to your loved ones abroad? We make it seamless — from your location to the doorstep of your loved ones abroad.',
    highlights: ['Door-to-door delivery', 'Real-time tracking', 'Secure packaging'],
    href: '/services',
    accent: true,
  },
  {
    icon: Package,
    title: 'Imports',
    subtitle: 'Vehicles, Cargo & Equipment',
    desc: 'We handle importation of vehicles, tyres, general cargo, and heavy-duty equipment — cleared, delivered, done.',
    highlights: ['Vehicles & tyres', 'General cargo', 'Heavy-duty equipment'],
    href: '/imports',
  },
  {
    icon: Truck,
    title: 'Exports',
    subtitle: 'Local Content & Agro',
    desc: 'We move Nigerian and African products to global markets — food, agricultural produce, and local content.',
    highlights: ['Food & agro products', 'Local content', 'Global destinations'],
    href: '/exports',
  },
  {
    icon: FileCheck,
    title: 'Customs Clearing',
    subtitle: 'Freight Forwarding',
    desc: 'Navigating customs doesn\'t have to be stressful. Our experts handle all documentation and clearance end-to-end.',
    highlights: ['Full documentation', 'Port liaison', 'Duty consultation'],
    href: '/customs-clearance',
  },
]

const modes = [
  { icon: Plane, label: 'Air Freight', desc: 'Fast, reliable air cargo worldwide' },
  { icon: Anchor, label: 'Sea Freight', desc: 'Cost-effective ocean shipping' },
  { icon: MapPin, label: 'Land Freight', desc: 'Inland delivery across borders' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-pad">

        {/* Header */}
        <div className="max-w-xl mb-14">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="font-display font-bold text-gray-900 leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
            Every Shipment, <br />Every Direction
          </h2>
          <p className="text-muted font-body text-base leading-relaxed">
            From clearing at the port to last-mile delivery — WAKARGO manages your cargo
            by air, sea, and land, anywhere in the world.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map(({ icon: Icon, title, subtitle, desc, highlights, href, accent }) => (
            <Link key={title} to={href}
              className={`group flex flex-col p-6 rounded-xl border transition-all duration-200 hover:shadow-lg hover:-translate-y-1
                ${accent
                  ? 'bg-brand border-brand text-white'
                : 'bg-white border-border border hover:border-brand/40 hover:shadow-md'
                }`}>
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4
                ${accent ? 'bg-white/15' : 'bg-brand/8 group-hover:bg-brand group-hover:text-white transition-colors'}`}>
                <Icon size={22} className={accent ? 'text-accent' : 'text-brand group-hover:text-white transition-colors'} />
              </div>
              <p className={`font-display font-bold text-base mb-0.5 ${accent ? 'text-white' : 'text-gray-900'}`}>
                {title}
              </p>
              <p className={`font-display text-xs font-medium mb-3 ${accent ? 'text-white/70' : 'text-accent'}`}>
                {subtitle}
              </p>
              <p className={`font-body text-sm leading-relaxed mb-4 ${accent ? 'text-white/80' : 'text-muted'}`}>
                {desc}
              </p>
              <ul className="mt-auto space-y-1.5">
                {highlights.map(h => (
                  <li key={h} className={`text-xs font-body flex items-center gap-2 ${accent ? 'text-white/75' : 'text-gray-600'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${accent ? 'bg-accent' : 'bg-brand/40'}`} />
                    {h}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        {/* Modes of Transport */}
        <div className="bg-offwhite rounded-2xl p-8">
          <p className="text-center font-display font-semibold text-gray-500 text-xs uppercase tracking-widest mb-8">
            We Move Cargo By
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {modes.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Icon size={22} className="text-brand" />
                </div>
                <div>
                  <p className="font-display font-semibold text-gray-900 text-sm">{label}</p>
                  <p className="text-muted text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}