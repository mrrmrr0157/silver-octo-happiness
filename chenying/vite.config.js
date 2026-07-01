import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/silver-octo-happiness/',
  plugins: [react()],
});
