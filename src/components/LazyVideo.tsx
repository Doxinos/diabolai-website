'use client'

import { useEffect, useRef, useState } from 'react'

interface LazyVideoProps {
  src: string
  fallbackSrc?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  playsInline?: boolean
  disablePictureInPicture?: boolean
  poster?: string
}

export default function LazyVideo({
  src,
  fallbackSrc,
  className = '',
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  disablePictureInPicture = true,
  poster
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true)
          }
        })
      },
      {
        rootMargin: '50px 0px', // Start loading 50px before it comes into view
      }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [isInView])

  const handleLoadedData = () => {
    setIsLoaded(true)
  }

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay && isLoaded}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      disablePictureInPicture={disablePictureInPicture}
      preload={isInView ? 'auto' : 'none'}
      poster={poster}
      onLoadedData={handleLoadedData}
    >
      {isInView && (
        <>
          <source src={src} type="video/mp4" />
          {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
        </>
      )}
      Your browser does not support the video tag.
    </video>
  )
}