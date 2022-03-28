document.addEventListener('DOMContentLoaded', () =>
{
const squares = document.querySelectorAll('.grid div')
const result = document.querySelector('#result')
const displayCurrentPlayer = document.querySelector('#current-player')
let currentPlayer = 1

for (let i = 0; i < squares.length; i++) { //for loop to get all squares on click
    squares[i].onclick = () => {
        //if the square below your current square is taken, you can go on top of it
        if (squares[i + 7].classList.contains('taken')){ //current square plus 7 directly following, i.e. the entire rwo below
            if (currentPlayer == 1) {
                squares[i].classList.add('taken')//add taken class
                squares[i].classList.add('player-one')//add player-one as s/he is currently playing
                currentPlayer = 2
                displayCurrentPlayer.innerHTML = currentPlayer
            } else if (currentPlayer == 2) {
                squares[i].classList.add('taken')//add taken class
                squares[i].classList.add('player-two')//add player-two as s/he is currently playing
                currentPlayer = 1
                displayCurrentPlayer.innerHTML = currentPlayer
            }
        } else alert ('cannot go here')
       } 
    }
})