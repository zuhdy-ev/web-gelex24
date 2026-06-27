import React from 'react'
import Image from 'next/image'

export default function DetailTimeline() {
  return (
    <main className="flex h-screen w-full items-center justify-center border border-red-500 bg-black bg-opacity-50">
      <div className="relative flex h-full w-full items-center justify-center">
        {/* Mobile */}
        <div className="">
          <Image
            src="/assets/beranda/timeline/popup-bg-mobile.png"
            alt="Latar Belakang"
            width={1000}
            height={1000}
            className="w-full"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </main>
  )
}
