import { useState } from 'react'

const TILE_H = 340

const tiles = [
  {
    number: '01',
    label: 'AI VOICE AGENTS',
    name: 'Voice\nAgents',
    back: 'Your phone answered 24/7. Every lead qualified. Every job booked — before they call your competitor.',
  },
  {
    number: '02',
    label: 'AI CONTENT',
    name: 'AI\nContent',
    back: 'Scroll-stopping videos, ads, and posts. Produced while you sleep, at a pace no human team can match.',
  },
  {
    number: '03',
    label: 'AI AVATARS',
    name: 'AI\nAvatars',
    back: 'Your face. Your voice. Everywhere you need to be — without the hours it would take to actually be there.',
  },
]

function TileFront({ tile, isLast, topOffset }: { tile: typeof tiles[number]; isLast: boolean; topOffset: number }) {
  return (
    <div
      className={`absolute flex flex-col justify-between p-8 bg-[#DCDBD3] ${
        !isLast ? 'border-r border-[rgba(17,17,17,0.08)]' : ''
      }`}
      style={{ top: topOffset, left: 0, right: 0, height: `${TILE_H}px` }}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[rgba(17,17,17,0.35)]">
        {tile.label}
      </p>
      <div>
        <h3 className="font-black text-[clamp(44px,4.5vw,68px)] leading-[0.92] tracking-[-0.04em] text-[#111111] whitespace-pre-line mb-5">
          {tile.name}
        </h3>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.28)]">
          Hover to reveal →
        </p>
      </div>
      <p className="font-black text-[clamp(72px,9vw,130px)] leading-none text-[rgba(17,17,17,0.05)] text-right absolute bottom-6 right-8 pointer-events-none">
        {tile.number}
      </p>
    </div>
  )
}

function SplitTile({ tile, isLast }: { tile: typeof tiles[number]; isLast: boolean }) {
  const [active, setActive] = useState(false)
  const ease = 'cubic-bezier(0.76, 0, 0.24, 1)'
  const dur = '0.9s'

  return (
    <div
      className="relative cursor-pointer select-none overflow-hidden"
      style={{ height: `${TILE_H}px` }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {/* BACK LAYER — Portland Orange */}
      <div className="absolute inset-0 bg-[#FF4F30] flex flex-col justify-between p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
          {tile.label}
        </p>
        <p className="font-bold text-[clamp(18px,2vw,26px)] text-[#111111] leading-snug max-w-[300px]">
          {tile.back}
        </p>
        <a
          href="#"
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors duration-200 self-start"
          onClick={e => e.stopPropagation()}
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
        <TileFront tile={tile} isLast={isLast} topOffset={0} />
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
        <TileFront tile={tile} isLast={isLast} topOffset={-(TILE_H / 2)} />
      </div>
    </div>
  )
}

export default function FlipStrip() {
  return (
    <section className="bg-[#DCDBD3]">
      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(17,17,17,0.12)] to-transparent" />
      <div className="grid grid-cols-1 md:grid-cols-3">
        {tiles.map((tile, i) => (
          <SplitTile key={tile.label} tile={tile} isLast={i === tiles.length - 1} />
        ))}
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(17,17,17,0.12)] to-transparent" />
    </section>
  )
}
