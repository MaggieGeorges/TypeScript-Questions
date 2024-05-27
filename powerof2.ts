// Question 3: Power of Two
// Write a program that takes an integer as input and returns true if the input is a power of two.
// Examples: 
// 8=> returns true
// 6=> returns false


function isPowerOf2(n: number): boolean{
    return (n > 0) && ((n & (n - 1)) === 0);
}

console.log(isPowerOf2(16)); 