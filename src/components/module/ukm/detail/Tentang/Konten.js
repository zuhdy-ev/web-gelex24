import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

export default function Konten({ logo, nama, description, history, unggulan, achievements }) {
  const [status, setStatus] = useState('tentang')

  const tentang = () => {
    setStatus('tentang')
  }

  const sejarah = () => {
    setStatus('sejarah')
  }

  const programUnggulan = () => {
    setStatus('programUnggulan')
  }

  const prestasi = () => {
    setStatus('prestasi')
  }

  return (
    <div className="mt-10 flex h-[130vh] w-screen flex-col items-center lg:mt-20">
      {/* Logo UKM/Komunitas */}
      <div className="mb-3 w-40 rounded-lg border-[5px] border-stone-900 bg-white bg-opacity-90 p-3 lg:w-48">
        <Image
          src={'/' + logo}
          alt="logo ukm"
          style={{ objectFit: 'cover' }}
          width={1000}
          height={1000}
        />
      </div>
      <div className="mb-5 text-center">
        {/* Tentang */}
        <h1 className="text-shadow font-magicretro text-[20px] text-[#FFE5AF] drop-shadow-xl md:text-[35px] lg:text-[45px]">
          Tentang
        </h1>
        {/* Nama UKM/Komunitas */}
        <h1 className="text-shadow font-magicretro text-[30px] text-[#FFE5AF] drop-shadow-xl md:text-[45px] lg:text-[55px]">
          {nama}
        </h1>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-3">
        {/* Tombol Filter */}
        <div className="flex w-[90%] flex-wrap items-center justify-center gap-1 md:gap-2 lg:w-full">
          <button className={`${status == 'tentang' ? '' : 'hover:opacity-80'}`} onClick={tentang}>
            <Image
              src={`${status == 'tentang' ? '/assets/profil-ukm-komunitas/tentang-filter-button-onClick-tentang-desktop.png' : '/assets/profil-ukm-komunitas/tentang-filter-button-tentang-desktop.png'}`}
              alt="button tentang"
              style={{ objectFit: 'cover' }}
              width={130}
              height={130}
              className="s:w-40 lg:w-52 laptopL:w-64"
            />
          </button>
          <button className={`${status == 'sejarah' ? '' : 'hover:opacity-80'}`} onClick={sejarah}>
            <Image
              src={`${status == 'sejarah' ? '/assets/profil-ukm-komunitas/tentang-filter-button-onClick-sejarah-desktop.png' : '/assets/profil-ukm-komunitas/tentang-filter-button-sejarah-desktop.png'}`}
              alt="button sejarah"
              style={{ objectFit: 'cover' }}
              width={130}
              height={130}
              className="s:w-40 lg:w-52 laptopL:w-64"
            />
          </button>
          <button
            className={`${status == 'programUnggulan' ? '' : 'hover:opacity-80'}`}
            onClick={programUnggulan}
          >
            <Image
              src={`${status == 'programUnggulan' ? '/assets/profil-ukm-komunitas/tentang-filter-button-onClick-program-unggulan-desktop.png' : '/assets/profil-ukm-komunitas/tentang-filter-button-program-unggulan-desktop.png'}`}
              alt="button program unggulan"
              style={{ objectFit: 'cover' }}
              width={130}
              height={130}
              className="s:w-40 lg:w-52 laptopL:w-64"
            />
          </button>
          <button
            className={`${status == 'prestasi' ? '' : 'hover:opacity-80'}`}
            onClick={prestasi}
          >
            <Image
              src={`${status == 'prestasi' ? '/assets/profil-ukm-komunitas/tentang-filter-button-onClick-prestasi-desktop.png' : '/assets/profil-ukm-komunitas/tentang-filter-button-prestasi-desktop.png'}`}
              alt="button prestasi"
              style={{ objectFit: 'cover' }}
              width={130}
              height={130}
              className="s:w-40 lg:w-52 laptopL:w-64"
            />
          </button>
        </div>
        {/* Konten */}
        <div className="h-[400px] w-[90%] overflow-y-auto scrollbar-list rounded-lg border-2 border-[#E6A263] bg-black bg-opacity-50 p-5 text-justify text-[12px] text-white s:text-[15px] lg:h-[500px] lg:w-[900px] lg:border-[5px] lg:text-[18px] laptopL:w-[1080px]">
          <p className={`${status == 'tentang' ? '' : 'hidden'}`}>{description}</p>
          <p className={`${status == 'sejarah' ? '' : 'hidden'}`}>{history}</p>
          {unggulan.map((unggulan, index) => (
            <p key={index} className={`${status == 'programUnggulan' ? '' : 'hidden'}`}>
              {unggulan.length > 1 ? `\u2022 ${unggulan}` : unggulan}
            </p>
          ))}
          {achievements.map((achievements, index) => (
            <p key={index} className={`${status == 'prestasi' ? '' : 'hidden'}`}>
              {achievements.length > 1 ? `\u2022 ${achievements}` : achievements}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
