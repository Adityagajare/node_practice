// const http=require("http")
// const fs=require("fs/promises")

// let server=http.createServer(async(req, res)=>{
//     let url=req.url
//     if(url==="/" || url==="/home"){
//        res.statusCode=300
//        res.statusMessage="everything is ok"
//        res.setHeader("content-type", "text/html")
//        let html= await fs.readFile("./index.html", "utf-8")
//        res.end(html)
//     }
//     else{
//         res.end("this page not found")
//     }
// })

// server.listen(4000, (err)=>{
//     if(err){
//         throw err
//     }
//     else{
//     console.log("server is running on port 4000");
//     }
// })



// const http=require("http")
// const fs=require("fs")

// let server=http.createServer(async(req,res)=>{
//     let url=req.url
//     if(url==="/" || url==="/home"){
//         res.writeHead(200, "ok", {"content-type":"text/html"})
//        fs.createReadStream("index.html","utf-8").pipe(res)
//     }else if(url==="/css"){
//         res.writeHead(200, "ok", {"content-type":"text/css"})
//         fs.createReadStream("index.css","utf-8").pipe(res)
//     }else if(url==="/image"){
//         res.writeHead(200, "ok", {"content-type":"image/jpg"})
//         fs.createReadStream("pagenotfound.jpg").pipe(res)
//     }
//     else if(url==="/video"){
//         res.writeHead(200, "ok", {"content-type":"video/mp4"})
//         fs.createReadStream("./sairat.mp4").pipe(res)
//     }
//     else if(url==="/audio"){
//         res.writeHead(200, "ok", {"content-type":"audio/mp4"})
//         fs.createReadStream("Disere.mp3").pipe(res)
//     }
//     else{
//         res.writeHead(200, "ok", {"content-type":"text/html"})
//         fs.createReadStream("pagenotfound.html","utf-8").pipe(res)
//     }
// })
// .listen(4000, (err)=>{
//     if(err)
//         throw err
//         console.log("server is running on port 4000...");
// })




//Using switch case

// const http=require("http")
// const fs=require("fs")

// let server=http.createServer(async(req,res)=>{
//     let url=req.url
//     switch (url) {
//         case "/":{
//             res.writeHead(200, "ok", {"content-type":"text/html"})
//             fs.createReadStream("index.html","utf-8").pipe(res)
//         }
//         break;
//         case "/home":{
//             res.writeHead(200, "ok", {"content-type":"text/html"})
//             fs.createReadStream("index.html","utf-8").pipe(res)
//         }
//         break;
//         case "/css":{
//             res.writeHead(200, "ok", {"content-type":"text/css"})
//             fs.createReadStream("index.css","utf-8").pipe(res)
//         }
//         break;
//         case "/image":{
//             res.writeHead(200, "ok", {"content-type":"image/jpg"})
//             fs.createReadStream("pagenotfound.jpg").pipe(res)
//         }
//         break;
//         case "/video":{
//             res.writeHead(200, "ok", {"content-type":"video/mp4"})
//             fs.createReadStream("./sairat.mp4").pipe(res)
//         }
//         break;
//         case "/audio":{
//             res.writeHead(200, "ok", {"content-type":"audio/mp4"})
//             fs.createReadStream("Disere.mp3").pipe(res)
//         }
//         break;
//         default:{
//             res.writeHead(200, "ok", {"content-type":"text/html"})
//             fs.createReadStream("pagenotfound.html","utf-8").pipe(res)
//         }
//         break;
//     }
// })
// .listen(4000, (err)=>{
//     if(err)
//         throw err
//         console.log("server is running on port 4000...");
// })


//Using switch case

const http=require("http")
const fs=require("fs")

http.createServer((req,res)=>{
    let pathToFile=""
    switch(req.url){
        case "/":{
            pathToFile +="index.html"
        }break
        case "/css":{
            pathToFile +="index.css"
            res.writeHead(200, "ok", {"content-type":"text/css"})
        }break
        case "/image" : {
            pathToFile +="pagenotfound.jpg"
            res.writeHead(200, "ok", {"content-type":"image/jpg"})
        }break
        case "/video" : {
            pathToFile +="./sairat.mp4"
            res.writeHead(200, "ok", {"content-type":"video/mp4"})
        }break
        case "/audio" :{
            pathToFile +="Disere.mp3"
            res.writeHead(200, "ok", {"content-type":"audio/mp3"})
        }break
        default :{
            pathToFile +="pagenotfound.html"
            res.writeHead(200, "ok", {"content-type":"text/html"})
        }break
    }
    fs.createReadStream(pathToFile).pipe(res)
})
.listen(4000, (err)=>{
    if(err)
        throw err
        console.log("server is running on port 4000...");
})