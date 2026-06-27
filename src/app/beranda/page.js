'use client'

import { useContext } from 'react'
import Nav from '@/components/layout/Nav'
import Hero from '@/components/module/beranda/Hero'
import Tentang from '@/components/module/beranda/Tentang'
import Caraousel from '@/components/module/beranda/Caraousel'
import Timeline from '@/components/module/beranda/Timeline'
import Sponsor from '@/components/module/beranda/Sponsor'
import Medpart from '@/components/module/beranda/Medpart'
import End from '@/components/module/beranda/End'
import { Splash } from '@/components/module/beranda/Splash'
import { AppContext } from '@/context/AppContext'

export default function HomePage() {
  const { showSplash } = useContext(AppContext)

  return (
    <div className={`overflow-hidden ${showSplash ? 'h-screen w-screen' : ''}`}>
      {showSplash && <Splash />}
      <>
        <Nav />
        <Hero />
      </>
      {!showSplash && (
        <>
          <Tentang />
          <Caraousel />
          <Timeline />
          <Sponsor />
          <Medpart />
          <End />
        </>
      )}
    </div>
  )
}
