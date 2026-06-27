import React from 'react'
import Nav from '@/components/layout/Nav'
import {
  Hero,
  SejarahGelanggang,
  Kenangan,
  Maskot,
  Anthem,
  MaskotGemmy,
} from '@/components/module/tentang/page'

export default function Tentang() {
  return (
    <main className="relative flex flex-col items-center justify-center">
      <Nav />
      <Hero />
      <SejarahGelanggang />
      <Kenangan />
      <Maskot />
      <MaskotGemmy />
      <Anthem />
    </main>
  )
}
