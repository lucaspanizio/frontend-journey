import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

const generateAliases = (baseDir: string) => {
  const srcPath = path.resolve(__dirname, baseDir);
  const directories = fs
    .readdirSync(srcPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  return directories.reduce(
    (acc, dir) => {
      acc[`@${dir}`] = path.resolve(srcPath, dir);
      return acc;
    },
    { '@': srcPath } as Record<`@${string}`, string>,
  );
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: generateAliases('./src'),
  },
});
