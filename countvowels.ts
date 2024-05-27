// Question 6: Count Vowels
// Write a program that counts the number of vowels in a sentence.
// eg " Hello World " => returns 2

function countVowels(sentence: string): number {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i].toLowerCase();

        if (vowels.has(char)) {
            count++;
            vowels.delete(char);
        }
    }
    return count;
}

const sentence = "My name is Margaret";
const numVowels = countVowels(sentence);
console.log(numVowels);
