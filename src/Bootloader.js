class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }

    preload() {
        console.log('Bootloader :D');
        this.load.path = './assets/';

        this.load.image('terrain', 'map/grass.png');
        this.load.image('threes', 'map/threes.png');
        this.load.image('objects', 'map/objects.png');

        //this.load.tilemapTiledJSON('tilemap_json', 'map/adventure_map.json');

        this.load.image("terrain", "map/terrain_atlas.png");
        this.load.image("items", "map/items.png");

        this.load.tilemapTiledJSON("mappy", "map/adventure_map.json");
    }

    create() {

        let mappy = this.add.tilemap("mappy");

        let terrain = mappy.addTilesetImage("terrain_atlas", "terrain");
        let itemset = mappy.addTilesetImage("threes");

        //layers
        let botLayer = mappy.createLayer("Terrain", [terrain], 0, 0);
        let topLayer = mappy.createLayer("Threes", [itemset], 0, 0);
    }
}
export default Bootloader;