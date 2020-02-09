module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'react-hooks',
		'@typescript-eslint'
	],
	'rules': {
		'@typescript-eslint/class-name-casing': 'error',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/type-annotation-spacing': 'error',
		'curly': 'error',
		'default-case': 'error',
		'dot-notation': 'off',
		'eol-last': 'off',
		'guard-for-in': 'error',
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'no-bitwise': 'error',
		'no-caller': 'error',
		'no-console': 'off',
		'no-debugger': 'error',
		'no-empty': 'error',
		'no-empty-function': 'error',
		'no-eval': 'error',
		'no-fallthrough': 'error',
		'no-multiple-empty-lines': 'error',
		'no-new-wrappers': 'error',
		'no-unused-labels': 'error',
		'quotes': [
			'error',
			'single'
		],
		'radix': 'error',
		'semi': [
			'error',
			'always'
		],
		'react/prop-types': 'off',
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies

	}
};
