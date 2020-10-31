module.exports = {
  presets: [
    "react-native",
    'module:metro-react-native-babel-preset',
    ["@babel/preset-env", {"modules": "commonjs"}],
  ],
  "env": {
    "test": {
      "presets": ["react-native", ["@babel/preset-env"]]
    }
  }
}