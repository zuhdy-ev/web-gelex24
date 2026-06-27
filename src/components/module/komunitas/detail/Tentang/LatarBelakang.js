import React from 'react'
import Image from 'next/image'

export default function () {
  return (
    <div className="relative h-[130vh] w-screen max-w-[1920px]">
      <Image
        src="/assets/profil-ukm-komunitas/tentang-bg-tanaman-mobile.png"
        alt="bg tanaman"
        width={1000}
        height={1000}
        style={{ objectFit: 'cover' }}
        className="absolute z-0 w-full"
      />
      <Image
        src="/assets/profil-ukm-komunitas/tentang-bg-mobile.png"
        alt="bg tanah"
        width={1000}
        height={1000}
        style={{ objectFit: 'cover' }}
        className="h-full md:hidden"
      />
      <Image
        src="/assets/profil-ukm-komunitas/tentang-bg-desktop.png"
        alt="bg tanah"
        width={1000}
        height={1000}
        style={{ objectFit: 'cover' }}
        className="hidden h-full w-full md:block"
      />
    </div>
  )
}
