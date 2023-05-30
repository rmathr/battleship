import "./ships.css"
import "./style.css"
import Game from "./Game"
import _ from 'lodash'
import positioningShips from "./positioningShips"
import handleEffects from "./handleEffects"


const newGame = new Game()
positioningShips(newGame)
handleEffects()


