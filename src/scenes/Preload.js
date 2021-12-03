import phaserLogo from 'assets/images/phaser_logo.png';
import battle from 'assets/audio/battle.wav';
 
class Preload extends Phaser.Scene {

    constructor() {
        super('Preload');
    }

    preload() {
        // Load the assets
        this.load.image('phaser_logo', phaserLogo);
        this.load.audio('battle', battle);
    }
    
    create() {
        // Start MyGame scene
        this.scene.start('MyGame');
    }

}

export default Preload;