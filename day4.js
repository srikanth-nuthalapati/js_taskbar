"use strict"

const ps = require("prompt-sync");
const prompt = ps();

console.log("task-1");
let  a = prompt("Enter a number: ");
let b = prompt("Enter another number: ");
console.log(`${a} is equal to ${b} - ${a==b}`);

console.log(`${a} is equal to ${b} - ${a===b}`);

console.log(`${a} is not equal to ${b} - ${a!=b}`);

console.log(`${a} is not equal to ${b} - ${a!==b}`);

console.log(`${a} is greater than ${b} - ${a>b}`);

console.log(`${a} is less than ${b} - ${a<b}`);

console.log(`${a} is greater than or equal to ${b} - ${a>=b}`);

console.log(`${a} is less than or equal to ${b} - ${a>=b}`);

console.log("\ntask-2");
console.log(a%2==0?"even number":"odd number");


console.log("task-3");
let age = prompt("enter age: ");
console.log(age<12?"you are a child":age>12 && age <=18?"you are a teenager":age>18 && age<64?"you are an adult":"you are senior citizen");

console.log("task-4");
let marks = prompt("enter marks: ");
let grade = marks>=90?"A grade":marks>=75?"B grade":marks>=60?"C grade":marks>=45?"D grade":"Fail";
console.log(grade);

console.log("task -5");
let temp = prompt("enter temperature: ")
let weather = temp>=30?"weather is hot":temp>=20 && temp<30?"weather is warm":"weather is cold"
console.log(weather);

