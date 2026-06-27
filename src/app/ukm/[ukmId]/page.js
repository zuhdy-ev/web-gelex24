import DetailUKM from './DetailUKM'
import dataUKM from '@/data/ukm.json'

export const convertToSlug = (text) => {
  if (!text) return ''
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}

export async function generateStaticParams() {
  const ukmIds = dataUKM.map((ukm) => convertToSlug(ukm.name))
  return ukmIds.map((ukmId) => ({ ukmId }))
}

export default function Page({ params }) {
  return <DetailUKM params={params} />
}
