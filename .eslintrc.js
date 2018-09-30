module.exports = {
    parser: 'babel-eslint',
    "parserOptions": {
        "sourceType": "module",
        "allowImportExportEverywhere": true
      },
    extends: ['airbnb'],
    rules: {
        'react/jsx-filename-extension': 0,
    }
};