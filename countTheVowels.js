// Create a function that takes a string and returns the number (count) of vowels contained within it.


checkVowel = function(vowels,sentence){
    let sum = 0
for( let i = 0 ; i < sentence.length ; i++){
    for(let j = 0 ; j < vowels.length ; j++){
        if( sentence[i] == vowels[j]){
            sum += 1;
        };
    }; 
};
return sum;
}

let vowels = "AEIOUaeiou"
let sentence = "Celebation"

console.log(checkVowel(vowels,sentence));