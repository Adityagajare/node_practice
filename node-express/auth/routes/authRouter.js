const express= require("express")
const User=require("../models/Auth")
let jwt=require("jsonwebtoken");
const {requireAuth} = require("../middlewares/requireAuth");
let authRouter=express.Router()


function handleError(err){
    console.log(err.message,err.code);
    let errors={email:"",password:""}

    if(err.code===11000){
        errors["email"]="email already exists";
        return errors;
    }
    if(err.message==="incorrect Email"){
        errors.email="that Email doesn't exist"
    }
    if(err.message==="incorrect password"){
        errors.password="that password is not correct"
    }

    if(err.message.includes("user validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message;
        })
    }
    return errors;
}

let maxAge=3*24*60*60
function createToken(id){
    return jwt.sign({id},"topsecret",{
        expiresIn:maxAge
    })
}

authRouter.get('/secret',requireAuth,(req,res)=>{
    res.render("secret")
})

authRouter.get('/',(req,res)=>{
    res.render("home")
})

authRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
        let user=await User.login(email,password)
        let token=createToken(user._id)
        res.cookie("jwt",token,{
            maxAge:maxAge*1000,
            httpOnly:true
        })
        res.status(201).json(user)
    } catch (error) {
        let errors=handleError(error)
        res.status(400).json({errors})

    }
})


authRouter.get("/login",(req,res)=>{
    res.render("login")
})

authRouter.get("/signup",(req,res)=>{
    res.render("signup")
})

authRouter.post("/signup",async(req,res)=>{
    const {email,password}=req.body
    try {
        let user=await User.create({email,password})
        // let token=createToken(user._id)
        // res.cookie("jwt",token,{
        //     maxAge:maxAge*1000,
        //     httpOnly:true
        // })
        res.status(201).json(user)
    } catch (err) {
        console.log(error)
        res.send("user not created")
        let errors=handleError(err)
        res.status(400).json({errors})
    }
})


authRouter.get("/logout", (req,res)=>{
    try{
        res.cookie("jwt", "",{
            maxAge:1
        })
        res.redirect("/login")
    }catch (error){
        res.status(400).send("unable to logout")
    }
})

module.exports=authRouter;