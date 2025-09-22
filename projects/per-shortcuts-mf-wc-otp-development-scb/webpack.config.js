const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "per-shortcuts-mf-wc-otp-development-scb",

  exposes: {
    "./Module":
      "./projects/per-shortcuts-mf-wc-otp-development-scb/src/app/app.routes.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
