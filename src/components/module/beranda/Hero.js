'use client'
import Image from 'next/image'
import Anthem from './component/anthem'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/assets/beranda/hero/bg-hero.png"
        alt="Hero Background"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover' }}
        className="absolute inset-0 z-0"
        priority={true}
      />
      <Image
        src="/assets/beranda/hero/bg-texture.png"
        alt="Background Texture"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover' }}
        className="absolute inset-0 z-20 bg-blend-multiply mix-blend-multiply"
        priority
      />
      <div className="animate-clouds absolute inset-0 z-[30]" style={{ objectFit: 'cover' }}>
        <Image
          src="/assets/beranda/hero/clouds.png"
          alt="Cloud Texture"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 bg-blend-multiply mix-blend-multiply"
          priority={true}
        />
      </div>
      <div className="absolute top-[10vh] z-50 flex justify-center sm:top-[3vh] md:top-[20vh] lg:top-[20vh] xl:top-[15vh] 2xl:left-[8vw]">
        <div className="hidden md:block">
          <Image
            src="/assets/beranda/hero/gelex-main.png"
            alt="GELEX Main"
            width={0}
            height={0}
            className="h-[350px] w-[1600px] object-contain"
            priority={true}
          />
        </div>
        <div className="block md:hidden md:h-auto md:w-[50vw]">
          <Image
            src="/assets/beranda/hero/gelex-main-mobile.png"
            alt="GELEX Main Mobile"
            width={0}
            height={0}
            className="h-[175px] w-[900px] object-contain"
            priority={true}
          />
        </div>
      </div>
      <div className="absolute top-[65vh] z-[199] hidden h-auto w-full justify-center sm:hidden md:top-[66vh] md:flex lg:top-[58vh] xl:top-[60vh] 2xl:top-[55vh]">
        <Image
          src="/assets/beranda/hero/tongkat-sign.png"
          alt="Tongkat Sign"
          width={0}
          height={0}
          className="w-[700px] object-contain"
          priority={true}
        />
      </div>
      <div className="animate-rotate-sign absolute top-[65vh] z-[199] hidden w-full justify-center sm:hidden md:top-[68vh] md:flex lg:top-[60vh] xl:top-[63vh] 2xl:top-[57vh]">
        <Link href="/ukm-apakah-aku">
          <Image
            src="/assets/beranda/hero/sign-ukmapakahaku.png"
            alt="Sign UKM Apakah Aku"
            width={0}
            height={0}
            className="w-[500px] object-contain"
            priority={true}
          />
        </Link>
      </div>
      <div className="absolute bottom-[-3vh] z-40 hidden justify-center md:flex">
        <Image
          src="/assets/beranda/hero/ground.png"
          alt="Ground"
          width={2621}
          height={1200}
          className="h-auto w-full object-contain opacity-[96%]"
          priority={true}
        />
      </div>
      <div className="absolute bottom-0 z-40 flex w-full justify-center opacity-95 xxs:bottom-[-5vh] xs:bottom-[-6vh] sm:bottom-[-25vh] md:hidden">
        <Image
          src="/assets/beranda/hero/ground-mobile.png"
          alt="Ground Mobile"
          width={900}
          height={450}
          className="h-auto w-full object-contain"
          priority={true}
        />
      </div>
      <div className="absolute bottom-[5vh] left-0 z-[50] xxxs:hidden sm:bottom-[4vh] sm:block md:bottom-[1.5vh] md:-translate-x-10 lg:bottom-[5vh] xl:bottom-[6vh]">
        <Image
          src="/assets/beranda/hero/rocks-left.png"
          alt="Rocks Left"
          width={0}
          height={0}
          className="h-[25vh] w-auto object-contain"
          priority={true}
        />
      </div>
      <div className="absolute inset-0 top-[-20vh] z-30 flex h-auto items-center justify-center xxs:top-[-18vh] xxs:h-auto xs:top-[-15vh] xs:h-auto sm:top-[-15vh] sm:h-auto md:top-[-15vh] md:h-auto lg:top-[-15vh] lg:h-auto xl:top-[-15vh] xl:h-auto xl:w-auto">
        <div className="relative h-full w-full">
          <Image
            src="/assets/beranda/hero/tree-shadow.png"
            alt="Tree Shadow"
            fill
            sizes="100vw"
            className="object-center"
            priority={true}
          />
        </div>
      </div>
      <div className="z-25 absolute bottom-[5vh] flex w-full justify-center xxs:top-[-43vh] xxs:hidden xs:bottom-[45vh] md:bottom-[24vh] lg:bottom-[5vh] xl:bottom-[6vh]">
        <Image
          src="/assets/beranda/hero/highlights.png"
          alt="Highlights"
          width={1000}
          height={800}
          className="object-contain"
          priority={true}
        />
      </div>
      <div className="z-25 absolute bottom-0 flex h-full w-full justify-center xxs:top-0 xs:bottom-[45vh] xs:block">
        <Image
          src="/assets/beranda/hero/lights-mobile.png"
          alt="lights mobile"
          fill
          sizes="100vw"
          className="object-center"
          priority={true}
        />
      </div>
      <div>
        <div className="left-[-26vw] top-[2vh] z-[30] hidden h-[100vh] w-[100vh] md:absolute md:left-[-55vw] md:top-[10vh] md:block lg:left-[-26vw] lg:top-[2vh] xl:left-[-26vw] 2xl:left-[-16vw] 2xl:top-[2vh]">
          <Image
            src="/assets/beranda/hero/tree-left.png"
            alt="Tree Left"
            width={1000}
            height={1000}
            className="object-contain"
            priority={true}
          />
        </div>
        <div className="absolute z-[40] sm:block md:hidden left-[-35vw] top-[40vh] w-[100vw] h-[120vh] xxs:left-[-30vw] xxs:top-[34vh] xs:left-[-35vw] xs:top-[30vh] sm:left-[-35vw] sm:top-[5vh] md:left-[-35vw] md:top-[3vh] md:w-[100vh] md:h-[100vh]">
          <Image
            src="/assets/beranda/hero/rocks-bush-tree.png"
            alt="Rocks Bush Tree"
            width={800}
            height={800}
            className="object-contain"
            priority={true}
          />
        </div>
      </div>

      <div className="absolute bottom-[7vh] left-0 z-[35] xxxs:hidden xs:hidden md:bottom-[1.5vh] md:block md:-translate-x-10 lg:bottom-[4vh] xl:bottom-[8vh]">
        <Image
          src="/assets/beranda/hero/bush-left.png"
          alt="Bush Left"
          width={0}
          height={0}
          className="h-[45vh] w-auto object-contain"
          priority={true}
        />
      </div>
      <div className="absolute bottom-[-3vh] right-[-8vw] z-50 hidden items-end md:flex">
        <Image
          src="/assets/beranda/hero/gemmy.png"
          alt="Gemmy"
          width={400}
          height={400}
          className="h-[80vh] w-auto object-contain"
          priority={true}
        />
      </div>
      <div className="absolute bottom-[-2vh] right-0 translate-x-40 z-50 flex items-end md:hidden">
        <Image
          src="/assets/beranda/hero/gemmy-mobile.png"
          alt="Gemmy Mobile"
          width={400}
          height={400}
          className="h-[60vh] object-contain"
          priority={true}
        />
      </div>
      <div className="absolute bottom-[9vh] right-[15vh] z-30 xxxs:hidden xs:hidden sm:right-[10vh] sm:hidden md:bottom-[1vh] md:right-[1vh] md:block lg:bottom-[5vh] lg:right-[1vh] xl:bottom-[10vh] xl:right-[1.5vh]">
        <Image
          src="/assets/beranda/hero/bush-right.png"
          width={500}
          height={400}
          className="h-[400px] w-[500px] object-contain"
          priority={true}
        />
      </div>
      <div className="absolute bottom-[17vh] left-[22vh] z-[37] xxxs:hidden xs:hidden sm:bottom-[15vh] sm:left-[18vh] sm:hidden md:bottom-[16vh] md:left-[20vh] md:block lg:bottom-[8.5vh] lg:left-[17vh] xl:bottom-[12vh] xl:left-[22vh] 2xl:bottom-[17vh]">
        <Image
          src="/assets/beranda/hero/sign-right.png"
          width={0}
          height={0}
          className="h-[200px] w-[200px] object-contain md:hidden lg:block"
          priority={true}
        />
      </div>
      <div className="absolute bottom-4 left-0 z-[99] xxxs:bottom-[-20vh] xxxs:h-[70%] xxxs:w-[70%] xxs:bottom-[-12vh] xs:bottom-16 xs:h-[40vh] xs:w-[35vh] md:hidden">
        <Image
          src="/assets/beranda/hero/sign-mobile.png"
          width={0}
          height={0}
          className="h-[450px] w-[450px] object-contain"
          priority={true}
        />
      </div>
      <div className="animate-rotate-sign2 absolute bottom-4 left-0 z-[99] xxxs:bottom-[-30vh] xxxs:h-[70%] xxxs:w-[70%] xxs:bottom-[-22vh] xs:bottom-[2vh] xs:h-[40vh] xs:w-[35vh] sm:bottom-0 md:hidden">
        <div className="relative h-full w-full">
          <Link href="/ukm-apakah-aku" className="absolute inset-0">
            <Image
              src="/assets/beranda/hero/papan-sign.png"
              width={450}
              height={450}
              className="object-contain"
              priority={true}
            />
          </Link>
        </div>
      </div>
      <Anthem />
    </div>
  )
}
