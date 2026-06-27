'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import SearchBar from '@/components/element/ukm/SearchBar'
import Filter from '@/components/element/ukm/Filter'
import TableListUKM from '@/components/element/ukm/TableListUKM'
import Footer from '@/components/layout/Footer'
import dataUKM from '@/data/ukm.json'

export function ListUKM() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('Semua')

  const filteredData = dataUKM.filter((ukm) => {
    const matchesFilter = selectedFilter === 'Semua' || ukm.category === selectedFilter
    const matchesSearch = ukm.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const roundedList = 'sm:rounded-se-none sm:rounded-ss-none sm:rounded-se-none sm:rounded-ss-none'
  const notFound = 'UKM yang anda cari tidak ditemukan...'
  const placeholder = 'Cari UKM'

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
      <div className="container relative z-20 mx-auto h-screen p-4">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeholder={placeholder}
        />
        <div className="mt-10 lg:mx-20">
          <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
          <TableListUKM listData={filteredData} notFound={notFound} roundedList={roundedList} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
