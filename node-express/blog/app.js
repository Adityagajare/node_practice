if(process.env.NODE_ENV!== "production"){
    require("dotenv").config()
}

const express=require("express")
const mongoose=require("mongoose")
const blogRouter=require("./routes/blogRouter")
const methodOverride=require("method-override")
let app=express()

//register template engine
app.set("view engine", "ejs")

//mongodb connected
async function db(){
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("mongodb connected")
}
db()

//Inbuilt middleware
app.use(express.urlencoded({extended:false}))

app.use(methodOverride("_method"))

app.use(express.static("public"))

//route middleware
app.use(blogRouter)

//error page middleware
app.use((req,res)=>{
    res.render("404")
})

app.listen(process.env.PORT,(err)=>{
    if(err){
        throw err
    }
    console.log(`the server is running on ${process.env.PORT}`)
})