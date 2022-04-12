const {override, addWebpackModuleRule} = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackModuleRule({
      test: /\.svg$/,
      include: [path.resolve(__dirname, "./src/icons")],
      use: [
          {
              loader: "svg-sprite-loader",
              options: {symbolId: "icon-[name]"}
          }]
  }),
  addWebpackModuleRule({
      test: /\.md$/,
      use: "raw-loader"
  })
);
