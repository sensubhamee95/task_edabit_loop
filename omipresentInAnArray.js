// A value is omnipresent if it exists in every subarray inside the main array.

let num = [[4,2,3], [8, 3, 2],[3, 2], [3,5, 2]];

function omni(arr){
    for(let i = 0 ; i < arr[0].length ; i++){
        let flag = 0;
        for (let j = 1 ; j < arr.length ;j++){
            if(arr[j].includes(arr[0][i])){
                flag = flag +1;
                continue;
            }else{
                break;
            };
        };
        if(flag == arr.length-1){
            console.log(arr[0][i]);
        };
        
    };
};
omni(num);