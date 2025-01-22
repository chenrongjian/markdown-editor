module.exports = {
  extends: [`@antfu`],
  rules: {
    'no-console': `off`,
    '@typescript-eslint/no-require-imports': `off`,
    '@typescript-eslint/no-var-requires': `off`,
    'n/prefer-global/process': `off`,
    'ts/no-require-imports': `off`,
    'ts/no-var-requires': `off`,
    'node/prefer-global/process': `off`,
    'jsonc/sort-keys': `off`,
    'import/no-commonjs': `off`,
    'import/no-named-as-default-member': `off`,
    'import/no-named-as-default': `off`,
  },
  ignorePatterns: [
    `**/dist/**`,
    `**/electron-dist/**`,
    `node_modules`,
    `.gitignore`,
    `.npmrc`,
    `*.bat`,
    `Dockerfile*`,
    `*.json`,
    `*.lock`,
    `*.md`,
    `LICENSE`,
  ],
  overrides: [
    {
      files: [`*.ts`],
      parserOptions: {
        sourceType: `module`,
        ecmaVersion: 2021,
      },
      rules: {
        'ts/no-require-imports': `off`,
        'ts/no-var-requires': `off`,
        'node/prefer-global/process': `off`,
        '@typescript-eslint/ban-ts-comment': `off`,
      },
    },
    {
      files: [`electron/**/*.ts`],
      rules: {
        'ts/no-require-imports': `off`,
        'ts/no-var-requires': `off`,
        'node/prefer-global/process': `off`,
        '@typescript-eslint/ban-ts-comment': `off`,
        'import/no-commonjs': `off`,
      },
    },
  ],
}
