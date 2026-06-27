import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import '../../../../../app/globals.css'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import { storage } from '@/util/firebase'

export default function Konten({ gallery }) {
  const [images, setImages] = useState([])
  const [currentFoto, setCurrentFoto] = useState('')

  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(storage, `gs://gelex2024-bccf0.appspot.com/komunitas/${gallery}`)
      const result = await listAll(storageRef)

      const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef))
      const urls = await Promise.all(urlPromises)

      setImages(urls)
      if (urls.length > 0) setCurrentFoto(urls[0])
    }

    fetchImages()
  }, [])

  const handleFotoClick = (foto) => {
    setCurrentFoto(foto)
  }

  return (
    <div className="flex h-[70vh] w-screen flex-col items-center justify-center gap-3 p-2 xs:h-[80vh] md:h-screen md:min-h-[810px]">
      {/* Judul */}
      <div className="flex w-full items-center justify-center gap-5 lg:w-[80%]">
        <div>
          <Image
            src="/assets/profil-ukm-komunitas/hero-asset-nama-mobile.png"
            alt="asset nama"
            width={100}
            height={100}
            className="opacity-30"
          />
        </div>
        <div>
          <p className="font-magicretro text-[30px] text-green-900 s:text-[50px] lg:text-[60px]">
            Galeri
          </p>
        </div>
        <div>
          <Image
            src="/assets/profil-ukm-komunitas/hero-asset-nama-mobile.png"
            alt="asset nama"
            width={100}
            height={100}
            className="scale-x-[-1] transform opacity-30"
          />
        </div>
      </div>
      {/* Foto Besar */}
      <div
        className="relative w-full max-w-[1000px] rounded-lg bg-gradient-to-tr from-[#22564D] to-[#FFE5AF] p-1 lg:w-[80%] lg:rounded-3xl lg:p-3"
        style={{ aspectRatio: '16/9' }}
      >
        {/* Asset */}
        <div className="absolute h-full w-full">
          <div className="absolute -bottom-1 right-0 s:-bottom-1 lg:-bottom-2 lg:-right-2">
            <Image
              src="/assets/profil-ukm-komunitas/galeri-asset-foto-1-mobile.png"
              alt="asset foto 1"
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
              className="w-20 md:w-40 lg:hidden"
            />
            <Image
              src="/assets/profil-ukm-komunitas/galeri-asset-foto-1-desktop.png"
              alt="asset foto 1"
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
              className="hidden w-40 lg:block laptopL:w-64"
            />
          </div>
          <div className="absolute -bottom-10 -left-8 z-10 s:-bottom-11 s:-left-11 md:-bottom-16 lg:-bottom-14 lg:-left-14 laptopL:-bottom-[60px]">
            <Image
              src="/assets/profil-ukm-komunitas/galeri-asset-foto-2-mobile.png"
              alt="asset foto 2"
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
              className="w-32 s:w-40 md:w-52 lg:hidden"
            />
            <Image
              src="/assets/profil-ukm-komunitas/galeri-asset-foto-2-desktop.png"
              alt="asset foto 2"
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
              className="hidden w-56 lg:block laptopL:w-96"
            />
          </div>
          <div className="absolute -left-5 -top-8">
            <Image
              src="/assets/profil-ukm-komunitas/galeri-asset-foto-3-mobile.png"
              alt="asset foto 3"
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
              className="w-10 s:w-14 md:w-20 lg:hidden"
            />
            <Image
              src="/assets/profil-ukm-komunitas/galeri-asset-foto-3-desktop.png"
              alt="asset foto 3"
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
              className="hidden w-20 lg:block laptopL:w-32"
            />
          </div>
        </div>
        {/* Foto onClick */}
        <div
          className="flex h-full w-full items-center justify-center overflow-hidden rounded-md bg-black lg:rounded-xl"
          style={{ aspectRatio: '16/9' }}
        >
          {currentFoto && (
            <img
              src={currentFoto}
              alt="foto besar"
              style={{ objectFit: 'cover' }}
              width={1000}
              height={1000}
            />
          )}
        </div>
      </div>
      {/* Foto Kecil */}
      <div className="z-0 mt-5 w-full max-w-[1000px] overflow-hidden rounded-lg lg:w-[80%]">
        <Swiper
          navigation
          // scrollbar={{ draggable: true, el: '.swiper-scrollbar' }}
          slidesPerView={1.8}
          spaceBetween={10}
          breakpoints={{
            425: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 5.5,
              spaceBetween: 40,
            },
          }}
          className="flex w-full items-center justify-center"
        >
          {images.map((url, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border hover:border-[3px] hover:border-yellow-500"
                onClick={() => handleFotoClick(url)}
                style={{ aspectRatio: '16/9' }}
              >
                <img
                  src={url}
                  alt={`foto ${index + 1}`}
                  width={1000}
                  height={1000}
                  className=""
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
