let mongoose=require("mongoose")

// schema, stores data in db, let's us have validation for the data

let TaskSchema=new mongoose.Schema({
    task:{
        type:String,
        required :true,
        trim:true,
        set: function (value) {
            // Remove white spaces using the replace() method with a regular expression
            return value.replace(/\s+/g, ' ');
          }
    }
},{timestamps:true})

module.exports=mongoose.model("task", TaskSchema)     // "task" is collection name