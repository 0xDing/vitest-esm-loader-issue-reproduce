# Reproduce the issue of esm loader of vitest with React new JSX transform

## Steps to reproduce

1. `yarn install`
2. `yarn test`
3. See error: `The argument 'path' must be a string or Uint8Array without null bytes. Received '\x00react/jsx-runtime'`
4. Set `registerNodeLoader` to `false` in `vite.config.ts`
5. `yarn test`
6. It works now

## Details

Some react packages such as `react-dnd` has required `react/jsx-runtime`. And, `@vitejs/plugin-react-refresh` will inject HMR code when `react/jsx-runtime` is imported. But vitest's esm loader doesn't resolve this edge case.

## How to debug

Run vscode debug task `Debug current Test File` with `./example.test.tsx` as the current file.

Add breakpoint in `node_modules/vitest/dist/loader.js` line 34.
