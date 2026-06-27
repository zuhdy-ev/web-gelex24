import React from 'react'
import Image from 'next/image'

export default function MaskotGemmy() {
  return (
    <section className="relative flex h-screen laptopL:h-[110vh] w-screen items-center justify-center">
      {/* Latar Belakang */}
      <div className="absolute z-0 h-full w-full bg-gradient-to-b from-[#333279] to-[#C36DA1]">
        <Image
          src="/assets/tentang/gemmy-bg-mobile.png"
          width={1000}
          height={1000}
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          alt="maskot gemmy"
          className="s:hidden"
        />
        <Image
          src="/assets/tentang/gemmy-bg-desktop.png"
          width={1000}
          height={1000}
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          alt="maskot gemmy"
          className="hidden s:block"
        />
      </div>
      {/* Konten */}
      <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center p-5">
        <div className="w-72 md:w-96 laptopL:w-[500px]">
          <Image
            src="/assets/tentang/gemmy-himself-mobile.png"
            width={1000}
            height={1000}
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            alt="maskot gemmy"
            className=""
          />
        </div>
        <p className="flex h-fit w-full flex-col items-center justify-start rounded-3xl border-[10px] border-[#E6A263] bg-gradient-to-br from-[#FFE5AF] via-[#FFFFFF] to-[#FFE5AF] p-3 text-justify md:text-center text-[10px] text-black s:text-[12px] md:w-96 lg:text-[17px] laptopL:text-[20px] lg:w-[700px] laptopL:w-[900px] lg:p-5">
          Gemmy merupakan kependekan dari “Gemilang”, seperti sifat Gemmy yang selalu bersinar dan
          membawa kebahagiaan. Kebahagiaan dapat kita rasakan saat memeluk Gemmy dengan badannya
          yang sangat fluffy. Gemmy adalah perpaduan dari beberapa hewan, yakni rubah arktik, rusa,
          tupai, dan burung kolibri. Benda yang dipegang Gemmy adalah kincir angin dengan 4 mata
          kincir yang melambangkan 4 sekber UKM progresivitas.
        </p>
      </div>
    </section>
  )
}
