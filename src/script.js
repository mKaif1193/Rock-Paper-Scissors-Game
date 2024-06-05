let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  // Rock, Paper, Scissor
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);

  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game Draw!! Play Again";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;

    console.log(`You Win! Your ${userChoice} Beats ${compChoice}`);

    msg.innerText = `You Win! Your ${userChoice} Beats ${compChoice}`;
    msg.style.backgroundColor = "#266DD3";
  } else {
    compScore++;
    compScorePara.innerText = compScore;

    console.log(`You Lose! ${compChoice} Beats Your ${userChoice}`);

    msg.innerText = `You Lose! ${compChoice} Beats Your ${userChoice}`;
    msg.style.backgroundColor = "#EC4067";
  }
};

const playGame = (userChoice) => {
  // Generate Computer Choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    // Game Draw
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
