import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettier from "eslint-plugin-astro";

export default [
  ...eslintPluginPrettier.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: [
      ".astro/**",
      "dist/**",
      "node_modules/**",
    ],
  },
  {
    rules: {},
  },
];
