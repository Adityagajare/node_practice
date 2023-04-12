let http = require("http")

http.createServer((req, res)=>{
    let employees=[
        {
            "ename" : "Aditya",
            "sal" : 30000
        },
        {
            "ename" : "Arun",
            "sal" : 25000
        }
    ]
    let data=JSON.stringify(employees)
    res.writeHead(200, "ok", {"content-type": "application/json"})
    res.end(data)
}).listen(4000,(err)=>{
    if(err){
        throw err
    }
    console.log("server is running on port 4000...");
})
