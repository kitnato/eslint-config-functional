module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:json/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: [
    "build",
    "dist",
    "node_modules",
    "package-lock.json",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "json",
    "jsx-a11y",
    "prefer-arrow",
    "react",
    "react-hooks",
    "sort-destructure-keys",
    "sort-keys-fix",
    "unicorn",
  ],
  root: true,
  rules: {
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-definitions": [
      "error",
      "type",
    ],
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: {
          memberTypes: "never",
          order: "natural-case-insensitive",
        },
      },
    ],
    "@typescript-eslint/no-duplicate-type-constituents": "error",
    "@typescript-eslint/no-redundant-type-constituents": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/sort-type-constituents": "error",
    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      {
        allowNullableObject: false,
        allowNullableBoolean: true,
      },
    ],
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    curly: "error",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    eqeqeq: "error",
    "import/no-cycle": "error",
    "import/no-default-export": "error",
    "no-alert": "error",
    "no-console": [
      "warn",
      {
        allow: ["error", "warn"],
      },
    ],
    "no-duplicate-imports": "error",
    "no-implicit-coercion": "error",
    "no-restricted-syntax": [
      "error",
      {
        message: "Use functional expression instead.",
        selector: "ClassExpression",
      },
      {
        message: "Use functional declaration instead.",
        selector: "ClassDeclaration",
      },
      {
        message: "Use string union type instead.",
        selector: "TSEnumDeclaration",
      },
    ],
    "no-unused-expressions": ["error", { "enforceForJSX": true }],
    "object-shorthand": "error",
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        allowStandaloneDeclarations: true,
        classPropertiesAllowed: false,
        disallowPrototype: true,
        singleReturnOnly: true,
      },
    ],
    "prefer-arrow-callback": [
      "error",
      {
        allowUnboundThis: false,
      },
    ],
    quotes: ["error", "double", { "allowTemplateLiterals": false }],
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-sort-props": [
      "error",
      {
        ignoreCase: true,
      },
    ],
    "react-hooks/exhaustive-deps": "error",
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
      },
    ],
    "sort-destructure-keys/sort-destructure-keys": [
      "error",
      {
        caseSensitive: false,
      },
    ],
    "sort-keys-fix/sort-keys-fix": [
      "error",
      "asc",
      {
        caseSensitive: false,
        natural: true,
      },
    ],
    "unicorn/switch-case-braces": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: "detect",
    },
  },
};
