/* Create a function that takes two strings as arguments and returns the number of times the first 
string (the single character) is found in the second string. */

function count(x,y){
    let a = 0;
    let sum = 0;
    for (var i = 0 ; i < y.length ; i++){
        if(x == y[i]){
            sum = sum + 1;
        };
    };
    console.log(sum);
};
count("s","sussssosvans sen");

