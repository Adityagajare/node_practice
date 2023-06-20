const express=require("express")
const { getTasks, postTask, getTask, updateTask, deleteTask } = require("../controllers/taskControllers")

let taskRouter=express.Router()

taskRouter.get("/task",getTasks)
taskRouter.post("/task",postTask)
taskRouter.get("/task/:id",getTask)
taskRouter.put("/task/:id",updateTask)
taskRouter.delete("/task/:id",deleteTask)


module.exports=taskRouter