// Convert a Number to Base-2

let a = "";
function decToBin (num){
    while(num > 0){
        a = a + (num % 2);
        num = Math.floor(num/2);
    };
    let b = a.split("");

    console.log(b.reverse().join(""));
};
decToBin(5); 


