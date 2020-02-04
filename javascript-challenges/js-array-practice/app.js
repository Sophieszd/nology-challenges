// const myArray = [12, 4, 26, 44, 1043, 2];
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

//OR

// for (number of myArray) {
//     console.log(number);
// }

// //

// myArray.forEach((item) => {
//     console.log(item);
// });

//OR

// const print = (number) => {
//     console.log(number);
// }
// myArray.forEach(print);

// const nology = [
//     ["Jonny", "Sunny", "Annika", "Sophie"],
//     ["Andy", "Nasir", "Sonia", "Sam"]
// ];

// nology [0] [2]


//Loop through the state and replace all the i's iwth 1s
// 1. Loop through the string

// const state = "mississippi";
// // Loop through the state and replace all the i's with 1s
// // 1. Loop through the string
// const newState = [...state];
// for (let i = 0; i < newState.length; i++) {
//     if (newState[i] === "i") {
//         newState[i] = 1;
//     }
// }
// console.log(newState);




// 2. If the letter is i, replace with it with 1

//3. console.log the new string

// Fizzbuzz

// Fizzbuzz
// 1. console.log all numbers to 1000
// 2. If the number is divisible by 3, replace it with fizz
// 2. If the number is divisible by 5, replace it with buzz
// 3. divisible by both, fizzbuzz!!!!!!

// loop if console log

// for (let i = 0; i <= 100; i++) {
//     if ((i % 3 === 0)&& )



//     if (i % 3 === 0) {
//         console.log("fizz")
//     } else (i % 5 === 0); {
//         console.log("buzz");
//     } else 
// }
    
// const loom = (thread, dye) => {
//     const cloth = "Cloth of color " + dye + " made with " + thread + " thread";
//     return cloth;
// }
// const result = loom("cotton", "red");
// console.log(result);


// write a function that returns the square root of a number

const squareRoot = (number) => {
    return Math.sqrt(number);
}

// write a function that checks if a number is an integer
const checkIsInteger = (number) => {
    return Number.IsInteger(number);
}

const result = squareRoot (16);
console.log(checkIsInteger(result));

const squareRoot = squareTheNumber(16);
const IsInteger = checkIsInteger(squareRoot);

// small functions first
