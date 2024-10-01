function task1(arr){
    let str = '';
    for(let i=0;i<arr.length;i++){
        if(str.includes(arr[i])){
            arr[i] = '*';
        }
        else{
            str += arr[i];
        }
    }
    return arr;
}

console.log(task1([1, 2, 3, 4, 5, 1, 2]));


function task2(arr){
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
       if(arr1.includes(arr[i])){
          arr1.splice(arr1.indexOf(arr[i]),1);
       }
       else{
        arr1.push(arr[i]);
       }
    }
    console.log(arr1);
}
task2([1, 2, 3, 4, 5, 1, 2]);


function task3(arr){
    return arr.map(num =>{
        let digits = num.toString().split("");
        for(let i in digits){
            for(let j=i+1;j<digits.length;j++){
                if(digits[i]==digits[j]){
                    return false;
                }
            }
        }
        return true;
    });
}
console.log(task3([222, 256, 341, 121]));

