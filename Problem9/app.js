const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'MyFiles');
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log('Directory created: MyFiles');
}

const filePath = path.join(dirPath, 'Data.txt');

// 1. Write a file
fs.writeFileSync(filePath, 'Hello, NodeJs.');
console.log('File written successfully.');

// 2. Read file content
const data = fs.readFileSync(filePath, 'utf-8');
console.log('File content:', data);

// 3. Append more content
fs.appendFileSync(filePath, '\nAdding more lines to the file.');
console.log('MERN Stack.');

// 4. Rename the file
const newFilePath = path.join(dirPath, 'NewData.txt');
fs.renameSync(filePath, newFilePath);
console.log('File renamed.');

// 5. Check if file exists
if (fs.existsSync(newFilePath)) {
    console.log('Renamed file exists.');
}

// 6. Delete the file
fs.unlinkSync(newFilePath);
console.log('File deleted.');
