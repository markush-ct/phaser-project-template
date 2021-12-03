class MyGame extends Phaser.Scene {
  
    constructor() {
        super('MyGame');
    }

    create() {
        // Get center of X and Y
        const centerX = this.game.renderer.width / 2;
        const centerY = this.game.renderer.height / 2;

        // Play audio
        this.sound.play('battle', { loop: true });

        // Add Phaser logo
        const phaserLogo = this.add.image(centerX, centerY - 15, 'phaser_logo');
        phaserLogo.setDisplaySize(150, 150);

        // Add text
        const text = this.add.text(centerX, centerY + 75, 'Phaser 3 Project Template');
        text.setOrigin(0.5);
    }

}

export default MyGame;