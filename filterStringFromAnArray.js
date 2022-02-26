//Filter out Strings from an Array

/* //using array filter() function....

let arr = [10, 15, 'Subham', 'Rakesh', 23, 'Rajdip', 22, 25];
string = function (x) {
  if (typeof x == 'string') {
    return x;
  }
};
console.log(arr.filter(string)); */


function filter(arr){
    let newArray = [];
    for (let i = 0 ; i < arr.length ; i++){
        if( typeof arr[i] == "string"){
           newArray.push(arr[i]);
        };
    };
    return newArray;
};
let students = [26,"subham",30,"rajdip",102,true,"sunil",null];
console.log(filter(students));
console.log(students);