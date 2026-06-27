'use client'
import Image from 'next/image'
import HeroText from '@/components/element/ukm/HeroText'

export function HeroKomunitas() {
  const description =
    'Komunitas adalah perkumpulan mahasiswa yang memiliki kesamaan dalam minat atau bakat tertentu. Komunitas di UGM terdiri dari dua macam, yakni komunitas resmi yang dapat dimaknai bahwa komunitas tersebut diakui oleh Universitas/Fakultas/Sekolah dan berada di bawah naungan Ditmawa. Selain itu, ada pula komunitas yang tidak berada di bawah naungan Ditmawa dan dijalankan langsung oleh mahasiswa.'

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
        src="/assets/komunitas/bg-gradient-ijo-tua-kuning.png"
        alt="background"
        fill
        style={{ objectFit: 'cover' }}
        priority
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
        src="/assets/komunitas/semak-semak.png"
        alt="hutan"
        width={1000}
        height={1000}
        className="absolute bottom-0 z-20 hidden w-full sm:block"
      />
      <Image
        src="/assets/komunitas/semak-semak-mobile.png"
        alt="hutan"
        width={1000}
        height={1000}
        className="absolute bottom-0 z-20 w-full sm:hidden"
      />
      <Image
        src="/assets/komunitas/gemmy-mobile.png"
        alt="hutan"
        width={1000}
        height={1000}
        className="absolute bottom-0 z-20 w-full sm:hidden"
      />
      <Image
        src="/assets/komunitas/harta-karun.png"
        alt="gemmy"
        width={1000}
        height={1000}
        priority
        className="absolute bottom-0 z-20 hidden w-full sm:block"
      />
      <Image
        src="/assets/komunitas/harta-karun-mobile.png"
        alt="gemmy"
        width={1000}
        height={1000}
        className="absolute bottom-0 z-20 w-full sm:hidden"
      />
      <HeroText description={description}>
        <div className="z-10 font-magicretro leading-[3.2rem] drop-shadow-lg lg:mt-24">
          <p className="bg-linear-kuning-coklat bg-clip-text text-6xl text-transparent lg:text-7xl">
            Komunitas
          </p>
        </div>
      </HeroText>
    </div>
  )
}
