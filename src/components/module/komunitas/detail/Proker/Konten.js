import React from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import '../../../../../app/globals.css'

export default function Konten( { programs } ) {
  return (
    <div className="flex h-[90vh] w-screen flex-col items-center justify-center gap-5 lg:h-screen">
      <div className="w-80 md:w-[500px] lg:w-[600px] laptopL:w-[700px]">
        <Image
          src="/assets/profil-ukm-komunitas/proker-judul-mobile.png"
          alt="judul"
          style={{ objectFit: 'cover' }}
          width={1000}
          height={1000}
        />
      </div>
      <div className="relative flex h-[45vh] w-full items-center justify-center pl-5 pr-5 md:h-[45%]">
        <Swiper
          slidesPerView={1.3}
          spaceBetween={10}
          breakpoints={{
            500: {
              slidesPerviw: 1.5,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: '3.5',
              spaceBetween: 30,
            },
          }}
          className="flex w-full items-center justify-center"
        >
          {programs.map((item) => (<SwiperSlide>
            <div className="flex h-[350px] w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-tr from-[#C66C3A] to-[#FFE5AF] p-2">
              <div className="flex h-full w-full flex-col items-start rounded-md bg-gradient-to-tr from-[#22564D] to-[#80A252] p-4">
                <h1 className="text-left font-mulish text-[18px] font-bold text-white s:text-[18px] lg:text-[25px] laptopL:text-[30px]">
                  {item.name}
                </h1>
                <hr className="h-1 w-full" />
                <p className="font-molish h-full w-full overflow-y-auto scrollbar-list pr-2 text-justify text-[15px] text-white s:text-[12px] lg:text-[15px] laptopL:text-[20px]">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>))}
        </Swiper>
      </div>
    </div>
  )
}
