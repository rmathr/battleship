import Player from "./Player";
import Gameboard from "./gameboardCreator";
import Ship from "./shipCreator";



test('Place a ship on player 1 Gameboard', () =>{
    const playerOne = new Player()
    expect(playerOne.positionShip(2, [5,5])).toStrictEqual(
        [
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", 2 , 2, "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
        ]
    )

})

test('Player 1 attacking the enemy Gameboard (missed)', () => {
    const playerOne = new Player()
    const playerTwo = new Player()
    expect(playerOne.attackBoard(playerTwo, [3,3])).toStrictEqual("missed in [3,3]")
})

test('Player 1 attacking the enemy Gameboard (hit)', () => {
    const playerOne = new Player()
    const playerTwo = new Player()
    playerTwo.positionShip(2, [3,3])
    expect(playerOne.attackBoard(playerTwo, [3,3])).toStrictEqual("hit in [3,3]")
})

test("Report if player's ships have been sunk", () => {
    const playerOne = new Player()
    const playerTwo = new Player()
    playerOne.positionShip(2, [5,5])
    playerTwo.attackBoard(playerOne, [5,5])
    playerTwo.attackBoard(playerOne, [5,6])
    expect(playerOne.board.verifyActiveShips()).toBe(0)
})

