// Write a function that takes in a lower case word and makes it upper case

// const sentence = ('JavaScipt is blowing my mind');
// console.log(sentence.toUpperCase());

// // OR

// const convertWordToUpperCase = (lower) => lower.toUpperCase();
// const result = convertWordToUpperCase("hello");
// console.log(result);

// Write a function that multiplies three numbers together and returns the result

// const reverseString = (str) => {

//     splitString = str.split("");
    
//     reverseArray = splitString.reverse();
    
//     joinArray = reverseArray.join("");
   
//     return joinArray; 
// }

// const result = reverseString("things");
// console.log(result);


// Write a function that checks whether a number is greater than 500
    // If the number is greater, return true
    // If the number is less, return false

// const checkSize = (number) => number >= 500;
    
// Write a function that takes in a letter and returns the letter before it in the alphabet

const letterBefore = (letter) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const index = alphabet.indexOf(letter);
    const indexBefore = index - 1;
    const newLetter = alphabet.charAt(indexBefore);
    return newLetter;
}
console.log(letterBefore('g'));
const olliesLetterBefore = (letter) => {
    const charCode = letter.charCodeAt(0) - 1;
    return String.fromCharCode(charCode);
}
console.log(olliesLetterBefore('r'));

// EXTENSION:
    // Write a function that takes in a word and a number
        // Print the word out that number of times

