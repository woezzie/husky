module.exports = {
  "*.js": [
    "prettier -w --list-different",
    "eslint --fix",
    "lit-analyzer --strict",
  ],
  "!*.js": "prettier -w --list-different",
};
