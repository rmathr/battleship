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
        // randomArray[0] = Math.floor(Math.random() * 9)
        // randomArray[1] = Math.floor(Math.random() * (9 - size))
        
        
        // const placingCoord = handleComputerPosition(size)
        // console.log(placingCoord)
        // const placingArray = []
        //     placingCoord.forEach(elem => {
        //         const obj = {
        //             coord: elem.positions[0],
        //             size: elem.shipSize,
        //             axis: elem.axis
        //         }
        //         placingArray.push(obj)
        //     })
        //     console.log(placingArray)
        //     return placingArray
        
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











// function compareArrays(array1, array2){
//     function arrayEquals(a, b) {
//         return Array.isArray(a) &&
//             Array.isArray(b) &&
//             a.length === b.length &&
//             a.every((val, index) => val === b[index]);
//     }
//     let isEqual = false
//     array1.forEach(elem => {
//         elem.positions.forEach(inner => {
//             if(arrayEquals(inner, array2)) {
//                 isEqual = true
//             }
//         })
//     })
//     return isEqual  
// }



// function handleComputerPosition(size){
//     let posArray = []
//     const randomArray = []
//     let pos = []
//     let count = size
//     let tempArray
//     let coordArray = [
//         ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
//         ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
//         ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
//         ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
//         ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
//         ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
//         ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
//         ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
//         ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
//         ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
//     ]

//     while(count > 0){
//         const positionObj = {
//             positions: [],
//             shipSize: null,
//             axis: null
//         }


//         positionObj.axis = Math.round(Math.random()) == 1 ? "h" : "v"
        
//         if(positionObj.axis === 'h'){
//             randomArray[0] = Math.floor(Math.random() * 9)
//             randomArray[1] = Math.floor(Math.random() * (9 - count))
//         } else if(positionObj.axis === 'v'){
//             randomArray[0] = Math.floor(Math.random() * (9 - count))
//             randomArray[1] = Math.floor(Math.random() * 9)
//         }
//         positionObj.positions = []
//         pos = []
//         pos.push(randomArray[0])
//         pos.push(randomArray[1])
//         for (let i = 0; i < count; i++) {
//             pos = []
//             if(positionObj.axis === 'h'){
//                 tempArray = randomArray[1] + i
//                 pos.push(randomArray[0])
//                 pos.push(tempArray)
//                 coordArray[randomArray[0]][tempArray] = count
//             } else if(positionObj.axis === 'v'){
//                 tempArray = randomArray[0] + i
//                 pos.push(tempArray)
//                 pos.push(randomArray[1])
//                 coordArray[tempArray][randomArray[1]] = count
//             }
//             positionObj.positions.push(pos)
//             tempArray = []
//         }
        
//         console.log(coordArray)

//         while(compareArrays(posArray,pos)){
//             if(positionObj.axis === 'h'){
//                 randomArray[0] = Math.floor(Math.random() * 9)
//                 randomArray[1] = Math.floor(Math.random() * (9 - count))
//             } else if(positionObj.axis === 'v'){
//                 randomArray[0] = Math.floor(Math.random() * (9 - count))
//                 randomArray[1] = Math.floor(Math.random() * 9)
//             }

//             positionObj.positions = []
//             pos = []
//             pos.push(randomArray[0])
//             pos.push(randomArray[1])
//             for (let i = 0; i < count; i++) {
//                 if(positionObj.axis === 'h'){
//                     // console.log(positionObj.axis)
//                     tempArray = randomArray[1] + i
//                     pos.push(randomArray[0])
//                     pos.push(tempArray)
//                 } else if(positionObj.axis === 'v'){
//                     tempArray = randomArray[0] + i
//                     pos.push(tempArray)
//                     pos.push(randomArray[1])
//                 }
//                 positionObj.positions.push(pos)
//                 tempArray = []
//             }  
//         }
//         positionObj.shipSize = count
//         posArray.push(positionObj)
//         count--
//     }
//     return posArray
// }

// const teste1 = handleComputerPosition(5)
// const teste2 = handleComputerPosition(5)
// const teste3 = handleComputerPosition(5)
// const teste4 = handleComputerPosition(5)
// const teste5 = handleComputerPosition(5)
// const teste6 = handleComputerPosition(5)
// const teste7 = handleComputerPosition(5)
// const teste8 = handleComputerPosition(5)
// const teste9 = handleComputerPosition(5)
// const teste10 = handleComputerPosition(5)








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