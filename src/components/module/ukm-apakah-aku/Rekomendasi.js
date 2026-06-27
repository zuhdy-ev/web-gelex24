import RekomendasiBox from '@/components/element/ukm-apakah-aku/RekomendasiBox'

export default function Rekomendasi({ data }) {
  return (
    <div className="flex w-full items-center justify-center gap-3 sm:gap-10 md:gap-14 lg:gap-28 flex-wrap">
      {data.map((item, index) => {
        return <RekomendasiBox item={item} key={index} />
      })}
    </div>
  )
}
