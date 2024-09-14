"use strict"

const ps = require("prompt-sync");
const prompt = ps();

console.log("Task - 1 and - 2\n");
let str = prompt("enter a string: ");
console.log("given string: " + str);
console.log("uppercase converted string: " + str.toUpperCase());
console.log("lowercase converted string: " + str.toLowerCase());
console.log();

console.log("Task - 3\n");
console.log("given string: " + str);
let a = str.split("").reverse().join("");
console.log("reversed string: " + str.split("").reverse().join(""));
console.log();

console.log("Task - 4");
console.log("no of vowels : " + str.match(/[aeiou]/g).length);
console.log();

console.log("Task - 5\n");
let username = prompt("enter username: ");
if (username.length>=5 && username.length<= 15){
    console.log("username is vaild");
}
else {
console.log("username is not vaild");
console.log("username should contain 5 to 15 characters!");
}
console.log();

console.log("Task - 6\n");
let firstname =  prompt("enter your firstname: ");
let lastname =   prompt("enter your lastname: ");
firstname = firstname.toLowerCase();
lastname = lastname.toLowerCase();
let email = firstname.concat(".",lastname);
console.log("Email : " + email.concat("@gmail.com"));
console.log();

console.log("Task - 7\n");
let sentence = prompt("enter any sentence: ");
let words = sentence.split(" ");
console.log("no of words: " + words.length);
console.log();

console.log("Task - 8\n");
let palindrome_string = prompt("enter a string : ");
let reverse_string = palindrome_string.split("").reverse().join("");
if (palindrome_string == reverse_string){
    console.log("string is palindrome");
}
else{
    console.log("String is not a palindrome");
}
