console.log("hello world");

const heading = document.getElementsByTagName('h1')[0]
heading.textContent = "OMG JAVASCRIPT";

const money = 10;

if (money > 15) {
    console.log("buy another pint");
} else if (money > 5) {
    console.log("only buy crisps")
} else {
    console.log("I am poor.");
}

// Calculator

let userInput = "yes";
while (userInput === "yes") {
    const firstNumber = Number(prompt("Enter first number"));
    const operator = prompt("Enter the operator");
    const secondNumber = Number(prompt("Enter second number"));
    if (operator === "+") {
        alert(firstNumber + secondNumber);
    } else if (operator === "-") {
        alert(firstNumber - secondNumber);
    } else if (operator === "/") {
        alert(firstNumber / secondNumber);
    } else if (operator === "*") {
        alert(firstNumber * secondNumber);
    } else {
        alert("Invalid operator entered");
    }

    userInput = prompt("Hey, do you wanna keep DA LOOP?")
}

//  SWITCH STATEMENT / CASE STATEMENT

switch (operator) {
    case "+":
        alert(firstNumber + secondNumber);
    case "-":
        alert(firstNumber + secondNumber);
    case "*":
        alert(firstNumber + secondNumber);
    case "/":
        alert(firstNumber + secondNumber);
}

