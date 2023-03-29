const EventEmitter = require("events")

let student= new EventEmitter()

//observer 1 - parents
student.on("result",(grade)=>{
    if(grade==="distinction"){
    console.log("we are happy");
    }
    else{
        console.log("we are sad");
    }
})
//observer 1 - friends
student.on("result",(grade)=>{
    if(grade==="distinction"){
    console.log("we are least bother");
    }
    else{
        console.log("we are least bother");
    }
})
//observer 1 - relatives
student.on("result",(grade)=>{
    if(grade==="distinction"){
    console.log("we are sad");
    }
    else{
        console.log("we are happy");
    }
})

student.emit("result","distinction")