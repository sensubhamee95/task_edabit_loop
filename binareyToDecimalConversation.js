// Binary to decimal conversation

bin2dec = function (num){

    let sum = 0 ;
    let j = num.length-1 ;

    for ( var i = 0 ; i < num.length ; i++){

    let power = Math.pow(2,j);

    j = j - 1;

    let multiplication = num[i] * power ;

    sum = sum + multiplication;

};
console.log(sum);
};

bin2dec("10101110");
