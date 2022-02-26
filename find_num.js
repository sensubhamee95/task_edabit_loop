function isOmnipresent(arr, val) {
	for (let i = 0 ; i <arr.length ; i++){
        if(arr[i].indexOf(val) !== -1){
            return true
        }else{
            return false
        }
    }
}
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1))
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6))