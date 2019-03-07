// simple CreateCallback that always builds a floor tile

function dungonFloor(map){
    this.map = map;
    return function (x,y) {
        const key = x + ',' + y;
        this.map[key] = {
            floor: '.',
            passable: true,
            lightPassable: true
        }
    }.bind(this);
}

module.exports = {
    dungeonFloor: dungonFloor
}