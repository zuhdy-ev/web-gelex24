'use client'

import React, { useState } from 'react'
import Button from '@/components/element/ukm-apakah-aku/Button'
import { useRouter } from 'next/navigation'
import Butterfly from '@/components/element/ukm-apakah-aku/Butterfly'
import Image from 'next/image'
import { Sparkles } from '@/components/element/beranda/splash/sparkles'
import Loading from '@/components/module/global/Loading'
import Nav from '@/components/layout/Nav'

export default function UKMApakahAku() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH

  const handleClick = () => {
    setLoading(true)
    localStorage.setItem('showTransition', 'true')
    router.replace('/ukm-apakah-aku/prolog/')
  }

  const onReady = () => {
    setLoading(false)
  }

  return (
    <div className="relative flex h-screen w-screen flex-col items-center overflow-hidden bg-[linear-gradient(180deg,#271146_0%,#984597_100%)] px-20 max-w-[1920px]">
      {loading && <Loading />}
      <Nav />
      <div className="absolute inset-0 h-screen">
        <Sparkles
          id="tsparticlesfullpages"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>
      <Image
        src={'/assets/segera-hadir/tekstur-mobile.png'}
        width={1000}
        height={1000}
        className="bg-blend-multiplay absolute z-10 h-full w-full object-cover mix-blend-multiply md:hidden"
        alt="tekstur mobile"
      />
      <Image
        src={'/assets/segera-hadir/tekstur-desktop.png'}
        width={1000}
        height={1000}
        className="bg-blend-multiplay absolute z-10 hidden h-full w-full object-cover mix-blend-multiply md:block"
        alt="tekstur desktop"
      />
      <Image
        src={'/assets/ukm-apakah-aku/rumput-desktop.png'}
        width={1000}
        height={1000}
        className="absolute bottom-0 z-[5] w-full md:translate-y-12 lg:translate-y-28"
        alt="rumput desktop"
      />
      <Image
        src={'/assets/ukm-apakah-aku/pohon-kiri-desktop.png'}
        width={1000}
        height={1000}
        className="absolute bottom-0 left-0 z-[11] hidden w-[100%] translate-x-[-50%] md:block"
        alt="pohon kiri desktop"
      />
      <Image
        src={'/assets/ukm-apakah-aku/pohon-kanan-desktop.png'}
        width={1000}
        height={1000}
        className="absolute bottom-0 right-0 z-[11] hidden translate-x-[70%] scale-x-[-1] md:block md:w-[90%] md:scale-x-[1]"
        alt="pohon kanan desktop"
      />
      <div  style={{backgroundImage: `url('${basePath}/assets/ukm-apakah-aku/pohon-kanan-desktop.png')`}} className={"absolute bottom-0 right-0 block h-[110%] w-[110%] scale-x-[-1] bg-cover bg-center bg-no-repeat md:hidden"}></div>
      <Image
        src={'/assets/ukm-apakah-aku/batu.png'}
        width={1000}
        height={1000}
        className="absolute bottom-0 left-0 z-[12] hidden md:block md:w-[13%]"
        alt="batu"
      />
      <Image
        src={'/assets/ukm-apakah-aku/semak-kanan.png'}
        width={1000}
        height={1000}
        className="absolute bottom-0 right-0 z-[13] w-[45%] md:z-[12] md:w-[16%]"
        alt="semak kanan"
      />
      <Image
        src={'/assets/ukm-apakah-aku/maskot.png'}
        width={1000}
        height={1000}
        className="absolute bottom-0 z-[12] hidden translate-y-[28%] md:left-0 md:block md:w-[50%] lg:w-[45%]"
        alt="maskot"
        loading="lazy"
      />
      <div style={{backgroundImage: `url('${basePath}/assets/ukm-apakah-aku/maskot.png')`}} className="absolute bottom-0 z-[12] block h-[75%] w-full translate-y-[15%] bg-cover bg-center bg-no-repeat md:hidden"></div>
      <Image
        src={'/assets/ukm-apakah-aku/harta-desktop.png'}
        width={1000}
        height={1000}
        className="absolute bottom-0 right-0 z-[12] hidden md:block md:w-[20%] md:translate-y-[-32%] lg:w-[18%] lg:translate-y-[-35%]"
        alt="harta karun desktop"
      />
      <Image
        src={'/assets/ukm-apakah-aku/harta-mobile.png'}
        width={1000}
        height={1000}
        className="absolute bottom-0 right-0 z-[12] block w-[32%] translate-y-[-40%] md:hidden md:w-[20%] md:translate-y-[-32%] lg:w-[18%] lg:translate-y-[-35%]"
        alt="harta karun mobile"
      />

      <Butterfly initialDirection={'left'} className={'z-50'} onReady={onReady} />
      <Butterfly initialDirection={'right'} className={'z-50'} onReady={onReady} />

      <div className="flex flex-col items-center md:container">
        <div 
          className="relative z-30 mt-44 flex min-h-[150px] w-fit flex-col items-center justify-center overflow-hidden bg-center bg-no-repeat px-16 py-8 md:mb-7 md:px-[86px] md:py-14 lg:mb-9"
          style={{ backgroundImage: `url('${basePath}/assets/ukm-apakah-aku/wooden_board.png')`, backgroundSize: '100% 100%' }}
        >
          <div className="relative flex items-center justify-center">
            <p className="relative z-40 inline-block bg-gradient-merah-1 bg-clip-text text-center font-magicretro text-6xl leading-[0.98] text-transparent md:text-7xl md:leading-none">
              UKM Apakah Aku?
            </p>
            <p className="absolute z-30 inline-block text-center font-magicretro text-6xl leading-[0.98] text-transparent [text-shadow:-1px_-1px_0_#FFE5AF,1px_-1px_0_#FFE5AF,-1px_1px_0_#FFE5AF,_1px_1px_0_#FFE5AF,1px_3px_4px_rgba(0,0,0,0.25)] md:text-7xl md:leading-none">
              UKM Apakah Aku?
            </p>
          </div>
        </div>
        <Button
          text={'Temukan Jawabannya'}
          textClass={'text-base sm:text-lg md:text-2xl lg:text-3xl'}
          borderClass={
            'rounded-[22px] sm:rounded-[25px] z-30 translate-y-[-67%] hover:translate-y-[-63%] sm:translate-y-[-50%] sm:hover:translate-y-[-46%] md:translate-y-0 md:hover:translate-y-1'
          }
          bgClass={'rounded-[16px] sm:rounded-[19px] px-6 md:px-8 py-2 md:py-3'}
          onClick={handleClick}
        />
      </div>
    </div>
  )
}
