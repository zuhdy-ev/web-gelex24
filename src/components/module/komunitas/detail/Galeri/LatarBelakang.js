import React from 'react'
import Image from 'next/image'

export default function LatarBelakang() {
  return (
    <div className="relative h-[70vh] w-screen max-w-[1920px] xs:h-[80vh] md:h-screen md:min-h-[810px]">
      <Image
        src="/assets/profil-ukm-komunitas/galeri-bg-bintang-desktop.png"
        alt="bg bintang"
        width={100}
        height={100}
        style={{ objectFit: 'cover' }}
        className="absolute right-5 top-10 -z-10 lg:right-40 laptopL:right-80"
      />
    </div>
  )
}
