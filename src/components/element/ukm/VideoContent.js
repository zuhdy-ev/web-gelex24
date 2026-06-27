'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function VideoContent({ texts }) {
  const [visible, setVisible] = useState(false)
  const [title, setTitle] = useState(texts.title)
  const [description, setDescription] = useState(texts.description)

  useEffect(() => {
    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [texts])

  useEffect(() => {
    const titleTimer = setTimeout(() => {
      setTitle(texts.title)
    }, 600)

    const descriptionTimer = setTimeout(() => {
      setDescription(texts.description)
    }, 600)

    return () => {
      clearTimeout(titleTimer)
      clearTimeout(descriptionTimer)
    }
  }, [texts])

  return (
    <div className="my-5 sm:my-0 flex h-full w-full flex-col laptopL:-translate-x-24 items-center justify-center gap-4 overflow-hidden text-white sm:h-screen sm:pr-4 md:scale-110 md:pr-8 lg:scale-125 lg:pr-16 xl:pr-24 sm:-translate-y-12">
      <p
        className={`z-10 mt-5 sm:mt-0 mx-auto bg-gradient-merah-ungu bg-clip-text px-4 pt-4 text-center font-magicretro text-2xl text-transparent transition-all duration-[400ms] sm:pt-0 ${visible ? '-translate-x-12 opacity-0' : 'translate-x-0 opacity-100'}`}
      >
        {title}
      </p>
      <p
        className={`scrollbar-list z-10 max-h-48 w-5/6 overflow-y-auto pr-4 text-justify font-bold transition-all delay-100 duration-[400ms] sm:text-center sm:text-base lg:w-[85%] ${visible ? 'translate-x-12 opacity-0' : 'translate-x-0 opacity-100'}`}
      >
        {description}
      </p>
      {/* <button
        className={`relative z-10 w-72 rounded-xl border-4 border-[#E6A263] bg-[#7F152E] p-2.5 font-bold transition-all delay-200 duration-500 sm:w-64 ${visible ? '-translate-x-12 opacity-0' : 'translate-x-0 opacity-100'}`}
      >
        Selengkapnya
        <Image
          src={'/assets/ukm/arrow-up-icon.svg'}
          width={30}
          height={30}
          className="absolute right-[3.5rem] top-3 h-6 sm:right-11 sm:top-0 sm:h-full"
        />
      </button> */}
    </div>
  )
}
