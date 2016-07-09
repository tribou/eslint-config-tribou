# eslint-config-tribou

Start with JS Standard Style but push towards better readability, git-awareness, and React and ES6 best practices

##### Semver Warning: this project's rules are still stabilizing and will most likely have breaking changes until v2.x.

#### Quick Start

```bash
npm install --save-dev \
  eslint \
  babel-eslint \
  eslint-config-tribou
```

Then add the following to your `.eslintrc`:

```json
{
  "extends": [
    "tribou"
  ]
}
```

#### EmberJS

Use this `.eslintrc`:

```json
{
  "extends": [
    "tribou/lib/ember"
  ]
}
```
