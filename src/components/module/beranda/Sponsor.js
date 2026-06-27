'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import { storage } from '@/util/firebase'

export default function Sponsor() {
  const [sponsorImages, setSponsorImages] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const storageRef = ref(storage, 'gs://gelex2024-bccf0.appspot.com/logo-sponsor')
        const result = await listAll(storageRef)

        const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef))
        const urls = await Promise.all(urlPromises)

        setSponsorImages(urls)
      } catch (error) {
        console.error('Error fetching images from Firebase:', error)
      }
    }

    fetchImages()
  }, [])

  const getWidthClass = (url) => {
    const fileName = url.split('/').pop()
    if (fileName.includes('(kecil)')) {
      return 'w-36 md:w-24 lg:w-28 xl:w-36'
    } else if (fileName.includes('(medium)')) {
      return 'w-44 md:w-28 lg:w-32 xl:w-40'
    } else if (fileName.includes('(besar)')) {
      return 'w-64 md:w-60 lg:w-64 xl:w-72 2xl:w-56'
    } else {
      return 'w-72'
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/assets/beranda/sponsor/bg-sponsor.png"
          alt="Background Sponsor"
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
            src="/assets/beranda/sponsor/title-sponsor.png"
            alt="Title Sponsor"
            width={0}
            height={0}
            className="h-[200px] w-[500px] object-contain"
          />
        </div>
        <div className="relative z-30 flex items-center justify-center xl:max-w-[90%] 2xl:max-w-[80%]">
          <Image
            src="/assets/beranda/sponsor/stamp-sponsor.png"
            alt="Stamp Sponsor"
            width={1600}
            height={1600}
            className="object-contain"
          />
          <div className="absolute inset-0 top-[-7vh] m-auto grid h-[50%] w-[60%] grid-cols-3 items-center justify-items-center gap-12 xl:scale-[1] 2xl:scale-[1]">
            {sponsorImages.map((url, index) => (
              <img
                src={url}
                alt={`Firebase Image ${index}`}
                className={`z-30 ${getWidthClass(url)} ${index === 0 ? 'scale-[1.6]' : ''} ${index === 2 ? 'scale-[0.9]' : ''} ${index >= sponsorImages.length - 2 ? 'md:ml-48 lg:ml-72 xl:ml-80 laptopL:ml-96' : ''} `}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex h-screen flex-col items-center justify-center md:hidden">
          <div className="relative right-[-15vw] top-[15vh] z-40 flex xxxs:top-[25%] xxs:top-[20%] xs:top-[15%] sm:top-[12%]">
            <Image
              src="/assets/beranda/sponsor/title-sponsor-mobile.png"
              alt="Title Sponsor Mobile"
              width={0}
              height={0}
              className="h-[100px] w-[180px] object-contain"
            />
          </div>
          <div className="relative z-30 flex items-center justify-center">
            <Image
              src="/assets/beranda/sponsor/stamp-sponsor-mobile.png"
              alt="Stamp Sponsor Mobile"
              width={0}
              height={0}
              className="h-[800px] w-[800px] object-contain"
            />
            <div className="absolute inset-0 top-[-2vh] flex max-h-[100%] w-full scale-75 flex-wrap items-center justify-center gap-8 xxxs:scale-[0.4] xxs:scale-[0.4] xs:scale-[0.45] s:w-[65%] s:scale-75">
              {sponsorImages.map((url, index) => (
                <img
                  src={url}
                  alt={`Firebase Image ${index}`}
                  className={`z-30 ${getWidthClass(url)} ${index === 0 ? 'scale-[1.6]' : ''} ${index === 2 ? 'scale-[0.9]' : ''} `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="z-25 absolute right-[-50vw] top-[-10vh] flex items-center justify-center">
        <Image
          src="/assets/beranda/sponsor/stars.png"
          alt="Stars"
          width={1000}
          height={1000}
          className="object-contain"
          sizes="(max-width: 768px) 50vw, 30vw"
        />
      </div>
      <div className="absolute bottom-[-10vh] left-[-50vw] z-10">
        <Image
          src="/assets/beranda/sponsor/stars.png"
          alt="Stars Bottom Left"
          width={1000}
          height={1000}
          className="object-contain"
          sizes="(max-width: 768px) 50vw, 30vw"
        />
      </div>
      <div className="absolute bottom-[5vh] left-[-15vw] z-30 hidden md:block xl:bottom-[5vh] xl:left-[-20vw] 2xl:bottom-[-2vh] 2xl:left-[-30vw]">
        <Image
          src="/assets/beranda/sponsor/rock-sponsor.png"
          alt="Rock Sponsor"
          width={400}
          height={400}
          className="h-[50vh] w-[50vw] object-contain xl:h-[60vh] xl:w-[60vw] 2xl:h-[80vh] 2xl:w-[80vw]"
          sizes="(max-width: 768px) 40vw, 20vw"
        />
      </div>
      <div className="absolute bottom-[-5vh] right-[-3vw] z-30 md:right-[-15vw] md:top-[30vh] lg:right-[-22vw] lg:top-[20vh] xl:right-[-28vw] xl:top-[10vh] 2xl:right-[-45vw] 2xl:top-[-12vh]">
        <Image
          src="/assets/beranda/sponsor/gantari.png"
          alt="Gantari Sponsor"
          width={550}
          height={550}
          className="h-[60vh] w-[60vw] object-contain md:h-[65vh] md:w-[65vw] lg:h-[70vh] lg:w-[70vw] xl:h-[80vh] xl:w-[80vw] 2xl:h-[120vh] 2xl:w-[120vw]"
          sizes="(max-width: 768px) 50vw, 30vw"
        />
      </div>
    </div>
  )
}
