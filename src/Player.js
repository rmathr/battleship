import interactDOM from "./DOMinteraction";
import {Gameboard} from "./gameboardCreator"
import { returnCoordinates } from "./gameboardCreator";
import Ship from "./shipCreator"


function generateCoordinates(size){
    const randomArray = []
    let pos = []
    const positionObj = {
        positions: [],
        shipSize: size,
        axis: null
    }




    if(arguments.length < 1){
        for(let i = 0; i < 2; i++){
            randomArray[i] = Math.floor(Math.random() * 9)
        }
    }
    if(arguments.length === 1){
        const coordsArray = generateRandomCoordinates(size)
        let count = size
        const placingArray = []
        while (count > 0) {
            const tempArray = returnCoordinates(coordsArray, count)
            const obj = {
                coord: tempArray[0],
                size: count,
                axis: null
            }
            if (tempArray.length == 1) {
                obj.axis = 'h'
            } else {
                if (tempArray[0][0] === tempArray[1][0]) {
                    obj.axis = 'h'
                } else {
                    obj.axis = 'v'
                }
            }
            placingArray.push(obj)
            count--
        }
        return placingArray

    } else if(arguments.length > 1) {

        randomArray[0] = Math.floor(Math.random() * 9)
        randomArray[1] = Math.floor(Math.random() * (9 - size))
        pos.push(randomArray[0])
        pos.push(randomArray[1])
        positionObj.positions.push(pos)
        for(let i = 1; i < size; i++){
            pos = []
            randomArray[1] = randomArray[1] + i
            pos.push(randomArray[0])
            pos.push(randomArray[1])
            positionObj.positions.push(pos)
        }
    }
    return randomArray
}


function generateRandomCoordinates(size) {
    let count = size
    let coordArray = [
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

    let randomArray = []

    while (count > 0) {
        const axis = Math.round(Math.random()) == 1 ? "h" : "v"
        let tempArray
        if(axis === 'h'){
            tempArray = horizontalAxis()
        } else if (axis === 'v'){
            tempArray = verticalAxis()
        }
        while (tempArray[0].length != count) {
            if(axis === 'h'){
                tempArray = horizontalAxis()
            } else if (axis === 'v'){
                tempArray = verticalAxis()
            }
        }
        for (let i = 0; i < tempArray[0].length; i++) {
            coordArray[tempArray[0][i]][tempArray[1][i]] = count
        }
        count--
    }

    function horizontalAxis() {
        randomArray[0] = Math.floor(Math.random() * 9)
        randomArray[1] = Math.floor(Math.random() * (9 - count))
        return executeHorizontalLoop(coordArray, randomArray[0], randomArray[1], count)
    }

    function verticalAxis() {
        randomArray[0] = Math.floor(Math.random() * (9 - count))
        randomArray[1] = Math.floor(Math.random() * 9)
        return executeVerticalLoop(coordArray, randomArray[0], randomArray[1], count)
    }

    function executeHorizontalLoop(coordArray, firstValue, secondValue, count){
        let tempArray = [[],[]]
        for(let i = 0; i < count; i++){
            if(coordArray[firstValue][secondValue+i] != "0") break 
            tempArray[0][i] =  firstValue
            tempArray[1][i] =  secondValue + i
     
         }
         return tempArray
    }
    function executeVerticalLoop(coordArray, firstValue, secondValue, count){
        let tempArray = [[],[]]
        for(let i = 0; i < count; i++){
            if(coordArray[firstValue +i][secondValue] != "0") break 
            tempArray[0][i] =  firstValue + i
            tempArray[1][i] =  secondValue
     
         }
         return tempArray
    }

    return coordArray
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
    positionShip(size, coordinates, axis){
        const playerShip = new Ship(size)
        return this.board.placeShip(playerShip, coordinates, axis)
    }
}

export { generateCoordinates, Player }