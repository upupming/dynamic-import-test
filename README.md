# dynamic-import-test

Test for the ability to splitting chunks for dynamic import.

```bash
pnpm build:rollup

pnpm build:esbuild
pnpm build:esbuild:cjs
```

- esbuild cannot handle splitting when using cjs output format:

    ```bash
    ✘ [ERROR] Splitting currently only works with the "esm" format
    ```
