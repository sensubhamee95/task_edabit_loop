total = function (x,...y){//rest operator
    let sum = 0;
    for(var i in y){
        sum = sum + y[i];
    
    };
    return sum; 
    return 
};
var arr = [10,20,30,40,50]
console.log(total("addition",...arr));//spread operator