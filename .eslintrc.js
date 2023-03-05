module.exports = {
  root: true,
  extends: '@react-native-community',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-else-return': 'error',
        'no-nested-ternary': 'error',
        'no-shadow': 'off',
        'no-undef': 'off',
        'react-native/no-color-literals': 'error',
        'react-native/no-inline-styles': 'error',
        'react-native/no-unused-styles': 'error',
        'react/jsx-sort-props': 'error',
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
};
