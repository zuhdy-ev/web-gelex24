import cn from '@/util/cn'
import Button from './Button'
import Image from 'next/image'

export default function PrologBox({ text, className, handleNext, handlePrevious, currentProlog }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH

  return (
    <div
      className={cn(
        "flex min-h-[150px] w-[90%] flex-col items-center justify-center overflow-hidden bg-center bg-no-repeat px-12 py-8 md:w-[720px] md:px-16 md:py-10 lg:w-[820px]",
        className,
      )}
      style={{ backgroundImage: `url('${basePath}/assets/ukm-apakah-aku/wooden_board.png')` ,backgroundSize: '100% 100%' }}
    >
      <p className="mb-2 inline-block bg-gradient-merah-1 bg-clip-text text-center font-magicretro text-3xl text-transparent [text-shadow:1px_3px_4px_rgba(0,0,0,0.1)] sm:text-4xl md:text-5xl">
        Prolog
      </p>
      <p className="break-word w-full text-wrap text-center text-xs font-bold text-black sm:text-sm md:px-10 md:text-base">
        {text}
      </p>
      <div className="mt-4 flex w-full justify-between">
        {currentProlog > 1 ? (
          <Button
            customChildren={true}
            borderClass={'rounded-full p-[4px] md:[p-6x]'}
            bgClass={'rounded-full px-3 md:px-4'}
            onClick={handlePrevious}
          >
            <Image
              src="/assets/ukm-apakah-aku/arrow-next.svg"
              width={0}
              height={0}
              className="w-2 translate-x-[-1px] scale-x-[-1] md:w-3"
              alt="previous button"
            />
          </Button>
        ) : (
          <div></div>
        )}
        <Button
          customChildren={true}
          borderClass={'rounded-full p-[4px] md:[p-6x]'}
          bgClass={'rounded-full px-3 md:px-4'}
          onClick={handleNext}
        >
          <Image
            src="/assets/ukm-apakah-aku/arrow-next.svg"
            width={0}
            height={0}
            className="w-2 translate-x-[1px] md:w-3"
            alt="next button"
          />
        </Button>
      </div>
    </div>
  )
}
