import Tracking from '../components/Tracking'
import SEO from '../components/SEO'

export default function TrackingPage() {
  return (
    <>
<SEO
  title="Track Your Shipment"
  description="Track your WAKARGO shipment using your WKG reference number or contact us on WhatsApp for a live update."
  path="/track"
/>
      <Tracking />
    </>
  )
}