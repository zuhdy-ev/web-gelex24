'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Popup from './component/popup'

const getStatus = (date) => {
  const today = new Date()
  if (today < date) return 'Akan Datang'
  if (today.toDateString() === date.toDateString()) return 'Sedang Berlangsung'
  if (today > date) return 'Sudah Berlalu'
}

export default function Timeline() {
  const [selectedDay, setSelectedDay] = useState(null)

  const day1Date = new Date('2024-08-22')
  const day2Date = new Date('2024-08-23')
  const day3Date = new Date('2024-08-24')

  const rotateAnimation = {
    animate: {
      rotate: [-3, 3, -3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  }

  const handleStampClick = (day) => {
    setSelectedDay(day)
  }

  const closePopup = () => {
    setSelectedDay(null)
  }

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/assets/beranda/timeline/bg-timeline.png"
          alt="Background Timeline"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          quality={100}
          className="object-bottom"
        />
        <Image
          src="/assets/beranda/hero/bg-texture.png"
          alt="Background Texture"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          quality={100}
          className="absolute inset-0 z-10 bg-blend-multiply mix-blend-multiply"
        />
      </div>

      {/* Mobile Title */}
      <div className="absolute left-[10vw] top-[3vh] z-40 md:hidden">
        <Image
          src="/assets/beranda/timeline/title-timeline-mobile.png"
          alt="Title Timeline Mobile"
          width={0}
          height={0}
          className="h-[100px] w-[300px] object-contain"
        />
      </div>

      {/* Main Title */}
      <div className="absolute left-1/2 top-[12vh] z-50 hidden -translate-x-1/2 transform md:flex">
        <Image
          src="/assets/beranda/timeline/title-timeline.png"
          alt="Title Timeline"
          width={400}
          height={100}
          className="object-contain 2xl:w-[30vw]"
        />
      </div>

      {/* Card Day 1 */}
      <div className="relative left-[-15vw] top-[20vh] z-[20] flex h-[55vh] w-[55vw] flex-col items-center sm:h-[70vh] sm:w-[70vw] md:left-[-31vw] md:top-[7vh] md:h-[100vh] md:w-[100vw] lg:hidden">
        <Image
          src="/assets/beranda/timeline/card-day1.png"
          alt="Day 1"
          fill
          sizes="100%"
          style={{ objectFit: 'contain' }}
          className="object-contain"
        />
        <motion.div
          className="absolute left-[-2.5vw] top-[-10vh] flex h-[50vh] w-[50vw] cursor-pointer items-center justify-center xxs:left-0 xxs:w-[85%] sm:left-[14vw] sm:top-[-11vh] sm:w-[50%] md:left-[33.5vw] md:w-[28%] lg:hidden"
          {...rotateAnimation}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleStampClick(1)}
        >
          <Image
            src="/assets/beranda/timeline/stamp-day1.png"
            alt="Stamp Day 1"
            fill
            sizes="100%"
            style={{ objectFit: 'contain' }}
            className="object-contain"
          />
        </motion.div>
        <div className="relative left-[2.5vw] top-[61.7%] flex w-full -rotate-12 items-center justify-center xxs:top-[67.7%] sm:left-[2vw] sm:top-[70%] lg:hidden">
          <div className="bg-linear-kuning-coklat2 bg-clip-text text-center font-mulish text-xs font-bold text-transparent sm:text-[14px]">
            {getStatus(day1Date)}
          </div>
        </div>
        {/* Gemmy 1 */}
        <div className="absolute right-[-14vw] top-[-5vh] z-[90] h-[30vh] w-[30vw] xs:right-[-12vw] sm:right-[-1vw] md:hidden">
          <Image
            src="/assets/beranda/timeline/gemmy-1.png"
            alt="Gemmy 1"
            fill
            sizes="100%"
            style={{ objectFit: 'contain' }}
            className="object-contain"
          />
        </div>
      </div>

      {/* Card Day 2 */}
      <div className="relative right-[-20vw] top-[4vh] z-[50] flex h-[50vh] w-[50vw] rotate-[10deg] flex-col items-center sm:h-[70vh] sm:w-[70vw] md:right-0 md:top-[-35vh] md:h-[100vh] md:w-[100vw] md:rotate-0 lg:hidden">
        <Image
          src="/assets/beranda/timeline/card-day2.png"
          alt="Day 2"
          fill
          sizes="100%"
          style={{ objectFit: 'contain' }}
          className="object-contain"
        />
        <motion.div
          className="absolute left-[5vw] top-[-7vh] flex h-[40vh] w-[40vw] cursor-pointer items-center justify-center xxs:left-[3.5vw] xxs:w-[85%] sm:left-[17vw] sm:w-[50%] md:left-[35vw] md:w-[30%] lg:hidden"
          {...rotateAnimation}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleStampClick(2)}
        >
          <Image
            src="/assets/beranda/timeline/stamp-day2.png"
            alt="Stamp Day 2"
            fill
            sizes="100%"
            style={{ objectFit: 'contain' }}
            className="object-contain"
          />
        </motion.div>
        <div className="relative top-[63.5%] flex w-full items-center justify-center xxs:top-[69.5%] sm:top-[72%] lg:hidden">
          <div className="bg-linear-kuning-coklat2 bg-clip-text text-center font-mulish text-xs font-bold text-transparent sm:text-base">
            {getStatus(day2Date)}
          </div>
        </div>
      </div>

      {/* Card Day 3 */}
      <div className="relative left-[-17vw] top-[-12vh] z-[80] flex h-[55vh] w-[55vw] rotate-[-22deg] flex-col items-center sm:h-[70vh] sm:w-[70vw] md:left-[30vw] md:top-[40vh] md:order-first md:h-[100vh] md:w-[100vw] md:rotate-0 lg:hidden">
        <Image
          src="/assets/beranda/timeline/card-day3.png"
          alt="Day 3"
          fill
          style={{ objectFit: 'contain' }}
          className="object-none"
        />
        <motion.div
          className="absolute left-[7.5vw] top-[-11vh] z-[199] flex h-[50vh] w-[50vw] cursor-pointer items-center justify-center xxs:left-[9vw] xxs:w-[85%] sm:left-[21vw] sm:top-[-12vh] sm:w-[50%] md:left-[39vw] md:w-[28%] lg:hidden"
          {...rotateAnimation}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleStampClick(3)}
        >
          <Image
            src="/assets/beranda/timeline/stamp-day3.png"
            alt="Stamp Day 3"
            fill
            style={{ objectFit: 'contain' }}
            className="object-contain"
          />
        </motion.div>
        <div className="relative right-[1vw] top-[63.5%] flex w-full rotate-[12deg] items-center justify-center xxs:top-[67.5%] sm:top-[70%] lg:hidden">
          <div className="bg-linear-kuning-coklat2 bg-clip-text text-center font-mulish text-xs font-bold text-transparent sm:text-[14px]">
            {getStatus(day3Date)}
          </div>
        </div>
      </div>

      {/* Pop-up Modal */}
      {selectedDay && <Popup selectedDay={selectedDay} closePopup={closePopup} />}

      {/* Cards for lg to 2xl */}
      <div className="z-[100] hidden w-full lg:grid lg:grid-cols-3 lg:items-center lg:justify-center">
        {/* Card Day 1 */}
        <div className="relative left-[-5vw] top-[15vh] flex h-[45vh] w-[45vw] flex-col items-center xl:left-[-6vw] xl:h-[53vh] xl:w-[53vw] 2xl:left-[-7vw] 2xl:h-[60vh] 2xl:w-[60vw]">
          <Image
            src="/assets/beranda/timeline/card-day1.png"
            alt="Day 1"
            sizes="100%"
            fill
            style={{ objectFit: 'contain' }}
            className="object-contain"
          />
          <motion.div
            className="absolute left-[-2.5vw] top-[-10vh] z-[120] flex h-[28%] w-[28%] items-center justify-center lg:left-[3.5vw] lg:top-[3vh] lg:h-[70%] lg:w-[70%] xl:left-[6.5vw] xl:top-[6vh] xl:h-[65%] xl:w-[65%] 2xl:left-[8.5vw] 2xl:top-[6vh] 2xl:h-[63%] 2xl:w-[63%]"
            {...rotateAnimation}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleStampClick(1)}
          >
            <Image
              src="/assets/beranda/timeline/stamp-day1.png"
              alt="Stamp Day 1"
              fill
              sizes="50vw"
              style={{ objectFit: 'contain' }}
              className="cursor-pointer object-contain"
            />
          </motion.div>
          <div className="relative left-[1.5vw] top-[70%] flex w-full -rotate-12 items-center justify-center xl:top-[71%]">
            <div className="bg-linear-kuning-coklat2 bg-clip-text text-center font-mulish text-lg font-bold text-transparent 2xl:text-xl">
              {getStatus(day1Date)}
            </div>
          </div>
        </div>

        {/* Card Day 2 */}
        <div className="relative left-[-5vw] top-[5vh] z-[90] flex h-[45vh] w-[45vw] flex-col items-center xl:left-[-8vw] xl:h-[50vh] xl:w-[50vw] 2xl:left-[-12vw] 2xl:h-[60vh] 2xl:w-[60vw]">
          <Image
            src="/assets/beranda/timeline/card-day2.png"
            alt="Day 2"
            fill
            sizes="100%"
            style={{ objectFit: 'contain' }}
            className="object-contain"
          />
          <motion.div
            className="absolute left-[5vw] top-[-5vh] z-[90] flex h-[48%] w-[48%] cursor-pointer items-center justify-center lg:left-[4.7vw] lg:top-[0vh] lg:h-[80%] lg:w-[80%] xl:left-[6.5vw] xl:top-[1vh] xl:h-[75%] xl:w-[75%] 2xl:left-[7vw] 2xl:top-[1vh] 2xl:h-[75%] 2xl:w-[75%]"
            {...rotateAnimation}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleStampClick(2)}
          >
            <Image
              src="/assets/beranda/timeline/stamp-day2.png"
              alt="Stamp Day 2"
              fill
              sizes="45vw"
              style={{ objectFit: 'contain' }}
              className="object-contain"
            />
          </motion.div>
          <div className="relative top-[73%] flex w-full items-center justify-center xl:top-[74%] 2xl:top-[75%]">
            <div className="bg-linear-kuning-coklat2 bg-clip-text text-center font-mulish text-lg font-bold text-transparent 2xl:text-xl">
              {getStatus(day2Date)}
            </div>
          </div>
        </div>

        {/* Card Day 3 */}
        <div className="relative right-[7vw] top-[15vh] flex h-[45vh] w-[45vw] flex-col items-center xl:right-[13vw] xl:h-[53vh] xl:w-[53vw] 2xl:right-[17vw] 2xl:h-[60vh] 2xl:w-[60vw]">
          <Image
            src="/assets/beranda/timeline/card-day3.png"
            alt="Day 3"
            fill
            sizes="100%"
            style={{ objectFit: 'contain' }}
            className="object-contain"
          />
          <motion.div
            className="absolute left-[7.5vw] top-[-11vh] z-[100] flex h-[28%] w-[28%] cursor-pointer items-center justify-center lg:left-[10vw] lg:top-[2vh] lg:h-[70%] lg:w-[70%] xl:left-[12vw] xl:top-[3vh] xl:h-[65%] xl:w-[65%] 2xl:left-[13vw] 2xl:top-[4vh] 2xl:h-[65%] 2xl:w-[65%]"
            {...rotateAnimation}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleStampClick(3)}
          >
            <Image
              src="/assets/beranda/timeline/stamp-day3.png"
              alt="Stamp Day 3"
              fill
              sizes="50vw"
              style={{ objectFit: 'contain' }}
              className="object-contain"
            />
          </motion.div>
          <div className="relative right-[1vw] top-[69%] flex w-full rotate-[12deg] items-center justify-center xl:top-[70%]">
            <div className="bg-linear-kuning-coklat2 bg-clip-text text-center font-mulish text-lg font-bold text-transparent 2xl:text-xl">
              {getStatus(day3Date)}
            </div>
          </div>
        </div>
      </div>

      {/* Gemmy Mobile */}
      <div className="absolute bottom-0 right-[-2vw] z-50 md:hidden">
        <Image
          src="/assets/beranda/timeline/gemmy-mobile.png"
          alt="Gemmy Mobile"
          width={400}
          height={200}
          className="h-[50vh] w-[70vw] object-contain"
        />
      </div>

      {/* Pond */}
      <div className="absolute bottom-[8vh] left-[-20vw] z-[20] flex w-[150vw] justify-center md:bottom-0 lg:left-[-23vw] xl:left-[-23vw]">
        <Image
          src="/assets/beranda/timeline/pond.png"
          alt="Pond"
          width={800}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Butterfly with Animation */}
      <motion.div
        className="z-60 absolute right-[1vw] top-[-5vh] h-[50vh] w-[50vw] md:hidden"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      >
        <Image
          src="/assets/beranda/timeline/butterfly.png"
          alt="Butterfly"
          fill
          sizes="100%"
          style={{ objectFit: 'contain' }}
          className="object-contain"
        />
      </motion.div>

      {/* Light Effect */}
      <div className="absolute right-[-45vw] top-[-45vh] z-[15] h-full w-full">
        <Image
          src="/assets/beranda/timeline/lights-effect.png"
          alt="Light Effect"
          fill
          style={{ objectFit: 'contain' }}
          className="object-contain"
        />
      </div>

      <div className="absolute inset-0 top-[17vh] z-30 hidden items-center justify-center opacity-70 md:top-[-50vh] md:flex lg:top-[-55vh] xl:top-[-10vh] 2xl:top-[-5vh] 2xl:h-[100%] maxWidth:top-[-5vh] maxWidth:h-[100%]">
        <Image
          src="/assets/beranda/timeline/lightning2.png"
          alt="Lightning"
          width={1720}
          height={1720}
          className="object-contain"
        />
      </div>

      {/* Gemmy 1 for md and above */}
      <div className="absolute z-[90] hidden h-[30%] w-[30%] md:left-[22vw] md:flex lg:left-[20vw] lg:top-[38vh] xl:left-[21vw] laptopL:left-[20vw] 2xl:left-[21vw]">
        <Image
          src="/assets/beranda/timeline/gemmy-1.png"
          alt="Gemmy 1"
          fill
          sizes="20%"
          style={{ objectFit: 'contain' }}
          className="object-contain"
        />
      </div>

      {/* Gemmy 2 above Card Day 3 */}
      <div className="absolute right-[1vw] top-[26vh] z-[100] hidden h-[30%] w-[30%] md:right-[5vw] md:top-[24vh] md:flex md:w-[20%] lg:right-[3vw] lg:top-[26vh] xl:right-[5vw] xl:top-[22vh] 2xl:top-[19vh]">
        <Image
          src="/assets/beranda/timeline/gemmy-2.png"
          alt="Gemmy 2"
          fill
          sizes="100%"
          style={{ objectFit: 'contain' }}
          className="object-contain"
        />
      </div>

      {/* Pop-up Modal */}
      {selectedDay && <Popup selectedDay={selectedDay} closePopup={closePopup} />}
    </div>
  )
}
