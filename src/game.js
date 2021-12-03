import Phaser from 'phaser';
import MyGame from './scenes/MyGame';
import Preload from './scenes/Preload';

// Game configuration
const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 288,
    height: 192,
    parent: 'stage',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    render: {
        pixelArt: true
    }
});

// Add the scenes
game.scene.add('MyGame', MyGame);
game.scene.add('Preload', Preload, true);