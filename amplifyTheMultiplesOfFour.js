// Each number of the sequence that can be exactly divided by 4 must be amplified by 10

let num = 25;
let ser = [];

function amplify(num){
    for (let i = 1 ;i <= num ;i++){
        if( i % 4 == 0){
            ser.push(i *10);
        }
        else {
            ser.push(i);
        }
    };
    return ser;
};
console.log(amplify(num));