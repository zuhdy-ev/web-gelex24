import React from 'react'
import Image from 'next/image'

export default function SejarahGelanggang() {
  return (
    <section
      className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #51252A 1%, #805A37 51%)',
      }}
    >
      {/* Latar Belakang */}
      <div className="absolute z-0 h-full w-full">
        <Image
          src="/assets/tentang/sejarah-texture-mobile.png"
          width={1000}
          height={1000}
          alt="bg sejarah"
          className="h-full w-full md:hidden"
        />
        <Image
          src="/assets/tentang/sejarah-texture-desktop.png"
          width={1000}
          height={1000}
          alt="bg sejarah"
          className="hidden h-full w-full md:block"
        />
      </div>
      {/* Main Content */}
      <div className="absolute z-10 flex w-[90%] -translate-y-[10vw] flex-col xs:-translate-y-[20vw] s:w-[80%] lg:-translate-y-10 laptopL:w-[60%] laptopL:-translate-y-32">
        <div className="flex translate-y-10 flex-col items-center laptopL:translate-y-32">
          <Image
            src="/assets/tentang/sejarah-judul-mobile.png"
            width={414}
            height={174}
            alt="judul sejarah"
            className="w-[300px] s:w-96 laptopL:w-[600px]"
          />
        </div>
        <div className="h-full w-full rounded-3xl bg-[#471E1F] bg-opacity-55 p-10 leading-relaxed laptopL:py-28">
          <p className="text-justify text-[12px] text-white xs:text-sm lg:text-center lg:text-[17px] laptopL:text-[20px]">
            Gelanggang merupakan tempat yang menyimpan berjuta kenangan dan sejarah bagi para
            mahasiswa di Universitas Gadjah Mada. Pada masanya, Gelanggang menjadi rumah pergerakan
            aktivis mahasiswa yang didirikan pada tahun 1975, kemudian bertransformasi menjadi pusat
            kegiatan mahasiswa. Walaupun eksistensinya secara fisik sudah tiada dan akan digantikan
            dengan Gelanggang Inovasi dan Kreativitas (GIK), makna sejati Gelanggang sebagai simbol
            semangat, kebersamaan, dan keberagaman tetap mengakar kuat. Hal tersebut menjadi bukti
            bahwa Gelanggang bukan hanya sekadar bangunan fisik, tetapi sebagai sarana belajar,
            berkumpul, dan pengembangan keterampilan bagi mahasiswa UGM.
          </p>
        </div>
      </div>
      {/* Assets */}
      <div className="absolute z-20 h-full w-full">
        {/* Buku */}
        <div className="absolute bottom-0 translate-y-10 flex w-full items-center justify-center">
          <Image
            src="/assets/tentang/sejarah-buku-mobile.png"
            width={300}
            height={100}
            alt="buku sejarah"
            className="h-full w-full md:hidden"
          />
          <Image
            src="/assets/tentang/sejarah-buku-desktop.png"
            width={300}
            height={100}
            alt="buku sejarah"
            className="hidden h-full w-full md:block lg:w-[45%]"
          />
        </div>
        <div>
          {/* Tanaman & Cahaya Atas - Mobile */}
          <div className="absolute left-0 top-0 lg:hidden">
            <Image
              src="/assets/tentang/sejarah-tanaman-cahaya-atas-mobile.png"
              width={300}
              height={100}
              alt="tanaman & cahaya atas sejarah"
              className="w-full"
            />
          </div>
          {/* Tanaman & Cahaya Bawah - Mobile */}
          <div className="absolute bottom-0 right-0 lg:hidden">
            <Image
              src="/assets/tentang/sejarah-tanaman-cahaya-bawah-mobile.png"
              width={300}
              height={100}
              alt="tanaman & cahaya bawah sejarah"
              className="w-full"
            />
          </div>
          {/* Tanaman & Cahaya Kanan - Desktop */}
          <div className="absolute hidden h-full w-full lg:flex lg:justify-end">
            <Image
              src="/assets/tentang/sejarah-tanaman-cahaya-kanan-desktop.png"
              width={300}
              height={100}
              alt="tanaman & cahaya bawah sejarah"
              className="h-[50vw] w-fit"
            />
          </div>
          {/* Tanaman & Cahaya Kiri - Desktop */}
          <div className="absolute bottom-0 hidden lg:flex lg:justify-start">
            <Image
              src="/assets/tentang/sejarah-tanaman-cahaya-kiri-desktop.png"
              width={300}
              height={100}
              alt="tanaman & cahaya bawah sejarah"
              className="h-[50vw] w-fit"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
