import { Globe2, Zap, ShieldCheck, HeartHandshake } from 'lucide-react'
import { Link } from 'react-router-dom'

const values = [
  {
    icon: Globe2,
    title: 'Global Reach',
    desc: 'We move cargo across continents — by air, sea, and land — with partners in key trade corridors worldwide.',
  },
  {
    icon: Zap,
    title: 'Tech-Driven',
    desc: 'Real-time tracking, digital documentation, and a process built for speed and transparency.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable & Accountable',
    desc: 'Every shipment is handled with care. We own the process from pickup to doorstep delivery.',
  },
  {
    icon: HeartHandshake,
    title: 'People First',
    desc: 'Behind every cargo is a person with a deadline or a loved one waiting. We never forget that.',
  },
]

const stats = [
  { value: '50+', label: 'Countries Reached' },
  { value: '3', label: 'Modes of Transport' },
  { value: '100%', label: 'Customs Compliance' },
  { value: '24/7', label: 'Shipment Support' },
]

export default function About({ isPage = false }) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-pad">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left — text */}
          <div>
            <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
              Who We Are
            </p>
            <h2 className="font-display font-bold text-gray-900 leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
              A Shipping Company <br />Built for the World
            </h2>
            <p className="text-muted font-body text-base leading-relaxed mb-5">
              WAKARGO is a tech-driven multimodal shipping company moving cargo by air, sea, and land.
              We handle imports, exports, customs clearing, and freight forwarding — for individuals,
              businesses, and the diaspora community.
            </p>
            <p className="text-muted font-body text-base leading-relaxed mb-8">
              Our roots are in Africa. Our reach is global. We built WAKARGO on one belief:
              that shipping should be simple, transparent, and delivered with care —
              every time, to every doorstep.
            </p>
            <Link to={isPage ? '/quote' : '/about'}
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-display font-semibold px-8 py-4 rounded-md transition-colors duration-200">
              Work With Us
            </Link>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-offwhite rounded-xl p-6 border border-border">
                <p className="font-display font-bold text-brand mb-1"
                  style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
                  {value}
                </p>
                <p className="font-body text-sm text-muted">{label}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Values */}
        <div className="border-t border-border pt-16">
          <p className="text-center font-display font-semibold text-gray-500 text-xs uppercase tracking-widest mb-10">
            What Drives Us
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
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
    </section>
  )
}