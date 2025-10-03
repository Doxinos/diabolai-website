'use client'

import { LazyMotion } from 'framer-motion'

// Lazy load only essential animation features
const loadFeatures = () =>
  import('./motion-features').then(res => res.default)

export default function LazyMotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  )
}