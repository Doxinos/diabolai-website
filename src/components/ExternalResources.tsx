export default function ExternalResources() {
  return (
    <>
      {/* Preconnect to third-party domains - these must come first */}
      <link rel="preconnect" href="https://assets.calendly.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://assets.calendly.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
    </>
  )
}