import js from "@eslint/js";
import eslintPluginNext from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["node_modules", ".next", "Next.js", "app/generated", "prisma"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        console: "readonly",
        React: "readonly",
        window: "readonly",
      },
    },
    plugins: {
      "@next/next": eslintPluginNext,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
