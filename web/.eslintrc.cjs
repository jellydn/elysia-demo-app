module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["productsway/typescript", "plugin:svelte/recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"],
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.node.json"],
  },
  rules: {},
};
