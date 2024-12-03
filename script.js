let humanScore = 0;
let computerScore = 0;
let getHumanChoice = prompt("Rock, paper, scissors...");
let getComputerChoice = ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];

// CONSOLE TESTS
console.log("YOU: " + getHumanChoice.toUpperCase());
console.log("COMPUTER: " + getComputerChoice.toUpperCase());
        
// GAME LOGIC FUNCTION 

/* function playRound(humanChoice, computerChoice) {
    if (humanSelection === "Rock" && computerSelection === "Scissors" 
    || humanSelection === "Paper" && computerSelection === "Rock"             
    || humanSelection === "Scissors" && computerSelection === "Paper") {
    humanScore++;
    player.textContent = `Your score: ${playerScore}`;
    roundResult.textContent = `You win! ${humanSelection} beats ${computerSelection}.`;

    } else if (humanSelection === "Rock" && computerSelection === "Paper"
    || humanSelection === "Paper" && computerSelection === "Scissors" 
    || humanSelection === "Scissors" && computerSelection === "Rock") {
    computerScore++;
    computer.textContent = `Computer score: ${computerScore}`;
    roundResult.textContent = `You lose! ${computerSelection} beats ${humanSelection}.`;

    } else {                                                                   
    roundResult.textContent = `It's a draw! You both have ${humanSelection}.`
    };
            
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection); */ 
