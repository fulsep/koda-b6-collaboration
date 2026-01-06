import js from "@eslint/js"
import globals from "globals"
import { defineConfig } from "eslint/config"

export default defineConfig([
    { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.node } },
    {
        rules: {
            "semi": ["error", "never"],
            "indent": ["error", 4],
            "eqeqeq": "error",
            "camelcase": "error",
            "no-var": "error",
            "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
            "no-unassigned-vars": "error",
            "no-unreachable": "error",
            "no-unmodified-loop-condition": "error",
            "no-unreachable-loop": "error",
            "for-direction": "error",
            "no-constant-binary-expression": "error",
            "no-fallthrough": "error",
            "no-warning-comments": "warn"
        }
    }
])
