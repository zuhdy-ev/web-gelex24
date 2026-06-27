import React from 'react'
import Image from 'next/image'

const kenanganKemarin = [
  {
    status: '2020',
    name: 'Gelex 2020',
    desc: `Gelanggang Expo 2020, yang berlangsung secara daring karena pandemi COVID-19, membawakan tema pembuka “Jati Diri Gelanggang” dan tema penutup “Gelora Jiwa Gelanggang.” Gelanggang Expo 2020 disiarkan melalui kanal YouTube Gelanggang Expo UGM dari 21 September hingga 6 Oktober 2020.

Diketuai oleh Gabriel Owin, Gelex tahun ini melibatkan 52 Unit Kegiatan Mahasiswa (UKM) dan komunitas.

Tahukah kamu bahwa Anthem pertama kali diciptakan dan digunakan di Gelanggang Expo 2020?`,
    img: '/assets/tentang/kenangan-2020.png',
  },
  {
    status: '2021',
    name: 'Gelex 2021',
    desc: `Gelanggang Expo 2021 mengusung tema “Karya Kolaborasi Gelanggang,” yang bertujuan memperkuat kembali hubungan antar UKM serta menjadi penghubung antara mahasiswa baru dengan UKM dan Komunitas Mahasiswa, sehingga kualitas mahasiswa UGM dapat tercapai.

Dengan konsep pameran virtual, Gelex 2021 diadakan secara daring dan disiarkan dari Lapangan Pancasila UGM melalui Kanal YouTube Gelanggang Expo UGM pada 26-29 Agustus 2021. Pada tahun ini juga Gelanggang Expo pertama kali bertempat di Lapangan Pancasila UGM setelah gelanggang dipugarkan.

Dengan ketua pelaksana yaitu Bagus Aji Waskito, Gelex tahun ini melibatkan 52 Unit Kegiatan Mahasiswa (UKM), 13 komunitas, serta menghadirkan Juicy Luicy sebagai bintang tamu.

Tahukah kamu bahwa maskot Gelex “Gilang dan Gantari” pertama kali hadir di Gelanggang Expo 2021?`,
    img: '/assets/tentang/kenangan-2021.png',
  },
  {
    status: '2022',
    name: 'Gelex 2022',
    desc: `Gelanggang Expo 2022 mengusung tema “Sinergi Dalam Kreasi,” yang bertujuan menggali dan menampilkan ide, karya, serta penampilan dari berbagai UKM dan komunitas. Kreasi ini disinergikan dalam Gelanggang Expo, dengan harapan mahasiswa baru dapat melihat wajah, citra, dan karakteristik dari UKM dan Gelanggang Mahasiswa, sehingga mereka dapat mengenalinya dengan baik.

Dengan konsep pesta rakyat, Gelex 2022 diadakan secara luring di Lapangan Pancasila UGM dan juga disiarkan secara daring melalui Kanal YouTube Gelanggang Expo UGM pada 18-20 Agustus 2022. Ini adalah pelaksanaan luring pertama setelah dua tahun diadakan secara daring.

Dengan Jalu Jagad Maharsi Pamungkas sebagai ketua pelaksana, Gelex tahun ini melibatkan 54 Unit Kegiatan Mahasiswa (UKM) dan 19 komunitas. Gelanggang Expo 2022 berhasil menarik kurang lebih 22.000 pengunjung dan menghadirkan Feel Koplo sebagai bintang tamu.
`,
    img: '/assets/tentang/kenangan-2022.png',
  },
  {
    status: '2023',
    name: 'Gelex 2023',
    desc: `Gelanggang Expo 2023 hadir dengan tema “Simfoni Euforia Gelanggang,” yang menggambarkan bagaimana berbagai elemen berbeda dapat bersatu menciptakan kesatuan yang utuh, menunjukkan sifat dinamis yang saling melengkapi. Simfoni ini diharapkan menghasilkan karya bersama yang menciptakan momen euforia kebersamaan sebagai keluarga Gelanggang Mahasiswa. Dengan menampilkan kreasi kolaborasi dari setiap UKM dan komunitas, mahasiswa baru diharapkan dapat melihat wajah, citra, dan karakteristik dari UKM dan Gelanggang Mahasiswa, sehingga mereka dapat mengenalnya dengan baik.
    
Dengan konsep karnaval, Gelex 2023 diadakan secara luring di Lapangan Pancasila UGM dan disiarkan secara daring melalui Kanal YouTube Gelanggang Expo UGM pada 16-18 Agustus 2023.
    
Dengan ketua pelaksana Rafael Reinhart S, Gelex 2023 melibatkan 55 Unit Kegiatan Mahasiswa (UKM) dan 20 komunitas. Acara ini berhasil menarik sekitar 34.000 pengunjung dan menampilkan Diskoria sebagai bintang tamu.
    
Tahukah kamu bahwa panggung olahraga pertama kali hadir di Gelanggang Expo 2023?`,
    img: '/assets/tentang/kenangan-2023.png',
  },
]

export default function Konten({ status }) {
  return (
    <main className="relative h-full translate-y-3 xxxs:translate-y-5 w-full p-5 md:h-[50vw] lg:h-[35rem] lg:w-[64rem] laptopL:h-[40rem] laptopL:w-[85rem]">
      {kenanganKemarin.map((item) => (
        <div
          key={item.status}
          className={`flex h-full w-full flex-col items-center justify-center md:flex-row-reverse md:items-start md:gap-5 ${status === item.status ? 'block' : 'hidden'}`}
        >
          <div className="flex h-full w-full items-center justify-center s:w-[70%] md:w-1/2 lg:w-[30rem] laptopL:w-[35rem]">
            <Image src={item.img} width={1000} height={1000} alt="contoh foto" className="" />
          </div>
          <div className="gap-5 py-5 md:w-1/2 laptopL:w-[50rem]">
            <div>
              <h1 className="flex w-full items-center justify-center font-magicretro text-[2rem] text-white lg:text-[3rem]">
                {item.name}
              </h1>
            </div>
            <div className="h-[300px] overflow-y-auto pr-2 md:h-[250px] md:pr-0 lg:h-[400px] laptopL:h-[480px]">
              <p className="whitespace-pre-wrap text-justify text-[12px] leading-relaxed text-white xs:text-sm s:px-10 md:px-5 lg:text-[17px] laptopL:text-[20px]">
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}
