/*Create a function that returns a number, based on the string provided. Here is a 
list of all digits */
let arr = ["zero","one","two","three","four","five","six","seven","eight","nine"];
function returnNumber(x,y){
    var output = x.indexOf(y);
    return output;
};
var result = returnNumber(arr,"nine");
console.log(result);