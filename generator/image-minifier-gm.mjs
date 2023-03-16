import path from 'path'
import fs from 'fs'
import gm from 'gm'
import recursive from 'recursive-readdir'

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

    gm.subClass({ imageMagick: '7+' })(file)
      .resize(3, 3)
      .write(destFile, (e) => {
        if (!e)
          console.log(`${file} -> OK`)
        else console.log(`${file} -> ERR`, e)
      })
  }
})()
