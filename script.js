let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Load sound effects
const winSound = new Audio("./sounds/win.mp3"); // Replace with actual file path
const loseSound = new Audio("./sounds/lose.mp3");
const drawSound = new Audio("./sounds/draw.mp3");
const clickSound = new Audio("./sounds/click.mp3");

const drawGame = () => {
    msg.innerText = "Game was draw 😒. Play again";
    msg.style.backgroundColor = "rgb(10, 5, 36)";
    drawSound.play(); // Play draw sound
};

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win 🎉";
        msg.style.backgroundColor = "green";
        winSound.play(); // Play win sound
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lose 😑";
        msg.style.backgroundColor = "red";
        loseSound.play(); // Play lose sound
    }
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("Comp choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => { 
    choice.addEventListener("click", () => {
        clickSound.play(); // Play button click sound
        const userChoice = choice.getAttribute("id"); 
        playGame(userChoice);
    });
});
