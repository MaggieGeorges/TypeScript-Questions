// Question 4: Capitalize Words
// Write a program that accepts a string as input, capitalizes the first letter of each word in the 
// string, and then returns the result string.
// Examples: 
// "hi"=> returns "Hi"
// "i love programming"=> returns "I Love Programming"


function capitalizeWords(str: string){
    const words = str.split(" ");
    const capitalWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    const result = capitalWords.join(" ");
    return result;
}

console.log(capitalizeWords("my name is margaret"));