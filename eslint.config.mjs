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
      // Change unused variables from error to warning
      "@typescript-eslint/no-unused-vars": ["warn"],
      // Also add the regular no-unused-vars as warning (for JavaScript files)
      "no-unused-vars": ["warn"],
      // Set the no-require-imports rule to warning instead of error
      "@typescript-eslint/no-require-imports": ["warn"],
    },
  },
];

export default eslintConfig;
