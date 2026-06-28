/**
 * Script untuk otomatis fix width={0} height={0} pada komponen <Image> Next.js
 * dengan resolusi asli gambar, berdasarkan data dari image-dimensions.json.
 *
 * CARA PAKAI:
 * 1. Letakkan file ini di root project (sejajar dengan folder src dan public)
 * 2. Letakkan juga image-dimensions.json di root project yang sama
 * 3. Jalankan: node fix-image-dimensions.js
 * 4. Cek laporan di akhir, lalu review perubahan dengan `git diff` sebelum commit
 *
 * AMAN: Script ini hanya mengubah pasangan width={0} height={0} yang persis
 * mengikuti sebuah `src="..."` dengan string literal di atasnya dalam blok <Image>.
 * Jika src berupa variable/template literal dinamis, baris itu di-skip dan dilaporkan.
 */

const fs = require('fs')
const path = require('path')

const PROJECT_ROOT = process.cwd()
const SRC_DIR = path.join(PROJECT_ROOT, 'src')
const DIMENSIONS_FILE = path.join(PROJECT_ROOT, 'image-dimensions.json')

// 1. Load database dimensi gambar
if (!fs.existsSync(DIMENSIONS_FILE)) {
  console.error(`File tidak ditemukan: ${DIMENSIONS_FILE}`)
  console.error('Pastikan image-dimensions.json ada di root project.')
  process.exit(1)
}

// PowerShell's Out-File -Encoding utf8 menulis BOM (Byte Order Mark) di awal file,
// yang membuat JSON.parse gagal. Strip BOM sebelum parsing.
let dimensionsRaw = fs.readFileSync(DIMENSIONS_FILE, 'utf8')
if (dimensionsRaw.charCodeAt(0) === 0xfeff) {
  dimensionsRaw = dimensionsRaw.slice(1)
}
const rawDimensions = JSON.parse(dimensionsRaw)
const dimensionMap = new Map()
for (const item of rawDimensions) {
  // Normalisasi path supaya konsisten (selalu mulai dengan /)
  const normalizedPath = item.path.startsWith('/') ? item.path : '/' + item.path
  dimensionMap.set(normalizedPath, { width: item.width, height: item.height })
}

console.log(`Loaded ${dimensionMap.size} entri dimensi gambar.\n`)

// 2. Cari semua file .js/.jsx di src
function getAllFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      getAllFiles(fullPath, fileList)
    } else if (entry.isFile() && /\.(js|jsx)$/.test(entry.name)) {
      fileList.push(fullPath)
    }
  }
  return fileList
}

const allFiles = getAllFiles(SRC_DIR)

// 3. Regex untuk menemukan blok <Image ... src="..." ... width={0} ... height={0} ... />
//    Kita cari blok <Image> secara non-greedy, lalu di dalam blok itu cari src, width={0}, height={0}
const imageBlockRegex = /<Image\b[^>]*?\/?>/gs

let totalFixed = 0
let totalSkipped = 0
const skippedDetails = []
const fixedDetails = []

for (const filePath of allFiles) {
  let content = fs.readFileSync(filePath, 'utf8')
  let fileChanged = false

  content = content.replace(imageBlockRegex, (block) => {
    // Hanya proses blok yang punya width={0} dan height={0}
    const hasWidth0 = /width=\{0\}/.test(block)
    const hasHeight0 = /height=\{0\}/.test(block)
    if (!hasWidth0 || !hasHeight0) return block

    // Ekstrak src="..." (string literal)
    const srcMatch = block.match(/src=["']([^"']+)["']/)
    if (!srcMatch) {
      totalSkipped++
      skippedDetails.push(`${filePath}: src dinamis/tidak ditemukan dalam blok Image`)
      return block
    }

    const srcValue = srcMatch[1]
    const dims = dimensionMap.get(srcValue)
    if (!dims) {
      totalSkipped++
      skippedDetails.push(`${filePath}: src="${srcValue}" tidak ada di image-dimensions.json`)
      return block
    }

    // Replace width={0} dan height={0} dengan nilai asli
    let newBlock = block
      .replace(/width=\{0\}/, `width={${dims.width}}`)
      .replace(/height=\{0\}/, `height={${dims.height}}`)

    totalFixed++
    fixedDetails.push(`${filePath}: src="${srcValue}" -> width={${dims.width}} height={${dims.height}}`)
    fileChanged = true
    return newBlock
  })

  if (fileChanged) {
    fs.writeFileSync(filePath, content, 'utf8')
  }
}

// 4. Laporan
console.log('=== HASIL FIX ===')
console.log(`Berhasil di-fix: ${totalFixed}`)
console.log(`Di-skip: ${totalSkipped}\n`)

if (fixedDetails.length > 0) {
  console.log('--- Detail yang berhasil di-fix ---')
  fixedDetails.forEach((d) => console.log('  ' + d))
  console.log('')
}

if (skippedDetails.length > 0) {
  console.log('--- Detail yang di-skip (perlu cek manual) ---')
  skippedDetails.forEach((d) => console.log('  ' + d))
  console.log('')
}

console.log('Selesai. Jalankan `git diff` untuk review perubahan sebelum commit.')
