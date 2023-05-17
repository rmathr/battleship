import Ship from "./shipCreator";

test('Create a new Ship test', () => {
    const shipExample = new Ship(3)
    expect(shipExample).toEqual(
        {
            size: 3,
            hits: 0,
            sunk: false
        })
    shipExample.hit()
    expect(shipExample).toEqual(
        {
            size: 3,
            hits: 1,
            sunk: false
        })
    expect(shipExample.isSunk()).toBe(false)
})