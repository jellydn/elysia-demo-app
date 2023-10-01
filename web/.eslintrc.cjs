module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["productsway/typescript", "plugin:svelte/recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"],
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    extraFileExtensions: [".svelte"],
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      // Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  rules: {},
};
