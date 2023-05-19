class Ship{
    constructor(size){
        this.size = size
        this.hits = 0
        this.sunk = false
    }
    hit(){
        this.hits += 1
    }
    isSunk(){
        this.sunk = this.size > this.hits ? false : true
        // console.log(this.sunk)
        return this.sunk
    }
}

export default Ship

