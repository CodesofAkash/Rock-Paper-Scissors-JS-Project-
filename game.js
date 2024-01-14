// // Accessing the Elements of HTML code // //

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


// // Activating the Programme // //


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})


// // Generating Computer's choice // //


const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}


// // The main logic of the Game // //


const playGame = (userChoice) => {
    const compChoice  = genCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper"? false: true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors"? false: true;
        } else {
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}


// // Defining variables for score-card // //

let userScore = 0;
let compScore = 0;


// // Displaying the Winner // //


const drawGame = () => {
    msg.innerText = "Game was draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        msg.innerText = `You Win! Your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    } else {
        msg.innerText = `You lose! computer's ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}