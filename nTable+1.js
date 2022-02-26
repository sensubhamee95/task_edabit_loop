/*Create a function that takes a number n and returns the first 10 multiples of n with 1 added to it,
 separated by commas.*/

table = function(n,m){

    for ( var i = 1 ; i < m ;i++){

        a = (n*i +1);

        console.log(a + ",");
    };

    console.log((n*m)+1);

};
table(7,10);


