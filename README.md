# eslint-config-tribou

Start with JS Standard Style but push towards better readability, git-awareness, and React and ES6 best practices

#### Quick Start

```bash
npm install --save-dev \
  eslint \
  babel-eslint \
  eslint-config-tribou \
  eslint-config-airbnb \
  eslint-config-standard \
  eslint-plugin-react \
  eslint-plugin-flow-vars \
  eslint-plugin-jsx-a11y \
  eslint-plugin-standard \
  eslint-plugin-import \
  eslint-plugin-promise
```

Then add the following to your `.eslintrc`:

```json
{
  "extends": [
    "tribou"
  ]
}
```

*Note*
If you use Syntastic for Vim, be sure to add `pmsorhaindo/syntastic-local-eslint.vim` to your `.vimrc` to ensure you're always using local `node_modules/.bin/eslint`.
