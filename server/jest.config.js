/** @type {import('jest').Config} */
const config = {
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 70,
      lines: 70,
      statements: -10,
    },
  },
};

module.exports = config;
