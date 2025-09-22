import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Voice Assistant for Real Estate - Never Miss a Lead | DiabolAI',
  description: 'Built for real estate. Your AI Assistant answers every inquiry, qualifies buyers/sellers, schedules showings, and syncs to your CRM — 24/7.',
  keywords: 'AI real estate assistant, real estate answering service, automated showing scheduling, real estate lead qualification, AI receptionist real estate',
}

export default function RealEstateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}