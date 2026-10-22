import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import HowItWorksPage from './pages/HowItWorksPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import QuotePage from './pages/QuotePage'
import CalculateShippingRatePage from './pages/Calculate Shipping RatePage'
import CustomsClearancePage from './pages/CustomsClearancePage'
import ExportsPage from './pages/ExportsPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-body">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/calculate-shipping-rate" element={<CalculateShippingRatePage />} />
          <Route path="/customs-clearance" element={<CustomsClearancePage />} />
          <Route path="/exports" element={<ExportsPage />} />
    
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App