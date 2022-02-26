// Find the Largest Numbers in a Group of Arrays

function large(arr){
    let newarr = [] ;
    for(let i = 0 ; i < arr.length ; i++){
        arr[i] = arr[i].sort((a,b)=>a-b);
        // console.log(arr[i]);
        let largeNum = arr[i][arr[i].length -1];
        // console.log(largeNum);
        newarr.push(largeNum);
    };
    console.log(newarr);
    
};
let Num = [[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]];
large(Num);