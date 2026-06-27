'use client'
import React from 'react'
import Nav from '@/components/layout/Nav'
import {
  HeroDetailKomunitas,
  TentangDetailKomunitas,
  ProkerDetailKomunitas,
  GaleriDetailKomunitas,
  DivisiDetailKomunitas,
  MedsosDetailKomunitas,
} from '@/components/module/komunitas/detail/page'
import Image from 'next/image'
// import dataKomunitas from '@/data/komunitas.json'
import dataKomunitas from '@/data/komunitas.json'
import { convertToSlug } from './page'

export default function DetailKomunitas({ params }) {
  console.log(params)
  const { komunitasId } = params
  // const komunitas = dataKomunitas.find((komunitas) => convertToSlug(komunitas.name) === komunitasId)
  const komunitas = dataKomunitas.find((komunitas) => convertToSlug(komunitas.name) === komunitasId)

  if (!komunitas) {
    return <div>Komunitas tidak ditemukan</div>
  }

  return (
    <main className="flex flex-col items-center justify-center overflow-hidden">
      {/* ----- Navbar ----- */}
      <Nav />
      {/* ----- Hero ----- */}
      <div className="flex h-screen w-screen items-center justify-center">
        <HeroDetailKomunitas
          nama={komunitas.alias}
          video={komunitas.video}
          oprec={komunitas.recruitment.oprec}
          guidebook={komunitas.recruitment.guidebook}
        />
      </div>
      {/* ----- Tentang & Proker ----- */}
      <div className="relative flex w-full flex-col">
        {/* Tentang */}
        <div className="relative flex h-[130vh] w-full items-center justify-center">
          {/* Konten */}
          <TentangDetailKomunitas
            logo={komunitas.logo}
            nama={komunitas.name}
            description={komunitas.description}
            history={komunitas.history}
            unggulan={komunitas.unggulan}
            achievements={komunitas.prestasi}
          />
          {/* Gilang */}
          <div className="absolute -bottom-20 left-0 z-50 md:-bottom-32 laptopL:-bottom-40">
            <Image
              src="/assets/profil-ukm-komunitas/tentang-bg-gilang-desktop.png"
              alt="bg gilang"
              width={200}
              height={200}
              className="md:w-[250px] lg:w-[300px] laptopL:w-[400px]"
            />
          </div>
          {/* Gantari */}
          <div className="absolute bottom-0 right-0 z-50">
            <Image
              src="/assets/profil-ukm-komunitas/tentang-bg-gantari-desktop.png"
              alt="bg gantari"
              width={100}
              height={100}
              className="md:w-[130px] lg:w-[150px] laptopL:w-[250px]"
            />
          </div>
        </div>
        <div className="flex h-[90vh] w-full items-center justify-center lg:h-screen">
          <ProkerDetailKomunitas programs={komunitas.programs} />
        </div>
      </div>
      {/* ----- Galeri, Divisi, Maps, & Sosial Media ----- */}
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[#BAC97D]/85 to-[#183A53]/70">
        <div className="z-50 h-[70vh] w-full xs:h-[80vh] md:h-screen">
          <GaleriDetailKomunitas gallery={komunitasId} />
        </div>
        <div className="h-[70vh] w-full">
          <DivisiDetailKomunitas divisions={komunitas.divisions} />
        </div>
        <div className="z-0 h-[130vh] w-full md:h-[200vh] lg:h-[260vh]">
          <MedsosDetailKomunitas location={komunitas.location} media={komunitas.media} />
        </div>
      </div>
    </main>
  )
}
