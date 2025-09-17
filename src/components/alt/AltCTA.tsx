'use client'

export default function AltCTA() {
	const openCalendly = () => {
		if (typeof window !== 'undefined' && (window as any).Calendly) {
			(window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/peter-diabol/30min' })
		}
	}

	return (
		<section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
			<div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
				<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Ready to get started?</h2>
				<p className="mt-3 text-slate-600">Book a 30-minute walkthrough and see it in action.</p>
				<div className="mt-8">
					<button onClick={openCalendly} className="rounded-full bg-slate-900 text-white px-6 py-3 font-medium hover:bg-slate-800 transition">
						Book a demo
					</button>
				</div>
			</div>
		</section>
	)
}


