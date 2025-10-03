export default function ExternalResources() {
  return (
    <>
      {/* Preconnect to third-party domains - these must come first */}
      <link rel="preconnect" href="https://assets.calendly.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://assets.calendly.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Preload critical fonts */}
      <link 
        rel="preload" 
        href="/_next/static/media/ac3b7908202f8517-s.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous"
      />
      <link 
        rel="preload" 
        href="/_next/static/media/627d916fd739a539-s.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous"
      />
    </>
  )
}