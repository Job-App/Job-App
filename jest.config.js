module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}', 'SQLite/**/*.{js,jsx}'],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  preset: 'react-native',
  verbose : true,
  transformIgnorePatterns: [
      "node_modules/(?!(jest-)?react-native)",
      "node_modules/?!(react-navigation)"
    ],
    moduleDirectories: [
            "node_modules",
            "src"
        ],
  transform: {
          "^.+\\.ts?$": "ts-jest",
          "^.+\\.tsx?$": "ts-jest",
          "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
          "^.+\\.(css|scss|less)$": "jest-css-modules"
        },
 globals: {
    "ts-jest": {
     babelConfig: true,
     tsConfig: {
     allowJs: true,
     },
}
}
};

/*
  transform: {
          "^.+\\.ts?$": "ts-jest",
          "^.+\\.tsx?$": "ts-jest",
          "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
          "^.+\\.(css|scss|less)$": "jest-css-modules"
        },
          globals: {
              "ts-jest": {
                babelConfig: true,
              }
            }
  transformIgnorePatterns: [

      "node_modules/(?!(jest-)?react-native)",
        "node_modules/?!(react-navigation)",
              "node_modules/(?!(react-native"
                + "|react-navigation-tabs"
                + "|react-native-splash-screen"
                + "|react-native-screens"
                + "|react-native-reanimated"
              + ")/)",

    ],
  */