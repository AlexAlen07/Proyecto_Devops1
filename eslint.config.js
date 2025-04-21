/** @type {import('eslint').Linter.Config} */
const config = {
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2020, // Permite usar ECMAScript 2020
    },
    globals: {
      // Define las globals que necesitas aquí
      window: 'readonly',
      document: 'readonly',
      console: 'readonly',
      // Agrega otras globals según sea necesario
    },
  },
  rules: {
    // Reglas personalizadas
    "no-console": "off", // Advierte sobre el uso de console.log
  },
};

export default config;