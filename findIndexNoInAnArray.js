/*Create a function that takes an array and a string as arguments
 and returns the index of the string.*/
 let arr = ["subham","rajdip","sunil","Akash","Rakesh"];
 /*let result = arr.indexOf("sunil");
 console.log(result);*/
 function findIndex(x){
     return x.indexOf("Akash");
 };
 var result = findIndex(arr);
 console.log(result);
