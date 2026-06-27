'use client'

import { dataPertanyaan } from '@/data/data'
import { useContext, useEffect, useState } from 'react'
import Answers from '@/components/module/ukm-apakah-aku/Answers'
import { useRouter } from 'next/navigation'
import { AppContext } from '@/context/AppContext'
import { useAppContext } from '@/context/AppContext'
import QuestionBox from '@/components/element/ukm-apakah-aku/QuestionBox'
import ProgressBar from '@/components/element/ukm-apakah-aku/ProgressBar'
import PageTransition from '@/components/module/ukm-apakah-aku/PageTransition'
import Loading from '@/components/module/global/Loading'
import Image from 'next/image'
import useScreenSize from '@/util/useScreenSize'

export default function Pertanyaan({ params }) {
  const { daftarJawaban, dispatch, nomorPertanyaan } = useContext(AppContext)
  // const { daftarJawaban, dispatch } = useAppContext(AppContext)
  const router = useRouter()
  const [message, setMessage] = useState('')
  const [showTransition, setShowTransition] = useState(false)
  const [loading, setLoading] = useState(true)
  const [bgMobileLoaded, setbgMobileLoaded] = useState(false)
  const { isMd } = useScreenSize()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const shouldShowTransition = localStorage.getItem('showTransition') === 'true'
      if (shouldShowTransition && nomorPertanyaan === 1) {
        setShowTransition(true)
        localStorage.removeItem('showTransition')
      }
    }

    if (nomorPertanyaan) {
      if (!isNaN(nomorPertanyaan) && nomorPertanyaan > 0 && nomorPertanyaan <= dataPertanyaan.length) {
        if (nomorPertanyaan > Object.keys(daftarJawaban).length + 1) {
          dispatch({
            type: 'SET_NOMOR_PERTANYAAN',
            payload: {
              nomorPertanyaan: (Object.keys(daftarJawaban).length === 0 ? 1 : Object.keys(daftarJawaban).length)
            },
          })
        } 
      } else {
        router.push('/ukm-apakah-aku/')
      }
    }
    if (bgMobileLoaded) {
      setLoading(false)
    }
  }, [nomorPertanyaan, daftarJawaban, router, bgMobileLoaded])

  const handleChange = (questionId, jawabanTipe) => {
    dispatch({
      type: 'SET_DAFTAR_JAWABAN',
      payload: {
        questionId,
        jawabanTipe,
      },
    })
  }

  const handleNext = () => {
    let question = dataPertanyaan[nomorPertanyaan - 1]
    if (daftarJawaban.hasOwnProperty(question.id)) {
      if (nomorPertanyaan < dataPertanyaan.length) {
        setMessage('')
        dispatch({
            type: 'SET_NOMOR_PERTANYAAN',
            payload: {
              nomorPertanyaan: nomorPertanyaan + 1
            },
          })
      }
    } else {
      setMessage('Pilih salah satu jawaban!')
    }
  }

  const handlePrevious = () => {
    if (nomorPertanyaan > 1) {
      setMessage('')
      dispatch({
        type: 'SET_NOMOR_PERTANYAAN',
        payload: {
          nomorPertanyaan: nomorPertanyaan - 1
        },
      })
    }
  }

  const handleSubmit = () => {
    let question = dataPertanyaan[nomorPertanyaan - 1]
    if (daftarJawaban.hasOwnProperty(question.id)) {
      if (nomorPertanyaan === dataPertanyaan.length) {
        setLoading(true)
        if (typeof window !== 'undefined') {
          localStorage.setItem('showTransition', 'true')
        }
        router.push('/ukm-apakah-aku/hasil')
      }
    } else {
      setMessage('Pilih salah satu jawaban!')
    }
  }

  return (
    <>
      {loading && <Loading />}
      {showTransition && <PageTransition />}
      <div className="flex h-screen w-screen flex-col overflow-hidden bg-black md:justify-between max-w-[1920px]">
        {nomorPertanyaan && (
          <>
            {!isMd && (
              <Image
                src={dataPertanyaan[nomorPertanyaan - 1].bgMobile}
                width={1000}
                height={1000}
                className="absolute h-full w-full object-cover md:hidden"
                alt="background mobile"
                onLoadingComplete={() => setbgMobileLoaded(true)}
              />
            )}
          </>
        )}
        <div
          id="pertanyaan"
          className="relative flex min-h-[42%] justify-center md:h-full md:min-h-0 md:items-center"
        >
          {nomorPertanyaan && (
            <Image
              src={dataPertanyaan[nomorPertanyaan - 1].bgDesktop}
              width={1000}
              height={1000}
              className="absolute hidden h-full w-full object-cover md:block"
              alt="background desktop"
              onLoadingComplete={() => setbgMobileLoaded(true)}
            />
          )}
          <div className={'top-0 mb-10 flex w-fit flex-col items-center md:absolute md:mb-0'}>
            {nomorPertanyaan >= 1 && nomorPertanyaan <= 4 ? (
              <div className="relative flex items-center justify-center">
                <Image
                  src={`/assets/ukm-apakah-aku/cahaya-sorot.svg`}
                  width={1000}
                  height={1000}
                  className="w-[130px] md:w-[150px]"
                  alt="cahaya sorot"
                />
                <Image
                  src={`/assets/ukm-apakah-aku/elemen${nomorPertanyaan}.png`}
                  width={1000}
                  height={1000}
                  className="absolute w-[65px] animate-[float_3s_ease-in-out_infinite] md:w-[75px]"
                  alt={`elemen ${nomorPertanyaan}`}
                />
              </div>
            ) : (
              <div className="mb-14 md:mb-16"></div>
            )}
            <div
              className={
                nomorPertanyaan >= 1 && nomorPertanyaan <= 4
                  ? 'flex translate-y-[-32px] flex-col items-center'
                  : 'flex flex-col items-center'
              }
            >
              <ProgressBar
                current={parseInt(nomorPertanyaan)}
                total={dataPertanyaan.length}
                className={'mb-4 md:mb-6'}
              />
              <QuestionBox
                className={nomorPertanyaan >= 1 && nomorPertanyaan <= 4 ? 'md:w-[720px]' : ''}
                text={nomorPertanyaan ? dataPertanyaan[nomorPertanyaan - 1].pertanyaan : ''}
                message={message}
              />
            </div>
          </div>
        </div>
        <div id="answer" className="z-10 flex w-full justify-center">
          <Answers
            bgAnswer={
              nomorPertanyaan
                ? dataPertanyaan[nomorPertanyaan - 1].bgAnswer
                : 'linear-gradient(180deg, #183A53 0%, #3581B9 188.88%)'
            }
            boxBorderColor={
              nomorPertanyaan
                ? dataPertanyaan[nomorPertanyaan - 1].borderAnswer
                : 'linear-gradient(180deg, #183A53 0%, #3581B9 188.88%)'
            }
            currentQuestion={nomorPertanyaan || 1}
            handleChange={handleChange}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  )
}
