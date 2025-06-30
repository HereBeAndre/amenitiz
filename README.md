# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

# Amenitiz Front-end Technical Challange 🚀

## Introduction

The task is to create a wiki of Chess Grandmasters as defined by Chess.com. We are open to different layouts and styles.

### What we are looking for:

- This exercise should be done in React with Typescript.
- We do not expect production-ready code. However, we do expect the candidate to point out sub-optimal compromises taken to complete the task

📖 Documentation for chess.com's API can be found here: https://www.chess.com/news/view/published-data-api#pubapi-endpoint-games-archive

## ♟️ Step 1: List the Grandmasters

Using the chess.com API, create a page that lists all the Grandmasters.

API endpoint: https://api.chess.com/pub/titled/GM

## ♟️ Step 2: Grandmaster profile page

Extend the page that you created for the previous step so that if you click on a listed grandmaster, it should take you to a profile page displaying the information from the player endpoint.

API endpoint for player: [https://api.chess.com/pub/player/{username}](https://api.chess.com/pub/player/john)

## ♟️ Step 3: Add Grandmaster summary

On the profile page for a grandmaster that you created in step 2, add a clock that displays the amount of time since they were last online. The time since the user was active should be displayed as HH:MM:SS, and it should update every second.
