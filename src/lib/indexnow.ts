/**
 * IndexNow utility for automatic search engine indexing
 * Submits URLs to Bing, Yandex, and other IndexNow-compatible search engines
 */

const SITE_URL = 'https://diabolai.com'

export async function submitToIndexNow(urls: string | string[]) {
  if (process.env.NODE_ENV !== 'production') {
    console.log('[IndexNow] Skipping in development mode')
    return { success: false, message: 'Development mode' }
  }

  const urlArray = Array.isArray(urls) ? urls : [urls]

  try {
    const response = await fetch('/api/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ urls: urlArray })
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.error('[IndexNow] Submission failed:', error)
    return { success: false, error }
  }
}

/**
 * Submit homepage to IndexNow
 */
export async function submitHomepage() {
  return submitToIndexNow([SITE_URL])
}

/**
 * Submit all major pages to IndexNow
 */
export async function submitAllPages() {
  const pages = [
    '/',
    '/ai-voice',
    '/ai-content',
    '/ai-avatars',
    '/faq'
  ]

  return submitToIndexNow(pages)
}

/**
 * Client-side hook to submit current page to IndexNow
 * Use this when content is dynamically updated
 */
export function useIndexNowSubmit() {
  const submitCurrentPage = async () => {
    if (typeof window === 'undefined') return

    const currentUrl = window.location.pathname
    return submitToIndexNow([currentUrl])
  }

  return { submitCurrentPage }
}
