import Image from 'next/image'

export default function UKMCardBagikan({ logo, nama, isRohani }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH

  return (
      <div className="relative flex h-fit w-full items-center justify-center">
        <img
          src={basePath+"/assets/ukm-apakah-aku/bgCard-bagikan.png"}
          style={{width: isRohani ? '60%' : '70%'}}
          alt="background cards"
        />
        <div className="absolute flex h-[78%] w-[35%] cursor-pointer flex-col items-center justify-between rounded-[20px] border-[3px] border-[#E6A263] bg-[linear-gradient(112.87deg,#FFE5AF_6.56%,#FFFFFF_49.24%,#FFE5AF_90.78%)] p-3 font-bold shadow-answer-box transition-all hover:scale-[1.01]">
          <div className="flex w-full justify-between">
            <img
              src={basePath+"/assets/ukm-apakah-aku/card-ornament.svg"}
              className="w-[37%]"
              alt="ornament"
            />
            <img
              src={basePath+"/assets/ukm-apakah-aku/card-ornament.svg"}
              className="w-[37%] scale-x-[-1]"
              alt="ornament"
            />
          </div>
          {isRohani ? <></> : <img
            src={logo}
            className="w-[78%] max-h-[60px] object-contain"
            alt="logo ukm"
          />}

          {isRohani ? <p className="inline-block bg-gradient-merah-1 bg-clip-text text-center font-magicretro text-lg text-transparent [text-shadow:1px_3px_4px_rgba(0,0,0,0.1)]">
            Sekber Rohani 
          </p> : <p className="inline-block bg-gradient-merah-1 bg-clip-text text-center font-magicretro text-xs text-transparent [text-shadow:1px_3px_4px_rgba(0,0,0,0.1)]">
            {nama}  
          </p>}

          <div className="top-0 flex w-full justify-between">
            <img
              src={basePath+"/assets/ukm-apakah-aku/card-ornament.svg"}
              className="w-[37%]"
              alt="ornament"
            />
            <img
              src={basePath+"/assets/ukm-apakah-aku/card-ornament.svg"}
              className="w-[37%] scale-x-[-1]"
              alt="ornament"
            />
          </div>
        </div>
      </div>
  )
}
