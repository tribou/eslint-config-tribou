module.exports = {
  "extends": [
    "eslint-config-airbnb",
    "eslint-config-standard"
  ],
  "parser": "babel-eslint",
  "plugins": [
    "flow-vars"
  ],
  "rules": {
    "strict": 0,
    "arrow-body-style": [2, "always"],
    "brace-style": [2, "stroustrup"],
    "comma-dangle": [2, "always-multiline"],
    "flow-vars/define-flow-type": 1,
    "flow-vars/use-flow-type": 1,
    "max-len": [2, 80, 2, { "ignoreUrls": true, "ignorePattern": true }],
    "padded-blocks": [2, "always"]
  }
}
