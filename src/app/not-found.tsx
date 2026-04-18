import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#DCDBD3] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <Link href="/" className="inline-block mb-8 text-4xl font-bold tracking-tight text-[#111111] no-underline">
          Diabol.
        </Link>

        <h1 className="text-[clamp(80px,12vw,120px)] font-black leading-none text-[#111111] mb-4">404</h1>
        <h2 className="text-2xl font-bold text-[#111111] mb-4">Page Not Found</h2>
        <p className="text-[rgba(17,17,17,0.55)] text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="btn-magnetic inline-block rounded-full bg-[#111111] px-8 py-4 text-sm font-bold text-[#DCDBD3] hover:bg-[#222222] no-underline"
          >
            Return Home
          </Link>

          <div className="text-[rgba(17,17,17,0.45)] text-sm">
            Looking for something specific? Try{' '}
            <Link href="/ai-voice" className="text-[#FF4F30] hover:text-[#111111] transition-colors no-underline">
              AI Voice Agents
            </Link>
            ,{' '}
            <Link href="/ai-content" className="text-[#FF4F30] hover:text-[#111111] transition-colors no-underline">
              AI Content
            </Link>
            , or{' '}
            <Link href="/faq" className="text-[#FF4F30] hover:text-[#111111] transition-colors no-underline">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
