import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const basePath = process.env.VERCEL ? '/' : '/MK-Nexus/';

export default defineConfig({
  base: basePath,
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173
  }
});
