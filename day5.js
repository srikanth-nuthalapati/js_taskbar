"use strict"

const ps = require("prompt-sync");
const prompt = ps();



console.log("task-1");
let day = prompt("enter day: ")
switch(day){
    case "monday":
        console.log('“Start your week strong!” for Monday.');
        break;
    case "tuesday":
        console.log('“Keep going!” for Tuesday.');
        break;
    case "wednesday":
        console.log('“Halfway there!” for Wednesday.');
        break;
    case "thursday":
        console.log('“Almost there!” for Thursday.');
        break;
    case "friday":
        console.log('“Happy Friday!” for Friday.');
        break;
    case "saturday":
        console.log('“Enjoy your weekend!” for Saturday and Sunday.');
        break;
    default:
        console.log('“Invalid day”');
}

console.log("\ntask -2");
let light = prompt("light color: ")
switch(light){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get Ready");
        break;
    case "green":
        console.log("Go");
        break;  
}

console.log("\ntask -3");
let price = prompt("enter price: ");
if(price >= 50 && price <= 100){
    console.log("5% discount for you");
}
else if(price > 100 && price <= 200){
    console.log("10% discount for you");
}
else if(price > 200){
    console.log("15% discount for you");
}
else{
    console.log("no discount for you");
}


console.log("\ntask -4");
let order = prompt("order please: ")
switch(order){
    case "Biriyani":
        console.log("Rs. 150");
        break;
    case "shawarma":
        console.log("Rs. 120");
        break;
    case "Fried rice":
        console.log("RS. 100");
        break;
    case "veg pula":
        console.log("Rs. 60");
        break;
    default:
        console.log("Sorry we don't have that..");
}
        

console.log("\ntask -5");
console.log("Basic  calculator");
let num1 = +prompt("enter first number: ");
let num2 = +prompt("enter second number: ");
let operator = prompt("enter operator: ");
switch(operator){
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    default:
        console.log("Invalid operator");
}


console.log("\ntask -6");

switch(operator){
    case "+":
        let res = num1 + num2;
        console.log(res);
}
