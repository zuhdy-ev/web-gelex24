import { dataPertanyaan } from '@/data/data'
import { useContext } from 'react'
import { AppContext } from '@/context/AppContext'
import AnswerBox from '@/components/element/ukm-apakah-aku/AnswerBox'
import Image from 'next/image'
import Button from '@/components/element/ukm-apakah-aku/Button'
import cn from '@/util/cn'
import useScreenSize from '@/util/useScreenSize'

export default function Answers({
  className,
  currentQuestion,
  handleChange,
  handleNext,
  handlePrevious,
  handleSubmit,
  boxBorderColor,
  bgAnswer,
}) {
  const { daftarJawaban } = useContext(AppContext)
  const { isMd } = useScreenSize()

  const backgroundColor = isMd ? bgAnswer : 'rgba(0,0,0,0.5)'

  return (
    <div
      style={{ background: backgroundColor }}
      className={cn(
        'w-[90%] rounded-3xl px-3 py-5 md:w-full md:rounded-none md:px-10 md:py-8',
        className,
      )}
    >
      <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-5 lg:gap-10">
        {dataPertanyaan[currentQuestion - 1].jawaban[0].daftarJawaban.map((item, index) => {
          const question = dataPertanyaan[currentQuestion - 1]

          return (
            <AnswerBox
              jawaban={question.teksJawaban[item.tipe]}
              key={index}
              handleChange={handleChange}
              currentJawaban={daftarJawaban[question.id]}
              tipe={item.tipe}
              questionId={question.id}
              borderColor={boxBorderColor}
            />
          )
        })}
      </div>
      <div className="mt-5 flex justify-between">
        {currentQuestion > 1 ? (
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
          onClick={currentQuestion < dataPertanyaan.length ? handleNext : handleSubmit}
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
