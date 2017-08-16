const path = require('path');
const proxy = require('proxy-middleware');
const url = require('url');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chokidar = require('chokidar');
const config = require('../config');
const webpackConfig = require('../config/webpack/development');

const WEBPACK_DEV_SERVER_PORT = config.webpackDevServerPort;
const devServerHost = `http://localhost:${WEBPACK_DEV_SERVER_PORT}/`;
const cwd = process.cwd();

module.exports = (app) => {
  // Proxy static assets to webpack-dev-server
  app.use('/', proxy(url.parse(devServerHost)));

  // Create new webpack dev server with hot reloading enabled
  const webpackDevServer = new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    historyApiFallback: true,
    hot: true,
    // More minimal logging than the "minimal" setting
    stats: {
      assets: false,
      cached: false,
      cachedAssets: false,
      children: false,
      chunks: false,
      chunkModules: false,
      chunkOrigins: false,
      hash: false,
      maxModules: 0,
      modules: false,
      moduleTrace: false,
      performance: false,
      publicPath: false,
      reasons: false,
      source: false,
      timings: false,
      version: false,
    },
  });

  // Start the webpack dev server
  webpackDevServer.listen(WEBPACK_DEV_SERVER_PORT);

  // Do "hot-reloading" of express stuff on the server
  // Throw away cached modules and re-require next time
  // Ensure there's no important state in there!
  const watcher = chokidar.watch(path.join(cwd, './server'));

  watcher.on('ready', () => {
    watcher.on('all', (eventName, filePath) => {
      Object.keys(require.cache).forEach((id) => {
        if (/\/server\//.test(id)) {
          delete require.cache[id];
        }
      });

      const shortPath = filePath.replace(cwd, '');
      console.log(`\nModule cache cleared due to change in:\n${shortPath}\n`);
    });
  });
};
