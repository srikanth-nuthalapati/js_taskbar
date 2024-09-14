"use strict"

const ps = require("prompt-sync");
const prompt = ps();


//task -1
console.log("Task -1 :-");
console.log("printing numbers from 1 to 10 using for loop");

for (let i=1;i<=10;i++){
    console.log(i);
}

//task -2
console.log("\nTask -2 :-");
console.log("printing even numbers from 1 to 20 using for loop");
for (let i = 2; i<=20; i += 2) {
    console.log(i);
}

//task -3
console.log("\nTask -3 :-");
console.log("printing multiples of 5 upto 50 using for loop");
console.log("multiples of 5 upto 50 for: ");

for (let i=1;i<=50;i++){
    if (i%5==0){
        console.log(i);
    }
}

//task -4
console.log("\nTask -4 :-");
console.log("printing sum of 1 to 100 using while loop\n");
let sum = 0;
for (let i=1;i<=100;i++){
    sum += i;
}
console.log("sum of 1 to 100 is: ",sum);

//task -5
console.log("\nTask -5 :-");
console.log("printing factorial of given number using for loop\n");
let num = prompt("enter number to find factorial: ");
let fact = 1;
for (let i = 1; i <= num; i++) {
    fact *= i;
}
console.log("\nfactorial of given number is : " + fact);


//task -6
console.log("\nTask -6 :-");
console.log("printing numbers 1 to 10 in reverse order\n");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//task -7
console.log("\nTask -7 :-");
console.log("printing alphabet from A to Z using for loop\n");
for (let i=65;i<=90;i++){
    console.log(String.fromCharCode(i));
}

//task -8
console.log("\nTask -8 :-");
console.log("printing mul table from 1 to 5 using for loop\n");
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + (i * j));
    }
    console.log();
    
}