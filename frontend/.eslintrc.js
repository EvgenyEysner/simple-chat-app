module.exports = {
  extends: ['react-app', 'react-app/jest'],
  overrides: [
    {
      files: ['src/*', 'src/theme/*', '*.styles.tsx'],
      rules: {
        'sort-keys-fix/sort-keys-fix': 'off',
      },
    },
    {
      files: ['src/theme/*', '*.styles.tsx'],
      rules: {
        'prettier/prettier': ['warn', { quoteProps: 'as-needed' }],
      },
    },
  ],
  plugins: ['prettier', 'simple-import-sort', 'sort-keys-fix'],
  root: true,
  rules: {
    'arrow-body-style': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-else-return': 'error',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            importNames: ['Alert'],
            message:
              'Please use Alert from \'src/components/Alert/Alert\' instead.',
            name: '@material-ui/lab',
          },
          {
            importNames: ['Button'],
            message:
              'Please use Button from \'src/components/Button/Button\' instead.',
            name: '@material-ui/core',
          },
          {
            importNames: ['TextField'],
            message:
              'Please use TextField from \'src/components/TextField/TextField\' instead.',
            name: '@material-ui/core',
          },
        ],
        patterns: [
          '@material-ui/core/*',
          '!@material-ui/core/colors*',
          '!@material-ui/core/style*',
          '!@material-ui/core/utils*',
        ],
      },
    ],
    'prefer-template': 'error',
    'prettier/prettier': 'warn',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // External Packages.
          // Packages related to `react` and 'material-ui' come first then
          // packages that start with a letter or `@` followed by a letter.
          ['^react', '^@?react', '^material-ui', '^@?material-ui', '^@?\\w'],
          // Internal packages.
          [
            '^src/',
            '^src/types/',
            '^src/utils/',
            '^src/hooks/',
            '^src/services/',
            '^src/theme/',
            '^src/layouts/',
            '^src/views/',
            '^src/components/',
          ],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Assets and style imports.
          ['^\\$assets', '^.+\\.s?css$', '^.+\\.styles$'],
        ],
      },
    ],
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      { caseSensitive: false, natural: false },
    ],
  },
};
