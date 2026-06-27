import React from 'react'
import Image from 'next/image'

export default function SearchBar({ searchTerm, setSearchTerm, placeholder }) {
  return (
    <div className="relative flex justify-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="my-4 mt-8 w-full rounded-3xl border-4 border-[#E6A263] bg-[#3B1739] bg-opacity-70 p-2 pl-12 text-white outline-none placeholder:text-white sm:w-3/4"
      />
      <Image
        src={'/assets/ukm/search-icon.svg'}
        alt="search-icon"
        width={8}
        height={8}
        className="pointer-events-none absolute left-3 top-10 h-8 w-8 sm:left-[5.5rem] md:left-[6.5rem] lg:left-[8.5rem] nanggung:left-[9.3rem] xl:left-[10.5rem] laptopL:left-48 2xl:left-[12.7rem]"
      />
    </div>
  )
}
