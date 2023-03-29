const fs=require("fs")


// 1. Read stream

// let readStream = fs.createReadStream("demo1.txt", "utf-8")
// //readStream is a instance of event emitter

// readStream.on("data", (chunk)=>{
//     console.log(".....................................new chunk...............................");
//     console.log(chunk);
// })



// 2. write Stream

// let readStream = fs.createReadStream("demo1.txt", "utf-8")
// let writeStream= fs.createWriteStream("hello.txt")

// writeStream.write("hello im writing something", ()=>{
//     console.log("file written");
// })


// 3. duplex stream

let readStream = fs.createReadStream("demo1.txt", "utf-8")
let writeStream= fs.createWriteStream("hello.txt")

readStream.pipe(writeStream)