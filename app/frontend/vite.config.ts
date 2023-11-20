import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
/// <reference types="vite-plugin-svgr/client" />
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), svgr()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.css.ts'],
  },
});
