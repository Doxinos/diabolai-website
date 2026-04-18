import { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'Diabol AI — AI Voice Agents, Content & Avatars | Stockholm',
  description:
    'Grow without growing. AI voice agents that answer every call, content engines that never sleep, and digital avatars that show up when you can\'t. For businesses that want to scale without scaling headcount.',
  openGraph: {
    title: 'Diabol AI — AI Voice Agents, Content & Avatars',
    description:
      'Grow without growing. AI voice agents, content engines, and digital avatars for businesses ready to scale.',
    url: 'https://www.diabolai.com',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.diabolai.com',
  },
}

export default function Home() {
  return <HomeClient />
}
