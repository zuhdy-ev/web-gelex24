'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Nav() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH

  const [isNavVisible, setNavVisible] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const pathname = usePathname()

  const links = [
    // { label: 'Beranda', path: '/beranda' },
    { label: 'Beranda', path: '/' },
    { label: 'Tentang Gelex', path: '/tentang' },
    { label: 'UKM', path: '/ukm' },
    { label: 'Komunitas', path: '/komunitas' },
    { label: 'UKM Apakah Aku?', path: '/ukm-apakah-aku' },
    { label: 'FAQ', path: '/faq' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop
      if (currentScrollTop > lastScrollTop) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollTop])

  return (
    <div>
      <div
        className={`fixed left-0 top-0 z-[999] hidden w-full transition-transform duration-300 lg:flex ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="relative mt-4 flex w-full items-center justify-center">
          <img
            className="h-[10vh] w-[80vw] max-w-[1120px]"
            src="/2024/gelex/assets/navbar/navbar-bg.png"
            alt="Custom Image"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <nav className="px-4">
              <ul className="mb-2 flex items-center lg:space-x-4 xl:space-x-8">
                {links.map((l, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && (
                      <div className="mx-2 flex items-center">
                        <div className="relative h-5 w-1 2xl:h-6 2xl:w-1">
                          <Image
                            src="/assets/navbar/navbar-line.png"
                            alt="Divider"
                            fill
                            sizes="(max-width: 600px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      </div>
                    )}
                    <li className="hover-underline hover-text-grow relative">
                      <Link
                        href={l.path}
                        className={`bg-gradient-to-b from-goldgradientStart to-goldgradientEnd bg-clip-text font-mulish font-bold text-transparent lg:text-lg xl:text-xl ${
                          (pathname == '/' ? '//' : pathname) === l.path + '/' ? 'active-text' : ''
                        }`}
                      >
                        <span className={`hover:text-shadow-1`}>{l.label}</span>
                      </Link>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="fixed left-0 top-4 z-[999] flex w-full items-start justify-end pr-4 lg:hidden">
        <div className="relative z-[1001]">
          <button
            className={`transform transition-transform duration-300 ease-in-out ${isNavVisible ? 'rotate-180' : ''}`}
            onClick={() => setNavVisible(!isNavVisible)}
          >
            <Image
              src={
                isNavVisible
                  ? '/assets/navbar/navbar-close-mobile.png'
                  : '/assets/navbar/navbar-bg-mobile.png'
              }
              width={35}
              height={35}
              alt="sidebar button"
              className="z-[1002] scale-110 transform transition-all duration-200 ease-in-out xxxs:w-[16vw] xxs:w-[16vw] xs:w-[16vw] sm:w-[8vw] md:w-[6vw] md:scale-125 md:hover:scale-[1.5]"
            />
          </button>
        </div>
        <div
          className={`fixed right-0 top-0 z-[1000] h-full w-3/4 transform bg-[url('/2024/gelex/assets/navbar/navbar-bg-menu-mobile.png')] bg-cover bg-no-repeat p-4 ${
            isNavVisible ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300`}
        >
          <div className="relative h-full w-full">
            <nav className="mt-16">
              <ul className="flex flex-col items-start space-y-8 p-8">
                {links.map((l, i) => (
                  <React.Fragment key={i}>
                    <li className="relative w-full">
                      <Link
                        href={l.path}
                        className={`bg-gradient-to-b from-goldgradientStart to-goldgradientEnd bg-clip-text font-mulish text-lg font-bold text-transparent xxxs:text-xl xxs:text-xl xs:text-xl sm:text-2xl md:text-3xl ${
                          (pathname == '/' ? '//' : pathname) === l.path + '/' ? 'active-text' : ''
                        }`}
                        onClick={() => setNavVisible(false)}
                      >
                        <span className="hover:text-shadow-1">{l.label}</span>
                      </Link>
                    </li>
                    {i < links.length - 1 && (
                      <div className="my-4 flex justify-center">
                        <div className="relative h-[0.3vh] w-[55vw]">
                          <Image
                            src="/assets/navbar/navbar-line-mobile.png"
                            alt="Divider"
                            fill
                            sizes="(max-width: 600px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
