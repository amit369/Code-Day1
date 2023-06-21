const arr = [5,7,1,8,4];

const sum = arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
 }, 10);

 console.log(sum);