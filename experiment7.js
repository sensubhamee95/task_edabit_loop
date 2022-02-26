let names = ["Subham Sen","Rakesh Modak","Sunil Kumar Nitai Samanta","Rajdip Mondal"];
shortName = function(arr){
    let arr1 = [];

    for(var i = 0 ; i < arr.length ; i++){
    
    let b = arr[i].split(" ");

    for (var j = 0 ; j < b.length - 1 ; j++){
        
        b[j] = b[j].charAt(0);

    };

    let c = b.join(".");
    arr1.push(c);
    
};

return arr1;

};
console.log(shortName(names));

