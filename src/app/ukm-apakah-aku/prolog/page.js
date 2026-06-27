'use client'

import { dataProlog } from '@/data/data'
import { useRouter } from 'next/navigation'
import { useState, useEffect, useContext } from 'react'
import PrologBox from '@/components/element/ukm-apakah-aku/PrologBox'
import PageTransition from '@/components/module/ukm-apakah-aku/PageTransition'
import Loading from '@/components/module/global/Loading'
import Awan from '@/components/element/ukm-apakah-aku/Awan'
import Image from 'next/image'
import { Sparkles } from '@/components/element/beranda/splash/sparkles'
import Butterfly from '@/components/element/ukm-apakah-aku/Butterfly'
import useScreenSize from '@/util/useScreenSize'
import { AppContext } from '@/context/AppContext'

export default function Prolog() {
  const { nomorProlog, dispatch } = useContext(AppContext)
  const router = useRouter()
  const [currentProlog, setCurrentProlog] = useState()
  const [showTransition, setShowTransition] = useState(false)
  const [loading, setLoading] = useState(true)
  const [windowWidth, setWindowWidth] = useState(0)
  const { isMd } = useScreenSize()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const shouldShowTransition = localStorage.getItem('showTransition') === 'true'
      if (shouldShowTransition && nomorProlog === 1) {
        setShowTransition(true)
        localStorage.removeItem('showTransition')
      }
    }

    if (nomorProlog) {
      if (!isNaN(nomorProlog) && nomorProlog > 0 && nomorProlog <= dataProlog.length) {
        setCurrentProlog(nomorProlog)
      } else {
        router.push('/ukm-apakah-aku/')
      }
    }

    setWindowWidth(window.innerWidth)
  }, [nomorProlog])

  const onReady = () => {
    setLoading(false)
  }

  const handleNext = () => {
    if (currentProlog <= dataProlog.length) {
      if (currentProlog === dataProlog.length) {
        setLoading(true)
        localStorage.setItem('showTransition', 'true')
        router.push('/ukm-apakah-aku/pertanyaan/')
      } else {
        dispatch({
          type: 'SET_NOMOR_PROLOG',
          payload: {
            nomorProlog: nomorProlog + 1
          },
        })
      }
    }
  }

  const handlePrevious = () => {
    if (currentProlog > 1) {
      dispatch({
        type: 'SET_NOMOR_PROLOG',
        payload: {
          nomorProlog: nomorProlog - 1
        },
      })
    }
  }

  return (
    <>
      {loading && <Loading />}
      {!loading && showTransition && <PageTransition />}
      <div
        className={
          'relative flex h-screen w-screen flex-col items-center justify-between overflow-hidden max-w-[1920px] ' +
          (currentProlog === 1 || currentProlog === 2
            ? 'bg-[linear-gradient(180deg,#58345A_0%,#FFE5AF_63.48%)]'
            : 'bg-[linear-gradient(180.4deg,#513252_0.37%,#E4CE9D_35.21%)]')
        }
      >
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

        {(currentProlog === 1 || currentProlog === 2) && (
          <>
            <div className="absolute left-0 top-[5%]">
              <Awan
                tipe={1}
                initialX={-100}
                className={'relative mb-[20%] w-[60%] md:mb-[10%] md:w-[80%] max-w-[400px]'}
                direction={'right'}
                duration={12}
              />
              <Awan
                tipe={0}
                initialX={-10}
                className={'relative w-[60%] md:w-[80%] max-w-[400px]'}
                direction={'right'}
                duration={10}
              />
            </div>
            <div className="absolute right-0 top-[20%]">
              <Awan
                tipe={2}
                initialX={windowWidth - 50}
                className={'relative hidden md:block md:w-[85%] max-w-[400px]'}
                direction={'left'}
                duration={10}
              />
            </div>
            <Image
              src={'/assets/ukm-apakah-aku/jalanan-prolog1.png'}
              width={1000}
              height={1000}
              className="absolute bottom-0 z-[5] hidden w-full sm:block md:translate-y-12 lg:translate-y-28"
              alt="jalanan"
            />
            <Image
              src={'/assets/ukm-apakah-aku/portal-prolog1.png'}
              width={1000}
              height={1000}
              className="absolute bottom-0 z-[13] hidden sm:block sm:translate-y-[-15%] md:translate-y-[-5%] lg:w-[55%]"
              alt="portal"
              onLoadingComplete={onReady}
            />
            <Image
              src={'/assets/ukm-apakah-aku/portal-prolog1-mobile.png'}
              width={1000}
              height={1000}
              className="absolute bottom-0 z-[13] block w-full sm:hidden"
              alt="portal"
              onLoadingComplete={onReady}
            />
            <Image
              src={'/assets/ukm-apakah-aku/tangan-prolog1.png'}
              width={1000}
              height={1000}
              className="absolute bottom-10 right-[-8px] z-[13] w-[42%] animate-[goyangTangan_3000ms_alternate_infinite] md:w-[23%] lg:w-[15%]"
              alt="tangan"
            />
          </>
        )}

        {(currentProlog === 3 || currentProlog === 4) && (
          <>
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
            <Butterfly initialDirection={'right'} className={'z-50'} onReady={() => {}} />
            <Butterfly initialDirection={'right'} className={'z-50'} onReady={() => {}} />
            <Butterfly initialDirection={'left'} className={'z-50'} onReady={() => {}} />
            <Image
              src={'/assets/ukm-apakah-aku/danau-2-desktop.png'}
              width={1000}
              height={1000}
              className="absolute bottom-0 z-[5] hidden w-full translate-y-[40%] md:block"
              alt="danau"
              onLoadingComplete={onReady}
            />
            <div className="absolute bottom-0 z-[5] block h-[60%] max-h-[500px] w-full translate-y-[15%] md:hidden">
              <Image
                src={'/assets/ukm-apakah-aku/danau-2-desktop.png'}
                width={1000}
                height={1000}
                className="absolute h-full w-full"
                alt="danau"
                onLoadingComplete={onReady}
              />
            </div>
            <Image
              src={'/assets/ukm-apakah-aku/semak-kiri-2-desktop.png'}
              width={1000}
              height={1000}
              className="absolute bottom-0 left-0 z-[12] w-[40%] translate-x-[-30%] translate-y-[-190px] md:w-[22%] md:translate-x-[58%] md:translate-y-[-120%]"
              alt="semak kiri 2"
            />
            <Image
              src={'/assets/ukm-apakah-aku/semak-kanan-2.png'}
              width={1000}
              height={1000}
              className="absolute bottom-0 right-0 z-[12] w-[35%] translate-x-[30%] translate-y-[-195px] md:w-[21%] md:translate-x-0 md:translate-y-[-110%]"
              alt="semak kanan 2"
            />
            <Image
              src={'/assets/ukm-apakah-aku/pohon-kiri-desktop.png'}
              width={1000}
              height={1000}
              className="absolute bottom-0 left-0 z-[13] hidden w-full -translate-x-[50%] translate-y-[-170px] md:block md:w-[65%] md:translate-y-[-5%]"
              alt="pohon kiri desktop"
            />
            <Image
              src={'/assets/ukm-apakah-aku/pohon-kiri-desktop.png'}
              width={1000}
              height={1000}
              className="absolute bottom-0 right-0 z-[13] w-full translate-x-[45%] translate-y-[-170px] md:w-[45%] md:translate-y-[-15%]"
              alt="pohon kanan desktop"
            />
            <div className="absolute bottom-[10%] z-[14] flex justify-center md:bottom-[2vw]">
              <div className="relative -mr-[12%] flex flex-col items-center justify-center md:-mr-[3%]">
                <Image
                  src={'/assets/ukm-apakah-aku/batu-elemen1.png'}
                  width={1000}
                  height={1000}
                  className="z-[12] w-[90%] md:w-[75%]  max-w-[200px]"
                  alt="batu elemen 1"
                />
                <Image
                  src={'/assets/ukm-apakah-aku/elemen1.png'}
                  width={1000}
                  height={1000}
                  className="absolute z-[13] ml-[3%] w-[42%] animate-[float_3s_ease-in-out_infinite] md:w-[39%]"
                  alt="elemen 1"
                />
              </div>
              <div className="relative -mr-[12%] flex flex-col items-center justify-center md:-mr-[3%] md:translate-y-[-18%]">
                <Image
                  src={'/assets/ukm-apakah-aku/batu-elemen2.png'}
                  width={1000}
                  height={1000}
                  className="z-[12] w-[90%] md:w-[75%] max-w-[200px]"
                  alt="batu elemen 2"
                />
                <Image
                  src={'/assets/ukm-apakah-aku/elemen2.png'}
                  width={1000}
                  height={1000}
                  className="absolute z-[13] ml-[3%] w-[42%] animate-[float_3s_ease-in-out_infinite] md:w-[39%]"
                  alt="elemen 2"
                />
              </div>
              <div className="relative -mr-[12%] flex flex-col items-center justify-center md:-mr-[3%] md:translate-y-[-18%]">
                <Image
                  src={'/assets/ukm-apakah-aku/batu-elemen3.png'}
                  width={1000}
                  height={1000}
                  className="z-[12] w-[90%] md:w-[75%] max-w-[200px]"
                  alt="batu elemen 3"
                />
                <Image
                  src={'/assets/ukm-apakah-aku/elemen3.png'}
                  width={1000}
                  height={1000}
                  className="absolute z-[13] ml-[3%] w-[42%] animate-[float_3s_ease-in-out_infinite] md:w-[39%]"
                  alt="elemen 3"
                />
              </div>
              <div className="relative flex flex-col items-center justify-center">
                <Image
                  src={'/assets/ukm-apakah-aku/batu-elemen4.png'}
                  width={1000}
                  height={1000}
                  className="z-[12] w-[90%] md:w-[75%] max-w-[200px]"
                  alt="batu elemen 4"
                />
                <Image
                  src={'/assets/ukm-apakah-aku/elemen4.png'}
                  width={1000}
                  height={1000}
                  className="absolute z-[13] ml-[3%] w-[42%] animate-[float_3s_ease-in-out_infinite] md:w-[39%]"
                  alt="elemen 4"
                />
              </div>
            </div>
          </>
        )}

        <div
          id="prolog"
          className="z-50 mt-[-23%] flex h-full items-center justify-center md:mt-16 md:items-start"
        >
          <PrologBox
            text={dataProlog[currentProlog - 1] ? dataProlog[currentProlog - 1].prolog : ''}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            currentProlog={currentProlog}
          />
        </div>
      </div>
    </>
  )
}
