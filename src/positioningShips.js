import interactDOM from "./DOMinteraction"
import { gameLogic } from "./gameLogic"
import handleEffects from "./handleEffects"

const ships = {
    size: [1,2,3,4,5],
    class: ["plum", "green", "yellow", "blue", "red"],
    shipContainer: ['oneCellShip', 'twoCellsShip', 'threeCellsShip', 'fourCellsShip', 'fiveCellsShip']
}



export default function positioningShips(game) {

    handleShipsPositioning()
   

    function handleShipsPositioning() {
        const startGame = interactDOM().hookDOMelement('startGame')
        const shipsPlacement = interactDOM().hookDOMelement('shipsPlacement')
        const placementBoard = interactDOM().hookDOMelement('placementBoard')
        const shipsSelection = interactDOM().hookDOMelement('shipsSelection')
        const changeAxis = interactDOM().hookDOMelement('changeAxis')
        let cells = document.querySelectorAll('.placement-board > .game-cell')
        const coordinates = []
        
        startGame.addEventListener('mousedown', e => { 
            if(coordinates.length === 5) launchGame() })



        changeAxis.addEventListener('mousedown', e => {
            changeAxis.value = `${changeAxis.value === 'v' ? 'h' : 'v'}`
            handleEffects()
        })

        interactDOM().show(shipsPlacement)
        interactDOM().generatePositioningGameboard(placementBoard)

        shipsSelection.addEventListener('mousedown', e => {
            let classIdentifier
            let shipSize
            if (e.target.closest('#fiveCellsShip')) {
                classIdentifier = ships.class[4]
                shipSize = ships.size[4]
                handleHoverListeners(shipSize, classIdentifier)
            } else if (e.target.closest('#fourCellsShip')) {
                classIdentifier = ships.class[3]
                shipSize = ships.size[3]
                handleHoverListeners(shipSize, classIdentifier)
            } else if (e.target.closest('#threeCellsShip')) {
                classIdentifier = ships.class[2]
                shipSize = ships.size[2]
                handleHoverListeners(shipSize, classIdentifier)
            } else if (e.target.closest('#twoCellsShip')) {
                classIdentifier = ships.class[1]
                shipSize = ships.size[1]
                handleHoverListeners(shipSize, classIdentifier)
            } else if (e.target.closest('#oneCellShip')) {
                classIdentifier = ships.class[0]
                shipSize = ships.size[0]
                handleHoverListeners(shipSize, classIdentifier)
            } else {
                classIdentifier = 'game-cell'
                shipSize = 0
            }
        })

        function handleHoverListeners(shipSize, classIdentifier) {
            cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
            cells = document.querySelectorAll('.placement-board > .game-cell')
            cells.forEach(cell => {
                cell.addEventListener('mouseover', event => {

                    displayHoverShips(event, shipSize, classIdentifier)
                })
                cell.addEventListener('mousedown', e => {
                    if(cell.value.length <= 2){
                        let coord = getCorrectCoordinates(e, shipSize)
                        renderShips(coord.positions, shipSize)
                        cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
                    }
                })

            })
        }

        function displayHoverShips(event, size, classIdentifier) {
            const currentIdNum = event.target.id.replaceAll('gameCell', '')
                for (let i = 0; i < size; i++) {
                    let elementID
                    if(changeAxis.value === 'h'){ 
                        elementID = 'gameCell' + `${+currentIdNum[0]}` + `${+currentIdNum[1] + i}`
                    } else if(changeAxis.value === 'v'){
                        elementID = 'gameCell' + `${+currentIdNum[0] + i}` + `${currentIdNum[1]}`
                    }
                    const element = document.querySelector(`.placement-board > #${elementID}`)
                    if (element === null || element.value.length > 2) {
                        break
                    }
                    element.classList = `game-cell ${classIdentifier}`

                }
                
            event.target.addEventListener('mouseout', removeHoverShips)
        }

        function removeHoverShips(e) {
            
            const elements = document.querySelectorAll('.placement-board > .game-cell')
            elements.forEach(element => {
                if(element.value.length <= 2) element.classList = `game-cell`
            })
        }

        function getCorrectCoordinates(e, size){
            const cell = e.target.id.replaceAll('gameCell', '')
            let pos = []
            const positionObj = {
                positions: [],
                shipSize: size,
                axis: null
            }
            for (let i = 0; i < size; i++) {
                let elementID
                if(changeAxis.value === 'h'){
                    elementID = 'gameCell' + `${+cell[0]}` + `${+cell[1] + i}`
                    pos.push(+cell[0])
                    pos.push(+cell[1] + i)
                    positionObj.axis = 'h'
                } else if(changeAxis.value === 'v'){
                    elementID = 'gameCell' + `${+cell[0] + i}` + `${cell[1]}`
                    pos.push(+cell[0]+i)
                    pos.push(+cell[1])
                    positionObj.axis = 'v'
                }
                const element = document.querySelector(`.placement-board > #${elementID}`)
                if ((changeAxis.value === 'v' && (+cell[0] + i) > 9)
                    || (changeAxis.value === 'h' && (+cell[1] + i) > 9)
                    || element.value.length > 2) {
                    break
                }
                positionObj.positions.push(pos)
                pos = []
            }
            if(positionObj.positions.length < size) return
            coordinates.push(positionObj)
            disablePlacedShips(size)
            return positionObj
        }
        function renderShips(coordinates, size){
            const elements = []
            const classIdentifier = ships.class[size-1]
            for(let i = 0; i < coordinates.length; i++){
                const id = 'gameCell' + `${coordinates[i][0]}` + `${coordinates[i][1]}`
                const cell = document.querySelector(`.placement-board > #${id}`)
                cell.value = classIdentifier
                elements.push(cell)
            }
            elements.forEach(element => {
                element.classList = `game-cell ${classIdentifier}`
            })
        }

        function disablePlacedShips(shipSize){
            const index = ships.size.indexOf(shipSize)
            const containerID = ships.shipContainer[index]
            const elements = document.querySelectorAll(`#${containerID} > .ship-square`)
            elements.forEach(element => element.disabled = true)
        }

        function launchGame(){
            const placingCoord = [...coordinates]
            const placingArray = []
            placingCoord.forEach(elem => {
                const obj = {
                    coord: elem.positions[0],
                    size: elem.shipSize,
                    axis: elem.axis
                }
                placingArray.push(obj)
            })
            gameLogic(game, placingArray)
            interactDOM().hide(shipsPlacement)
            startGame.replaceWith(startGame.cloneNode(true))
            handleEffects()
            return placingArray
        }
    }
}
