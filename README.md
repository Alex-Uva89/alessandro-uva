# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

<!-- 
    npm create vite@latest my-cv -- --template react-ts
    cd my-cv
    npm install

## PROJECT STRUCTURE

alessandro-uva/
              ├── public/                  # => file statici
              │   └── favicon.ico          # => icona del sito
              ├── src/                     # => cartella sorgente applicazione
              │   ├── assets/              # =>  File statici come immagini, icone, e font che utilizzerai nei componenti.
              │   ├── components/          # => componenti react custom
              │   ├── pages/               # => pagine dell'app
              │   ├── styles/              # => css & themes styles
              │   ├── hooks/               # => custom hooks
              │   ├── App.css              # => Stili globali dell'applicazione
              │   ├── index.css            # => File per gli stili globali incluso in main.tsx
              │   ├── App.tsx              # => Componente principale dell'applicazione React.
              │   ├── main.tsx             # => Punto di ingresso dell'app React. Crea il componente nel DOM
              │   └── vite-env.d.ts        # => Render di TS per Vite
              ├── package.json
              ├── tsconfig.json


## TECNOLOGIE UTILIZZATE:

    REACT
    VITE
    https://icons8.it/ ICONS
 -->        
