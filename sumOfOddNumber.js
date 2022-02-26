/*Create a function which returns the total of all odd numbers up to and including n.
 n will be given as an odd number.*/

total = function (number) {
    sum = 0;
    for (var i = 1; i <= number; i++) {
        if (i % 2 != 0) {
            var x = i;
            //console.log(x);
            sum += x;
        }
    }
    console.log(sum);
};

total(5);
