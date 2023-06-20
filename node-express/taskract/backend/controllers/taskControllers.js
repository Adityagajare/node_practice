const Task=require("../models/Task")

const getTasks=async (req,res)=>{
    try {
        let tasks=await Task.find().lean()
        res.status(200).json(tasks)
    } catch (error) {
        console.log(error)
    }
}

const postTask=async (req,res)=>{
    let {task,description,completed}=req.body
    try {
        let payload={
            task,
            description,
            completed
        }
        await Task.create(payload)
        res.status(201).json({
            message:"task created"
        })
    } catch (error) {
        console.log(error)
    }
}

const getTask=async (req,res)=>{
    let id=req.params.id
    try {
        let task=await Task.findById(id).lean()
        res.status(200).json(task)
    } catch (error) {
        console.log(error)
    }
}

const updateTask=async (req,res)=>{
    let {task,description,completed}=req.body
    let id=req.params.id
    try {
        let payload={
            task,
            description,
            completed
        }
        await Task.updateOne({_id:id},{$set:payload})
        res.status(201).json({
            message:"task updated"
        })
    } catch (error) {
        console.log(error)
    }
}

const deleteTask=async (req,res)=>{
    let id=req.params.id
    try {
        await Task.deleteOne({_id:id})
        res.status(200).json({
            message:"task deleted"
        })
    } catch (error) {
        console.log(error)
    }
}
module.exports={
    getTasks,getTask,postTask,updateTask,deleteTask
}