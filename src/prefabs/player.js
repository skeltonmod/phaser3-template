import Phaser from "phaser";

export class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(game, x, y){
        super(game, x, y);
        this.setOrigin(0.5);
        
    }
}