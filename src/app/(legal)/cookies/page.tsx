export const metadata = {
  title: 'Cookies | diabol',
}

export default function CookiesPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 prose">
      <h1>Cookies and Similar Technologies</h1>
      <p>
        We use cookies and similar technologies to run this site and, with your consent, enable functional features (e.g.,
        embedded scheduling and voice widgets), analytics, and marketing. You can change your choices anytime via the cookie
        settings link in the footer.
      </p>

      <h2>Categories</h2>
      <ul>
        <li><strong>Necessary</strong>: core functions like load balancing and security.</li>
        <li><strong>Functional</strong>: Calendly scheduling modal, ElevenLabs voice widget, UI preferences.</li>
        <li><strong>Analytics</strong>: performance measurement (only if enabled).</li>
        <li><strong>Marketing</strong>: third‑party embeds and remarketing pixels (only if enabled).</li>
      </ul>

      <h2>Third‑party providers</h2>
      <ul>
        <li>Vercel (hosting)</li>
        <li>Calendly (scheduling widget)</li>
        <li>ElevenLabs (voice widget)</li>
        <li>Fonts served from our own domain via Next.js</li>
      </ul>

      <p className="text-sm text-gray-600">This page is a summary. For detailed processing information, see our Privacy Policy.</p>
    </main>
  )
}


