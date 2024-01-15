module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021, // Mudei para 2021 para corresponder ao "es2021" no código original.
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true, // Adicionado para corresponder ao "es2021" no código original.
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    'standard-with-typescript', // Adicionado para corresponder ao "standard-with-typescript" no código original.
    'plugin:react/recommended',
  ],
  plugins: ['react'], // Removi "simple-import-sort" e "prettier" porque já estão incluídos nas configurações estendidas.
  rules: {
    // Mantenha as regras adicionadas no código original.
    'prettier/prettier': ['error', {}, { userPrettierrc: true }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
