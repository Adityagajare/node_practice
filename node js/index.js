// class Car{
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }
//     age(){
//         let date=new Date()
//         let currentyear=date.getFullYear()
//         return `age of our car is ${currentyear-this.year}`;
//     }
// }
// let car1=new Car("ford",1982)
// console.log(car1.age());




// let something = process.argv[2]
// if(something==="learn")
// {
//     console.log("learning is fun");
// }
// else{
//     console.log("we will go play");
// }
// console.log(process.argv);


//globals in javascript
// console.log(window);
// console.log(document);
// console.log(Math);


//globals in node js
// console.log(__dirname);
// console.log(__filename);
// console.log(exports);
// console.log(module);
// console.log(require());
// console.log(BroadcastChannel);
// console.log(console);



let students=[
    {
        stdname:"Aditya",
        stdId:101,
        percentage:88,
        age:27
    },
    {
        stdname:"Abhi",
        stdId:102,
        percentage:68,
        age:25
    },
    {
        stdname:"yuvi",
        stdId:103,
        percentage:75,
        age:20
    },
    {
        stdname:"Raj",
        stdId:104,
        percentage:55,
        age:26
    },
    {
        stdname:"kiran",
        stdId:105,
        percentage:78,
        age:30
    }
]


// students.forEach(function(x){
//     if(x.percentage>=70){
//   x.scholorship="available";
//     }
//     else{
//         x.scholorship="not-available";
//     }
// })
// console.log(students);







let std1=students.map((x)=>{
    if(x.percentage>=70){
        x.scholorship="available";
    }
    else{
        x.scholorship="not-available";
    }
    return x;
})
console.log(std1);









