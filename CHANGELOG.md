# Changelog

## 0.2.0 — 2026-11-26.
- Added new function `isResponseResult`, which checks if provided argument is a result object.
- Moved ESLint and Jest configurations from `package.json` to separate files.
- Excluded test and development files from the npm package.
- Updated JSDoc definitions and added basic TypeScript type definitions for functions and ResultResponse type.
- Updated GitHub Actions to v6 and switched CI dependency installation to `npm ci`.
- Updated ESLint to v8, Airbnb's base configuration to v15, and eslint-plugin-import to v2.32.
- Updated Jest to v29.7.0.
- Node.js 10, 12, and 14 are no longer tested; compatibility is not guaranteed.
- CI tests Node.js 18, 20, 22, 24, and 26.