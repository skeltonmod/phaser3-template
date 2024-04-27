import Phaser from "phaser";
import { angleToCardinal, pointDirection } from "../utils";
import { BloodSplat } from "./bloodsplat";

const states = ["walk", "idle", "dead", "hurt"];
export class Bum extends Phaser.Physics.Arcade.Sprite {
  constructor(game, x, y) {
    super(game, x, y, "bum_sprite");
    // game.add.existing(this);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.health = 4;
    this.scene.physics.world.setBounds(0, 0, 128, 128);
    this.cardinalDirection = "NE";
    this.state = "walk";
    this.setCollideWorldBounds(true);
    this.setBounce(1);
    this.setOrigin(0.5);
    this.setInteractive(this.scene.input.makePixelPerfect(200));
    this.setBodySize(5);

    this.on("pointerdown", (pointer) => {
      this.health -= 1;
      this.state = "hurt";
      new BloodSplat(game, this.x, this.y);
      this.scene.time.addEvent(this.hurtTimer);

      // this.scene.tweens.add({
      //   targets: this,
      //   props: {
      //     scaleX: { value: 2, duration: 100, yoyo: true },
      //     scaleY: { value: 2, duration: 100, yoyo: true },
      //     x: {from: this.body.x, to: Phaser.Math.Between(0, 128), duration: 100},
      //   },
      //   ease: "Cubic",
      //   onComplete: () => {
      //     this.state = "idle"
      //   }
      // });
    });

    this.setVelocity(
      Phaser.Math.Between(-50, 50),
      Phaser.Math.Between(-50, 50)
    );

    // TIMERS
    this.idleTimer = new Phaser.Time.TimerEvent({
      delay: Phaser.Math.Between(100, 300),
    });
    this.hurtTimer = new Phaser.Time.TimerEvent({ delay: 80 });
    this.walkTimer = 100;
    this.scene.events.on("update", this.update, this);
  }

  update(time, delta) {
    if (this.health <= 0) {
      this.state = "dead";
    }
    switch (this.state) {
      case "walk":
        this.cardinalDirection = angleToCardinal(this.body.angle);
        this.walkTimer -= 1;

        if (this.walkTimer < 0) {
          this.walkTimer = 100;
          this.state = "idle";
          this.scene.time.addEvent(this.idleTimer);
        }
        break;

      case "idle":
        this.setVelocity(0, 0);
        if (this.idleTimer.getProgress() >= 1) {
          this.setVelocity(
            Phaser.Math.Between(-50, 50),
            Phaser.Math.Between(-50, 50)
          );
          this.state = "walk";
        }
        break;
      case "hurt":
        if (this.hurtTimer.getProgress() >= 1) {
          this.state = "walk";
        }
        this.setVelocity(
          Phaser.Math.Between(-50, 50),
          Phaser.Math.Between(-50, 50)
        );

        break;

      case "dead":
        this.removeInteractive();
        this.setDepth(0);
        this.setDrag(Phaser.Math.Between(10, 30));
        break;
    }

    if (this.body.drag.x || this.body.drag.y) {
      if (this.body.velocity.x > 0 || this.body.velocity.y) {
        if (Phaser.Math.Between(0, 10) === 10) {
          this.cardinalDirection = angleToCardinal(this.body.angle);
          new BloodSplat(this.scene, this.getCenter().x, this.getCenter().y + 7);
        }
      } else {
        this.body.destroy();
      }
    }
    if (states.includes(this.state)) {
      this.play(`${this.state}_${this.cardinalDirection}`, true);
    }
  }
}
