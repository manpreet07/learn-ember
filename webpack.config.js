const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'EmberMicrofrontend',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './dist',
      },
      shared: {},
    }),
  ],
};
