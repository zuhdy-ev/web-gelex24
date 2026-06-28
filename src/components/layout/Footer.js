import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute bottom-0 left-0 z-30 h-[45vh] w-full md:h-[45vh] lg:h-[55vh] xl:h-[55vh]">
        <Image
          src="/assets/footer/footer-bg1.png"
          alt="Footer Background"
          fill
          sizes="100%"
          style={{ objectFit: 'fill' }}
          className="hidden object-left md:block"
        />
        <Image
          src="/assets/footer/bg1-mobile.png"
          alt="Footer Background Mobile"
          fill
          className="block object-right md:hidden"
        />
      </div>
      <div className="absolute bottom-[10vh] left-0 z-20 h-[55vh] w-full xxs:bottom-[10vh] xs:bottom-[10vh] xs:h-[55vh] xs:w-[100vw] sm:bottom-[10vh] sm:h-[55vh] sm:w-[100vw] md:bottom-[10vh] md:h-[50vh] md:w-[100vw] lg:bottom-[3vh] lg:h-[80vh] xl:bottom-[3vh] xl:h-[80vh] xl:w-[100vw]">
        <Image
          src="/assets/footer/footer-bg2.png"
          alt="Footer Background 1"
          fill
          sizes="100%"
          style={{ objectFit: 'fill' }}
          className="hidden object-contain md:block lg:object-contain"
        />
        <Image
          src="/assets/footer/bg2-mobile.png"
          alt="Footer Background Mobile"
          fill
          style={{ objectFit: 'fill' }}
          className="block md:hidden"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 z-50 hidden -translate-x-1/2 transform md:block">
        <Image
          src="/assets/footer/footer-cc.png"
          alt="Footer CC"
          width={2888}
          height={258}
          className="w-[650px] object-contain"
        />
      </div>
      <div className="absolute bottom-[-33.5vh] left-1/2 z-50 block h-[70vh] w-[70vw] -translate-x-1/2 transform xs:bottom-[-32.5vh] md:hidden">
        <Image
          src="/assets/footer/cc-mobile.png"
          alt="Footer CC Mobile"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-[16vh] left-[10vw] z-50 xxs:bottom-[16vh] xs:bottom-[16vh] md:bottom-[16vh] md:left-[7vw] md:max-w-xl lg:bottom-[19vh] lg:left-[6vw] xl:bottom-[21vh] xl:left-[6vw]">
        <Image
          src="/assets/footer/text-forkom.png"
          alt="Text Forkom"
          width={678}
          height={154}
          className="hidden h-[150px] w-[450px] object-contain md:block lg:hidden"
        />
        <Image
          src="/assets/footer/text-forkom.png"
          alt="Text Forkom"
          width={678}
          height={154}
          className="hidden h-[200px] w-[650px] object-contain lg:block xl:hidden"
        />
        <Image
          src="/assets/footer/text-forkom.png"
          alt="Text Forkom"
          width={650}
          height={250}
          className="hidden object-contain xl:block"
        />
        <Image
          src="/assets/footer/footer-text-mobile.png"
          alt="Text Forkom Mobile"
          width={1120}
          height={716}
          className="block w-[250px] object-contain md:hidden"
        />
      </div>
      <div className="absolute bottom-[22.4vh] left-[0.8vw] z-50 md:bottom-[22vh] md:left-auto md:right-[5vw] lg:bottom-[26vh] lg:right-[6vw] xl:bottom-[28vh] xl:right-[7vw] 2xl:bottom-[26vh]">
        <Image
          src="/assets/footer/footer-gelex.png"
          alt="Footer Gelex"
          width={28}
          height={28}
          className="hidden h-auto w-[15vw] object-contain md:block md:w-[20vw] lg:w-[22vw] xl:w-[18vw]"
        />
      </div>
      <div className="absolute bottom-[10vh] left-[10vw] z-50 flex space-x-4 xxs:bottom-[10vh] xs:bottom-[10vh] md:bottom-[18vh] md:left-auto md:right-[5vw] md:space-x-4 lg:bottom-[20vh] lg:right-[6vw] lg:space-x-5 xl:bottom-[21vh] xl:right-[7vw] xl:space-x-5">
        <Link href="http://www.youtube.com/@GelanggangExpoUGM" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/footer/footer-yt.png"
              alt="YouTube"
              width={3}
              height={3}
              className="h-[3vh] w-[3vh] object-contain md:h-[3vh] md:w-[3vh] lg:h-[4vh] lg:w-[4vh] xl:h-[4vh] xl:w-[4vh]"
            />
          </a>
        </Link>
        <Link href="https://twitter.com/gelexugm" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/footer/footer-twt.png"
              alt="Twitter"
              width={3}
              height={3}
              className="h-[3vh] w-[3vh] object-contain md:h-[3vh] md:w-[3vh] lg:h-[4vh] lg:w-[4vh] xl:h-[4vh] xl:w-[4vh]"
            />
          </a>
        </Link>
        <Link href="https://www.instagram.com/gelexugm/" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/footer/footer-ig.png"
              alt="Instagram"
              width={3}
              height={3}
              className="h-[3vh] w-[3vh] object-contain md:h-[3vh] md:w-[3vh] lg:h-[4vh] lg:w-[4vh] xl:h-[4vh] xl:w-[4vh]"
            />
          </a>
        </Link>
        <Link href="https://line.me/ti/p/~@ywi0583d" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/footer/footer-line.png"
              alt="Line"
              width={3}
              height={3}
              className="h-[3vh] w-[3vh] object-contain md:h-[3vh] md:w-[3vh] lg:h-[4vh] lg:w-[4vh] xl:h-[4vh] xl:w-[4vh]"
            />
          </a>
        </Link>
        <Link href="https://www.tiktok.com/@gelexugm" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/footer/footer-tt.png"
              alt="TikTok"
              width={3}
              height={3}
              className="h-[3vh] w-[3vh] object-contain md:h-[3vh] md:w-[3vh] lg:h-[4vh] lg:w-[4vh] xl:h-[4vh] xl:w-[4vh]"
            />
          </a>
        </Link>
      </div>
    </div>
  )
}
