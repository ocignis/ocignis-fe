/** @type {import("eslint").Linter.Config} */

module.exports = {
  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint', 'testing-library', '@tanstack/query', 'jest-dom', 'jest', 'import'],

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:storybook/recommended',
  ],

  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',

    'prefer-template': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'spaced-comment': 'error',
    'id-length': ['error', { min: 2, properties: 'never' }],

    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',

    'jest/valid-title': [
      'error',
      {
        mustMatch: {
          it: [/should.*when/u.source, "Test title must include 'should' and 'when'"],
        },
      },
    ],

    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },

  overrides: [
    {
      files: ['ProcessEnv.d.ts'],
      rules: {
        '@typescript-eslint/consistent-type-definitions': 'off',
      },
    },
    {
      files: ['src/**/*.stories.*', 'src/pages/**/*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],

  ignorePatterns: [
    '!.*',
    'node_modules',
    '.next',
    '.turbo',
    'dist',
    'compiled',
    'build-next-static',
    'build-storybook-static',
    // Files bellow are not git ignored. Eslint fix in the making https://github.com/eslint/eslint/issues/15010
    'api-types',
    'VersionInfo.ts',
    'next-env.d.ts',
  ],

  settings: {
    'import/resolver': {
      typescript: {
        // Glob pattern doesn't work as described - https://github.com/import-js/eslint-import-resolver-typescript#configuration
        // project: ['apps/*/tsconfig.json', 'packages/*/tsconfig.json'],
        project: ['apps/ocignis-app/tsconfig.json'],

        // Does work only when running through npm script, but not in VS code extension.
        // project: `${process.cwd()}/tsconfig.json`,
      },
    },
    react: {
      version: 'detect',
    },
  },
};
