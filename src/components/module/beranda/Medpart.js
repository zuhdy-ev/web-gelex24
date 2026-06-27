'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import { storage } from '@/util/firebase'

export default function Medpart() {
  const [medpartImages, setMedpartImages] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const storageRef = ref(storage, 'gs://gelex2024-bccf0.appspot.com/logo-medpart')
        const result = await listAll(storageRef)

        const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef))
        const urls = await Promise.all(urlPromises)

        setMedpartImages(urls)
      } catch (error) {
        console.error('Error fetching images from Firebase:', error)
      }
    }

    fetchImages()
  }, [])

  const getWidthClass = (url) => {
    const fileName = url.split('/').pop()
    if (fileName.includes('(S)')) {
      return 'w-32'
    } else if (fileName.includes('(M)')) {
      return 'w-28'
    } else if (fileName.includes('(L)')) {
      return 'w-40'
    } else {
      return 'w-28'
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/assets/beranda/medpart/bg-medpart.png"
          alt="Background Medpart"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          className="object-top"
        />
        <Image
          src="/assets/beranda/hero/bg-texture.png"
          alt="Background Texture"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          className="absolute inset-0 z-20 bg-blend-multiply mix-blend-multiply"
        />
      </div>
      <div className="hidden h-screen flex-col items-center justify-center md:flex">
        <div className="relative z-40 -mb-8 flex items-center justify-center 2xl:-mb-8">
          <Image
            src="/assets/beranda/medpart/title-medpart.png"
            alt="Title Medpart"
            width={800}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="relative z-30">
          <div className="flex items-center justify-center">
            <Image
              src="/assets/beranda/medpart/stamp-medpart.png"
              alt="Stamp Medpart"
              width={1600}
              height={1600}
              className="object-contain"
            />
            <div className="absolute inset-0 m-auto grid h-[85%] w-[65%] scale-[0.80] grid-cols-6 items-center justify-center gap-4 nanggung:w-[70%]">
              {medpartImages.map((url, index) => (
                <img
                  src={url}
                  alt={`Firebase Image ${index}`}
                  className={`z-30 ${getWidthClass(url)} ${index >= medpartImages.length - 3 ? 'ml-responsive' : ''}`}
                  style={{ '--image-width': '-9vw' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex h-screen flex-col items-center justify-center md:hidden">
          <div className="relative left-[-15vw] top-[2vh] z-40 mt-4 flex">
            <Image
              src="/assets/beranda/medpart/title-medpart-mobile.png"
              alt="Title Medpart Mobile"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
          <div className="relative z-30 flex items-center justify-center">
            <Image
              src="/assets/beranda/medpart/stamp-medpart-mobile.png"
              alt="Stamp Medpart Mobile"
              width={800}
              height={800}
              className="object-contain"
            />
            <div className="absolute inset-0 m-auto grid h-[75%] w-[50%] grid-cols-3 items-center gap-4">
              {medpartImages.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Firebase Image ${index}`}
                  className={`z-30 ${getWidthClass(url)}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <Image
          src="/assets/beranda/medpart/stars-effect.png"
          alt="Stars Effect"
          width={1000}
          height={1000}
          className="object-contain"
        />
      </div>
      <div className="absolute inset-0 left-[-20vw] top-[40vh] z-[40] flex lg:left-[-25vw] 2xl:left-[-22vw] 2xl:top-[35vh]">
        <Image
          src="/assets/beranda/medpart/gilang.png"
          alt="Gilang"
          width={400}
          height={400}
          className="h-[30vh] w-[30vw] object-contain md:h-[60vh] md:w-[60vw] lg:h-[70vh] lg:w-[70vw] 2xl:h-[70vh] 2xl:w-[70vw]"
        />
      </div>
      <div className="absolute bottom-[8vh] right-[-25vw] z-[30] hidden md:flex xl:bottom-0">
        <Image
          src="/assets/beranda/medpart/rumah.png"
          alt="Rumah"
          width={400}
          height={400}
          className="h-[30vh] w-[30vw] object-contain md:h-[50vh] md:w-[50vw] xl:h-[60vh] xl:w-[60vw] 2xl:h-[65vh] 2xl:w-[65vw]"
        />
      </div>
      <div className="absolute bottom-4 left-0 z-[30] flex h-[50vh] w-[40vw] xxs:-bottom-16 mepet:-bottom-12 s:-bottom-20 md:hidden">
        <Image
          src="/assets/beranda/medpart/rumah-mobile.png"
          alt="Rumah Mobile"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 left-[-50vw] z-[10] flex h-[70vh] w-[70vw] md:hidden">
        <Image
          src="/assets/beranda/medpart/tree.png"
          alt="Tree Left"
          fill
          style={{ objectFit: 'cover' }}
          className="object-contain"
        />
      </div>
      <div className="absolute right-[-10vw] top-[20vh] z-[20] hidden md:block lg:right-[-25vw] lg:top-[5vh]">
        <Image
          src="/assets/beranda/medpart/tree.png"
          alt="Tree Right"
          width={500}
          height={500}
          className="h-[100vh] w-[100vw] object-contain md:h-[50vh] md:w-[50vw] lg:h-[70vh] lg:w-[70vw] 2xl:h-[80vh] 2xl:w-[80vw]"
        />
      </div>
      <div className="absolute left-[-30vh] top-[20vh] z-[30] hidden md:left-[-40vw] md:block lg:left-[-40vw] lg:top-[10vh] 2xl:left-[-60vw] 2xl:top-[-8vh]">
        <Image
          src="/assets/beranda/medpart/tree.png"
          alt="Tree Left 2"
          width={500}
          height={500}
          className="h-[100vh] w-[100vw] object-contain md:h-[60vh] md:w-[60vw] lg:h-[70vh] lg:w-[70vw] 2xl:h-[110vh] 2xl:w-[110vw]"
        />
      </div>
    </div>
  )
}
