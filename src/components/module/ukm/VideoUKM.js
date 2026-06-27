'use client'
import Image from 'next/image'
import VideoCard from '@/components/element/ukm/VideoCard'
import VideoContent from '@/components/element/ukm/VideoContent'
import { useState } from 'react'

export function VideoUKM() {
  const videos = [
    'https://www.youtube.com/embed/qKCWaqNSVqM?si=KlEgM_FjixQRAkK3',
    'https://www.youtube.com/embed/yP1nUHaEm7g?si=HWOV_kdeVAJVIeAq',
    'https://www.youtube.com/embed/wF3x_U21GkE?si=Z_ZcjMpAMMNiBp5B',
    'https://www.youtube.com/embed/BPaeUIcC9oo?si=xi8_y2DiySSN3_HX',
    'https://www.youtube.com/embed/f5O2cKwG6dQ?si=n1eFotB3Y8hRznL5',
  ]

  const texts = [
    {
      title: 'Prolog “Bermulanya Keajaiban”',
      description:
        'Kisah ini bermula dari pertemuan awal Gilang dan Gantari dengan Gemmy– makhluk dari dunia Loka Utopia yang jatuh ke bumi. Gilang dan Gantari yang melihat Gemmy jatuh langsung mendekatinya dengan rasa penasaran. Ketiganya saling berkenalan dan pada akhirnya Gilang dan Gantari memutuskan untuk membantu Gemmy kembali ke dunia Loka Utopia. Namun, belum selesai mereka berkomunikasi, ada seseorang yang lari ketakutan ke arah mereka. Siapakah itu? Apakah Gilang dan Gantari dapat membantu Gemmy pulang ke dunia Loka Utopia?',
    },
    {
      title: 'Episode 1 : Sekber Rohani “Rona Warna Kebaikan”',
      description:
        'Setelah seseorang yang lari ketakutan itu menghampiri Gilang, Gantari, dan Gemmy, ia menceritakan bahwa terdapat sesuatu yang aneh dengan dunianya. Ternyata dunia orang tersebut terkena bencana yang membuat dunianya memudar dan tidak berwarna! Gilang, Gantari, dan Gemmy pun langsung membantu orang tersebut agar dunianya kembali normal. Mereka membawa orang tersebut ke Fasilitas Kerohanian yang ternyata disana terdapat UKM Sekber Rohani! Terlihat Fasilitas Kerohanian yang terlindungi dari bencana tersebut. Bagaimanakah Gilang, Gantari, dan Gemmy akan membantu orang tersebut? Apa yang akan dilakukan oleh Sekber Rohani untuk membantu?',
    },
    {
      title: 'Episode 2 : Sekber Olahraga “Gelora Hangat Penuh Semangat”',
      description:
        'Setelah berhasil membantu orang yang dunianya terkena bencana, Gilang, Gantari, dan Gemmy berniat untuk beristirahat di Stadion Pancasila. Namun, mereka menemukan seseorang yang sedang tersandar lemas. Terlihat orang tersebut lemas, letih, dan tidak bersemangat sedikitpun, mereka berniat mengembalikan semangatnya dengan mengenalkan beberapa kegiatan olahraga yang bisa ditemukan di sekitarnya. Apakah mereka bisa mengembalikan semangat seseorang itu? Bagaimanakah reaksi dari orang tersebut? Akankah ia kembali semangat nantinya?',
    },
    {
      title: 'Episode 3 : Sekber Seni “Eksplorasi Arah Talenta”',
      description:
        'Setelah Gilang, Gantari, dan Gemmy berhasil mengembalikan semangat seseorang yang lesu tersebut, mereka pun makin paham bahwa mereka harus mencari sesuatu yang janggal untuk diselesaikan agar Gemmy dapat pulang ke Loka Utopia. Akhirnya, mereka sampai di tempat yang terlihat sedang ada beberapa orang melakukan kegiatan. Namun, mereka terlihat sedikit aneh. Bakat mereka tertukar?! Gilang, Gantari, dan Gemmy pun berusaha membantu agar semua orang kembali pada bakatnya. Jalan mereka tidaklah mudah! Apakah mereka dapat membantu agar bakat yang ada dapat sesuai? Bagaimana cara mereka membantu orang-orang tersebut? ',
    },
    {
      title: 'Episode 4 : Sekber Khusus “Paduan Ragam Keceriaan”',
      description:
        'Setelah berhasil membantu untuk menempatkan bakat pada tempat yang seharusnya, perut Gemmy tiba-tiba berbunyi tanda ia sedang lapar. Gilang pergi dengan tujuan untuk mencarikan makanan agar dimakan oleh Gemmy. Sembari menunggu, Gemmy dan Gantari memperhatikan sekitar mereka yang terdapat beberapa orang sedang rekreasi dan bermain. Gemmy tertarik untuk melihat mereka secara dekat. Ketika Gilang datang dan menawarkan makanan, ternyata bukan makanan yang Gemmy cari! Apakah makanan yang disukai Gemmy? Apakah ia akan tetap kelaparan? Adakah keterkaitan antara laparnya Gemmy dengan orang-orang yang sedang rekreasi dan bermain itu?',
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSlideChange = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Image
        src="/assets/ukm/texture-black-video.png"
        alt="tekstur"
        fill
        style={{ objectFit: 'cover' }}
        className="absolute w-full h-full"
      />
      <Image
        src="/assets/ukm/kertas-video.png"
        alt="kertas"
        fill
        style={{ objectFit: 'cover' }}
        className="absolute w-full h-full"
      />
      <Image
        src="/assets/ukm/bata-video.png"
        alt="bata"
        width={1000}
        height={1000}
        className="absolute w-full"
      />
      <Image
        src="/assets/ukm/paw-video.png"
        alt="paw"
        width={1000}
        height={1000}
        className="absolute bottom-0 w-full"
      />
      <Image
        src="/assets/ukm/tanaman-video.png"
        alt="tanaman"
        width={1000}
        height={1000}
        className="absolute w-full"
      />
      <div className="flex flex-col items-center w-full h-full mx-auto sm:flex-row">
        <VideoCard videos={videos} onSlideChange={handleSlideChange} />
        <VideoContent texts={texts[currentSlide]} />
      </div>
    </div>
  )
}
