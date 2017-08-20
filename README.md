# eslint-config-tribou

[![npm
version](https://badge.fury.io/js/eslint-config-tribou.svg)](https://badge.fury.io/js/eslint-config-tribou)
[![Build
Status](https://travis-ci.org/tribou/eslint-config-tribou.svg?branch=master)](https://travis-ci.org/tribou/eslint-config-tribou)
[![Project Status: Moved to https://github.com/tribou/eslint-plugin-tribou –
The project has been moved to a new location, and the version at that location
should be considered
authoritative.](http://www.repostatus.org/badges/latest/moved.svg)](http://www.repostatus.org/#moved)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Ftribou%2Feslint-config-tribou.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Ftribou%2Feslint-config-tribou?ref=badge_shield)
to [eslint-plugin-tribou](https://github.com/tribou/eslint-plugin-tribou)
[![bitHound
Code](https://www.bithound.io/github/tribou/eslint-config-tribou/badges/code.svg)](https://www.bithound.io/github/tribou/eslint-config-tribou)

Start with JS Standard Style but push towards better readability,
git-awareness, vim-usability, and React and ES6 best practices.

## This project has moved to
[eslint-plugin-tribou](https://github.com/tribou/eslint-plugin-tribou)

For backwards-compatibility to >= v3, use `eslint-plugin-tribou@^0.2.0`. To get
the latest rules for a new project, install `eslint-plugin-tribou@latest`.

#### Quick Start

```bash
npm install --save-dev \
    eslint-config-tribou@^3.0.0 \
    babel-eslint@^7.1.0 \
    eslint@^3.9.1 \
    eslint-config-airbnb@^15.0.1 \
    eslint-config-standard@^10.2.1 \
    eslint-plugin-flowtype@^2.25.0 \
    eslint-plugin-import@^2.1.0 \
    eslint-plugin-jsx-a11y@^5.0.3 \
    eslint-plugin-promise@^3.3.1 \
    eslint-plugin-react@^7.0.1 \
    eslint-plugin-standard@^3.0.1
```

Then add the following to your `.eslintrc`:

```json
{
  "extends": [
    "tribou"
  ]
}
```

Or add an `.eslintrc.yml`:

```yml
extends:
  - tribou

# Wow, that was easier... 😉
```

By default, Flow typing is required for an entire project since
`eslint-plugin-flowtype` will require the `\\ @flow` annotation to be set at
the top of every file and subsequently check for all other flow annotation
requirements in that file. This allows new projects to enforce Flow typing on
every file from the start.

If you do not wish to use Flow typing on every file (or at all) in a project,
this config can still enforce all of its other standards (including Flow
linting on files that **do** have the `// @flow` annotation). To disable this
"universal" Flow typing requirement in your `.eslintrc`:

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

Or in your `.eslintrc.yml`:

```yml
extends:
  - tribou

settings:
  flowtype:
    onlyFilesWithFlowAnnotation: true
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Ftribou%2Feslint-config-tribou.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Ftribou%2Feslint-config-tribou?ref=badge_large)