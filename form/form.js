// const http= require("http")
// const fs=require("fs")

// http.createServer(async(req, res)=>{
//    if(req.method==="POST"){
//     if(req.headers["content-type"]==="application/x-www-form-urlencoded"){
//         let body=""
//         req.on("data", chunk=>{
//             body +=chunk;
//         })
//         req.on("end", ()=>{
//             res.writeHead(201, "okay")
//             res.end("sucessfully logged in")
//             console.log(body);
//         })
//     }

//    }
//    else
//    {
//     if(req.url==="/" || req.url==="/home"){
//         res.writeHead(200, "ok", {"content-type":"text/html"})
//         fs.createReadStream("form.html","utf-8").pipe(res)
//             }
//             else if(req.url==="/css"){
//             res.writeHead(200, "ok", {"content-type":"text/css"})
//             fs.createReadStream("form.css","utf-8").pipe(res)
//             }else{
//                 res.writeHead(200, "ok", {"content-type":"text/html"})
//                fs.createReadStream("formPageNotFound.html","utf-8").pipe(res)
//             }
//    }

// })
// .listen(4000, (err)=>{
//     if(err){
//         throw err
//     }
//     console.log("server is running on port 4000");
// })


const http=require("http")
const fs=require("fs")
const {parse}=require("querystring")
const crypto=require("crypto")



http.createServer((req, res)=>{
    if(req.method==="POST"){
        if(req.headers["content-type"]==="application/x-www-form-urlencoded"){
            let body=""
            req.on("data", chunk=>{
                body +=chunk;
            })
            req.on("end" , ()=>{
                res.writeHead(201, "ok")
                res.end("sucessfully logged in")
                let finalbody=parse(body)
                let password=finalbody.password
                let hashpassword=crypto.createHash("md5").update("password").digest("hex")
                console.log(hashpassword);
            })
        }
    }
    else{
        if(req.url==="/" || req.url==="/home"){
            res.writeHead(200, "ok", {"content-type":"text/html"})
            fs.createReadStream("form.html","utf-8").pipe(res)
        }
        else if(req.url==="/css"){
            res.writeHead(200, "ok", {"content-type":"text/css"})
            fs.createReadStream("form.css", "utf-8").pipe(res)
        }
        else{
            res.writeHead(200, "ok", {"content-type":"text/html"})
            fs.createReadStream("formPageNotFound.html", "utf-8").pipe(res)
        }
    }

})
.listen(4000, (err)=>{
    if(err){
        throw err
    }
    console.log("server is running on port 4000......");
})