import { Scene } from 'phaser';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        const cursor = this.add.image(0, 0, 'cursor');

        this.input.on('pointermove', (pointer) => {
            cursor.x = pointer.x;
            cursor.y = pointer.y;
        }, this)
    }
}
