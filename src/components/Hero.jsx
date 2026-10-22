import { ArrowRight, Package, Truck, Ship, FileCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  { icon: Ship, label: 'Ship Abroad', desc: 'Diaspora shipping made easy', href: '/services' },
  { icon: Package, label: 'Import', desc: 'Vehicles, tyres, general cargo', href: '/services' },
  { icon: Truck, label: 'Export', desc: 'Agro & local content', href: '/exports' },
  { icon: FileCheck, label: 'Customs Clearing', desc: 'Stress-free documentation', href: '/customs-clearance' },
]

export default function Hero() {
  return (
    <section className="relative">

      {/* Hero with video background */}
      <div className="relative min-h-[90vh] flex items-center overflow-hidden">

        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
        <source src="https://videos.pexels.com/video-files/35907910/15231514_2560_1440_25fps.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
     <div className="absolute inset-0 bg-gradient-to-r from-brand/65 via-brand/35 to-black/20" />

        {/* Content */}
        <div className="relative z-10 container-pad w-full">
          <div className="max-w-2xl">

            {/* Headline */}
            <h1
              className="font-display font-bold text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              Shipping Happiness<br />
              <span className="text-accent font-semibold">to Your Doorstep</span>
            </h1>

            {/* Subtext */}
            <p className="text-white/75 text-base leading-relaxed mb-10 max-w-lg font-body font-normal">
              A tech-driven shipping company moving cargo by Air, Sea & Land —
              imports, exports, customs clearing and freight forwarding, worldwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/quote"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-display font-semibold px-8 py-4 rounded-md transition-colors duration-200 text-base"
              >
                Get a Quote <ArrowRight size={18} />
              </a>
              <a
                href="/track"
                className="inline-flex items-center gap-2 border-2 border-white/70 text-white hover:bg-white hover:text-brand font-display font-medium px-8 py-4 rounded-md transition-colors duration-200 text-base"
              >
                Track Shipment
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Service Selector Cards */}
      <div className="bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border rounded-xl overflow-hidden shadow-md">
            {services.map(({ icon: Icon, label, desc, href }, i) => (
              <Link
                key={label}
                href={href}
                className={`flex flex-col items-start gap-2 p-6 hover:bg-offwhite transition-colors duration-200 group ${i < 3 ? 'border-r border-border' : ''}`}
              >
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center group-hover:bg-brand transition-colors duration-200">
                  <Icon size={20} className="text-brand group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-display font-semibold text-gray-900 text-sm">{label}</p>
                  <p className="text-muted text-xs mt-0.5">{desc}</p>
                </div>
                <ArrowRight size={14} className="text-accent mt-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}