import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import AITeaser from '../components/AITeaser'
import About from '../components/About'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <>
    <SEO
        title="Shipping by Air, Sea & Land"
        description="WAKARGO is a tech-driven Nigerian shipping company moving cargo worldwide — imports, exports, diaspora shipments and customs clearing."
        path="/"
      />
      <Hero />
      <HowItWorks />
      <AITeaser />
      <About />
    </>
  )
}