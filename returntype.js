/* Create a function that takes an array and returns the types of values (data types) 
in a new array*/
var arr = ["subham",true,26];

/*console.log(arr.map(function (x){
    return typeof x;
}));*/
/*function typeReturn(x){
    return typeof x;
};
var result = arr.map(typeReturn);
console.log(result);*/
var result = arr.map(x => typeof x);
console.log(result);
