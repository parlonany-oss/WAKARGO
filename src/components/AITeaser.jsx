import { Sparkles, Brain, MapPin, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  { icon: Brain, title: 'Smart Rate Intelligence', desc: 'AI-powered shipping rate predictions across air, sea, and land corridors.' },
  { icon: MapPin, title: 'Live Shipment Visibility', desc: 'Real-time cargo tracking with predictive delivery windows.' },
  { icon: Clock, title: 'Instant Customs Estimates', desc: 'Automated duty calculations based on live NCS and international tariff data.' },
]

export default function AITeaser() {
  return (
    <section className="py-20 bg-gray-950 text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-pad relative z-10">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs font-display font-semibold text-white/80 uppercase tracking-widest">Coming Soon</span>
          </div>
          <h2 className="font-display font-bold leading-tight mb-5"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            WAKARGO AI —<br />
            <span className="text-accent">Shipping Intelligence Platform</span>
          </h2>
          <p className="text-white/60 font-body text-base leading-relaxed">
            We are building an AI-powered platform that makes shipping smarter —
            instant rate predictions, live cargo visibility, and automated customs intelligence,
            all in one place.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/8 transition-colors duration-200">
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center mb-4">
                <Icon size={20} className="text-accent" />
              </div>
              <h3 className="font-display font-semibold text-white text-base mb-2">{title}</h3>
              <p className="font-body text-sm text-white/55 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-white/50 font-body text-sm mb-5">
            Be the first to know when it launches.
          </p>
          <Link to="/quote"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-accent hover:text-accent text-white/80 font-display font-semibold px-8 py-3 rounded-md transition-colors duration-200 text-sm">
            Stay in Touch <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  )
}