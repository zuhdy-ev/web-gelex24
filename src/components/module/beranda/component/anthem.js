'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

export default function Anthem() {

  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch((error) => {})
    }
  }, [isPlaying])

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch((error) => {})
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="fixed bottom-4 right-4 z-[200] flex items-center justify-center lg:bottom-4 lg:right-4">
      <button
        onClick={togglePlayPause}
        className="relative flex h-[80px] w-[80px] items-center justify-center lg:h-[70px] lg:w-[208px] xl:h-[70px] xl:w-[208px]"
      >
        <div className="absolute inset-0 z-0 block rounded-lg lg:hidden">
          <Image
            src="/assets/beranda/hero/bg-anthem-mobile.png"
            alt="Anthem Background Mobile"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
        <div className="absolute inset-0 z-0 hidden rounded-lg lg:block">
          <Image
            src="/assets/beranda/hero/bg-anthem.png"
            alt="Anthem Background"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
        <div className="relative z-10 flex items-center justify-center">
          <Image
            src={
              isPlaying
                ? '/assets/beranda/hero/anthem-pause.png'
                : '/assets/beranda/hero/anthem-play.png'
            }
            alt={isPlaying ? 'Pause' : 'Play'}
            width={32}
            height={32}
            className="mr-0 hidden pb-1 md:mr-4 lg:block"
          />
          <Image
            src="/assets/beranda/hero/anthem-text.png"
            alt="Anthem Text"
            width={100}
            height={32}
            className="hidden lg:block"
          />
        </div>
      </button>
      <audio ref={audioRef} src={`/assets/audio/anthem-gelex.mp3`} />
    </div>
  )
}
