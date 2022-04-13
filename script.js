computerPlay();

function computerPlay()
{
    const rockPaperScissors = ["Rock", "Paper", "Scissors"];

    const rnd = Math.floor(Math.random() * rockPaperScissors.length);
    return console.log(rnd, rockPaperScissors[rnd]);
}
