import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Konten({ nama, video, oprec, guidebook }) {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center lg:pt-40 laptopL:pt-10">
      {/* Tombol Kembali */}
      <div className="mb-2 w-[90%] max-w-[1100px] md:w-[700px] lg:w-[80%]">
        <Link href={`/ukm`} className="">
          <p className="w-fit rounded-lg bg-gradient-to-tr from-[#7F152E] to-[#F15075] px-5 py-1 text-[10px] text-white s:text-base">
            <span className="mr-2">{'\u2190'}</span>
            Kembali ke laman sebelumnya
          </p>
        </Link>
      </div>
      {/* Konten */}
      <div className="flex h-[70vw] w-[90%] max-w-[1100px] flex-col items-center justify-center rounded-2xl bg-gradient-to-r from-[#6D382C] to-[#E6A263] p-2 s:rounded-3xl s:p-3 md:h-[500px] md:w-[700px] md:p-4 lg:h-[550px] lg:w-[80%] lg:p-2">
        {/* Konten utama */}
        <div className="h-full w-full rounded-xl bg-gradient-to-tr from-[#7F152E] to-[#F15075] lg:h-[550px]">
          {/* Nama */}
          <div className="mt-3 flex h-[15%] w-full items-center justify-center">
            <div className="flex w-[20%] justify-end px-2">
              <Image
                src="/assets/profil-ukm-komunitas/hero-asset-nama-mobile.png"
                alt="asset nama"
                width={100}
                height={100}
                className="opacity-30"
              />
            </div>
            <div className="flex w-[60%] items-center justify-center">
              <h1 className="line h-full w-full text-center font-magicretro text-[20px] text-goldgradientStart s:text-[25px] lg:text-[30px]">
                {nama}
              </h1>
            </div>
            <div className="flex w-[20%] justify-start px-2">
              <Image
                src="/assets/profil-ukm-komunitas/hero-asset-nama-mobile.png"
                alt="asset nama"
                width={100}
                height={100}
                className="scale-x-[-1] transform opacity-30"
              />
            </div>
          </div>
          {/* Video */}
          <div className="mt-3 flex w-full items-center justify-center md:mt-2 lg:px-10">
            <div
              className="w-[90%] overflow-hidden rounded-lg lg:w-[650px] laptopL:w-[700px]"
              style={{ aspectRatio: '16/9' }}
            >
              <iframe
                src={`https://drive.google.com/file/d/${video}/preview`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="w-full"
                style={{ aspectRatio: '16/9' }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Oprec */}
      <div className="flex w-full items-center justify-center gap-5 md:w-[700px] lg:w-[1000px]">
        <div className="w-[40%] -translate-y-5 transform rounded-[10px] border-2 border-[#813322] bg-gradient-to-b from-[#FFE5AF] to-[#E6A263] transition-transform hover:scale-110 s:-translate-y-6 md:border-[3px] lg:w-[30%]">
          <Link href={oprec && oprec !== '' ? `${oprec}` : '/not-found'} target="_blank">
            <p className="px-2 py-1 text-center font-mulish text-[9px] font-bold s:text-[15px] lg:text-[18px]">
              Informasi oprec di sini! <span>↗</span>
            </p>
          </Link>
        </div>
        <div className="w-[40%] -translate-y-5 transform rounded-[10px] border-2 border-[#813322] bg-gradient-to-b from-[#FFE5AF] to-[#E6A263] transition-transform hover:scale-110 s:-translate-y-6 md:border-[3px] lg:w-[30%]">
          <Link
            href={guidebook && guidebook !== '' ? `${guidebook}` : '/not-found'}
            target="_blank"
          >
            <p className="px-2 py-1 text-center font-mulish text-[9px] font-bold s:text-[15px] lg:text-[18px]">
              Guidebook <span>↗</span>
            </p>
          </Link>
        </div>
      </div>
      {/* Latar Belakang Desktop */}
      <div className="absolute bottom-0 right-0 z-10 hidden h-fit w-fit text-xl lg:block">
        <Image
          src="/assets/profil-ukm-komunitas/hero-arah-desktop.png"
          alt="arah"
          width={300}
          height={300}
          className=""
        />
      </div>
    </div>
  )
}
