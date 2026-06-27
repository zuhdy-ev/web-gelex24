import './globals.css'
// import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { AppProvider } from '@/context/AppContext'
import cn from '@/util/cn'
import { Sparkles } from '@/components/element/beranda/splash/sparkles'

// const inter = Inter({ subsets: ['latin'] })

const magicretro = localFont({
  src: [
    {
      path: '../../public/fonts/Magic-Retro.ttf',
      weight: '500',
    },
  ],
  variable: '--magic-retro',
})

const mulish = localFont({
  src: [
    {
      path: '../../public/fonts/Mulish-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/Mulish-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--mulish',
})

export const metadata = {
  title: 'Gelanggang Expo 2024',
  description: 'Gelanggang Expo 2024',
}

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="en" className={`${magicretro.variable} ${mulish.variable}`}>
        <head>
          <link rel="icon" href="/2024/gelex/images/favicon.io" />
        </head>
        <body className={cn(mulish.className)}>
          <div className="fixed inset-0 z-[-1000] h-screen w-screen bg-[linear-gradient(180deg,#271146_0%,#984597_100%)]">
            <Sparkles
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          <div className="flex justify-center min-h-screen overflow-x-hidden">{children}</div>
        </body>
      </html>
    </AppProvider>
  )
}
