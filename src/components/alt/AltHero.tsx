'use client'

import { ArrowRight } from 'lucide-react'

export default function AltHero() {
	const openCalendly = () => {
		if (typeof window !== 'undefined' && (window as any).Calendly) {
			(window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/peter-diabol/30min' })
		}
	}

	return (
		<section className="relative overflow-hidden">
			<div className="max-w-6xl mx-auto px-4 md:px-6 pt-24 pb-16 md:pt-28 md:pb-24">
				<h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
					AI Voice Agents that save hours every week
				</h1>
				<p className="mt-6 text-xl leading-relaxed text-slate-600 max-w-2xl">
					Book, qualify, and follow up automatically — built for teams who use modern CRM and calendars.
				</p>
				<div className="mt-10 flex items-center gap-4">
					<button
						onClick={openCalendly}
						className="rounded-full bg-slate-900 text-white px-6 py-3 font-medium inline-flex items-center gap-2 hover:bg-slate-800 transition"
					>
						Get Started
						<ArrowRight className="w-5 h-5" />
					</button>
					<a href="#" className="text-slate-700 hover:text-slate-900 font-medium">
						See how it works
					</a>
				</div>
			</div>
		</section>
	)
}


