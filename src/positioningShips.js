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
        const cells = document.querySelectorAll('.placement-board > .game-cell')

        shipsSelection.addEventListener('mousedown', e=> {
            let classIdentifier
            let shipSize
            if(e.target.closest('#fiveCellsShip')){
                classIdentifier = ships.class[4]
                shipSize = ships.size[4]
                console.log('aaaa')
            } else if (e.target.closest('#fourCellsShip')){
                classIdentifier = ships.class[3]
                shipSize = ships.size[3]
            } else if (e.target.closest('#threeCellsShip')){
                classIdentifier = ships.class[2]
                shipSize = ships.size[2]
            } else if (e.target.closest('#twoCellsShip')){
                classIdentifier = ships.class[1]
                shipSize = ships.size[1]
            } else if (e.target.closest('#oneCellShip')){
                classIdentifier = ships.class[0]
                shipSize = ships.size[0]
            } else {
                classIdentifier = 'game-cell'
                shipSize = 0
            }

            cells.forEach(cell => {
                cell.addEventListener('mouseover', event => {
                    
                    console.log(shipSize)
                    displayHoverShips(event, shipSize, classIdentifier)


                    // e.target.classList = `game-cell ${classIdentifier}`
                })
                // cell.addEventListener('mouseleave', e => {
                //     removeHoverShips()
                //     // e.target.classList = `game-cell`
                // })
            })  

            
                // function removeHoverShips(e , size){
                //     let currentIdNum = e.target.id.replaceAll('gameCell', '')
                //     // console.log(currentIdNum)
                    
                //     for(let i = 0; i < size; i++){
                //         const elementID = 'gameCell' + `${+currentIdNum[0]}` +`${+currentIdNum[1]+i}`
                //         console.log(elementID)
                //         const element = document.querySelector(`.placement-board > #${elementID}`)
                        
                //         // console.log(element)
                //         if((+currentIdNum[1] + i > (Math.ceil((+currentIdNum[1]) / 10) * 10)) || element === null) {
                //             break   
                //         } 
                //         element.classList = `game-cell`
                        
                //     }
                //     // console.log(elements)
                    
                // }







        })
        

        function displayHoverShips(event , size, classIdentifier){
            const currentIdNum = event.target.id.replaceAll('gameCell', '')
            // console.log(currentIdNum)
            
            for(let i = 0; i < size; i++){
                const elementID = 'gameCell' + `${+currentIdNum[0]}` +`${+currentIdNum[1]+i}`
                // console.log(elementID)
                const element = document.querySelector(`.placement-board > #${elementID}`)
                
                // console.log(element)
                if((+currentIdNum[1] + i > (Math.ceil((+currentIdNum[1]) / 10) * 10)) || element === null) {
                    break   
                } 
                element.classList = `game-cell ${classIdentifier}`
                
            }

            event.target.addEventListener('mouseleave', removeHoverShips)
            // console.log(elements)
            
        }

        function removeHoverShips(){
            const elements = document.querySelectorAll('.placement-board > .game-cell')
            // console.log(currentIdNum)
            elements.forEach(element => {
                element.classList = `game-cell`
            })    
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
