//type 1
// module.exports.a=10;
// module.exports.b=20;
// module.exports.add=()=>{
//     console.log("hello");
// }


// type 2

// const a=20;
// const b=30;
// const add=()=>{
//     console.log("hello");
// }
// module.exports={
//     a:a,
//     b:b,
//     add:add
// }


//example occurance of 'A' in area of circle

const area="pi*r*r"
const character="r"
const result=countChar(area, character)
function countChar(arr, char){
    let count=0;
    let stringlength=arr.length
    for(i=0; i<stringlength; i++){
        if(arr[i]===char){
            count++;
        }
    }
    return count;
}

module.export={
    countChar
}