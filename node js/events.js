const EventEmitter = require("events")

let student= new EventEmitter()

//observer 1 - parents
student.on("result distinction", ()=>{
    console.log("we are happy");
})
//observer 1 - friends
student.on("result distinction", ()=>{
    console.log("careless");
})
//observer 1 - relatives
student.on("result distinction", ()=>{
    console.log("sad");
})

student.emit("result distinction")