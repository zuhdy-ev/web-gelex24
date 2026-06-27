import React from 'react'
import LatarBelakang from './LatarBelakang'
import Maps from './Maps'
import ListMedsos from './ListMedsos'

export default function ({ location, media }) {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center">
      <div className="absolute z-50 flex h-[45%] w-[80%] -translate-y-36 flex-col items-center justify-start gap-5 tanggung:h-[60%] tanggung:gap-10 mepet:h-[30%] mepet:gap-0 s:-translate-y-52 md:h-[50%] md:-translate-y-5 md:gap-10 lg:h-[40%] lg:translate-y-5 laptopL:h-[45%] maxWidth:h-[1200px]">
        <div>
          <Maps location={location} />
        </div>
        <div className="flex w-full items-center justify-center lg:px-10">
          <ListMedsos media={media} />
        </div>
      </div>
      <div className="w-full">
        <LatarBelakang />
      </div>
    </section>
  )
}
