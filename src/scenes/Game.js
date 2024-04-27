import { Scene } from "phaser";
import { BloodSplat } from "../prefabs/bloodsplat";
import { pointDirection } from "../utils";
import { Bum } from "../prefabs/bum";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    // Load the map here for now
    const map = this.make.tilemap({ key: "map" });
    const tiles = map.addTilesetImage("1201-sheet", "tiles");
    this.anims.createFromAseprite("bum_sprite");
    const layer = map.createLayer(0, tiles, 0, 0);
    this.cursor = this.add.image(0, 0, "cursor");

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    const cursors = this.input.keyboard.createCursorKeys();
    this.controls = new Phaser.Cameras.Controls.FixedKeyControl({
      camera: this.cameras.main,
      right: cursors.right,
      left: cursors.left,
      up: cursors.up,
      down: cursors.down,
      speed: 0.2,
    });

    // this.input.on(
    //   "pointermove",
    //   (pointer) => {
    //     cursor.x = pointer.worldX;
    //     cursor.y = pointer.worldY;
    //   },
    //   this
    // );

    this.cursor.setDepth(4);
    this.test = [];
    const group = this.add.group({ runChildUpdate: true, classType: Bum });
    for (let i = 0; i < 10; ++i) {
      group.add(new Bum(this, Phaser.Math.Between(0, 128), Phaser.Math.Between(0, 128)))
    }

    this.physics.add.collider(group, group);
  }

  update(time, delta) {
    this.controls.update(delta);

    this.children.each((c) => {
      const child = c;
      if (child instanceof BloodSplat) {
        return;
      }

      child.setDepth(child.y);
    });

    this.cursor.x = this.input.activePointer.worldX;
    this.cursor.y = this.input.activePointer.worldY;
  }
}
