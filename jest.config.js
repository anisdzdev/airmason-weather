module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    testRegex: '/__tests__/.*\\.(test|spec)\\.(ts|tsx|js)$',
    setupFilesAfterEnv: [
        "<rootDir>/src/__tests__/setupTests.ts"
    ]
};