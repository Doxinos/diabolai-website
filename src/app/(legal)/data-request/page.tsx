import DataRequestForm from "@/components/DataRequestForm"

export const metadata = {
  title: 'Data Requests | diabol',
}

export default function DataRequestPage() {
  return (
    <main className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold mb-4">Data Request</h1>
      <p className="text-sm text-gray-700 mb-6">Use this form to request access, deletion, rectification, restriction, or portability of your data.</p>
      <DataRequestForm />
    </main>
  )
}


