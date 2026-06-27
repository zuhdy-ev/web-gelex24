'use client'
import React, { useEffect, useContext, useMemo, useCallback } from 'react'
import { useAppContext } from '@/context/AppContext'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { AppContext } from '@/context/AppContext'
import { Sparkles } from '@/components/element/beranda/splash/sparkles'

export function Splash() {
  const { dispatch } = useAppContext(AppContext);
  const circleBorderAnimation = useAnimation()
  const logoAnimation = useAnimation()
  const circleBgAnimation = useAnimation()
  const deskripsiAnimation = useAnimation()
  const splashAnimation = useAnimation()

  const sequence = useCallback(async () => {
    await circleBorderAnimation.start({
      transform: 'rotate(360deg)',
      transition: { duration: 1.5 },
    })
    setTimeout(async () => {
      await logoAnimation.start([
        { scale: 1, opacity: 1, transition: { duration: 1 } },
        { y: 0, transition: { duration: 1 } },
      ])
      setTimeout(async () => {
        circleBorderAnimation.start([
          { width: '150vw', height: '150vh', transition: { duration: 1.5 } },
        ])
        await circleBgAnimation.start([
          { width: '140vw', height: '140vh', transition: { duration: 1.5 } },
        ])
        await logoAnimation.start([
          { scale: 1.4, transition: { duration: 1 } },
          { y: -150, transition: { duration: 1 } },
        ])
        await deskripsiAnimation.start([
          { height: 'auto', opacity: 1, transition: { duration: 1 } },
        ])
        setTimeout(async () => {
          await splashAnimation.start([{ translateY: '-100vh', transition: { duration: 1.5 } }])
          dispatch({
            type: 'SET_SHOW_SPLASH',
            payload: {
              show: false,
            },
          })
        }, 500)
      }, 500)
    }, 500)
  }, [circleBorderAnimation, logoAnimation, circleBgAnimation, deskripsiAnimation, splashAnimation, dispatch])

  useEffect(() => {
    sequence()
  }, [sequence])

  const sparklesComponent = useMemo(() => (
    <Sparkles
      id="tsparticlesfullpages"
      background="transparent"
      minSize={0.6}
      maxSize={1.4}
      particleDensity={100}
      className="h-full w-full"
      particleColor="#FFFFFF"
    />
  ), [])

  return (
    <motion.div
      initial={{ translateY: 0 }}
      animate={splashAnimation}
      className="absolute z-[99999] flex h-screen w-screen items-center justify-center overflow-hidden bg-gradient-ijo-1"
    >
      <div className="absolute inset-0 h-screen w-full">
        {sparklesComponent}
      </div>
      <Image
        src="/assets/segera-hadir/tekstur-mobile.png"
        width={1000}
        height={1000}
        style={{ objectFit: 'cover' }}
        className="bg-blend-multiplay absolute z-10 h-full w-full mix-blend-multiply md:hidden"
        alt="tekstur mobile"
        loading="lazy"
      />
      <Image
        src="/assets/segera-hadir/tekstur-desktop.png"
        width={1000}
        height={1000}
        style={{ objectFit: 'cover' }}
        className="bg-blend-multiplay absolute z-10 hidden h-full w-full mix-blend-multiply md:block"
        alt="tekstur desktop"
        loading="lazy"
      />
      <Image
        src="/assets/beranda/splash/splash-wave.svg"
        width={0}
        height={0}
        className="absolute right-0 top-0 z-20 h-[73%] w-[73%] translate-x-[10%] translate-y-[5%] scale-x-[-1] scale-y-[-1] object-contain lg:translate-y-[-9%] lg:object-cover"
        alt="wave 1"
        loading="lazy"
      />
      <Image
        src="/assets/beranda/splash/splash-wave.svg"
        width={0}
        height={0}
        className="absolute bottom-0 left-0 z-20 h-[73%] w-[73%] translate-x-[-10%] translate-y-[-5%] object-contain lg:translate-y-[9%] lg:object-cover"
        alt="wave 2"
        loading="lazy"
      />

      <motion.div
        animate={circleBorderAnimation}
        className="absolute z-[20] flex h-[47vw] w-[47vw] items-center justify-center rounded-full bg-gradient-splash-circle-border shadow-splash-circle-border md:h-[36vw] md:w-[36vw] lg:h-[23vw] lg:w-[23vw]"
        style={{ willChange: 'transform' }}
      ></motion.div>
      <motion.div
        animate={circleBgAnimation}
        className="absolute z-[30] h-[40.2vw] w-[40.2vw] rounded-full bg-gradient-merah-1 shadow-splash-circle-bg md:h-[30.2vw] md:w-[30.2vw] lg:h-[19.2vw] lg:w-[19.2vw]"
        style={{ willChange: 'width, height' }}
      >
        <Image
          src="/assets/segera-hadir/tekstur-mobile.png"
          width={1000}
          height={1000}
          style={{ objectFit: 'cover' }}
          className="bg-blend-multiplay absolute z-20 h-full w-full rounded-full mix-blend-multiply"
          alt="tekstur desktop"
          loading="lazy"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={logoAnimation}
        className="absolute z-30"
        style={{ willChange: 'opacity, transform' }}
      >
        <Image
          src="/assets/beranda/splash/logo-gelex.svg"
          width={0}
          height={0}
          className="relative z-30 w-[12.5vw] md:w-[9vw] lg:w-[5.5vw]"
          alt="logo gelex"
          loading="lazy"
        />
      </motion.div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={deskripsiAnimation}
        className="absolute z-30 translate-y-[80%] overflow-hidden md:translate-y-[85%]"
        style={{ willChange: 'height, opacity' }}
      >
        <Image
          src="/assets/beranda/splash/gelex_desk.svg"
          width={0}
          height={0}
          className="relative z-30 w-[45vw] md:w-[35vw] lg:w-[25vw]"
          alt="deskripsi gelex"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  )
}
