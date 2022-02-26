/* Given an array of numbers, create a function which returns the same array but with
 each element's index in the array added to itself. This means you add 0 to the number
  at index 0, add 1 to the number at index 1, etc...*/

  let arr = [1,2,3,4,5,6];
  
  
  newArray = function (a){
    var output = a.map(x => x + a.indexOf(x));
    console.log(output);
  };
  newArray(arr);
