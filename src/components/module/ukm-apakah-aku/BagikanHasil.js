import Image from 'next/image'
import UKMCardBagikan from '@/components/element/ukm-apakah-aku/UKMCardBagikan'
import UKMDeskripsiBagikan from '@/components/element/ukm-apakah-aku/UKMDeskripsiBagikan'
import RekomendasiBagikan from './RekomendasiBagikan'

export default function BagikanHasil({ nama, logo, deskripsi, dataRekomendasi, isRohani }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH

  return (
    <div style={{backgroundImage: `url('${basePath}/assets/ukm-apakah-aku/background-hasil.png')`}} className="before:bg-gradient-kuning-coklat-ijo relative h-[640px] w-[360px] before:absolute before:inset-0 before:z-[-5] before:block before:h-[640px] before:w-[360px] before:content-[''] center">
      <div style={{backgroundImage: `url('${basePath}/assets/segera-hadir/tekstur-mobile.png')`}} className="bg-blend-multiplay absolute z-10 h-[640px] w-[360px] bg-cover bg-repeat mix-blend-multiply"></div>
      <img
        src={basePath+'/assets/ukm-apakah-aku/footer-bagikan-baru.png'}
        className="absolute bottom-0 w-full"
        alt="footer bagikan"
      />
      <div className="container z-50 flex flex-col items-center justify-center px-6">
        <div className="relative mb-4 mt-6 flex items-center justify-center">
          <p className="relative z-[2] inline-block bg-gradient-ungu-merah-ungu bg-clip-text text-center font-magicretro text-xl text-transparent">
            UKM yang cocok denganku...
          </p>
          <p className="absolute z-[1] inline-block text-center font-magicretro text-xl text-transparent [text-shadow:-1px_-1px_0_#FFE5AF,1px_-1px_0_#FFE5AF,-1px_1px_0_#FFE5AF,_1px_1px_0_#FFE5AF,0px_4px_10px_#FFE5AF,0px_4px_16px_#813322,0px_4px_4px_rgba(0,0,0,0.25)]">
            UKM yang cocok denganku...
          </p>
        </div>
        <div
          className="relative z-30 mb-16 flex w-full max-w-[1100px] flex-col items-center bg-center bg-no-repeat pb-[34px] mx-auto"
          style={{ backgroundImage: `url('${basePath}/assets/ukm-apakah-aku/vintage_paper.png')`, backgroundSize: '100% 100%' }}
        >
          <UKMCardBagikan isRohani={isRohani} nama={nama} logo={logo.slice(0,6) == "/2024" ? logo : basePath+logo} />
          <UKMDeskripsiBagikan className={'z-10 mt-[-15px]'} hasil={deskripsi} />
          <div className="my-4 font-magicretro text-xs text-[#FFD59B] [text-shadow:0px_8px_4px_rgba(0,0,0,0.25)]">
            {isRohani ? "" : "Rekomendasi Lainnya"}
          </div>
          { isRohani ? <RekomendasiBagikan data={dataRekomendasi} /> : <RekomendasiBagikan data={dataRekomendasi.slice(0,3)} />}
          <div className="relative mt-6 flex w-[80%] items-center justify-center">
            <img
              src={basePath+'/assets/ukm-apakah-aku/bg-invitation.svg'}
              width={0}
              height={0}
              className="h-full w-full"
              alt="invitation outline"
            />
            <div className="absolute flex h-[80%] w-[88%] flex-col items-center justify-center bg-[linear-gradient(to_bottom,#FFE5AF_-6.4%,#E6A263_99.85%)] shadow-[inset_0px_4px_10px_rgba(0,0,0,0.25)]">
              <img
                src={basePath+'/assets/ukm-apakah-aku/tekstur-invitation.png'}
                className="bg-blend-multiplay absolute h-full w-full mix-blend-multiply"
                alt="invitation tekstur"
              />
              <img
                src={basePath+'/assets/ukm-apakah-aku/gemmy-invitation.png'}
                className="absolute bottom-0 right-0 z-20 w-[22%] translate-x-[20%]"
                alt="invitation gemmy"
              />
              <img
                src={basePath+'/assets/ukm-apakah-aku/gilgantari-invitation.png'}
                className="absolute bottom-0 left-0 z-20 w-[22%] translate-x-[-20%]"
                alt="invitation gilgantari"
              />
              <div className="z-30 font-magicretro text-[7px] text-[#7F152E] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]">
              Yuk, kenalan dengan UKM-UKM kamu ini di GELEX 2024!
              </div>
              <div className="z-30 mt-1">
                <div className="flex items-center text-[6px] font-bold">
                  <img
                    src={basePath+'/assets/ukm-apakah-aku/icon-location.svg'}
                    className="mr-1 w-[5px]"
                    alt="icon location"
                  />
                  Lapangan Pancasila, Universitas Gadjah Mada
                </div>
                <div className="flex items-center text-[6px] font-bold">
                  <img
                    src={basePath+'/assets/ukm-apakah-aku/icon-calendar.svg'}
                    className="mr-1 w-[5px]"
                    alt="icon calendar"
                  />
                  21-23 Agustus 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
