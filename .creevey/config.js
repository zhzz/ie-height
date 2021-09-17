const path = require("path");

const config = {
  storybookDir: path.join(__dirname, "../.storybook"),
  reportDir: path.join(__dirname, "report"),
  screenDir: path.join(__dirname, "images"),
  gridUrl: "https://frontinfra:frontinfra@grid.testkontur.ru/wd/hub",
  storybookUrl: "http://10.35.64.60:6060",
  maxRetries: 0,
  useWebpackToExtractTests: true,
  browsers: {
    ie11: {
      browserName: "internet explorer",
      viewport: { width: 1024, height: 720 },
    },
    // ie11alpha: {
    //   browserName: "internet explorer",
    //   viewport: { width: 1024, height: 720 },
    // },
    // ie11beta: {
    //   browserName: "internet explorer",
    //   viewport: { width: 1024, height: 720 },
    // },
    // ie11gamma: {
    //   browserName: "internet explorer",
    //   viewport: { width: 1024, height: 720 },
    // },
    // ie11delta: {
    //   browserName: "internet explorer",
    //   viewport: { width: 1024, height: 720 },
    // },
    // ie11epsilon: {
    //   browserName: "internet explorer",
    //   viewport: { width: 1024, height: 720 },
    // },
    // ie11zeta: {
    //   browserName: "internet explorer",
    //   viewport: { width: 1024, height: 720 },
    // },
    // ie11iota: {
    //   browserName: "internet explorer",
    //   viewport: { width: 1024, height: 720 },
    // },
    // ie11kappa: {
    //   browserName: "internet explorer",
    //   viewport: { width: 1024, height: 720 },
    // },
    // ie11lambda: {
    //   browserName: "internet explorer",
    //   viewport: { width: 1024, height: 720 },
    // },
    // ie11mu: {
    //   browserName: "internet explorer",
    //   viewport: { width: 1024, height: 720 },
    // },
    // ie11xi: {
    //   browserName: "internet explorer",
    //   viewport: { width: 1024, height: 720 },
    // },
    // ie11omikron: {
    //   browserName: "internet explorer",
    //   viewport: { width: 1024, height: 720 },
    // },
    // ie11pi: {
    //   browserName: "internet explorer",
    //   viewport: { width: 1024, height: 720 },
    // },
    // ie11sigma: {
    //   browserName: "internet explorer",
    //   viewport: { width: 1024, height: 720 },
    // },
    // ie11omega: {
    //   browserName: "internet explorer",
    //   viewport: { width: 1024, height: 720 },
    // },
  },
};

module.exports = config;
