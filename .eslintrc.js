module.exports = {
  root: true,
  extends:[
    'eslint:recommended',
 '@react-native',
  ],
  rules: {
    'react-native/no-inline-styles': 'off',  // Disable the inline styles rule,
  'react-hooks/exhaustive-deps': 'off',

  },
};
