import Calculator from '../components/Calculate Shipping Rate'
import SEO from '../components/SEO'

export default function CalculateShippingRatePage() {
  return (
    <>
<SEO
  title="Calculate Shipping Rate"
  description="Estimate your shipping costs with WAKARGO. Get an instant rate calculation for air, sea and land freight."
  path="/calculate-shipping-rate"
/>
      <Calculator />
    </>
  )
}