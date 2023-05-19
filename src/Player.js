import Gameboard from "./gameboardCreator"
import Ship from "./shipCreator"

export default class Player{
    constructor(){
        this.board = new Gameboard()
    }
    attackBoard(player, coordinates){
        return player.board.receiveAttack(coordinates)
    }
    positionShip(size, coordinates){
        const playerShip = new Ship(size)
        return this.board.placeShip(playerShip, coordinates)
    }
}

