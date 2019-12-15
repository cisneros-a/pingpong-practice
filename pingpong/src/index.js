window.addEventListener('DOMContentLoaded', (event) => {

let game = () => {

let p1Score = parseInt(document.getElementsByClassName('player-1-score')[0].innerHTML)
let p2Score = parseInt(document.getElementsByClassName('player-2-score')[0].innerHTML)

let p1ScoreDiv = document.getElementsByClassName('player-1-score')[0]
let p2ScoreDiv = document.getElementsByClassName('player-2-score')[0]
let winnerDiv = document.getElementsByClassName('winner')[0]
let p1WinCountDiv = document.getElementById('winner-1-count')
let p2WinCountDiv = document.getElementById('winner-2-count')
let p1WinCount = 0
let p2WinCount = 0


// This is the first function initiated. It grabs each button and sets the limit.  
//  I made collection because I could not iterate through HTML collection with forEach(), but I found this online.
function startGame() {
    collection = document.getElementsByClassName('btn btn-primary')
    Array.from(collection).forEach(function (button) {
     button.addEventListener('click', e => {
      keepscore(`${parseInt(button.innerText)}`)     
     })
  })
  
   
 }

// This function is only initiated after a button is clicked to set the score limit. It envokes
// all the helper methods below this one. 
function keepscore(limit) {
  collection = document.getElementsByClassName('btn btn-primary')
    Array.from(collection).forEach(function (button) {
    button.remove()
  })
  document.querySelector('.choose-limit').remove()

  displayLimit = document.querySelector('.display-limit')

  displayLimit.innerText = `Score ${limit} points to win!`
 
document.addEventListener("keyup", e => {
  if (e.key == 'ArrowLeft') { p1ScoreUp(limit)
  } else if (e.key == 'ArrowRight'){ p2ScoreUp(limit)
  } else if (e.key == ','){ p1ScoreDown()
  } else if (e.key == '.'){ p2ScoreDown()
  } else {
    console.log('Invalid input')
  }
})

// <---------------------------------HELPER METHODS----------------------------------------->

function p1ScoreUp(limit){
  clearWinnerDiv()
  p1Score += 1
  console.log(`The difference is ${p1Score - p2Score}`)
  if (p1Score >= limit){
    if (p1Score - p2Score >= 2) {
    winnerDiv.innerHTML = "<u>Player 1 wins this set!</u>"
    p1Score = 0
    p2Score = 0
    p2ScoreDiv.innerHTML = p2Score
    winCount("player1")}
    else {
      winnerDiv.innerText = 'You must win by 2!'
    }
  }
  p1ScoreDiv.innerHTML = p1Score
}

function p1ScoreDown(){
  p1Score -= 1
  p1ScoreDiv.innerHTML = p1Score
}

function p2ScoreUp(limit){
  clearWinnerDiv()
  p2Score += 1
  if (p2Score >= limit){
    if (p2Score - p1Score >= 2){
    winnerDiv.innerHTML = '<u>Player 2 wins this set!</u>'
    p2Score = 0
    p1Score = 0
    p1ScoreDiv.innerHTML = p1Score
    winCount("player2")}
    else {
      winnerDiv.innerText = 'You must win by 2!'
     }
  } 
  p2ScoreDiv.innerHTML = p2Score
}

function p2ScoreDown(){
  p2Score -= 1
  p2ScoreDiv.innerHTML = p2Score
}

function clearWinnerDiv() {
  winnerDiv.innerText = ''

}


// <----this function is called when a player reaches the limit and their win count goes up---->
function winCount(winner) {
  if (winner == 'player1'){
    p1WinCount += 1
    p1WinCountDiv.innerText = `Player 1 win count: ${p1WinCount}`
  } else if (winner == 'player2') {
    p2WinCount += 1
    p2WinCountDiv.innerText = `Player 2 win count: ${p2WinCount}`
  }
}
  }

  //  <-------this is like the run fuction we stored all the steps in run--------->
  startGame()
  
  
}


// <-----------initializes the game------------->
  game()

  
})