'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const PageTransition = ({ children }) => {
  const pathname = usePathname()

  useEffect(() => {
    const handleRouteChangeStart = () => {
      document.body.classList.add('loading')
    }

    const handleRouteChangeComplete = () => {
      document.body.classList.remove('loading')
    }

    handleRouteChangeStart()
    handleRouteChangeComplete()

    return () => {
      handleRouteChangeComplete()
    }
  }, [pathname])

  const curtainVariants = {
    initial: { width: '50%' },
    animate: { width: 0, transition: { duration: 1, ease: 'easeInOut' } },
    exit: { width: '50%', transition: { duration: 1, ease: 'easeInOut' } },
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 h-full bg-gradient-merah-1 z-[1000]"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={curtainVariants}
        >
             <Image
                src="/assets/segera-hadir/tekstur-mobile.png"
                width={1000}
                height={1000}
                className="bg-blend-multiplay absolute z-10 h-full w-full mix-blend-multiply object-cover md:hidden"
                alt="tekstur mobile"
            />
            <Image
                src="/assets/segera-hadir/tekstur-desktop.png"
                width={1000}
                height={1000}
                className="bg-blend-multiplay absolute z-10 hidden h-full w-full mix-blend-multiply object-cover md:block"
                alt="tekstur desktop"
            />
        </motion.div>
      <motion.div
        className="fixed top-0 right-0 h-full bg-gradient-merah-1 z-[1000]"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={curtainVariants}
      >
            <Image
                src="/assets/segera-hadir/tekstur-mobile.png"
                width={1000}
                height={1000}
                className="bg-blend-multiplay absolute z-10 h-full w-full mix-blend-multiply object-cover md:hidden"
                alt="tekstur mobile"
            />
            <Image
                src="/assets/segera-hadir/tekstur-desktop.png"
                width={1000}
                height={1000}
                className="bg-blend-multiplay absolute z-10 hidden h-full w-full mix-blend-multiply object-cover md:block"
                alt="tekstur desktop"
            />
      </motion.div>
      {children}
    </>
  )
}

export default PageTransition
