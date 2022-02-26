//Return the Index of the First Vowel....

/* let vowels = "AEIOUaeiou";
let word = "Srinika";
let getcheck = function(v,w){
    let flag = 0;
    for (let i = 0; i < w.length ;i++){
        
        for(let j = 0 ; j < v.length ; j++ ){
            if(v[j] == w[i]){
                console.log(i);
                flag = flag+1;
                break;   
            };

        };
        if(flag != 0){
            break;
        };
    };
};
getcheck(vowels,word); */


// let word = "srinika";
// let vowel = "aeiou";
// function getcheck(){
//     let arr = [];
//     for(let i = 0 ; i < vowel.length ; i++){
//         let num = word.indexOf(vowel[i]);
//         if (num != -1){
//             arr.push(num)
//         };
//     };
//     arr.sort((a,b) => a=b);
//     console.log(arr[0]);
// };
// getcheck(word,vowel);


function vowelCheck(name){
    let vowel="aeiouAEIOU";
    let vowelArr = vowel.split("");
    let nameArr = name.split("")
    for(let i = 0 ; i < nameArr.length ; i++){
        if(vowelArr.indexOf(nameArr[i]) !== -1){
            console.log(i);
            break;
        }
    }
}
vowelCheck("srinika");