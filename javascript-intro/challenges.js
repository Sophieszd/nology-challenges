// JAVASCRIPT CHALLENGES
// 1. Print out the numbers from 17 to 35 in the console

// for (let i = 17; i <=35; i++) {
//     console.log(i);
// }

// 2. The user inputs their account balance into a browser prompt.
     // If it's greater than 100, they are told they are rich!
     // If it's between 20 and 100, they are told they are surviving.
     // If it's less than 20, they are told they are poor.

// let userInput = "yes";
// while (userInput === "yes") {    

//     let userInput = prompt ("Please input your account balance");
//      if (userInput > 100) {
//         alert("You're rich!");
//     } else if (userInput >= 20) {
//         alert("You're surviving");
//     } else if (userInput <= 20) {
//         alert("Sorry, you're poor");
//     } 

//     userInput= prompt ("Hey, do you wanna keep DA LOOP?")
// }


// 3. The user types their name into a browser prompt.
    // If it is 10 characters or longer, they are posh!
    // If it is not, they are cool.

    
    let userInput = prompt ("Please type your name in here!");
    // let userInput = str. length;
    if (userInput > 100) {
        alert("You're Posh!")
    } else if (userInput )

  
    // if (userInput string >= 10) 

// 4. The user is asked to enter their name 4 times before being allowed some peace!

// 5. ROCK PAPER SCISSORS

while (true) {
    const choice = prompt("Choose! (R/P/S)");
    const randomNumber = Math.floor(Math.random() * 3);
    let compChoice;
    if (randomNumber == 0) {
        compChoice = "R";
    } else if (randomNumber == 1) {
        compChoice = "P";
    } else if (randomNumber == 2) {
        compChoice = "S";
    }
    alert("The computer's choice is: " + compChoice);
    if (compChoice == choice) {
        alert("It's a draw!");
    } else if ((choice == "R" && compChoice == "P") ||
        (choice == "P" && compChoice == "S") ||
        (choice == "S" && compChoice == "R")) {
        alert("You've lost. :(");
    } else if ((choice == "R" && compChoice == "S") ||
        (choice == "P" && compChoice == "R") ||
        (choice == "S" && compChoice == "P")) {
        alert("You've won! :)");
    }
}