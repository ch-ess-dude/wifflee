import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                anniversary: resolve(__dirname, 'anniversary.html'),
                reaction: resolve(__dirname, 'reaction.html'),
                valentine: resolve(__dirname, 'valentine.html'),
            },
        },
    },
});
