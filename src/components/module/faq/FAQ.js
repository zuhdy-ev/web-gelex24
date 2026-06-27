'use client'
import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const faqData = [
  {
    id: 1,
    question: 'Apa itu Gelanggang Expo? Ada apa saja, sih?',
    answer: `Gelanggang Expo merupakan acara rutin tahunan yang menyajikan beragam pameran dan penampilan dari berbagai UKM dan beberapa Komunitas di Universitas Gadjah Mada. Gelanggang Expo juga akan mengajak sobat Gelex untuk turut serta meramaikan Gemilang Ekspresi Gelanggang lewat interactive space!
    Tak hanya itu, Gelex tahun ini spesial menghadirkan web series berisi petualangan ketiga maskot yaitu Gemmy, Gilang, dan Gantari lewat sosial media Gelex.
    Nantikan kejutan lainnya di Gelanggang Expo 2024, ya!`,
  },
  {
    id: 2,
    question: 'Kalau ingin masuk ke Gelex, apakah harus membawa tiket yang berbentuk gelang itu?',
    answer:
      'Boleh dong, selagi kamu masih menjadi bagian dari Universitas Gadjah Mada dan terdaftar dalam akun SIMASTER, kamu bisa hadir dalam seluruh rangkaian Gelanggang Expo!',
  },
  {
    id: 3,
    question: 'Apakah membawa makanan dan minuman dari luar expo diperbolehkan?',
    answer:
      'Masuk ke area Gelex tidak diperkenankan membawa makanan maupun minuman dari luar, ya! Tapi jangan khawatir, kami menyediakan stan makanan dan minuman yang pastinya sesuai dengan selera dan harganya pas untuk sobat Gelex.',
  },
  {
    id: 4,
    question: 'Dimana kita bisa mencari tahu informasi tentang Gelex?',
    answer: `Untuk mengakses informasi lebih lanjut mengenai Gelanggang Expo, kamu bisa mengunjungi sosial media Gelex sebagai berikut: (1) Twitter @gelexUGM, (2) Instagram @gelexugm, (3) Youtube @GelanggangExpoUGM, (4), TikTok @gelexugm, dan (5) Website ukm.ugm.ac.id/2024/gelex
`,
  },
  {
    id: 5,
    question: 'Gelanggang Expo 2024 berlangsung selama berapa lama, sih?',
    answer:
      'Gelanggang Expo UGM dilaksanakan selama 3 hari mulai dari tanggal 21 - 23 Agustus 2024, sobat Gelex! Spesialnya lagi, kalian bisa datang selama 3 hari berturut-turut, loh!',
  },
  {
    id: 6,
    question: 'Apakah kita bisa mencari informasi tentang UKM di Gelanggang Expo 2024?',
    answer:
      'Bisa banget, dong! Sobat Gelex bisa mendatangi stan-stan UKM yang diminati dan bertanya tentang informasi lebih lanjut di sana. Ditambah lagi, sobat Gelex dapat menyaksikan pertunjukan berbagai UKM yang memancarkan keunikannya masing-masing di Gelanggang Expo 2024.',
  },
  {
    id: 7,
    question: 'Apakah Gelex berbayar?',
    answer: `Tenang aja, kamu bisa menikmati seluruh penampilan dan mencoba berbagai kegiatan yang ada di Gelanggang Expo UGM 2024 hanya dengan bermodalkan akun SIMASTER untuk scan masuk expo. Pastikan kamu bersenang-senang di Gelex ya! `,
  },
  {
    id: 8,
    question: 'Apa tema yang dibawakan oleh Gelanggang Expo UGM tahun ini?',
    answer:
      'Tema Gelex tahun ini adalah Gemilang Expresi Gelanggang. Gelanggang Expo 2024 menyalurkan spirit Gemilang Gelanggang dalam nuansa harmoni dunia fantasi yang memadukan potret Gemilang Ekspresi dari berbagai UKM dan Komunitas di Universitas Gadjah Mada.',
  },
  {
    id: 9,
    question: 'Dimana Gelanggang Expo 2024 diselenggarakan?',
    answer:
      'Untuk informasi terkait lokasi tahun ini, termasuk lokasi parkir, sobat Gelex bisa banget untuk cek Instagram Gelex secara berkala, ya!',
  },
  {
    id: 10,
    question:
      'Apa saja sih yang membedakan Gelex tahun ini dengan Gelex di tahun-tahun sebelumnya?',
    answer: `Rangkaian Gelanggang Expo UGM tiap tahunnya memiliki keunikan tersendiri. Di tahun ini, dengan mengangkat tema wonderland, pengunjung akan merasakan nuansa fantasi dengan dekorasi 4 musim fantasi yang berbeda di setiap stannya. 

Gelex 2024 juga menghadirkan webseries yang pastinya menarik dengan kolaborasi setiap Sekber UKM yang terdiri dari sekber rohani, sekber olahraga, sekber khusus, dan sekber seni. `,
  },
  {
    id: 11,
    question:
      'Selama Gelex berlangsung apakah diperbolehkan membawa makanan dan minuman dari luar?',
    answer:
      'Masuk ke area Gelex tidak diperkenankan membawa makanan maupun minuman dari luar ya! Tapi jangan khawatir, kami menyediakan tenant makanan dan minuman yang pastinya sesuai dengan selera dan juga harga yang pas buat para pengunjung Gelex',
  },
]

export function FAQ() {
  const [searchTerm, setSearchTerm] = useState('')
  const [openIndex, setOpenIndex] = useState(null)

  const filteredFaqs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="relative mt-5 flex w-screen flex-col items-center justify-center overflow-hidden p-4 text-[#7F152E] md:mt-20">
      <div className="fixed inset-0 mx-auto">
        <Image
          src="/assets/faq/tekstur-faq.png"
          alt="tekstur"
          width={1000}
          height={1000}
          style={{
            objectFit: 'cover',
          }}
          className="absolute min-h-[60rem] w-full mix-blend-multiply"
        />
        <Image
          src="/assets/faq/bg-gradient-kuning-coklat-ijo.png"
          alt="background"
          width={1000}
          height={1000}
          style={{
            objectFit: 'cover',
          }}
          className="absolute min-h-[60rem] w-full mix-blend-multiply"
        />
      </div>
      <div className="relative top-14 mt-6 flex w-11/12 max-w-[1000px] gap-2 lg:w-full xl:w-10/12">
        <Image
          src={'/assets/faq/gilang-frame.png'}
          width={180}
          height={180}
          style={{ objectFit: 'cover' }}
          className="relative -left-8 z-10 scale-[1.15] lg:bottom-4 lg:scale-125"
        />
        <div className="relative -left-6 z-10 flex flex-col s:top-10 sm:top-8 lg:top-11">
          <h1 className="flex bg-gradient-merah-ungu bg-clip-text font-magicretro text-4xl font-medium text-transparent sm:text-5xl lg:text-[3.5rem]">
            Frequently Asked Questions
            <Image
              src={'/assets/faq/faq-decoration.svg'}
              width={100}
              height={100}
              className="hidden md:block"
            />
          </h1>
        </div>
      </div>
      <div className="relative bottom-2 z-10 mt-10 flex w-full max-w-[1000px] sm:ml-28 sm:w-10/12 lg:bottom-10 lg:ml-0 lg:w-11/12 xl:w-10/12">
        <input
          type="text"
          placeholder="Cari pertanyaanmu di sini..."
          className="w-full rounded-3xl border-2 border-[#7F152E] bg-[#FFE5AF] p-2.5 pl-12 placeholder-[#7F152E] outline-0 placeholder:text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Image
          src={'/assets/faq/search-icon.svg'}
          width={6}
          height={6}
          className="pointer-events-none absolute h-6 w-6 translate-x-4 translate-y-3"
        />
      </div>
      <div className="relative w-full max-w-6xl rounded-3xl border-8 border-[#7F152E] bg-gradient-kuning-putih-kuning p-4">
        <div className="w-full">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div key={index} className="mb-4 w-full border-b border-[#7F152E]">
                <button
                  className="duration-3000 flex w-full justify-between p-2 text-left transition-all hover:font-bold"
                  onClick={() => toggleAnswer(index)}
                >
                  {faq.question}
                  {openIndex === index ? (
                    <Image
                      src={'/assets/faq/dropdown-up.svg'}
                      width={6}
                      height={6}
                      className="h-6 w-6"
                    />
                  ) : (
                    <Image
                      src={'/assets/faq/dropdown-down.svg'}
                      width={6}
                      height={6}
                      className="h-6 w-6"
                    />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden p-2"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          ) : (
            <div className="text-center">Pertanyaan anda tidak ditemukan...</div>
          )}
        </div>
      </div>
    </div>
  )
}
