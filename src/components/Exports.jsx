import { ArrowRight, Leaf, Globe2, Award, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const agroProducts = [
  { name: 'Sesame Seeds', markets: 'Asia, Middle East, Europe' },
  { name: 'Cashew Nuts', markets: 'India, Vietnam, Europe' },
  { name: 'Cocoa Beans', markets: 'Europe, USA, Asia' },
  { name: 'Ginger', markets: 'USA, UK, Germany, Japan' },
  { name: 'Hibiscus (Zobo)', markets: 'Europe, USA, Mexico' },
  { name: 'Shea Butter', markets: 'Europe, USA, Asia' },
  { name: 'Palm Produce', markets: 'Asia, Europe' },
  { name: 'Groundnuts', markets: 'Europe, Middle East' },
  { name: 'Soybean', markets: 'Asia, Europe' },
  { name: 'Turmeric', markets: 'USA, Europe, Asia' },
  { name: 'Charcoal', markets: 'Middle East, Europe' },
  { name: 'Bitter Kola', markets: 'USA, UK, Europe' },
]

const otherCategories = [
  'Manufactured Goods',
  'Textiles & Fabrics',
  'Solid Minerals',
  'Leather Products',
  'Processed Foods',
  'Cosmetics & Beauty',
]

const whyWakargo = [
  { icon: Award, title: 'NEPC Certified', desc: 'Registered and certified by the Nigerian Export Promotion Council.' },
  { icon: Globe2, title: 'Worldwide Reach', desc: 'We move cargo to every major trade corridor — Asia, Europe, Americas, Middle East.' },
  { icon: Leaf, title: 'Agro Specialists', desc: 'Deep expertise in Nigerian agro export documentation, phytosanitary certification, and compliance.' },
  { icon: CheckCircle, title: 'End-to-End', desc: 'From sourcing and packaging to documentation, port handling, and delivery abroad.' },
]

export default function Exports() {
  return (
    <div>
      {/* Hero */}
      <div
        className="relative text-white py-20 px-6"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-brand/85" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
            NEPC Certified Exporter
          </p>
          <h1 className="font-display font-bold leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Nigeria to the World —<br />We Handle the Export
          </h1>
          <p className="text-white/80 font-body text-base leading-relaxed max-w-2xl mx-auto mb-8">
            WAKARGO moves Nigerian products to global markets by air, sea, and land.
            From agro produce to manufactured goods — we manage the full export process,
            end to end.
          </p>
          <Link to="/quote"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-display font-semibold px-8 py-4 rounded-md transition-colors duration-200">
            Start an Export <ArrowRight size={18} />
          </Link>
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
            Your Export Partner, Start to Finish
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

      {/* Agro Products */}
      <div className="py-16 bg-offwhite">
        <div className="container-pad">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Core Export Category
          </p>
          <h2 className="font-display font-bold text-gray-900 mb-3"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Nigerian Agro Products
          </h2>
          <p className="text-muted font-body text-base mb-10 max-w-xl">
            Nigeria is one of Africa's largest agricultural exporters. We move these products
            to international buyers across key global corridors.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {agroProducts.map(({ name, markets }) => (
              <div key={name} className="bg-white rounded-xl border border-border p-5 flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-brand/8 flex items-center justify-center flex-shrink-0">
                  <Leaf size={18} className="text-brand" />
                </div>
                <div>
                  <p className="font-display font-semibold text-gray-900 text-sm">{name}</p>
                  <p className="font-body text-xs text-muted mt-0.5">{markets}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other Categories */}
      <div className="py-16 bg-white">
        <div className="container-pad">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Beyond Agro
          </p>
          <h2 className="font-display font-bold text-gray-900 mb-10"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Other Export Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherCategories.map(cat => (
              <div key={cat} className="bg-offwhite rounded-xl border border-border p-4 text-center">
                <p className="font-display font-semibold text-gray-900 text-sm">{cat}</p>
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
            Ready to Export?
          </h2>
          <p className="text-white/75 font-body text-base mb-8 max-w-xl mx-auto">
            Tell us what you're exporting, where it's going, and we'll handle the rest.
          </p>
          <Link to="/quote"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-display font-semibold px-10 py-4 rounded-md transition-colors duration-200">
            Get an Export Quote <ArrowRight size={18} />
          </Link>
        </div>
      </div>

    </div>
  )
}