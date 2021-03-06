<div align="center">
<h1>stylelint-config-wotusay</h1>
</div>

<!-- prettier-ignore-start -->
[![version][version-badge]][package]
[![MIT License][license-badge]][license]
<!-- prettier-ignore-end -->

## Table of Contents

-   [Table of Contents](#table-of-contents)
-   [Installation](#installation)
-   [Usage](#usage)
-   [VS Code](#vs-code)

## Installation

This module should be installed as one of your project's `devDependencies`:

```
yarn add stylelint-config-wotusay -D
```

## Usage

Then add the extends to your .stylelintrc.js:

```js
module.exports = {
    extends: 'stylelint-config-wotusay',
    overrides: [
        (rules: {
            // your overrides
        }),
    ],
};
```

Also add an .stylelintignore file to your project root.
With following content:

```
*.ts
*.html
*.js
*.json
```

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[version-badge]:https://img.shields.io/npm/v/stylelint-config-wotusay
[package]: https://www.npmjs.com/package/eslint-config-wotusay
[license-badge]: https://img.shields.io/npm/l/stylelint-config-wotusay
[license]: https://github.com/Wotusay/stylelint-config-wotusay/blob/main/LICENSE
<!-- prettier-ignore-end -->
