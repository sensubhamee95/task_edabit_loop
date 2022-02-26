//Sum of Resistance in PARALLEL Circuits;

function equivalentResistance(x){
    let sum = 0 ;
    for (let i = 0 ; i < x.length ; i++){
        let resiprocal  = 1 / x[i];
        sum = sum + resiprocal;
    };
    let total = 1 / sum ;
    return (`The equivalent resistance of parallel circuit is ${total}`);
};
console.log(equivalentResistance([2,4]));