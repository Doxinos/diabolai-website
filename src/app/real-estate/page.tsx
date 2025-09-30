import { Metadata } from 'next'
import RealEstateClient from './RealEstateClient'

export const metadata: Metadata = {
  title: 'AI Voice Agents for Real Estate - DiabolAI',
  description: 'AI voice agents for real estate professionals. 24/7 lead qualification, showing scheduling, and client follow-up. Never miss a potential buyer again.',
  keywords: 'AI voice agents real estate, real estate AI receptionist, lead qualification, showing scheduling, real estate automation',
  // No noindex - this page has full content and should be indexed
}

export default function RealEstatePage() {
  return <RealEstateClient />
}