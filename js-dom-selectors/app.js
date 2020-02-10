// window.onload = () => {
//     const div = document.getElementsByTagName('div')[0];

//     // const orangeDiv = document.getElementsByClassName ('orange')[0];
//     const orangeDiv = document.querySelector('.orange');
//     const blueDiv = document.getElementById('blue');
//     const allDivs = document.querySelectorAll('div');
//     console.log(allDivs);

//     const lastDiv = document.getElementsByTagName('div')[4];
//     lastDiv.classList += "green";

//     div.style.backgroundColor = "aquamarine";
//     orangeDiv.style.backgroundColor = "orange";
//     blueDiv.style.backgroundColor = "blue";

//     allDivs.forEach((div) => {
//         div.style.border = "10px solid black";
//     })

//     orangeDiv.innerHTML = "<p>Sneaky lil JS text</p>";
// }

// Get all the bags
// window.onload = () => {
//     const bags = document.getElementsByTagName('li');

//     for (let i = 0; i < bags.length; i += 2) {
//         bags[i].classList += "bold";
//     }

//     for (let i = 0; i < bags.length; i++) {
//         bags[i].style.fontSize = 10 * (i + 1)
//     }
// }

// // OR

// window.onload = () => {
//     const bags = document.querySelectorAll('li');
//     bags.forEach((bag, i) => {
//         if (i % 2 === 1) bag.classList += "bold";
//         bag.style.fontSize = 10 * (i + 1);
//     })
// }

// <!-- random number
// select the p tag
// <!-- put the random number in the p tag --> 

window.onload = () => {
    const dice = document.getElementsByClassName('dice')[0];
    console.log(dice);
        dice.innerText = <p>"(Math.floor(Math.random() * 6) + 1)" </p>;
}
