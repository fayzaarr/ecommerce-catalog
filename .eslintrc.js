module.exports = {
    parserOptions: {
      requireConfigFile: false
    },
    env: {
      browser: true,
      node: true,
      es2021: true
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended'
    ],
    rules: {
      'vue/max-attributes-per-line': 'off',
      'vue/require-default-prop': 'off',
      'vue/no-lone-template' : 'off',
      'vue/v-slot-style' : 'off'
    }
  };
  