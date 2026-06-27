import { dataUKM, dataPertanyaan } from '@/data/data'
import calculateStandardDeviation from './calculateStandardDeviation'

function calculateHasil(daftarJawaban) {
  const hasil = [...dataUKM]

  dataPertanyaan.forEach((question) => {
    const jawaban = daftarJawaban[question.id]
    if (jawaban) {
      question.jawaban.forEach((answer) => {
        const indexUKM = hasil.findIndex((ukm) => ukm.id === answer.ukmId)
        const bobotJawaban = answer.daftarJawaban.find((ans) => ans.tipe === jawaban)
        hasil[indexUKM].totalBobot.push(bobotJawaban ? bobotJawaban.bobot : 0)
      })
    }
  })

  hasil.forEach((ukm) => {
    ukm.sumTotalBobot = ukm.totalBobot.reduce((a, b) => a + b, 0)
    ukm.stdevTotalBobot = calculateStandardDeviation(ukm.totalBobot)
  })

    hasil.sort((a, b) => {
        if (b.sumTotalBobot === a.sumTotalBobot) {
            if (a.stdevTotalBobot === b.stdevTotalBobot) {
                return Math.random() - 0.5;
            } else {
                return a.stdevTotalBobot - b.stdevTotalBobot;
            }
        } else {
            return b.sumTotalBobot - a.sumTotalBobot;
        }
    });

  return hasil
}

export default calculateHasil
