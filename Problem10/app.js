console.log("__dirname:", __dirname);

console.log("__filename:", __filename);

setTimeout(() => {
    console.log("This message is delayed using setTimeout.");
}, 1000);

let count = 0;
const interval = setInterval(() => {
    console.log("setInterval count:", ++count);
    if (count === 3) clearInterval(interval);
}, 500);

console.log("Process platform:", process.platform);
console.log("Current working dir:", process.cwd());
console.log("Memory usage:", process.memoryUsage());

const buffer = Buffer.from("Hello Node.js!");
console.log("Buffer data:", buffer.toString());

global.customVar = "I am a global variable!";
console.log("global.customVar:", global.customVar);
