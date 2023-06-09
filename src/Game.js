import {Player} from "./Player"
import { generateCoordinates } from "./Player";
import interactDOM from "./DOMinteraction"

export default class Game{
    constructor(){
        this.players = [
            {
                name: "Player 1",
                // obj: new Player(),
                gameboard: 'leftGameboard',
                positions: [[2, 2], [5, 6], [3, 3], [7, 0], [8, 1]]
            },
            {
                name: "Computer",
                // obj: new Player(),
                gameboard: 'rightGameboard',
                // positions: [[9, 8], [4, 2], [1, 7], [7, 5], [6, 1]]
                positions: [generateCoordinates(1), generateCoordinates(2), generateCoordinates(3), generateCoordinates(4), generateCoordinates(5)]
            }
        ]
        this.activePlayer = this.players[0]
    }
    generatePlayers(positions) {
        this.generatePlayerOne(positions)
        this.generatePlayerTwo()
        return [this.players[0].obj.board, this.players[1].obj.board]
    }
    generatePlayerOne(positions) {
        

        const playerOne = this.players[0]
        playerOne.obj = new Player()
        positions.forEach(elem => {
            playerOne.obj.positionShip(elem.size, elem.coord, elem.axis)
        })

        // playerOne.positions.forEach((position, index) => {
        //     // newPlayer.positionShip(index + 1, position)
        //     playerOne.obj.positionShip(index + 1, position)
        // })

        let leftGameboard = interactDOM().hookDOMelement(playerOne.gameboard)
        interactDOM().appendElementAndDefineContent(leftGameboard, playerOne.obj.board.board)
    }
    generatePlayerTwo(){

        const player2 = this.players[1]
        player2.obj = new Player()

        const positions = generateCoordinates(5)
        positions.forEach(elem => {
            player2.obj.positionShip(elem.size, elem.coord, elem.axis)
        })
        
        let rightGameboard = interactDOM().hookDOMelement(player2.gameboard)
        interactDOM().appendElementAndDefineContent(rightGameboard, player2.obj.board.board)
    }
    resetActivePlayer(){
        this.activePlayer = this.players[0]
        return this.activePlayer
    }
    switchPlayerTurn(){
        this.activePlayer = this.activePlayer === this.players[0] ? this.players[1] : this.players[0]
    }
    verifyEndGame(){
        const sunkPlayer = this.players.filter(player => player.obj.board.verifyActiveShips() === 0)
        // const sunkPlayer = this.players.map(player => player.obj.board)
        if(sunkPlayer.length > 0) {
            // alert('wow')
            interactDOM().handleWinAnimation(sunkPlayer)
        }

        return sunkPlayer
    }
}