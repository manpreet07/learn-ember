const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'ember-app',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './dist',
      },
      shared: {},
    }),
  ],
};
