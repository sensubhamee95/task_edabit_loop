let arr = [10,15,"Subham","Rakesh",23,"Rajdip",22,25];

function string(arr){
    let arr1 = [];
    for(let i = 0; i < arr.length ; i++ ){
        if(typeof arr[i] == "string"){
           arr1.push(arr[i]);
        };
    };
    return arr1;
};
let b = string(arr);
console.log(b);
/* let output = arr.filter(x => typeof x == "string");
console.log(output); */

