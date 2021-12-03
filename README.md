# Phaser Project Template with Webpack 5

A Phaser Project Template with ES6 support via [Babel 7](https://babeljs.io/) and [Webpack 5](https://webpack.js.org/) that includes live server and production-ready builds.

This project template has been made from the latest version of [Phaser](https://phaser.io/).

## Requirements

[Node.js](https://nodejs.org/) is required to install important dependencies and run scripts via `npm`.

## Available Commands

Install important dependencies.

```
npm install
```

Start development server.

```
npm start
```

Build files for production.

```
npm run build
```

## Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development server by running `npm start`.

After starting the development server with `npm start`, you can edit any files in the `src` folder and webpack will automatically recompile and reload your server (available at `http://localhost:3120` by default).

## Customizing the Template

### Babel

You can write modern ES6+ JavaScript and Babel will transpile it to a version of JavaScript that you want your project to support. The targeted browsers are set in the `.babelrc` file and the default currently targets all browsers with total usage over "0.25%".

```"targets": "> 0.25%, not dead"```

### Webpack

If you want to customize your build, such as adding a new webpack loader or plugin (i.e. for loading CSS or fonts), you can modify the `./webpack/development.js` file for cross-project changes, or you can modify and/or create new configuration files and target them in specific npm tasks inside of `package.json`.

## Deploying Code

After you run the `npm run build` command, your code will be built into a single bundle located at `./dist/game.bundle.min.js` along with any other assets that your project depended. 

If you put the contents of the `dist` folder in a publicly-accessible location (say something like `http://mywebsite.com/`), you should be able to open `http://mywebsite.com/index.html/` and play your game.