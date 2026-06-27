import cn from '@/util/cn'

export default function QuestionBox({ text, message, className }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH

  return (
    <div
      className={cn(
        "flex w-[90%] flex-col items-center justify-center overflow-hidden bg-center bg-no-repeat px-10 py-8 text-center sm:px-14 sm:py-10 md:min-h-[150px] md:w-[600px] md:py-14",
        className,
      )}
      style={{ backgroundImage: `url('${basePath}/assets/ukm-apakah-aku/wooden_board.png')`, backgroundSize: '100% 100%' }}
    >
      <p className="w-full text-wrap break-words text-xs font-bold text-black md:text-sm lg:text-base">
        {text}
      </p>
      <p className="mt-1 text-xs font-bold text-red-600 md:text-sm">{message}</p>
    </div>
  )
}
