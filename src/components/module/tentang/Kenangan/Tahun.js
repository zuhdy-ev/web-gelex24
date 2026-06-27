'use client'
import React from 'react'
import Image from 'next/image'

export default function Tahun({ status, setStatus }) {
  const tahun2020 = () => {
    setStatus('2020')
  }
  const tahun2021 = () => {
    setStatus('2021')
  }

  const tahun2022 = () => {
    setStatus('2022')
  }

  const tahun2023 = () => {
    setStatus('2023')
  }

  return (
    <main className="relative flex h-full w-full flex-col items-center justify-center translate-y-3 xxxs:translate-y-11">
      {/* Tahun */}
      <div className="flex h-full w-full max-w-[800px] items-center justify-center gap-3 px-5 s:w-[85vw] md:w-[70vw] lg:gap-10">
        <button
          className={`flex h-24 flex-col items-center justify-end ${status == '2020' ? '-translate-y-1 scale-110' : 'translate-y-[6px] scale-90'}`}
          onClick={tahun2020}
        >
          <Image
            src="/assets/tentang/kenangan-kayu-2020-active-desktop.png"
            width={1000}
            height={1000}
            alt="tahun kayu 2020"
            className={`w-[50%] ${status == '2020' ? 'block w-[70rem]' : 'hidden'}`}
          />
          <Image
            src="/assets/tentang/kenangan-kayu-2020-desktop.png"
            width={1000}
            height={1000}
            alt="tahun kayu 2020"
            className={`${status == '2020' ? 'hidden' : 'block'}`}
          />
        </button>
        <button
          className={`flex h-24 flex-col items-center justify-end ${status == '2021' ? '-translate-y-1 scale-110' : 'translate-y-[6px] scale-90'}`}
          onClick={tahun2021}
        >
          <Image
            src="/assets/tentang/kenangan-kayu-2021-active-desktop.png"
            width={1000}
            height={1000}
            alt="tahun kayu 2021"
            className={`w-[50%] ${status == '2021' ? 'block w-[70rem]' : 'hidden'}`}
          />
          <Image
            src="/assets/tentang/kenangan-kayu-2021-desktop.png"
            width={1000}
            height={1000}
            alt="tahun kayu 2021"
            className={`${status == '2021' ? 'hidden' : 'block'}`}
          />
        </button>
        <button
          className={`flex h-24 flex-col items-center justify-end ${status == '2022' ? '-translate-y-1 scale-110' : 'translate-y-[7px] scale-90'}`}
          onClick={tahun2022}
        >
          <Image
            src="/assets/tentang/kenangan-kayu-2022-active-desktop.png"
            width={1000}
            height={1000}
            alt="tahun kayu 2022"
            className={`w-[50%] ${status == '2022' ? 'block w-[70rem]' : 'hidden'}`}
          />
          <Image
            src="/assets/tentang/kenangan-kayu-2022-desktop.png"
            width={1000}
            height={1000}
            alt="tahun kayu 2022"
            className={`${status == '2022' ? 'hidden' : 'block'}`}
          />
        </button>
        <button
          className={`flex h-24 flex-col items-center justify-end ${status == '2023' ? '-translate-y-1 scale-110' : 'translate-y-[6px] scale-90'}`}
          onClick={tahun2023}
        >
          <Image
            src="/assets/tentang/kenangan-kayu-2023-active-desktop.png"
            width={1000}
            height={1000}
            alt="tahun kayu 2023"
            className={`w-[50%] ${status == '2023' ? 'block w-[70rem]' : 'hidden'}`}
          />
          <Image
            src="/assets/tentang/kenangan-kayu-2023-desktop.png"
            width={1000}
            height={1000}
            alt="tahun kayu 2023"
            className={`${status == '2023' ? 'hidden' : 'block'}`}
          />
        </button>
      </div>
      {/* Pembatas kayu */}
      <div className="w-screen lg:h-3">
        <Image
          src="/assets/tentang/kenangan-kayu-desktop.png"
          width={1000}
          height={1000}
          alt="kayu"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          className="w-full"
        />
      </div>
    </main>
  )
}
