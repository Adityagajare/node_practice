// const fs=require("fs")

// fs.readFile("./demo1.txt", "utf-8", (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         fs.writeFile("write.txt", `${data}`, ()=>{
//             console.log("file read and same data is used to write");
//         })
//     }
// })


const fs=require("fs")

// fs.readFile("./demo1.txt", "utf-8", (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         fs.writeFile("write.txt", `${data}`, ()=>{
//             console.log("file read and same data is used to write");

//             fs.appendFile("write.txt", `\nim appending data`, ()=>{
//                 console.log("im appending some data");

//                 fs.unlink("./write.txt", ()=>{
//                     console.log("file deleted");
//                 })
//             })
//         })
//     }
// })


