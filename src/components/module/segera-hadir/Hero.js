'use client'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  const handleBack = () => {
    window.history.back()
  }

  return (
    <div className="relative mx-auto flex h-screen w-screen max-w-[1920px] flex-col items-center justify-center">
      <Image
        src="/assets/segera-hadir/bg-segera-hadir.png"
        width={1000}
        height={1000}
        style={{
          'object-fit': 'cover',
        }}
        className="absolute z-10 h-screen w-full"
        alt="langit"
        priority={true}
      />
      <Image
        src="/assets/segera-hadir/bumi-mobile.png"
        width={1000}
        height={1000}
        style={{
          'object-fit': 'cover',
        }}
        className="absolute bottom-0 z-20 w-full md:hidden"
        alt="bumi mobile"
      />
      <Image
        src="/assets/segera-hadir/bumi-desktop.png"
        width={1000}
        height={1000}
        style={{
          'object-fit': 'cover',
        }}
        className="absolute bottom-0 z-10 hidden w-full md:block"
        alt="bumi desktop"
      />
      <Image
        src="/assets/segera-hadir/tekstur-mobile.png"
        width={1000}
        height={1000}
        style={{
          'object-fit': 'cover',
        }}
        className="bg-blend-multiplay absolute z-30 h-full w-full mix-blend-multiply md:hidden"
        alt="tekstur mobile"
        priority
      />
      <Image
        src="/assets/segera-hadir/tekstur-desktop.png"
        width={1000}
        height={1000}
        style={{
          'object-fit': 'cover',
        }}
        className="bg-blend-multiplay absolute z-30 hidden h-full w-full mix-blend-multiply md:block"
        alt="tekstur desktop"
        priority
      />
      <Image
        src="/assets/segera-hadir/logo-ugm-forkom-gelex.png"
        width={1000}
        height={1000}
        style={{
          'object-fit': 'cover',
        }}
        className="absolute top-10 z-40 h-fit w-32 md:w-44"
        alt="logo ugm forkom gelex"
      />
      <div className="relative z-50 flex w-full flex-col items-center justify-center">
        <Image
          src="/assets/segera-hadir/teks.png"
          width={1000}
          height={1000}
          style={{
            'object-fit': 'cover',
          }}
          className="w-[80vw] md:w-[40rem] lg:w-[50vw]"
          alt="teks segera hadir"
        />
        <div className="mt-3 flex gap-4">
          <Link
            href="/"
            onClick={handleBack}
            className="rounded-full border-[5px] border-[#E6A263] bg-[#7F152E] px-5 py-1 text-[10px] text-white md:px-10 md:py-2 md:text-[15px] lg:text-[1vw]"
          >
            Kembali
          </Link>
          <Link
            href="/"
            className="rounded-full border-[5px] border-[#E6A263] bg-[#7F152E] px-5 py-1 text-[10px] text-white md:px-10 md:py-2 md:text-[15px] lg:text-[1vw]"
          >
            Beranda
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
