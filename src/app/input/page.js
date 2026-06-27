'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function Input() {
  const [formData, setFormData] = useState({
    niu: '',
  })

  const [message, setMessage] = useState()
  const [status, setStatus] = useState()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:3000/api/niu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }), // Kirim data formData langsung
      })

      if (response.ok) {
        alert('NIU Berhasil ditambahkan!')
      } else {
        const result = await response.json()
        console.log(result) // Debug result
        alert(result.message)
      }
    } catch (error) {
      alert(error.message) // Ganti result.message dengan error.message
    }
  }

  return (
    <>
      <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#3E3871] to-[#D77DA8]">
        {/* Background */}
        <div className="absolute z-0 h-full w-full">
          <Image
            src="/assets/input/bg-input-mobile.png"
            width={0}
            height={0}
            alt="latar belakang"
            className="h-full w-full object-cover md:hidden"
          />
          <Image
            src="/assets/input/bg-input-desktop.png"
            width={0}
            height={0}
            alt="latar belakang"
            className="hidden h-full w-full object-cover md:flex"
          />
        </div>
        <div className="absolute bottom-0 z-10 h-fit w-fit">
          <Image
            src="/assets/input/bg-input-3G-mobile.png"
            width={0}
            height={0}
            alt="latar belakang"
            className="h-full w-fit object-cover"
          />
        </div>

        {/* Input */}
        <div className="absolute z-10 flex h-[50%] w-[90%] -translate-y-[10vw] flex-col items-center justify-center gap-5 rounded-3xl border-[5px] border-[#6E3C6A] bg-gradient-to-br from-[#FFE5AF] via-[#FFFFFF] to-[#FFE5AF] md:h-[40%] md:w-[50%] md:-translate-y-[13vw] lg:-translate-y-32">
          <div className="w-full text-center font-magicretro text-[6.5vw] text-[#6E3C6A] md:text-[4vw] laptopL:text-[40px]">
            Selamat Datang di <br />
            Gelanggang Expo 2024
          </div>
          <div className="w-full text-center font-mulish text-[3.5vw] font-bold text-[#6E3C6A] md:text-[2.3vw] lg:text-[25px]">
            Masukkan NIU Anda
          </div>
          <form className="flex w-full flex-col items-center justify-center gap-5 lg:flex-row">
            <input
              className="flex h-10 w-[90%] items-center justify-center rounded-md border-2 border-[#6E3C6A] p-2 text-center font-bold text-[#6E3C6A] lg:w-[40%]"
              value={formData.niu}
              onChange={handleChange}
              type="text"
              name="niu"
              placeholder="NIU Anda"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex h-10 w-[90%] items-center justify-center rounded-md bg-[#6E3C6A] font-bold text-[#FAE9D0] hover:scale-110 lg:w-[20%]"
            >
              Konfirmasi
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
