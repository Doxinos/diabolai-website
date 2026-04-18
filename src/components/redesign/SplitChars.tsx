export default function SplitChars({ text, className = '' }: { text: string; className?: string }) {
  return (
    <>
      {text.split(' ').map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split('').map((char, ci) => (
            <span
              key={ci}
              className={`split-char inline-block ${className}`}
              style={{ opacity: 0, transform: 'translateY(15px)' }}
            >
              {char}
            </span>
          ))}
          {wi < text.split(' ').length - 1 && (
            <span className="split-char inline-block" style={{ opacity: 0, transform: 'translateY(15px)' }}>
              {'\u00A0'}
            </span>
          )}
        </span>
      ))}
    </>
  )
}
