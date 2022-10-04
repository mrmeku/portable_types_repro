# Repro non-portable types when using pnpm

To replicate the bug, run the following commands

```
pnpm install
./node_modules/.bin/tsc
```

which will generate the following output

```
./node_modules/.bin/tsc
index.ts:9:14 - error TS2742: The inferred type of 'slice' cannot be named without a reference to '.pnpm/immer@9.0.15/node_modules/immer/dist/internal'. This is likely not portable. A type annotation is necessary.

9 export const slice = createSlice({
               ~~~~~


Found 1 error in index.ts:9
```
