const fs = require('fs')
const archiver = require('archiver')

const output = fs.createWriteStream('MyData.zip')
const zipFile = archiver('zip', {zlib:{level:7}})

output.on('close', () => {
  console.log(`Zip complete! Total bytes: ${zipFile.pointer()} bytes`);
});

zipFile.on('error', (err) => {
  throw err;
});

zipFile.pipe(output);

zipFile.directory('Data/', false);

zipFile.finalize();
