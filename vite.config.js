import path from 'path'
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server: {
        hmr: {
            host: 'localhost',
        },
        watch: {
            usePolling: true,
        }
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    e2e: {
        setupNodeEvents(on) {
          on(
            'file:preprocessor',
            vitePreprocessor({
              configFile: path.resolve(__dirname, './vite.config.js'),
              mode: 'development',
            }),
          )
        },
      },
});
