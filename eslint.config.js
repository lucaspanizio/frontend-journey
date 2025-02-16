import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['build/**/*', 'node_modules/*'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      react,
      prettier,
      '@typescript-eslint': typescriptEslint,
      import: importPlugin,
    },
    rules: {
      'prettier/prettier': ['error', { configFile: '.prettierrc.json' }],
      camelcase: 'off',
      'no-unused-vars': 'off',
      'import/default': 'off',
      'react/prop-types': 'off',
      'object-curly-newline': 'off',
      'no-prototype-builtins': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off',
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
        },
      },
    },
  },
];
