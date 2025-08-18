import { CheckCircle2 } from 'lucide-react'

const benefits = [
	{ title: 'Respond instantly', desc: 'Never miss a lead. Agents reply in seconds, 24/7.' },
	{ title: 'Qualify automatically', desc: 'Route only high-intent prospects to your team.' },
	{ title: 'Book meetings', desc: 'Agents schedule directly on your calendar.' },
]

export default function AltBenefits() {
	return (
		<section className="py-16 md:py-24 border-t border-slate-200 bg-white">
			<div className="max-w-6xl mx-auto px-4 md:px-6">
				<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Built for speed and results</h2>
				<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
					{benefits.map((b) => (
						<div key={b.title} className="rounded-2xl border border-slate-200 p-6">
							<div className="flex items-start gap-3">
								<CheckCircle2 className="w-5 h-5 text-slate-900 mt-1" />
								<div>
									<h3 className="font-semibold text-slate-900">{b.title}</h3>
									<p className="text-slate-600 mt-1">{b.desc}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}


