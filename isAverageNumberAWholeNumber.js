/* Create a function that takes an array as an argument and returns true or false depending on whether
 the average of all elements in the array is a whole number or not. */

 checkAverage = function (arr){
     /* sum = 0;
     for ( let i = 0 ; i< arr.length ; i++){
        sum += arr[i];
     }; */
     //using reduce function
     /* addition = (curr,total) => total += curr,0;
     sum = arr.reduce(addition);
     console.log(sum) */;

     let sum = arr.reduce((curr,total) => total += curr,0);
     console.log(sum);
     let average = sum / arr.length ;
     if(Number.isInteger(average)){
         return ("Average of this numbers is a whole number");
     }
     else{
         return ("Average of this numbers is not a whole number");
     };
     
 };
 let number = [1,2,3,4,5,1];
 console.log(checkAverage(number));