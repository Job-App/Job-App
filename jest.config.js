module.exports = {
  "preset": "react-native",
  "moduleDirectories": [
    "node_modules",
    "src"
  ],
  "collectCoverageFrom": [
    'src/**/*.{js,jsx}',
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
  },
  "testEnvironment": "jest-environment-node",
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)?$",
  "moduleFileExtensions": [
    "js",
    "jsx",
    "json",
    "node"
  ],
  "moduleNameMapper": {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  },
  "transformIgnorePatterns": [],
  "testPathIgnorePatterns": [
    "<rootDir>/SQLite"
  ],
  "collectCoverage": true,
  "setupFilesAfterEnv": ["<rootDir>/src/setupTests.js"],
  "setupFiles": [
    "./node_modules/react-native-gesture-handler/jestSetup.js"
  ],
};