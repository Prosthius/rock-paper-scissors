playRound();

function computerPlay()
{
    const rockPaperScissors = ["Rock", "Paper", "Scissors"];

    const rnd = Math.floor(Math.random() * rockPaperScissors.length);
    let random = '';
    random = (rnd, rockPaperScissors[rnd]);
    return random;
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = prompt()
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1);
    computerSelection = computerPlay().toUpperCase() + computerPlay().substring(1);
    //console.log(playerSelection);
    //console.log(computerSelection);

    if (playerSelection === computerSelection)
    {
        console.log("It's a tie.")
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper'))
    {
        console.log(`You win!\n${playerSelection} beats ${computerSelection}.`)
    } else 
    {
        console.log(`You lose!\n${computerSelection} beats ${playerSelection}.`)
    }
}