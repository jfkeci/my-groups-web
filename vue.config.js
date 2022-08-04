const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: window.location.origin.includes("localhost")
    ? "/"
    : "/my-groups-web/",
});
