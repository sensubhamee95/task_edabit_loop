// Create a function to count the number of 1s in a 2D array.

let arr = [[1,1,1],[1,1,2],[1,10,1,1],[1,1,1,1,1,1,1]];


//Using join & split...

/* function count(x){
    let a = x.join();
    let b = a.split(",")
    let flag = 0 ;
    for(let i = 0 ; i < b.length ; i++){
        if(b[i] == 1){
            flag = flag +1 ;
        };
    };
    return flag;
};
console.log(count(arr)); */

// methode - II

function count (x){
    let flag = 0; 
    for(let i = 0 ; i < x.length ; i++){
        for (let j = 0 ; j < x[i].length ; j++){
          if(x[i][j] == 1){
              flag += 1 ;
          }  
        };
    };
    return flag;
};

console.log(count(arr));



