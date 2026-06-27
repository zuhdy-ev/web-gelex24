import React from 'react'
import Nav from '@/components/layout/Nav'
import { HeroUKM, VideoUKM, ListUKM } from '@/components/module/ukm/page'

export default function UKM() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Nav />
      <HeroUKM />
      <VideoUKM />
      <ListUKM />
    </div>
  )
}
