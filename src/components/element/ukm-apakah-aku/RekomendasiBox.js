import Image from 'next/image'

export default function RekomendasiBox({ item }) {
  return (
    <div className="relative flex w-[24%] flex-col items-center justify-center gap-1 md:w-[23%] lg:w-[20%]">
      <div className="relative flex w-full cursor-pointer items-center justify-center transition-all hover:scale-[1.05]">
        <Image
          src={'/assets/ukm-apakah-aku/rekomendasi-outline.svg'}
          width={0}
          height={0}
          className="w-full"
          alt="rekomendasi box outline"
        />
        <div className="absolute flex h-[70%] w-[75%] translate-y-[-2px] items-center justify-center overflow-hidden bg-[linear-gradient(89.76deg,#E6A263_1.51%,#FFE5AF_99.79%)] shadow-[inset_0px_1.8px_4.5px_#E8A667]">
          <Image
            src={
              item.logo === '/'
                ? '/assets/ukm-apakah-aku/logo-ukm-catur.png'
                : item.logo.charAt(0) == '/'
                  ? item.logo
                  : item.logo
            }
            width={1000}
            height={1000}
            className="w-[65%] rounded-2xl max-h-[50px] md:max-h-[110px] object-contain"
            alt="logo rekomendasi box"
          />
        </div>
      </div>
      <div
        className="flex w-[92%] cursor-pointer items-center justify-center rounded-md bg-[#F7CB7D] px-[2px] py-1 text-center text-[8px] font-bold transition-all hover:translate-y-1 hover:bg-[#f1b855] sm:rounded-lg sm:text-[10px] md:rounded-xl md:px-3 md:py-[6px] md:text-xs lg:px-4 lg:py-2 lg:text-sm"
        onClick={() => {}}
      >
        {item.nama}
      </div>
    </div>
  )
}
