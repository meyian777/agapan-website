// eslint.config.mjs
import eslintPluginNext from "@next/eslint-plugin-next";

export default [
  {
    ignores: ["node_modules", ".next", "app/generated", "prisma"],
  },
  {
    plugins: {
      "@next/next": eslintPluginNext,
    },
    rules: {
      // 🚀 Reglas relajadas para que no bloquee el build
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];