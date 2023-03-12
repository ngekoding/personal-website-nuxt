import path from 'path'
import fs from 'fs'
import recursive from 'recursive-readdir'
import sharp from 'sharp'

function ignore(file, stats) {
  return (stats.isFile() && !file.endsWith('.png'))
        || (stats.isDirectory() && path.basename(file) === 'min')
}

(async () => {
  const files = await recursive('../public/img/works', [ignore])
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const filename = path.basename(file)
    const dir = path.dirname(file)
    const destPath = path.resolve(dir, 'min')
    const destFile = path.resolve(destPath, filename)

    if (!fs.existsSync(destPath))
      fs.mkdirSync(destPath, { recursive: true })

    const metadata = await sharp(file).metadata()

    sharp(file)
      .resize(Math.round(metadata.width / 10))
      .png({
        quality: 10,
        compressionLevel: 9,
      })
      .blur()
      .toFile(destFile)
      .then(() => console.log(`${file} -> OK`))
      .catch(e => console.log(`${file} -> ERR`, e))
  }
})()
