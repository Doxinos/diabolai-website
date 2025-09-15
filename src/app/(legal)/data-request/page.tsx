"use client"

import React, { useState } from "react"

export const metadata = {
  title: 'Data Requests | diabol',
}

export default function DataRequestPage() {
  const [status, setStatus] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setBusy(true)
    setStatus(null)
    try {
      const res = await fetch('/api/privacy/dsar', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      const json = await res.json()
      if (!res.ok) throw new Error(json.message || 'Request failed')
      setStatus(`Thanks! Your request ID is ${json.caseId}. We will respond within one month.`)
      form.reset()
    } catch (err: any) {
      setStatus(err.message || 'Something went wrong. Please try again later.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <main className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold mb-4">Data Request</h1>
      <p className="text-sm text-gray-700 mb-6">Use this form to request access, deletion, rectification, restriction, or portability of your data.</p>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Your Name</label>
          <input name="name" required className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input name="email" type="email" required className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Request Type</label>
          <select name="type" required className="mt-1 w-full border rounded px-3 py-2">
            <option value="access">Access</option>
            <option value="erasure">Erasure</option>
            <option value="rectification">Rectification</option>
            <option value="restriction">Restriction</option>
            <option value="portability">Portability</option>
            <option value="objection">Objection</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Details</label>
          <textarea name="details" rows={5} className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div className="text-xs text-gray-600">We use your email solely to process this request and verify identity.</div>
        <button disabled={busy} className="px-4 py-2 bg-black text-white rounded">{busy ? 'Sending…' : 'Submit request'}</button>
      </form>
      {status ? <p className="mt-4 text-sm">{status}</p> : null}
    </main>
  )
}


