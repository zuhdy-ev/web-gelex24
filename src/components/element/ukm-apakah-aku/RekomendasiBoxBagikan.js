import Image from 'next/image'

export default function RekomendasiBoxBagikan({ item }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH

  return (
    <div className="relative flex w-[24%] flex-col items-center justify-center gap-1">
      <div className="relative flex w-full cursor-pointer items-center justify-center transition-all hover:scale-[1.05]">
        <Image
          src={'/assets/ukm-apakah-aku/rekomendasi-outline.svg'}
          width={0}
          height={0}
          className="w-full"
          alt="rekomendasi box outline"
        />
        <div className="absolute flex h-[70%] w-[75%] translate-y-[-2px] items-center justify-center overflow-hidden bg-[linear-gradient(89.76deg,#E6A263_1.51%,#FFE5AF_99.79%)] shadow-[inset_0px_1.8px_4.5px_#E8A667]">
          <img
            src={
              item.logo === '/'
                ? basePath+'/assets/ukm-apakah-aku/logo-ukm-catur.png'
                : item.logo.charAt(0) == '/'
                  ? basePath + item.logo
                  : basePath + item.logo
            }
            className="w-[65%] rounded-lg max-h-[40px] object-contain"
            alt="logo rekomendasi box"
          />
        </div>
      </div>
      <div
        className="relative flex w-[93%] cursor-pointer items-center justify-center rounded-[3px] bg-[#F7CB7D] px-[1px] py-[3px] text-center text-[6px] font-bold transition-all hover:translate-y-1 hover:bg-[#f1b855]"
        onClick={() => {}}
      >
        {item.nama}
      </div>
    </div>
  )
}
