module.exports = {
  presets: [
    [
      "@babel/preset-env",
      { loose: true, modules: "commonjs", targets: { ie: "11" } },
    ],
  ],
  plugins: [["@babel/plugin-transform-runtime"]],
};
