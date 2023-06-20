let {Schema,model}=require("mongoose")
const {isEmail} = require("validator")
const bcrypt=require("bcrypt")

let authSchema=new Schema({
    email:{
        type:String,
        unique:true,
        lowercase:true,
        required : [true,"email is required"],
        validate:[isEmail,"enter valid email"]
    },
    password:{
        type:String,
        required : [true,"password is required"],
        minlength: [6, "min length of character are 6"],
    }
}, {timestamps: true})

//mongoose hook
authSchema.pre("save",async function(next){
    let salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
    next()
})

//static methods
authSchema.statics.login=async function(email,password){
    let user=await this.findOne({email}).lean()
    if(user){
        let auth=await bcrypt.compare(password, user.password)
        if(auth){
            return user
        }
        throw Error("incorrect password")
    }
    throw Error("incorrect Email")
}

module.exports=model("user",authSchema)