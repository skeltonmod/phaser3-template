import { Boot } from "./scenes/Boot";
import { Game } from "./scenes/Game";
import { Preloader } from "./scenes/Preloader";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
export default new Phaser.Game({
  type: Phaser.WEBGL,
  width: 64,
  height: 64,
  parent: "game-container",
  callbacks: {
    postBoot: (game) => {
      game.canvas.style.width = "100%";
      game.canvas.style.height = "100%";
    },
  },
  render: {
    pixelArt: true,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scene: [Boot, Preloader, Game],
});
