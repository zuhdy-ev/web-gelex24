'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import SearchBar from '@/components/element/ukm/SearchBar'
import TableListKomunitas from '@/components/element/komunitas/TableListKomunitas'
import Footer from '@/components/layout/Footer'
import { data } from 'autoprefixer'
import dataKomunitas from '@/data/komunitas.json'

export function ListKomunitas() {
  const [searchTerm, setSearchTerm] = useState('')

  // const dataKomunitas = dataKomunitas.filter(
  //   (komunitas) => komunitas.attributes.group === 'komunitas',
  // )

  // const filteredData = dataKomunitas.filter((komunitas) => {
  //   return komunitas.attributes.judul.toLowerCase().includes(searchTerm.toLowerCase())
  // })
  const filteredData = dataKomunitas.filter((komunitas) => {
    const matchesSearch = komunitas.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  const notFound = 'Komunitas yang anda cari tidak ditemukan...'
  const placeholder = 'Cari Komunitas'

  return (
    <div className="relative h-[200vh] w-screen overflow-hidden">
      <Image
        src="/assets/ukm/bg-list.png"
        alt="tekstur"
        fill
        style={{ objectFit: 'cover' }}
        className="absolute z-10 h-full w-full mix-blend-multiply"
      />
      <Image
        src="/assets/ukm/bg-ungu.png"
        alt="tekstur"
        fill
        style={{ objectFit: 'cover' }}
        className="absolute z-10 h-full w-full mix-blend-overlay"
      />
      <div className="container relative z-20 mx-auto h-screen overflow-y-hidden p-4">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeholder={placeholder}
        />
        <div className="mt-10 lg:mx-20">
          <TableListKomunitas listData={filteredData} notFound={notFound} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
