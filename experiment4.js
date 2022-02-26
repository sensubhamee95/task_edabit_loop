let a = "my name is subham";
let word = a.split(" ");
console.log(typeof word);

for(var i = 0 ; i < word.length ; i++){
    word[i] = word[i][0].toUpperCase() + word[i].slice(1);
   // console.log(word[i]);
};
console.log(word.join(" "));
console.log(typeof word.join());