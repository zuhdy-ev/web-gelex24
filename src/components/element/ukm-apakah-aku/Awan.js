'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import cn from '@/util/cn'

export default function Awan({ tipe, className, direction, duration, initialX }) {
  const tipeAwan = [
    '/assets/ukm-apakah-aku/awan-tipe1.png',
    '/assets/ukm-apakah-aku/awan-tipe2.png',
    '/assets/ukm-apakah-aku/awan-tipe3.png',
  ]

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
    }
  }, [])

  const animationVariants = {
    start: {
      x: direction === 'right' ? -500 : windowWidth + 500,
    },
    end: {
      x: direction === 'right' ? windowWidth + 500 : -windowWidth,
      transition: {
        duration: duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  }

  return (
    <motion.div
      className={cn('absolute', className)}
      initial="start"
      animate="end"
      variants={animationVariants}
    >
      <Image
        src={tipeAwan[tipe % 3]}
        width={1000}
        height={1000}
        className="w-full"
        alt={`Awan tipe ${tipe}`}
      />
    </motion.div>
  )
}
