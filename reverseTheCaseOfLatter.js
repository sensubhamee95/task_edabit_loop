let sentence ="hAPPY bIRTHDAY";



function rvrs(word){
    let arr = word.split("");

    for(let i = 0 ; i < arr.length ; i++){
    
        if(arr[i] == arr[i].toUpperCase()){
            arr[i] = arr[i].toLowerCase();
        }
        else{
            arr[i] = arr[i].toUpperCase();
        };
    };
     console.log(arr.join(""));
};

rvrs(sentence);