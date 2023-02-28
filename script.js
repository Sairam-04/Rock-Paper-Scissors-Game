let result = document.getElementById('result')
let hands = document.getElementById('hands')
let playerscore = document.getElementById('player-score')

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
    let arr = ['Rock','Paper','Scissors']
    return arr[Math.floor(Math.random() * arr.length)]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  
    let score;
    // All situations where human draws, set `score` to 0
    if(playerChoice === computerChoice){
        score = 0
    }
    // All situations where human wins, set `score` to 1
    // make sure to use else ifs here
    else if((playerChoice == 'Rock' && computerChoice == 'Scissors') || 
        (playerChoice == 'Paper' && computerChoice == 'Rock') || 
        (playerChoice == 'Scissors' && computerChoice == 'Paper')){
        score = 1
    }else{
        score = -1
    }

  // Otherwise human loses (aka set score to -1)
    return score
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
    // Hint: on a score of -1
    // You should do result.innerText = 'You Lose!'
    // Don't forget to grab the div with the 'result' id!
    playerscore.innerText = `${Number(playerscore.innerText) + score}`
    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
    if(score == 0){
        result.innerText = `It's a Draw!`
    }else if(score == 1){
        result.innerText = `You Win!`
    }else{
        result.innerText = `You Win!`
    }
    

}


// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    let compchoice = getComputerChoice()
    let score = getResult(playerChoice, compchoice)
    showResult(score,playerChoice,compchoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    let rpsButtons = document.querySelectorAll('.rpsButton')

    // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
    
    // 1. loop through the buttons using a forEach loop
    // 2. Add a 'click' event listener to each button
    // 3. Call the onClickRPS function every time someone clicks
    // 4. Make sure to pass the currently selected rps button as an argument
  
    rpsButtons.forEach(rpsButton => {
      rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })
    

    // Add a click listener to the end game button that runs the endGame() function on click
    let endGamebtn = document.getElementById('endGameButton')
    endGamebtn.onclick = () => endGame()
}

// ** endGame function clears all the text on the DOM **
function endGame() {
    playerscore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
}

playGame()