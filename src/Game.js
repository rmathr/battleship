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
    generatePlayers() {
        this.generatePlayerOne()
        this.generatePlayerTwo()
        return [this.players[0].obj.board, this.players[1].obj.board]
    }
    generatePlayerOne() {

        





        const playerOne = this.players[0]
        playerOne.obj = new Player()
        playerOne.positions.forEach((position, index) => {
            // newPlayer.positionShip(index + 1, position)
            playerOne.obj.positionShip(index + 1, position)
        })
        let leftGameboard = interactDOM().hookDOMelement(playerOne.gameboard)
        interactDOM().appendElementAndDefineContent(leftGameboard, playerOne.obj.board.board)
    }
    generatePlayerTwo(){
        const player2 = this.players[1]

        player2.obj = new Player()
        player2.obj.positionShip(1, player2.positions[0])
        
        while(player2.positions[1][0] === player2.positions[0][0]){
            player2.positions[1] = generateCoordinates(2)
        }
        player2.obj.positionShip(2, player2.positions[1])

        while(player2.positions[2][0] === player2.positions[1][0] ||
            player2.positions[2][0] === player2.positions[0][0]){
            player2.positions[2] = generateCoordinates(3)
        }
        player2.obj.positionShip(3, player2.positions[2])

        while(player2.positions[3][0] === player2.positions[2][0] ||
            player2.positions[3][0] === player2.positions[1][0] ||
            player2.positions[3][0] === player2.positions[0][0]){
            player2.positions[3] = generateCoordinates(4)
        }
        player2.obj.positionShip(4, player2.positions[3])

        while(player2.positions[4][0] === player2.positions[3][0] ||
            player2.positions[4][0] === player2.positions[2][0] ||
            player2.positions[4][0] === player2.positions[1][0] ||
            player2.positions[4][0] === player2.positions[0][0]){
            player2.positions[4] = generateCoordinates(5)
        }
        player2.obj.positionShip(5, player2.positions[4])
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
            interactDOM().handleWinAnimation()
        }

        return sunkPlayer
    }
}