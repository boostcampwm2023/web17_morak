module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'sort-exports'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
  },
  rules: {
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type', 'unknown'],
        pathGroups: [
          {
            pattern: '{react*, react*/**}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@assets/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@components/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@constants/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@hooks/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@pages/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@queries/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@services/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@stores/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@styles/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@types/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@utils/*',
            group: 'internal',
            position: 'after',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: [],
        warnOnUnassignedImports: true,
      },
    ],
    'sort-exports/sort-exports': ['error', { sortDir: 'asc' }],
  },
};
