/*
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
};
*/

module.exports = {
  presets: [
    '@babel/react',
    'module:metro-react-native-babel-preset',
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    [
      'module-resolver',
      {
        alias: {
          '^react-native$': 'react-native-web',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        [
          'transform-react-remove-prop-types',
          {
            mode: 'remove',
            ignoreFilenames: ['node_modules'],
          },
        ],
      ],
    },
  },
}