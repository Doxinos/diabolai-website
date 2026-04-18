export default function NoiseOverlay() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 z-[9999] h-full w-full opacity-[0.025]"
      style={{ mixBlendMode: 'multiply' }}
    >
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.70" numOctaves="4" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  )
}
