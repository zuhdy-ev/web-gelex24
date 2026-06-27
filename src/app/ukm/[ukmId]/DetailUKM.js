'use client'
import React from 'react'
import Nav from '@/components/layout/Nav'
import {
  HeroDetailUKM,
  TentangDetailUKM,
  ProkerDetailUKM,
  GaleriDetailUKM,
  DivisiDetailUKM,
  MedsosDetailUKM,
} from '@/components/module/ukm/detail/page'
import Image from 'next/image'
import dataUKM from '@/data/ukm.json'
import { convertToSlug } from './page'

export default function DetailUKM({ params }) {
  const { ukmId } = params
  const ukm = dataUKM.find((ukm) => convertToSlug(ukm.name) === ukmId)

  if (!ukm) {
    return <div>UKM tidak ditemukan</div>
  }

  return (
    <main className="flex flex-col items-center justify-center overflow-hidden">
      {/* ----- Navbar ----- */}
      <Nav />
      {/* ----- Hero ----- */}
      <div className="flex h-screen w-screen items-center justify-center">
        <HeroDetailUKM
          nama={ukm.name}
          video={ukm.video}
          oprec={ukm.recruitment.oprec}
          guidebook={ukm.recruitment.guidebook}
        />
      </div>
      {/* ----- Tentang & Proker ----- */}
      <div className="relative flex w-full flex-col">
        {/* Tentang */}
        <div className="relative flex h-[130vh] w-full items-center justify-center">
          {/* Konten */}
          <TentangDetailUKM
            logo={ukm.logo}
            nama={ukm.name}
            description={ukm.description}
            history={ukm.history}
            unggulan={ukm.unggulan}
            achievements={ukm.prestasi}
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
          <ProkerDetailUKM programs={ukm.programs} />
        </div>
      </div>
      {/* ----- Galeri, Divisi, Maps, & Sosial Media ----- */}
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[#BAC97D]/85 to-[#183A53]/70">
        <div className="z-50 h-[70vh] w-full xs:h-[80vh] md:h-screen">
          <GaleriDetailUKM gallery={ukmId} />
        </div>
        <div className="h-[70vh] w-full">
          <DivisiDetailUKM divisions={ukm.divisions} />
        </div>
        <div className="z-0 h-[130vh] w-full md:h-[200vh] lg:h-[260vh]">
          <MedsosDetailUKM location={ukm.location} media={ukm.media} />
        </div>
      </div>
    </main>
  )
}
