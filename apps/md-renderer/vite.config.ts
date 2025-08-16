import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // .md 파일을 raw 텍스트로 import할 수 있도록 설정
  assetsInclude: ['**/*.md'],
});
