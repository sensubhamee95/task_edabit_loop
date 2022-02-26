let arr = ["subham","rekesh","rajdip","akash"];
/* output = function(x){
    //let arr1 = [];
    for (var i = 0 ; i < x.length ; i++){
        x[i] = x[i][0].toUpperCase() + x[i].slice(1);
       
    };
    return x;
};
console.log(output(arr)); */
let output = arr.map(x => x[0].toUpperCase() + x.slice(1));
console.log(output);