
class World extends Phaser.Scene {
    constructor() {
        super({key: 'World'});
    }
    
    preload() {
        this.load.path = './assets/images/';
        this.load.atlas('world', 'finn.png', 'finn_atlas.json');
        console.log('Scene: World');
    }

    create() {
        
    }

    update() {

    }
}

export default World;
