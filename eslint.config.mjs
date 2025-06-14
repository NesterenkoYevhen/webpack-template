import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import securityPlugin from "eslint-plugin-security";
import sonarjsPlugin from "eslint-plugin-sonarjs";
import unicornPlugin from "eslint-plugin-unicorn";
import promisePlugin from "eslint-plugin-promise";
import regexpPlugin from "eslint-plugin-regexp";
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";

export default [
  {
    ignores: [
      '**/*.d.ts',
      '**/*.test.*',
      '**/__tests__/**',
      'webpack/',
      ".prettierrc.js"
    ],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json"
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    settings: {
      react: {
        version: "detect"
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
        },
        typescript: {
          project: "./tsconfig.json"
        }
      }
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "react": reactPlugin,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      "import": importPlugin,
      "security": securityPlugin,
      "sonarjs": sonarjsPlugin,
      "unicorn": unicornPlugin,
      "regexp": regexpPlugin,
      "promise": promisePlugin,
      "prettier": prettierPlugin
    },
    rules: {
      // Применение правил Prettier
      "prettier/prettier": "warn",

      // General rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "curly": ["error", "multi-line"],
      "quotes": ["error", "single", { "avoidEscape": true }],
      "no-magic-numbers": ["warn", { ignore: [0, 1, -1], ignoreArrayIndexes: true, enforceConst: true }],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] }
      ],
      "lines-between-class-members": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "linebreak-style": "off",

      // TypeScript
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": ["error", { "ts-expect-error": "allow-with-description" }],
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/prefer-optional-chain": "warn",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "warn",

      // React
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-key": "error",
      "react/jsx-no-target-blank": ["error", { enforceDynamicLinks: "always" }],
      "react/self-closing-comp": ["error", { component: true, html: true }],

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Accessibility
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-is-valid": "error",

      // Imports
      "import/no-unresolved": ["error"],
      "import/named": "off",
      "import/namespace": "off",
      "import/default": "off",
      "import/no-duplicates": "error",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true }
        }
      ],

      // Security
      "security/detect-object-injection": "warn",
      "security/detect-non-literal-fs-filename": "warn",

      // Code quality
      "sonarjs/no-duplicate-string": "warn",
      "sonarjs/no-identical-functions": "warn",

      // Unicorn rules
      "unicorn/filename-case": [
        "error",
        {
          "cases": {
            "camelCase": true,
            "pascalCase": true
          }
        }
      ],
      "unicorn/prevent-abbreviations": [
        "error",
        {
          "allowList": {
            "props": true,
            "Prop": true,
            "Props": true
          }
        }
      ],
      "unicorn/no-abusive-eslint-disable": "error",
      "unicorn/no-null": "warn",
      "unicorn/prefer-ternary": "warn",
      "unicorn/prefer-switch": "warn",
      "unicorn/no-array-push-push": "error",

      // Promises
      "promise/always-return": "warn",
      "promise/no-return-wrap": "error",
      "promise/param-names": "error",
      "promise/catch-or-return": "warn",
      "promise/no-nesting": "warn",
      "promise/no-new-statics": "error",
      "promise/no-return-in-finally": "warn",

      // RegExp
      "regexp/no-dupe-characters-character-class": "error",
      "regexp/no-empty-alternative": "error",
      "regexp/no-trivially-nested-assertion": "warn"
    }
  }
];
