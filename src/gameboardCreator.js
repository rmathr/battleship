import interactDOM from "./DOMinteraction"
import Ship from "./shipCreator"

class Gameboard{
    constructor(){
        this.board = [
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
        ]
        this.placedShips = []
        this.sunkShips = 0
    }
    placeShip(ship, coordinates, axis = 'h'){
            this.placedShips.push(ship)
            // ---------------------horizontal positioning
            for(let i = 0; i < ship.size; i++){
                if(axis === 'h'){
                    this.board[coordinates[0]][coordinates[1]+i] = ship.size 
                } else if(axis === 'v'){
                    this.board[coordinates[0]+i][coordinates[1]] = ship.size 
    
                }
            }     
            // ---------------------horizontal positioning
        return this.board
    }
    receiveAttack(coordinates, container){
        // let cell = this.board[coordinates[0]][coordinates[1]]
        if(this.board[coordinates[0]][coordinates[1]] === "hit" || this.board[coordinates[0]][coordinates[1]] === "missed"){
            return false
        }
        if(this.board[coordinates[0]][coordinates[1]] != "0"){
            const ship = this.placedShips.filter(ship => ship.size == this.board[coordinates[0]][coordinates[1]])
            ship[0].hit()
            // console.log(ship)
            this.board[coordinates[0]][coordinates[1]] = "hit"
        } else if(this.board[coordinates[0]][coordinates[1]] === "0") {
            this.board[coordinates[0]][coordinates[1]] = "missed"
        }
        const elementId = 'gameCell' + `${coordinates[0]}${coordinates[1]}`
        console.log(elementId)
        interactDOM().updateElementValue(container, elementId, this.board[coordinates[0]][coordinates[1]])
        return `${this.board[coordinates[0]][coordinates[1]]} in [${coordinates}]`
    }
    reportMissedAttacks(){
        const array = JSON.parse(JSON.stringify(this.board))
        // console.log(array)
        return returnCoordinates(array, 'missed')
    }
    verifyActiveShips(){
        let activeShips = this.placedShips.filter(ship => ship.sunk === false)
        // console.log(activeShips)
        activeShips.forEach(ship => {
            ship.isSunk()
        })
        activeShips = this.placedShips.filter(ship => ship.sunk === false)
        return activeShips.length
    }
}

function returnCoordinates(array, value){
    let coordinates = []
    let tempArray = []
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            if(array[i][j] == value){
                tempArray.push(i)
                tempArray.push(j)
                coordinates.push(tempArray)
                tempArray = []
            }
        }
    }
    return coordinates
}



export { Gameboard, returnCoordinates }