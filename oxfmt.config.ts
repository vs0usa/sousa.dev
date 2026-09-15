import { defineConfig } from "oxfmt"

export default defineConfig({
  ignorePatterns: ["src/routeTree.gen.ts"],
  semi: false,
  sortImports: {
    newlinesBetween: false,
    groups: [
      "type-import",
      ["value-builtin", "value-external"],
      "type-internal",
      "value-internal",
      ["type-parent", "type-sibling", "type-index"],
      ["value-parent", "value-sibling", "value-index"],
      "unknown",
    ],
  },
})
