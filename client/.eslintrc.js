const path = require('path');
module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "project": path.resolve(__dirname, "./tsconfig.json"),
    "sourceType": "module",
    "tsconfigRootDir": __dirname
  },
  "plugins": [
      "@typescript-eslint",
      "react",
      "react-hooks"
  ],
  "root": true,
  "rules": {
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/type-annotation-spacing": 2,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-use-before-define": 2,
    "curly": 2,
    "default-case": 2,
    "dot-notation": 2,
    "eol-last": 0,
    "guard-for-in": 2,
    "no-bitwise": 2,
    "no-caller": 2,
    "no-console": 0,
    "no-debugger": 2,
    "no-empty": 2,
    "no-empty-function": 2,
    "no-eval": 2,
    "no-fallthrough": 2,
    "no-multiple-empty-lines": 2,
    "no-new-wrappers": 2,
    "no-unused-labels": 2,
    "quotes": [2, "single"],
    "radix": 2,
    "react/no-unescaped-entities": 0,
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
    "sort-keys": 1,
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
