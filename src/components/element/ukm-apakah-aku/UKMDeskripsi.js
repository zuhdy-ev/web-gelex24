import cn from "@/util/cn"

export default function UKMDeskripsi({ className, hasil }){
    return (
        <div className={cn("w-[85%] md:w-[80%] p-4 sm:p-6 md:p-8 lg:p-14 text-center border-4 md:border-[6px] lg:border-8 text-[11px] sm:text-sm lg:text-base border-[#E6A263] rounded-[30px] flex flex-col justify-between items-center bg-[linear-gradient(112.87deg,#FFE5AF_6.56%,#FFFFFF_49.24%,#FFE5AF_90.78%)] font-bold cursor-pointer hover:scale-[1.01] transition-all", className)}>
            { hasil } 
        </div>
    )
}