export class Player {
    constructor(x, y, engine, display, map) {
        this.position = x + ',' + y;
        this.engine = engine;
        this.display = display;
        this.map = map;
        this.handleUserInput = this.handleUserInput.bind(this);
    }
    get x() {
        return parseInt(this.position.split(',')[0]);
    }
    get y() {
        return parseInt(this.position.split(',')[1]);
    }
    drawPlayer() {
        this.display.draw(this.x, this.y, "@", "#FF0");
    }
    drawWithoutPlayer(location){
        let [x,y] = this.position.split(',')
        const tile = this.map[this.position]
        this.display.draw(parseInt(x), parseInt(y), tile.floor);
    }
    act() {
        window.addEventListener("keyup", this.handleUserInput);
        this.engine.lock();
    }
    handleUserInput(e) {
        e.preventDefault();
        if (!"hjkl".includes(e.key)) {
            console.log(e.key + "is not a valid input");
            return;
        }
        var location = "";
        if (e.key == "h") {
            location = (this.x - 1) +  ',' + this.y;
        } else if(e.key === "j") {
            location = this.x + ',' + (this.y + 1);
        } else if (e.key === "k") {
            location = this.x + ',' + (this.y - 1);
        } else if (e.key === "l") {
            location = (this.x + 1) + ',' + this.y;
        }
        if(!this.userCanMove(location)) {
            return;
        }
        this.drawWithoutPlayer(location)
        this.position = location;
        this.drawPlayer();
        window.removeEventListener("keyup", this.handleUserInput);
        this.engine.unlock();
    }
    userCanMove(location) {
        var tile = this.map[location]
        if (tile === undefined) {
            alert('Error undefiened tile for location: ' + location);
            return false;
        }
        if (tile.passable) {
            return true;
        }
        return false;
    }
}
