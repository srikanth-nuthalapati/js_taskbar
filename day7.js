"use strict"

//reverse a String
console.log("Reverse a String using for in loop");
var str = "Hello World";
console.log("original  string: \n", str);
console.log("\nreversed  string: ");
for (var i in str){
    process.stdout.write(str[str.length - i - 1]);
}


console.log();
//find even number in array
let arr = [23,54,67,64,46,95,98];
console.log("\nEven numbers in array: ");
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}

//object
console.log();
console.log("object iteration: ");
let obj = {
    name: "John",
    age: 25,
    city: "New York",
}
for (let i in obj){
    console.log(i + ": " + obj[i]);
}
