window.onload = () => {
    const buttons = document.querySelectorAll('button');
    const input = document.getElementById('input');
    const history = document.getElementById('history');
    const equals = document.getElementById('equals');
    const clear = document.getElementById('clear');

    let firstNumber;
    let secondNumber;
    let operator;

    buttons.forEach(button => {
        
        button.onclick = () => {
            input.value += button.value
            // if the button is a number
            // if its the first time ive pressed a number
                // then add the value of the button to first number
            // else if its the second time ive pressed the number
                // then add the value of the button to the second number
        
        // if the button is an operator
            // add the value to the operator
        };
    });

// get first number
// get operator
// get second number
// 



    //const array = button.value.split("=", 2)
    //console.log(array); 

    /* button.onclick = () */

    clear.onclick = () => {
        history.value = "";
        input.value = "";
    }

    const calculate = (firstNumber, operator, secondNumber) => {
        const firstFloat = parseFloat(firstNumber);
        const secondFloat = parseFloat(secondNumber);
            switch (operator) {
                case "+":
                    return firstFloat + secondFloat;
                case "-":
                    return firstFloat - secondFloat;
                case "/":
                    return firstFloat / secondFloat;
                case "*":
                    return firstFloat * secondFloat;
    }


    equals.onclick = () => {
        history.value = `${input.value} =`;
        input.value = calculate(firstNumber, operator, secondNumber);
    }
}
}

// //     const calculate = () => {
// //         try {
// //             return eval(input.value);
// //         } catch {
// //             return "Chill out, mate.";
// //         }
// //     }
// // 
    // const firstNumber = 
    // const operator =
    // const secondNumber = 
   
    
//     const calculate = (firstNumber, operator, secondNumber) => {
//                 const firstFloat = parseFloat(firstNumber);
//                 const secondFloat = parseFloat(secondNumber);
//                 switch (operator) {
//                     case "+":
//                         return firstFloat + secondFloat;
//                     case "-":
//                         return firstFloat - secondFloat;
//                     case "/":
//                         return firstFloat / secondFloat;
//                     case "*":
//                         return firstFloat * secondFloat;
//                 }
