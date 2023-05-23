import "./style.css"
import { gameLogic } from "./gameLogic"
import { generatePlayers } from "./gameLogic"
// import { Game } from "./gameLogic"
import Game from "./Game"
import _ from 'lodash'
import interactDOM from "./DOMinteraction"


const newGame = new Game()
console.log(newGame)
newGame.generatePlayers()
console.log(newGame.activePlayer)

// const startGame = interactDOM().hookDOMelement('startGame')
// startGame.addEventListener('mousedown', e => {
//     newGame.generatePlayers()
//     console.log(newGame.verifyEndGame())
// })

console.log(newGame.verifyEndGame().length)


gameLogic(newGame)

const gameboard = interactDOM().hookDOMelement('leftGameboard')
gameboard.addEventListener('mousedown', e => {
    console.log(e.target)
})

// interactDOM().returnClickedCoordinates('rightGameboard')


