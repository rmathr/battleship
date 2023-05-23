import Player from "./Player"
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
                positions: [[9, 8], [4, 2], [1, 7], [7, 5], [6, 1]]
            }
        ]
        this.activePlayer = this.players[0]
    }
    generatePlayers(){
    this.players.forEach(player => {
        // let newPlayer = player.obj
        player.obj = new Player()
        player.positions.forEach((position, index) => {
            // newPlayer.positionShip(index + 1, position)
            player.obj.positionShip(index + 1, position)
        })
        let gameboard = interactDOM().hookDOMelement(player.gameboard)
        // interactDOM().appendElementAndDefineContent(gameboard, newPlayer.board.board)
        interactDOM().appendElementAndDefineContent(gameboard, player.obj.board.board)
    })
    return [this.players[0].obj.board, this.players[1].obj.board]
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
            alert('wow')
            interactDOM().handleWinAnimation()
        }

        return sunkPlayer
    }
}