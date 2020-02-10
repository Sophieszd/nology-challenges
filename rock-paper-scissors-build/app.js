window.onload = () => {

    const buttons = document.querySelectorAll("button")
    let result = document.querySelector(".text")
    const moves = ["rock", "paper", "scissors"]


    buttons.forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();
            const playerMove = event.target.id;
            const compMove = moves[Math.floor(Math.random() * moves.length)];

            console.log(playerMove, compMove);

            if (playerMove === compMove) {
                alert("It's a draw!");
            } else if (playerMove === 'Rock' && computerMove === 'Paper' || playerMove === 'Paper' && computerMove === 'Scissors' || playerMove === 'Scissors' && computerMove === 'Rock') {
                alert("computer wins");
            } else if ((computerMove === 'Rock' && playerMove === 'Paper') || (computerMove === 'Paper' && playerMove === 'Scissors') || (computerMove === 'Scissors' && playerMove === 'Rock')) {
                alert("you win");
            }

            result.innerHTML = "result"
        })


    });
}




    // alert(playerMove);


    // 2. get the computer move
        // Use a random number to select a move from an array
    // const moves = ["rock", "paper", "scissors"];
    // const compMove = moves[Math.floor(Math.random()*moves.length)];

    // alert(compMove);


    // 3. check result using both moves
        // If the moves are the same, the result is a draw
        // Paper beats rock, rock beats scissors, scissors beats paper
        // Player wins, computer wins or a draw are the options

    // if (playerMove === compMove) {
    //     alert("It's a draw!");
    // } else if (playerMove === 'Rock' && computerMove === 'Paper' || playerMove === 'Paper' && computerMove === 'Scissors' || playerMove === 'Scissors' && computerMove === 'Rock')
    // {
    //     alert("computer wins");
    // } else if ((computerMove === 'Rock' && playerMove === 'Paper') || (computerMove === 'Paper' && playerMove === 'Scissors') || (computerMove === 'Scissors' && playerMove === 'Rock')) {
    //     alert("you win");
    // }

    // RECURSION

    // const playAgain = prompt("Do you want to play again? Type y or n")
    // if (playAgain === 'y') {
    //     return theGame();
    // } 
    // }
    // theGame();




    // 4. display the result
        // Alert
    // 5. reset the game (bonus)
        // Ask the user if they want to play again

    // EXTENSION:
        // Display the scores to the user after the round
        // Make the game best of 5
