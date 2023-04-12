const http=require("http")

// //create server
// let server=http.createServer((req, res)=>{
//     res.end("Aditya gajare")
// })

// //listen to the server on the specified port
// server.listen(4000, (err)=>{
//     console.log("server is running on port 4000");
// })



// Routing in node js

let server=http.createServer((req, res)=>{
    let url=req.url
    if(url==="/" || url==="/home"){
        res.end("this is home")
    }
    else{
        res.end("this page not found")
    }
})

server.listen(4000, (err)=>{
    if(err){
        throw err
    }
    else{
    console.log("server is running on port 4000");
    }
})