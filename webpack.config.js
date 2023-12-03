const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

export const plugins = [
  new ModuleFederationPlugin({
    name: 'EmberMicrofrontend',
    filename: 'remoteEntry.js',
    exposes: {
      './App': './dist',
    },
    shared: {},
  }),
];
