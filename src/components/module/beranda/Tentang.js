import Button from '@/components/element/ukm-apakah-aku/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function Tentang() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/assets/beranda/tentang/bg-tentang.png"
          alt="Background Tentang"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          className="object-top py-0"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-blend-multiply mix-blend-multiply">
        <Image
          src="/assets/beranda/hero/bg-texture.png"
          alt="Background Texture"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          className="object-top"
        />
      </div>
      <div className="absolute inset-0 left-[-35vw] z-20 flex">
        <div className="relative h-[30vh] w-[100vw] md:top-[-15vh] md:h-[55vh] md:w-[105vw] lg:top-[-5vh] lg:h-[40vh] lg:w-[100vw] xl:top-[-2vh] xl:h-[30vh] xl:w-[70vw]">
          <Image
            src="/assets/beranda/tentang/light-effects.png"
            alt="Light Effects"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-[-150px] z-20">
        <div className="relative h-[30vh] w-[100vw] md:bottom-[5vh] md:right-[-20vw] md:h-[55vh] md:w-[105vw] lg:bottom-[-5vh] lg:h-[40vh] lg:w-[90vw] xl:bottom-[-2vh] xl:h-[30vh] xl:w-[70vw]">
          <Image
            src="/assets/beranda/tentang/light-effects.png"
            alt="Light Effects"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
          />
        </div>
      </div>
      <div className="absolute inset-0 z-30 flex items-center justify-center">
        <div className="relative h-[100vh] w-[92vw]">
          <Image
            src="/assets/beranda/tentang/lights-effects2.png"
            alt="Light Effects 2"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            quality={100}
          />
        </div>
      </div>
      <div className="absolute inset-0 top-[20vh] z-[20] flex h-[15vh] w-[100vw] items-center justify-center opacity-80 xxs:top-[17vh] xs:top-[13vh] md:top-[17vh] md:h-[20vh] lg:top-[10vh] lg:h-[35vh] xl:top-[15vh] xl:h-[35vh] 2xl:top-0 2xl:h-[50vh]">
        <div className="relative h-full w-full">
          <Image
            src="/assets/beranda/tentang/light.png"
            alt="Light"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-[-4vw] h-[110vh] w-[110vw] md:left-[-30vw] md:top-0 xl:left-[-25vw] xl:h-[100vh] xl:w-[100vw]">
        <Image
          src="/assets/beranda/tentang/plant-left.png"
          alt="Plant Left"
          fill
          style={{ objectFit: 'contain' }}
          quality={100}
        />
      </div>
      <div className="absolute right-0 top-0 h-[110vh] w-[110vw] md:right-[-30vw] md:top-[-4vh] xl:right-[-30vw] xl:top-[10vh] xl:h-[100vh] xl:w-[100vw] 2xl:right-[-35vw]">
        <Image
          src="/assets/beranda/tentang/plant-right.png"
          alt="Plant Right"
          fill
          style={{ objectFit: 'contain' }}
          quality={100}
        />
      </div>
      <div className="animate-rotate-sign2 absolute bottom-[-15vh] left-[-45vw] z-[70] h-[90vh] w-[90vw] xxs:bottom-[-20vh] xs:bottom-[-25vh] md:bottom-[-5vh] xl:bottom-[-10vh] xl:left-[-30vw] xl:h-[80vh] xl:w-[80vw] 2xl:bottom-[-5vh] 2xl:left-[-32vw]">
        <Image
          src="/assets/beranda/tentang/paw-left.png"
          alt="Paw Left"
          fill
          style={{ objectFit: 'contain' }}
          quality={100}
        />
      </div>
      <div className="animate-rotate-sign2 absolute bottom-[-15vh] right-[-45vw] z-[70] h-[90vh] w-[90vw] xxs:bottom-[-20vh] xs:bottom-[-25vh] md:bottom-[-5vh] xl:bottom-[-10vh] xl:right-[-30vw] xl:h-[80vh] xl:w-[80vw] 2xl:bottom-[-5vh] 2xl:right-[-32vw]">
        <Image
          src="/assets/beranda/tentang/paw-right.png"
          alt="Paw Right"
          fill
          style={{ objectFit: 'contain' }}
          quality={100}
        />
      </div>
      <div className="absolute right-[-5vw] top-[15vh] z-[50] h-[20vh] w-[30vw] xxs:top-[10vh] xs:top-[8vh] lg:top-0 lg:h-[25vh] lg:w-[25vw] xl:right-[5vw] xl:top-[8vh] xl:h-[25vh] xl:w-[15vw]">
        <div className="flutter relative h-full w-full">
          <Image
            src="/assets/beranda/tentang/glow-butterfly.png"
            alt="Glow Butterfly"
            fill
            style={{ objectFit: 'cover' }}
            sizes="100%"  
            quality={100}
          />
        </div>
      </div>
      <div className="relative z-50 flex h-full w-auto flex-col items-center justify-center p-4 lg:mt-20 xl:mt-20">
        <div className="absolute inset-0 z-40 hidden items-center justify-center md:flex">
          <div className="relative mx-auto h-[75%] w-[75%] md:top-[-10vh] md:h-[100%] md:w-[100%] xl:h-[80%] xl:w-[80%]">
            <Image
              src="/assets/beranda/tentang/paper.png"
              alt="Paper"
              fill
              sizes="100%"
              style={{ objectFit: 'contain' }}
              quality={100}
            />
          </div>
        </div>
        <div className="absolute inset-0 z-40 flex items-center justify-center md:hidden">
          <div className="relative mx-auto h-[95%] w-[95%]">
            <Image
              src="/assets/beranda/tentang/paper-mobile.png"
              alt="Paper Mobile"
              fill
              style={{ objectFit: 'contain' }}
              quality={100}
            />
          </div>
        </div>
        <div className="relative z-50 xs:w-[90%] sm:w-[80%] md:absolute md:left-[50%] md:top-[43%] md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
          <div className="mx-auto w-[75%] text-center">
            <p className="text-md xxxs:text-md font-mulish font-bold xxs:text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl 2xl:text-3xl">
              Gelanggang Expo (Gelex) adalah sebuah acara untuk memperkenalkan Unit Kegiatan
              Mahasiswa (UKM) dan komunitas di Universitas Gadjah Mada (UGM) dalam bentuk pameran
              dan pertunjukan yang selalu dinanti tiap tahunnya oleh seluruh warga UGM.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[22%] left-1/2 z-[80] -translate-x-1/2 transform font-bold xxs:bottom-[17%] xs:bottom-[18%] md:bottom-[35vh] lg:bottom-[28vh] xl:bottom-[20vh] 2xl:bottom-[10vh]">
        <Link href="/tentang" passHref>
          <Button
            text="Selengkapnya"
            bgClass="2xl:px-12 2xl:py-4"
            textClass="md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl"
          />
        </Link>
      </div>
    </div>
  )
}
