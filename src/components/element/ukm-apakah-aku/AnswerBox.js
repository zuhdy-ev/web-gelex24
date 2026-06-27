import useScreenSize from '@/util/useScreenSize'

export default function AnswerBox({
  tipe,
  questionId,
  currentJawaban,
  handleChange,
  borderColor,
  jawaban,
}) {
  const { isMd } = useScreenSize()
  const colorBorder = isMd ? borderColor : '#00416B'

  return (
    <div
      style={currentJawaban === tipe ? { borderColor: '#E4A440' } : { borderColor: colorBorder }}
      className={`flex w-full cursor-pointer items-center justify-center rounded-3xl border-[4px] bg-[linear-gradient(112.87deg,#FFE5AF_6.56%,#FFFFFF_49.24%,#FFE5AF_90.78%)] p-3 text-center font-bold shadow-answer-box transition-all hover:scale-[1.01] md:min-h-32 md:w-[40%] md:rounded-[50px] md:border-8 lg:w-[30%]`}
      onClick={() => handleChange(questionId, tipe)}
    >
      <label className="mr-2 cursor-pointer text-center text-xs text-black md:text-sm lg:text-base">
        <input
          className="absolute mr-4 cursor-pointer text-center text-black opacity-0"
          type="radio"
          name={`question-${questionId}`}
          value={tipe}
          checked={currentJawaban === tipe}
          onChange={() => handleChange(questionId, tipe)}
        />
        {jawaban}
      </label>
    </div>
  )
}
