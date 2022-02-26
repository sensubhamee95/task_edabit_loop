/* Write a function that returns the number of dots when given its corresponding triangle number of 
the sequence.

triangle(1) ➞ 1
triangle(6) ➞ 21
triangle(215) ➞ 23220 */


let num = 5;
function count(baseDot){
    let totalDot = 0;
for (let i = baseDot ; i > 0 ; i-- ){
    totalDot = totalDot + i;
};
return totalDot;
};
console.log(count(num));