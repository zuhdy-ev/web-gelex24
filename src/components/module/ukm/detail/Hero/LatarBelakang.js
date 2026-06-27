'use client'
import React from 'react'
import Image from 'next/image'

export default function HeroDetailKomunitas() {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[#FF8A99]">
      {/* --- Mobile --- */}
      {/* Awan */}
      <div className="h-[50%] w-full lg:hidden">
        <Image
          src={'/assets/profil-ukm-komunitas/hero-awan-mobile.png'}
          style={{ objectFit: 'cover' }}
          alt="Awan"
          width={375}
          height={375}
          priority={true}
          className="w-full"
        />
      </div>
      {/* Pohon */}
      <div className="flex h-[50%] w-full items-end lg:hidden">
        <Image
          src={'/assets/profil-ukm-komunitas/hero-pohon-mobile.png'}
          style={{ objectFit: 'cover' }}
          alt="Pohon"
          width={375}
          height={375}
          priority={true}
          className="w-full"
        />
      </div>
      {/* --- Desktop --- */}
      <div className="hidden h-full w-full lg:flex">
        <Image
          src={'/assets/profil-ukm-komunitas/hero-pohon-awan-desktop.png'}
          style={{ objectFit: 'cover' }}
          alt="Awan"
          width={1920}
          height={1080}
          priority={true}
          className="w-full"
        />
      </div>
    </div>
  )
}
