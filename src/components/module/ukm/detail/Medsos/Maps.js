import React from 'react'
import Image from 'next/image'

export default function Maps({ location }) {
  return (
    <div>
      {/* Judul Section */}
      <div className="flex items-center justify-center tanggung:gap-3 md:mb-8">
        <Image
          src="/assets/profil-ukm-komunitas/hero-asset-nama-mobile.png"
          alt="asset"
          width={100}
          height={100}
          objectFit="cover"
          className="h-fit w-10 opacity-30 md:w-32"
        />
        <Image
          src="/assets/profil-ukm-komunitas/medsos-judul-medsos-desktop.png"
          alt="judul medsos"
          width={1000}
          height={1000}
          objectFit="cover"
          className="w-40 tanggung:w-52 md:w-72 lg:w-[400px] laptopL:w-[500px]"
        />
        <Image
          src="/assets/profil-ukm-komunitas/hero-asset-nama-mobile.png"
          alt="asset"
          width={100}
          height={100}
          objectFit="cover"
          className="h-fit w-10 scale-x-[-1] transform opacity-30 md:w-32"
        />
      </div>
      {/* Konten Maps */}
      <div className="flex max-w-[1200px] flex-col gap-2 tanggung:mb-2 tanggung:flex-row s:mb-5 md:mb-8 lg:gap-5 lg:px-10">
        {/* Google Maps */}
        <div className="aspect-video-horizontal w-full max-w-[450px] rounded-lg bg-gradient-to-br from-[#C66C3A] via-[#6A2C1F] to-[#43152E] p-1 md:aspect-square">
          {location.url == '' ? (
            <div className="flex h-full w-full items-center justify-center text-white">
              Google Maps tidak tersedia
            </div>
          ) : (
            <iframe
              width="600"
              height="450"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src={location.url}
              className="aspect-video-horizontal h-full w-full rounded-md md:aspect-square"
            ></iframe>
          )}
        </div>
        {/* Keterangan */}
        <div className="my-1 w-full gap-3 tanggung:my-0">
          <div className="flex w-full items-center justify-center tanggung:items-start md:mb-3 lg:mb-5">
            <Image
              src="/assets/profil-ukm-komunitas/medsos-judul-maps-desktop.png"
              width={100}
              height={100}
              objectFit="cover"
              alt="judul maps"
              className="w-[70%] tanggung:w-full lg:w-96"
            />
          </div>
          <div className="my-1">
            <p className="text-center font-mulish text-[12px] tanggung:text-justify md:text-[16px] lg:text-[1.5vw] laptopL:text-[25px]">
            {location.detail == '' ? 'Alamat tidak tersedia' : location.detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
