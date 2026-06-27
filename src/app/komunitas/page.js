'use client'
import React from 'react'
import Nav from '@/components/layout/Nav'
import { HeroKomunitas, ListKomunitas } from '@/components/module/komunitas/page'
import { VideoUKM } from '@/components/module/ukm/VideoUKM'

export default function Komunitas() {
  return (
    <div className="flex w-screen flex-col items-center justify-center overflow-x-hidden">
      <Nav />
      <HeroKomunitas />
      {/* <VideoUKM /> */}
      <ListKomunitas />
    </div>
  )
}
