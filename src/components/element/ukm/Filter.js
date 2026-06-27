'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { CSSTransition } from 'react-transition-group'

export default function Filter({ selectedFilter, setSelectedFilter }) {
  const filters = ['Semua', 'Olahraga', 'Rohani', 'Khusus', 'Seni']
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (filter) => {
    setSelectedFilter(filter)
    setIsOpen(false)
  }

  return (
    <div className="container relative mb-4 font-magicretro sm:mb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-lg border-4 border-[#E6A263] bg-[#E52653] p-2 sm:hidden"
      >
        <span className="font-mulish text-sm text-white">Filter</span>
        <span className="-translate-x-2 bg-gradient-kuning-coklat-2 bg-clip-text text-transparent">
          {selectedFilter}
        </span>
        <Image
          src="/assets/ukm/arrow-down-list.svg"
          alt="Arrow Down"
          width={16}
          height={16}
          style={{ width: 'auto', height: 'auto' }}
        />
      </button>
      <CSSTransition in={isOpen} timeout={300} classNames="dropdown" unmountOnExit>
        <div className="absolute mt-2 w-full rounded-lg">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleSelect(filter)}
              className={`w-full rounded-lg border-4 border-b-0 border-[#E6A263] bg-[#E52653] p-2 text-left ${filter == 'Seni' ? 'border-b-4' : ''}`}
            >
              <p className="bg-gradient-kuning-coklat-2 bg-clip-text text-center text-transparent">
                {filter}
              </p>
            </button>
          ))}
        </div>
      </CSSTransition>
      <div className="hidden gap-4 sm:flex">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleSelect(filter)}
            className={`w-full translate-y-1 rounded-t-lg border-4 border-b-0 border-[#E6A263] bg-[#E52653] p-2 sm:flex-1 ${
              selectedFilter === filter ? '' : 'translate-y-px opacity-75 sm:bg-[#7F152E]'
            }`}
          >
            <p className="bg-gradient-kuning-coklat-2 bg-clip-text text-center text-transparent">
              {filter}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}
