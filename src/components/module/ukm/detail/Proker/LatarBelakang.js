import React from 'react'
import Image from 'next/image'

export default function LatarBelakang() {
  return (
    <div className="relative h-[90vh] lg:h-screen w-screen bg-gradient-to-b from-[#D2AD80] via-[#FFE5AF] to-[#BAC97D]">
      <Image
        src="/assets/profil-ukm-komunitas/proker-bg-tekstur-mobile.png"
        alt="bg tekstur"
        width={1000}
        height={1080}
        style={{ objectFit: 'cover' }}
        className="absolute z-0 h-full w-full opacity-30"
      />
      <Image
        src="/assets/profil-ukm-komunitas/proker-bg-tanaman-mobile.png"
        alt="bg tanaman"
        width={1000}
        height={1080}
        style={{ objectFit: 'cover' }}
        className="absolute z-10 w-full md:hidden"
      />
      <Image
        src="/assets/profil-ukm-komunitas/proker-bg-tanaman-desktop.png"
        alt="bg tanaman"
        width={1000}
        height={1080}
        style={{ objectFit: 'cover' }}
        className="absolute z-10 hidden w-full md:block"
      />
    </div>
  )
}