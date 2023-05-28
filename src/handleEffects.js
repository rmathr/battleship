import interactDOM from "./DOMinteraction";

export default function handleEffects(){

    const changeAxis = interactDOM().hookDOMelement('changeAxis')
    changeAxis.textContent = `${changeAxis.value === 'h' ? 'axis: horizontal' : 'axis: vertical'}`


    const rightGameboard = interactDOM().hookDOMelement('rightGameboard')
    const AIcells = document.querySelectorAll('#rightGameboard > .game-cell')
    AIcells.forEach(cell => {
        if(cell.textContent == "hit" || cell.textContent == "missed") cell.disabled = true
    })
}