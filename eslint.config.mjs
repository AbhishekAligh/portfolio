// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import stylistic from "@stylistic/eslint-plugin";

export default withNuxt([
  {
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@stylistic/quotes": ["error", "single"],
      "@stylistic/comma-dangle": ["error", "never"],
      "@stylistic/brace-style": ["error", "1tbs"],
      "@stylistic/semi": ["error", "never"],
    },
  },
]);
