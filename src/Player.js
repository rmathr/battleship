import interactDOM from "./DOMinteraction";
import Gameboard from "./gameboardCreator"
import Ship from "./shipCreator"


function generateCoordinates(size, array){
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
        randomArray[0] = Math.floor(Math.random() * 9)
        randomArray[1] = Math.floor(Math.random() * (9 - size))
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


function compareArrays(array1, array2){
    function arrayEquals(a, b) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }
    let isEqual = false
    array1.forEach(elem => {
        elem.positions.forEach(inner => {
            if(arrayEquals(inner, array2)) isEqual = true
        })
    })
    return isEqual  
}



function tempFunc(size){
    let posArray = []
    const randomArray = []
    let pos = []
    let count = size
    let tempArray

    while(count > 0){
        const positionObj = {
            positions: [],
            shipSize: null,
            axis: null
        }
        positionObj.axis = Math.round(Math.random()) == 1 ? "h" : "v"
        



        if(positionObj.axis === 'h'){
            randomArray[0] = Math.floor(Math.random() * 9)
            randomArray[1] = Math.floor(Math.random() * (9 - count))
        } else if(positionObj.axis === 'v'){
            randomArray[0] = Math.floor(Math.random() * (9 - count))
            randomArray[1] = Math.floor(Math.random() * 9)
        }
        positionObj.positions = []
        pos = []
        pos.push(randomArray[0])
        pos.push(randomArray[1])
        for (let i = 0; i < count; i++) {
            pos = []
            if(positionObj.axis === 'h'){
                tempArray = randomArray[1] + i
                pos.push(randomArray[0])
                pos.push(tempArray)
            } else if(positionObj.axis === 'v'){
                tempArray = randomArray[0] + i
                pos.push(tempArray)
                pos.push(randomArray[1])
            }
            positionObj.positions.push(pos)
            tempArray = []
        }
        
        while(compareArrays(posArray,pos)){
            if(positionObj.axis === 'h'){
                randomArray[0] = Math.floor(Math.random() * 9)
                randomArray[1] = Math.floor(Math.random() * (9 - count))
            } else if(positionObj.axis === 'v'){
                randomArray[0] = Math.floor(Math.random() * (9 - count))
                randomArray[1] = Math.floor(Math.random() * 9)
            }

            positionObj.positions = []
            pos = []
            pos.push(randomArray[0])
            pos.push(randomArray[1])
            for (let i = 0; i < count; i++) {
                if(positionObj.axis === 'h'){
                    // console.log(positionObj.axis)
                    tempArray = randomArray[1] + i
                    pos.push(randomArray[0])
                    pos.push(tempArray)
                } else if(positionObj.axis === 'v'){
                    tempArray = randomArray[0] + i
                    pos.push(tempArray)
                    pos.push(randomArray[1])
                }
                positionObj.positions.push(pos)
                tempArray = []
            }  
        }
        positionObj.shipSize = count
        posArray.push(positionObj)
        count--
    }
    return posArray
}

const teste1 = tempFunc(5)
const teste2 = tempFunc(5)
const teste3 = tempFunc(5)
const teste4 = tempFunc(5)
const teste5 = tempFunc(5)
const teste6 = tempFunc(5)
const teste7 = tempFunc(5)
const teste8 = tempFunc(5)
const teste9 = tempFunc(5)
const teste10 = tempFunc(5)





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