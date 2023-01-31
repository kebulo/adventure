import Player from './scenes/Player.js';
import Bootloader from './Bootloader.js';
                
var config = {
    title: "Adventure",
    width: 800,
    height: 600,
    parent: "container",
    backgroundColor: "#000000",
    pixelArt: true,
    scene: [Bootloader, Player],
    type: Phaser.AUTO,
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
            gravity: {y: 0}
        }
    }
};


new Phaser.Game(config);