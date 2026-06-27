import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-screen h-screen bg-black bg-cover bg-center bg-no-repeat flex justify-center items-center absolute overflow-hidden z-[99999] max-w-[1920px]">
      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.6)] z-20"></div>
      <Image
          src={'/assets/ukm-apakah-aku/loading-background-desktop.png'}
          width={1000}
          height={1000}
          className="absolute w-full h-full object-cover hidden md:block"
          alt="loading background desktop"
      />
      <Image
          src={'/assets/ukm-apakah-aku/loading-background-mobile.png'}
          width={1000}
          height={1000}
          className="absolute w-full h-full object-cover block md:hidden"
          alt="loading background mobile"
      />
      <div
        className="w-14 h-14 border-4 border-t-4 border-t-transparent border-white rounded-full animate-spin z-50"></div>
    </div>
  );
}
