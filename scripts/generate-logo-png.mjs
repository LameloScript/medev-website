import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const svgPath = path.join(process.cwd(), 'public', 'assets', 'logo-medev-drk.svg')
const pngPath = path.join(process.cwd(), 'public', 'assets', 'logo-medev-drk.png')

const svgBuffer = fs.readFileSync(svgPath)
await sharp(svgBuffer, { density: 300 }).png({ quality: 90 }).toFile(pngPath)
console.log(pngPath)
