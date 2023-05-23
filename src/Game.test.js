
import Game from "./Game";
import Player from "./Player";


test('Reset active player', () => {
    const newGame = new Game()
    expect(newGame.resetActivePlayer()).toStrictEqual({
        name: "Player 1",
        obj: new Player(),
        gameboard: 'leftGameboard',
        positions: [[2, 2], [5, 6], [3, 3], [7, 0], [8, 1]]
    })
})

test('Switching active player', () => {
    const newGame = new Game()
    newGame.switchPlayerTurn()
    expect(newGame.activePlayer).toStrictEqual(
        {
            name: "Computer",
            obj: new Player(),
            gameboard: 'rightGameboard',
            positions: [[9, 8], [4, 2], [1, 7], [7, 5], [6, 1]]
        }
    )
})

test.skip('Verify end game condition', () => {
    const newGame = new Game()
    newGame.generatePlayers()
    const coordinates = [[9, 8], [4, 2], [4,3], [1, 7], [1,8], [1,9], [7, 5], [7,6], [7,7], [7,8], [6, 1], [6,2], [6,3], [6,4], [6,5]]
    coordinates.forEach(coordinate => {
        newGame.players[0].obj.attackBoard(newGame.players[1].obj, coordinate)
    })
    expect(newGame.verifyEndGame()[0].name).toStrictEqual("Computer")
})