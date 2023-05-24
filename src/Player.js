import interactDOM from "./DOMinteraction";
import Gameboard from "./gameboardCreator"
import Ship from "./shipCreator"


function generateCoordinates(size, array){
    const randomArray = []
    if(arguments.length < 1){
        for(let i = 0; i < 2; i++){
            randomArray[i] = Math.floor(Math.random() * 9)
        }
    }
    if(arguments.length === 1){
        randomArray[0] = Math.floor(Math.random() * 9)
        randomArray[1] = Math.floor(Math.random() * (9 - size))
    } else if(arguments.length > 1) {
        randomArray[0] = Math.floor(Math.random() * 9)
        randomArray[1] = Math.floor(Math.random() * (9 - size))
    }
    return randomArray
}









class Player{
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

export { generateCoordinates, Player }