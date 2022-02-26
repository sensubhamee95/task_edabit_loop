let arr = ["subham","akash","rakesh","rajdip"];
upperCase = function(x){
    let arrUpper = [];
   for( var i = 0 ;i < x.length ; i++){
        let b = x[i].charAt(0).toUpperCase() + x[i].slice(1);
        arrUpper.push(b);
        // x[i] = x[i][0].toUpperCase() + x[i].slice(1);
    };
     return arrUpper;
    

};
console.log(upperCase(arr));
/* let newarr = arr.map(x=> x[0][0].toUpperCase() + x.slice(1));
console.log(newarr); */
