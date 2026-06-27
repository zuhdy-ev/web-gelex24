import React from 'react'
import Image from 'next/image'

export default function LatarBelakang() {
  return (
    <main>
      {/* Mobile */}
      <div className="md:hidden">
        <Image
          src="/assets/tentang/anthem-texture-mobile.png"
          width={1000}
          height={1000}
          className="absolute z-0 object-cover opacity-20 mix-blend-overlay"
          alt="texture anthem"
        />
        <Image
          src="/assets/tentang/anthem-langit-kanan-mobile.png"
          width={1000}
          height={1000}
          className="absolute right-0 w-fit object-cover"
          alt="langit kanan anthem"
        />
        <Image
          src="/assets/tentang/anthem-langit-kiri-mobile.png"
          width={1000}
          height={1000}
          className="absolute left-0 top-16 w-fit object-cover"
          alt="langit kiri anthem"
        />
        <Image
          src="/assets/tentang/anthem-pohon-kanan-mobile.png"
          width={1000}
          height={1000}
          className="absolute bottom-0 right-0 h-auto w-auto -translate-y-60 object-cover xxs:-translate-y-[300px] s:-translate-y-80"
          alt="pohon kanan anthem"
        />
        <Image
          src="/assets/tentang/anthem-pohon-kiri-mobile.png"
          width={1000}
          height={1000}
          className="absolute bottom-0 left-0 w-fit -translate-y-64 object-cover xxs:-translate-y-[300px] s:-translate-y-80"
          alt="pohon kiri anthem"
        />
      </div>
      {/* Desktop */}
      <div className="hidden md:block">
        <Image
          src="/assets/tentang/anthem-texture-desktop.png"
          width={1000}
          height={1000}
          // layout="fill"
          className="absolute z-0 h-full w-full object-cover opacity-20 mix-blend-overlay"
          alt="texture anthem"
        />
        <Image
          src="/assets/tentang/anthem-langit-kanan-desktop.png"
          width={1000}
          height={1000}
          className="absolute right-0 w-fit object-cover"
          alt="langit kanan anthem"
        />
        <Image
          src="/assets/tentang/anthem-langit-kiri-desktop.png"
          width={1000}
          height={1000}
          className="absolute left-0 top-5 w-fit object-cover"
          alt="langit kiri anthem"
        />
        <Image
          src="/assets/tentang/anthem-pohon-kanan-desktop.png"
          width={1000}
          height={1000}
          className="absolute bottom-0 right-0 -translate-y-[400px] object-cover lg:-translate-y-48 laptopL:-translate-y-96"
          alt="pohon kanan anthem"
        />
        <Image
          src="/assets/tentang/anthem-pohon-kiri-desktop.png"
          width={1000}
          height={1000}
          className="absolute bottom-0 left-0 -translate-y-96 object-cover lg:-translate-y-20 laptopL:-translate-y-96"
          alt="pohon kiri anthem"
        />
      </div>
    </main>
  )
}
