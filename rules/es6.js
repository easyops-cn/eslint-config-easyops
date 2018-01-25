module.exports = {
  rules: {
    // disallow useless computed property keys
    // https://eslint.org/docs/rules/no-useless-computed-key
    "no-useless-computed-key": "error",

    // suggest using of const declaration for variables that are never modified after declared
    // https://eslint.org/docs/rules/prefer-const
    "prefer-const": [
      "error",
      {
        destructuring: "all",
        ignoreReadBeforeAssign: true
      }
    ],

    // require method and property shorthand syntax for object literals
    // https://eslint.org/docs/rules/object-shorthand
    "object-shorthand": [
      "error",
      "always",
      {
        ignoreConstructors: true,
        avoidQuotes: true
      }
    ],

    // suggest using the spread operator instead of .apply()
    // https://eslint.org/docs/rules/prefer-spread
    "prefer-spread": "error"
  }
};
