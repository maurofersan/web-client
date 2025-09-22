const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    onboarding: "http://localhost:4201/remoteEntry.js",
    otp: "http://localhost:4202/remoteEntry.js",
    loans: "http://localhost:4203/remoteEntry.js",
    identity: "http://localhost:4204/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
