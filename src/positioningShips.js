import interactDOM from "./DOMinteraction"

const ships = {
    size: [1,2,3,4,5],
    class: ["plum", "green", "yellow", "blue", "red"],
}



export default function positioningShips(){
    
    const startGame = interactDOM().hookDOMelement('startGame')
    startGame.addEventListener('mousedown', e => { handleShipsPositioning() })

    function handleShipsPositioning() {
        const shipsPlacement = interactDOM().hookDOMelement('shipsPlacement')
        interactDOM().show(shipsPlacement)  

        const placementBoard = interactDOM().hookDOMelement('placementBoard')

        interactDOM().generatePositioningGameboard(placementBoard)


        const shipsSelection = interactDOM().hookDOMelement('shipsSelection')
        let cells = document.querySelectorAll('.placement-board > .game-cell')


        // shipsSelection.addEventListener('mousedown', e => {handleHoverListeners(e, '#fiveCellsShip', 4)})
        // shipsSelection.addEventListener('mousedown', e => {handleHoverListeners(e, '#fourCellsShip', 3)})
        // shipsSelection.addEventListener('mousedown', e => {handleHoverListeners(e, '#threeCellsShip', 2)})
        // shipsSelection.addEventListener('mousedown', e => {handleHoverListeners(e, '#twoCellsShip', 1)})
        // shipsSelection.addEventListener('mousedown', e => {handleHoverListeners(e, '#oneCellShip', 0)})

        const controller = new AbortController();
        const { signal } = controller;

        const fiveCellsShip = interactDOM().hookDOMelement('fiveCellsShip')
        const fourCellsShip = interactDOM().hookDOMelement('fourCellsShip')

        // fiveCellsShip.addEventListener('mousedown', handleHoverListeners(ships.size[4], ships.class[4]))
        // fourCellsShip.addEventListener('mousedown', e => {
        //     // cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
        //     handleHoverListeners(ships.size[3], ships.class[3])
        // })



        shipsSelection.addEventListener('mousedown', e=> {
            let classIdentifier
            let shipSize
            if(e.target.closest('#fiveCellsShip')){
                classIdentifier = ships.class[4]
                shipSize = ships.size[4]
                // console.log('aaaa')
                handleHoverListeners(shipSize, classIdentifier)
            } else if (e.target.closest('#fourCellsShip')){
                classIdentifier = ships.class[3]
                shipSize = ships.size[3]
                handleHoverListeners(shipSize, classIdentifier)
            } else if (e.target.closest('#threeCellsShip')){
                classIdentifier = ships.class[2]
                shipSize = ships.size[2]
                handleHoverListeners(shipSize, classIdentifier)
            } else if (e.target.closest('#twoCellsShip')){
                classIdentifier = ships.class[1]
                shipSize = ships.size[1]
                handleHoverListeners(shipSize, classIdentifier)
            } else if (e.target.closest('#oneCellShip')){
                classIdentifier = ships.class[0]
                shipSize = ships.size[0]
                handleHoverListeners(shipSize, classIdentifier)
            } else {
                classIdentifier = 'game-cell'
                shipSize = 0
            }

            // cells.forEach(cell => {
            //     cell.addEventListener('mouseover', event => {
                    
            //         console.log(shipSize)
            //         displayHoverShips(event, shipSize, classIdentifier)
            //     })
                
            // })  

            

        })

        
        function handleHoverListeners(shipSize, classIdentifier){
            // let classIdentifier
            // let shipSize = 0
            // if(e.target.closest(idName)){
            //     classIdentifier = ships.class[index]
            //     shipSize = ships.size[index]
            //     console.log('aaaa')
            // }
            // placementBoard.addEventListener('mouseover', e => {
            //     displayHoverShips(e, shipSize, classIdentifier)
            // })
            cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
            cells = document.querySelectorAll('.placement-board > .game-cell')
            cells.forEach(cell => {
                cell.addEventListener('mouseover', event => {
                    
                    // console.log(shipSize)
                    displayHoverShips(event, shipSize, classIdentifier)
                })
                
            })  
            
            

        }





        function displayHoverShips(event , size, classIdentifier){
            const currentIdNum = event.target.id.replaceAll('gameCell', '')
            // console.log(typeof(currentIdNum))
            console.log(currentIdNum[1])
            
            for(let i = 0; i < size; i++){
                const elementID = 'gameCell' + `${+currentIdNum[0]}` +`${+currentIdNum[1]+i}`
                // console.log(elementID)
                const element = document.querySelector(`.placement-board > #${elementID}`)
                
                // console.log(element)
                if(element === null) {
                    break   
                }  
                element.classList = `game-cell ${classIdentifier}`
                
            }

            event.target.addEventListener('mouseout', removeHoverShips)
            // console.log(elements)
            
        }

        function removeHoverShips(e){
            const elements = document.querySelectorAll('.placement-board > .game-cell')
            // console.log(currentIdNum)
            elements.forEach(element => {
                element.classList = `game-cell`
            }) 
            e.target.addEventListener('mouseout', removeHoverShips)  
        }



        //###################################################################################################################
        // const cells = document.querySelectorAll('.placement-board > .game-cell')
        // cells.forEach(cell => {
        //     cell.addEventListener('mouseover', e =>{
        //         const hoverElem = handleShipSize(e, ships.size[2])
        //         console.log(hoverElem)
        //         hoverElem.forEach(elem => elem.classList.add(ships.class[2]))
        //         // e.target.style.backgroundColor = `${ships.color[0]}`
        //     })
        // })   
        // function handleShipSize(e , size){
        //     let currentIdNum = e.target.id.replaceAll('gameCell', '')
        //     // console.log(currentIdNum)
        //     let elements = []
        //     for(let i = 0; i < size; i++){
        //         let elementID = 'gameCell' + `${+currentIdNum[0]}` +`${+currentIdNum[0]+i}`
        //         let element 
        //         element = document.querySelector(`.placement-board > #${elementID}`)
        //         // console.log(element)
        //         if(element != null)
        //         elements.push(element)
        //     }
        //     // console.log(elements)
        //     return elements
        // }
        //###################################################################################################################
       
    }


}
