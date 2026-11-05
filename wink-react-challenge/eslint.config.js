import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintConfigPrettier
    ],
    rules: {
      ...reactHooks.configs.recommended.rules,
      // 3주차(API 연동) 패턴: 요청을 다시 보낼 때마다 로딩 상태로 되돌리기 위해
      // effect 안에서 setStatus('loading')을 호출한다. 정상적인 데이터 페칭
      // 패턴이라 error 대신 warn으로 낮춘다.
      'react-hooks/set-state-in-effect': 'warn',
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
])