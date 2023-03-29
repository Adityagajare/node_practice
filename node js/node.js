// setTimeout(()=>console.log("🐰 finishes first"),1000)
// console.log("🐢 finishes second");

function countChar(str, char){
    let count=0;
    let stringlength=str.length
    for(i=0; i<stringlength; i++){
        if(str[i]===char){
            count++;
        }
    }
    return count;
}

let string="abracadabra"
let character="a"
let result=countChar(string, character)
console.log(result);