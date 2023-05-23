import _ from 'lodash'

const interactDOM = function(){

    const createElementWithClassAndId = function(type, className, idName){
        const element = document.createElement(type)
        element.classList.add(`${className}`)
        element.id = `${idName}`
        return element
    }

    const hookDOMelement = function (idName){
        const elem = document.getElementById(`${idName}`)
        return elem
    }

    const getInputValue = function(idName){
        return interactDOM().hookDOMelement(idName).value
    }

    const appendElementAndDefineContent = function (container, array) {
        while (container.hasChildNodes()){
        container.removeChild(container.firstChild)
        }


        for(let i = 0; i < array.length; i++){
            for(let j = 0; j < array[i].length; j++){
                let cell             
                cell = interactDOM().createElementWithClassAndId('button', 'game-cell', `gameCell${i}${j}`)
                cell.value = array[i][j]
                cell.textContent = `${array[i][j]}`
                container.appendChild(cell)
            }
        }
        

        // const newArray = _.flatten(array)
        // console.log(newArray)
        // for (let i = 0; i < newArray.length; i++){
        //         let cell             
        //         cell = interactDOM().createElementWithClassAndId('button', 'game-cell', `gameCell#${i}`)
        //         cell.value = newArray[i]
        //         cell.textContent = `${newArray[i]}`
        //         container.appendChild(cell)
        // }
    }

    const updateElementValue = function(container, elementId, text){
        const cell = document.querySelector(`#${container} > #${elementId}`)
        cell.textContent = text 
    }

    const handleWinAnimation = function(){
        const buttons = document.querySelectorAll('#rightGameboard > button.game-cell')
        buttons.forEach(button => button.disabled = true)
    }



    

    const returnClickedCoordinates = function(event){
            const coordinates = []
            coordinates.push(+event.target.id.replaceAll('gameCell', '').charAt(0)) 
            coordinates.push(+event.target.id.replaceAll('gameCell', '').charAt(1)) 
            console.log(coordinates)
            return coordinates
            // console.log(playerOne.attackBoard(playerTwo, coordinates))
    }

    // const returnClickedCoordinates = function(gameboard){
    //     const gameboardContainer = interactDOM().hookDOMelement(gameboard)  
    //     gameboardContainer.addEventListener('mousedown', e => {
    //         const coordinates = []
    //         coordinates.push(+e.target.id.replaceAll('gameCell#', '').charAt(0)) 
    //         coordinates.push(+e.target.id.replaceAll('gameCell#', '').charAt(1)) 
    //         console.log(coordinates)
    //         return coordinates
    //         // console.log(playerOne.attackBoard(playerTwo, coordinates))
    //     }) 
    // }


    const formReset = function(formId){
    const form = interactDOM().hookDOMelement(`${formId}`)
    form.reset()    
    }
    
    return { 
        createElementWithClassAndId, 
        hookDOMelement, 
        getInputValue, 
        appendElementAndDefineContent,
        formReset,
        updateElementValue,
        handleWinAnimation,
        returnClickedCoordinates
    }


}

export default interactDOM