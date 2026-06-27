import React from 'react'
import LatarBelakang from './LatarBelakang'
import Konten from './Konten'

export default function HeroDetailKomunitas({ nama, video, oprec, guidebook }) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute z-0">
        <LatarBelakang />
      </div>
      <div className="absolute z-10">
        <Konten nama={nama} video={video} oprec={oprec} guidebook={guidebook} />
      </div>
    </section>
  )
}
