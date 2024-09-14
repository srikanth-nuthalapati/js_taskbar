"use strict"

const ps = require("prompt-sync");
const prompt = ps();

//task 1 ->
console.log("Task -1");
function greet(name){
    console.log(`Hello ${name}!`);
}
greet("Bob")
greet("BOB with Captial")

//task 2 ->
console.log("\nTask -2");
function sum(a,b){
    console.log(`${a} + ${b} = ${a+b}`);
}

sum(2,5);
sum(-1,6);

//task 3 ->
console.log("\nTask -3");
function sqr(a){
    console.log(`${a} * ${a} = ${a*a}`);
}
sqr(5);
sqr(7);

//task 4 ->
console.log("\nTask -4");
function avg(arr){
    let sum = 0;
    for (let i of arr){
        sum += i;
    }
    console.log(arr);
    console.log("Average of given array is " + (sum/arr.length));
}
avg([2,5,8]);
avg([10,20,30]);

//task 5 ->
console.log("\nTask -5");
var flag = false;
function vowel(str){
   str = str.toLowerCase();
    for( let i in str){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            // flag = true;
            return "it has vowels."
        }
    }
    return "it has no vowels.";
}
console.log(vowel("Hello World!"));

console.log(vowel("All"));


//task 6 ->
console.log("\nTask -6");
function tempConv(temp,scale){
    if(scale == 'f'){
        console.log("temperature in fahrehnheit is : ");
        return temp * 9/5 + 32;
    }
    else if(scale == 'c'){
        console.log("temperature in celsius is : ");
        return (temp - 32) * 5/9;
    }
    else{
        return "Invalid scale.";
    }
}
console.log(tempConv(50,'c'));