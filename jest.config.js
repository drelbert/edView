const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
