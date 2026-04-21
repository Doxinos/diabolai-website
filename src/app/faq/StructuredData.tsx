import Script from 'next/script'

export default function StructuredData({ data }: { data: unknown }) {
  return (
    <Script
      id="faq-structured-data"
      type="application/ld+json"
      strategy="beforeInteractive"
    >
      {JSON.stringify(data)}
    </Script>
  )
}
