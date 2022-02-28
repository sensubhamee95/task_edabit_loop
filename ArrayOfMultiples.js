/* Create a function that takes two numbers as arguments (num, length) and returns an array of multiples
 of num until the array length reaches length. */


 function arrayOfMultiples(x,y){
     let arr = [];
     for ( let i = 1 ; i <= y ; i++){
         let multiplication = x * i;
         arr.push(multiplication);
     };
     return arr;
 };
 let num = 17;
 let length = 6;
 
//  console.log(arrayOfMultiples(num,length));