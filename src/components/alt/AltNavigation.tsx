'use client'

import Image from 'next/image'

export default function AltNavigation() {
	const openCalendly = () => {
		if (typeof window !== 'undefined' && (window as any).Calendly) {
			(window as any).Calendly.initPopupWidget({
				url: 'https://calendly.com/peter-diabol/30min',
			})
		}
	}

	return (
		<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
			<nav className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
				<div className="flex items-center gap-3">
					<Image src="/logos/Diabol_Logo_Black-01.png" alt="DiabolAI" width={120} height={40} />
				</div>
				<button onClick={openCalendly} className="rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-medium hover:bg-slate-800 transition">
					Get Started
				</button>
			</nav>
		</header>
	)
}


