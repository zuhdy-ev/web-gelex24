import React from 'react'
import Image from 'next/image'

export default function Maskot() {
  return (
    <section
      className="relative flex h-screen w-screen justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #99535C 4%, #333279 44%)',
      }}
    >
      {/* Background */}
      {/* <div className="absolute z-0 h-full w-full">
        <Image
          src="/assets/tentang/maskot-bg-mobile.png"
          width={1000}
          height={1000}
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          alt="bg maskot"
          className="h-full w-full md:hidden"
        />
        <Image
          src="/assets/tentang/maskot-bg-mobile.png"
          width={1000}
          height={1000}
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          alt="bg maskot"
          className="h-full w-full hidden md:block"
        />
      </div> */}
      {/* Content */}
      {/* Langit */}
      <div className="absolute top-20 z-10 w-full">
        <Image
          src="/assets/tentang/maskot-langit-mobile.png"
          width={1000}
          height={1000}
          alt="langit maskot"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          className="md:hidden"
        />
      </div>
      {/* Tanah */}
      <div className="relative flex h-screen w-full min-w-[30rem] items-center justify-center">
        <div className="absolute bottom-0 z-10 w-full s:-bottom-28 md:bottom-0 md:h-screen">
          <Image
            src="/assets/tentang/maskot-tanah-mobile.png"
            width={1000}
            height={1000}
            alt="tanah maskot"
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            className="md:hidden"
          />
          <Image
            src="/assets/tentang/maskot-tanah-desktop.png"
            width={1000}
            height={1000}
            alt="tanah maskot"
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            className="bottom-0 hidden h-full md:block"
          />
        </div>
      </div>
      <div className="absolute top-5 z-20 w-[80%] md:w-[50%] lg:w-[35%]">
        <Image
          src="/assets/tentang/maskot-judul-mobile.png"
          width={1000}
          height={1000}
          alt="judul maskot"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          className=""
        />
      </div>
      <div className="absolute bottom-10 z-30 flex h-1/3 w-full flex-col items-start justify-center gap-2 p-5 xxs:flex-row s:items-center md:bottom-0 md:h-1/2 lg:h-3/4 lg:justify-between laptopL:px-16 maxWidth:w-[1920px]">
        <div className="flex h-fit w-full flex-col items-center justify-start rounded-3xl border-[10px] border-[#E6A263] bg-gradient-to-br from-[#FFE5AF] via-[#FFFFFF] to-[#FFE5AF] p-1 text-white xxs:w-1/2 md:p-3 lg:w-[300px] laptopL:w-[500px]">
          <Image
            src="/assets/tentang/maskot-card-gilang-judul-mobile.png"
            width={1000}
            height={1000}
            alt="maskot 1"
            className="w-32 xs:w-40 md:w-fit lg:h-10 laptopL:h-[58px]"
          />
          <p className="px-1 text-justify text-[9px] leading-relaxed text-black xs:text-[10px] lg:text-[17px] laptopL:text-[20px]">
            Sambutlah petualang pertama kita! Gilang, maskot Gelanggang Expo yang siap menemani
            perjalananmu dalam menjelajah Gemilang Ekspresi Gelanggang tahun ini. Dengan
            kepribadiannya yang hangat bagai mentari, keceriaan akan terus terpancar di tiap sudut
            petualanganmu!
          </p>
        </div>
        <div className="flex h-fit w-full flex-col items-center justify-start rounded-3xl border-[10px] border-[#E6A263] bg-gradient-to-br from-[#FFE5AF] via-[#FFFFFF] to-[#FFE5AF] p-1 text-white xxs:w-1/2 md:p-3 lg:w-[300px] laptopL:w-[500px]">
          <Image
            src="/assets/tentang/maskot-card-gantari-judul-mobile.png"
            width={1000}
            height={1000}
            alt="maskot 1"
            className="w-32 xs:w-40 md:w-fit lg:h-10 laptopL:h-[58px]"
          />
          <p className="px-1 text-justify text-[9px] leading-relaxed text-black xs:text-[10px] lg:text-[17px] laptopL:text-[20px]">
            Lalu, inilah Gantari! Maskot Gelanggang Expo yang juga siap menemani perjalananmu dalam
            menjelajah Gemilang Ekspresi Gelanggang tahun ini. Langkahnya yang berani akan terus
            membantumu yakin untuk melangkah maju dalam tiap petualanganmu!
          </p>
        </div>
      </div>
    </section>
  )
}
