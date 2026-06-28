'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const links = [
  {
    cardImage: '/assets/beranda/caraousel/caraousel-card-ukm.png',
    cardImageMobile: '/assets/beranda/caraousel/caraousel-card-ukm-mobile.png',
    cardAlt: 'Carousel Card UKM',
    buttonImage: '/assets/beranda/caraousel/caraousel-button-selengkapnya.png',
    buttonAlt: 'Carousel Button Selengkapnya',
    href: '/ukm'
  },
  {
    cardImage: '/assets/beranda/caraousel/caraousel-card-komunitas.png',
    cardImageMobile: '/assets/beranda/caraousel/caraousel-card-komunitas-mobile.png',
    cardAlt: 'Carousel Card Komunitas',
    buttonImage: '/assets/beranda/caraousel/caraousel-button-selengkapnya2.png',
    buttonAlt: 'Carousel Button Selengkapnya',
    href: '/komunitas'
  },
  {
    cardImage: '/assets/beranda/caraousel/caraousel-card-ukmapakahaku.png',
    cardImageMobile: '/assets/beranda/caraousel/caraousel-card-ukmapakahaku-mobile.png',
    cardAlt: 'Carousel Card UKMAPakahaku',
    buttonImage: '/assets/beranda/caraousel/caraousel-button-caritahu.png',
    buttonAlt: 'Carousel Button Cari Tahu',
    href: '/ukm-apakah-aku'
  }
];

export default function Carousel() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check window width and set isMobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20%',
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    customPaging: (i) => (
      <div className="custom-dot"></div>
    ),
    dotsClass: "slick-dots custom-dots flex justify-center space-x-2 mt-4 z-[50]",
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '15%'
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '10%'
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          centerPadding: '10%'
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
          centerPadding: '10%',
          customPaging: () => (
            <div className="custom-dot"></div>
          ),
          dotsClass: "slick-dots custom-dots flex justify-center space-x-2 mt-4 z-[50]",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerPadding: '0'
        }
      }
    ]
  };

  const handleCardClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 w-full h-full ">
        <Image
          src="/assets/beranda/caraousel/bg-caraousel.png"
          alt="Background Carousel"
          fill
          // objectFit="cover"
          quality={100}
          className="object-bottom object-cover"
        />
        <Image
          src="/assets/beranda/hero/bg-texture.png"
          alt="Background Texture"
          fill
          objectFit="cover"
          quality={100}
          className="bg-blend-multiply mix-blend-multiply absolute inset-0 z-20"
        />
      </div>
      <div className="absolute top-20 left-0 z-10">
        <Image
          src="/assets/beranda/caraousel/butterfly-left.png"
          alt="Butterfly Left"
          width={1109}
          height={1276}
          className="w-[300px] object-contain"
        />
      </div>
      {/* <div className="absolute inset-0 top-[34vh] md:top-[55vh] lg:top-[45vh] xl:bottom-[60vh] 2xl:bottom-[30vh] maxWidth:bottom-[40vh] z-20 hidden md:flex justify-center items-center">
        <Image
          src="/assets/beranda/caraousel/lightning.png"
          alt="Lightning"
          width={1720}
          height={1720}
          className="object-contain"
        />
      </div> */}
      <div className="absolute inset-0 h-[180vh] w-[100vw] top-[-50vh] left-0 z-20 md:hidden flex justify-center items-center">
        <Image
          src="/assets/beranda/caraousel/lightning-mobile.png"
          alt="Lightning Mobile"
          fill
          style={{ objectFit: 'contain' }}
          className="object-contain"
        />
      </div>
      <div className="relative z-30 w-full h-full flex justify-center items-center">
        <Slider {...settings} className="w-full" ref={sliderRef}>
          {links.map((link, index) => (
            <div
              key={index}
              className={`px-4 flex justify-center items-center w-full h-full relative no-outline ${index === currentSlide ? 'scale-100' : 'scale-90'}`}
              style={{ padding: '0 10px', transition: 'transform 1s' }}
              onClick={() => handleCardClick(index)}
            >
              <Image
                src={isMobile ? link.cardImageMobile : link.cardImage}
                alt={link.cardAlt}
                width={1100}
                height={700}
                className="object-contain no-outline"
              />
              <Link href={link.href} passHref legacyBehavior>
                <a className="absolute bottom-[10vh] left-1/2 transform -translate-x-1/2 z-[30] md:w-[45%] md:bottom-[6vh] md:left-[53vw] lg:bottom-[12vh] xl:bottom-[12vh] xl:left-[48vw] 2xl:left-[40vw] 2xl:bottom-[12vh]">
                  <Image
                    src={link.buttonImage}
                    alt={link.buttonAlt}
                    width={1200}
                    height={1200}
                    className="object-contain no-outline w-full h-full"
                  />
                </a>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
