import World from './scenes/World.js';
import Player from './scenes/Player.js';
import Bootloader from './Bootloader.js';
                
var config = {
    title: "Adventure",
    width: 800,
    height: 600,
    parent: "container",
    backgroundColor: "#C1C1C1",
    pixelArt: true,
    scene: [Bootloader, Player, World],
    type: Phaser.AUTO,
    physics: {
        default: "matter",
        matter: {
            debug: true,
            gravity: {y: 0}
        }
    }
};


new Phaser.Game(config);