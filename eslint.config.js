import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import * as vueEslintParser from 'vue-eslint-parser'
import stylistic from '@stylistic/eslint-plugin'

export default [
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  { 
    languageOptions: { 
      globals: {
        ...globals.browser, ...globals.node
      },
      parser: vueEslintParser,
      parserOptions: {
        parser: tseslint.parser
      }
    },
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      'vue/multi-word-component-names': 0,
      '@stylistic/indent': ['error', 2]
    }
  }
];