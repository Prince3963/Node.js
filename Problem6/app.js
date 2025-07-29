const fs = require('fs')
const { promisify } = require('util')

const unlink = promisify(fs.unlink)

unlink('MyData.txt').then(() => console.log('File deleted.')).catch((err) => console.log('File not found:- ' + err)
)