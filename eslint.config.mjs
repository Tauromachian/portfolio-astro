import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettier from "eslint-plugin-astro";

export default [
    ...eslintPluginPrettier.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    {
        rules: {
            // override/add rules settings here, such as:
            // "astro/no-set-html-directive": "error"
        },
    },
];

