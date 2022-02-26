/* Create a function that returns true if the first array is a subset of the second.
 Return false otherwise. */

 let arr1 = [1,2,3,4,5,6];
 let arr2 = [2,7,6];

  let flag = 0 ;
 function check(arr,subArr){
     for (let i = 0 ; i < subArr.length ; i++){
         if(arr.includes(subArr[i])){
             flag = flag + 1; 
         }
         else{
            console.log("this is not sub set");
            break;
         };
     };
     if (flag == subArr.length){
         console.log("this is sub set");
     };
 };
 check(arr1,arr2);