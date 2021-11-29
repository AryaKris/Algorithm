// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

var logNums = function (num) {
if (num<1){
    console.error ('num must be greater than 1 ');
    return;
}
    if (!Number.isInteger(num)){
        // The Math.trunc() function returns the integer part of a number by removing any fractional digits.
        num = Math.trunc(num);
    }
        for (var i = 1; i<= num; i++){
            console.info(i);
        }
    
}
num(10);
