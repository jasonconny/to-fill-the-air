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
		"plugin:react/recommended"
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
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/indent": "error",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-use-before-define": "error",
        "curly": "error",
        "default-case": "error",
        "dot-notation": "error",
        "eol-last": "off",
        "guard-for-in": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-console": "off",
        "no-debugger": "error",
        "no-empty": "error",
        "no-empty-function": "error",
        "no-eval": "error",
        "no-fallthrough": "error",
        "no-multiple-empty-lines": "error",
        "no-new-wrappers": "error",
        "no-unused-labels": "error",
        "quotes": [2, "single"],
        "radix": "error",
        "react/no-unescaped-entities": "off",
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "sort-keys": "warn",
    },
	"settings": {
		"react": {
			"version": "detect"
		}
	}
};
