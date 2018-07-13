module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
      "browser": true,
    },
    "overrides": [{
        files: [
          "**/test.js"
        ],
        env: {
          jest: true
        },
        plugins: ["jest"],
        rules: {
          "jest/no-disabled-tests": "warn",
          "jest/no-focused-tests": "error",
          "jest/no-identical-title": "error",
          "jest/prefer-to-have-length": "warn",
          "jest/valid-expect": "error"
        }
      }
    ],
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
      "react/prop-types": [0],
      "jsx-a11y/anchor-is-valid": [ "error", { "components": [ "Link" ], "specialLink": [ "to" ] } ],
      "import/no-named-as-default": [0],
    },
};
