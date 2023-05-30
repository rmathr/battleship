import {Player} from "./Player";
import {Gameboard} from "./gameboardCreator";
import Ship from "./shipCreator";
import interactDOM from "./DOMinteraction";
import handleEffects from "./handleEffects";
import Game from "./Game";
import positioningShips from "./positioningShips";

function gameLogic(game, positions) {
    game.generatePlayers(positions)
    // while(game.verifyEndGame().length < 1){


    const enemyGameboard = interactDOM().hookDOMelement(game.players[1].gameboard)

    enemyGameboard.addEventListener('mousedown', e => { if (game.verifyEndGame().length < 1) handleClick(e) })

    

    function handleClick(e) {
        const coordinates = interactDOM().returnClickedCoordinates(e)
        game.players[0].obj.attackBoard(game.players[1].obj, coordinates)
        // console.log(game.verifyEndGame().length)
        // if(game.verifyEndGame().length > 0) return true
        handleEffects()
        game.verifyEndGame()
        if (game.verifyEndGame().length < 1){
            game.switchPlayerTurn()
            if (game.activePlayer === game.players[1]) game.players[1].obj.randomAttack(game.players[0].obj)
            handleEffects()
            game.verifyEndGame()
            game.switchPlayerTurn()
        }
        
        // console.log(game.verifyEndGame().length)
    }


}

function restartGame(){
    const gameRestart = interactDOM().hookDOMelement('restartGame')
    const gameOver = interactDOM().hookDOMelement('gameOver')


    gameRestart.addEventListener('mousedown', e=> {
        location.reload()
    })
    
    
    
}


export { gameLogic, restartGame }