import React from 'react'
import Image from 'next/image'

export default function Konten() {
  return (
    <main>
      <div className="absolute flex h-full w-full flex-col items-center gap-5 pt-36 md:pt-20">
        {/* Judul */}
        <div>
          <p className="text-shadow bg-gradient-kuning-pink bg-clip-text text-center font-magicretro text-[30px] text-transparent xs:text-[40px] s:text-[50px] md:text-[70px]">
            Pesona Gelanggang
          </p>
          <div className="flex items-center justify-center gap-2">
            <div>
              <Image
                src="/assets/tentang/anthem-asset-judul-kiri-desktop.png"
                width={1000}
                height={1000}
                className="w-10 object-cover s:w-20 md:w-28"
                alt="asset judul kiri anthem"
              />
            </div>
            <div>
              <p className="font-mulish text-[20px] font-bold text-[#FDD49E] lg:text-[30px]">
                Anthem Gelex
              </p>
            </div>
            <div>
              <Image
                src="/assets/tentang/anthem-asset-judul-kanan-desktop.png"
                width={1000}
                height={1000}
                className="w-10 object-cover s:w-20 md:w-28"
                alt="asset judul kanan anthem"
              />
            </div>
          </div>
        </div>
        {/* Konten Utama */}
        <div className="flex justify-center gap-0 px-5">
          {/* Gemmy */}
          <div className="flex h-full w-20 items-start md:w-28 lg:w-40">
            <Image
              src="/assets/tentang/anthem-gemmy-mobile.png"
              width={1000}
              height={1000}
              className="w-full object-cover"
              alt="gemmy anthem"
            />
          </div>
          {/* Box */}
          <div className="flex h-full w-[80vw] min-w-64 flex-col items-center justify-center gap-3 rounded-3xl border-[10px] border-[#F18884] bg-gradient-to-br from-[#FFE5AF] via-[#FFFFFF] to-[#FFE5AF] p-3 s:w-[70vw] md:p-5 lg:w-[65vw] lg:rounded-[60px] lg:border-[20px] lg:p-8 laptopL:w-[1000px]">
            <div className="w-full overflow-hidden rounded-lg" style={{ aspectRatio: '16/9' }}>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/hlcNIoERYEo?si=6bjA6qaFw-_1mDPl&rel=0`}
                title="Anthem Gelex"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full rounded-lg"
                frameborder="0"
                style={{ aspectRatio: '16/9' }}
              ></iframe>
              {/* <div className="flex h-full w-full items-center justify-center bg-gradient-kuning-putih-kuning">
                <p className="font-magicretro text-red-900 md:text-[40px] laptopL:text-[50px]">
                  Segera Hadir
                </p>
              </div> */}
            </div>
            <div className="mt-5 h-[250px] overflow-y-auto pr-2 md:h-[300px]">
              <div className="gap-10 text-[12px] text-[#BB3C59] xs:text-sm lg:text-[17px] laptopL:text-[20px]">
                <p className="text-justify leading-relaxed">
                  Halo, Sobat Gelex! Tahu gak anthem gelex ternyata sudah direncanakan sejak tahun
                  2019 loh! Akhirnya, anthem Gelex berhasil direalisasikan pada tahun 2020 oleh
                  mahasiswa anggota UKM di sekber kesenian. Anthem Gelex dengan tajuk “Pesona
                  Gelanggang” merupakan kolaborasi spektakuler antara Gelex dan UKM. Siapa saja sih
                  mahasiswa yang berpartisipasi dalam membuat anthem yang epik ini? Yuk, kita
                  kenalan!
                </p>
                <br />
                <div className="text-left leading-relaxed">
                  <p>Komposer & penata musik: Mario Albert Arif Hardian</p>
                  <p>Produser & penata musik: Raka Hervin Anggatama & Ali Azca</p>
                  <p>Penulis lirik: Helena Agathia Pujiharjati & Shabrina H. Kartowisastro</p>
                  <p>Vokalis: Bella Nadinda Sari</p>
                  <p>Pengarah vokal: Raka Hervin Anggatama & Ponang Dyah Pangarsi</p>
                  <p>Recordist: Ade Nugraha</p>
                  <p>Editor: Ali Azca</p>
                </div>
                <br />
                <p className="text-justify leading-relaxed">
                  Pesona Gelanggang merupakan lagu yang menceritakan tentang semangat dan
                  kegembiraan yang mengiringi penyelenggaraan Gelanggang Expo dan spirit abadi
                  Gelanggang. Sprit tersebut dapat dilihat dari bagaimana UKM menempatkan Gelanggang
                  dalam hati mereka. Gelanggang merupakan wadah untuk berdinamika dan tempat mereka
                  berpulang. Gelanggang telah menjadi saksi mahasiswa anggota UKM meraih prestasi
                  dan menciptakan karya yang luar biasa.
                </p>
                <br />
                <p className="text-justify leading-relaxed">
                  Pesona Gelanggang tidak dapat terlepas dari Gelanggang, UKM, dan Gelex yang
                  merupakan satu kesatuan. Keterkaitan antara anthem dengan ketiga komponen tersebut
                  semakin menunjukkan jati diri Gelanggang yang diceritakan dalam Pesona Gelanggang.
                  Funkot dan dangdut dinilai dapat menjadi genre yang tepat untuk menjadi aransemen
                  musik utama Anthem Gelex, serta liriknya yang penuh dengan kiasan dibalut dengan
                  ekspresi euforia Gelanggang. Selain itu, vokal yang dipilih untuk mengisi Anthem
                  Gelex mampu menyampaikan semangat Gelanggang ke seluruh pendengar dengan cukup
                  baik. Pesona Gelanggang juga menggambarkan kehidupan perkuliahan Universitas
                  Gadjah Mada yang berkembang di bidang non-akademik. Bersama UKM, mahasiswa UGM
                  dapat menonjolkan banyak hal, termasuk bersenang-senang, menekuni minat dan bakat
                  mereka, dan belajar bermasyarakat.
                </p>
                <br />
                <p className="text-justify leading-relaxed">
                  Anthem ini dibawakan dengan tema kilas balik perjalanan persiapan Gelex 2024.
                  Kisah bermula ketika ada seorang gadis yang melakukan lari pagi sembari
                  mendengarkan musik. Langkahnya terhenti ketika ia mendapatkan sebuah notifikasi
                  dari google mengenai “Foto Satu Tahun Yang Lalu”. Ia pun membuka notifikasi
                  tersebut demi menemukan sebuah foto berisi ia dan ketiga temannya seraya saling
                  merangkul. Ketika ia menggeser ke foto selanjutnya, ia terbangun di tengah suasana
                  kelas– kembali ke satu tahun yang lalu. Dengan tergesa ia keluar dari kelas lalu
                  disambut oleh suasana koridor yang telah ramai. Di tengah keramaian tersebut, ia
                  menemukan seseorang yang tampak familiar. Belum sempat ia bertanya, orang tersebut
                  tanpa aba-aba langsung mengajaknya menuju ke suatu tempat– membuatnya berpindah
                  tempat secara tiba-tiba. Di sisi lain, ada seorang pengendara sepeda yang
                  menyusuri jalanan dengan riang. Tak disangka-sangka, ia bertemu dengan gadis yang
                  tadi berlari. Mereka terus bertemu satu sama lain, beserta salah seorang artist
                  dan sosok misterius yang ia temui di koridor. Hingga akhirnya mereka kembali
                  bertemu, dengan pertanyaan yang memenuhi kepala, untuk kemudian menemukan sebuah
                  fakta mencengangkan, bahwa mereka, satu sama lainnya terhubung, secara ajaib,
                  melalui benang takdir bernama Gelex.
                </p>
                <br />
              </div>
            </div>
          </div>
          {/* Gantari */}
          <div className="flex h-full w-20 items-end md:w-28 lg:w-40">
            <Image
              src="/assets/tentang/anthem-gantari-mobile.png"
              width={1000}
              height={1000}
              className="w-full -translate-y-5 object-cover lg:-translate-y-10"
              alt="gantari anthem"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
