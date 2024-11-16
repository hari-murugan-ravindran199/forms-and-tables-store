module.exports = {
    preset: 'jest-preset-angular',
    testEnvironment: 'jsdom',
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    collectCoverage: true,
    coverageReporters: ['html'],
    coverageDirectory: 'coverage/my-angular-app',
    moduleNameMapper: {
      '^@app/(.*)': 'forms-and-tables-store/src/app/$1',
      '^@env/(.*)': 'forms-and-tables-store/src/environments/$1',
    },
    transform: {
      '^.+\\.(ts)$': 'ts-jest',
      '^.+\\.(ts|js|html)$': 'jest-preset-angular',
    },
  };
  