const fs=require("fs/promises")

// fs.writeFile("test.txt", "we are writing something").then(()=>{
//     console.log("file written");
// }).catch((err)=>{
//     console.log(err);
// })


// 2.read file
// fs.readFile("./test.txt","utf-8").then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// 3. update

// fs.readFile("./test.txt","utf-8").then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })
// fs.appendFile("test.txt","\n hello").then((data)=>{
//     console.log("file appended");
// }).catch((err)=>{
//     console.log(err);
// })

// fs.unlink("test.txt").then(()=>{
//     console.log("we deleted the file");
// }).catch((err)=>{
//     console.log(err);
// })




//async and await

// 1. write

// async function write(){
//     await fs.writeFile("test.txt", "we are writing something")
//     console.log("file written");
// }
// write()

//2. read

// async function read(){
//     let data=await fs.readFile("test.txt", "utf-8")
//     console.log(data);
// }
// read()

// 3. append

// async function append(){
//     fs.appendFile("test.txt","\n hello")
//     console.log("text added");
// }
// append()

//4. unlink

async function unlink(){
    await fs.unlink("test.txt")
    console.log("file deleted");
}
unlink()