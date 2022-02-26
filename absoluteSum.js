/* Take an array of integers (positive or negative or both) and return the sum of the absolute value 
of each element. */



let arr = [2,4,-2];



addition = function(arr){
    let sum = 0 ;
    for(let i = 0 ; i < arr.length ; i++){
            let a = Math.abs(arr[i]);
            console.log(a);
            sum += a;
    };
    return sum;
};

console.log(addition(arr));