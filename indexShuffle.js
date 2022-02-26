/* Write a function that takes all even-indexed characters and odd-indexed characters from a string 
and concatenates them together. */

let stdName = "holiday";
let arr = [];
function shuffle(word){
    for(let i = 0 ; i < word.length ; i = i + 2){
        let a = word[i];
        arr.push(word[i]);
    };
    for (let j = 1 ; j < word.length ; j = j + 2){
        let b = word[j];
        arr.push(word[j]);
    };
   return arr.join("");
};

console.log(shuffle(stdName));