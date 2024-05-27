
// for (var i = 1; i <= 100; i++){

//     if (i % 3 == 0) {
//         console.log("Fizz");
        
//     }
//     if (i % 5 == 0) {
//         console.log("Buzz");
        
//     }
//     if ((i % 3 == 0) && (i % 5 == 0)) {
//         console.log("FizzBuzz");
        
//     }
//     if ((i % 3 !=0) && (i % 5 != 0)) {
//         console.log(i);
        
//     }
     
//     }
    
    
// function fibonacci(n) {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// for (let i = 0; i <= 100; i++) {
//     console.log(fibonacci(i));
// }

// function isPowerOfTwo(n) {
//     return (n > 0) && ((n & (n - 1)) === 0);
//   }

//   console.log(isPowerOfTwo(16)); // true
//   console.log(isPowerOfTwo(18)); // false
//   console.log(isPowerOfTwo(256)); // true

// function capitalizeWords(str) {
    
//     const words = str.split(" ");
  
    
//     const capitalizedWords = words.map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });
  
   
//     const result = capitalizedWords.join(" ");
  
//     return result;
//   }
  
//   console.log(capitalizeWords("hi"));
//   console.log(capitalizeWords("i love programming")); 

// function reverseInteger(num) {

//     const isNegative = num < 0;
  

//     const reversedStr = Math.abs(num).toString().split('').reverse().join('');
  
//     const reversedNum = parseInt(reversedStr);
  
//     return isNegative ? -reversedNum : reversedNum;
//   }
  

//   console.log(reverseInteger(500)); // Output: 5
//   console.log(reverseInteger(-56)); // Output: -65
//   console.log(reverseInteger(-90)); // Output: -9
//   console.log(reverseInteger(91)); // Output: 19



// function countVowels(sentence) {

//   const vowels = new Set(['a', 'e', 'i', 'o', 'u']);


//   let count = 0;


//   for (let i = 0; i < sentence.length; i++) {

//     const char = sentence[i].toLowerCase();

//     if (vowels.has(char)) {
//       count++;


//       vowels.delete(char);
//     }
//   }

//   return count;
// }


// const sentence = "My name is Margaret";
// const numVowels = countVowels(sentence);
// console.log(numVowels); 