import * as ROT from 'rot-js';
import {Player} from './player.js';
import {dungeonFloor} from './creators/floor.js';

export class Game {
    constructor() {
        var options = {
            fontSize: 24
        }
        this.display = new ROT.Display(options);
        document.body.appendChild(this.display.getContainer());
        this.map = new ROT.Map.Arena(10, 10);
        this.map.create(dungeonFloor(this.map));
        this.drawMap();
        this.scheduler = new ROT.Scheduler.Simple();
        this.engine = new ROT.Engine(this.scheduler);
        this.player = new Player(3,3, this.engine, this.display, this.map);
        this.player.drawPlayer();
        this.scheduler.add(this.player, true);
    }
    run() {
        this.engine.start();
    }
    drawMap() {
        for (var key in this.map) {
            var parts = key.split(",");
            var x = parseInt(parts[0]);
            var y = parseInt(parts[1]);
            this.display.draw(x, y, this.map[key].floor);
        }
    }
}