'use client'
import React from 'react'
import { useState } from 'react'
import LatarBelakang from './LatarBelakang'
import Konten from './Konten'

export default function DetailTimeline() {
  const [status, setStatus] = useState('rundown')

  return (
    <main className="relative flex h-screen w-full items-center justify-center border border-red-500">
      <div className="absolute">
        <LatarBelakang />
      </div>
      <div className="absolute">
        <Konten />
      </div>
    </main>
  )
}
