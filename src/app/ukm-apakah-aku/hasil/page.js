'use client'

import Button from '@/components/element/ukm-apakah-aku/Button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import UKMCard from '@/components/element/ukm-apakah-aku/UKMCard'
import Link from 'next/link'
import Rekomendasi from '@/components/module/ukm-apakah-aku/Rekomendasi'
import UKMDeskripsi from '@/components/element/ukm-apakah-aku/UKMDeskripsi'
import { useEffect, useState, useContext, useRef } from 'react'
import PageTransition from '@/components/module/ukm-apakah-aku/PageTransition'
import Loading from '@/components/module/global/Loading'
import calculateHasil from '@/util/calculateHasil'
import { AppContext } from '@/context/AppContext'
import { dataPertanyaan } from '@/data/data'
import BagikanHasil from '@/components/module/ukm-apakah-aku/BagikanHasil'
import captureAndShare from '@/util/captureAndShare'
// import getImagePath from "@/util/getImagePath";

export default function Hasil() {
  const router = useRouter()
  const { daftarJawaban, dispatch } = useContext(AppContext)
  const [showTransition, setShowTransition] = useState(false)
  const [loading, setLoading] = useState(true)
  const [hasil, setHasil] = useState([])
  const [rekomen, setRekomen] = useState([])
  const [bagikanLoading, setBagikanLoading] = useState(false)
  const [isRohani, setIsRohani] = useState(false)
  const bagikanHasilRef = useRef(null)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH

  useEffect(() => {
    const shouldShowTransition = localStorage.getItem('showTransition') === 'true'
    if (shouldShowTransition) {
      setShowTransition(true)
      localStorage.removeItem('showTransition')
    }
    if (Object.keys(daftarJawaban).length === dataPertanyaan.length) {
      const hasilUKM = calculateHasil(daftarJawaban)
      if(hasilUKM.slice(0,5).every((ukm, index) => ukm.id >= 51 && ukm.id <= 55)){
        console.log(hasilUKM.slice(0,5))
        setIsRohani(true)
      }
      setHasil(hasilUKM)
      setRekomen(hasilUKM.slice(1, 4))
    } else {
      router.push('/ukm-apakah-aku')
    }
    setLoading(false)
  }, [])

  const handleBack = () => {
    router.push('/ukm-apakah-aku')
    dispatch({
      type: 'RESET_DAFTAR_JAWABAN',
    })
    dispatch({
      type: 'SET_NOMOR_PROLOG',
      payload: {
        nomorProlog: 1
      },
    })
    dispatch({
      type: 'SET_NOMOR_PERTANYAAN',
      payload: {
        nomorPertanyaan: 1
      },
    })
  }

  const handleBagikan = async (componentRef) => {
    setBagikanLoading(true)
    componentRef.current.style.display = 'block'
    await captureAndShare(componentRef)
    componentRef.current.style.display = 'none'
    setBagikanLoading(false)
  }

  if (!hasil.length) {
    return <Loading />
  }

  return (
    <div className='w-screen max-w-[1920px]'>
      {loading && <Loading />}
      {!loading && showTransition && <PageTransition />}
      <div style={{backgroundImage: `url('${basePath}/assets/ukm-apakah-aku/background-hasil.png')`}} className="relative flex min-h-screen flex-col items-center overflow-hidden bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:z-[-5] before:block before:h-[100%] before:bg-gradient-kuning-coklat-ijo before:content-['']">
        <div
          style={{backgroundImage: `url('${basePath}/assets/segera-hadir/tekstur-desktop.png')`}}
          id="teksturDesktop"
          className="fixed z-10 hidden h-screen w-full bg-cover bg-blend-multiply mix-blend-multiply md:block"
        ></div>
        <div
          style={{backgroundImage: `url('${basePath}/assets/segera-hadir/tekstur-mobile.png')`}}
          id="teksturMobile"
          className="fixed z-10 block h-screen w-full bg-cover bg-blend-multiply mix-blend-multiply md:hidden"
        ></div>

        {bagikanLoading && (
          <div className="fixed z-[999] flex h-screen w-screen items-center justify-center overflow-hidden">
            <div className="absolute h-full w-full bg-[rgba(0,0,0,0.6)]"></div>
            <div className="h-14 w-14 animate-spin rounded-full border-4 border-t-4 border-white border-t-transparent"></div>
          </div>
        )}

        <div className="navbar z-50 w-full px-8 py-5 md:px-14 md:py-6 lg:px-20 lg:py-8">
          <Button
            customChildren={true}
            borderClass={'rounded-full p-[4px] md:[p-6x]'}
            bgClass={'rounded-full px-3 md:px-4'}
            onClick={handleBack}
          >
            <Image
              src={'/assets/ukm-apakah-aku/arrow-next.svg'}
              width={0}
              height={0}
              className="w-2 translate-x-[-1px] scale-x-[-1] md:w-3"
              alt="back button"
            />
          </Button>
        </div>
        <div className="container z-50 flex flex-col items-center px-8 md:px-14 lg:px-20">
          <div className="relative mb-4 flex items-center justify-center sm:mb-8 md:mb-12 lg:mb-16">
            <p className="relative z-[2] inline-block bg-gradient-ungu-merah-ungu bg-clip-text text-center font-magicretro text-2xl text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
              UKM yang cocok denganku...
            </p>
            <p className="absolute z-[1] inline-block text-center font-magicretro text-2xl text-transparent [text-shadow:-1px_-1px_0_#FFE5AF,1px_-1px_0_#FFE5AF,-1px_1px_0_#FFE5AF,_1px_1px_0_#FFE5AF,0px_4px_10px_#FFE5AF,0px_4px_16px_#813322,0px_4px_4px_rgba(0,0,0,0.25)] sm:text-4xl md:text-5xl lg:text-6xl">
              UKM yang cocok denganku...
            </p>
          </div>
          <div
            className="relative mb-16 flex w-full max-w-[1100px] flex-col items-center bg-center bg-no-repeat md:mb-28 md:pt-20 lg:mb-40 lg:w-[80%]"
            style={{ backgroundImage: `url('${basePath}/assets/ukm-apakah-aku/vintage_paper.png')`,  backgroundSize: '100% 100%' }}
          >
            <UKMCard
              isRohani={isRohani}
              logo={
                hasil[0].logo === '/' ? '/assets/ukm-apakah-aku/logo-ukm-catur.png' : hasil[0].logo
              }
              nama={hasil[0].nama}
            />
            <UKMDeskripsi className={'z-10 mt-[-15px] md:mt-10 lg:mt-14'} hasil={hasil[0].hasil} />
            <div className="my-4 font-magicretro text-lg text-[#FFD59B] [text-shadow:0px_8px_4px_rgba(0,0,0,0.25)] sm:text-xl md:my-10 md:text-3xl lg:my-14 lg:text-4xl">
              {isRohani ? "" : "Rekomendasi Lainnya"}
            </div>
            {isRohani ? <Rekomendasi data={hasil.slice(0,5)} /> : <Rekomendasi data={rekomen} />}
          
            <Link
              href=""
              className="my-14 hidden text-white underline underline-offset-4 transition-all hover:translate-y-[2px] hover:text-[rgba(255,255,255,0.6)] md:block md:text-base lg:text-lg"
            >
              Cari tahu lebih banyak
            </Link>
            {/* <div className="relative flex w-[70%] justify-center items-center my-10 md:my-0 md:mb-16">
              <Image
                src={'/assets/ukm-apakah-aku/bg-invitation.svg'}
                width={0}
                height={0}
                className="w-full h-full"
                alt="invitation outline"
              />
              <div className='absolute w-[88%] md:w-[90%] h-[80%] bg-[linear-gradient(to_bottom,#FFE5AF_-6.4%,#E6A263_99.85%)] shadow-[inset_0px_4px_10px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center'>
                <Image
                  src={'/assets/ukm-apakah-aku/tekstur-invitation.png'}
                  width={0}
                  height={0}
                  className="bg-blend-multiplay absolute h-full w-full mix-blend-multiply"
                  alt="invitation tekstur"
                />
                <Image
                  src={'/assets/ukm-apakah-aku/gemmy-invitation.png'}
                  width={0}
                  height={0}
                  className="absolute w-[22%] z-20 right-0  bottom-0 translate-x-[20%]"
                  alt="invitation gemmy"
                />
                <Image
                  src={'/assets/ukm-apakah-aku/gilgantari-invitation.png'}
                  width={0}
                  height={0}
                  className="absolute w-[22%] z-20 left-0  bottom-0 translate-x-[-20%]"
                  alt="invitation gilgantari"
                />
                <div className="font-magicretro text-[#7F152E] text-[7px] md:text-lg [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] z-30 ">
                Yuk, kenalan dengan UKM-UKM kamu ini di GELEX 2024!
                </div>
                <div className="z-30 mt-1 md:mt-5">
                  <div className='flex items-center font-bold  text-[6px] md:text-sm'>
                    <Image
                      src={'/assets/ukm-apakah-aku/icon-location.svg'}
                      width={0}
                      height={0}
                      className="w-[5px] md:w-3 mr-1 md:mr-2"
                      alt="icon location"
                    />
                    Lapangan Pancasila, Universitas Gadjah Mada
                  </div>
                  <div className='flex items-center font-bold  text-[6px] md:text-sm'>
                    <Image
                      src={'/assets/ukm-apakah-aku/icon-calendar.svg'}
                      width={0}
                      height={0}
                      className="w-[5px] md:w-3 mr-1 md:mr-2"
                      alt="icon calendar"
                    />
                    21-23 Agustus 2024
                  </div>
                </div>
              </div>
            </div> */}
            <Image 
              src={'/assets/ukm-apakah-aku/invitation-ticket.png'}
              width={0}
              height={0}
              className='w-[85%] my-10 md:my-0 md:mb-16'
            />
            <Button
              onClick={() => handleBagikan(bagikanHasilRef)}
              customChildren={true}
              borderClass={
                'mt-0 md:mt-6 md:mt-0 p-[4px] md:p-[6px] lg:p-[8px] rounded-[16px] md:rounded-[18px] lg:rounded-[20px]'
              }
              bgClass={
                'px-6 md:px-8 py-1 md:py-2 rounded-[12px] md:rounded-[12px] lg:rounded-[14px]'
              }
            >
              <div className="flex bg-[linear-gradient(180deg,#FFE5AF_0%,#E6A263_100%)] bg-clip-text text-center font-bold text-transparent md:text-2xl lg:text-3xl">
                Bagikan
                <Image
                  src={'/assets/ukm-apakah-aku/share-icon.svg'}
                  width={0}
                  height={0}
                  className="ml-2 w-4 md:ml-3 md:w-6 lg:w-7"
                  alt="share icon"
                />
              </div>
            </Button>
          </div>
        </div>
        <div className="relative hidden" ref={bagikanHasilRef}>
          <BagikanHasil
            isRohani={isRohani}
            nama={hasil[0].nama}
            logo={
              hasil[0].logo === '/' ? '/assets/ukm-apakah-aku/logo-ukm-catur.png' : hasil[0].logo
            }
            deskripsi={hasil[0].hasil}
            dataRekomendasi={hasil.slice(0,5)}
          />
        </div>
      </div>
    </div>
  )
}