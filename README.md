# Phaser Vite Template
This is a starter project that uses best-practices for developing a web-based game using the latest Phaser 3 engine (via node module), ES6, and Vite. The project is configured specifically for #LOWREZJAM or any Low Res games with crisp pixel art and a gorgeous resolution of 64 x 64 pixels.

### Versions

This template has been updated for:

- [Phaser 3.80.1](https://github.com/phaserjs/phaser)
- [Vite 5.1.4](https://github.com/vitejs/vite)


## Requirements

[Node.js](https://nodejs.org) and [Yarn](https://yarnpkg.com/) is required to install dependencies and run scripts via `yarn`.


## Available Commands

| Command | Description |
|---------|-------------|
| `yarn install` | Install project dependencies |
| `yarn dev` | Launch a development web server |
| `yarn build` | Create a production build in the `dist` folder |

## Writing Code

After cloning the repo, run `yarn install` from your project directory. Then, you can start the local development server by running `yarn dev`.

The local development server runs on `http://localhost:8080` by default. Please see the Vite documentation if you wish to change this, or add SSL support.

Once the server is running you can edit any of the files in the `src` folder. Vite will automatically recompile your code and then reload the browser.

## Template Project Structure

We have provided a default project structure to get you started. This is as follows:

- `index.html` - A basic HTML page to contain the game.
- `src` - Contains the game source code.
- `src/main.js` - The main entry point. This contains the game configuration and starts the game.
- `src/scenes/` - The Phaser Scenes are in this folder.
- `public/style.css` - Some simple CSS rules to help with page layout.
- `public/assets` - Contains the static assets used by the game.

## Handling Assets

Vite supports loading assets via JavaScript module `import` statements.

This template provides support for both embedding assets and also loading them from a static folder. To embed an asset, you can import it at the top of the JavaScript file you are using it in:

```js
import logoImg from './assets/logo.png'
```

To load static files such as audio files, videos, etc place them into the `public/assets` folder. Then you can use this path in the Loader calls within Phaser:

```js
preload ()
{
    //  This is an example of an imported bundled image.
    //  Remember to import it at the top of this file
    this.load.image('logo', logoImg);

    //  This is an example of loading a static image
    //  from the public/assets folder:
    this.load.image('background', 'assets/bg.png');
}
```

When you issue the `yarn build` command, all static assets are automatically copied to the `dist/assets` folder.

## Deploying to Production

After you run the `yarn build` command, your code will be built into a single bundle and saved to the `dist` folder, along with any other assets your project imported, or stored in the public assets folder.

In order to deploy your game, you will need to upload *all* of the contents of the `dist` folder to a public facing web server.

## Customizing the Template

### Vite

If you want to customize your build, such as adding plugin (i.e. for loading CSS or fonts), you can modify the `vite/config.*.mjs` file for cross-project changes, or you can modify and/or create new configuration files and target them in specific yarn tasks inside of `package.json`. Please see the [Vite documentation](https://vitejs.dev/) for more information.
