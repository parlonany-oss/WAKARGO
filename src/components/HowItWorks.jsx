import { ClipboardList, Calculator, PackageCheck, Truck, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Tell Us What You Need',
    desc: 'Fill out a quick form — what you\'re shipping, where it\'s going, and how soon. Takes less than 2 minutes.',
  },
  {
    number: '02',
    icon: Calculator,
    title: 'Get a Quote',
    desc: 'We review your shipment details and send you a clear, no-hidden-fees quote by air, sea, or land.',
  },
  {
    number: '03',
    icon: PackageCheck,
    title: 'We Pick Up & Process',
    desc: 'Once confirmed, we arrange pickup or drop-off, handle all documentation, and process your customs clearance.',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Your Cargo Moves',
    desc: 'Your shipment is on its way — tracked in real time, managed by our team every step of the journey.',
  },
  {
    number: '05',
    icon: CheckCircle2,
    title: 'Delivered to the Door',
    desc: 'We confirm safe delivery and follow up with you. Shipping happiness, to your doorstep.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-offwhite">
      <div className="container-pad">

        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
            The Process
          </p>
          <h2 className="font-display font-bold text-gray-900 leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
            How It Works
          </h2>
          <p className="text-muted font-body text-base leading-relaxed">
            From your first message to final delivery — here's exactly what happens when you ship with WAKARGO.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-border z-0"
            style={{ left: '5%', right: '5%' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map(({ number, icon: Icon, title, desc }) => (
              <div key={number} className="flex flex-col items-start lg:items-center lg:text-center">
                {/* Icon circle */}
                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-border flex items-center justify-center shadow-sm group-hover:border-brand transition-colors">
                    <Icon size={28} className="text-brand" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-xs font-display font-bold flex items-center justify-center">
                    {number.replace('0', '')}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-gray-900 text-base mb-2">{title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a href="#quote"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-display font-semibold px-10 py-4 rounded-md transition-colors duration-200">
            Start a Shipment
          </a>
        </div>

      </div>
    </section>
  )
}