import React from 'react'
import LatarBelakang from './LatarBelakang'
import Footer from '@/components/layout/Footer'
import Konten from './Konten'

export default function Anthem() {
  return (
    <section
      className="relative h-[200vh] lg:h-[230vh] w-full overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #224F4D 0%, #39793F 41%, #DDC5A5 70%)',
      }}
    >
      <div>
        <LatarBelakang />
        <Konten />
      </div>
      <div className="absolute bottom-0 h-fit w-full">
        <Footer />
      </div>
    </section>
  )
}
