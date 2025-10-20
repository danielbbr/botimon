import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    server: {
      port: parseInt(env.VITE_DEV_PORT) || 3000,
      proxy: {
        [env.VITE_API_PATH || '/api']: {
          target: env.VITE_API_BASE_URL || 'http://localhost:3001',
          changeOrigin: true
        }
      }
    }
  };
});