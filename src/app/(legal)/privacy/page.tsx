export const metadata = {
  title: 'Privacy Policy | diabol',
}

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 prose">
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy explains how Diabol AB (org. no. 556684-1564), Jungfrugatan 5, 114 44 Stockholm ("diabol",
        "we", "us") collects and processes personal data when you use our website and services.
      </p>

      <h2>Controller and Contact</h2>
      <p>Diabol AB is the data controller. Contact: privacy@diabolai.com</p>

      <h2>What We Process and Why</h2>
      <ul>
        <li>Website operation and security (legitimate interests).</li>
        <li>Bookings and inquiries via Calendly/contact forms (contract/pre‑contract).</li>
        <li>Optional analytics and marketing (consent).</li>
        <li>Voice demo interactions via ElevenLabs (consent; activated by you).</li>
      </ul>

      <h2>Processors and Transfers</h2>
      <p>
        We use service providers such as Vercel (hosting), Calendly (booking), and ElevenLabs (voice widget). Fonts are served
        from our own domain via Next.js. Some providers are outside the EU/EEA; we rely on Standard Contractual Clauses and
        additional safeguards.
      </p>

      <h2>Cookies and Tracking</h2>
      <p>
        We use strictly necessary cookies and, with your consent, functional, analytics and marketing technologies. You can change
        your choices anytime using the cookie settings link in the footer. See our Cookies page for details.
      </p>

      <h2>Retention</h2>
      <p>We keep data only as long as needed for the stated purposes or legal obligations, then delete or anonymize it.</p>

      <h2>Your Rights</h2>
      <ul>
        <li>Access, rectification, erasure, restriction, portability, and objection.</li>
        <li>Withdraw consent at any time for future processing.</li>
        <li>Complain to the Swedish Authority for Privacy Protection (IMY).</li>
      </ul>

      <h2>Contact for Data Requests</h2>
      <p>
        To exercise your rights, visit our Data Requests page or email privacy@diabolai.com. We may request information to verify
        your identity and will respond within one month.
      </p>

      <p className="text-sm text-gray-600">Last updated: {new Date().toISOString().split('T')[0]}</p>
    </main>
  )
}


