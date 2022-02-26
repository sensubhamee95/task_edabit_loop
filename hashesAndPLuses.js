// Create a function that returns the number of hashes and pluses in a string.

let a = "+##+#+#";
let b = 0;
let c = 0;
let countArr = [];
function count (x){
    for(let i = 0 ; i < a.length ;i++){
        if (a[i] == "#"){
            b += 1;
        }
        else{
            c = c+1;
        };
    };
    countArr.push(b);
    countArr.push(c);
    return countArr;
};
console.log(count(a));