import interactDOM from "./DOMinteraction";
import Gameboard from "./gameboardCreator"
import Ship from "./shipCreator"


function generateCoordinates(){
    const randomArray = []
    for(let i = 0; i < 2; i++){
        randomArray[i] = Math.floor(Math.random() * 9);
    }
    return randomArray
}









export default class Player{
    constructor(){
        this.board = new Gameboard()
    }
    attackBoard(player, coordinates){
        if(arguments.length > 1) return player.board.receiveAttack(coordinates, 'rightGameboard')
        let clickedCoordinates = interactDOM().returnClickedCoordinates('rightGameboard')
        return player.board.receiveAttack(clickedCoordinates)
    }
    randomAttack(player){
        let coordinates = generateCoordinates()
        let validAttack = player.board.receiveAttack(coordinates, 'leftGameboard')
        while(!validAttack){
            coordinates = generateCoordinates()
            validAttack = player.board.receiveAttack(coordinates, 'leftGameboard')
        }
        return validAttack 
    }
    positionShip(size, coordinates){
        const playerShip = new Ship(size)
        return this.board.placeShip(playerShip, coordinates)
    }
}

