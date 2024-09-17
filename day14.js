let movies = ["og","salaar","pk","devara"];
console.log("for loop : ");
for(let i=0;i<movies.length;i++){
    process.stdout.write(movies[i] + " ");
}
console.log();

console.log("\nfor in loop : ");
for(let i in movies){
    process.stdout.write(movies[i] + " ");
}
console.log();

console.log("\nfor of loop : ");
for(let i of movies){
    process.stdout.write(i + " ");
}
console.log();


movies.shift();
movies.pop();
console.log("\nAfter removing first and last element : ");
console.log(movies);
console.log();


let Name = ['s','r','i','k','a','n','t','h'];
let reversedName = [];
for (let i=Name.length-1;i>=0;i--){
    reversedName.push(Name[i]);
}
console.log(reversedName);
console.log();


let arr = [12,3,5,6,22,56,29];
let evenArr = [];
let evenArrSum = 0;
let oddArrSum = 0;
let oddArr = [];
for(let i in arr){
    if(arr[i]%2==0){
        evenArr.push(arr[i]);
        evenArrSum += arr[i];
    }
    else{
        oddArr.push(arr[i]);
        oddArrSum += arr[i];
    }
}
console.log("original array: " + arr);
console.log("Even numbers array: " + evenArr);
console.log("Even array sum: " + evenArrSum);
console.log("Odd numbers array: " + oddArr);
console.log("Odd array sum: " + oddArrSum);
console.log();


let heteroArr = ["apple","bananna","mango",3,4,5,"true",{peru:"object"}];
console.log("original array : " + heteroArr);
let numArr = [];
let strArr = [];
let objArr = [];
let boolArr = [];

for(let i of heteroArr){
    if(typeof i === 'number'){
        numArr.push(i);
    }
    else if(typeof i === 'string'){
        strArr.push(i);
    }
    else if(typeof i === 'object'){
        objArr.push(i);
    }
    else{
        boolArr.push(i);
    }
}
console.log("number array: " + numArr);
console.log("string array: " + strArr);
console.log("object array: " + objArr);
console.log("boolean array: " + boolArr);