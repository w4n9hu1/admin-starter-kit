## Admin Starter Kit

This is a starter template using the following stack:

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Meterial-UI](https://mui.com/material-ui/)

### Scaffolding Vite Project

`npm create vite@latest admin-starter-kit -- --template teact-ts`

### Install Tailwind CSS

1. Install Tailwind CSS

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
2. Configure template paths

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
3. Add the Tailwind directives to index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```