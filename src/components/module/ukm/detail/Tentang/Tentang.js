import React from 'react'
import LatarBelakang from './LatarBelakang'
import Konten from './Konten'

export default function Tentang({ logo, nama, description, history, unggulan, achievements }) {
  return (
    <section className="relative h-[130vh] w-full overflow-hidden">
      <div className="absolute z-0">
        <LatarBelakang />
      </div>
      <div className="absolute z-10">
        <Konten
          logo={logo}
          nama={nama}
          description={description}
          history={history}
          unggulan={unggulan}
          achievements={achievements}
        />
      </div>
    </section>
  )
}
