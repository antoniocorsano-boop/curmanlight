import js from '@eslint/js'

export default [
  {
    ignores: ['_handoff/**', '_published_snapshot/**', 'node_modules/**'],
  },
  js.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'no-useless-escape': 'off',
    },
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        vi: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        fetch: 'readonly',
        Blob: 'readonly',
        URL: 'readonly',
        self: 'readonly',
        caches: 'readonly',
      },
    },
  },
]
