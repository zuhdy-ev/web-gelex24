'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function NotFound() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-gray-900">
      <Image
        src="/assets/not-found/bg-404.png"
        fill
        style={{ objectFit: 'cover' }}
        className="absolute z-10"
        alt="Background"
        priority={true}
      />
      <Image
        src="/assets/not-found/404.png"
        width={220}
        height={220}
        style={{ objectFit: 'contain' }}
        className="absolute top-[15vh] left-1/2 transform -translate-x-1/2 z-20 w-1/2 xs:w-1/2 md:w-1/3 md:top-[2vh] lg:w-1/4 2xl:w-1/5"
        alt="404"
      />
      <div className="relative z-30 flex flex-col items-center mt-28 md:mt-32 lg:mt-40">
        <motion.div
          animate={{ rotate: [0, -1, 1, 0], scale: [1, 1.05, 1.05, 1]}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/assets/not-found/gemmy.png"
            width={500}
            height={500}
            objectFit="contain"
            className="w-[80vw] max-w-md"
            alt="Gemmy"
          />
        </motion.div>
        <p className="mt-5 text-base font-mulish text-white font-bold text-center md:text-lg lg:text-2xl">Waduh! Halaman yang kamu cari tidak ada</p>
        <Link href="/beranda">
          <Image
            src="/assets/not-found/button-back.png"
            width={150}
            height={150}
            style={{ objectFit: 'contain' }}
            className="cursor-pointer w-[60vw] max-w-xs mt-5"
            alt="Back Button"
          />
        </Link>
      </div>
    </div>
  )
}

export default NotFound
