import cn from '@/util/cn'

export default function Button({
  borderClass,
  bgClass,
  textClass,
  customChildren,
  children,
  text,
  onClick,
}) {
  return (
    <div
      className={cn(
        'h-fit w-fit cursor-pointer rounded-[20px] bg-[#FFE5AF] p-[6px] shadow-[0px_4px_4px_rgba(0,0,0,0.25),inset_0px_2px_6px_#C66C3A] transition-all hover:translate-y-1',
        borderClass,
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          'rounded-[14px] bg-[linear-gradient(90deg,#CC2E59_0%,_#7F152E_100%)] px-6 py-2 transition-all [text-shadow:0px_8px_8px_rgba(0,0,0,0.25)] hover:[text-shadow:2px_1px_16px_rgba(234,213,174,0.8)]',
          bgClass,
        )}
      >
        {customChildren ? (
          children
        ) : (
          <div
            className={cn(
              'inline-block bg-[linear-gradient(180deg,#FFE5AF_0%,#E6A263_100%)] bg-clip-text text-center font-bold text-transparent',
              textClass,
            )}
          >
            {text || ''}
          </div>
        )}
      </div>
    </div>
  )
}
