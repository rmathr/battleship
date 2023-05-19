import Gameboard from "./gameboardCreator";
import Ship from "./shipCreator";

test('Placing a ship on a given position', () =>{
    const newBoard = new Gameboard()
    const exampleShip = new Ship(2)
    expect(newBoard.placeShip(exampleShip, [5,5])).toStrictEqual(
        [
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", exampleShip.size , exampleShip.size, "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
        ]
    )
})

test('Receiving an atack on a given position (miss)', () =>{
    const newBoard = new Gameboard()
    const exampleShip = new Ship(2)
    newBoard.placeShip(exampleShip, [6,6])
    expect(newBoard.receiveAttack([5,5])).toBe("missed in [5,5]")
})

test('Receiving an atack on a given position (hit)', () =>{
    const newBoard = new Gameboard()
    const exampleShip = new Ship(2)
    newBoard.placeShip(exampleShip, [6,6])
    expect(newBoard.receiveAttack([6,6])).toBe("hit in [6,6]")
})

test('Reporting all missed atacks', ()=> {
    const newBoard = new Gameboard()
    const exampleShip = new Ship(2)
    newBoard.placeShip(exampleShip, [5,5])
    newBoard.receiveAttack([3,3])
    expect(newBoard.reportMissedAttacks()).toStrictEqual(Array([3,3]))
})

test('Report if all ships have been sunk', () => {
    const newBoard = new Gameboard()
    const exampleShip = new Ship(2)
    newBoard.placeShip(exampleShip, [5,5])
    newBoard.receiveAttack([5,5])
    newBoard.receiveAttack([5,6])
    expect(newBoard.verifyActiveShips()).toBe(0)
})