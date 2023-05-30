import interactDOM from "./DOMinteraction";


export default function handleEffects(){

    const changeAxis = interactDOM().hookDOMelement('changeAxis')
    changeAxis.textContent = `${changeAxis.value === 'h' ? 'axis: horizontal' : 'axis: vertical'}`


    const rightGameboard = interactDOM().hookDOMelement('rightGameboard')
    const AIcells = document.querySelectorAll('#rightGameboard > .game-cell')
    AIcells.forEach(cell => {
        cell.textContent = ''
        if(cell.value == "hit"){
            cell.classList.add('hit')
            cell.disabled = true
        }  
        if(cell.value == "missed"){
            cell.classList.add('missed')
            cell.disabled = true
        }
        // if(cell.textContent == "hit" || cell.textContent == "missed") cell.disabled = true
        if(cell.disabled == true) cell.style.cursor = "not-allowed"
    })

    const playerCells = document.querySelectorAll('#leftGameboard > .game-cell')
    const gamecells = document.querySelectorAll('.gameboard > .game-cell')

    playerCells.forEach(cell => {
        if(cell.textContent == "hit"){
            cell.classList.add('hit')
            cell.textContent = ''
        } else if(cell.textContent == "missed"){
            cell.classList.add('missed')
            cell.textContent = ''
        }else if(cell.textContent == "11h"){
            handleShipClass(cell, 'ship11')
        }else if(cell.textContent == "11v"){
            handleShipClass(cell, 'ship11v')
        }else if(cell.textContent == "21h"){
            handleShipClass(cell, 'ship21')
        }else if(cell.textContent == "22h"){
            handleShipClass(cell, 'ship22')
        }else if(cell.textContent == "21v"){
            handleShipClass(cell, 'ship21v')
        }else if(cell.textContent == "22v"){
            handleShipClass(cell, 'ship22v')
        }else if(cell.textContent == "31h"){
            handleShipClass(cell, 'ship31')
        }else if(cell.textContent == "32h"){
            handleShipClass(cell, 'ship32')
        }else if(cell.textContent == "33h"){
            handleShipClass(cell, 'ship33')
        }else if(cell.textContent == "31v"){
            handleShipClass(cell, 'ship31v')
        }else if(cell.textContent == "32v"){
            handleShipClass(cell, 'ship32v')
        }else if(cell.textContent == "33v"){
            handleShipClass(cell, 'ship33v')
        }else if(cell.textContent == "41h"){
            handleShipClass(cell, 'ship41')
        }else if(cell.textContent == "42h"){
            handleShipClass(cell, 'ship42')
        }else if(cell.textContent == "43h"){
            handleShipClass(cell, 'ship43')
        }else if(cell.textContent == "44h"){
            handleShipClass(cell, 'ship44')
        }else if(cell.textContent == "41v"){
            handleShipClass(cell, 'ship41v')
        }else if(cell.textContent == "42v"){
            handleShipClass(cell, 'ship42v')
        }else if(cell.textContent == "43v"){
            handleShipClass(cell, 'ship43v')
        }else if(cell.textContent == "44v"){
            handleShipClass(cell, 'ship44v')
        }else if(cell.textContent == "51h"){
            handleShipClass(cell, 'ship51')
        }else if(cell.textContent == "52h"){
            handleShipClass(cell, 'ship52')
        }else if(cell.textContent == "53h"){
            handleShipClass(cell, 'ship53')
        }else if(cell.textContent == "54h"){
            handleShipClass(cell, 'ship54')
        }else if(cell.textContent == "55h"){
            handleShipClass(cell, 'ship55')
        }else if(cell.textContent == "51v"){
            handleShipClass(cell, 'ship51v')
        }else if(cell.textContent == "52v"){
            handleShipClass(cell, 'ship52v')
        }else if(cell.textContent == "53v"){
            handleShipClass(cell, 'ship53v')
        }else if(cell.textContent == "54v"){
            handleShipClass(cell, 'ship54v')
        }else if(cell.textContent == "55v"){
            handleShipClass(cell, 'ship55v')
        }
    })

    function handleShipClass(item, classIdentifier){
        item.classList.add('ships')
        item.classList.add(classIdentifier)
        item.textContent = ''
    }

}