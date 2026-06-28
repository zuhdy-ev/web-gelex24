'use client'
import Image from 'next/image'
import HeroText from '@/components/element/ukm/HeroText'

export function HeroUKM() {
  const description =
    'UKM adalah organisasi kemahasiswaan di UGM yang berperan sebagai wadah berdinamika bagi mahasiswa dalam pendidikan softskills melalui kegiatan-kegiatan minat dan bakat yang terbagi menjadi kerohanian, olahraga, seni, dan khusus.'

  return (
    <div className="relative h-screen w-screen overflow-hidden text-center">
      <Image
        src="/assets/ukm/white-paper-texture2.png"
        alt="tekstur"
        fill
        style={{ objectFit: 'cover' }}
        className="absolute z-10 h-full w-full mix-blend-multiply"
      />
      <Image
        src="/assets/ukm/bg-gradient-biru.png"
        alt="background"
        fill
        style={{ objectFit: 'cover' }}
        className="absolute z-20 h-full w-full mix-blend-overlay"
      />
      <Image
        src="/assets/ukm/siluet-pohon-desktop.png"
        alt="siluet pohon"
        fill
        style={{ objectFit: 'cover' }}
        className="absolute z-10 h-full w-full mix-blend-overlay"
      />
      <Image
        src="/assets/ukm/hutan-desktop.png"
        alt="hutan"
        width={1440}
        height={861}
        className="absolute bottom-0 z-20 hidden w-full sm:block"
      />
      <Image
        src="/assets/ukm/hutan-mobile.png"
        alt="hutan"
        width={360}
        height={447}
        className="absolute bottom-0 z-20 w-[1000px] sm:hidden"
      />
      <Image
        src="/assets/ukm/gemmy-desktop.png"
        alt="gemmy"
        width={1000}
        height={1000}
        className="absolute bottom-0 z-20 hidden w-full sm:block lg:-bottom-14 laptopL:-bottom-40"
      />
      <Image
        src="/assets/ukm/gemmy-mobile.png"
        alt="gemmy"
        width={360}
        height={436}
        className="absolute bottom-0 z-20 w-full sm:hidden"
      />
      <HeroText description={description}>
        <div className="z-10 -rotate-12 font-magicretro leading-[3.2rem] drop-shadow-lg lg:mt-16">
          <p className="-translate-x-12 bg-linear-kuning-coklat bg-clip-text text-5xl text-transparent sm:-translate-x-14 sm:text-6xl lg:-translate-x-20 lg:text-7xl">
            Unit
          </p>
          <p className="translate-x-8 bg-linear-kuning-coklat bg-clip-text text-5xl text-transparent sm:text-6xl lg:text-7xl">
            Kegiatan
          </p>
          <p className="bg-linear-kuning-coklat bg-clip-text text-5xl text-transparent sm:text-6xl lg:text-7xl">
            Mahasiswa
          </p>
        </div>
      </HeroText>
    </div>
  )
}
