import fs from 'fs'
import path from 'path'

export const getChildPaths = (directory: string): Array<string> =>
  fs.readdirSync(directory).map(files => path.join(directory, files))

export const concatFiles = (directory: string): string =>
  getChildPaths(directory)
    .map(p => fs.readFileSync(p, { encoding: 'utf-8' }))
    .reduce((acc, file) => `${acc}\n${file}`)
