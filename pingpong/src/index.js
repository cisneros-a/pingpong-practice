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


// This is the first function initiated. It grabs the value from each input field and passes them
// to the keepScore function


function initiateGame() {
  console.log('game started')
  let submitButton = document.querySelector('#submit')
  submitButton.addEventListener('click', e => {
    console.log('button clicked')
    let p1name = document.querySelector('#player1name').value
    let p2name = document.querySelector('#player2name').value
    let scoreLimit = parseInt(document.querySelector('#scoreLimit').value)
    keepscore(scoreLimit, p1name, p2name)
    
  }) 
   
  }





// This function is only initiated after a button is clicked to set the score limit. It envokes
// all the helper methods below this one. 
function keepscore(limit, p1name, p2name) {
  console.log('--------------------------------------------------------')
  document.querySelector('.user-form').remove()
  
  displayLimit = document.querySelector('.display-limit')
  displayLimit.innerText = `Score ${limit} points to win!`
  // <div class='player1-name-score'> </div>
  let p1ns = document.querySelector('.player1-name-score')
  let p2ns = document.querySelector('.player2-name-score') 
  p1ns.innerText = `${p1name}'s score:`
  p2ns.innerText = `${p2name}'s score:`


 
document.addEventListener("keyup", e => {
  if (e.key == 'ArrowLeft') { p1ScoreUp(limit, p1name, p2name)
  } else if (e.key == 'ArrowRight'){ p2ScoreUp(limit, p1name, p2name)
  } else if (e.key == ','){ p1ScoreDown()
  } else if (e.key == '.'){ p2ScoreDown()
  } else {
    console.log('Invalid input')
  }
})

// <---------------------------------HELPER METHODS----------------------------------------->

function p1ScoreUp(limit, p1name, p2name){
  clearWinnerDiv()
  p1Score += 1
  console.log(`The difference is ${p1Score - p2Score}`)
  if (p1Score >= limit){
    if (p1Score - p2Score >= 2) {
    winnerDiv.innerHTML = `<u>${p1name} wins this set!</u>`
    p1Score = 0
    p2Score = 0
    p2ScoreDiv.innerHTML = p2Score
    winCount("player1", p1name, p2name)}
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

function p2ScoreUp(limit, p1name, p2name){
  clearWinnerDiv()
  p2Score += 1
  if (p2Score >= limit){
    if (p2Score - p1Score >= 2){
    winnerDiv.innerHTML = `<u>${p2name} wins this set!</u>`
    p2Score = 0
    p1Score = 0
    p1ScoreDiv.innerHTML = p1Score
    winCount("player2", p1name, p2name)}
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
function winCount(winner, p1name, p2name) {
  if (winner == 'player1'){
    p1WinCount += 1
    p1WinCountDiv.innerText = `${p1name}'s win count: ${p1WinCount}`
  } else if (winner == 'player2') {
    p2WinCount += 1
    p2WinCountDiv.innerText = `${p2name}'s win count: ${p2WinCount}`
  }
}
  }

  //  <-------this is like the run fuction we stored all the steps in run--------->
  // startGame()
  initiateGame() 
  
  
}


// <-----------initializes the game------------->
  game()

  
})