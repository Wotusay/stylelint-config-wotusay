module.exports = {
    root: true,
    "plugins": ["stylelint-scss"],
    "extends": ["stylelint-config-standard"],
    "overrides": [
        {
            "files": ["*.scss", "**/*.scss", "*.css", "**/*.css"],
            "rules": {
                "selector-class-pattern": "([a-z0-9]+(-{1})?[a-z0-9]+)|(--|__)",
                "indentation": 4,
                "max-line-length": 90,
                "selector-list-comma-newline-after": null,
                "block-closing-brace-empty-line-before": null,
                "rule-empty-line-before": "always",
                "declaration-empty-line-before": null,
                "font-family-name-quotes": "always-where-recommended",
                "color-named": "always-where-possible",
                "comment-empty-line-before": null,
                "comment-whitespace-inside": null,
                "function-url-quotes": "never",
                "string-quotes": "single",
                "declaration-no-important": true,
                "no-duplicate-selectors": true,
                "selector-max-id": 0,
                "number-max-precision": 2,
                "shorthand-property-no-redundant-values": true,
                "selector-no-qualifying-type": [
                    true,
                    {
                        "ignore": ["attribute"]
                    }
                ],
                "selector-max-universal": 0,
                "selector-no-vendor-prefix": true,
                "property-no-vendor-prefix": true,
                "media-feature-name-case": "lower",
                "number-no-trailing-zeros": true,
                "number-leading-zero": "never",
                "value-keyword-case": "lower",
                "at-rule-name-case": "lower",
                "at-rule-name-space-after": "always",
                "at-rule-semicolon-newline-after": "always",
                "unit-case": "lower",
                "no-extra-semicolons": true,
                "declaration-block-no-shorthand-property-overrides": true,
                "property-case": "lower",
                "selector-max-empty-lines": 0,
                "no-invalid-double-slash-comments": true,
                "no-invalid-position-at-import-rule": true,
                "color-hex-length": "short",
                "color-function-notation": "legacy",
                "length-zero-no-unit": true,
                "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
                "scss/at-else-closing-brace-space-after": "always-intermediate",
                "scss/at-else-empty-line-before": "never",
                "scss/at-else-if-parentheses-space-before": "always",
                "scss/at-function-parentheses-space-before": "never",
                "scss/at-function-pattern": [
                    "^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$",
                    {
                        "message": "Expected function name to be kebab-case"
                    }
                ],
                "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
                "scss/at-if-closing-brace-space-after": "always-intermediate",
                "scss/at-mixin-argumentless-call-parentheses": "never",
                "scss/at-mixin-parentheses-space-before": "never",
                "scss/at-mixin-pattern": [
                    "^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$",
                    {
                        "message": "Expected mixin name to be kebab-case"
                    }
                ],
                "scss/at-rule-conditional-no-parentheses": true,
                "scss/dollar-variable-colon-space-after": "always",
                "scss/dollar-variable-colon-space-before": "never",
                "scss/dollar-variable-empty-line-before": [
                    "always",
                    {
                        "except": ["after-dollar-variable", "first-nested"],
                        "ignore": ["after-comment", "inside-single-line-block"]
                    }
                ],
                "scss/dollar-variable-pattern": [
                    "^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$",
                    {
                        "message": "Expected variable to be kebab-case"
                    }
                ],
                "scss/double-slash-comment-empty-line-before": [
                    "always",
                    {
                        "except": ["first-nested"],
                        "ignore": ["between-comments", "stylelint-commands"]
                    }
                ],
                "scss/double-slash-comment-whitespace-inside": "always",
                "scss/percent-placeholder-pattern": [
                    "^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$",
                    {
                        "message": "Expected placeholder to be kebab-case"
                    }
                ]
            }
        }
    ]
}
