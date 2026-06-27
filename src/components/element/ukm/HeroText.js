'use client'

export default function HeroText({ children, description }) {
  return (
    <div className="flex h-screen flex-col items-center gap-4 overflow-hidden pt-52 text-white sm:pt-40 sm:text-xl lg:gap-10 lg:pt-20">
      {children}
      <p className="z-20 w-5/6 font-bold md:w-[400px] lg:w-[450px] laptopL:w-[700px]">
        {description}
      </p>
    </div>
  )
}
