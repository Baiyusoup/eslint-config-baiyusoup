// Anthony Fu 的typescript eslint config.
// https://github.com/antfu/

module.exports = {
  extends: ['@antfu/eslint-config-ts'],
  rules: {
    'semi': ['error', 'always', { omitLastInOneLineBlock: true }],
    '@typescript-eslint/semi': ['error', 'always', { omitLastInOneLineBlock: true }],
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'semi' } }],
    'brace-style': ['error', '1tbs'],
    '@typescript-eslint/brace-style': ['error', '1tbs'],
  },
}
