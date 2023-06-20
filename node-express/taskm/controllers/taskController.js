const Task=require("../models/Task")

const getTasks=async(req,res)=>{
    try{
        let tasks=await Task.find().lean()
        res.status(200).render("home",{tasks})
    }
    catch (error){
        res.status(404).json({
            message:"No task added"
        })
    }
}

// const postTask=async(req,res)=>{
//     try {
//         let {task}=req.body
//         const duplicate= await Task.findOne({task}).lean()
//         if (duplicate) {
//             res.json({
//                 message:"task is already present"
//             })
//         }
//         else{
//             await Task.create({task:task})
//             res.redirect("/task-manager/task")
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

const postTask=async(req,res)=>{
    try {
        let {task}=req.body
        const duplicate= await Task.findOne({task}).lean()
        if (duplicate===null) {
            console.log(req.body);
        await Task.create({task:task})
        res.redirect("/task-manager/task")
        }
        else{
            res.send('<script>alert("task is already present"); window.location.href="/task-manager/task"</script>')
        }
    } catch (error) {
        console.log(error);
    }
}



const getTask=async(req,res)=>{
    try{
        let id=req.params.id
        const task=await Task.findOne({_id:id}).lean()
        console.log(task);
        res.status(200).render("update",{task})
    }
    catch (error){
        res.status(404).json({
            message:"No task added"
        })
}
}
const updateTask=async(req,res)=>{
    try{
        let id=req.params.id
        let updateTask=req.body.task
        await Task.updateOne({_id:id},{$set:{task:updateTask}})
        res.status(302).redirect("/task-manager/task")
    }
    catch (error){
        res.status(404).json({
            message:"No task added"
        })
}
}

const deleteTask=async(req,res)=>{
    try{
        let id=req.params.id
        await Task.deleteOne({_id:id})
        res.status(302).redirect("/task-manager/task")
    }
    catch (error){
        console.log(error)
}
}

module.exports={
    getTask,
    postTask,
    getTasks,
    updateTask,
    deleteTask
}