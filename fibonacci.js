"use strict";
// Question 2: Fibonacci Sequence
// Write a program to generate the Fibonacci sequence up to 100
function fibonacci(n) {
    if (n <= 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
for (var i = 0; i < 100; i++) {
    console.log(fibonacci(i));
}
