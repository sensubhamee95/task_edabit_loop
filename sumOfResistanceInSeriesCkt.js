//Sum of Resistance in Series Circuits

/* //using spread And Rest operator....
totalResistance = function(x,...y){
    let sum = 0;
    for(var i in y){
        sum = sum + y[i];
    };
    console.log(`The equivalent resistance of this series ckt is ${sum} ${x}`);
};
let resistances = [4,6,2,3,5];
totalResistance("ohm",...resistances); */

// simple using for loop.....
/* equivalentResistance = function (res, unit) {
    let sum = 0;
    for (var i = 0; i < res.length; i++) {
        sum = sum + res[i];
    };
    console.log(`The equivalent resistance of this series ckt is ${sum} ${unit}`);
};
let res = [4, 6, 2, 3, 5, 5];
equivalentResistance(res, "ohm"); */

//using arrow function and Reduce function...

let equivalentResistance = (res, unit) => {
    (total = (curr, acc) => (acc += curr)), 0;

    let output = res.reduce(total);

    return `The equivalent resistance of this series ckt is ${output} ${unit}`;
};
let res = [4, 6, 2, 3, 5, 4, 6, 5];

console.log(equivalentResistance(res, 'ohm'));
