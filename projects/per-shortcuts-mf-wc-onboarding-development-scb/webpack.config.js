const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "per-shortcuts-mf-wc-onboarding-development-scb",

  exposes: {
    "./Module":
      "./projects/per-shortcuts-mf-wc-onboarding-development-scb/src/app/app.routes.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
