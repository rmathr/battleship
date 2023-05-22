import Player from "./Player";
import Gameboard from "./gameboardCreator";
import Ship from "./shipCreator";
import interactDOM from "./DOMinteraction";


class Game{
    constructor(){
        this.players = [
            {
                name: "Player 1",
                obj: new Player(),
                gameboard: 'leftGameboard',
                positions: [[2, 2], [5, 6], [3, 3], [7, 0], [8, 1]]
            },
            {
                name: "Computer",
                obj: new Player(),
                gameboard: 'rightGameboard',
                positions: [[9, 8], [4, 2], [1, 7], [7, 5], [6, 1]]
            }
        ]
        this.activePlayer = this.players[0]
    }
    generatePlayers(){
    this.players.forEach(player => {
        let newPlayer = player.obj
        player.positions.forEach((position, index) => {
            newPlayer.positionShip(index + 1, position)
        })
        let gameboard = interactDOM().hookDOMelement(player.gameboard)
        interactDOM().appendElementAndDefineContent(gameboard, newPlayer.board.board)
    })
    }
    resetActivePlayer(){
        this.activePlayer = this.players[0]
        return this.activePlayer
    }
    switchPlayerTurn(){
        this.activePlayer = this.activePlayer === this.players[0] ? this.players[1] : this.players[0]
    }
    verifyEndGame(){
       return this.players.filter(player => player.obj.board.verifyActiveShips() === 0)
    }
}


function generatePlayers(){
    const playerOne = generatePlayerOne()
    const playerTwo = generatePlayerTwo()

    return {playerOne, playerTwo}
}





function generatePlayerOne(){
    // const playerOne = new Player()
    const playerOne = roundSwitch.players[0].obj
    playerOne.positionShip(1, [2,2])
    playerOne.positionShip(2, [5,6])
    playerOne.positionShip(3, [3,3])
    playerOne.positionShip(4, [7,0])
    playerOne.positionShip(5, [8,1])
    const leftGameboard = interactDOM().hookDOMelement('leftGameboard')
    interactDOM().appendElementAndDefineContent(leftGameboard, playerOne.board.board)
    return playerOne
}

function generatePlayerTwo(){
    const playerTwo = roundSwitch.players[1].obj
    playerTwo.positionShip(1, [9,8])
    playerTwo.positionShip(2, [4,2])
    playerTwo.positionShip(3, [1,7])
    playerTwo.positionShip(4, [7,5])
    playerTwo.positionShip(5, [6,1])
    const rightGameboard = interactDOM().hookDOMelement('rightGameboard')
    interactDOM().appendElementAndDefineContent(rightGameboard, playerTwo.board.board)
    return playerTwo
}





async function handlePlayerAttack(){
    const rightGameboard = interactDOM().hookDOMelement('rightGameboard')
    const playerOne = roundSwitch.players[0].obj
    const playerTwo = roundSwitch.players[1].obj
    rightGameboard.addEventListener('mousedown', e => {
        const coordinates = []
        coordinates.push(+e.target.id.replaceAll('gameCell#', '').charAt(0)) 
        coordinates.push(+e.target.id.replaceAll('gameCell#', '').charAt(1)) 
        console.log(coordinates)
        console.log(playerOne.attackBoard(playerTwo, coordinates))
    }) 
}

async function handleComputerAttack(playerOne, playerTwo){
    function generateCoordinates(){
        const randomArray = []
        for(let i = 0; i < 2; i++){
            randomArray[i] = Math.floor(Math.random() * 9);
        }
        return randomArray
    }
    let coordinates = generateCoordinates()
    let attack = playerTwo.attackBoard(playerOne, coordinates)
    if(attack === "invalid coordinates"){
        coordinates = generateCoordinates()
        attack = playerTwo.attackBoard(playerOne, coordinates)
    }
    console.log(attack) 
}


const roundSwitch = (function (){
    const players = [
        {
            name: "Player 1",
            obj: new Player()
        },
        {
            name: "Computer",
            obj: new Player()
        }
    ]

    let activePlayer = players[0]
    
    const resetActivePlayer = function(){
        activePlayer = players[0]
        return activePlayer
    }
    
    const switchPlayerTurn = function(){
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
    }
    const getActivePlayer = () => activePlayer

    return { players, switchPlayerTurn, getActivePlayer, resetActivePlayer }
})()


function gameLogic(){
    
    
        if(roundSwitch.getActivePlayer() === roundSwitch.players[0]){
            console.log('Player One turn')
            handlePlayerAttack()
        } else {
            console.log('Player Two turn')
            // handleComputerAttack(generatePlayers().playerOne, generatePlayers().playerTwo)
        }
        roundSwitch.switchPlayerTurn()
    
    


    // console.log(playerOne.board.verifyActiveShips())
    
    // while(playerOne.board.verifyActiveShips() != 0 || playerTwo.board.verifyActiveShips() != 0){
    //     if(roundSwitch.getActivePlayer() === roundSwitch.players[0]){
    //         // console.log(roundSwitch.getActivePlayer())
    //         await handlePlayerAttack()
    //     } else {
    //         await handleComputerAttack(playerOne, playerTwo)
    //     }
    //     roundSwitch.switchPlayerTurn()
    // }
}


export { generatePlayers, gameLogic, Game }