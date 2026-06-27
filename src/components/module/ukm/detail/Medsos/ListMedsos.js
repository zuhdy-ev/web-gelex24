import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ListMedsos({ media }) {
  return (
    <div className="w-[100%]">
      <div className="my-1 flex w-full justify-center md:mb-3 lg:mb-10">
        <Image
          src="/assets/profil-ukm-komunitas/medsos-judul-listMedsos-desktop.png"
          alt="judul list medsos"
          width={1000}
          height={1000}
          objectFit="cover"
          className="w-[50%] tanggung:w-[35%] lg:w-[400px]"
        />
      </div>
      <div className="mt-2 flex w-full flex-wrap items-center justify-center">
        {media
          .filter((item) => item.url !== '')
          .map((item) => (
            <div className="">
              <Link href={item.url} target="_blank" rel="noreferrer">
                <Image
                  src={
                    item.type === 'instagram'
                      ? '/assets/profil-ukm-komunitas/medsos-icon-instagram-desktop.png'
                      : item.type === 'youtube'
                        ? '/assets/profil-ukm-komunitas/medsos-icon-yt-desktop.png'
                        : item.type === 'line'
                          ? '/assets/profil-ukm-komunitas/medsos-icon-line-desktop.png'
                          : item.type === 'twitter'
                            ? '/assets/profil-ukm-komunitas/medsos-icon-X-desktop.png'
                            : item.type === 'facebook'
                              ? '/assets/profil-ukm-komunitas/medsos-icon-fb-desktop.png'
                              : item.type === 'website'
                                ? '/assets/profil-ukm-komunitas/medsos-icon-web-desktop.png'
                                : item.type === 'email'
                                  ? '/assets/profil-ukm-komunitas/medsos-icon-email-desktop.png'
                                  : item.type === 'tiktok'
                                    ? '/assets/profil-ukm-komunitas/medsos-icon-tiktok-desktop.png'
                                    : item.type === 'linkedin'
                                      ? '/assets/profil-ukm-komunitas/medsos-icon-linkedin-desktop.png'
                                      : item.type === 'medium'
                                        ? '/assets/profil-ukm-komunitas/medsos-icon-medium-desktop.png'
                                        : item.type === 'spotify'
                                          ? '/assets/profil-ukm-komunitas/medsos-icon-spotify-desktop.png'
                                          : ''
                  }
                  alt={item.type}
                  width={1000}
                  height={1000}
                  objectFit="cover"
                  className="transforn mx-2 my-[3px] w-8 transition-transform hover:scale-110 tanggung:w-10 md:w-16 lg:mx-5 lg:w-20"
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}
