import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://www.wakargo.com'
const DEFAULT_IMAGE = `${BASE_URL}/wakargo-og.png`

export default function SEO({ title, description, path = '', image = DEFAULT_IMAGE }) {
  const fullTitle = title ? `${title} | WAKARGO` : 'WAKARGO – Tech-Driven Shipping by Air, Sea & Land'
  const fullUrl = `${BASE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="WAKARGO" />

      {/* Twitter/X Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Wakargoshipping" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}