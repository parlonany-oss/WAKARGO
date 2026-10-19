import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'

function App() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
    </div>
  )
}

export default App