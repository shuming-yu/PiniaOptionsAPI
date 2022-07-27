module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'space-before-function-paren': 0,
    'vue/no-multiple-template-root': 0,
    'quotes': 'off',
    'semi': 'off',
    'comma-dangle': 'off'
  }
}
