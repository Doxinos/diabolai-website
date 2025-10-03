// Service Worker for caching third-party assets
const CACHE_NAME = 'diabolai-v1';
const THIRD_PARTY_CACHE = 'third-party-v1';

// URLs to cache with longer lifetimes
const THIRD_PARTY_URLS = [
  'https://assets.calendly.com/assets/external/widget.js',
  'https://assets.calendly.com/assets/external/widget.css',
];

// Install event - pre-cache third-party assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(THIRD_PARTY_CACHE).then((cache) => {
      return cache.addAll(THIRD_PARTY_URLS).catch((err) => {
        console.log('Failed to cache third-party assets:', err);
      });
    })
  );
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle third-party assets
  if (url.hostname === 'assets.calendly.com') {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          // Serve from cache and update in background
          const fetchPromise = fetch(request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const responseToCache = networkResponse.clone();
              caches.open(THIRD_PARTY_CACHE).then((cache) => {
                cache.put(request, responseToCache);
              });
            }
            return networkResponse;
          });
          
          return cachedResponse;
        }
        
        // Not in cache, fetch from network
        return fetch(request).then((response) => {
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(THIRD_PARTY_CACHE).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return response;
        });
      })
    );
  }
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== THIRD_PARTY_CACHE)
          .map((name) => caches.delete(name))
      );
    })
  );
});