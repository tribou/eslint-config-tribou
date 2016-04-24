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
    "brace-style": [2, "stroustrup"],
    "comma-dangle": [2, "always-multiline"],
    "flow-vars/define-flow-type": 1,
    "flow-vars/use-flow-type": 1,
    "padded-blocks": [2, "always"]
  }
}
