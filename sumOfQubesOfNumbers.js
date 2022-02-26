//Create a function that takes in an array of numbers and returns the sum of its cubes.

addition = num => {
    sum = 0;
    for (let i = 0; i < num.length ; i++){
        sum += Math.pow(num[i],3);
    };
    return sum;
};
console.log(addition([1,2,3]));