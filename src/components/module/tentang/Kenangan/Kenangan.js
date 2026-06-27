'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Tahun from './Tahun'
import Konten from './Konten'

export default function Kenangan() {
  const [status, setStatus] = useState('2020')

  return (
    <section
      className="relative h-screen w-screen overflow-hidden xs:h-[120vh] md:h-screen"
      style={{
        background: 'linear-gradient(to bottom, #5D3251 0%, #99535C 45%)',
      }}
    >
      {/* Background */}
      <div className="absolute z-0 h-full w-full">
        <Image
          src="/assets/tentang/kenangan-bg-mobile.png"
          width={0}
          height={0}
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          alt="bg kenangan"
          className="h-full w-full md:hidden"
        />
        <Image
          src="/assets/tentang/kenangan-bg-desktop.png"
          width={0}
          height={0}
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          alt="bg kenangan"
          className="hidden h-full w-full md:block"
        />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 laptopL:translate-y-10">
        {/* Tahun */}
        <div>
          <Tahun status={status} setStatus={setStatus} />
        </div>
        {/* Konten */}
        <div>
          <Konten status={status} />
        </div>
      </div>
    </section>
  )
}
