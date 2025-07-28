const fs = require('fs')
const unzip = require('unzipper')

fs.createReadStream('MyData.zip').pipe(unzip.Extract({ path: 'Data' })).on('close', () => console.log('File extracted.')
)