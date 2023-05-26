import interactDOM from "./DOMinteraction";

export default function handleEffects(){

    const changeAxis = interactDOM().hookDOMelement('changeAxis')
    changeAxis.textContent = `${changeAxis.value === 'h' ? 'axis: horizontal' : 'axis: vertical'}`



}