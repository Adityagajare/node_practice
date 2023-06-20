const {Schema,model}=require("mongoose")

let taskSchema=new Schema({
    task:String,
    description:String,
    completed:Boolean,
})

module.exports=model("task",taskSchema)