let arr1 = ["cricket","vollyball","chess"];
console.log("arr1: " + arr1);
let arr2 = ["watching reels","roaming outside","leetcoding"];
console.log("arr2: " + arr2);
console.log("merged array: " +  arr1.concat(arr2))
console.log();

let arr3 = [1,2,3,4,5,6,7,8,9,10];
console.log("before splicing: " + arr3);
arr3.splice(4,3,40,50,60);
console.log("after splicing: " + arr3);
console.log();

let arr4 = ["monady","tuesday","wednesday","thursday","friday","saturday","sunday"];
console.log("before slicing: " + arr4);
console.log("After slicing: " + arr4.slice(5));
console.log();

let arr5 = [5,6,8,3,9,2,4,1];
console.log("before sorting: " + arr5);
console.log("After sorting: " + arr5.sort());
