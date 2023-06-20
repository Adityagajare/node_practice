const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const taskRouter = require("./routes/taskRoutes")

let app=express()

async function db(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Task-mern")
    console.log("db connected")
}
db()

app.use(cors())
app.use(express.json())
app.use("/task-manager", taskRouter)

app.listen(5000, (err)=>{
    if(err)console.log(err)
    console.log("server is running on port 5000")
})