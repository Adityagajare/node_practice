var numArray = [22,23,1,100,50,20];
for (var i = 0; i < numArray.length; i++) {
    var target = numArray[i];
    for (var j = i - 1; j >= 0 && (numArray[j] > target); j--) {
        numArray[j+1] = numArray[j];
    }
    numArray[j+1] = target
}
console.log(numArray);
