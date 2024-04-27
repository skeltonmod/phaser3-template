import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
    }

    preload ()
    {
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');
        this.load.image('cursor', 'cursor.png');

        this.load.image('tiles', 'tilemap/1201-sheet.png');
        this.load.tilemapTiledJSON('map', 'tilemap/map01.json');

        this.load.spritesheet('splats', 'blood-sheet.png', {frameWidth: 8, frameHeight: 8});
        this.load.aseprite("bum_sprite", "bum.png", "bum.json");
        
    }

    create ()
    {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('Game');
        
    }
}
