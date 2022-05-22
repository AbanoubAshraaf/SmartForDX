module.exports = {
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    env: {
        jest: true,
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx', '**/*.spec.js', '**/*.spec.jsx'],
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off',
                'object-shorthand': ['error', 'always'],
                'react-native/no-inline-styles': 0,
            },
        },
    ],
    ignorePatterns: ['**/coverage'],
};
