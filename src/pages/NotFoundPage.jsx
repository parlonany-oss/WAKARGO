import { Link } from 'react-router-dom'
import { ArrowRight, PackageX } from 'lucide-react'
import SEO from '../components/SEO'

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-6">
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Head back to WAKARGO's homepage."
        path="/404"
      />
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-6">
          <PackageX size={36} className="text-brand" />
        </div>
        <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
          404 — Lost at Sea
        </p>
        <h1 className="font-display font-bold text-gray-900 text-3xl mb-4">
          Page Not Found
        </h1>
        <p className="text-muted font-body text-base leading-relaxed mb-8">
          The page you're looking for doesn't exist or may have moved. Let's get you back on course.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/"
            className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-display font-semibold px-8 py-4 rounded-md transition-colors duration-200">
            Back to Home <ArrowRight size={16} />
          </Link>
          <Link to="/contact"
            className="inline-flex items-center justify-center gap-2 border border-border hover:border-brand/40 text-gray-700 font-display font-semibold px-8 py-4 rounded-md transition-colors duration-200">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}