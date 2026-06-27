import DetailKomunitas from './DetailKomunitas'
import dataKomunitas from '@/data/komunitas.json'

export const convertToSlug = (text) => {
  if (!text) return ''
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}

export async function generateStaticParams() {
  const komunitasIds = dataKomunitas.map((komunitas) => convertToSlug(komunitas.name))
  return komunitasIds.map((komunitasId) => ({ komunitasId }))
}

export default function Page({ params }) {
  return <DetailKomunitas params={params} />
}
