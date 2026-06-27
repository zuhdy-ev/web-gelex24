import cn from '@/util/cn'

export default function UKMDeskripsiBagikan({ className, hasil }) {
  return (
    <div
      className={cn(
        'flex w-[85%] cursor-pointer flex-col items-center justify-between rounded-[17px] border-[3px] border-[#E6A263] bg-[linear-gradient(112.87deg,#FFE5AF_6.56%,#FFFFFF_49.24%,#FFE5AF_90.78%)] p-[9px] text-center text-[7px] font-bold transition-all hover:scale-[1.01]',
        className,
      )}
    >
      {hasil}
    </div>
  )
}
