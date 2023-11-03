class Player extends Phaser.Scene {
    distanceText;

    constructor() {
        super({key: 'Player', active: true});
        this.MatterObject = Phaser.Physics.Matter.Matter;
    }

    preload() {
        this.load.path = './assets/images/';
        this.load.atlas('player', 'finn.png', 'finn_atlas.json');
    }

    create() {
        // Player collision zone and sensor
        let playerCollider = this.MatterObject.Bodies.circle(0, 0, 16, {isSensor: false, label: 'playerCollider'});
        let playerSensor = this.MatterObject.Bodies.circle(0, 0, 28, {isSensor: true, label: 'playerSensor'});

        const compoundBody = this.MatterObject.Body.create({
            parts: [playerCollider, playerSensor],
            frictionAir: 0.35
        });

        this.player = this.matter.add.sprite(100, 200, "player", "tile001");

        let test = this.matter.add.sprite(300, 200, "player", "tile001");
        this.player.setExistingBody(compoundBody);
        this.player.setPosition(100, 300);

        this.createAnimations();

        // Player key register
        this.inputKeys = this.input.keyboard.addKeys({
            up: 'w',
            down: 's',
            left: 'a',
            right: 'd'
        });

        //this.input.on('pointerdown', function (pointer) {
        //    this.target.x = pointer.x;
        //    this.target.y = pointer.y;
        //    
        //    this.physics.moveToObject(this.player, this.target, 250);
        //}, this);

        this.distanceText = this.add.text(10, 10, 'Click to set this.target', { fill: '#00ff00' });
    }

    update() {

        this.manageWalking();

        //var distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, this.target.x, this.target.y);

        //if (this.player.body.speed > 0) {
        //    this.distanceText.setText('Distância: ' + distance);

        //    if (distance < 4) {
        //        this.player.body.reset(this.target.x, this.target.y);
        //    }
        //} else {
        //    this.player.play('finn_running_fd');
        //}


    }

    /**
    * Create animations and set them to the current object.
    */
    createAnimations() {
        this.finn_running_down = {
            key: 'finn_running_down',
            frames: this.anims.generateFrameNames('player', { prefix: 'run_fd/tile', start: 1, end: 6, zeroPad: 4 }),
            frameRate: 12,
            repeat: -1
        };

        this.finn_running_up = {
            key: 'finn_running_up',
            frames: this.anims.generateFrameNames('player', { prefix: 'run_fu/tile', start: 1, end: 6, zeroPad: 4 }),
            frameRate: 12,
            repeat: -1
        };

        this.finn_running_right = {
            key: 'finn_running_right',
            frames: this.anims.generateFrameNames('player', { prefix: 'run_r/tile', start: 1, end: 6, zeroPad: 4 }),
            frameRate: 12,
            repeat: -1
        };

        this.finn_running_left = {
            key: 'finn_running_left',
            frames: this.anims.generateFrameNames('player', { prefix: 'run_fl/tile', start: 1, end: 6, zeroPad: 4 }),
            frameRate: 12,
            repeat: -1
        };

        this.finn_running_up_left = {
            key: 'finn_running_up_left',
            frames: this.anims.generateFrameNames('player', { prefix: 'run_ful/tile', start: 1, end: 6, zeroPad: 4 }),
            frameRate: 12,
            repeat: -1
        };

        this.finn_running_down_left = {
            key: 'finn_running_down_left',
            frames: this.anims.generateFrameNames('player', { prefix: 'run_fdl/tile', start: 1, end: 6, zeroPad: 4 }),
            frameRate: 12,
            repeat: -1
        };

        this.finn_running_up_right = {
            key: 'finn_running_up_right',
            frames: this.anims.generateFrameNames('player', { prefix: 'run_fur/tile', start: 1, end: 6, zeroPad: 4 }),
            frameRate: 12,
            repeat: -1
        };

        this.finn_running_down_right = {
            key: 'finn_running_down_right',
            frames: this.anims.generateFrameNames('player', { prefix: 'run_fdr/tile', start: 1, end: 6, zeroPad: 4 }),
            frameRate: 12,
            repeat: -1
        };

        this.anims.create(this.finn_running_down);
        this.anims.create(this.finn_running_right);
        this.anims.create(this.finn_running_up);
        this.anims.create(this.finn_running_left);
        this.anims.create(this.finn_running_up_left);
        this.anims.create(this.finn_running_down_left);
        this.anims.create(this.finn_running_up_right);
        this.anims.create(this.finn_running_down_right);
    }

    /**
    * Handle the walking action and animation for the player. Void function.
    */
    manageWalking() {
        let speed = 1;
        let target = new Phaser.Math.Vector2();

        if (this.inputKeys.left.isDown && this.inputKeys.up.isDown) {
            target.y = -1;
            target.x = -1;
            this.player.anims.play(this.finn_running_up_left, true);    
        } else if (this.inputKeys.left.isDown && this.inputKeys.down.isDown) {
            target.y = 1;
            target.x = -1;
            this.player.anims.play(this.finn_running_down_left, true);
        } else if (this.inputKeys.left.isDown) {
            target.x = -1;
            this.player.anims.play(this.finn_running_left, true);
        } else if (this.inputKeys.right.isDown && this.inputKeys.up.isDown) {
            target.y = -1;
            target.x = 1;
            this.player.anims.play(this.finn_running_up_right, true);
        } else if (this.inputKeys.right.isDown && this.inputKeys.down.isDown) {
            target.y = 1;
            target.x = 1;
            this.player.anims.play(this.finn_running_down_right, true);
        } else {
            if (this.inputKeys.up.isDown) {
                target.y = -1;
                this.player.anims.play(this.finn_running_up, true);
            } else if (this.inputKeys.down.isDown) {
                target.y = 1;
                this.player.anims.play(this.finn_running_down, true);
            }
            
            if (this.inputKeys.left.isDown) {
                target.x = -1;
                this.player.anims.play(this.finn_running_left, true);
            } else if (this.inputKeys.right.isDown) {
                target.x = 1;
                this.player.anims.play(this.finn_running_right, true);
            }
        }

        if (
            this.inputKeys.up.isUp && 
            this.inputKeys.down.isUp && 
            this.inputKeys.left.isUp && 
            this.inputKeys.right.isUp
        ) {
            this.player.anims.stop();
        }

        target.normalize();
        target.scale(speed);

        this.player.setVelocity(target.x, target.y);
    }
}

export default Player;
