window.addEventListener('DOMContentLoaded', (event) => {
let p1Score = parseInt(document.getElementsByClassName('player-1-score')[0].innerHTML)
let p2Score = parseInt(document.getElementsByClassName('player-2-score')[0].innerHTML)

let p1ScoreDiv = document.getElementsByClassName('player-1-score')[0]
let p2ScoreDiv = document.getElementsByClassName('player-2-score')[0]
let winnerDiv = document.getElementsByClassName('winner')[0]
let p1WinCountDiv = document.getElementById('winner-1-count')
let p2WinCountDiv = document.getElementById('winner-2-count')
let p1WinCount = 0
let p2WinCount = 0


document.addEventListener("keyup", e => {
  if (e.key == 'ArrowLeft') { p1ScoreUp()
  } else if (e.key == 'ArrowRight'){ p2ScoreUp()
  } else if (e.key == ','){ p1ScoreDown()
  } else if (e.key == '.'){ p2ScoreDown()
  } else {
    console.log('Invalid input')
  }
})

function p1ScoreUp(){
  p1Score += 1
  if (p1Score == 11){
    winnerDiv.innerText = 'Player 1 wins this set!'
    p1Score = 0
    p2Score = 0
    p2ScoreDiv.innerHTML = p2Score
    scoreCount("player1")
  }
  p1ScoreDiv.innerHTML = p1Score
}

function p1ScoreDown(){
  p1Score -= 1
  p1ScoreDiv.innerHTML = p1Score
}

function p2ScoreUp(){
  p2Score += 1
  if (p2Score == 11){
    winnerDiv.innerText = 'Player 2 wins this set!'
    p2Score = 0
    p1Score = 0
    p1ScoreDiv.innerHTML = p1Score
    scoreCount("player2")
  }
  p2ScoreDiv.innerHTML = p2Score
}

function p2ScoreDown(){
  p2Score -= 1
  p2ScoreDiv.innerHTML = p2Score
}

function scoreCount(winner) {
  if (winner == 'player1'){
    p1WinCount += 1
    p1WinCountDiv.innerText = `Player 1 win count: ${p1WinCount}`
  } else if (winner == 'player2') {
    p2WinCount += 1
    p2WinCountDiv.innerText = `Player 2 win count: ${p2WinCount}`
  }
}

})