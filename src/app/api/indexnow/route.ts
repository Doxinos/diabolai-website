import { NextResponse } from 'next/server'

// IndexNow API configuration
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'your-indexnow-key-here'
const SITE_URL = 'https://diabolai.com'

// IndexNow endpoints (submits to all major search engines at once)
const INDEXNOW_ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow'
]

export async function POST(request: Request) {
  try {
    const { urls } = await request.json()

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'URLs array is required' },
        { status: 400 }
      )
    }

    // Submit to IndexNow API
    const results = await Promise.allSettled(
      INDEXNOW_ENDPOINTS.map(endpoint =>
        fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            host: 'diabolai.com',
            key: INDEXNOW_KEY,
            keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
            urlList: urls.map(url =>
              url.startsWith('http') ? url : `${SITE_URL}${url}`
            )
          })
        })
      )
    )

    const successful = results.filter(r => r.status === 'fulfilled').length
    const failed = results.filter(r => r.status === 'rejected').length

    return NextResponse.json({
      success: true,
      message: `Submitted ${urls.length} URLs to IndexNow`,
      results: {
        successful,
        failed,
        total: INDEXNOW_ENDPOINTS.length
      }
    })
  } catch (error) {
    console.error('IndexNow submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit to IndexNow' },
      { status: 500 }
    )
  }
}

// Helper function for manual URL submission
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')

  if (!url) {
    return NextResponse.json(
      { error: 'URL parameter is required' },
      { status: 400 }
    )
  }

  try {
    const fullUrl = url.startsWith('http') ? url : `${SITE_URL}${url}`

    const results = await Promise.allSettled(
      INDEXNOW_ENDPOINTS.map(endpoint =>
        fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            host: 'diabolai.com',
            key: INDEXNOW_KEY,
            keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
            urlList: [fullUrl]
          })
        })
      )
    )

    const successful = results.filter(r => r.status === 'fulfilled').length

    return NextResponse.json({
      success: true,
      message: `Submitted ${fullUrl} to IndexNow`,
      submitted: successful > 0
    })
  } catch (error) {
    console.error('IndexNow submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit to IndexNow' },
      { status: 500 }
    )
  }
}
