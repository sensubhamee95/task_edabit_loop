// Transform into an Array with No Duplicates

let arr = [3, 3, 3, 2, 1];
let newArr = [arr[0]];

function check (arr,newArr){
    
     for(let i = 1 ;i < arr.length ; i++){
        let flag = 0;
        for (let j = 0 ; j < newArr.length ;j++){
            if(arr[i] == newArr[j]){
                flag = 1;
                break;
            };
        };
        if (flag == 0){
            newArr.push(arr[i]);
        };
    };
    console.log(newArr);
    
};
check(arr,newArr);
