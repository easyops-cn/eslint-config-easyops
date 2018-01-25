module.exports = {
  extends: ["./rules/es6"].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    strict: "error"
  }
};
