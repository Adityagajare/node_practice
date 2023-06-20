const express=require("express")
const mongoose=require("mongoose")
const authRouter=require("./routes/authRouter")
const cookieParser=require("cookie-parser")
const methodOverride=require("method-override")
const { checkUser } = require("./middlewares/requireAuth")

let app=express()
let PORT=5000

//register template engine
app.set("view engine", "ejs")

//in built middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(express.json())

//middleware
app.use(cookieParser())

async function db(){
    await mongoose.connect("mongodb://127.0.0.1:27017/AuthDb")
    console.log("Connected to MongoDB")
}
db()



// app.get("/",(req,res)=>{
//     res.send("this is home")
// })
app.use(methodOverride("_method"))


app.use(checkUser)

//route middleware
app.use(authRouter)

//error page middleware
// app.use((req,res)=>{
//     res.render("pnf")
// })

app.listen(PORT, (err)=>{
    if(err) console.log(err)
    else console.log(`Server is running on port ${PORT}`)
})




//cookies

// app.get("/set-cookie",(req,res)=>{
//     res.cookie("username","ironman",{
//         maxAge:150000,
//         httpOnly:true,
//         secure:true
//     })
//     res.send("cookie set")
// })

// app.get("/get-cookie",(req,res)=>{
//     console.log(req.cookies)
//     res.send(req.cookies)
// })

// app.get("/delete",(req,res)=>{
//     res.clearCookie("username")
//     res.send("cookie cleared")
// })