import React from 'react'
import Konten from './Konten'
import LatarBelakang from './LatarBelakang'

export default function Proker( { programs } ) {
  return (
    <div className="relative h-[90vh] lg:h-screen w-full overflow-hidden">
      <div className="absolute z-0">
        <LatarBelakang />
      </div>
      <div className="absolute z-10">
        <Konten 
          programs={programs}
        />
      </div>
    </div>
  )
}