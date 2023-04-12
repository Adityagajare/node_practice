const http=require("http")
const fs=require("fs")
const {parse}=require("querystring")
const {MongoClient}= require("mongodb")
const URL='mongodb://127.0.0.1:27017'

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
                let email=finalbody.email
                async function db(){
                    let client= await MongoClient.connect(URL)
                    console.log("db connected");
                    let db=await client.db('user')
                    let collection= await db.collection('emails')
                    let result= await collection.insertOne({email:email})
                    console.log(result);
                }
                db()
            })
        }
    }

    else{
        let url=req.url
        if(url==="/"|| url==="/home"){
            res.writeHead(200, "ok", {"content-type":"text/html"})
            fs.createReadStream("./netflix1.html", "utf-8").pipe(res)
        }
        else if(url==="/css"){
            res.writeHead(200, "ok", {"content-type":"text/css"})
            fs.createReadStream("./netflix1.css", "utf-8").pipe(res)
        }
        else{
            res.writeHead(200, "ok", {"content-type":"text/html"})
            fs.createReadStream("./error.html","utf-8").pipe(res)
        }
    }
})
.listen(4000, (err)=>{
    if(err){
        throw err
    }
    console.log("server is running on port 4000.....");
})