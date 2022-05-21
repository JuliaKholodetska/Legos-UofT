// module.exports = {
//     // files to include in coverage report
//     // include: all js/ts files
//     // exclude: next system folder, styles, files starting with dot, files with config in name, node_modules, graphql, theme folder
//     automock: false,
//     bail: false,
//     verbose: true,
//     collectCoverageFrom: [
//         '**/*.{js,jsx,ts,tsx}',
//         '__pageTests__/*.{.js,.jsx, .ts, .tsx}',
//         '!.next/**',
//         '!config/**',
//         '!graphql/**',
//         '!k8s/**',
//         '!styles/**',
//         '!*.d.ts',
//         '!**/*.config.{js,jsx,ts,tsx}',
//         '!.*.{js,jsx,ts,tsx}',
//         '!node_modules/**',
//         '!coverage/**',
//         '!graphql/**',
//         '!theme/**'
//     ],
//     moduleNameMapper: {
//         '\\.(css)$': 'identity-obj-proxy',
//         '^@/auth(.*)$': '<rootDir>/auth/$1',
//         '^@/components(.*)$': '<rootDir>/components/$1',
//         '^@/config(.*)$': '<rootDir>/config/$1',
//         '^@/features(.*)$': '<rootDir>/features/$1',
//         '^@/graphql(.*)$': '<rootDir>/graphql/$1',
//         '^@/hooks(.*)$': '<rootDir>/hooks/$1',
//         '^@/pages(.*)$': '<rootDir>/pages/$1',
//         '^@/state(.*)$': '<rootDir>/state/$1',
//         '^@/styles(.*)$': '<rootDir>/styles/$1',
//         '^@/theme(.*)$': '<rootDir>/theme/$1',
//         '^@/utils(.*)$': '<rootDir>/utils/$1'
//     },
//     setupFilesAfterEnv: ['<rootDir>/config/jest/jest.stub.js'],
//     testMatch: [
//         '<rootDir>/**/__tests__/**/*.test.{js,jsx}',
//         '<rootDir>/__pageTests__/*.test.{js,jsx}'
//     ],

//     testPathIgnorePatterns: ['/node_modules/', './pages/', './coverage/'],
//     transform: {
//         '^.+\\.js$': [
//             'babel-jest',
//             {
//                 configFile: './config/jest/babel.config.js'
//             }
//         ]
//     },
//     testEnvironment: 'jsdom',
//     testRunner: 'jest-jasmine2',
//     globals: {
//         window: true
//     },
//     coverageReporters: ['lcov', 'text']
// };
