import "./style.css"
import { gameLogic } from "./gameLogic"
import { generatePlayers } from "./gameLogic"
// import { Game } from "./gameLogic"
import Game from "./Game"
import _ from 'lodash'
import interactDOM from "./DOMinteraction"

// const array = [["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
// ["0", "0", "1", "0", "0", "0", "0", "0", "0", "0"],
// ["0", "0", "2", "0", "0", "0", "0", "0", "0", "0"],
// ["0", "0", "3", "0", "0", "0", "0", "0", "0", "0"],
// ["0", "0", "4", "0", "0", "0", "0", "0", "0", "0"],
// ["0", "0", "5", "0", "0", "0", "0", "0", "0", "0"],
// ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
// ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
// ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
// ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
// ]

// const newArray = _.flatten(array)
// console.log(newArray)
const newGame = new Game()
console.log(newGame)

const startGame = interactDOM().hookDOMelement('startGame')
startGame.addEventListener('mousedown', e => {
    newGame.generatePlayers()
    console.log(newGame)
})

gameLogic()

const gameboard = interactDOM().hookDOMelement('leftGameboard')
gameboard.addEventListener('mousedown', e => {
    console.log(e.target)
})



