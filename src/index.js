import "./ships.css"
import "./style.css"
import { gameLogic } from "./gameLogic"
import { generatePlayers } from "./gameLogic"
// import { Game } from "./gameLogic"
import Game from "./Game"
import _ from 'lodash'
import interactDOM from "./DOMinteraction"
import positioningShips from "./positioningShips"
import handleEffects from "./handleEffects"


const newGame = new Game()
console.log(newGame)

positioningShips(newGame)
handleEffects()


