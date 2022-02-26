/* Create a function that takes a number n and returns the sum of all square numbers up to and
 including n. */
 sum = function(n){
     total = 0;
     for(var i = 1 ; i <= n ; i++){
            let b = (i*i);
            total = total + b ; 
            console.log(b);
     };
     console.log(total);
 };
 sum(3);