import React from 'react'
import Image from 'next/image'

const detailPopup = [
  {
    status: 'rundown',
    day: 'Hari Pertama',
  },
]

export default function DetailTimeline() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <div className="h-[370px] w-[190px] border">
        <div>button choice</div>
        {/* --- Rundown --- */}
        <div>
          {/* The Stage */}
          <div>
            <div>the stage</div>
            <div>
              <div>waktu</div>
              <div>
                <div>kegiatan 1</div>
                <div>kegiatan 2</div>
                <div>kegiatan 3</div>
              </div>
            </div>
          </div>
        </div>
        {/* --- Penampil --- */}
        <div>
          {/* Dropdown */}
          <div>
            {/* Judul */}
            <div>
              <p>nama penampil</p>
              <span>{`>`}</span>
            </div>
            {/* Detail */}
            <div>lorem ipsum dolor sit amet</div>
          </div>
        </div>
      </div>
    </main>
  )
}
