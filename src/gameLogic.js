import {Player} from "./Player";
import Gameboard from "./gameboardCreator";
import Ship from "./shipCreator";
import interactDOM from "./DOMinteraction";

function gameLogic(game) {

    // while(game.verifyEndGame().length < 1){


    const enemyGameboard = interactDOM().hookDOMelement(game.players[1].gameboard)

    enemyGameboard.addEventListener('mousedown', e => { if (game.verifyEndGame().length < 1) handleClick(e) })

    

    function handleClick(e) {
        const coordinates = interactDOM().returnClickedCoordinates(e)
        console.log(game.players[0].obj.attackBoard(game.players[1].obj, coordinates))
        // console.log(game.verifyEndGame().length)
        // if(game.verifyEndGame().length > 0) return true
        game.verifyEndGame()
        if (game.verifyEndGame().length < 1){
            game.switchPlayerTurn()
            if (game.activePlayer === game.players[1]) console.log(game.players[1].obj.randomAttack(game.players[0].obj))
            game.verifyEndGame()
            game.switchPlayerTurn()
        }
        
        // console.log(game.verifyEndGame().length)
    }

    // if(game.verifyEndGame().length === 0) console.log("End game!!")

}




export { gameLogic }