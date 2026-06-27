import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

export default function UKMCard({ logo, nama, isRohani }) {
  const imageRef = useRef(null)
  const [imageHeight, setImageHeight] = useState(0)

  useEffect(() => {
    const updateHeight = () => {
      if (imageRef.current) {
        setImageHeight(imageRef.current.clientHeight)
      }
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)

    return () => {
      window.removeEventListener('resize', updateHeight)
    }
  }, [])

  return (
    <>
      <div className="relative flex h-fit w-full items-center justify-center">
        <Image
          ref={imageRef}
          src="/assets/ukm-apakah-aku/bgCard.png"
          width={1000}
          height={1000}
          className="w-[80%] md:w-[55%]"
          alt="background cards"
          loading="lazy"
        />
        <div
          style={{ minHeight: imageHeight * 0.8 }}
          className="absolute flex w-[40%] cursor-pointer flex-col items-center justify-between rounded-[30px] border-4 border-[#E6A263] bg-[linear-gradient(112.87deg,#FFE5AF_6.56%,#FFFFFF_49.24%,#FFE5AF_90.78%)] p-3 font-bold shadow-answer-box transition-all hover:scale-[1.01] md:w-[29%] md:border-[6px] md:p-4 lg:border-8"
        >
          <div className="flex w-full justify-between">
            <Image
              src="/assets/ukm-apakah-aku/card-ornament.svg"
              width={0}
              height={0}
              className="w-[37%]"
              alt="ornament"
            />
            <Image
              src="/assets/ukm-apakah-aku/card-ornament.svg"
              width={0}
              height={0}
              className="w-[37%] scale-x-[-1]"
              alt="ornament"
            />
          </div>

          {
            isRohani ? <></> : <Image
            src={logo.charAt(0) == '/' ? logo : logo}
            width={1000}
            height={1000}
            className="w-[78%] max-h-[100px] md:max-h-[250px] object-contain"
            alt="logo ukm"
            loading="lazy"
          />
          }

          {isRohani ? <p className="inline-block bg-gradient-merah-1 bg-clip-text text-center font-magicretro text-xl text-transparent [text-shadow:1px_3px_4px_rgba(0,0,0,0.1)] sm:text-3xl md:text-4xl">
            Sekber<br/> Rohani
          </p> : <p className="inline-block bg-gradient-merah-1 bg-clip-text text-center font-magicretro text-sm text-transparent [text-shadow:1px_3px_4px_rgba(0,0,0,0.1)] sm:text-xl md:text-2xl lg:text-3xl">
            {nama}
          </p>}

          <div className="top-0 flex w-full justify-between">
            <Image
              src="/assets/ukm-apakah-aku/card-ornament.svg"
              width={0}
              height={0}
              className="w-[37%]"
              alt="ornament"
            />
            <Image
              src="/assets/ukm-apakah-aku/card-ornament.svg"
              width={0}
              height={0}
              className="w-[37%] scale-x-[-1]"
              alt="ornament"
            />
          </div>
        </div>
      </div>
    </>
  )
}
