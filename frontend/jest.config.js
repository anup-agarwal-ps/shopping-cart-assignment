module.exports = {
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["<rootDir>/__tests__/**/*.test.js", "!<rootDir>/__tests__/test-utils/**/*"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },

  collectCoverage: true,
  collectCoverageFrom: ["src/**/*"]

};
