module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  bracketSameLine: true,
  trailingComma: "all",
  printWidth: 80,
  arrowParens: "always",
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    "^react$",
    "",
    "<BUILTIN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@shared/.*$",
    "",
    "^@ManagerPortal/.*$",
    "",
    "^(?!.*[.](scss|jpg|svg)$)[./].*$", // relative imports
    "",
    ".(jpg|svg)$", // assets
    ".scss$", // styles
  ],
};
