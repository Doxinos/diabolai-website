export default function CriticalCSS() {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
      *, *::before, *::after { box-sizing: border-box; }
      html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      body { background-color: #DCDBD3; color: #111111; overflow-x: hidden; }
      .font-mono { font-family: var(--font-mono), 'JetBrains Mono', monospace; }
      `
    }} />
  )
}
