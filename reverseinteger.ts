// Question 5: Reverse Integer
// Write a program that takes an integer as input and returns an integer with reversed digit 
// ordering.
// Examples:
// For input 500, the program should return 5.
// For input -56, the program should return -65.
// For input -90, the program should return -9.
// For input 91, the program should return 19.


function reverseInteger(num: number): number {
    const isNegative = num < 0;
    const reversedStr = Math.abs(num).toString().split('').reverse().join('');
    const reversedNum = parseInt(reversedStr);

    return isNegative ? -reversedNum : reversedNum;
}

console.log(reverseInteger(500)); 
console.log(reverseInteger(-20)); 