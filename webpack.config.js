import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin';

export const plugins = [
  new ModuleFederationPlugin({
    name: 'ember-app',
    filename: 'remoteEntry.js',
    exposes: {
      './App': './dist',
    },
    shared: {},
  }),
];
