module.exports = {
  importOrder: ["^@elysiajs/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["prettier-plugin-svelte", "@trivago/prettier-plugin-sort-imports"],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
