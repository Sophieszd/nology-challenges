// window.onload = () => {
//     console.log("wurking")
//     const firstNumber = document.getElementById('firstNumber');
//     const secondNumber = document.getElementById('secondNumber');
//     console.log(firstNumber);
//     const dropdown = document.querySelector('select');
//     console.log(dropdown);
//     const submit = document.querySelector('#equals');
//     const answer = document.querySelector('.answer');

//     console.log(firstNumber.value);
//     console.log(dropdown.value);
//     console.log(secondNumber.value);

//     // Inputs: firstNumber, operator, secondNumber
//     // Return: answer

//     const calculate = (firstNumber, operator, secondNumber) => {
//         const firstFloat = parseFloat(firstNumber);
//         const secondFloat = parseFloat(secondNumber);
//         switch (operator) {
//             case "+":
//                 return firstFloat + secondFloat;
//             case "-":
//                 return firstFloat - secondFloat;
//             case "/":
//                 return firstFloat / secondFloat;
//             case "*":
//                 return firstFloat * secondFloat;
//         }
//     }



//     submit.addEventListener("click", (event) => {
//         event.preventDefault();
//         console.log("click!");

//         const result = calculate(firstNumber.value, dropdown.value, secondNumber.value);
//         answer.innerHTML = result;
//     });

// }

window.onload = () => {
    const buttons = document.querySelectorAll('button');
    const input = document.getElementById('input');
    const history = document.getElementById('history');
    const equals = document.getElementById('equals');
    const clear = document.getElementById('clear');
    
    buttons.forEach(button => {
        button.onclick = () => input.value += button.value;
    });

    clear.onclick = () => {
        history.value = "";
        input.value = "";
    }
    equals.onclick = () => {
        history.value = `${input.value} =`;
        input.value = calculate();
    }

    const calculate = () => {
        try {
            return eval(input.value);
        } catch {
            return "Chill out, mate.";
        }
    }
}