module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint/eslint-plugin"
    ],
    "extends": [
        "plugin:@typescript-eslint/recommended",
    ],
    "root": true,
    "ignorePatterns": [
        ".eslintrc.js",
        "dist"
    ]
}