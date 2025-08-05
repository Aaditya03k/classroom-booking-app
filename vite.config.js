

import { defineConfig } from 'vite';
 import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/classroom-booking-app/', // 👈 Important for GitHub Pages
  plugins: [react()]
})
