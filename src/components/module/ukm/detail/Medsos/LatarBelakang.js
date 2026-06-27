import React from 'react'
import Image from 'next/image'
import Footer from '@/components/layout/Footer'

export default function LatarBelakang() {
  return (
    <div className="relative flex h-[130vh] w-full flex-col justify-end md:h-[200vh] lg:h-[260vh]">
      {/* Latar Belakang */}
      <div className="laptopL:-translate-0 absolute flex h-full w-full -translate-y-[90vw] items-center justify-center mepet:-translate-y-[30vw] md:-translate-y-[30vw] lg:-translate-y-[10vw]">
        <Image
          src="/assets/profil-ukm-komunitas/medsos-bg-bawah-mobile.png"
          alt="bg bawah"
          width={1000}
          height={1000}
          objectFit="cover"
          className="w-full"
        />
      </div>
      {/* Footer */}
      <div className="">
        <Footer />
      </div>
    </div>
  )
}
