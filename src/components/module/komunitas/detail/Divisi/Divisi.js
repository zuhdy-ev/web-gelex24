import React from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import '../../../../../app/globals.css'

export default function Divisi({ divisions }) {
  return (
    <section className="flex h-[70vh] w-full flex-col items-center justify-center">
      <div className="mb-10">
        <Image
          src="/assets/profil-ukm-komunitas/divisi-judul-desktop.png"
          alt="judul divisi"
          width={100}
          height={100}
          className="w-32 md:w-40 lg:w-48 laptopL:w-56"
        />
      </div>
      <div className="relative flex h-[45vh] w-full items-center justify-center pl-5 pr-5">
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
          {divisions.map((item) => (
            <SwiperSlide>
              <div className="flex h-[250px] w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-tr from-[#C66C3A] to-[#FFE5AF] p-2">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-md bg-gradient-to-tr from-[#22564D] to-[#80A252] p-4">
                  <h1 className="text-center font-mulish text-[20px] font-bold text-white s:text-[18px] lg:text-[25px]">
                    {item.name == item.short ? item.name : `${item.name} (${item.short})`}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
