import RekomendasiBoxBagikan from '@/components/element/ukm-apakah-aku/RekomendasiBoxBagikan'

export default function RekomendasiBagikan({ data }) {
  return (
    <div className="flex w-full items-center justify-center gap-3 flex-wrap">
      {data.map((item, index) => {
        return <RekomendasiBoxBagikan item={item} key={index} />
      })}
    </div>
  )
}
