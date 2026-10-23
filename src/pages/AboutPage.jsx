import About from '../components/About'
import SEO from '../components/SEO'

export default function AboutPage() {
  return (
    <>
<SEO
  title="About Us"
  description="Learn about WAKARGO — our story, mission, and the team behind Nigeria's tech-driven multimodal shipping company."
  path="/about"
/>
      <About isPage={true} />
    </>
  )
}