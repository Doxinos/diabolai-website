import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <Link href="/" className="inline-block mb-8">
          <Image 
            src="/logos/Diabol_Logo_White-01.png" 
            alt="DiabolAI logo" 
            width={180} 
            height={60} 
            className="mx-auto"
          />
        </Link>
        
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/" 
            className="btn-primary inline-block px-8 py-3"
          >
            Return Home
          </Link>
          
          <div className="text-gray-400 text-sm">
            Looking for something specific? Check out our{' '}
            <Link href="/faq" className="text-electric-purple hover:text-white transition-colors">
              FAQ
            </Link>
            {' '}or{' '}
            <Link href="/real-estate" className="text-electric-purple hover:text-white transition-colors">
              Real Estate Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}