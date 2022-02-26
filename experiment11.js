/* function total(){//argument function
    let sum = 0 ;
    for(let i in arguments){
        sum = sum + arguments[i];
    };
    return sum;
    
};

console.log(total(10,20,30,40,50)); */
let arr = ["subham sen","rajdip mondal",100,true];
let a = arr[0].split(" ");
console.log(a);
console.log(a.join(" "));
