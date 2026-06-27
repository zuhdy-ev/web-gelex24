import Link from 'next/link'
import React from 'react'
import { convertToSlug } from '@/app/ukm/[ukmId]/page'

export default function TableListUKM({ listData, notFound, roundedList }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH

  return (
    <div>
      {listData.length > 0 ? (
        <div
          className={`scrollbar-list grid max-h-[70vh] grid-cols-1 gap-2 overflow-y-auto rounded-lg border-4 border-[#E6A263] bg-gradient-merah-list px-3 py-4 text-white sm:grid-cols-2 ${roundedList} lg:grid-cols-3 laptopL:grid-cols-4`}
        >
          {listData.map((data, index) => (
            <Link href={`/ukm/${convertToSlug(data.name)}`} key={index}>
              {/* // <Link href={`/segera-hadir/`} key={index}> */}
              <div className="flex h-24 items-center justify-center gap-4 rounded-lg border border-[#E6A263] py-8">
                <div className="h-12 w-12">
                  <img
                    src={basePath + '/' + data.logo}
                    alt={data.logo}
                    className="h-full object-contain"
                  />
                </div>
                <p className="w-1/2 text-[14px] laptopL:text-[16px]">{data.alias}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div
          className={`scrollbar-list flex h-[70vh] items-center justify-center rounded-lg border-4 border-[#E6A263] bg-gradient-merah-list p-3 text-white ${roundedList}`}
        >
          <p className="text-center">{notFound}</p>
        </div>
      )}
    </div>
  )
}
