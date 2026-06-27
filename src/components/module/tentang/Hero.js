import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="relative flex h-screen w-screen items-center justify-center"
      style={{
        background: 'linear-gradient(to bottom, #51284F, #E6A263 43%, #E6A263 100%)',
      }}
    >
      {/* Latar Belakang */}
      <div className="absolute bottom-0 z-0 w-full">
        <Image
          src="/assets/tentang/hero-tanah-mobile.png"
          width={1000}
          height={1000}
          alt="tanah"
          className="h-full w-full lg:hidden"
        />
        <Image
          src="/assets/tentang/hero-tanah-desktop.png"
          width={1000}
          height={1000}
          alt="tanah"
          className="hidden h-full w-full lg:block"
        />
      </div>
      <div className="absolute bottom-10 z-10 flex w-full justify-center lg:bottom-0">
        <Image
          src="/assets/tentang/hero-lubang-mobile.png"
          width={1000}
          height={1000}
          alt="lubang"
          className="h-full w-full s:bottom-[20vw] md:w-[80vw] lg:hidden"
          priority
        />
        <Image
          src="/assets/tentang/hero-lubang-desktop.png"
          width={1000}
          height={1000}
          alt="lubang"
          className="hidden h-full w-full max-w-max lg:block lg:w-[75vw] lg:-translate-x-5"
        />
      </div>
      {/* Konten Utama & Asset Depan */}
      <div className="absolute z-10 flex h-full w-full items-center justify-center">
        {/* Langit */}
        <div className="absolute top-0 flex w-full items-center justify-center md:hidden">
          <Image
            src="/assets/tentang/hero-langit-mobile.png"
            width={1000}
            height={1000}
            alt="langit"
            className="w-full"
          />
        </div>
        <div className="absolute top-0 hidden w-full items-center justify-center md:block lg:-translate-y-20">
          <Image
            src="/assets/tentang/hero-langit-desktop.png"
            width={1000}
            height={1000}
            alt="langit"
            className="w-full"
            priority={true}
          />
        </div>
        {/* Semak-semak & Lampu */}
        <div className="absolute bottom-0 flex w-full items-end justify-between">
          {/* Kiri */}
          <Image
            src="/assets/tentang/hero-tanaman-kiri-mobile.png"
            width={1000}
            height={1000}
            alt="tanaman di kiri"
            className="w-[40vw] md:hidden"
          />
          <Image
            src="/assets/tentang/hero-tanaman-kiri-desktop.png"
            width={1000}
            height={1000}
            alt="tanaman di kiri"
            className="hidden w-[30vw] max-w-max md:block lg:w-[20vw]"
          />
          {/* Kanan */}
          <Image
            src="/assets/tentang/hero-tanaman-kanan-mobile.png"
            width={1000}
            height={1000}
            alt="tanaman di kanan"
            className="w-[40vw] md:hidden"
          />
          <Image
            src="/assets/tentang/hero-tanaman-kanan-desktop.png"
            width={1000}
            height={1000}
            alt="tanaman di kanan"
            className="hidden w-[35vw] max-w-max md:block lg:w-[20vw]"
          />
        </div>
        {/* Konten Utama */}
        <div className="absolute flex h-full max-w-max flex-col items-center justify-center gap-5 lg:w-full lg:gap-0">
          {/* Judul */}
          <div className="">
            <Image
              src="/assets/tentang/hero-judul-mobile.png"
              width={1000}
              height={1000}
              alt="logo dan judul"
              className="w-[70vw] -translate-y-[20vw] s:-translate-y-[25vw] md:w-[50vw] md:-translate-y-[20vw] lg:hidden"
            />
            <Image
              src="/assets/tentang/hero-judul-desktop.png"
              width={1000}
              height={1000}
              alt="logo dan judul"
              className="hidden w-[35vw] max-w-max lg:block lg:-translate-y-[6vw] maxWidth:-translate-y-32"
            />
          </div>
          {/* Deskripsi */}
          <div className="flex max-w-[800px] -translate-y-[20vw] justify-center s:-translate-y-[25vw] md:-translate-y-[20vw] lg:mt-5 lg:w-[35vw] lg:-translate-y-[6vw] maxWidth:-translate-y-32">
            <p className="w-[65vw] text-justify font-mulish text-[10px] text-[#CC2E59] xs:text-sm md:w-[48vw] md:text-center lg:w-[40vw] lg:text-[17px]">
              Gelanggang Expo atau Gelex, merupakan acara rutin tahunan yang menyajikan beragam
              pameran dan penampilan Unit Kegiatan Mahasiswa (UKM) serta beberapa komunitas. Gelex
              akan membantumu untuk mengenal lebih jauh mengenai berbagai UKM dan Komunitas yang ada
              di UGM. Tahun ini, Gelex akan diselenggarakan pada tanggal 21-23 Agustus 2024 di
              Lapangan Pancasila UGM. Mengusung tema Gemilang Ekspresi Gelanggang, Gelex hadir untuk
              membantu menyorakkan ekspresi melalui berbagai UKM dan Komunitas yang akan menjadi
              wadah untuk mengembangkan minat dan bakatmu.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
