// Question 6: Count Vowels
// Write a program that counts the number of vowels in a sentence.
// eg " Hello World " => returns 2
function countVowels(sentence) {
    var vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    var count = 0;
    for (var i = 0; i < sentence.length; i++) {
        var char = sentence[i].toLowerCase();
        if (vowels.has(char)) {
            count++;
            vowels.delete(char);
        }
    }
    return count;
}
var sentence = "My name is Margaret";
var numVowels = countVowels(sentence);
console.log(numVowels);
