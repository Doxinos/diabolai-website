import { useState, useCallback, useEffect } from 'react'

const TILE_H = 200

const tiles = [
  {
    number: '01',
    label: 'AI VOICE AGENTS',
    name: 'Voice Agents',
    back: 'Your phone answered 24/7. Every lead qualified. Every job booked — before they call your competitor.',
    href: '/ai-voice',
  },
  {
    number: '02',
    label: 'AI CONTENT',
    name: 'AI Content',
    back: 'Scroll-stopping videos, ads, and posts. Produced while you sleep, at a pace no human team can match.',
    href: '/ai-content',
  },
  {
    number: '03',
    label: 'AI AVATARS',
    name: 'AI Avatars',
    back: 'Your face. Your voice. Everywhere you need to be — without the hours it would take to actually be there.',
    href: '/ai-avatars',
  },
]

function TileFront({ tile, topOffset }: { tile: typeof tiles[number]; topOffset: number }) {
  return (
    <div
      className="absolute flex items-center px-8 md:px-16 lg:px-20 bg-[#DCDBD3]"
      style={{ top: topOffset, left: 0, right: 0, height: TILE_H }}
    >
      {/* Ghost number */}
      <p className="hidden lg:block font-black text-[clamp(80px,9vw,130px)] leading-none text-[rgba(17,17,17,0.05)] w-40 flex-shrink-0 select-none">
        {tile.number}
      </p>

      {/* Label */}
      <p className="hidden md:block font-mono text-[11px] uppercase tracking-[0.18em] text-[rgba(17,17,17,0.35)] w-52 flex-shrink-0">
        {tile.label}
      </p>

      {/* Title */}
      <h3 className="font-black text-[clamp(36px,4.5vw,64px)] leading-[0.95] tracking-[-0.04em] text-[#111111] flex-1">
        {tile.name}
      </h3>

      {/* Hint — changes based on device */}
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.28)] flex-shrink-0">
        Tap →
      </p>
    </div>
  )
}

function SplitTile({ tile, isLast, reducedMotion }: { tile: typeof tiles[number]; isLast: boolean; reducedMotion: boolean }) {
  const [active, setActive] = useState(false)
  const ease = 'cubic-bezier(0.76, 0, 0.24, 1)'
  const dur = reducedMotion ? '0s' : '0.45s'

  const toggle = useCallback(() => setActive((v) => !v), [])

  return (
    <div
      className={`relative cursor-pointer select-none overflow-hidden ${!isLast ? 'border-b border-[rgba(17,17,17,0.08)]' : ''}`}
      style={{ height: `${TILE_H}px` }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={toggle}
    >
      {/* BACK LAYER — Portland Orange */}
      <div className="absolute inset-0 bg-[#FF4F30] flex flex-col justify-center px-8 md:px-16 lg:px-20 gap-2 md:flex-row md:items-center md:gap-12 lg:gap-16">
        {/* Ghost number on orange — desktop only */}
        <p className="hidden lg:block font-black text-[clamp(80px,9vw,130px)] leading-none text-[rgba(17,17,17,0.08)] w-40 flex-shrink-0 select-none">
          {tile.number}
        </p>

        {/* Title */}
        <h3 className="font-black text-[clamp(28px,4.5vw,64px)] leading-[0.95] tracking-[-0.04em] text-[#111111] flex-shrink-0 md:w-48 lg:w-64">
          {tile.name}
        </h3>

        {/* Description */}
        <p className="font-bold text-[clamp(14px,1.5vw,22px)] text-[#111111] leading-snug flex-1">
          {tile.back}
        </p>

        {/* Learn more */}
        <a
          href={tile.href}
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-[rgba(17,17,17,0.55)] hover:text-[#111111] transition-colors duration-200 flex-shrink-0 self-start md:self-auto"
          onClick={(e) => e.stopPropagation()}
        >
          Learn more →
        </a>
      </div>

      {/* TOP HALF — slides up */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '50%',
          overflow: 'hidden',
          transform: active ? 'translateY(-100%)' : 'translateY(0%)',
          transition: `transform ${dur} ${ease}`,
          zIndex: 1,
        }}
      >
        <TileFront tile={tile} topOffset={0} />
      </div>

      {/* BOTTOM HALF — slides down */}
      <div
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '50%',
          overflow: 'hidden',
          transform: active ? 'translateY(100%)' : 'translateY(0%)',
          transition: `transform ${dur} ${ease}`,
          zIndex: 1,
        }}
      >
        <TileFront tile={tile} topOffset={-(TILE_H / 2)} />
      </div>
    </div>
  )
}

export default function FlipStrip() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <section className="bg-[#DCDBD3]">
      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(17,17,17,0.12)] to-transparent" />
      <div className="flex flex-col">
        {tiles.map((tile, i) => (
          <SplitTile key={tile.label} tile={tile} isLast={i === tiles.length - 1} reducedMotion={reducedMotion} />
        ))}
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(17,17,17,0.12)] to-transparent" />
    </section>
  )
}
