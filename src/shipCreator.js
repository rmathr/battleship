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
        return this.size <= this.hits
    }
}

export default Ship

