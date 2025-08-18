import AltNavigation from '@/components/alt/AltNavigation'
import AltHero from '@/components/alt/AltHero'
import AltBenefits from '@/components/alt/AltBenefits'
import AltCTA from '@/components/alt/AltCTA'

export default function AltHome() {
	return (
		<main className="min-h-screen bg-white text-slate-900">
			<AltNavigation />
			<AltHero />
			<AltBenefits />
			<AltCTA />
		</main>
	)
}


