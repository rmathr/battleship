import "./style.css"
import { gameLogic } from "./gameLogic"
import { generatePlayers } from "./gameLogic"
// import { Game } from "./gameLogic"
import Game from "./Game"
import _ from 'lodash'
import interactDOM from "./DOMinteraction"
import positioningShips from "./positioningShips"


const newGame = new Game()
console.log(newGame)
// newGame.generatePlayers()
// console.log(newGame.activePlayer)

// const startGame = interactDOM().hookDOMelement('startGame')
// startGame.addEventListener('mousedown', e => {
//     const shipsPlacement = interactDOM().hookDOMelement('shipsPlacement')
//     interactDOM().show(shipsPlacement)
    
//     // newGame.generatePlayers()
//     // console.log(newGame.verifyEndGame())
// })
positioningShips(newGame)

// console.log(newGame.verifyEndGame().length)


// gameLogic(newGame)

// const gameboard = interactDOM().hookDOMelement('leftGameboard')
// gameboard.addEventListener('mousedown', e => {
//     console.log(e.target)
// })

// interactDOM().returnClickedCoordinates('rightGameboard')


