const express=require("express")
const mongoose=require("mongoose")
const taskRouter=require("./routes/taskRoutes")
const {engine}=require("express-handlebars")
const methodOverride=require("method-override")
let app=express()
let PORT=5000;


async function db(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Task-manager")
    console.log("MongoDB connected")
}
db()

//to use the form data
app.use(express.urlencoded({extended:false}))
app.use(methodOverride("_method"))

//inbuilt middleware
app.use(express.static("public"))

//mount template engine
app.engine("handlebars",engine())
app.set("view engine","handlebars")

// "/"-----root route in the case express
// "/task-manager"----root route in the case task-manager
//router level middleware
app.use("/task-manager", taskRouter)
// http://localhost:5000/task-manager/task

app.listen(PORT,(err)=>{
    if(err){
        throw err
    }
    console.log(`server is running on ${PORT}`);
})