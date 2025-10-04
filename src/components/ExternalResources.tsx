export default function ExternalResources() {
  return (
    <>
      {/* Preconnect to font domains for faster loading */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      
      {/* Preload critical fonts to prevent chain loading */}
      <link
        rel="preload"
        href="/_next/static/media/ac3b7908202f8517-s.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/_next/static/media/627d916fd739a539-s.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      
      {/* Preconnect to third-party domains - these must come first */}
      <link rel="preconnect" href="https://assets.calendly.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://assets.calendly.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Favicon links to prevent 404 errors */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
    </>
  )
}