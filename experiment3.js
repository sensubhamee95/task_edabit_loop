let arr = ["subham","akash","rakesh","rajdip"];
sutcase= function(x){
    let a = x.charAt(0).toUpperCase() + x.slice(1);
    return a;
};
console.log(arr.map(sutcase));