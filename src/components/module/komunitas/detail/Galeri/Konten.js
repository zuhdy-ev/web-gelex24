import React, { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import 'swiper/css'
import '../../../../../app/globals.css'

// export default function Konten({ foto1, foto2, foto3, foto4, foto5, foto6 }) {
export default function Konten({ gallery }) {
  const [currentFoto, setCurrentFoto] = useState(gallery[0].url)

  // const handleFotoClick = (foto) => {
  //   setCurrentFoto(foto)
  // }

  const handleFotoClick = (url) => {
    setCurrentFoto(`https://drive.google.com/uc?export=view&id=${url}`)
  }

  return (
    <div className="flex h-[70vh] w-screen max-w-[1920px] flex-col items-center justify-center gap-3 p-2 xs:h-[80vh] md:h-screen md:min-h-[810px]">
      {/* Judul */}
      <div className="flex w-full max-w-[1920px] items-center justify-center gap-5 lg:w-[80%]">
        <div>
          <Image
            src="/assets/profil-ukm-komunitas/hero-asset-nama-mobile.png"
            alt="asset nama"
            width={100}
            height={100}
            className="opacity-30"
          />
        </div>
        <div>
          <p className="max-w-[1920px] font-magicretro text-[30px] text-green-900 s:text-[50px] lg:text-[60px]">
            Galeri
          </p>
        </div>
        <div>
          <Image
            src="/assets/profil-ukm-komunitas/hero-asset-nama-mobile.png"
            alt="asset nama"
            width={100}
            height={100}
            className="scale-x-[-1] transform opacity-30"
          />
        </div>
      </div>
      {/* Foto Besar */}
      <div
        className="relative w-full max-w-[1000px] rounded-lg bg-gradient-to-tr from-[#22564D] to-[#FFE5AF] p-1 lg:w-[80%] lg:rounded-3xl lg:p-3"
        style={{ aspectRatio: '16/9' }}
      >
        {/* Asset */}
        <div className="absolute h-full w-full">
          <div className="absolute -bottom-1 right-0 s:-bottom-1 lg:-bottom-2 lg:-right-2">
            <Image
              src="/assets/profil-ukm-komunitas/galeri-asset-foto-1-mobile.png"
              alt="asset foto 1"
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
              className="w-32 md:w-40 lg:hidden"
            />
            <Image
              src="/assets/profil-ukm-komunitas/galeri-asset-foto-1-desktop.png"
              alt="asset foto 1"
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
              className="hidden w-40 lg:block laptopL:w-64"
            />
          </div>
          <div className="absolute -bottom-10 -left-8 z-10 s:-bottom-11 s:-left-11 md:-bottom-16 lg:-bottom-14 lg:-left-14 laptopL:-bottom-[60px]">
            <Image
              src="/assets/profil-ukm-komunitas/galeri-asset-foto-2-mobile.png"
              alt="asset foto 2"
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
              className="w-32 s:w-40 md:w-52 lg:hidden"
            />
            <Image
              src="/assets/profil-ukm-komunitas/galeri-asset-foto-2-desktop.png"
              alt="asset foto 2"
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
              className="hidden w-56 lg:block laptopL:w-96"
            />
          </div>
          <div className="absolute -left-5 -top-8">
            <Image
              src="/assets/profil-ukm-komunitas/galeri-asset-foto-3-mobile.png"
              alt="asset foto 3"
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
              className="w-10 s:w-14 md:w-20 lg:hidden"
            />
            <Image
              src="/assets/profil-ukm-komunitas/galeri-asset-foto-3-desktop.png"
              alt="asset foto 3"
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
              className="hidden w-20 lg:block laptopL:w-32"
            />
          </div>
        </div>
        {/* Foto onClick */}
        <div
          className="h-full w-full overflow-hidden rounded-md bg-black lg:rounded-xl"
          style={{ aspectRatio: '16/9' }}
        >
          <Image
            src={currentFoto}
            alt="foto besar"
            style={{ objectFit: 'cover' }}
            width={1000}
            height={1000}
            className=""
          />
        </div>
      </div>
      {/* Foto Kecil */}
      <div className="z-0 mt-5 w-full max-w-[1000px] overflow-hidden rounded-lg lg:w-[80%]">
        <Swiper
          slidesPerView={1.8}
          spaceBetween={10}
          breakpoints={{
            425: {
              slidesPerviw: 2.5,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 5.5,
              spaceBetween: 10,
            },
          }}
          className=""
        >
          {gallery.map((item) => (
            <SwiperSlide key={item.url}>
              <div
                className="flex w-60 cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg border hover:border-[3px] hover:border-yellow-500"
                onClick={() => handleFotoClick(item.url)}
                style={{ aspectRatio: '16/9' }}
              >
                <Image
                  src={item.url}
                  alt={item.alt}
                  width={1000}
                  height={1000}
                  className=""
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
