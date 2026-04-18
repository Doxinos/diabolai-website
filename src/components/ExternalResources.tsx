export default function ExternalResources() {
  return (
    <>
      {/* Preconnect to third-party domains */}
      <link rel="preconnect" href="https://assets.calendly.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://assets.calendly.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

      {/* Favicon links */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/apple-touch-icon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
