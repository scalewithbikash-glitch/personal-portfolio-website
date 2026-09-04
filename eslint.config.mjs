import nextPlugin from "@next/eslint-plugin-next";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

/**
 * Flat ESLint config, built natively rather than through
 * `FlatCompat.extends("next/core-web-vitals")`.
 *
 * eslint-config-next still ships its rules in the legacy eslintrc shape, and
 * running that through FlatCompat with the currently installed
 * eslint-plugin-react causes a circular-JSON crash in @eslint/eslintrc's
 * config validator (a known ecosystem incompatibility, not a project bug).
 * Composing the same three plugins directly — Next.js core-web-vitals,
 * typescript-eslint recommended, and react-hooks — gives equivalent coverage
 * without going through that broken translation layer.
 */
const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },
  ...tseslint.configs.recommended,
  {
    plugins: {
      "@next/next": nextPlugin,
      "react-hooks": reactHooks,
    },
    rules: {
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...reactHooks.configs["recommended-latest"].rules,
    },
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];

export default eslintConfig;
