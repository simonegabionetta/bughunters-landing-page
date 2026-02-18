import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/bughunters-landing-page/', 
  root: 'client', // Mantendo a pasta client como raiz
  plugins: [
    react(),       // JSX/TSX
    tailwindcss()  // Processa Tailwind
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
    },
  },
  server: {
    port: 5176,     // Porta que você quer usar
    host: true,     // Permite acesso via rede local
  },
  build: {
    outDir: '../dist', // Mantendo saída fora da pasta client
    emptyOutDir: true,
  },
});
