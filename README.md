# eslint-config-tribou

Start with JS Standard Style but push towards better readability, git-awareness, vim-usability, and React and ES6 best practices

##### Semver Warning: this project's rules are still stabilizing and will most likely have breaking changes until v2.x. Consider declaring with "1.8.x" in your `package.json`.

#### Quick Start

```bash
npm install --save-dev \
    babel-eslint@^6.1.2 \
    eslint@^3.3.1 \
    eslint-config-tribou@1.8.x \
    eslint-config-airbnb@^10.0.1 \
    eslint-config-standard@^6.0.0 \
    eslint-plugin-flowtype@^2.11.0 \
    eslint-plugin-import@^1.14.0 \
    eslint-plugin-jsx-a11y@^2.1.0 \
    eslint-plugin-promise@^2.0.1 \
    eslint-plugin-react@^6.0.0 \
    eslint-plugin-standard@^2.0.0
```

Then add the following to your `.eslintrc`:

```json
{
  "extends": [
    "tribou"
  ]
}
```

To have flow only check `\\ @flow` annotated files:

```json
{
  "extends": [
    "tribou"
  ],
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  }
}
```

*Note*
If you use Syntastic for Vim, be sure to add `pmsorhaindo/syntastic-local-eslint.vim` to your `.vimrc` to ensure you're always using local `node_modules/.bin/eslint`.
