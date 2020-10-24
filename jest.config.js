module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}', 'SQLite/**/*.{js,jsx}'],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]
};