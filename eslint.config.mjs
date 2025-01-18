import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-console": "off",
      "no-debugger": "off",
      "no-alert": "off",
      "no-await-in-loop": "off",
      "no-return-assign": "off",
      "no-unsafe-finally": "off",
      "no-unused-expressions": "off",
      "no-useless-catch": "off",
      "no-useless-return": "off",
      "require-await": "off",
      "no-empty-function": "off",
      "no-empty-pattern": "off",
      "no-extra-semi": "off",
      "no-fallthrough": "off",
      "no-global-assign": "off",
      "no-implicit-globals": "off",
      "no-implied-eval": "off",
      "no-invalid-this": "off",
      "no-iterator": "off",
      "no-label-var": "off",
      "no-lone-blocks": "off",
      "no-loop-func": "off",
      "no-magic-numbers": "off",
      "no-multi-assign": "off",
      "no-multi-str": "off",
      "no-new": "off",
      "no-new-func": "off",
      "no-new-wrappers": "off",
      "no-octal-escape": "off",
      "no-param-reassign": "off",
      "no-proto": "off",
      "no-redeclare": "off",
      "no-restricted-globals": "off",
      "no-return-await": "off",
      "no-script-url": "off",
      "no-self-assign": "off",
      "no-self-compare": "off",
      "no-sequences": "off",
      "no-throw-literal": "off",
      "no-unmodified-loop-condition": "off",
      "no-unused-labels": "off",
      "no-useless-call": "off",
      "no-useless-concat": "off",
      "no-useless-escape": "off",
      "no-void": "off",
      "no-warning-comments": "off",
      "no-with": "off",
      "prefer-promise-reject-errors": "off",
      "require-unicode-regexp": "off",
      "wrap-iife": "off",
      "yoda": "off",
    },
  },
];

export default eslintConfig;
