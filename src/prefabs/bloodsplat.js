import Phaser from "phaser";

export class BloodSplat extends Phaser.GameObjects.Sprite {
    constructor(game, x, y){
        super(game, x, y, 'splats', Phaser.Math.Between(0, 7));
        this.scene.add.existing(this);
        this.setDepth(1)
    }
}