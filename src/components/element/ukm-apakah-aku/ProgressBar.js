import cn from "@/util/cn";

export default function ProgressBar({ current, total, className }) {
    const progressWidth = `${(current / total) * 100}%`;

    return (
        <div className={cn("flex flex-col md:w-full w-[90%] items-end gap-1", className)}>
            <div className="text-xs sm:text-sm md:text-base font-bold text-[rgba(255,255,255,0.7)] mr-2">
                {current || 0} / {total}
            </div>
            <div className="w-full rounded-full border-[2px] md:border-[3px] border-[rgba(255,255,255,0.7)] h-[13px] sm:h-[16px] md:h-[20px]">
                <div className="h-full bg-gradient-merah-1 rounded-full" style={{ width: progressWidth }}></div>
            </div>
        </div>
    );
}
