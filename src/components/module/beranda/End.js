import Footer from '@/components/layout/Footer';
import Image from 'next/image';

export default function End() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/assets/footer/bg-footer.png"
          alt="Background Footer"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          className="object-top"
        />
        <Image
          src="/assets/beranda/hero/bg-texture.png"
          alt="Background Texture"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          className="bg-blend-multiply mix-blend-multiply absolute inset-0 z-20"
        />
      </div>
      <div className="relative z-30">
        <Footer />
      </div>
      <div className="absolute top-[14vh] right-[10vw] transform -translate-x-1/2 z-[25] opacity-50 lg:block hidden">
        <Image
          src="/assets/footer/shadow.png"
          alt="Shadow"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  );
}
